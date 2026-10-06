import type { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { SignInForm } from "@/components/auth/SignInForm";
import { SESSION_COOKIE, readSession } from "@/lib/auth";
import { getAccount } from "@/lib/portal-store";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to the Coverivo customer portal with the email and password from your quote application.",
};

export default async function SignInPage() {
  const token = (await cookies()).get(SESSION_COOKIE)?.value;
  const session = readSession(token);
  if (session && getAccount(session.email)) redirect("/dashboard");

  return (
    <>
      <PageHero
        compact
        eyebrow="Customer portal"
        title="Sign in to check your application."
        body="Use the email and password you entered when you submitted a Coverivo quote application. The portal shows status and the information you provided. It does not bind coverage."
        primary={{ href: "/quote", label: "Start an application" }}
        secondary={{ href: "/contact", label: "Talk to a professional" }}
      />
      <section className="bg-white py-6 sm:py-24">
        <Container>
          <div className="mx-auto max-w-md surface-card p-8">
            <h2 className="text-xl font-semibold text-[#071B36]">Sign in</h2>
            <p className="mt-2 text-sm leading-relaxed text-[#5b6b82]">
              Email is your user ID. Password is the one you created on the quote form.
            </p>
            <div className="mt-6">
              <SignInForm />
            </div>
            <p className="mt-6 text-sm text-[#5b6b82]">
              No application yet?{" "}
              <a href="/quote" className="font-semibold text-[#1769FF] hover:underline">
                Get a Quote
              </a>
            </p>
            <p className="mt-3 text-sm text-[#5b6b82]">
              Forgot your password?{" "}
              <a href="/contact" className="font-semibold text-[#1769FF] hover:underline">
                Contact Coverivo
              </a>
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
