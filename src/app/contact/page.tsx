import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/contact/ContactForm";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Contact Coverivo",
  description: "Contact Coverivo to request a quote, schedule a consultation, or ask Coverivo AI a question.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell Coverivo how to help."
        body="Request a quote, schedule a consultation, or start with Coverivo AI. A licensed Coverivo insurance professional handles anything that should not be automated."
        primary={{ href: "/quote", label: "Request Quote" }}
        secondary={{ href: "/ai-assistant", label: "AI Assistant" }}
      />
      <section className="section-pad bg-[#F3F7FC]">
        <Container className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <ContactForm />
          <aside className="space-y-5">
            <div className="surface-card p-6">
              <h2 className="text-lg font-semibold text-[#071B36]">Reach Coverivo</h2>
              <dl className="mt-4 space-y-3 text-sm">
                <div>
                  <dt className="text-[#5b6b82]">Phone</dt>
                  <dd className="font-medium text-[#071B36]">{siteConfig.phone}</dd>
                </div>
                <div>
                  <dt className="text-[#5b6b82]">Email</dt>
                  <dd className="font-medium text-[#071B36]">{siteConfig.email}</dd>
                </div>
                <div>
                  <dt className="text-[#5b6b82]">Business hours</dt>
                  <dd className="font-medium text-[#071B36]">{siteConfig.hours}</dd>
                </div>
              </dl>
              <p className="mt-4 text-xs text-[#5b6b82]">
                Phone, email, and hours are placeholders until Coverivo publishes operating details.
              </p>
            </div>
            <div className="surface-card p-6">
              <h2 className="text-lg font-semibold text-[#071B36]">Other ways to start</h2>
              <div className="mt-4 flex flex-col gap-2">
                <Button href="/quote">
                  Request Quote
                </Button>
                <Button href="/contact#consultation" variant="light">
                  Schedule Consultation
                </Button>
                <Button href="/ai-assistant" variant="light">
                  AI Assistant
                </Button>
              </div>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}
