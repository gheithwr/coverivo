"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, Sparkles, X } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { SignOutButton } from "@/components/auth/SignOutButton";
import { businessProducts, employerProducts, individualProducts } from "@/data/products";
import { cn } from "@/lib/utils";

type MenuKey = "personal" | "business" | "benefits";

const desktopLinks: { href: string; label: string; menu?: MenuKey }[] = [
  { href: "/individuals", label: "Personal", menu: "personal" },
  { href: "/business", label: "Business", menu: "business" },
  { href: "/employers", label: "Employee Benefits", menu: "benefits" },
  { href: "/products", label: "Insurance Products" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About" },
];

const menuProducts = {
  personal: individualProducts,
  business: businessProducts,
  benefits: employerProducts,
};

export function Header({ signedIn = false }: { signedIn?: boolean }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState<MenuKey | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setMenu(null);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!mobileMenuRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [open]);

  const solid = scrolled || pathname !== "/";

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[80] transition duration-200 pt-[env(safe-area-inset-top)]",
        solid ? "bg-white/95 text-[#071B36] shadow-[0_8px_24px_rgba(7,27,54,0.06)] backdrop-blur-md" : "bg-transparent text-[#071B36]"
      )}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-full focus:bg-[#1769FF] focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-3 px-4 py-3 lg:px-6">
        <Logo />
        <nav className="hidden items-center xl:flex" aria-label="Primary">
          {desktopLinks.map((link) => (
            <div
              key={link.href}
              className="relative"
              onMouseEnter={() => setMenu(link.menu ?? null)}
              onMouseLeave={() => setMenu(null)}
            >
              <Link
                href={link.href}
                className={cn(
                  "inline-flex min-h-11 items-center gap-1 rounded-full px-3 text-[13px] font-medium text-[#5b6b82] transition hover:bg-[#F3F7FC] hover:text-[#071B36]",
                  pathname.startsWith(link.href) && "bg-[#F3F7FC] text-[#071B36]"
                )}
                aria-expanded={link.menu ? menu === link.menu : undefined}
                onFocus={() => setMenu(link.menu ?? null)}
              >
                {link.label}
                {link.menu ? <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" /> : null}
              </Link>
              {link.menu && menu === link.menu ? (
                <div className="absolute left-0 top-full w-[280px] pt-2">
                  <div className="rounded-2xl border border-[#e2eaf4] bg-white p-3 shadow-xl">
                    {menuProducts[link.menu].slice(0, 8).map((product) => (
                      <Link
                        key={product.slug}
                        href={product.href}
                        className="block rounded-xl px-3 py-2 text-sm text-[#5b6b82] hover:bg-[#F3F7FC] hover:text-[#071B36]"
                      >
                        {product.shortName}
                      </Link>
                    ))}
                    <Link href={link.href} className="mt-1 block px-3 py-2 text-sm font-semibold text-[#1769FF]">
                      View all
                    </Link>
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          {signedIn ? (
            <>
              <Link href="/dashboard" className="inline-flex min-h-11 items-center px-3 text-sm font-medium text-[#5b6b82] hover:text-[#071B36]">
                My applications
              </Link>
              <SignOutButton />
            </>
          ) : (
            <Link href="/signin" className="inline-flex min-h-11 items-center px-3 text-sm font-medium text-[#5b6b82] hover:text-[#071B36]">
              Sign In
            </Link>
          )}
          <Button href="/ai-assistant" variant="light" className="!px-4 !py-2.5 text-xs">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            Ask Coverivo AI
          </Button>
          <Button href="/quote" className="!px-4 !py-2.5 text-xs">
            Get a Quote
          </Button>
        </div>
        <div className="relative xl:hidden" ref={mobileMenuRef}>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#e2eaf4] text-[#071B36]"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
          {open ? (
            <nav
              id="mobile-nav"
              aria-label="Mobile"
              className="absolute right-0 top-[calc(100%+8px)] z-[90] w-[min(260px,calc(100vw-2rem))] overflow-hidden rounded-2xl border border-[#e2eaf4] bg-white shadow-[0_16px_40px_rgba(7,27,54,0.16)]"
            >
              <div className="max-h-[min(62vh,440px)] overflow-y-auto overscroll-contain p-2">
                {desktopLinks.map((link) => (
                  <div key={link.href} className="mb-0.5">
                    <Link
                      href={link.href}
                      className="flex min-h-11 items-center rounded-xl px-3 text-sm font-semibold text-[#071B36] hover:bg-[#F3F7FC]"
                    >
                      {link.label}
                    </Link>
                    {link.menu
                      ? menuProducts[link.menu].slice(0, 8).map((product) => (
                          <Link
                            key={product.slug}
                            href={product.href}
                            className="flex min-h-11 items-center rounded-lg px-3 pl-5 text-[13px] text-[#5b6b82] hover:bg-[#F3F7FC] hover:text-[#071B36]"
                          >
                            {product.shortName}
                          </Link>
                        ))
                      : null}
                  </div>
                ))}
                <Link
                  href="/contact"
                  className="flex min-h-11 items-center rounded-xl px-3 text-sm font-semibold text-[#071B36] hover:bg-[#F3F7FC]"
                >
                  Contact
                </Link>
                {signedIn ? (
                  <>
                    <Link
                      href="/dashboard"
                      className="flex min-h-11 items-center rounded-xl px-3 text-sm font-semibold text-[#071B36] hover:bg-[#F3F7FC]"
                    >
                      My applications
                    </Link>
                    <SignOutButton className="w-full justify-start rounded-xl px-3 font-semibold text-[#071B36] hover:bg-[#F3F7FC]" />
                  </>
                ) : (
                  <Link
                    href="/signin"
                    className="flex min-h-11 items-center rounded-xl px-3 text-sm font-semibold text-[#071B36] hover:bg-[#F3F7FC]"
                  >
                    Sign In
                  </Link>
                )}
                <div className="mt-2 flex flex-col gap-2 border-t border-[#e2eaf4] p-2">
                  <Button href="/quote" className="!py-2.5 text-xs">
                    Get a Quote
                  </Button>
                  <Button href="/ai-assistant" variant="light" className="!py-2.5 text-xs">
                    Ask Coverivo AI
                  </Button>
                </div>
              </div>
            </nav>
          ) : null}
        </div>
      </div>
    </header>
  );
}
