import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Container, SectionHeading } from "@/components/ui/Container";
import { ProductGrid } from "@/components/products/ProductGrid";
import { businessProducts, employerProducts, individualProducts } from "@/data/products";

export const metadata: Metadata = {
  title: "Insurance Products",
  description: "Browse Coverivo insurance products for individuals, businesses, and employers.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insurance products"
        title="A clear catalog across personal, business, and benefits."
        body="Every product page explains who it is for, what it commonly includes, and what to consider. Availability varies by state and carrier. Coverivo does not issue policies."
        primary={{ href: "/quote", label: "Get a Quote" }}
        secondary={{ href: "/ai-assistant", label: "Ask Coverivo AI" }}
      />
      <section className="section-pad bg-white">
        <Container className="space-y-16">
          <div>
            <SectionHeading eyebrow="Individuals" title="Personal coverage" />
            <div className="mt-8">
              <ProductGrid products={individualProducts} />
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Business" title="Commercial coverage" />
            <div className="mt-8">
              <ProductGrid products={businessProducts} />
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Employers" title="Employee benefits" />
            <div className="mt-8">
              <ProductGrid products={employerProducts} />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
