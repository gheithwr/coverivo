import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { QuoteWizard } from "@/components/quote/QuoteWizard";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Get a Quote",
  description:
    "Request an insurance quote from Coverivo. Answer only the questions that match what you want to insure, then connect with a specialist.",
};

export default async function QuotePage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const { type } = await searchParams;
  return (
    <>
      <PageHero
        compact
        eyebrow="Smart Quote Application"
        title="Tell Coverivo what you want to insure."
        body="Apply from your phone in a few short steps. We ask only what is relevant for that coverage type, then you create a portal password so you can check status later."
        secondary={{ href: "/ai-assistant", label: "Ask Coverivo AI instead" }}
      />
      <section className="bg-[#F3F7FC] py-6 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <QuoteWizard initialType={type} />
          <p className="text-xs leading-relaxed text-[#5b6b82] sm:hidden">
            {siteConfig.brokerageDisclaimer} {siteConfig.availabilityDisclaimer}
          </p>
          <aside className="hidden space-y-5 sm:block">
            <div className="surface-card p-6">
              <h2 className="text-lg font-semibold text-[#071B36]">Use it like a phone app</h2>
              <p className="mt-3 text-sm leading-relaxed text-[#5b6b82]">
                Add Coverivo to your home screen to apply, check status, and talk with Coverivo AI without opening a browser tab.
                On iPhone tap Share, then Add to Home Screen. On Android use Add to Home screen from the browser menu.
              </p>
            </div>
            <div className="surface-card p-6">
              <h2 className="text-lg font-semibold text-[#071B36]">What happens next</h2>
              <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-[#5b6b82]">
                <li>Your request is stored for Coverivo review.</li>
                <li>Your email and password become your portal login.</li>
                <li>A specialist may ask follow-up questions.</li>
                <li>Binding and placement always require a licensed professional.</li>
              </ol>
            </div>
            <p className="text-xs leading-relaxed text-[#5b6b82]">
              {siteConfig.brokerageDisclaimer} {siteConfig.availabilityDisclaimer}
            </p>
          </aside>
        </Container>
      </section>
    </>
  );
}
