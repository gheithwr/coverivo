"use client";

import { useEffect, useRef, useState } from "react";
import { Send } from "lucide-react";
import { ChatTranscript } from "@/components/ai/ChatTranscript";
import { createOpeningMessage } from "@/lib/ai";
import type { ChatMessage } from "@/lib/types";
import { uid } from "@/lib/utils";

export function AiAssistantClient() {
  const [messages, setMessages] = useState<ChatMessage[]>([createOpeningMessage()]);
  const [input, setInput] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function send(text: string) {
    const value = text.trim();
    if (!value || pending) return;
    setError("");
    setInput("");
    setMessages((current) => [...current, { id: uid("user"), role: "user", content: value }]);
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

  return (
    <div className="surface-card flex min-h-[28rem] flex-col overflow-hidden sm:min-h-[640px]">
      <div className="flex items-start justify-between gap-4 border-b border-[#e2eaf4] px-6 py-4">
        <div>
          <p className="text-sm font-semibold text-[#071B36]">Conversation with Coverivo AI</p>
          <p className="text-xs text-[#5b6b82]">Progressive questions. No giant form unless you want one.</p>
        </div>
        <a href="/contact" className="shrink-0 text-xs font-semibold text-[#1769FF]">
          Talk to a person
        </a>
      </div>
      <div className="flex-1 overflow-y-auto px-6 py-5">
        <ChatTranscript messages={messages} onSuggestion={(value) => send(value)} />
        {pending ? (
          <div className="mt-4 flex items-center gap-1 text-xs text-[#5b6b82]">
            <span className="typing-dot h-1.5 w-1.5 rounded-full bg-[#1769FF]" />
            <span className="typing-dot h-1.5 w-1.5 rounded-full bg-[#1769FF]" />
            <span className="typing-dot h-1.5 w-1.5 rounded-full bg-[#1769FF]" />
            <span className="ml-2">Coverivo AI is thinking…</span>
          </div>
        ) : null}
        {error ? (
          <p className="mt-4 text-sm text-[#b42318]" role="alert">
            {error}
          </p>
        ) : null}
        <div ref={endRef} />
      </div>
      <form
        className="border-t border-[#e2eaf4] p-4"
        onSubmit={(event) => {
          event.preventDefault();
          void send(input);
        }}
      >
        <label htmlFor="coverivo-ai-page-input" className="sr-only">
          Message Coverivo AI
        </label>
        <div className="flex gap-2">
          <input
            id="coverivo-ai-page-input"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Ask about coverage, quotes, or a policy review…"
            className="min-h-11 flex-1 rounded-full border border-[#e2eaf4] px-4 text-sm text-[#071B36]"
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
      </form>
    </div>
  );
}
