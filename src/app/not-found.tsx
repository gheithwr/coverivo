import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="coverivo-gradient flex min-h-[70vh] items-center pt-[calc(7rem+env(safe-area-inset-top))]">
      <Container>
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#18BFAE]">404</p>
        <h1 className="mt-3 text-4xl font-semibold text-white">This page is not insured.</h1>
        <p className="mt-4 max-w-lg text-white/75">
          The page you requested is not on Coverivo. Try the homepage, Coverivo AI, or a quote request.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/">Go home</Button>
          <Button href="/ai-assistant" variant="ghost">
            Ask Coverivo AI
          </Button>
        </div>
      </Container>
    </section>
  );
}
