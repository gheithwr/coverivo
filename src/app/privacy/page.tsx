import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Coverivo collects, uses, and protects personal information submitted through the website.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        body="Coverivo is designed to collect only the information needed to respond to quote, contact, and coverage-check requests."
      />
      <section className="section-pad bg-white">
        <Container className="max-w-3xl space-y-6 text-sm leading-relaxed text-[#5b6b82]">
          <p>
            This policy describes how Coverivo may collect and use information when you use coverivo.com, Coverivo
            AI, quote forms, coverage checks, and related services. It is a working policy for a new insurance broker
            website and should be reviewed by counsel before production use.
          </p>
          <h2 className="text-xl font-semibold text-[#071B36]">Information we collect</h2>
          <p>
            We may collect name, email, phone, ZIP code, state, preferred contact method, insurance-related details
            you provide, documents you upload, consent records, and technical data such as browser type and
            approximate location inferred from IP address.
          </p>
          <h2 className="text-xl font-semibold text-[#071B36]">How we use information</h2>
          <p>
            Information is used to respond to requests, prepare quote files, provide AI guidance, contact you with
            consent, improve the service, maintain security and audit logs, and meet legal or regulatory obligations.
          </p>
          <h2 className="text-xl font-semibold text-[#071B36]">AI processing</h2>
          <p>
            Coverivo AI may process the text and files you submit to generate educational summaries. AI output is
            not a coverage decision. Do not upload information you are not authorized to share.
          </p>
          <h2 className="text-xl font-semibold text-[#071B36]">Sharing</h2>
          <p>
            We may share information with Coverivo personnel, service providers, and insurance markets only as needed
            to service your request. We do not sell personal information.
          </p>
          <h2 className="text-xl font-semibold text-[#071B36]">Security and retention</h2>
          <p>
            Coverivo is designed for HTTPS, encryption in transit, access controls, rate limiting, and audit logging.
            Retention should be limited to what is needed for servicing, compliance, and dispute resolution.
          </p>
          <h2 className="text-xl font-semibold text-[#071B36]">Your choices</h2>
          <p>
            You may request access, correction, or deletion of information Coverivo holds about you, subject to legal
            exceptions. Contact hello@coverivo.com to make a request.
          </p>
        </Container>
      </section>
    </>
  );
}
