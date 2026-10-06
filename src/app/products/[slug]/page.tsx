import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { products, getProduct } from "@/data/products";
import { quoteTypeFromProduct } from "@/lib/quote-types";
import { siteConfig } from "@/config/site";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Insurance product" };
  return { title: product.name, description: product.summary };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <>
      <PageHero
        eyebrow={product.audience === "individuals" ? "Individuals & Families" : product.audience === "business" ? "Business" : "Employers"}
        title={product.name}
        body={product.description}
        primary={{ href: `/quote?type=${quoteTypeFromProduct(product.slug)}`, label: "Get a Quote" }}
        secondary={{ href: "/ai-assistant", label: "Ask Coverivo AI" }}
      />
      <section className="section-pad bg-[#F3F7FC]">
        <Container className="grid gap-8 lg:grid-cols-3">
          <article className="surface-card p-6">
            <h2 className="text-lg font-semibold text-[#071B36]">Who typically needs this</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[#5b6b82]">
              {product.whoNeeds.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="surface-card p-6">
            <h2 className="text-lg font-semibold text-[#071B36]">Common coverages</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[#5b6b82]">
              {product.coverages.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="surface-card p-6">
            <h2 className="text-lg font-semibold text-[#071B36]">Things to consider</h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[#5b6b82]">
              {product.considerations.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </Container>
      </section>
      <section className="pb-20">
        <Container>
          <div className="surface-card p-8">
            <h2 className="text-2xl font-semibold text-[#071B36]">Questions people ask</h2>
            <div className="mt-6 space-y-5">
              {product.faqs.map((faq) => (
                <div key={faq.question}>
                  <h3 className="font-semibold text-[#071B36]">{faq.question}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5b6b82]">{faq.answer}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-xs text-[#5b6b82]">
              {siteConfig.brokerageDisclaimer} {siteConfig.availabilityDisclaimer}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href={`/quote?type=${quoteTypeFromProduct(product.slug)}`}>
                Get a Quote
              </Button>
              <Button href="/coverage-check" variant="light">
                Check My Coverage
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
