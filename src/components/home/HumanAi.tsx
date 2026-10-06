import { Container } from "@/components/ui/Container";

const aiItems = [
  "Insurance education",
  "Guided intake",
  "Document organization",
  "Policy summaries",
  "Coverage explanations",
  "Quote preparation",
  "Comparisons",
  "Frequently asked questions",
  "24/7 initial guidance",
];

const humanItems = [
  "Coverage recommendations",
  "Complex insurance situations",
  "Carrier coordination",
  "Policy placement",
  "Coverage questions",
  "Renewals",
  "Claims guidance",
  "Business risk conversations",
  "Employee benefits strategy",
];

export function HumanAi() {
  return (
    <section className="section-pad bg-white">
      <Container>
        <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-[#071B36] sm:text-4xl">
          Technology where it&apos;s faster.
          <br />
          People where it matters.
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="surface-card p-6">
            <h3 className="text-lg font-semibold text-[#1769FF]">Coverivo AI</h3>
            <p className="mt-2 text-sm text-[#5b6b82]">Can assist with:</p>
            <ul className="mt-4 space-y-2 text-sm text-[#5b6b82]">
              {aiItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="surface-card p-6">
            <h3 className="text-lg font-semibold text-[#071B36]">Licensed insurance professionals</h3>
            <p className="mt-2 text-sm text-[#5b6b82]">Help with:</p>
            <ul className="mt-4 space-y-2 text-sm text-[#5b6b82]">
              {humanItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-8 text-base font-medium text-[#071B36]">
          AI doesn&apos;t replace Coverivo&apos;s licensed insurance professionals. It helps them serve you better.
        </p>
      </Container>
    </section>
  );
}
