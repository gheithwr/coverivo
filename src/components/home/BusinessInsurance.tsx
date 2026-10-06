import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const features = [
  { href: "/products/general-liability", label: "General Liability" },
  { href: "/products/bop", label: "Business Owners Policy" },
  { href: "/products/commercial-property", label: "Commercial Property" },
  { href: "/products/commercial-auto", label: "Commercial Auto" },
  { href: "/products/workers-compensation", label: "Workers' Compensation" },
  { href: "/products/professional-liability", label: "Professional Liability" },
  { href: "/products/cyber", label: "Cyber Insurance" },
  { href: "/products/eo", label: "E&O" },
  { href: "/products/epli", label: "EPLI" },
  { href: "/products/do", label: "D&O" },
  { href: "/products/commercial-umbrella", label: "Commercial Umbrella" },
];

export function BusinessInsurance() {
  return (
    <section className="section-pad bg-[#071B36] text-white">
      <Container className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#18BFAE]">Business insurance</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Protect your business.
            <br />
            Keep building.
          </h2>
          <p className="mt-5 max-w-xl text-white/75">
            From a growing startup to an established company, Coverivo helps businesses understand the coverage they
            may need as operations, employees, property, and risks evolve.
          </p>
          <div className="mt-8">
            <Button href="/quote?type=business">Build My Business Coverage Plan</Button>
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {features.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm font-medium text-white/90 transition hover:bg-white/10"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
