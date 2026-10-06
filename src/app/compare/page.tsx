import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { ComparisonTable } from "@/components/quote/ComparisonTable";

export const metadata: Metadata = {
  title: "Compare Coverage Options",
  description:
    "Review sample Coverivo quote comparisons including carrier, premium, deductibles, limits, benefits, exclusions, broker notes, and AI summaries.",
};

export default function ComparePage() {
  return (
    <>
      <PageHero
        eyebrow="Quote comparison"
        title="Compare coverage, not just the monthly number."
        body="This illustration shows how Coverivo presents options: carrier, plan, premium, deductible, limits, benefits, exclusions, optional coverages, broker notes, and an AI summary."
        primary={{ href: "/quote", label: "Request This Option" }}
        secondary={{ href: "/contact", label: "Talk to a Coverivo Advisor" }}
      />
      <section className="section-pad bg-[#F3F7FC]">
        <Container>
          <ComparisonTable />
        </Container>
      </section>
    </>
  );
}
