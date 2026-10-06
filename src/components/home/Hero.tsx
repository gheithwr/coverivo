import Link from "next/link";
import { ArrowRight, Building2, Car, FileSearch, Heart, Home, Users } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const protectOptions = [
  { label: "My Vehicle", href: "/quote?type=auto", icon: Car },
  { label: "My Home", href: "/quote?type=home", icon: Home },
  { label: "My Family", href: "/quote?type=life", icon: Heart },
  { label: "My Business", href: "/quote?type=business", icon: Building2 },
  { label: "My Employees", href: "/quote?type=employee-benefits", icon: Users },
  { label: "Review My Coverage", href: "/coverage-check", icon: FileSearch },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] pt-[calc(6.5rem+env(safe-area-inset-top))] pb-16 sm:pt-32 sm:pb-24">
      <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-[#1769FF]/10 blur-3xl" />
      <Container className="relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="animate-rise">
          <p className="mb-4 inline-flex rounded-full border border-[#e2eaf4] bg-white px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#1769FF]">
            Independent insurance + intelligent technology
          </p>
          <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-[#071B36] sm:text-6xl sm:leading-[1.05]">
            Insurance, made smarter.
          </h1>
          <p className="mt-4 text-xl font-medium text-[#0B376D]">
            Compare smarter.
            <br />
            Choose confidently.
            <br />
            Stay protected.
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[#5b6b82]">
            Coverivo combines intelligent technology with licensed insurance professionals to help you understand your
            options, compare coverage, and find insurance that fits your life or business.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/quote">
              <span className="sm:hidden">Apply on your phone</span>
              <span className="hidden sm:inline">Get My Quote</span>
            </Button>
            <Button href="/ai-assistant" variant="light">
              Ask Coverivo AI
            </Button>
          </div>
          <p className="mt-5 text-sm text-[#5b6b82]">
            Independent insurance broker · Licensed insurance professionals · Secure experience
          </p>
          <p className="mt-3 max-w-xl text-xs leading-relaxed text-[#5b6b82]">
            Coverivo is an independent insurance broker staffed by licensed insurance professionals, not an insurance
            carrier. Coverage is subject to carrier underwriting, eligibility, availability, and policy terms.
          </p>
        </div>
        <div className="animate-rise rounded-[28px] border border-[#e2eaf4] bg-white p-5 shadow-[0_24px_60px_rgba(7,27,54,0.08)] sm:p-6">
          <p className="text-sm font-semibold text-[#071B36]">Hi, what would you like to protect?</p>
          <div className="mt-4 grid grid-cols-2 gap-2">
            {protectOptions.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="min-h-16 rounded-2xl border border-[#e2eaf4] px-3 py-3 text-left transition hover:border-[#1769FF]/40"
              >
                <item.icon className="h-4 w-4 text-[#1769FF]" aria-hidden="true" />
                <span className="mt-2 block text-sm font-medium text-[#071B36]">{item.label}</span>
              </Link>
            ))}
          </div>
          <div className="mt-5 grid grid-cols-3 gap-2 text-center">
            {["Coverage", "Deductible", "Premium", "Protection", "AI Analysis", "Human Review"].map((label) => (
              <div key={label} className="rounded-xl bg-[#F8FAFC] px-2 py-2 text-[11px] font-medium text-[#5b6b82]">
                {label}
              </div>
            ))}
          </div>
          <Link href="/ai-assistant" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[#1769FF]">
            Continue with Coverivo AI
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
