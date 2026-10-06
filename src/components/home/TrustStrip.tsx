import { Container } from "@/components/ui/Container";

const points = [
  {
    title: "Independent Insurance Broker",
    body: "Coverivo is an insurance broker. Access available insurance markets instead of being limited to one carrier.",
  },
  {
    title: "AI-Powered Guidance",
    body: "Technology helps organize information, explain coverage, and simplify the process.",
  },
  {
    title: "Licensed Insurance Professionals",
    body: "Coverivo is staffed by licensed insurance professionals for advice, placement, and judgment.",
  },
  {
    title: "Secure by Design",
    body: "Customer information should be handled using modern security and privacy practices.",
  },
  {
    title: "Support Beyond the Sale",
    body: "Coverage questions don't stop after purchasing a policy.",
  },
];

export function TrustStrip() {
  return (
    <section className="section-pad bg-[#F3F7FC]">
      <Container>
        <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-[#071B36] sm:text-4xl">
          Insurance technology should make things clearer — not more complicated.
        </h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {points.map((point) => (
            <article key={point.title} className="rounded-3xl bg-white p-5">
              <h3 className="text-base font-semibold text-[#071B36]">{point.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5b6b82]">{point.body}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
