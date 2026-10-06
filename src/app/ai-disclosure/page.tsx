import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";
import { aiModules } from "@/lib/ai/capabilities";

export const metadata: Metadata = {
  title: "AI Disclosure",
  description: "How Coverivo AI works, what it cannot do, and when conversations escalate to a licensed professional.",
};

export default function AiDisclosurePage() {
  return (
    <>
      <PageHero
        eyebrow="AI disclosure"
        title="Coverivo AI is guidance, not a binder."
        body={siteConfig.aiDisclaimer}
      />
      <section className="section-pad bg-white">
        <Container className="max-w-3xl space-y-8 text-sm leading-relaxed text-[#5b6b82]">
          <div>
            <h2 className="text-xl font-semibold text-[#071B36]">Capabilities</h2>
            <ul className="mt-4 space-y-3">
              {aiModules.map((module) => (
                <li key={module.id}>
                  <span className="font-medium text-[#071B36]">{module.name}. </span>
                  {module.purpose} Coverivo AI cannot bind coverage.
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-[#071B36]">Escalation</h2>
            <p className="mt-3">
              Conversations escalate to a human when you want to purchase or bind coverage, licensing is required,
              legal interpretation is needed, the AI is uncertain, sensitive underwriting issues arise, or you ask
              for a person.
            </p>
          </div>
          <p>{siteConfig.brokerageDisclaimer}</p>
        </Container>
      </section>
    </>
  );
}
