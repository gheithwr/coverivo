import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { AiDisclaimer } from "@/components/ai/AiDisclaimer";
import { AiAssistantClient } from "@/components/ai/AiAssistantClient";
import { aiModules } from "@/lib/ai/capabilities";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Coverivo AI Insurance Assistant",
  description:
    "Talk with Coverivo AI to understand insurance options, prepare a quote, review a policy, or connect with a Coverivo specialist.",
};

export default function AiAssistantPage() {
  return (
    <>
      <PageHero
        compact
        eyebrow="Coverivo AI"
        title="Your AI Insurance Assistant"
        body="Ask questions, start a quote, or review coverage in a guided conversation. Coverivo AI never binds coverage. Licensed professionals stay available when a decision needs a person."
        primary={{ href: "/quote", label: "Get a Quote" }}
        secondary={{ href: "/contact", label: "Talk to a specialist" }}
      />
      <section className="bg-white py-6 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <AiAssistantClient />
          <AiDisclaimer className="lg:hidden" />
          <aside className="hidden space-y-6 lg:block">
            <div className="surface-card p-6">
              <h2 className="text-lg font-semibold text-[#071B36]">What Coverivo AI can do</h2>
              <ul className="mt-4 space-y-3 text-sm text-[#5b6b82]">
                {aiModules
                  .filter((module) => module.id !== "broker-copilot")
                  .map((module) => (
                    <li key={module.id}>
                      <span className="font-medium text-[#071B36]">{module.name}. </span>
                      {module.purpose}
                    </li>
                  ))}
              </ul>
            </div>
            <div className="surface-card p-6">
              <h2 className="text-lg font-semibold text-[#071B36]">When we bring in a person</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[#5b6b82]">
                <li>You want to purchase or bind coverage</li>
                <li>Licensing or placement work is required</li>
                <li>Legal interpretation is needed</li>
                <li>The AI is uncertain</li>
                <li>Sensitive underwriting issues arise</li>
                <li>You ask to speak with someone</li>
              </ul>
              <AiDisclaimer className="mt-5" />
            </div>
            <p className="text-xs text-[#5b6b82]">{siteConfig.brokerageDisclaimer}</p>
          </aside>
        </Container>
      </section>
    </>
  );
}
