import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost" | "light";

const variants: Record<Variant, string> = {
  primary:
    "bg-[#1769FF] text-white hover:bg-[#0f5ae6] shadow-[0_10px_24px_rgba(23,105,255,0.28)]",
  ghost: "bg-transparent text-white border border-white/25 hover:bg-white/10",
  light: "bg-white text-[#071B36] border border-[#e2eaf4] hover:border-[#1769FF]/40 hover:shadow-md",
};

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
}

export function Button({
  href,
  children,
  variant = "primary",
  className,
  type = "button",
  onClick,
  disabled,
  fullWidth,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold tracking-tight transition duration-200 cursor-pointer min-h-11 disabled:opacity-50 disabled:cursor-not-allowed",
    variants[variant],
    fullWidth && "w-full",
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
