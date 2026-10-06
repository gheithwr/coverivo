import { siteConfig } from "@/config/site";

export function AiDisclaimer({ className = "" }: { className?: string }) {
  return (
    <p className={`text-xs leading-relaxed text-[#5b6b82] ${className}`}>
      {siteConfig.aiDisclaimer} Coverivo is an independent insurance broker staffed by licensed insurance professionals, not an insurance carrier.
    </p>
  );
}
