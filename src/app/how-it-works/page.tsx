import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { HowItWorks } from "@/components/home/HowItWorks";
import { HumanAi } from "@/components/home/HumanAi";
import { FinalCta } from "@/components/home/FinalCta";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "See how Coverivo combines AI intake with licensed insurance professionals across five clear steps.",
};

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="How Coverivo works"
        title="Start digitally. Finish with a professional."
        body="Coverivo AI organizes questions, documents, and comparisons. Licensed Coverivo professionals handle recommendations, placement, and anything that should not be automated."
        primary={{ href: "/quote", label: "Get a Quote" }}
        secondary={{ href: "/ai-assistant", label: "Ask Coverivo AI" }}
      />
      <section className="section-pad bg-white">
        <HowItWorks compact />
      </section>
      <HumanAi />
      <section className="pb-20">
        <Container>
          <div className="surface-card p-8">
            <h2 className="text-2xl font-semibold text-[#071B36]">Ready for CRM, markets, and e-signature</h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#5b6b82]">
              Quote intake, coverage checks, and conversations are structured so they can connect to a CRM,
              agency management system, comparative rater, document storage, calendar, and e-signature tools.
              Those connections use environment variables and are not hard-coded.
            </p>
          </div>
        </Container>
      </section>
      <FinalCta />
    </>
  );
}
