import Link from "next/link";
import { ArrowRight, Briefcase, Car, HeartHandshake, Home, Layers, Users } from "lucide-react";
import { Container } from "@/components/ui/Container";

const cards = [
  { href: "/quote?type=auto", title: "Auto", body: "Vehicles, drivers, and the road ahead.", icon: Car },
  { href: "/quote?type=home", title: "Home", body: "The place you live and what is inside it.", icon: Home },
  { href: "/quote?type=life", title: "Life", body: "Support for the people who depend on you.", icon: HeartHandshake },
  { href: "/quote?type=business", title: "Business", body: "Operations, people, property, and contracts.", icon: Briefcase },
  { href: "/quote?type=employee-benefits", title: "Employee Benefits", body: "Coverage your team can actually use.", icon: Users },
  { href: "/quote?type=other", title: "Other Coverage", body: "Not sure yet? Start with a conversation.", icon: Layers },
];

export function QuickSelector() {
  return (
    <section className="section-pad bg-white">
      <Container>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1769FF]">What can we help you protect?</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="surface-card group flex items-start justify-between gap-4 p-6 transition duration-200 hover:-translate-y-1 hover:shadow-xl"
            >
              <div>
                <card.icon className="h-5 w-5 text-[#1769FF]" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-semibold text-[#071B36]">{card.title}</h3>
                <p className="mt-2 text-sm text-[#5b6b82]">{card.body}</p>
              </div>
              <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-[#1769FF] transition group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
