export type Audience = "individuals" | "business" | "employers";

export type QuoteType =
  | "auto"
  | "home"
  | "renters"
  | "life"
  | "health"
  | "business"
  | "employee-benefits"
  | "other";

export type ContactMethod = "email" | "phone" | "text" | "video";

export type AiCapability =
  | "chat"
  | "intake"
  | "policy-analyzer"
  | "education"
  | "quote-explanation"
  | "comparison"
  | "customer-service"
  | "broker-copilot";

export interface FaqItem {
  question: string;
  answer: string;
}

export interface InsuranceProduct {
  slug: string;
  name: string;
  shortName: string;
  audience: Audience;
  href: string;
  summary: string;
  description: string;
  whoNeeds: string[];
  coverages: string[];
  considerations: string[];
  faqs: FaqItem[];
}

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  content: string[];
}

export interface ChatAction {
  label: string;
  href: string;
}

export interface ChatMessage {
  id: string;
  role: "assistant" | "user" | "system";
  content: string;
  suggestions?: string[];
  actions?: ChatAction[];
  escalate?: boolean;
  capability?: AiCapability;
}

export interface QuoteContact {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  zip: string;
  state: string;
  preferredContact: ContactMethod;
  existingInsurance: string;
  currentCarrier: string;
  desiredEffectiveDate: string;
  consentToContact: boolean;
}

export interface BusinessIntake {
  businessName: string;
  industry: string;
  description: string;
  yearsInBusiness: string;
  employees: string;
  revenue: string;
  payroll: string;
  locations: string;
  claimsHistory: string;
  currentInsurance: string;
  requestedCoverage: string;
}

export type ApplicationStatus = "submitted" | "in-review" | "quoted";

export interface PortalApplication {
  id: string;
  email: string;
  type: QuoteType | string;
  status: ApplicationStatus;
  createdAt: string;
  updatedAt: string;
  contact: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    zip: string;
    state: string;
    preferredContact: string;
    existingInsurance: string;
    currentCarrier: string;
    desiredEffectiveDate: string;
  };
  answers: Record<string, string>;
}

export interface QuoteRecord {
  id: string;
  type: QuoteType;
  createdAt: string;
  contact: QuoteContact;
  answers: Record<string, string>;
  business?: BusinessIntake;
  status: "draft" | ApplicationStatus;
}

export interface CoverageCheckResult {
  carrier: string;
  policyType: string;
  effectiveDates: string;
  premium: string;
  limits: string;
  deductibles: string;
  keyCoverages: string[];
  possibleGaps: string[];
  possibleDuplicates: string[];
  bundlingOpportunities: string[];
  summary: string;
}

export interface ComparisonOption {
  id: string;
  carrier: string;
  plan: string;
  premium: string;
  deductible: string;
  limits: string;
  benefits: string[];
  exclusions: string[];
  optionalCoverages: string[];
  brokerNotes: string;
  aiSummary: string;
  label: "Best Value" | "Higher Protection" | "Lower Premium" | "Balanced Coverage";
}

export interface EscalationReason {
  code:
    | "bind-request"
    | "licensing"
    | "legal"
    | "uncertainty"
    | "sensitive-underwriting"
    | "human-requested";
  message: string;
}
