import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-[#071B36] py-20 sm:py-24">
      <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-[#1769FF]/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-[#18BFAE]/10 blur-3xl" />
      <Container className="relative text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#18BFAE]">Ready when you are</p>
        <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">
          Better coverage starts with a better conversation.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-white/75">
          Tell us what you need, ask Coverivo AI, or start a quote. We&apos;ll help you understand the next step.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/quote">Get My Quote</Button>
          <Button href="/ai-assistant" variant="ghost">
            Ask Coverivo AI
          </Button>
        </div>
        <Link href="/contact" className="mt-6 inline-block text-sm font-medium text-white/80 hover:text-white">
          Talk to a Professional
        </Link>
      </Container>
    </section>
  );
}
