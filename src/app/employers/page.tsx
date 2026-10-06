import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { ProductGrid } from "@/components/products/ProductGrid";
import { FinalCta } from "@/components/home/FinalCta";
import { employerProducts } from "@/data/products";

export const metadata: Metadata = {
  title: "Employers & Employee Benefits",
  description:
    "Explore group health, dental, vision, life, disability, and employee benefits with Coverivo.",
};

export default function EmployersPage() {
  return (
    <>
      <PageHero
        eyebrow="Employers"
        title="Smarter Benefits for Your Team."
        body="Coverivo is an independent insurance broker for employers. We help gather census basics, compare benefit categories, and continue with licensed insurance professionals for plan design and placement."
        primary={{ href: "/quote?type=employee-benefits", label: "Start benefits intake" }}
        secondary={{ href: "/ai-assistant", label: "Ask Coverivo AI" }}
      />
      <section className="section-pad bg-[#F3F7FC]">
        <Container>
          <ProductGrid products={employerProducts} />
        </Container>
      </section>
      <FinalCta />
    </>
  );
}
