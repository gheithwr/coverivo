import Link from "next/link";
import { Heart, Smile, Eye, Users, Activity } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const products = [
  { href: "/products/group-health", title: "Group Health", icon: Heart },
  { href: "/products/dental", title: "Dental", icon: Smile },
  { href: "/products/vision", title: "Vision", icon: Eye },
  { href: "/products/group-life", title: "Group Life", icon: Users },
  { href: "/products/disability", title: "Disability", icon: Activity },
  { href: "/products/employee-benefits", title: "Employee Benefits", icon: Users },
];

export function EmployeeBenefits() {
  return (
    <section className="section-pad bg-[#F8FAFC]">
      <Container>
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1769FF]">Employee benefits</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#071B36] sm:text-4xl">
            Benefits your team can believe in.
          </h2>
          <p className="mt-4 text-[#5b6b82]">
            Help attract, protect, and retain employees with a benefits strategy designed around your organization and
            workforce.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Link key={product.title} href={product.href} className="surface-card p-6 transition hover:-translate-y-1 hover:shadow-xl">
              <product.icon className="h-5 w-5 text-[#0B7F73]" aria-hidden="true" />
              <h3 className="mt-4 text-lg font-semibold text-[#071B36]">{product.title}</h3>
            </Link>
          ))}
        </div>
        <div className="mt-8">
          <Button href="/employers">Explore Employee Benefits</Button>
        </div>
      </Container>
    </section>
  );
}
