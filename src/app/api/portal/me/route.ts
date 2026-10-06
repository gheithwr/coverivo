import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { SESSION_COOKIE, readSession } from "@/lib/auth";
import { getCustomerPortal } from "@/lib/portal-store";

export async function GET() {
  const token = (await cookies()).get(SESSION_COOKIE)?.value;
  const session = readSession(token);
  if (!session) {
    return NextResponse.json({ error: "Please sign in to view your applications." }, { status: 401 });
  }

  const portal = getCustomerPortal(session.email);
  if (!portal) {
    return NextResponse.json({ error: "No Coverivo portal account was found for this email." }, { status: 404 });
  }

  return NextResponse.json(portal);
}
