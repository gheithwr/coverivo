import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Accessibility",
  description: "Coverivo’s accessibility commitment for the website and digital tools.",
};

export default function AccessibilityPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Accessibility"
        body="Coverivo aims to make insurance information usable with keyboard, screen readers, and reduced motion settings."
      />
      <section className="section-pad bg-white">
        <Container className="max-w-3xl space-y-6 text-sm leading-relaxed text-[#5b6b82]">
          <p>
            The site is designed with visible labels, skip links, focus states, color contrast, and alternatives to
            hover-only interaction. If you find a barrier, email hello@coverivo.com and describe the page and the
            issue.
          </p>
          <p>
            Coverivo AI and quote tools should remain usable without a mouse. Document uploads include text
            alternatives through manual policy entry.
          </p>
        </Container>
      </section>
    </>
  );
}
