import type { MetadataRoute } from "next";
import { articles } from "@/data/articles";
import { products } from "@/data/products";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "",
    "/individuals",
    "/business",
    "/employers",
    "/products",
    "/ai-assistant",
    "/how-it-works",
    "/resources",
    "/about",
    "/contact",
    "/quote",
    "/coverage-check",
    "/compare",
    "/dashboard",
    "/signin",
    "/privacy",
    "/terms",
    "/accessibility",
    "/licensing",
    "/ai-disclosure",
  ];

  return [
    ...staticPaths.map((path) => ({
      url: `${siteConfig.url}${path}`,
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.7,
    })),
    ...products.map((product) => ({
      url: `${siteConfig.url}${product.href}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...articles.map((article) => ({
      url: `${siteConfig.url}/resources/${article.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ];
}
