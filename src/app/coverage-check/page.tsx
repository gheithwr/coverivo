import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { CoverageCheckForm } from "@/components/coverage/CoverageCheckForm";

export const metadata: Metadata = {
  title: "AI Coverage Check",
  description:
    "Upload a policy or enter details. Coverivo AI summarizes carrier, dates, premium, limits, deductibles, possible gaps, and bundling ideas.",
};

export default function CoverageCheckPage() {
  return (
    <>
      <PageHero
        compact
        eyebrow="AI Coverage Check"
        title="See a clearer picture of the coverage you already have."
        body="Upload an existing policy or enter key information. Coverivo AI prepares a structured summary for you to review with a Coverivo insurance professional."
        primary={{ href: "/quote", label: "Get a Quote" }}
        secondary={{ href: "/ai-assistant", label: "Ask Coverivo AI" }}
      />
      <section className="bg-[#F3F7FC] py-6 sm:py-24">
        <Container>
          <CoverageCheckForm />
        </Container>
      </section>
    </>
  );
}
