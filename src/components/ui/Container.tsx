import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
  id,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  as?: "div" | "section" | "header" | "footer" | "nav";
}) {
  return (
    <Tag id={id} className={cn("mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8", className)}>
      {children}
    </Tag>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  body,
  light = false,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  light?: boolean;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? (
        <p
          className={cn(
            "mb-3 text-xs font-semibold uppercase tracking-[0.18em]",
            light ? "text-[#18BFAE]" : "text-[#1769FF]"
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2 className={cn("text-3xl font-semibold tracking-tight sm:text-4xl", light ? "text-white" : "text-[#071B36]")}>
        {title}
      </h2>
      {body ? (
        <p className={cn("mt-4 text-base leading-relaxed sm:text-lg", light ? "text-white/75" : "text-[#5b6b82]")}>
          {body}
        </p>
      ) : null}
    </div>
  );
}
