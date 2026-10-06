"use client";

import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";

export function MobileCta() {
  const pathname = usePathname();
  if (pathname === "/quote" || pathname === "/ai-assistant") return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#e2eaf4] bg-white/95 px-4 py-3 backdrop-blur md:hidden">
      <Button href="/quote" fullWidth>
        Get a Quote
      </Button>
    </div>
  );
}
