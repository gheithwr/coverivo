"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { quoteTypes } from "@/data/quotes";
import { usStates } from "@/config/site";
import { fieldsForType } from "@/lib/quote-flow";
import { isQuoteType } from "@/lib/quote-types";
import type { QuoteType } from "@/lib/types";
import { Button } from "@/components/ui/Button";
import { Field } from "@/components/ui/Field";
import { isValidEmail, isValidZip } from "@/lib/utils";
import { coverageLabel, fieldLabel } from "@/lib/status";

const contactDefaults = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  zip: "",
  state: "",
  preferredContact: "email",
  existingInsurance: "",
  currentCarrier: "",
  desiredEffectiveDate: "",
  consentToContact: false,
};

const labels = ["Coverage", "About You", "Details", "Review", "Connect"];
const STORAGE_KEY = "coverivo-quote-draft";

export function QuoteWizard({ initialType }: { initialType?: string }) {
  const router = useRouter();
  const [step, setStep] = useState(isQuoteType(initialType) ? 1 : 0);
  const [type, setType] = useState<QuoteType | "">(isQuoteType(initialType) ? initialType : "");
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [contact, setContact] = useState(contactDefaults);
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);
  const [confirmation, setConfirmation] = useState<{ id: string; message: string; email?: string } | null>(null);

  const dynamicFields = useMemo(() => (type ? fieldsForType(type) : []), [type]);
  const totalSteps = 5;

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      const draft = raw
        ? (JSON.parse(raw) as { type?: string; answers?: Record<string, string>; contact?: typeof contactDefaults; step?: number })
        : null;
      if (draft?.contact) setContact({ ...contactDefaults, ...draft.contact, consentToContact: false });

      if (isQuoteType(initialType)) {
        setType(initialType);
        setStep(1);
        setError("");
        setConfirmation(null);
        setAnswers(draft?.type === initialType && draft.answers ? draft.answers : {});
        return;
      }

      if (isQuoteType(draft?.type)) setType(draft.type);
      if (draft?.answers) setAnswers(draft.answers);
      if (typeof draft?.step === "number") setStep(Math.min(draft.step, 3));
    } catch {
      return;
    }
  }, [initialType]);

  function persist(nextStep = step, nextType = type, nextAnswers = answers) {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ type: nextType, answers: nextAnswers, contact: { ...contact, consentToContact: false }, step: nextStep })
    );
  }

  function go(next: number) {
    setError("");
    setStep(next);
    persist(next);
  }

  function nextFromType() {
    if (!type) {
      setError("Please choose what you would like to insure.");
      return;
    }
    go(1);
  }

  function nextFromAbout() {
    if (!contact.firstName || !contact.lastName) {
      setError("Please enter your first and last name.");
      return;
    }
    if (!isValidZip(contact.zip) || !contact.state) {
      setError("Please enter a valid ZIP code and state.");
      return;
    }
    go(2);
  }

  function nextFromDetails() {
    const missing = dynamicFields.find((field) => field.required && !answers[field.name]?.trim());
    if (missing) {
      setError(`Please complete: ${missing.label}`);
      return;
    }
    go(3);
  }

  async function submit() {
    if (!isValidEmail(contact.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!contact.phone) {
      setError("Please enter a phone number.");
      return;
    }
    if (!contact.consentToContact) {
      setError("Consent to contact is required.");
      return;
    }
    if (password.length < 8) {
      setError("Create a portal password of at least 8 characters.");
      return;
    }
    if (password !== passwordConfirm) {
      setError("Password confirmation does not match.");
      return;
    }
    setError("");
    setPending(true);
    try {
      const response = await fetch("/api/quotes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...contact, type, answers, password }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Unable to submit.");
      window.localStorage.removeItem(STORAGE_KEY);
      setConfirmation({ id: data.id, message: data.message, email: contact.email });
      router.replace("/quote");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to submit.");
    } finally {
      setPending(false);
    }
  }

  if (confirmation) {
    return (
      <div className="surface-card p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#1769FF]">Request received</p>
        <h2 className="mt-3 text-2xl font-semibold text-[#071B36]">Thank you. A specialist will review this.</h2>
        <p className="mt-3 text-sm leading-relaxed text-[#5b6b82]">{confirmation.message}</p>
        <p className="mt-2 text-sm text-[#5b6b82]">Reference: {confirmation.id}</p>
        {confirmation.email ? (
          <p className="mt-2 text-sm text-[#5b6b82]">
            Sign in with {confirmation.email} and the password you created to check status.
          </p>
        ) : null}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button href="/dashboard" fullWidth className="sm:w-auto">
            View my applications
          </Button>
          <Button
            variant="light"
            fullWidth
            className="sm:w-auto"
            onClick={() => {
              setConfirmation(null);
              setType("");
              setAnswers({});
              setPassword("");
              setPasswordConfirm("");
              setError("");
              setContact((current) => ({ ...current, consentToContact: false }));
              setStep(0);
            }}
          >
            Apply for something else
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="surface-card p-4 sm:p-8">
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#1769FF]">
          Step {step + 1} of {totalSteps} · {labels[step]}
        </p>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-[#e2eaf4]">
          <div
            className="h-full rounded-full bg-[#1769FF] transition-all duration-300"
            style={{ width: `${((step + 1) / totalSteps) * 100}%` }}
          />
        </div>
        <ol className="mt-3 hidden gap-2 text-[11px] font-medium text-[#5b6b82] sm:grid sm:grid-cols-5">
          {labels.map((label, index) => (
            <li key={label} className={index === step ? "text-[#1769FF]" : undefined}>
              {index + 1} — {label}
            </li>
          ))}
        </ol>
      </div>

      {step === 0 ? (
        <div>
          <h2 className="text-2xl font-semibold text-[#071B36]">What would you like to insure?</h2>
          <p className="mt-2 text-sm text-[#5b6b82]">We will only ask questions that match this coverage type.</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {quoteTypes.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setType(item.id);
                  setAnswers({});
                  setError("");
                  setStep(1);
                  persist(1, item.id, {});
                }}
                className={`min-h-16 rounded-2xl border px-4 py-4 text-left cursor-pointer ${
                  type === item.id
                    ? "border-[#1769FF] bg-[#F3F7FC]"
                    : "border-[#e2eaf4] bg-white hover:border-[#1769FF]/40"
                }`}
              >
                <span className="block text-sm font-semibold text-[#071B36]">{item.label}</span>
                <span className="mt-1 block text-xs text-[#5b6b82]">{item.description}</span>
              </button>
            ))}
          </div>
          <div className="mt-6 hidden flex-wrap gap-3 sm:flex">
            <Button onClick={nextFromType}>Continue</Button>
            <Button href="/ai-assistant" variant="light">
              Ask Coverivo AI
            </Button>
          </div>
          <p className="mt-4 text-sm text-[#5b6b82] sm:hidden">Tap a coverage type to continue on your phone.</p>
        </div>
      ) : null}

      {step === 1 ? (
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#071B36]">A little about you</h2>
          <p className="text-sm text-[#5b6b82]">We start with basics so later questions stay relevant.</p>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field
              label="First name"
              name="firstName"
              required
              autoComplete="given-name"
              value={contact.firstName}
              onChange={(value) => setContact((c) => ({ ...c, firstName: value }))}
            />
            <Field
              label="Last name"
              name="lastName"
              required
              autoComplete="family-name"
              value={contact.lastName}
              onChange={(value) => setContact((c) => ({ ...c, lastName: value }))}
            />
              <Field
                label="ZIP code"
                name="zip"
                required
                autoComplete="postal-code"
                inputMode="numeric"
                enterKeyHint="next"
                value={contact.zip}
                onChange={(value) => setContact((c) => ({ ...c, zip: value }))}
              />
            <Field
              label="State"
              name="state"
              type="select"
              required
              value={contact.state}
              onChange={(value) => setContact((c) => ({ ...c, state: value }))}
              options={usStates.map((state) => ({ value: state.code, label: state.name }))}
            />
          </div>
          <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap sm:items-center">
            <Button onClick={nextFromAbout} fullWidth className="sm:w-auto">
              Continue
            </Button>
            <Button variant="light" onClick={() => go(0)} fullWidth className="sm:w-auto">
              Back
            </Button>
            <button type="button" className="text-sm font-medium text-[#1769FF] cursor-pointer" onClick={() => persist(1)}>
              Save & continue later
            </button>
          </div>
        </div>
      ) : null}

      {step === 2 ? (
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#071B36]">A few details for {coverageLabel(type)}</h2>
          {dynamicFields.map((field) => (
            <Field
              key={field.name}
              label={field.label}
              name={field.name}
              type={field.type}
              required={field.required}
              placeholder={field.placeholder}
              options={field.options}
              help={field.help}
              value={answers[field.name] || ""}
              onChange={(value) => setAnswers((current) => ({ ...current, [field.name]: value }))}
            />
          ))}
          <div className="rounded-2xl bg-[#F3F7FC] p-4 text-sm text-[#5b6b82]">
            Need help answering these?{" "}
            <Link href="/ai-assistant" className="font-semibold text-[#1769FF]">
              Ask Coverivo AI
            </Link>
          </div>
          <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap sm:items-center">
            <Button onClick={nextFromDetails} fullWidth className="sm:w-auto">
              Continue
            </Button>
            <Button variant="light" onClick={() => go(1)} fullWidth className="sm:w-auto">
              Back
            </Button>
            <button type="button" className="text-sm font-medium text-[#1769FF] cursor-pointer" onClick={() => persist(2)}>
              Save & continue later
            </button>
          </div>
        </div>
      ) : null}

      {step === 3 ? (
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#071B36]">Review before we connect</h2>
          <dl className="grid gap-3 rounded-2xl bg-[#F8FAFC] p-5 text-sm">
            <div>
              <dt className="text-[#5b6b82]">Coverage</dt>
              <dd className="font-medium text-[#071B36]">{coverageLabel(type)}</dd>
            </div>
            <div>
              <dt className="text-[#5b6b82]">Name</dt>
              <dd className="font-medium text-[#071B36]">
                {contact.firstName} {contact.lastName}
              </dd>
            </div>
            <div>
              <dt className="text-[#5b6b82]">Location</dt>
              <dd className="font-medium text-[#071B36]">
                {contact.zip} · {contact.state}
              </dd>
            </div>
            {Object.entries(answers).map(([key, value]) =>
              value ? (
                <div key={key}>
                  <dt className="text-[#5b6b82]">{fieldLabel(key)}</dt>
                  <dd className="font-medium text-[#071B36]">{value}</dd>
                </div>
              ) : null
            )}
          </dl>
          <p className="text-xs text-[#5b6b82]">
            Submitting does not bind coverage or guarantee pricing, eligibility, or approval.
          </p>
          <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
            <Button onClick={() => go(4)} fullWidth className="sm:w-auto">
              Looks right — continue
            </Button>
            <Button variant="light" onClick={() => go(2)} fullWidth className="sm:w-auto">
              Back
            </Button>
          </div>
        </div>
      ) : null}

      {step === 4 ? (
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#071B36]">How should Coverivo reach you?</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field
              label="Email"
              name="email"
              type="email"
              required
              autoComplete="email"
              inputMode="email"
              enterKeyHint="next"
              value={contact.email}
              onChange={(value) => setContact((c) => ({ ...c, email: value }))}
            />
            <Field
              label="Phone"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              inputMode="tel"
              enterKeyHint="next"
              value={contact.phone}
              onChange={(value) => setContact((c) => ({ ...c, phone: value }))}
            />
            <Field
              label="Preferred contact method"
              name="preferredContact"
              type="select"
              required
              value={contact.preferredContact}
              onChange={(value) => setContact((c) => ({ ...c, preferredContact: value }))}
              options={[
                { value: "email", label: "Email" },
                { value: "phone", label: "Phone" },
                { value: "text", label: "Text" },
                { value: "video", label: "Video" },
              ]}
            />
            <Field
              label="Existing insurance"
              name="existingInsurance"
              type="select"
              value={contact.existingInsurance}
              onChange={(value) => setContact((c) => ({ ...c, existingInsurance: value }))}
              options={[
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
                { value: "unsure", label: "Not sure" },
              ]}
            />
            <Field
              label="Current carrier"
              name="currentCarrier"
              value={contact.currentCarrier}
              onChange={(value) => setContact((c) => ({ ...c, currentCarrier: value }))}
            />
            <Field
              label="Desired effective date"
              name="desiredEffectiveDate"
              type="date"
              value={contact.desiredEffectiveDate}
              onChange={(value) => setContact((c) => ({ ...c, desiredEffectiveDate: value }))}
            />
            <Field
              label="Portal password"
              name="password"
              type="password"
              required
              autoComplete="new-password"
              value={password}
              onChange={setPassword}
              help="This email is your user ID. Use this password later to check status. If you already applied, enter the same password."
            />
            <Field
              label="Confirm password"
              name="passwordConfirm"
              type="password"
              required
              autoComplete="new-password"
              value={passwordConfirm}
              onChange={setPasswordConfirm}
            />
          </div>
          <label className="flex min-h-11 items-start gap-3 text-sm text-[#071B36]">
            <input
              type="checkbox"
              checked={contact.consentToContact}
              onChange={(event) => setContact((c) => ({ ...c, consentToContact: event.target.checked }))}
              className="mt-1 h-5 w-5 shrink-0"
              required
            />
            I consent to Coverivo contacting me about this quote request by my preferred method. This is not a
            request to bind coverage.
          </label>
          <p className="text-xs text-[#5b6b82]">
            Your information deserves protection too. Submitting this form sends details to Coverivo for review.{" "}
            <Link href="/privacy" className="underline">
              Privacy Policy
            </Link>
          </p>
          <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
            <Button onClick={submit} disabled={pending} fullWidth className="sm:w-auto">
              {pending ? "Submitting…" : "Submit quote request"}
            </Button>
            <Button variant="light" onClick={() => go(3)} fullWidth className="sm:w-auto">
              Back
            </Button>
            <Button href="/contact" variant="light" fullWidth className="sm:w-auto">
              Talk to a Professional
            </Button>
          </div>
        </div>
      ) : null}

      {error ? (
        <p className="mt-4 text-sm text-[#b42318]" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
