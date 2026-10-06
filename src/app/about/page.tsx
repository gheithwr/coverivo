import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { Leadership } from "@/components/about/Leadership";
import { WhyCoverivo } from "@/components/home/WhyCoverivo";
import { HumanAi } from "@/components/home/HumanAi";
import { FinalCta } from "@/components/home/FinalCta";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About Coverivo",
  description:
    "Coverivo is an independent insurance broker staffed by licensed insurance professionals, combining digital tools and AI-assisted workflows with human expertise.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Coverivo"
        title="Insurance shouldn't feel complicated."
        body="Coverivo is an independent insurance broker staffed by licensed insurance professionals. We combine digital tools and AI-assisted workflows with human expertise to make insurance easier to understand. We are not an insurance carrier."
        primary={{ href: "/quote", label: "Get a Quote" }}
        secondary={{ href: "/contact", label: "Contact Coverivo" }}
      />
      <section className="section-pad bg-white">
        <Container className="grid gap-5 lg:grid-cols-2">
          <figure className="overflow-hidden rounded-[28px] border border-[#e2eaf4] shadow-[0_18px_40px_rgba(7,27,54,0.08)]">
            <Image
              src="/brand/coverivo-team.webp"
              alt="The Coverivo insurance broker team in the office"
              width={1600}
              height={1067}
              className="h-auto w-full"
              priority
              sizes="(min-width: 1024px) 560px, 100vw"
            />
          </figure>
          <figure className="overflow-hidden rounded-[28px] border border-[#e2eaf4] shadow-[0_18px_40px_rgba(7,27,54,0.08)]">
            <Image
              src="/brand/coverivo-team-2.webp"
              alt="Coverivo licensed insurance professionals together at the office table"
              width={1600}
              height={1067}
              className="h-auto w-full"
              sizes="(min-width: 1024px) 560px, 100vw"
            />
          </figure>
        </Container>
        <Container id="who-we-are" className="mt-10 grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-[#071B36]">A broker built around clarity</h2>
            <p className="mt-4 text-base leading-relaxed text-[#5b6b82]">
              People do not struggle with insurance because they lack interest. They struggle because the process
              asks for too much, too soon, in language that is hard to use. Coverivo starts with questions,
              documents, and comparisons that make sense—then a licensed Coverivo insurance professional handles
              coverage decisions, placement, and sensitive issues.
            </p>
              <p className="mt-4 text-base leading-relaxed text-[#5b6b82]">
              We serve individuals and families, small businesses, and employers. The same insurance broker can help with
              personal policies, commercial coverage, and employee benefits without forcing you to restart your story.
            </p>
          </div>
          <div className="surface-card p-6">
            <h3 className="text-lg font-semibold text-[#071B36]">Who we are</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#5b6b82]">
              Coverivo is an insurance broker. Licensed insurance professionals work with you on recommendations,
              placement, claims guidance, and renewals. AI helps organize information; it does not replace those
              professionals.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[#5b6b82]">
              Coverivo does not publish made-up years in business, customer counts, carrier lists, awards, or
              invented license numbers. Specific license details belong on the licensing page as they are published.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[#5b6b82]">{siteConfig.supporting}</p>
          </div>
        </Container>
      </section>
      <Leadership />
      <WhyCoverivo />
      <HumanAi />
      <FinalCta />
    </>
  );
}
