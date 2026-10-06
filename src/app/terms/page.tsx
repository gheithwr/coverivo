import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms governing use of the Coverivo website, quote tools, and Coverivo AI.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Use"
        body="These terms govern use of the Coverivo website and related digital tools. They should be reviewed by counsel before production use."
      />
      <section className="section-pad bg-white">
        <Container className="max-w-3xl space-y-6 text-sm leading-relaxed text-[#5b6b82]">
          <p>
            Coverivo is an independent insurance broker staffed by licensed insurance professionals, not an insurance carrier. Using this website does not
            create a bound policy, a guarantee of coverage, or an advisory relationship beyond the request you submit.
          </p>
          <h2 className="text-xl font-semibold text-[#071B36]">No binding through the website or AI</h2>
          <p>
            Quotes, comparisons, coverage checks, and Coverivo AI responses are informational. Coverage is subject to
            underwriting, eligibility, policy terms, exclusions, and carrier approval. {siteConfig.availabilityDisclaimer}
          </p>
          <h2 className="text-xl font-semibold text-[#071B36]">Accuracy of information</h2>
          <p>
            You agree to provide information that is accurate to the best of your knowledge. Misstatements can affect
            eligibility, pricing, and claim outcomes with a carrier.
          </p>
          <h2 className="text-xl font-semibold text-[#071B36]">Acceptable use</h2>
          <p>
            You may not misuse Coverivo systems, attempt unauthorized access, upload malicious files, or use the
            service to violate law.
          </p>
          <h2 className="text-xl font-semibold text-[#071B36]">Limitation</h2>
          <p>
            To the extent permitted by law, Coverivo is not liable for decisions made solely on AI output or for
            carrier underwriting outcomes. These terms do not limit rights that cannot be waived.
          </p>
        </Container>
      </section>
    </>
  );
}
