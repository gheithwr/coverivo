import { NextResponse } from "next/server";
import { dispatchLead } from "@/lib/integrations";
import { auditEvent, clientKey, rateLimit, sanitizeText } from "@/lib/security";
import { isValidEmail, uid } from "@/lib/utils";

export async function POST(request: Request) {
  const limited = rateLimit(`contact:${clientKey(request)}`, 10);
  if (!limited.allowed) {
    return NextResponse.json({ error: "Too many messages. Please try again shortly." }, { status: 429 });
  }

  const body = await request.json().catch(() => ({}));
  const name = sanitizeText(body.name, 120);
  const email = sanitizeText(body.email, 120);
  const topic = sanitizeText(body.topic, 80);
  const message = sanitizeText(body.message, 4000);
  const consent = Boolean(body.consent);

  if (!name || !isValidEmail(email) || !message || !consent) {
    return NextResponse.json({ error: "Please complete the required fields and consent to contact." }, { status: 400 });
  }

  const id = uid("contact");
  await dispatchLead({ id, name, email, topic, source: "coverivo-contact" });
  auditEvent("contact.submitted", { id, topic, email });

  return NextResponse.json({
    id,
    message: "Thanks. A Coverivo teammate will follow up. This form does not bind coverage.",
  });
}
