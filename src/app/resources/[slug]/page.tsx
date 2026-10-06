import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { articles, getArticle } from "@/data/articles";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "Resource" };
  return { title: article.title, description: article.excerpt };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return (
    <>
      <PageHero eyebrow={`${article.category} · ${article.readTime}`} title={article.title} body={article.excerpt} />
      <section className="section-pad bg-white">
        <Container className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="max-w-2xl space-y-5 text-base leading-relaxed text-[#5b6b82]">
            {article.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className="pt-4">
              <Button href="/quote">
                Get a Quote
              </Button>
            </div>
          </article>
          <aside className="surface-card h-fit p-6">
            <h2 className="text-sm font-semibold text-[#071B36]">More resources</h2>
            <ul className="mt-4 space-y-3">
              {articles
                .filter((item) => item.slug !== article.slug)
                .slice(0, 5)
                .map((item) => (
                  <li key={item.slug}>
                    <Link href={`/resources/${item.slug}`} className="text-sm text-[#1769FF] hover:underline">
                      {item.title}
                    </Link>
                  </li>
                ))}
            </ul>
          </aside>
        </Container>
      </section>
    </>
  );
}
