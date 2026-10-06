import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { ProductGrid } from "@/components/products/ProductGrid";
import { FinalCta } from "@/components/home/FinalCta";
import { individualProducts } from "@/data/products";

export const metadata: Metadata = {
  title: "Individuals & Families",
  description:
    "Explore auto, home, renters, condo, life, health, umbrella, flood, travel, and pet insurance with Coverivo.",
};

export default function IndividualsPage() {
  return (
    <>
      <PageHero
        eyebrow="Individuals & Families"
        title="Protection for What Matters Most."
        body="Coverivo helps you understand personal insurance options, request quotes, and review coverage with AI-assisted guidance and licensed insurance professionals. Coverivo is an independent insurance broker, not a carrier."
        primary={{ href: "/quote", label: "Get a Quote" }}
        secondary={{ href: "/ai-assistant", label: "Ask Coverivo AI" }}
      />
      <section className="section-pad bg-[#F3F7FC]">
        <Container>
          <ProductGrid products={individualProducts} />
        </Container>
      </section>
      <FinalCta />
    </>
  );
}
