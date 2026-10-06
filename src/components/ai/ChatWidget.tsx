"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { MessageSquare, Send, Sparkles, X } from "lucide-react";
import { createOpeningMessage } from "@/lib/ai";
import type { ChatMessage } from "@/lib/types";
import { uid } from "@/lib/utils";
import { ChatTranscript } from "@/components/ai/ChatTranscript";

export function ChatWidget() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([createOpeningMessage()]);
  const [input, setInput] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  async function send(text: string) {
    const value = text.trim();
    if (!value || pending) return;
    setError("");
    setInput("");
    const userMessage: ChatMessage = { id: uid("user"), role: "user", content: value };
    setMessages((current) => [...current, userMessage]);
    setPending(true);
    try {
      const response = await fetch("/api/ai/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: value }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Unable to respond right now.");
      setMessages((current) => [...current, data.message]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to respond right now.");
    } finally {
      setPending(false);
    }
  }

  if (pathname === "/ai-assistant") return null;

  return (
    <div className="fixed bottom-5 right-5 z-[60] hidden md:block">
      {open ? (
        <div className="mb-3 flex h-[min(640px,78vh)] w-[min(400px,calc(100vw-2rem))] flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#071B36] shadow-2xl">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
            <div className="flex items-center gap-2 text-white">
              <Sparkles className="h-4 w-4 text-[#18BFAE]" aria-hidden="true" />
              <div>
                <p className="text-sm font-semibold">Coverivo AI</p>
                <a href="/contact" className="text-[11px] text-white/70 hover:text-white">
                  Talk to a person
                </a>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="grid h-11 w-11 place-items-center rounded-full text-white/80 hover:bg-white/10"
              aria-label="Close Coverivo AI"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto px-4 py-4">
            <ChatTranscript messages={messages} onSuggestion={(value) => send(value)} compact />
            {pending ? (
              <div className="mt-3 flex items-center gap-1 text-xs text-white/60">
                <span className="typing-dot h-1.5 w-1.5 rounded-full bg-white" />
                <span className="typing-dot h-1.5 w-1.5 rounded-full bg-white" />
                <span className="typing-dot h-1.5 w-1.5 rounded-full bg-white" />
                <span className="ml-2">Coverivo AI is thinking…</span>
              </div>
            ) : null}
            {error ? <p className="mt-3 text-xs text-red-200">{error}</p> : null}
            <div ref={endRef} />
          </div>
          <form
            className="border-t border-white/10 p-3"
            onSubmit={(event) => {
              event.preventDefault();
              void send(input);
            }}
          >
            <label htmlFor="coverivo-widget-input" className="sr-only">
              Message Coverivo AI
            </label>
            <div className="flex gap-2">
              <input
                id="coverivo-widget-input"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask about coverage…"
                className="min-h-11 flex-1 rounded-full border border-white/15 bg-white/10 px-4 text-sm text-white placeholder:text-white/40"
              />
              <button
                type="submit"
                disabled={pending}
                className="grid h-11 w-11 place-items-center rounded-full bg-[#1769FF] text-white"
                aria-label="Send message"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
            <p className="mt-2 text-[11px] leading-relaxed text-white/45">
              General guidance only. Does not bind coverage or guarantee pricing, eligibility, or approval.
            </p>
          </form>
        </div>
      ) : null}
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#1769FF] px-4 text-sm font-semibold text-white shadow-xl"
        aria-expanded={open}
        aria-label="Open Coverivo AI"
      >
        <MessageSquare className="h-4 w-4" aria-hidden="true" />
        Coverivo AI
      </button>
    </div>
  );
}
