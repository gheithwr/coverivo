import Link from "next/link";
import type { ChatMessage } from "@/lib/types";
import { cn } from "@/lib/utils";

export function ChatTranscript({
  messages,
  onSuggestion,
  compact = false,
}: {
  messages: ChatMessage[];
  onSuggestion: (value: string) => void;
  compact?: boolean;
}) {
  return (
    <div className="space-y-4">
      {messages.map((message) => (
        <div key={message.id} className={cn("flex", message.role === "user" ? "justify-end" : "justify-start")}>
          <div
            className={cn(
              "max-w-[92%] rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-wrap",
              message.role === "user"
                ? "bg-[#1769FF] text-white"
                : compact
                  ? "bg-white/10 text-white"
                  : "bg-[#F3F7FC] text-[#071B36]"
            )}
          >
            <p>{message.content}</p>
            {message.suggestions?.length ? (
              <div className="mt-3 flex flex-wrap gap-2">
                {message.suggestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    onClick={() => onSuggestion(suggestion)}
                    className={cn(
                      "rounded-full border px-3 py-1.5 text-left text-xs font-medium cursor-pointer",
                      compact
                        ? "border-white/20 text-white hover:bg-white/10"
                        : "border-[#e2eaf4] bg-white text-[#0B376D] hover:border-[#1769FF]"
                    )}
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            ) : null}
            {message.actions?.length ? (
              <div className="mt-3 flex flex-wrap gap-2">
                {message.actions.map((action) => (
                  <Link
                    key={action.href + action.label}
                    href={action.href}
                    className={cn(
                      "rounded-full px-3 py-1.5 text-xs font-semibold",
                      compact ? "bg-[#18BFAE] text-[#071B36]" : "bg-[#1769FF] text-white"
                    )}
                  >
                    {action.label}
                  </Link>
                ))}
              </div>
            ) : null}
            {message.escalate ? (
              <p className={cn("mt-3 text-xs", compact ? "text-[#18BFAE]" : "text-[#1769FF]")}>
                A licensed Coverivo professional can take it from here.
              </p>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}
