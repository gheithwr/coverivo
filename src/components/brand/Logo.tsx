import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ light = false, className }: { light?: boolean; className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center min-h-11", className)} aria-label="Coverivo home">
      <Image
        src={light ? "/brand/coverivo-logo-light.png" : "/brand/coverivo-logo.png"}
        alt="Coverivo"
        width={156}
        height={40}
        className="h-9 w-auto"
        priority={!light}
      />
    </Link>
  );
}
