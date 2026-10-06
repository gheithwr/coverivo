import Image from "next/image";
import { cn } from "@/lib/utils";

export function LeadershipMessage({
  id,
  heading,
  name,
  title,
  imageSrc,
  imageAlt,
  paragraphs,
  reverse = false,
  className,
}: {
  id: string;
  heading: string;
  name: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  paragraphs: string[];
  reverse?: boolean;
  className?: string;
}) {
  return (
    <article id={id} className={cn("scroll-mt-28", className)}>
      <div
        className={cn(
          "grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14",
          reverse && "lg:grid-cols-[1.1fr_0.9fr]"
        )}
      >
        <figure className={cn("mx-auto w-full max-w-[420px] lg:mx-0 lg:max-w-none", reverse && "lg:order-2")}>
          <div className="overflow-hidden rounded-[28px] border border-[#e2eaf4] bg-white p-2 shadow-[0_18px_40px_rgba(7,27,54,0.08)]">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={900}
              height={1125}
              className="aspect-[4/5] h-auto w-full rounded-[22px] object-cover object-[center_18%]"
              sizes="(min-width: 1024px) 420px, (min-width: 640px) 420px, 100vw"
            />
          </div>
        </figure>
        <div className={cn("relative", reverse && "lg:order-1")}>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -left-2 -top-8 select-none font-serif text-[120px] leading-none text-[#1769FF]/10 sm:-left-3 sm:-top-10 sm:text-[140px]"
          >
            “
          </span>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1769FF]">Leadership</p>
          <h3 className="mt-3 text-3xl font-semibold tracking-tight text-[#071B36] sm:text-4xl">{heading}</h3>
          <div className="relative mt-6 space-y-4 text-base leading-relaxed text-[#5b6b82]">
            {paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-8 border-t border-[#e2eaf4] pt-5">
            <p className="text-base font-semibold text-[#071B36]">{name}</p>
            <p className="mt-1 text-sm text-[#5b6b82]">{title}</p>
            <p className="text-sm text-[#5b6b82]">Coverivo</p>
          </div>
        </div>
      </div>
    </article>
  );
}
