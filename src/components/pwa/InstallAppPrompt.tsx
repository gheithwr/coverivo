"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Download, Share, X } from "lucide-react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

function isStandalone() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true;
}

function isIos() {
  if (typeof window === "undefined") return false;
  return /iphone|ipad|ipod/i.test(window.navigator.userAgent);
}

export function InstallAppPrompt() {
  const pathname = usePathname();
  const [deferred, setDeferred] = useState<BeforeInstallPromptEvent | null>(null);
  const [iosHint, setIosHint] = useState(false);
  const [hidden, setHidden] = useState(true);
  const formPath =
    pathname.startsWith("/quote") ||
    pathname.startsWith("/signin") ||
    pathname.startsWith("/contact") ||
    pathname.startsWith("/coverage-check") ||
    pathname.startsWith("/dashboard");

  useEffect(() => {
    if (isStandalone() || window.sessionStorage.getItem("coverivo-install-dismissed") === "1") return;

    const onPrompt = (event: Event) => {
      event.preventDefault();
      setDeferred(event as BeforeInstallPromptEvent);
      setHidden(false);
    };
    window.addEventListener("beforeinstallprompt", onPrompt);

    if (isIos() && pathname === "/") {
      setIosHint(true);
      setHidden(false);
    }

    return () => window.removeEventListener("beforeinstallprompt", onPrompt);
  }, [pathname]);

  function dismiss() {
    setHidden(true);
    window.sessionStorage.setItem("coverivo-install-dismissed", "1");
  }

  async function install() {
    if (!deferred) return;
    await deferred.prompt();
    await deferred.userChoice;
    setDeferred(null);
    setHidden(true);
  }

  if (hidden || formPath) return null;

  return (
    <div className="fixed inset-x-3 z-[70] rounded-2xl border border-[#e2eaf4] bg-white p-3 shadow-[0_16px_40px_rgba(7,27,54,0.16)] md:hidden bottom-[calc(5.75rem+env(safe-area-inset-bottom))]">
      <div className="flex items-start gap-3">
        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[#1769FF] text-white">
          <Download className="h-5 w-5" aria-hidden="true" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-[#071B36]">Use Coverivo like an app</p>
          {iosHint && !deferred ? (
            <p className="mt-1 text-xs leading-relaxed text-[#5b6b82]">
              Tap Share <Share className="inline h-3 w-3" aria-hidden="true" /> then Add to Home Screen to apply from your phone.
            </p>
          ) : (
            <p className="mt-1 text-xs leading-relaxed text-[#5b6b82]">
              Add Coverivo to your home screen so you can apply for insurance and check status anytime.
            </p>
          )}
          {deferred ? (
            <button
              type="button"
              onClick={() => void install()}
              className="mt-3 inline-flex min-h-11 items-center rounded-full bg-[#1769FF] px-4 text-xs font-semibold text-white"
            >
              Add to Home Screen
            </button>
          ) : null}
        </div>
        <button
          type="button"
          onClick={dismiss}
          className="grid h-11 w-11 shrink-0 place-items-center rounded-full text-[#5b6b82]"
          aria-label="Dismiss install prompt"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
