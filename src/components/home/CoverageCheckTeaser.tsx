import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const extracted = [
  "Carrier",
  "Policy Type",
  "Effective Dates",
  "Premium",
  "Coverage Limits",
  "Deductibles",
  "Endorsements",
  "Potential Coverage Questions",
  "Possible Duplicate Coverage",
  "Potential Bundling Opportunities",
];

export function CoverageCheckTeaser() {
  return (
    <section className="section-pad bg-[#F8FAFC]">
      <Container className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1769FF]">Already have insurance?</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#071B36] sm:text-4xl">
            Know what you&apos;re covered for — before you need it.
          </h2>
          <p className="mt-4 max-w-xl text-[#5b6b82]">
            Upload your existing insurance documents and let Coverivo help organize the important details.
          </p>
          <div className="mt-8">
            <Button href="/coverage-check">Review My Coverage</Button>
          </div>
          <p className="mt-4 max-w-xl text-xs text-[#5b6b82]">
            AI-generated analysis is informational and should be reviewed with an insurance professional.
          </p>
        </div>
        <div className="surface-card p-6">
          <div className="rounded-2xl border border-dashed border-[#1769FF]/30 bg-[#F3F7FC] px-6 py-10 text-center">
            <p className="font-semibold text-[#071B36]">Drag your insurance policy here</p>
            <p className="mt-2 text-sm text-[#5b6b82]">or</p>
            <p className="mt-2 text-sm font-semibold text-[#1769FF]">Upload Policy</p>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {extracted.map((item) => (
              <span key={item} className="rounded-full bg-[#F3F7FC] px-3 py-1.5 text-xs font-medium text-[#0B376D]">
                {item}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
