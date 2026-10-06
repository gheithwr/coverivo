import Link from "next/link";
import { ArrowRight, Car, Dog, Heart, Home, Plane, Shield, Umbrella, Waves } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const cards = [
  { href: "/products/auto", title: "Auto Insurance", icon: Car },
  { href: "/products/home", title: "Home Insurance", icon: Home },
  { href: "/products/renters", title: "Renters Insurance", icon: Home },
  { href: "/products/condo", title: "Condo Insurance", icon: Home },
  { href: "/products/life", title: "Life Insurance", icon: Heart },
  { href: "/products/health", title: "Health Insurance", icon: Heart },
  { href: "/products/umbrella", title: "Umbrella Insurance", icon: Umbrella },
  { href: "/products/flood", title: "Flood Insurance", icon: Waves },
  { href: "/products/travel", title: "Travel Insurance", icon: Plane },
  { href: "/products/pet", title: "Pet Insurance", icon: Dog },
];

export function PersonalInsurance() {
  return (
    <section className="section-pad bg-white">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1769FF]">Personal insurance</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#071B36] sm:text-4xl">
              Protect the life you&apos;re building.
            </h2>
            <p className="mt-3 text-[#5b6b82]">Coverage for the people, places, and things that matter most.</p>
          </div>
          <Button href="/individuals" variant="light">
            Explore Personal Insurance
          </Button>
        </div>
        <div className="mt-10 flex gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-5 md:overflow-visible">
          {cards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="surface-card group min-w-[200px] shrink-0 p-5 transition duration-200 hover:-translate-y-1 hover:shadow-xl md:min-w-0"
            >
              <card.icon className="h-5 w-5 text-[#1769FF]" aria-hidden="true" />
              <h3 className="mt-4 text-sm font-semibold text-[#071B36]">{card.title}</h3>
              <ArrowRight className="mt-3 h-4 w-4 text-[#1769FF] transition group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          ))}
        </div>
        <p className="mt-6 inline-flex items-center gap-2 text-xs text-[#5b6b82]">
          <Shield className="h-3.5 w-3.5 text-[#0B7F73]" aria-hidden="true" />
          Availability varies by state, carrier, and underwriting.
        </p>
      </Container>
    </section>
  );
}
