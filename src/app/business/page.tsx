import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { ProductGrid } from "@/components/products/ProductGrid";
import { FinalCta } from "@/components/home/FinalCta";
import { businessProducts } from "@/data/products";

export const metadata: Metadata = {
  title: "Business Insurance",
  description:
    "Explore general liability, BOP, commercial property, commercial auto, workers' compensation, cyber, E&O, D&O, EPLI, and umbrella with Coverivo.",
};

export default function BusinessPage() {
  return (
    <>
      <PageHero
        eyebrow="Small businesses"
        title="Protect Your Business. Keep Building."
        body="Coverivo is an independent insurance broker for owners who need a clearer conversation about operations, contracts, people, and property. Licensed insurance professionals handle placement. AI does not bind a policy."
        primary={{ href: "/quote?type=business", label: "Get a business quote" }}
        secondary={{ href: "/ai-assistant", label: "Ask Coverivo AI" }}
      />
      <section className="section-pad bg-[#F3F7FC]">
        <Container>
          <ProductGrid products={businessProducts} />
        </Container>
      </section>
      <FinalCta />
    </>
  );
}
