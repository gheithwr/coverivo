import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { articles } from "@/data/articles";

export function ResourcesPreview() {
  return (
    <section className="section-pad bg-[#F8FAFC]">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1769FF]">Resources</p>
            <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight text-[#071B36] sm:text-4xl">
              Insurance explained like a human.
            </h2>
          </div>
          <Link href="/resources" className="text-sm font-semibold text-[#1769FF]">
            Browse all resources
          </Link>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {articles.slice(0, 4).map((article) => (
            <Link key={article.slug} href={`/resources/${article.slug}`} className="surface-card p-5 transition hover:-translate-y-1 hover:shadow-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#1769FF]">{article.category}</p>
              <h3 className="mt-3 text-base font-semibold text-[#071B36]">{article.title}</h3>
              <p className="mt-2 text-sm text-[#5b6b82]">{article.excerpt}</p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
