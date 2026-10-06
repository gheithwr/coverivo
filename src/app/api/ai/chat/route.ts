import { NextResponse } from "next/server";
import { runCoverivoAi } from "@/lib/ai";
import { auditEvent, clientKey, rateLimit, sanitizeText } from "@/lib/security";

export async function POST(request: Request) {
  const limited = rateLimit(`ai:${clientKey(request)}`, 40);
  if (!limited.allowed) {
    return NextResponse.json(
      { error: "Please wait a moment before sending another message." },
      { status: 429 }
    );
  }

  const body = await request.json().catch(() => ({}));
  const message = sanitizeText(body.message, 2000);
  if (!message) {
    return NextResponse.json({ error: "Please enter a message." }, { status: 400 });
  }

  const result = runCoverivoAi({ message });
  auditEvent("ai.chat", { capability: result.capability, escalate: Boolean(result.reply.escalate) });

  return NextResponse.json({
    message: result.reply,
    disclaimer:
      "Coverivo AI provides general guidance and does not bind coverage or guarantee pricing, eligibility, or approval.",
  });
}
