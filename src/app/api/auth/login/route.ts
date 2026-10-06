import { NextResponse } from "next/server";
import { SESSION_COOKIE, createSessionToken, sessionCookieOptions, verifyPassword } from "@/lib/auth";
import { getAccount, normalizeEmail } from "@/lib/portal-store";
import { auditEvent, clientKey, rateLimit, sanitizeText } from "@/lib/security";
import { isValidEmail } from "@/lib/utils";

export async function POST(request: Request) {
  const limited = rateLimit(`login:${clientKey(request)}`, 8);
  if (!limited.allowed) {
    return NextResponse.json({ error: "Too many sign-in attempts. Please try again shortly." }, { status: 429 });
  }

  const body = await request.json().catch(() => ({}));
  const email = normalizeEmail(sanitizeText(body.email, 120));
  const password = typeof body.password === "string" ? body.password : "";

  if (!isValidEmail(email) || !password) {
    return NextResponse.json({ error: "Enter the email and password from your quote application." }, { status: 400 });
  }

  const account = getAccount(email);
  if (!account || !verifyPassword(password, account.passwordSalt, account.passwordHash)) {
    auditEvent("auth.login_failed", { email });
    return NextResponse.json({ error: "Email or password does not match a Coverivo application." }, { status: 401 });
  }

  auditEvent("auth.login", { email });
  const response = NextResponse.json({ ok: true, email });
  response.cookies.set(SESSION_COOKIE, createSessionToken(email), sessionCookieOptions());
  return response;
}
