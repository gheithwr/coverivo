"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Field } from "@/components/ui/Field";
import { isValidEmail } from "@/lib/utils";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("consultation");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");
  const [done, setDone] = useState("");

  async function submit() {
    if (!name || !isValidEmail(email) || !message || !consent) {
      setError("Please complete the required fields and consent to contact.");
      return;
    }
    setError("");
    setPending(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, topic, message, consent }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Unable to send.");
      setDone(data.message);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to send.");
    } finally {
      setPending(false);
    }
  }

  if (done) {
    return (
      <div className="surface-card p-8">
        <h2 className="text-2xl font-semibold text-[#071B36]">Message received</h2>
        <p className="mt-3 text-sm text-[#5b6b82]">{done}</p>
      </div>
    );
  }

  return (
    <div id="consultation" className="surface-card p-6 sm:p-8">
      <h2 className="text-2xl font-semibold text-[#071B36]">Contact form</h2>
      <p className="mt-2 text-sm text-[#5b6b82]">
        Use this for general questions or to schedule a consultation. For a structured quote, use Get a Quote.
      </p>
      <div className="mt-6 space-y-4">
        <Field label="Name" name="name" required value={name} onChange={setName} autoComplete="name" />
        <Field
          label="Email"
          name="email"
          type="email"
          required
          value={email}
          onChange={setEmail}
          autoComplete="email"
          inputMode="email"
          enterKeyHint="next"
        />
        <Field
          label="Topic"
          name="topic"
          type="select"
          value={topic}
          onChange={setTopic}
          options={[
            { value: "consultation", label: "Schedule consultation" },
            { value: "quote", label: "Quote follow-up" },
            { value: "coverage-check", label: "Coverage check" },
            { value: "benefits", label: "Employee benefits" },
            { value: "other", label: "Other" },
          ]}
        />
        <Field
          label="Message"
          name="message"
          type="textarea"
          required
          value={message}
          onChange={setMessage}
          placeholder="How can Coverivo help?"
        />
        <label className="flex min-h-11 items-start gap-3 text-sm text-[#071B36]">
          <input
            type="checkbox"
            checked={consent}
            onChange={(event) => setConsent(event.target.checked)}
            className="mt-1 h-5 w-5 shrink-0"
          />
          I consent to Coverivo contacting me about this message. This does not bind coverage.
        </label>
        <Button onClick={submit} disabled={pending}>
          {pending ? "Sending…" : "Send message"}
        </Button>
        {error ? (
          <p className="text-sm text-[#b42318]" role="alert">
            {error}
          </p>
        ) : null}
      </div>
    </div>
  );
}
