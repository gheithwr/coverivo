import { NextResponse } from "next/server";
import {
  SESSION_COOKIE,
  createSessionToken,
  hashPassword,
  isValidPassword,
  sessionCookieOptions,
  verifyPassword,
} from "@/lib/auth";
import { dispatchLead } from "@/lib/integrations";
import {
  addApplication,
  getAccount,
  normalizeEmail,
  upsertAccount,
} from "@/lib/portal-store";
import { isQuoteType } from "@/lib/quote-types";
import { auditEvent, clientKey, rateLimit, sanitizeText } from "@/lib/security";
import { isValidEmail, isValidZip, uid } from "@/lib/utils";

export async function POST(request: Request) {
  const limited = rateLimit(`quote:${clientKey(request)}`, 12);
  if (!limited.allowed) {
    return NextResponse.json({ error: "Too many quote requests. Please try again shortly." }, { status: 429 });
  }

  const body = await request.json().catch(() => ({}));
  const firstName = sanitizeText(body.firstName, 80);
  const lastName = sanitizeText(body.lastName, 80);
  const email = normalizeEmail(sanitizeText(body.email, 120));
  const phone = sanitizeText(body.phone, 20);
  const zip = sanitizeText(body.zip, 10);
  const state = sanitizeText(body.state, 2);
  const type = sanitizeText(body.type, 40);
  const preferredContact = sanitizeText(body.preferredContact, 20);
  const existingInsurance = sanitizeText(body.existingInsurance, 20);
  const currentCarrier = sanitizeText(body.currentCarrier, 80);
  const desiredEffectiveDate = sanitizeText(body.desiredEffectiveDate, 20);
  const password = typeof body.password === "string" ? body.password : "";
  const consent = Boolean(body.consentToContact);
  const answers =
    body.answers && typeof body.answers === "object"
      ? Object.fromEntries(
          Object.entries(body.answers as Record<string, unknown>).map(([key, value]) => [
            sanitizeText(key, 80),
            sanitizeText(value, 400),
          ])
        )
      : {};

  if (!firstName || !lastName || !isValidEmail(email) || !phone || !isValidZip(zip) || !state || !type) {
    return NextResponse.json({ error: "Please complete the required contact fields." }, { status: 400 });
  }
  if (!isQuoteType(type)) {
    return NextResponse.json({ error: "Please choose a valid coverage type." }, { status: 400 });
  }
  if (!consent) {
    return NextResponse.json({ error: "Consent to contact is required to submit a quote request." }, { status: 400 });
  }
  if (!isValidPassword(password)) {
    return NextResponse.json(
      { error: "Create a portal password of at least 8 characters so you can check this application later." },
      { status: 400 }
    );
  }

  const existing = getAccount(email);
  if (existing) {
    if (!verifyPassword(password, existing.passwordSalt, existing.passwordHash)) {
      return NextResponse.json(
        { error: "This email already has a Coverivo portal password. Sign in with that password, or use the same password to add another application." },
        { status: 409 }
      );
    }
    upsertAccount({
      ...existing,
      firstName,
      lastName,
      phone,
      zip,
      state,
    });
  } else {
    const { hash, salt } = hashPassword(password);
    upsertAccount({
      email,
      passwordHash: hash,
      passwordSalt: salt,
      firstName,
      lastName,
      phone,
      zip,
      state,
      createdAt: new Date().toISOString(),
    });
  }

  const id = uid("quote");
  const now = new Date().toISOString();
  addApplication({
    id,
    email,
    type,
    status: "submitted",
    createdAt: now,
    updatedAt: now,
    contact: {
      firstName,
      lastName,
      email,
      phone,
      zip,
      state,
      preferredContact,
      existingInsurance,
      currentCarrier,
      desiredEffectiveDate,
    },
    answers,
  });

  await dispatchLead({
    id,
    type,
    source: "coverivo-quote",
    firstName,
    lastName,
    email,
    phone,
    zip,
    state,
  });
  auditEvent("quote.submitted", { id, type, email, phone, consent: true });

  const response = NextResponse.json({
    id,
    status: "submitted",
    email,
    message:
      "Your quote request has been received. Sign in with this email and the password you just created to check application status. This is not a binder, policy, or guarantee of coverage.",
  });
  response.cookies.set(SESSION_COOKIE, createSessionToken(email), sessionCookieOptions());
  return response;
}
