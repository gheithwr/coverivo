import { suggestedQuestions } from "@/data/quotes";
import type { AiCapability, ChatMessage } from "@/lib/types";
import { uid } from "@/lib/utils";
import { detectEscalation } from "@/lib/ai/escalation";

export const openingMessage =
  "Hi, I'm Coverivo AI.\n\nI can help you understand insurance, organize what you may need, review policy information, and prepare you for a conversation with a Coverivo professional.\n\nWhat can I help you with?";

interface EngineInput {
  message: string;
  history?: ChatMessage[];
}

interface EngineOutput {
  reply: ChatMessage;
  capability: AiCapability;
}

function reply(
  content: string,
  capability: AiCapability,
  extra?: Partial<ChatMessage>
): EngineOutput {
  return {
    capability,
    reply: {
      id: uid("ai"),
      role: "assistant",
      content,
        capability,
        suggestions: extra?.suggestions,
        actions: extra?.actions,
        escalate: extra?.escalate,
      },
  };
}

function match(message: string, patterns: RegExp[]) {
  return patterns.some((pattern) => pattern.test(message));
}

export function runCoverivoAi({ message }: EngineInput): EngineOutput {
  const text = message.trim();
  const escalation = detectEscalation(text);

  if (escalation) {
    return reply(
      `${escalation.message} I can keep answering general questions, or you can request a consultation and a Coverivo insurance professional will follow up. I cannot bind coverage or guarantee pricing, eligibility, or approval.`,
      "customer-service",
      {
        escalate: true,
        suggestions: ["Talk to an insurance professional", "Start a quote", "What insurance do I need?"],
        actions: [
          { label: "Talk to a specialist", href: "/contact" },
          { label: "Start a quote", href: "/quote" },
        ],
      }
    );
  }

  if (match(text, [/^get a quote$/i, /ask a question/i])) {
    return reply(
      "I can help you start a quote or answer an insurance question. Coverivo is an independent insurance broker staffed by licensed insurance professionals, not an insurance carrier.\n\nWhat would you like to insure, or what question should we start with?",
      "intake",
      {
        suggestions: ["Personal Insurance", "Business Insurance", "Employee Benefits", "Talk to an insurance professional"],
        actions: [
          { label: "Start a quote", href: "/quote" },
          { label: "Talk to a person", href: "/contact" },
        ],
      }
    );
  }

  if (match(text, [/what insurance do i need/i, /what do i need/i, /not sure/i, /help me figure/i])) {
    return reply(
      "I can help you narrow it down. Coverivo is an independent insurance broker, not an insurance carrier, so the goal is to understand your situation first.\n\nAre you looking for coverage for yourself or your household, a business, or employee benefits for a team?",
      "education",
      {
        suggestions: [
          "Coverage for me or my family",
          "I need business insurance",
          "I need employee benefits",
        ],
      }
    );
  }

  if (match(text, [/auto quote/i, /\bauto\b/i, /car insurance/i, /vehicle/i])) {
    return reply(
      "I can help prepare an auto quote request. I will only ask what is needed at this step.\n\nWhat ZIP code should we use for the vehicles?",
      "intake",
      {
        suggestions: ["Continue auto quote", "What information do I need for a quote?", "Talk to an insurance professional"],
        actions: [{ label: "Start auto quote", href: "/quote?type=auto" }],
      }
    );
  }

  if (match(text, [/insure my home/i, /\bhome\b/i, /homeowners/i, /house/i, /condo/i])) {
    return reply(
      "Home coverage usually starts with how you occupy the property. Is this a house you own, a condo, or a rental you live in?",
      "intake",
      {
        suggestions: ["I own a home", "I own a condo", "I rent"],
        actions: [{ label: "Start home quote", href: "/quote?type=home" }],
      }
    );
  }

  if (match(text, [/family/i, /household/i, /myself/i, /personal insurance/i, /personal/i])) {
    return reply(
      "For individuals and families, common starting points are auto, home or renters, life, health, and umbrella. Which of these is closest to what you want to explore first?",
      "intake",
      {
        suggestions: ["Help me get an auto quote", "Help me insure my home", "Do I need umbrella insurance?"],
      }
    );
  }

  if (match(text, [/general liability cover/i, /what does general liability/i])) {
    return reply(
      "General liability typically helps with certain third-party bodily injury and property damage claims arising from business operations. It is often requested by clients and landlords.\n\nIt usually does not replace professional liability, commercial auto, workers' compensation, or cyber coverage. Would you like to start a business quote so we can see what else may be relevant?",
      "education",
      {
        suggestions: ["I need business insurance", "What is a BOP?", "Talk to an insurance professional"],
      }
    );
  }

  if (match(text, [/business insurance/i, /\bbop\b/i, /workers.? comp/i, /my business/i])) {
    return reply(
      "Business insurance depends on what you do, where you work, and whether you have employees or vehicles.\n\nIn one sentence, what does the business do?",
      "intake",
      {
        suggestions: ["What does general liability cover?", "Help me compare coverage", "Start a business quote"],
        actions: [{ label: "Start business quote", href: "/quote?type=business" }],
      }
    );
  }

  if (match(text, [/umbrella/i])) {
    return reply(
      "Umbrella insurance can add liability limits above auto and home (or above primary business policies). It is not a replacement for those policies, and carriers usually require minimum underlying limits.\n\nPeople often consider it when they have assets to protect, teenage drivers, or higher lawsuit exposure. Would you like a specialist to review whether umbrella belongs in your conversation?",
      "education",
      {
        suggestions: ["Review my current insurance", "Help me get an auto quote", "Talk to an insurance professional"],
      }
    );
  }

  if (match(text, [/compare coverage/i, /compare/i, /which (plan|option)/i])) {
    return reply(
      "I can help you compare coverage side by side—premium, deductible, limits, benefits, and important exclusions. Comparison is educational; it is not a decision to buy or bind.\n\nDo you already have quotes, or should we start a quote request first?",
      "comparison",
      {
        suggestions: ["Show a sample comparison", "Start a quote", "Talk to an insurance professional"],
        actions: [
          { label: "Open comparison", href: "/compare" },
          { label: "Start a quote", href: "/quote" },
        ],
      }
    );
  }

  if (match(text, [/employee benefits/i, /group health/i, /for my (team|employees|staff)/i])) {
    return reply(
      "Employee benefits can include group health, dental, vision, life, and disability. I will not recommend a plan to bind. I can collect workforce basics for a Coverivo specialist.\n\nAbout how many employees would be eligible?",
      "intake",
      {
        suggestions: ["Fewer than 10", "10 to 49", "50 or more"],
        actions: [{ label: "Start benefits intake", href: "/quote?type=employee-benefits" }],
      }
    );
  }

  if (match(text, [/review my (current )?insurance/i, /review my policy/i, /policy review/i, /coverage check/i, /upload/i])) {
    return reply(
      "I can help with an AI Coverage Check. You can upload a policy or enter key details. I will summarize carrier, dates, premium, limits, deductibles, possible gaps, and possible duplicates.\n\nThis is general guidance only and should be reviewed against the actual policy with a Coverivo insurance professional. Do you want to start a coverage check?",
      "policy-analyzer",
      {
        suggestions: ["Start coverage check", "What information do I need for a quote?", "Talk to an insurance professional"],
        actions: [{ label: "Open AI Coverage Check", href: "/coverage-check" }],
      }
    );
  }

  if (match(text, [/what information/i, /need for a quote/i, /documents/i])) {
    return reply(
      "Quote information depends on the coverage type. In general we collect name, email, phone, ZIP, state, preferred contact method, and whether you have existing insurance.\n\nAuto also needs vehicles and drivers. Home needs occupancy and property basics. Business needs operations, employees, revenue, and locations. I ask these progressively so you are not facing a huge form at once.",
      "intake",
      {
        suggestions: ["Start a quote", "Help me get an auto quote", "I need business insurance"],
      }
    );
  }

  if (match(text, [/sample comparison/i, /show a sample/i])) {
    return reply(
      "I can open a sample comparison so you can see how Coverivo presents carrier, plan, premium, deductibles, limits, benefits, exclusions, broker notes, and an AI summary. Labels such as Best Value or Higher Protection are discussion aids, not binding offers.",
      "quote-explanation",
      {
        suggestions: ["Open comparison", "Start a quote", "Talk to an insurance professional"],
        actions: [{ label: "Open comparison", href: "/compare" }],
      }
    );
  }

  if (/^\d{5}(-\d{4})?$/.test(text)) {
    return reply(
      `Thanks. I have ZIP ${text} for this conversation. Next I would usually ask about the vehicles or property at that location, then drivers or occupancy.\n\nYou can continue here or start the smart quote form, which saves these answers for a Coverivo specialist. I still cannot bind coverage.`,
      "intake",
      {
        suggestions: ["Start a quote", "Help me insure my home", "Talk to an insurance professional"],
        actions: [{ label: "Continue in quote form", href: "/quote" }],
      }
    );
  }

  if (match(text, [/continue auto quote/i, /start a quote/i, /start a business quote/i])) {
    const href = /business/i.test(text)
      ? "/quote?type=business"
      : /auto/i.test(text)
        ? "/quote?type=auto"
        : "/quote";
    return reply(
      "I can move you into the smart quote form so a Coverivo specialist receives a structured request. I still cannot bind coverage or guarantee pricing.",
      "intake",
      {
        suggestions: ["Talk to an insurance professional", "Review my current insurance"],
        actions: [{ label: "Open quote form", href }],
      }
    );
  }

  if (match(text, [/start coverage check/i, /open comparison/i, /i own a home/i, /i own a condo/i, /i rent/i])) {
    if (/coverage check/i.test(text)) {
      return reply(
        "The AI Coverage Check can summarize a policy you already have. Upload a file or enter details. Results should be reviewed with a Coverivo professional.",
        "policy-analyzer",
        { actions: [{ label: "Open coverage check", href: "/coverage-check" }] }
      );
    }
    if (/comparison/i.test(text)) {
      return reply(
        "I can show an educational comparison of sample options. It is not an offer or a binder.",
        "comparison",
        { actions: [{ label: "Open comparison", href: "/compare" }] }
      );
    }
    const href = /rent/i.test(text) ? "/quote?type=renters" : /condo/i.test(text) ? "/quote?type=home" : "/quote?type=home";
    return reply(
      "I can collect the next property details in the quote form, then a Coverivo specialist can continue. This does not bind coverage.",
      "intake",
      { actions: [{ label: "Continue quote", href }] }
    );
  }

  if (match(text, [/fewer than 10/i, /10 to 49/i, /50 or more/i])) {
    return reply(
      "Thanks. Headcount helps a Coverivo specialist understand group size. Next we usually collect company name and which benefits you want to explore. I cannot place or bind a group plan.",
      "intake",
      {
        actions: [{ label: "Continue benefits intake", href: "/quote?type=employee-benefits" }],
      }
    );
  }

  return reply(
    "I can help with education, quote intake, policy review, and connecting you to a Coverivo specialist. Coverivo is an independent insurance broker staffed by licensed insurance professionals, not an insurance carrier.\n\nTell me what you would like to do, or choose one of the questions below. If you want to purchase or bind coverage, I will connect you with a licensed Coverivo professional.",
    "chat",
    { suggestions: suggestedQuestions.slice(0, 6) }
  );
}

export function createOpeningMessage(): ChatMessage {
  return {
    id: "coverivo-ai-open",
    role: "assistant",
    content: openingMessage,
    capability: "chat",
    suggestions: suggestedQuestions,
  };
}
