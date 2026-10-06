"use client";

import { useState } from "react";
import type { CoverageCheckResult } from "@/lib/types";
import { Button } from "@/components/ui/Button";
import { Field } from "@/components/ui/Field";
import { AiDisclaimer } from "@/components/ai/AiDisclaimer";

export function CoverageCheckForm() {
  const [carrier, setCarrier] = useState("");
  const [policyType, setPolicyType] = useState("");
  const [notes, setNotes] = useState("");
  const [fileName, setFileName] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<CoverageCheckResult | null>(null);
  const [disclaimer, setDisclaimer] = useState("");

  async function submit() {
    setError("");
    if (!notes && !file && !carrier && !policyType) {
      setError("Upload a policy or enter policy information to continue.");
      return;
    }
    setPending(true);
    try {
      const form = new FormData();
      form.set(
        "notes",
        [carrier && `Carrier: ${carrier}`, policyType && `Policy type: ${policyType}`, notes]
          .filter(Boolean)
          .join("\n")
      );
      if (file) form.set("file", file);
      const response = await fetch("/api/coverage-check", { method: "POST", body: form });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Unable to analyze right now.");
      setResult(data.result);
      setDisclaimer(data.disclaimer);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to analyze right now.");
    } finally {
      setPending(false);
    }
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="surface-card p-6">
        <h2 className="text-xl font-semibold text-[#071B36]">Upload or enter policy details</h2>
        <div className="mt-5 space-y-4">
          <Field label="Carrier" name="carrier" value={carrier} onChange={setCarrier} />
          <Field label="Policy type" name="policyType" value={policyType} onChange={setPolicyType} />
          <Field
            label="Policy information"
            name="notes"
            type="textarea"
            value={notes}
            onChange={setNotes}
            placeholder="Effective dates, premium, limits, deductibles, or anything printed on the declarations page."
          />
          <div>
            <label htmlFor="policy-file" className="text-sm font-medium text-[#071B36]">
              Upload existing policy (PDF or image, max 8MB)
            </label>
            <input
              id="policy-file"
              type="file"
              accept=".pdf,.png,.jpg,.jpeg,.webp"
              className="mt-1.5 block min-h-12 w-full text-sm text-[#071B36] file:mr-3 file:rounded-full file:border-0 file:bg-[#1769FF] file:px-4 file:py-2.5 file:text-sm file:font-semibold file:text-white"
              onChange={(event) => {
                const next = event.target.files?.[0] || null;
                setFile(next);
                setFileName(next?.name || "");
              }}
            />
            {fileName ? <p className="mt-1 text-xs text-[#5b6b82]">{fileName}</p> : null}
          </div>
          <Button onClick={submit} disabled={pending}>
            {pending ? "Reviewing…" : "Check My Coverage"}
          </Button>
          {error ? (
            <p className="text-sm text-[#b42318]" role="alert">
              {error}
            </p>
          ) : null}
          <AiDisclaimer />
        </div>
      </div>
      <div className="surface-card p-6">
        {result ? (
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#1769FF]">AI summary</p>
            <h3 className="mt-2 text-2xl font-semibold text-[#071B36]">{result.policyType}</h3>
            <dl className="mt-5 grid gap-3 text-sm sm:grid-cols-2">
              <div>
                <dt className="text-[#5b6b82]">Carrier</dt>
                <dd className="font-medium text-[#071B36]">{result.carrier}</dd>
              </div>
              <div>
                <dt className="text-[#5b6b82]">Effective dates</dt>
                <dd className="font-medium text-[#071B36]">{result.effectiveDates}</dd>
              </div>
              <div>
                <dt className="text-[#5b6b82]">Premium</dt>
                <dd className="font-medium text-[#071B36]">{result.premium}</dd>
              </div>
              <div>
                <dt className="text-[#5b6b82]">Limits</dt>
                <dd className="font-medium text-[#071B36]">{result.limits}</dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-[#5b6b82]">Deductibles</dt>
                <dd className="font-medium text-[#071B36]">{result.deductibles}</dd>
              </div>
            </dl>
            <ResultList title="Key coverages" items={result.keyCoverages} />
            <ResultList title="Possible coverage gaps" items={result.possibleGaps} />
            <ResultList title="Possible duplicate coverage" items={result.possibleDuplicates} />
            <ResultList title="Possible bundling opportunities" items={result.bundlingOpportunities} />
            <p className="mt-5 text-sm leading-relaxed text-[#5b6b82]">{result.summary}</p>
            <p className="mt-4 text-xs leading-relaxed text-[#5b6b82]">{disclaimer}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/contact">
                Talk to a Coverivo Advisor
              </Button>
              <Button href="/quote" variant="light">
                Request a quote
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex h-full min-h-72 flex-col justify-center text-[#5b6b82]">
            <p className="text-sm leading-relaxed">
              Coverivo AI will summarize carrier, policy type, effective dates, premium, limits, deductibles,
              key coverages, possible gaps, possible duplicates, and bundling ideas.
            </p>
            <p className="mt-4 text-sm">
              AI results should be reviewed against the actual policy and discussed with a Coverivo insurance
              professional.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function ResultList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="mt-5">
      <h4 className="text-sm font-semibold text-[#071B36]">{title}</h4>
      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-[#5b6b82]">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
