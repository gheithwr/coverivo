import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function PageHero({
  eyebrow,
  title,
  body,
  primary,
  secondary,
  compact = false,
}: {
  eyebrow?: string;
  title: string;
  body: string;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
  compact?: boolean;
}) {
  return (
    <section
      className={
        compact
          ? "relative overflow-hidden bg-[#F3F7FC] pt-[calc(5.75rem+env(safe-area-inset-top))] pb-6 sm:pt-32 sm:pb-16"
          : "relative overflow-hidden bg-[#F3F7FC] pt-[calc(6.5rem+env(safe-area-inset-top))] pb-10 sm:pt-32 sm:pb-16"
      }
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#071B36]/6 to-transparent" />
      <Container className="relative">
        {eyebrow ? (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#1769FF]">{eyebrow}</p>
        ) : null}
        <h1
          className={
            compact
              ? "max-w-3xl text-[1.75rem] font-semibold tracking-tight text-[#071B36] sm:text-[48px] sm:leading-[1.12]"
              : "max-w-3xl text-4xl font-semibold tracking-tight text-[#071B36] sm:text-[48px] sm:leading-[1.12]"
          }
        >
          {title}
        </h1>
        <p className={compact ? "mt-3 max-w-2xl text-sm leading-relaxed text-[#5b6b82] sm:mt-5 sm:text-lg" : "mt-5 max-w-2xl text-base leading-relaxed text-[#5b6b82] sm:text-lg"}>
          {body}
        </p>
        {(primary || secondary) && (
          <div className={compact ? "mt-5 hidden flex-wrap gap-3 sm:mt-8 sm:flex" : "mt-8 flex flex-wrap gap-3"}>
            {primary ? <Button href={primary.href}>{primary.label}</Button> : null}
            {secondary ? (
              <Button href={secondary.href} variant="light">
                {secondary.label}
              </Button>
            ) : null}
          </div>
        )}
      </Container>
    </section>
  );
}
