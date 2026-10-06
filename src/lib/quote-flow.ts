import type { QuoteType } from "@/lib/types";

export interface QuoteField {
  name: string;
  label: string;
  type: "text" | "select" | "textarea" | "date" | "tel" | "email";
  required?: boolean;
  placeholder?: string;
  options?: { value: string; label: string }[];
  help?: string;
}

export const autoFields: QuoteField[] = [
  {
    name: "vehicles",
    label: "How many vehicles?",
    type: "select",
    required: true,
    options: [
      { value: "1", label: "1" },
      { value: "2", label: "2" },
      { value: "3", label: "3" },
      { value: "4+", label: "4 or more" },
    ],
  },
  { name: "yearMakeModel", label: "Year, make, and model of the primary vehicle", type: "text", required: true },
  {
    name: "drivers",
    label: "How many drivers?",
    type: "select",
    required: true,
    options: [
      { value: "1", label: "1" },
      { value: "2", label: "2" },
      { value: "3+", label: "3 or more" },
    ],
  },
  {
    name: "usage",
    label: "Primary use",
    type: "select",
    required: true,
    options: [
      { value: "commute", label: "Commute" },
      { value: "pleasure", label: "Pleasure" },
      { value: "business", label: "Business" },
    ],
  },
  {
    name: "accidents",
    label: "Any accidents or violations in the last 5 years?",
    type: "select",
    required: true,
    options: [
      { value: "no", label: "No" },
      { value: "yes", label: "Yes" },
    ],
  },
];

export const homeFields: QuoteField[] = [
  { name: "address", label: "Property address", type: "text", required: true },
  {
    name: "ownership",
    label: "Do you own or occupy this home?",
    type: "select",
    required: true,
    options: [
      { value: "own", label: "I own it" },
      { value: "buying", label: "I am buying it" },
      { value: "other", label: "Other" },
    ],
  },
  { name: "yearBuilt", label: "Year built (approximate is fine)", type: "text", required: true },
  {
    name: "construction",
    label: "Construction type",
    type: "select",
    options: [
      { value: "frame", label: "Frame" },
      { value: "masonry", label: "Masonry" },
      { value: "unknown", label: "Not sure" },
    ],
  },
  {
    name: "claims",
    label: "Any property claims in the last 5 years?",
    type: "select",
    required: true,
    options: [
      { value: "no", label: "No" },
      { value: "yes", label: "Yes" },
    ],
  },
];

export const rentersFields: QuoteField[] = [
  { name: "address", label: "Rental address", type: "text", required: true },
  {
    name: "propertyType",
    label: "Type of residence",
    type: "select",
    required: true,
    options: [
      { value: "apartment", label: "Apartment" },
      { value: "house", label: "House" },
      { value: "other", label: "Other" },
    ],
  },
  { name: "belongings", label: "Estimated value of belongings", type: "text", required: true },
];

export const lifeFields: QuoteField[] = [
  {
    name: "goal",
    label: "What is the main goal?",
    type: "select",
    required: true,
    options: [
      { value: "income", label: "Replace income" },
      { value: "mortgage", label: "Cover a mortgage or debt" },
      { value: "family", label: "Support family" },
      { value: "unsure", label: "Not sure yet" },
    ],
  },
  { name: "coverageAmount", label: "Coverage amount you have in mind", type: "text" },
  {
    name: "termOrPermanent",
    label: "Term, permanent, or not sure?",
    type: "select",
    options: [
      { value: "term", label: "Term" },
      { value: "permanent", label: "Permanent" },
      { value: "unsure", label: "Not sure" },
    ],
  },
];

export const healthFields: QuoteField[] = [
  {
    name: "householdSize",
    label: "People to cover",
    type: "select",
    required: true,
    options: [
      { value: "1", label: "Just me" },
      { value: "2", label: "Two people" },
      { value: "3+", label: "Three or more" },
    ],
  },
  {
    name: "coverageNow",
    label: "Do you have coverage now?",
    type: "select",
    required: true,
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
      { value: "ending", label: "It is ending soon" },
    ],
  },
];

export const otherFields: QuoteField[] = [
  {
    name: "need",
    label: "What would you like help with?",
    type: "textarea",
    required: true,
    placeholder: "Tell us the coverage, property, or situation you have in mind.",
  },
];

export const businessFields: QuoteField[] = [
  { name: "businessName", label: "Business name", type: "text", required: true },
  { name: "industry", label: "Industry", type: "text", required: true },
  {
    name: "description",
    label: "Business description",
    type: "textarea",
    required: true,
    placeholder: "What does the business do?",
  },
  { name: "yearsInBusiness", label: "Years in business", type: "text", required: true },
  { name: "employees", label: "Number of employees", type: "text", required: true },
  { name: "revenue", label: "Approximate annual revenue", type: "text", required: true },
  { name: "payroll", label: "Approximate annual payroll", type: "text" },
  { name: "locations", label: "Number of locations", type: "text", required: true },
  {
    name: "claimsHistory",
    label: "Claims history (last 5 years)",
    type: "textarea",
    placeholder: "None, or a brief description.",
  },
  { name: "currentInsurance", label: "Current insurance, if any", type: "text" },
  {
    name: "requestedCoverage",
    label: "Requested coverage",
    type: "textarea",
    required: true,
    placeholder: "General liability, BOP, workers' compensation, cyber, etc.",
  },
];

export const benefitsFields: QuoteField[] = [
  { name: "businessName", label: "Company name", type: "text", required: true },
  { name: "employees", label: "Eligible employees", type: "text", required: true },
  {
    name: "requestedCoverage",
    label: "Benefits to explore",
    type: "textarea",
    required: true,
    placeholder: "Group health, dental, vision, life, disability, or a full package.",
  },
  { name: "currentInsurance", label: "Current benefits, if any", type: "text" },
];

export function fieldsForType(type: QuoteType): QuoteField[] {
  switch (type) {
    case "auto":
      return autoFields;
    case "home":
      return homeFields;
    case "renters":
      return rentersFields;
    case "life":
      return lifeFields;
    case "health":
      return healthFields;
    case "business":
      return businessFields;
    case "employee-benefits":
      return benefitsFields;
    default:
      return otherFields;
  }
}
