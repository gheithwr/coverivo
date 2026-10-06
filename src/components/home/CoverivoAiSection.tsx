import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const questions = [
  "What insurance do I need?",
  "Can you review my current policy?",
  "Help me get an auto insurance quote.",
  "What does my homeowners policy actually cover?",
  "What insurance does my business need?",
  "Do I need umbrella insurance?",
  "Help me compare these two policies.",
  "What employee benefits should I offer?",
];

export function CoverivoAiSection() {
  return (
    <section className="section-pad bg-[#071B36] text-white">
      <Container className="grid items-start gap-12 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#18BFAE]">Meet Coverivo AI</p>
          <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Insurance questions shouldn&apos;t require an insurance dictionary.
          </h2>
          <p className="mt-5 max-w-xl text-white/75">
            Ask Coverivo AI questions in plain English. Whether you&apos;re buying coverage, reviewing an existing policy,
            starting a business, or simply trying to understand insurance terminology, Coverivo AI helps organize the
            information and guide your next step.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {questions.map((question) => (
              <Link
                key={question}
                href="/ai-assistant"
                className="rounded-full border border-white/15 px-3 py-2 text-xs text-white/80 hover:bg-white/10"
              >
                {question}
              </Link>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/ai-assistant">Ask Coverivo AI</Button>
            <Button href="/quote" variant="ghost">
              Start a Guided Quote
            </Button>
          </div>
          <p className="mt-6 max-w-xl text-xs leading-relaxed text-white/50">
            AI provides educational and organizational assistance. It does not bind insurance, guarantee quotes,
            determine eligibility, or replace licensed professional advice where required.
          </p>
        </div>
        <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#18BFAE]">Conversation</p>
          <div className="mt-5 space-y-4 text-sm leading-relaxed">
            <div className="ml-8 rounded-2xl bg-[#1769FF] px-4 py-3 text-white">
              I own a small construction company with five employees. What coverage should I consider?
            </div>
            <div className="mr-8 rounded-2xl bg-white/10 px-4 py-3 text-white/90">
              Businesses like yours commonly evaluate several types of protection, including general liability,
              workers&apos; compensation, commercial auto, property/equipment coverage, and potentially umbrella coverage.
              I&apos;ll ask you a few questions to organize what may apply to your business.
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
