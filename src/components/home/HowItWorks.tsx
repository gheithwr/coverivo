import { Container, SectionHeading } from "@/components/ui/Container";

const steps = [
  {
    step: "01",
    title: "Tell us what you need.",
    body: "Choose a coverage type, answer a few questions, or simply talk to Coverivo AI.",
  },
  {
    step: "02",
    title: "We organize the details.",
    body: "Our technology helps structure your information so your needs are easier to understand.",
  },
  {
    step: "03",
    title: "Explore available options.",
    body: "Where applicable, Coverivo works with available insurance markets based on your location, risk profile, and coverage needs.",
  },
  {
    step: "04",
    title: "Compare what matters.",
    body: "Understand more than price: premium, coverage limits, deductibles, important differences, and available features.",
  },
  {
    step: "05",
    title: "Finish with human support.",
    body: "A Coverivo professional helps coordinate next steps and policy placement when appropriate.",
  },
];

export function HowItWorks({ compact = false }: { compact?: boolean }) {
  return (
    <section className={compact ? "py-0" : "section-pad bg-[#F3F7FC]"}>
      <Container>
        <SectionHeading eyebrow="How Coverivo works" title="Insurance without the runaround." />
        <ol className="mt-10 grid gap-4 md:grid-cols-5">
          {steps.map((item, index) => (
            <li key={item.step} className="surface-card p-5">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0B7F73]">Step {item.step}</span>
              <div className="mt-3 h-1 overflow-hidden rounded-full bg-[#e2eaf4]">
                <div className="h-full rounded-full bg-[#1769FF]" style={{ width: `${((index + 1) / steps.length) * 100}%` }} />
              </div>
              <h3 className="mt-3 text-base font-semibold text-[#071B36]">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5b6b82]">{item.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
