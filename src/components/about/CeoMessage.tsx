import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const paragraphs = [
  "At Coverivo, we believe insurance should provide more than a policy — it should provide confidence.",
  "Our mission is to make the insurance experience simpler, more transparent, and more personal. As an independent insurance broker, our responsibility is to understand the needs of our clients, help them explore appropriate coverage options, and support them in making informed decisions.",
  "We are building Coverivo around the combination of human expertise and intelligent technology. By using modern digital tools and AI capabilities alongside experienced insurance professionals, we aim to reduce complexity, improve the customer experience, and make it easier for individuals and businesses to navigate their insurance needs.",
  "Technology may change how insurance is delivered, but our commitment remains personal. Trust, integrity, transparency, and service are at the center of every client relationship we build.",
  "Whether you are protecting your family, your home, your vehicle, or your business, our goal is to be a brokerage you can rely on today and for the years ahead.",
  "Thank you for placing your trust in Coverivo. We look forward to serving you.",
];

export function CeoMessage() {
  return (
    <section className="section-pad bg-[#F8FAFC]" aria-labelledby="ceo-message-heading">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <figure className="mx-auto w-full max-w-[420px] lg:mx-0 lg:max-w-none">
            <div className="overflow-hidden rounded-[28px] border border-[#e2eaf4] bg-white p-2 shadow-[0_18px_40px_rgba(7,27,54,0.08)]">
              <Image
                src="/brand/fadi-elkhatib.webp"
                alt="Fadi Elkhatib, Founder and Chief Executive Officer of Coverivo"
                width={900}
                height={1125}
                className="h-auto w-full rounded-[22px] object-cover object-top"
                sizes="(min-width: 1024px) 420px, (min-width: 640px) 420px, 100vw"
              />
            </div>
          </figure>
          <div className="relative">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -left-2 -top-8 select-none font-serif text-[120px] leading-none text-[#1769FF]/10 sm:-left-3 sm:-top-10 sm:text-[140px]"
            >
              “
            </span>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1769FF]">Leadership</p>
            <h2 id="ceo-message-heading" className="mt-3 text-3xl font-semibold tracking-tight text-[#071B36] sm:text-4xl">
              A Message from Our CEO
            </h2>
            <div className="relative mt-6 space-y-4 text-base leading-relaxed text-[#5b6b82]">
              {paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-8 border-t border-[#e2eaf4] pt-5">
              <p className="text-base font-semibold text-[#071B36]">Fadi Elkhatib</p>
              <p className="mt-1 text-sm text-[#5b6b82]">Founder & Chief Executive Officer</p>
              <p className="text-sm text-[#5b6b82]">Coverivo</p>
            </div>
            <div className="mt-6">
              <Button href="/about#who-we-are" variant="light">
                Learn More About Coverivo
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
