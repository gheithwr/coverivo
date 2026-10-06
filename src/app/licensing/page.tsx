import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Licensing",
  description: "Coverivo is an independent insurance broker staffed by licensed insurance professionals.",
};

export default function LicensingPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Licensing"
        body="Coverivo is an independent insurance broker. Placement, recommendations, and coverage decisions are handled by licensed insurance professionals."
      />
      <section className="section-pad bg-white">
        <Container className="max-w-3xl space-y-6 text-sm leading-relaxed text-[#5b6b82]">
          <p>{siteConfig.brokerageDisclaimer}</p>
          <p>
            Coverivo is an insurance broker, not an insurance company. Licensed insurance professionals at Coverivo
            help customers understand options, request coverage, and coordinate placement with applicable markets.
          </p>
          <p>
            This page does not invent license numbers, resident states, surplus lines details, or office locations.
            Specific license numbers and jurisdiction disclosures should appear here as Coverivo publishes them for
            public display.
          </p>
          <p>{siteConfig.availabilityDisclaimer}</p>
        </Container>
      </section>
    </>
  );
}
