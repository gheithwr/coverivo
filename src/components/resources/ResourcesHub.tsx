"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { articles } from "@/data/articles";

const categories = [
  "All",
  "Insurance Basics",
  "Auto",
  "Home",
  "Life",
  "Business",
  "Employee Benefits",
  "AI & Insurance",
];

export function ResourcesHub() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return articles.filter((article) => {
      const matchesCategory =
        category === "All" ||
        article.category === category ||
        (category === "Insurance Basics" && ["Brokerage Basics", "Insurance Terms", "Coverage Guides"].includes(article.category)) ||
        (category === "Business" && article.category === "Business Insurance") ||
        (category === "AI & Insurance" && article.category === "Coverivo AI") ||
        (category === "Auto" && /auto/i.test(article.title)) ||
        (category === "Home" && /home/i.test(article.title)) ||
        (category === "Life" && /life|umbrella/i.test(article.title)) ||
        (category === "Employee Benefits" && /employee|benefits/i.test(article.title + article.excerpt));
      const matchesQuery =
        !q ||
        article.title.toLowerCase().includes(q) ||
        article.excerpt.toLowerCase().includes(q) ||
        article.category.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <section className="section-pad bg-[#F3F7FC]">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
        <label htmlFor="resource-search" className="sr-only">
          Search insurance questions
        </label>
        <input
          id="resource-search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search insurance questions..."
          className="w-full rounded-full border border-[#e2eaf4] bg-white px-5 py-3 text-sm text-[#071B36] outline-none focus:border-[#1769FF]"
        />
        <div className="mt-5 flex flex-wrap gap-2">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold cursor-pointer ${
                category === item ? "bg-[#1769FF] text-white" : "bg-white text-[#0B376D] ring-1 ring-[#e2eaf4]"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {filtered.map((article) => (
            <Link key={article.slug} href={`/resources/${article.slug}`} className="surface-card p-6 hover:shadow-lg">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#1769FF]">
                {article.category} · {article.readTime}
              </p>
              <h2 className="mt-3 text-xl font-semibold text-[#071B36]">{article.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-[#5b6b82]">{article.excerpt}</p>
            </Link>
          ))}
        </div>
        {filtered.length === 0 ? (
          <p className="mt-8 text-sm text-[#5b6b82]">No matching articles yet. Try another search or category.</p>
        ) : null}
      </div>
    </section>
  );
}
