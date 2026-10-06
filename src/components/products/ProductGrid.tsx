import Link from "next/link";
import type { InsuranceProduct } from "@/lib/types";

export function ProductGrid({ products }: { products: InsuranceProduct[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <Link key={product.slug} href={product.href} className="surface-card p-6 transition hover:-translate-y-0.5 hover:shadow-lg">
          <h3 className="text-lg font-semibold text-[#071B36]">{product.name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-[#5b6b82]">{product.summary}</p>
          <span className="mt-4 inline-block text-sm font-semibold text-[#1769FF]">Learn more</span>
        </Link>
      ))}
    </div>
  );
}
