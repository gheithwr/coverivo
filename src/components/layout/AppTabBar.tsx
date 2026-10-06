"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FileText, Home, MessageCircle, ShieldPlus, UserRound } from "lucide-react";
import { cn } from "@/lib/utils";

export function AppTabBar({ signedIn = false }: { signedIn?: boolean }) {
  const pathname = usePathname();
  const accountHref = signedIn ? "/dashboard" : "/signin";
  const accountLabel = signedIn ? "Status" : "Sign in";

  const items = [
    { href: "/", label: "Home", icon: Home, match: (path: string) => path === "/" },
    { href: "/quote", label: "Apply", icon: ShieldPlus, match: (path: string) => path.startsWith("/quote") },
    { href: "/ai-assistant", label: "Ask AI", icon: MessageCircle, match: (path: string) => path.startsWith("/ai-assistant") },
    { href: "/coverage-check", label: "Coverage", icon: FileText, match: (path: string) => path.startsWith("/coverage-check") },
    { href: accountHref, label: accountLabel, icon: UserRound, match: (path: string) => path.startsWith("/dashboard") || path.startsWith("/signin") },
  ];

  return (
    <nav
      aria-label="App"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-[#e2eaf4] bg-white/95 backdrop-blur md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <ul className="grid grid-cols-5">
        {items.map((item) => {
          const active = item.match(pathname);
          const Icon = item.icon;
          return (
            <li key={item.label}>
              <Link
                href={item.href}
                className={cn(
                  "flex min-h-14 flex-col items-center justify-center gap-0.5 px-1 text-[11px] font-semibold",
                  active ? "text-[#1769FF]" : "text-[#5b6b82]"
                )}
                aria-current={active ? "page" : undefined}
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
