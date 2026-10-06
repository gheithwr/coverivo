import { Container, SectionHeading } from "@/components/ui/Container";

const cards = [
  {
    title: "Independent Choice",
    body: "We help you explore applicable options instead of limiting you to a single insurance company.",
  },
  {
    title: "Smarter Guidance",
    body: "AI helps simplify complex insurance information and organize what matters.",
  },
  {
    title: "Licensed Insurance Professionals",
    body: "Coverivo is staffed by licensed insurance professionals for recommendations, placement, and coverage decisions.",
  },
  {
    title: "One Broker Relationship",
    body: "Personal insurance, business insurance, and employee benefits with one insurance broker.",
  },
  {
    title: "Digital Convenience",
    body: "Start online, continue with an advisor, and avoid repeating your story.",
  },
  {
    title: "Long-Term Support",
    body: "We're here for coverage questions, policy changes, renewals, and evolving insurance needs.",
  },
];

export function WhyCoverivo() {
  return (
    <section className="section-pad bg-white">
      <Container>
        <SectionHeading
          eyebrow="Why Coverivo"
          title="A better way to navigate insurance."
          body="Insurance is complicated. Coverivo makes navigating it easier — without pretending AI can bind a policy."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((item) => (
            <article key={item.title} className="surface-card p-6">
              <h3 className="text-lg font-semibold text-[#071B36]">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#5b6b82]">{item.body}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
