import type { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { CustomerPortal } from "@/components/dashboard/CustomerPortal";
import { SESSION_COOKIE, readSession } from "@/lib/auth";
import { getCustomerPortal } from "@/lib/portal-store";

export const metadata: Metadata = {
  title: "Customer Dashboard",
  description: "Check Coverivo quote application status and the information you submitted.",
};

export default async function DashboardPage() {
  const token = (await cookies()).get(SESSION_COOKIE)?.value;
  const session = readSession(token);
  if (!session) redirect("/signin");

  const portal = getCustomerPortal(session.email);
  if (!portal) redirect("/signin");

  return (
    <>
      <PageHero
        compact
        eyebrow="Customer portal"
        title="Your Coverivo applications."
        body="Check status and the information you submitted. A licensed insurance professional handles placement. This portal does not bind coverage."
        primary={{ href: "/quote", label: "New application" }}
        secondary={{ href: "/contact", label: "Talk to a professional" }}
      />
      <section className="bg-[#F3F7FC] py-6 sm:py-24">
        <Container>
          <CustomerPortal customer={portal.customer} applications={portal.applications} />
        </Container>
      </section>
    </>
  );
}
