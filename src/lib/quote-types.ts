import type { QuoteType } from "@/lib/types";

const quoteTypeSet = new Set<QuoteType>([
  "auto",
  "home",
  "renters",
  "life",
  "health",
  "business",
  "employee-benefits",
  "other",
]);

export function isQuoteType(value: string | null | undefined): value is QuoteType {
  return Boolean(value && quoteTypeSet.has(value as QuoteType));
}

export function quoteTypeFromProduct(slug: string): QuoteType {
  switch (slug) {
    case "auto":
      return "auto";
    case "home":
    case "condo":
    case "flood":
      return "home";
    case "renters":
      return "renters";
    case "life":
    case "group-life":
      return "life";
    case "health":
    case "group-health":
      return "health";
    case "employee-benefits":
    case "dental":
    case "vision":
    case "disability":
      return "employee-benefits";
    case "general-liability":
    case "bop":
    case "commercial-property":
    case "commercial-auto":
    case "workers-compensation":
    case "professional-liability":
    case "eo":
    case "cyber":
    case "epli":
    case "do":
    case "commercial-umbrella":
      return "business";
    default:
      return "other";
  }
}
