import { sampleComparisons } from "@/data/quotes";
import { Button } from "@/components/ui/Button";

export function ComparisonTable() {
  return (
    <div className="overflow-x-auto">
      <div className="grid min-w-[960px] grid-cols-4 gap-4">
        {sampleComparisons.map((option) => (
          <article key={option.id} className="surface-card flex flex-col p-5">
            <span className="inline-flex w-fit rounded-full bg-[#1769FF] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-white">
              {option.label}
            </span>
            <h3 className="mt-4 text-lg font-semibold text-[#071B36]">{option.carrier}</h3>
            <p className="text-sm text-[#5b6b82]">{option.plan}</p>
            <p className="mt-4 text-2xl font-semibold text-[#071B36]">{option.premium}</p>
            <dl className="mt-4 space-y-2 text-sm">
              <div>
                <dt className="text-[#5b6b82]">Deductible</dt>
                <dd className="font-medium text-[#071B36]">{option.deductible}</dd>
              </div>
              <div>
                <dt className="text-[#5b6b82]">Coverage limits</dt>
                <dd className="font-medium text-[#071B36]">{option.limits}</dd>
              </div>
            </dl>
            <Section title="Major benefits" items={option.benefits} />
            <Section title="Important exclusions" items={option.exclusions} />
            <Section title="Optional coverages" items={option.optionalCoverages} />
            <p className="mt-4 text-xs leading-relaxed text-[#5b6b82]">
              <span className="font-semibold text-[#071B36]">Broker notes. </span>
              {option.brokerNotes}
            </p>
            <p className="mt-3 text-xs leading-relaxed text-[#5b6b82]">
              <span className="font-semibold text-[#071B36]">AI summary. </span>
              {option.aiSummary}
            </p>
            <div className="mt-auto flex flex-col gap-2 pt-5">
              <Button href="/contact" fullWidth>
                Talk to a Coverivo Advisor
              </Button>
              <Button href="/quote" variant="light" fullWidth>
                Request This Option
              </Button>
            </div>
          </article>
        ))}
      </div>
      <p className="mt-6 max-w-3xl text-xs leading-relaxed text-[#5b6b82]">
        This comparison is an educational illustration. Labels such as Best Value, Higher Protection, Lower
        Premium, and Balanced Coverage are discussion aids. They are not offers, binders, or guarantees of
        pricing, eligibility, or approval. Availability varies by state and carrier.
      </p>
    </div>
  );
}

function Section({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="mt-4">
      <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-[#1769FF]">{title}</h4>
      <ul className="mt-2 space-y-1 text-sm text-[#5b6b82]">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
