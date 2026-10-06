import type { ComparisonOption, CoverageCheckResult, QuoteType } from "@/lib/types";

export const quoteTypes: { id: QuoteType; label: string; description: string }[] = [
  { id: "auto", label: "Auto", description: "Personal vehicles and drivers" },
  { id: "home", label: "Home", description: "House, condo, or dwelling" },
  { id: "renters", label: "Renters", description: "Belongings and liability" },
  { id: "life", label: "Life", description: "Income and family protection" },
  { id: "health", label: "Health", description: "Individual or family medical" },
  { id: "business", label: "Business", description: "Liability, property, and more" },
  { id: "employee-benefits", label: "Employee Benefits", description: "Group coverage for teams" },
  { id: "other", label: "Other", description: "Tell us what you need" },
];

export const sampleComparisons: ComparisonOption[] = [
  {
    id: "option-value",
    carrier: "Northline Mutual",
    plan: "Essential Auto",
    premium: "$128 / mo",
    deductible: "$1,000",
    limits: "100/300/100",
    benefits: ["Liability", "Collision", "Comprehensive", "Uninsured motorist"],
    exclusions: ["Rideshare use unless endorsed", "Custom equipment unless scheduled"],
    optionalCoverages: ["Roadside", "Rental reimbursement"],
    brokerNotes: "Competitive premium with standard limits. Confirm commuting mileage and household drivers.",
    aiSummary:
      "Lower-premium option with solid core coverages. Deductible is higher, so out-of-pocket cost after a claim may be larger.",
    label: "Lower Premium",
  },
  {
    id: "option-balanced",
    carrier: "Harbor Peak",
    plan: "Preferred Auto",
    premium: "$146 / mo",
    deductible: "$500",
    limits: "250/500/100",
    benefits: ["Higher liability limits", "Collision", "Comprehensive", "Medical payments"],
    exclusions: ["Business delivery use", "Mechanical breakdown"],
    optionalCoverages: ["Gap coverage", "New car replacement, if eligible"],
    brokerNotes: "Stronger liability limits with a more comfortable deductible. Often a practical middle path.",
    aiSummary:
      "Balanced mix of premium, deductible, and limits. May fit drivers who want more protection without the highest-cost package.",
    label: "Balanced Coverage",
  },
  {
    id: "option-protect",
    carrier: "Summit & Lake",
    plan: "Guard Auto",
    premium: "$171 / mo",
    deductible: "$250",
    limits: "250/500/100 plus umbrella-ready underlying limits",
    benefits: ["Higher limits", "Original equipment options", "Accident forgiveness if eligible"],
    exclusions: ["Intentional acts", "Wear and tear"],
    optionalCoverages: ["Umbrella coordination", "Betterment waiver where available"],
    brokerNotes: "Higher protection profile. Useful when assets, teen drivers, or umbrella plans are in view.",
    aiSummary:
      "Higher-protection option with a lower deductible and stronger limits. Premium is higher in exchange for more claim cushion.",
    label: "Higher Protection",
  },
  {
    id: "option-best-value",
    carrier: "Cedarline",
    plan: "Value Plus Auto",
    premium: "$139 / mo",
    deductible: "$500",
    limits: "100/300/100 with bundle-ready discounts",
    benefits: ["Core coverages", "Multi-policy discount potential", "Telematics optional"],
    exclusions: ["Racing", "Non-listed household drivers"],
    optionalCoverages: ["Glass", "Loan/lease gap"],
    brokerNotes: "Best overall value in this sample set if bundling home or renters is likely.",
    aiSummary:
      "Best value in this illustration because coverage and price are well aligned, especially if other policies can be bundled.",
    label: "Best Value",
  },
];

export const sampleCoverageCheck: CoverageCheckResult = {
  carrier: "Example Carrier",
  policyType: "Homeowners (HO-3 illustration)",
  effectiveDates: "03/01/2026 – 03/01/2027",
  premium: "$1,842 / year",
  limits: "Dwelling $485,000 · Liability $300,000 · Personal property $121,250",
  deductibles: "All other perils $2,500 · Wind/hail $2,500",
  keyCoverages: [
    "Dwelling and other structures",
    "Personal property",
    "Personal liability",
    "Additional living expenses",
  ],
  possibleGaps: [
    "Flood is typically excluded and not shown on this illustration",
    "Jewelry and collectibles may exceed unscheduled sublimits",
    "Water backup endorsement is not clearly indicated",
  ],
  possibleDuplicates: [
    "If a separate umbrella already includes some liability, confirm underlying limits rather than stacking assumptions",
  ],
  bundlingOpportunities: [
    "Auto and umbrella are commonly reviewed together with homeowners",
    "Scheduled personal property may be more efficient than raising blanket limits",
  ],
  summary:
    "This illustration looks like a standard homeowners structure with modest liability limits and a higher deductible. Flood, scheduled valuables, and water backup are the most common follow-up topics. A Coverivo professional should verify every item against the actual policy form.",
};

export const howItWorks = [
  {
    step: "1",
    title: "Tell Us What You Need",
    body: "Answer a few questions or use Coverivo AI. Start with the coverage you have in mind, or let us help you figure that out.",
  },
  {
    step: "2",
    title: "We Analyze Your Needs",
    body: "AI helps organize information and identify relevant coverage needs so a specialist sees a clearer picture, faster.",
  },
  {
    step: "3",
    title: "We Shop Available Options",
    body: "Coverivo works with applicable insurance markets and carriers. Availability varies by state, risk, and underwriting.",
  },
  {
    step: "4",
    title: "Compare Clearly",
    body: "Review coverage, pricing, deductibles, and differences—not just the monthly number.",
  },
  {
    step: "5",
    title: "Get Human Support",
    body: "A Coverivo insurance professional helps finalize the process, answer judgment questions, and coordinate next steps.",
  },
];

export const whyCoverivo = [
  {
    title: "Independent Advice",
    body: "Help customers evaluate options based on their needs, not a single-carrier catalog.",
  },
  {
    title: "AI-Powered Experience",
    body: "AI simplifies intake, education, policy review, and comparison so you spend less time on paperwork.",
  },
  {
    title: "Human Expertise",
    body: "Licensed professionals remain available for important decisions, placement, and complex situations.",
  },
  {
    title: "Multiple Insurance Needs",
    body: "Personal, business, and employee benefits through one broker relationship.",
  },
  {
    title: "Digital Convenience",
    body: "Start online and continue by chat, phone, video, or advisor—without restarting your story.",
  },
  {
    title: "Ongoing Support",
    body: "Support should continue after the initial policy purchase, including renewals, questions, and coverage check-ins.",
  },
];

export const aiHelpsWith = [
  "Education",
  "Intake",
  "Policy summaries",
  "Document review",
  "Quote preparation",
  "Comparisons",
  "Customer support",
];

export const humansHandle = [
  "Complex recommendations",
  "Coverage decisions",
  "Policy placement",
  "Carrier coordination",
  "Claims guidance",
  "Renewals",
];

export const suggestedQuestions = [
  "Get a Quote",
  "Review My Policy",
  "Compare Coverage",
  "Personal Insurance",
  "Business Insurance",
  "Employee Benefits",
  "Ask a Question",
];
