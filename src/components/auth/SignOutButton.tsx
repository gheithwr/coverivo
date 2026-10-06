"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

export function SignOutButton({ className }: { className?: string }) {
  const router = useRouter();
  const [pending, setPending] = useState(false);

  async function signOut() {
    setPending(true);
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/signin");
    router.refresh();
    setPending(false);
  }

  return (
    <button
      type="button"
      onClick={() => void signOut()}
      disabled={pending}
      className={cn(
        "inline-flex min-h-11 cursor-pointer items-center justify-center rounded-full px-3 text-sm font-medium text-[#5b6b82] hover:text-[#071B36] disabled:opacity-50",
        className
      )}
    >
      {pending ? "Signing out…" : "Sign out"}
    </button>
  );
}
