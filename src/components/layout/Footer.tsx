import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

const groups = [
  {
    title: "Personal",
    links: [
      { href: "/products/auto", label: "Auto" },
      { href: "/products/home", label: "Home" },
      { href: "/products/renters", label: "Renters" },
      { href: "/products/condo", label: "Condo" },
      { href: "/products/life", label: "Life" },
      { href: "/products/health", label: "Health" },
      { href: "/products/umbrella", label: "Umbrella" },
      { href: "/products/flood", label: "Flood" },
    ],
  },
  {
    title: "Business",
    links: [
      { href: "/products/general-liability", label: "General Liability" },
      { href: "/products/bop", label: "BOP" },
      { href: "/products/commercial-property", label: "Commercial Property" },
      { href: "/products/commercial-auto", label: "Commercial Auto" },
      { href: "/products/workers-compensation", label: "Workers' Compensation" },
      { href: "/products/cyber", label: "Cyber" },
      { href: "/products/professional-liability", label: "Professional Liability" },
    ],
  },
  {
    title: "Employee Benefits",
    links: [
      { href: "/products/group-health", label: "Group Health" },
      { href: "/products/dental", label: "Dental" },
      { href: "/products/vision", label: "Vision" },
      { href: "/products/group-life", label: "Life" },
      { href: "/products/disability", label: "Disability" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/about#leadership", label: "Leadership" },
      { href: "/how-it-works", label: "How It Works" },
      { href: "/resources", label: "Resources" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Get started",
    links: [
      { href: "/quote", label: "Get a Quote" },
      { href: "/ai-assistant", label: "Ask Coverivo AI" },
      { href: "/coverage-check", label: "Coverage Check" },
      { href: "/dashboard", label: "Customer Portal" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-[#071B36] text-white pb-[calc(5.5rem+env(safe-area-inset-bottom))] md:pb-0">
      <div className="px-5 py-8 md:hidden">
        <Logo light />
        <p className="mt-3 text-sm text-white/75">{siteConfig.tagline}</p>
        <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-xs text-white/70">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/licensing">Licensing</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <p className="mt-5 text-[11px] leading-relaxed text-white/50">
          Coverivo is an independent insurance broker, not an insurance carrier. Coverage is subject to underwriting and availability.
        </p>
      </div>
      <div className="hidden md:block">
      <Container className="py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-1">
            <Logo light />
            <p className="mt-4 text-sm font-medium text-white">{siteConfig.tagline}</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/65">
              Independent insurance broker. Licensed insurance professionals. Intelligent technology.
            </p>
          </div>
          {groups.map((group) => (
            <div key={group.title}>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#18BFAE]">{group.title}</p>
              <ul className="mt-4 space-y-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-white/75 transition hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap gap-x-5 gap-y-2 border-t border-white/10 pt-8 text-xs text-white/55">
          <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white">Terms</Link>
          <Link href="/accessibility" className="hover:text-white">Accessibility</Link>
          <Link href="/licensing" className="hover:text-white">Licensing</Link>
          <Link href="/ai-disclosure" className="hover:text-white">AI Disclosure</Link>
        </div>
        <div className="mt-6 text-xs leading-relaxed text-white/50">
          <p>{siteConfig.brokerageDisclaimer}</p>
          <p className="mt-3">{siteConfig.availabilityDisclaimer}</p>
          <p className="mt-3">© {new Date().getFullYear()} Coverivo. {siteConfig.domain}</p>
        </div>
      </Container>
      </div>
    </footer>
  );
}
