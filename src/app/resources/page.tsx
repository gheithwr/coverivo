import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ResourcesHub } from "@/components/resources/ResourcesHub";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Educational insurance articles from Coverivo on brokers, deductibles, general liability, BOPs, umbrella coverage, and AI.",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Insurance explained like a human."
        body="Guides to help you understand brokers, coverage terms, and how AI can make the process easier—without replacing Coverivo's licensed insurance professionals."
      />
      <ResourcesHub />
    </>
  );
}
