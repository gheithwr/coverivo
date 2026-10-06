import type { AiCapability } from "@/lib/types";

export interface AiModule {
  id: AiCapability;
  name: string;
  purpose: string;
  canBind: false;
  escalateWhen: string[];
}

export const aiModules: AiModule[] = [
  {
    id: "chat",
    name: "Coverivo AI Chat",
    purpose: "Conversational guidance, routing, and progressive intake.",
    canBind: false,
    escalateWhen: ["Customer asks for a person", "Intent to purchase or bind"],
  },
  {
    id: "intake",
    name: "Insurance Intake Assistant",
    purpose: "Ask only relevant questions based on insurance type.",
    canBind: false,
    escalateWhen: ["Incomplete required licensing information", "Unusual risk signals"],
  },
  {
    id: "policy-analyzer",
    name: "Policy Document Analyzer",
    purpose: "Summarize uploaded or entered policy details and flag possible gaps.",
    canBind: false,
    escalateWhen: ["Document is unclear", "Legal interpretation requested"],
  },
  {
    id: "education",
    name: "Coverage Education Assistant",
    purpose: "Explain insurance terms and product concepts in plain language.",
    canBind: false,
    escalateWhen: ["Advice would require a recommendation to buy a specific policy"],
  },
  {
    id: "quote-explanation",
    name: "Quote Explanation Assistant",
    purpose: "Explain quote fields, deductibles, limits, and tradeoffs.",
    canBind: false,
    escalateWhen: ["Customer wants to bind a quoted option"],
  },
  {
    id: "comparison",
    name: "Coverage Comparison Assistant",
    purpose: "Highlight differences across options without ranking as a purchase decision.",
    canBind: false,
    escalateWhen: ["Customer asks which option to buy as a final decision"],
  },
  {
    id: "customer-service",
    name: "Customer Service Assistant",
    purpose: "Help with portal questions, documents, and routing.",
    canBind: false,
    escalateWhen: ["Claims disputes", "Account access issues needing identity verification"],
  },
  {
    id: "broker-copilot",
    name: "Broker Copilot",
    purpose: "Internal-ready summaries for Coverivo professionals. Never customer-facing as a binder.",
    canBind: false,
    escalateWhen: ["Placement, carrier coordination, or licensing tasks"],
  },
];

export function getModule(id: AiCapability) {
  return aiModules.find((module) => module.id === id);
}
