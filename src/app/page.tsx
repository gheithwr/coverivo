import { BusinessInsurance } from "@/components/home/BusinessInsurance";
import { CoverageCheckTeaser } from "@/components/home/CoverageCheckTeaser";
import { CoverivoAiSection } from "@/components/home/CoverivoAiSection";
import { EmployeeBenefits } from "@/components/home/EmployeeBenefits";
import { FinalCta } from "@/components/home/FinalCta";
import { Hero } from "@/components/home/Hero";
import { HomeFaq } from "@/components/home/HomeFaq";
import { HowItWorks } from "@/components/home/HowItWorks";
import { HumanAi } from "@/components/home/HumanAi";
import { PersonalInsurance } from "@/components/home/PersonalInsurance";
import { QuickSelector } from "@/components/home/QuickSelector";
import { ResourcesPreview } from "@/components/home/ResourcesPreview";
import { TrustPrivacy } from "@/components/home/TrustPrivacy";
import { TrustStrip } from "@/components/home/TrustStrip";
import { WhyCoverivo } from "@/components/home/WhyCoverivo";
import { siteConfig } from "@/config/site";

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    slogan: siteConfig.tagline,
    email: siteConfig.email,
    telephone: siteConfig.phone,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />
      <QuickSelector />
      <TrustStrip />
      <WhyCoverivo />
      <CoverivoAiSection />
      <CoverageCheckTeaser />
      <HumanAi />
      <HowItWorks />
      <PersonalInsurance />
      <BusinessInsurance />
      <EmployeeBenefits />
      <TrustPrivacy />
      <ResourcesPreview />
      <HomeFaq />
      <FinalCta />
    </>
  );
}
