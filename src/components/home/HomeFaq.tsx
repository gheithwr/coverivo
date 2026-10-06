"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";

const faqs = [
  {
    question: "What does an independent insurance broker do?",
    answer:
      "An independent broker works on behalf of the customer, helping you understand options and request coverage from applicable insurance markets. Coverivo is an insurance broker staffed by licensed insurance professionals, not a single-carrier sales desk.",
  },
  {
    question: "Is Coverivo an insurance company?",
    answer:
      "No. Coverivo is an independent insurance broker, not an insurance carrier. Licensed insurance professionals at Coverivo help you request and place coverage. We do not underwrite or issue policies.",
  },
  {
    question: "How does Coverivo make money?",
    answer:
      "Brokerages are commonly compensated by insurance companies through commissions or related compensation when coverage is placed. Specific compensation can vary by product, carrier, and arrangement.",
  },
  {
    question: "Does Coverivo work with multiple insurance companies?",
    answer:
      "Coverivo is built to work with applicable insurance markets rather than limiting you to one carrier. Available markets vary by location, product, licensing, and underwriting.",
  },
  {
    question: "Can Coverivo AI buy insurance for me?",
    answer:
      "No. Coverivo AI cannot bind, purchase, or issue insurance. It can help you understand options, organize information, and prepare for a conversation with a licensed professional.",
  },
  {
    question: "Does Coverivo AI replace an insurance agent?",
    answer:
      "No. AI assists with education, intake, and organization. Coverivo's licensed insurance professionals handle recommendations, placement, claims guidance, and other decisions that require human judgment.",
  },
  {
    question: "Can I upload my existing insurance policy?",
    answer:
      "Yes. You can start an AI Coverage Check to help organize policy details. Any summary is informational and should be reviewed with a Coverivo professional against the actual policy.",
  },
  {
    question: "Can Coverivo help me compare policies?",
    answer:
      "Yes. Coverivo can help you compare premium, limits, deductibles, and important differences. Comparisons are educational and are not binding offers.",
  },
  {
    question: "Does Coverivo offer business insurance?",
    answer:
      "Coverivo can help businesses explore coverages such as general liability, BOP, commercial auto, workers' compensation, cyber, and related products, subject to availability and underwriting.",
  },
  {
    question: "Does Coverivo offer employee benefits?",
    answer:
      "Yes. Coverivo can help employers explore group health, dental, vision, life, disability, and coordinated employee benefits, subject to carrier availability.",
  },
  {
    question: "Are insurance products available in every state?",
    answer:
      "Not necessarily. Products, carriers, and availability can vary by state and insurance company. Coverivo is an insurance broker with licensed insurance professionals; specific products depend on licensing, authorization, and underwriting.",
  },
  {
    question: "How is my information used?",
    answer:
      "Information you provide is used to respond to your request, organize a quote or coverage review, and follow up as you consent. See the Privacy Policy for details. We do not claim that any system is 100% secure.",
  },
];

export function HomeFaq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-pad bg-white">
      <Container className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1769FF]">FAQ</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#071B36] sm:text-4xl">
          Straight answers before you share details.
        </h2>
        <div className="mt-8 divide-y divide-[#e2eaf4] rounded-[24px] border border-[#e2eaf4] bg-[#F8FAFC]">
          {faqs.map((item, index) => {
            const isOpen = open === index;
            return (
              <div key={item.question}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer"
                  onClick={() => setOpen(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-semibold text-[#071B36] sm:text-base">{item.question}</span>
                  <ChevronDown
                    className={`h-4 w-4 shrink-0 text-[#1769FF] transition ${isOpen ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </button>
                {isOpen ? <p className="px-5 pb-5 text-sm leading-relaxed text-[#5b6b82]">{item.answer}</p> : null}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
