import type { EscalationReason } from "@/lib/types";

const BIND_PATTERNS =
  /\b(bind|purchase|buy now|issue (the )?policy|enroll me|sign me up|complete (the )?purchase)\b/i;
const LEGAL_PATTERNS =
  /\b(legal advice|is this legal|lawsuit|sue|statute|regulation interpretation|contract clause)\b/i;
const HUMAN_PATTERNS =
  /\b(talk to (a |an )?(human|person|agent|advisor|broker|professional)|speak (to|with)|real person|call me)\b/i;
const SENSITIVE_PATTERNS =
  /\b(felony|dui|cancer|terminal|bankruptcy|non-disclosure|omit|hide (a |this )?claim|undisclosed)\b/i;

export function detectEscalation(message: string): EscalationReason | null {
  const text = message.trim();
  if (!text) return null;
  if (HUMAN_PATTERNS.test(text)) {
    return {
      code: "human-requested",
      message: "A Coverivo insurance professional can continue from here.",
    };
  }
  if (BIND_PATTERNS.test(text)) {
    return {
      code: "bind-request",
      message:
        "Coverivo AI cannot bind coverage or complete a purchase. A licensed professional must handle placement.",
    };
  }
  if (LEGAL_PATTERNS.test(text)) {
    return {
      code: "legal",
      message:
        "Legal interpretation is outside Coverivo AI. A licensed professional can help coordinate next steps.",
    };
  }
  if (SENSITIVE_PATTERNS.test(text)) {
    return {
      code: "sensitive-underwriting",
      message:
        "This involves sensitive underwriting details. A Coverivo specialist should review it with you directly.",
    };
  }
  return null;
}

export const neverBindRule =
  "Coverivo AI must never autonomously bind coverage, guarantee pricing, eligibility, or approval, or issue a policy.";
