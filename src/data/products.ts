import type { InsuranceProduct } from "@/lib/types";

export const products: InsuranceProduct[] = [
  {
    slug: "auto",
    name: "Auto Insurance",
    shortName: "Auto",
    audience: "individuals",
    href: "/products/auto",
    summary: "Coverage designed to help protect you, your vehicle, and others on the road.",
    description:
      "Auto insurance can help cover damage, medical costs, and liability if you are involved in an accident. Coverivo helps you understand required coverages in your state, optional protections, and how deductibles and limits affect cost.",
    whoNeeds: [
      "Anyone who owns, leases, or regularly drives a vehicle",
      "Households with teen or high-mileage drivers",
      "People who commute, travel, or share vehicles",
    ],
    coverages: [
      "Liability for bodily injury and property damage",
      "Collision and comprehensive coverage",
      "Uninsured and underinsured motorist protection",
      "Medical payments or personal injury protection where available",
      "Optional roadside, rental, and gap coverage",
    ],
    considerations: [
      "State minimums may not be enough for your assets",
      "Vehicle value, driving history, and usage affect pricing",
      "Bundling auto with home or renters may create savings opportunities",
    ],
    faqs: [
      {
        question: "Is Coverivo an auto insurance company?",
        answer:
          "No. Coverivo is an independent insurance broker staffed by licensed insurance professionals. We help you request and compare auto coverage from applicable markets. We do not issue policies.",
      },
      {
        question: "What information is needed for an auto quote?",
        answer:
          "Typically your ZIP code, vehicles, drivers, usage, and any current coverage. Coverivo AI can gather this step by step.",
      },
    ],
  },
  {
    slug: "home",
    name: "Homeowners Insurance",
    shortName: "Home",
    audience: "individuals",
    href: "/products/home",
    summary: "Help protect your home, belongings, and personal liability.",
    description:
      "Homeowners insurance typically covers the dwelling, personal property, liability, and additional living expenses after a covered loss. Coverivo helps you review limits, deductibles, and possible gaps such as flood or higher-value belongings.",
    whoNeeds: [
      "Homeowners and people buying a home",
      "Anyone with a mortgage that requires coverage",
      "Households with valuable belongings or renovation plans",
    ],
    coverages: [
      "Dwelling and other structures",
      "Personal property",
      "Personal liability",
      "Additional living expenses",
      "Optional endorsements for jewelry, water backup, or scheduled items",
    ],
    considerations: [
      "Replacement cost and reconstruction estimates should be reviewed regularly",
      "Flood and earthquake are usually excluded from standard homeowners policies",
      "Deductible choice can meaningfully change premium",
    ],
    faqs: [
      {
        question: "Does homeowners insurance cover floods?",
        answer:
          "Typically no. Flood coverage is usually a separate policy. Coverivo can help you review whether flood protection should be considered.",
      },
    ],
  },
  {
    slug: "renters",
    name: "Renters Insurance",
    shortName: "Renters",
    audience: "individuals",
    href: "/products/renters",
    summary: "Coverage for belongings, liability, and extra living expenses as a renter.",
    description:
      "Renters insurance can help protect personal belongings and provide liability coverage if someone is injured in your rented home. Coverivo helps you understand limits, replacement cost options, and what a landlord policy does not cover.",
    whoNeeds: [
      "Apartment, house, and room renters",
      "Students living off campus",
      "Anyone whose landlord requires proof of insurance",
    ],
    coverages: [
      "Personal property",
      "Personal liability",
      "Loss of use / additional living expenses",
      "Optional scheduled personal property",
    ],
    considerations: [
      "A landlord policy generally covers the building, not your belongings",
      "High-value items may need scheduled coverage",
      "Roommates may need their own policy",
    ],
    faqs: [
      {
        question: "Does my landlord's insurance cover my things?",
        answer:
          "Usually not. Landlord coverage typically protects the building. Renters insurance is designed for your belongings and liability.",
      },
    ],
  },
  {
    slug: "condo",
    name: "Condo Insurance",
    shortName: "Condo",
    audience: "individuals",
    href: "/products/condo",
    summary: "Coverage tailored to condominium ownership and association requirements.",
    description:
      "Condo insurance (often called HO-6) can help cover interior finishes, belongings, loss assessment, and liability. Coverivo helps you align coverage with your association's master policy.",
    whoNeeds: [
      "Condominium owners",
      "Buyers of condos or townhomes with association master policies",
    ],
    coverages: [
      "Interior walls, fixtures, and improvements",
      "Personal property",
      "Loss assessment",
      "Personal liability",
    ],
    considerations: [
      "Master policy details determine how much interior coverage you need",
      "Loss assessment coverage can be important after shared-building claims",
    ],
    faqs: [
      {
        question: "How is condo insurance different from homeowners insurance?",
        answer:
          "Condo coverage is typically designed around a master association policy. It often focuses more on interiors, belongings, and assessments than the full building structure.",
      },
    ],
  },
  {
    slug: "life",
    name: "Life Insurance",
    shortName: "Life",
    audience: "individuals",
    href: "/products/life",
    summary: "Help provide financial support for people who depend on you.",
    description:
      "Life insurance can help replace income, cover debts, or support long-term goals if you pass away. Coverivo can help you compare term and permanent options at a high level and connect you with a licensed professional for recommendations.",
    whoNeeds: [
      "Parents and caregivers",
      "People with a mortgage, business loans, or dependents",
      "Anyone planning for estate or income replacement needs",
    ],
    coverages: [
      "Term life for a defined period",
      "Permanent life options where appropriate",
      "Optional riders such as accelerated benefits, subject to underwriting",
    ],
    considerations: [
      "Needs analysis should consider income, debts, and dependents",
      "Health and underwriting affect eligibility and pricing",
      "Coverivo AI does not bind coverage or guarantee approval",
    ],
    faqs: [
      {
        question: "Can Coverivo AI approve a life insurance application?",
        answer:
          "No. AI can help gather information and explain concepts. A licensed professional and the carrier handle underwriting and policy placement.",
      },
    ],
  },
  {
    slug: "health",
    name: "Health Insurance",
    shortName: "Health",
    audience: "individuals",
    href: "/products/health",
    summary: "Help explore individual and family health coverage options.",
    description:
      "Health insurance can help manage medical costs through networks, deductibles, and cost-sharing. Coverivo can help you organize needs and connect with a specialist. Availability depends on state, enrollment periods, and carrier rules.",
    whoNeeds: [
      "Individuals and families shopping for medical coverage",
      "People between employer plans",
      "Households comparing metal tiers or network types",
    ],
    coverages: [
      "Medical expense coverage subject to plan design",
      "Preventive care as defined by the plan",
      "Prescription, specialist, and hospital benefits depending on the option",
    ],
    considerations: [
      "Open enrollment and special enrollment rules apply",
      "Networks, deductibles, and out-of-pocket maximums matter as much as premium",
      "Coverivo is an insurance broker, not a health insurer",
    ],
    faqs: [
      {
        question: "Can I enroll in health coverage any time?",
        answer:
          "Not always. Many individual plans follow enrollment windows unless a qualifying event applies. A Coverivo specialist can help you review timing.",
      },
    ],
  },
  {
    slug: "umbrella",
    name: "Umbrella Insurance",
    shortName: "Umbrella",
    audience: "individuals",
    href: "/products/umbrella",
    summary: "Extra liability protection above auto and home limits.",
    description:
      "Personal umbrella insurance can provide additional liability limits after underlying auto or homeowners coverage is exhausted. Coverivo helps you evaluate whether higher limits may be appropriate for your assets and risk profile.",
    whoNeeds: [
      "People with significant assets or future earnings",
      "Households with teenage drivers, pools, or frequent guests",
      "Anyone concerned about lawsuit exposure above primary limits",
    ],
    coverages: [
      "Excess liability over auto and home policies, subject to terms",
      "Coverage for certain personal injury claims depending on the form",
    ],
    considerations: [
      "Underlying auto and home limits usually must meet carrier minimums",
      "Umbrella is not a replacement for primary coverage",
    ],
    faqs: [
      {
        question: "Do I need umbrella insurance?",
        answer:
          "It depends on your assets, lifestyle, and current liability limits. Coverivo AI can help you think through the question; a licensed advisor should review your situation.",
      },
    ],
  },
  {
    slug: "flood",
    name: "Flood Insurance",
    shortName: "Flood",
    audience: "individuals",
    href: "/products/flood",
    summary: "Separate coverage for flood-related damage, which standard home policies usually exclude.",
    description:
      "Flood insurance is typically not included in a standard homeowners or renters policy. Coverivo can help you review flood exposure and gather information for available flood options.",
    whoNeeds: [
      "Property owners in high-risk flood zones",
      "Anyone whose mortgage lender requires flood coverage",
      "Homeowners outside mapped flood zones who still want protection",
    ],
    coverages: [
      "Building coverage for eligible structures",
      "Contents coverage for personal property, when selected",
    ],
    considerations: [
      "Waiting periods often apply",
      "Flood maps and elevation details can affect eligibility and cost",
    ],
    faqs: [
      {
        question: "Is flood covered by homeowners insurance?",
        answer:
          "Usually no. Flood is commonly excluded and handled through a separate policy.",
      },
    ],
  },
  {
    slug: "travel",
    name: "Travel Insurance",
    shortName: "Travel",
    audience: "individuals",
    href: "/products/travel",
    summary: "Help protect trips against cancellation, medical, and travel disruption risks.",
    description:
      "Travel insurance can help with trip cancellation, interruption, emergency medical, and baggage issues depending on the plan. Coverivo can help you understand common benefits and limitations before you travel.",
    whoNeeds: [
      "Travelers with prepaid, nonrefundable trips",
      "International travelers who want emergency medical options",
      "Families coordinating complex itineraries",
    ],
    coverages: [
      "Trip cancellation and interruption, subject to plan terms",
      "Emergency medical and evacuation where included",
      "Baggage and travel delay benefits depending on the option",
    ],
    considerations: [
      "Pre-existing condition rules and timing of purchase matter",
      "Coverage is not a substitute for required visas or destination rules",
    ],
    faqs: [
      {
        question: "When should I buy travel insurance?",
        answer:
          "Many benefits are more useful when purchased soon after the first trip payment. A Coverivo specialist can help you review timing.",
      },
    ],
  },
  {
    slug: "pet",
    name: "Pet Insurance",
    shortName: "Pet",
    audience: "individuals",
    href: "/products/pet",
    summary: "Help manage unexpected veterinary costs for dogs and cats.",
    description:
      "Pet insurance can help offset eligible veterinary expenses for accidents and illness. Coverivo can help you compare deductibles, reimbursement levels, and waiting periods at a high level.",
    whoNeeds: [
      "Dog and cat owners who want help with unexpected vet bills",
      "Families adopting a new pet",
    ],
    coverages: [
      "Accident and illness coverage, depending on the plan",
      "Optional wellness add-ons where available",
    ],
    considerations: [
      "Waiting periods and pre-existing condition exclusions are common",
      "Reimbursement is typically after you pay the veterinarian",
    ],
    faqs: [
      {
        question: "Does pet insurance cover routine care?",
        answer:
          "Not always. Many plans focus on accidents and illness. Wellness coverage, if available, is often optional.",
      },
    ],
  },
  {
    slug: "general-liability",
    name: "General Liability",
    shortName: "General Liability",
    audience: "business",
    href: "/products/general-liability",
    summary: "Core protection for many businesses against third-party injury and property damage claims.",
    description:
      "General liability insurance can help address claims that your business caused bodily injury, property damage, or certain advertising injuries. Coverivo helps small businesses understand when GL is requested by clients, landlords, or contracts.",
    whoNeeds: [
      "Service, retail, and contracting businesses",
      "Companies that enter client sites or host customers",
      "Businesses required to show certificates of insurance",
    ],
    coverages: [
      "Bodily injury and property damage liability",
      "Personal and advertising injury, subject to the form",
      "Products and completed operations, depending on operations",
    ],
    considerations: [
      "GL does not typically cover professional mistakes, auto, or workers' compensation",
      "Contractual additional-insured requirements should be reviewed carefully",
    ],
    faqs: [
      {
        question: "What does general liability cover?",
        answer:
          "It generally helps with third-party injury and property damage claims arising from business operations. It is not a catch-all for every business risk.",
      },
    ],
  },
  {
    slug: "bop",
    name: "Business Owners Policy (BOP)",
    shortName: "BOP",
    audience: "business",
    href: "/products/bop",
    summary: "A packaged option that can combine general liability and commercial property.",
    description:
      "A Business Owners Policy (BOP) packages common small-business coverages, often including general liability and commercial property. Coverivo helps you determine whether a BOP or separate policies may fit better.",
    whoNeeds: [
      "Small businesses with a location, inventory, or equipment",
      "Retail, office, and many service operations",
    ],
    coverages: [
      "General liability",
      "Business property and business income, depending on the form",
      "Optional endorsements for equipment, spoilage, or hired/non-owned auto",
    ],
    considerations: [
      "Not every business qualifies for a BOP",
      "Professional, cyber, and auto exposures may still need separate policies",
    ],
    faqs: [
      {
        question: "What is a BOP?",
        answer:
          "A BOP is a packaged small-business policy that often combines liability and property coverage. Eligibility and included coverages vary by carrier.",
      },
    ],
  },
  {
    slug: "commercial-property",
    name: "Commercial Property",
    shortName: "Commercial Property",
    audience: "business",
    href: "/products/commercial-property",
    summary: "Help protect buildings, contents, and business property from covered causes of loss.",
    description:
      "Commercial property insurance can cover buildings, tenant improvements, equipment, and inventory. Coverivo helps you review valuation, deductibles, and business income needs.",
    whoNeeds: [
      "Businesses that own or lease a location",
      "Companies with equipment, stock, or specialized tools",
    ],
    coverages: [
      "Building and business personal property",
      "Business income and extra expense, when selected",
      "Optional ordinance or law and equipment breakdown",
    ],
    considerations: [
      "Replacement cost versus actual cash value changes claim outcomes",
      "Flood, earthquake, and certain water losses may require separate coverage",
    ],
    faqs: [
      {
        question: "Does commercial property cover a flood?",
        answer:
          "Typically not. Flood is often excluded and may require a separate policy.",
      },
    ],
  },
  {
    slug: "commercial-auto",
    name: "Commercial Auto",
    shortName: "Commercial Auto",
    audience: "business",
    href: "/products/commercial-auto",
    summary: "Coverage for vehicles used in business operations.",
    description:
      "Commercial auto insurance is designed for vehicles owned, leased, or used by a business. Personal auto policies often exclude business use. Coverivo helps you review vehicles, drivers, and hired/non-owned exposures.",
    whoNeeds: [
      "Businesses that own work vehicles",
      "Companies whose employees drive for work",
      "Contractors transporting tools or materials",
    ],
    coverages: [
      "Liability for owned autos",
      "Physical damage for business vehicles",
      "Hired and non-owned auto, when needed",
    ],
    considerations: [
      "Personal auto policies may not cover business use",
      "Driver screening and vehicle type affect pricing",
    ],
    faqs: [
      {
        question: "Can I use personal auto insurance for work vehicles?",
        answer:
          "Often no. Business use and commercial vehicles typically require a commercial auto policy. A Coverivo advisor can help you review the exposure.",
      },
    ],
  },
  {
    slug: "workers-compensation",
    name: "Workers' Compensation",
    shortName: "Workers' Comp",
    audience: "business",
    href: "/products/workers-compensation",
    summary: "Help meet employer obligations for work-related employee injuries.",
    description:
      "Workers' compensation can help cover medical costs and wage replacement for employees injured on the job, subject to state law. Coverivo helps employers understand when coverage is required and what underwriting information is typically needed.",
    whoNeeds: [
      "Employers with employees, depending on state law",
      "Contractors whose clients require proof of coverage",
    ],
    coverages: [
      "Work-related medical expenses, subject to the policy and state law",
      "Disability or wage replacement benefits as required",
      "Employer's liability, depending on the form",
    ],
    considerations: [
      "Requirements vary by state and worker classification",
      "Payroll, class codes, and claims history affect premium",
    ],
    faqs: [
      {
        question: "Do I need workers' compensation if I have only a few employees?",
        answer:
          "It depends on your state and how workers are classified. Coverivo can help you gather facts; a licensed professional should confirm requirements.",
      },
    ],
  },
  {
    slug: "professional-liability",
    name: "Professional Liability",
    shortName: "Professional Liability",
    audience: "business",
    href: "/products/professional-liability",
    summary: "Coverage for claims alleging errors, omissions, or professional mistakes.",
    description:
      "Professional liability insurance, sometimes called errors and omissions (E&O), can help with claims that a professional service caused financial harm. Coverivo helps service firms understand how this differs from general liability.",
    whoNeeds: [
      "Consultants, agencies, and professional service firms",
      "Businesses that provide advice, design, or specialized expertise",
    ],
    coverages: [
      "Claims of negligent professional services, subject to the form",
      "Defense costs as described in the policy",
    ],
    considerations: [
      "GL typically does not cover professional errors",
      "Claims-made forms often require attention to retroactive dates and tail coverage",
    ],
    faqs: [
      {
        question: "Is professional liability the same as general liability?",
        answer:
          "No. General liability is more focused on bodily injury and property damage. Professional liability is designed around errors in professional services.",
      },
    ],
  },
  {
    slug: "eo",
    name: "Errors & Omissions (E&O)",
    shortName: "E&O",
    audience: "business",
    href: "/products/eo",
    summary: "E&O coverage for mistakes or omissions in professional work.",
    description:
      "Errors and omissions insurance is a form of professional liability focused on financial harm alleged from mistakes, missed deadlines, or incomplete work. Coverivo helps businesses collect the right intake details for available markets.",
    whoNeeds: [
      "Technology, marketing, real estate, and consulting firms",
      "Any business whose clients rely on professional deliverables",
    ],
    coverages: [
      "Alleged errors, omissions, and negligent acts in covered services",
      "Legal defense as described in the policy",
    ],
    considerations: [
      "Policy wording should match the services you actually provide",
      "Contractual indemnification and limitation-of-liability language still matter",
    ],
    faqs: [
      {
        question: "Does E&O cover refunds or contract disputes?",
        answer:
          "Not necessarily. Many policies exclude certain contractual obligations. A Coverivo professional should review the wording against your contracts.",
      },
    ],
  },
  {
    slug: "cyber",
    name: "Cyber Insurance",
    shortName: "Cyber",
    audience: "business",
    href: "/products/cyber",
    summary: "Help address data breach, ransomware, and technology-related incident costs.",
    description:
      "Cyber insurance can help with incident response, business interruption, and certain liability costs after a covered cyber event. Coverivo helps businesses understand common controls carriers look for.",
    whoNeeds: [
      "Businesses that store customer or payment data",
      "Companies that rely on cloud software and email",
      "Firms whose clients require cyber coverage",
    ],
    coverages: [
      "Incident response and forensic support, subject to the policy",
      "Business interruption from a covered cyber event",
      "Liability for certain data and privacy claims",
    ],
    considerations: [
      "Carriers often require multi-factor authentication and backups",
      "Social engineering and funds-transfer fraud may need specific endorsements",
    ],
    faqs: [
      {
        question: "Does cyber insurance prevent attacks?",
        answer:
          "No. It is a financial risk-transfer tool. Strong security practices still matter and may be required for eligibility.",
      },
    ],
  },
  {
    slug: "epli",
    name: "Employment Practices Liability (EPLI)",
    shortName: "EPLI",
    audience: "business",
    href: "/products/epli",
    summary: "Coverage for certain employment-related claims such as discrimination or wrongful termination allegations.",
    description:
      "EPLI can help businesses respond to employment practices claims. Coverivo helps employers understand how EPLI relates to HR practices and other liability policies.",
    whoNeeds: [
      "Employers with staff, contractors, or hiring activity",
      "Growing companies formalizing HR processes",
    ],
    coverages: [
      "Allegations such as discrimination, harassment, or wrongful termination, subject to the form",
      "Defense costs as described in the policy",
    ],
    considerations: [
      "Wage-and-hour claims are often limited or excluded",
      "HR documentation and handbook practices can affect both risk and underwriting",
    ],
    faqs: [
      {
        question: "Does general liability cover employment claims?",
        answer:
          "Usually not. Employment practices claims are commonly addressed through EPLI or a management liability package.",
      },
    ],
  },
  {
    slug: "do",
    name: "Directors & Officers (D&O)",
    shortName: "D&O",
    audience: "business",
    href: "/products/do",
    summary: "Coverage designed to help protect leaders against certain management liability claims.",
    description:
      "Directors and officers insurance can help with claims alleging wrongful acts in managing a company. Coverivo helps privately held businesses understand when D&O may be relevant.",
    whoNeeds: [
      "Companies with a board or outside investors",
      "Growing private companies and nonprofits, depending on structure",
    ],
    coverages: [
      "Side A, B, and C protections depending on the form",
      "Defense costs for covered management liability claims",
    ],
    considerations: [
      "Entity coverage, insured vs. insured, and bankruptcy provisions should be reviewed",
      "D&O is not a substitute for general liability or E&O",
    ],
    faqs: [
      {
        question: "Do small private companies need D&O?",
        answer:
          "It depends on ownership, financing, and leadership exposure. A Coverivo advisor can help you evaluate whether it should be discussed.",
      },
    ],
  },
  {
    slug: "commercial-umbrella",
    name: "Commercial Umbrella",
    shortName: "Commercial Umbrella",
    audience: "business",
    href: "/products/commercial-umbrella",
    summary: "Additional liability limits above primary business policies.",
    description:
      "Commercial umbrella or excess liability can provide higher limits above general liability, auto, or employers liability. Coverivo helps businesses evaluate whether extra limits are needed for contracts or asset protection.",
    whoNeeds: [
      "Businesses with contractual higher-limit requirements",
      "Companies with significant assets or higher-severity exposures",
    ],
    coverages: [
      "Excess limits over scheduled underlying policies",
      "Broader coverage in some umbrella forms, subject to terms",
    ],
    considerations: [
      "Underlying policy limits usually must meet carrier requirements",
      "Not every primary policy drops into an umbrella the same way",
    ],
    faqs: [
      {
        question: "Is commercial umbrella the same as general liability?",
        answer:
          "No. Umbrella typically sits above primary policies and increases available limits after those policies respond.",
      },
    ],
  },
  {
    slug: "group-health",
    name: "Group Health",
    shortName: "Group Health",
    audience: "employers",
    href: "/products/group-health",
    summary: "Medical benefits designed for employer-sponsored groups.",
    description:
      "Group health insurance can help employers offer medical coverage to eligible employees. Coverivo helps organizations compare plan designs, contribution strategies, and enrollment logistics at a high level.",
    whoNeeds: [
      "Employers building or renewing a benefits package",
      "Companies competing for talent with medical coverage",
    ],
    coverages: [
      "Employee medical benefits subject to plan and carrier rules",
      "Network, deductible, and cost-sharing options",
      "Employer contribution and eligibility design",
    ],
    considerations: [
      "Participation, contribution, and waiting-period rules apply",
      "Renewal timing and census accuracy are critical",
    ],
    faqs: [
      {
        question: "Can Coverivo bind a group health plan through the AI assistant?",
        answer:
          "No. Coverivo AI can help with education and intake. Licensed professionals and carriers handle plan placement.",
      },
    ],
  },
  {
    slug: "dental",
    name: "Group Dental",
    shortName: "Dental",
    audience: "employers",
    href: "/products/dental",
    summary: "Dental benefits that can complement a medical plan.",
    description:
      "Group dental coverage can help employees manage preventive and restorative dental costs. Coverivo helps employers compare networks, annual maximums, and waiting periods.",
    whoNeeds: [
      "Employers offering or expanding employee benefits",
      "Organizations that want a more complete benefits package",
    ],
    coverages: [
      "Preventive, basic, and major dental services depending on the plan",
      "Orthodontia options where available",
    ],
    considerations: [
      "Annual maximums and waiting periods affect employee experience",
      "Network access should be reviewed for your workforce locations",
    ],
    faqs: [
      {
        question: "Is dental usually included in group health?",
        answer:
          "Not always. Dental is often a separate group product that can be paired with medical coverage.",
      },
    ],
  },
  {
    slug: "vision",
    name: "Group Vision",
    shortName: "Vision",
    audience: "employers",
    href: "/products/vision",
    summary: "Vision benefits for exams, lenses, and frames.",
    description:
      "Group vision insurance can help with routine eye care and eyewear allowances. Coverivo helps employers compare frequency limits and network access.",
    whoNeeds: [
      "Employers assembling a full benefits offering",
      "Teams that value routine vision care as part of total rewards",
    ],
    coverages: [
      "Eye exams",
      "Lenses, frames, and contacts according to plan allowances",
    ],
    considerations: [
      "Frequency limits and out-of-network reimbursement vary widely",
    ],
    faqs: [
      {
        question: "Can vision be offered without medical coverage?",
        answer:
          "In many cases yes, depending on carrier rules. A Coverivo specialist can help you review available structures.",
      },
    ],
  },
  {
    slug: "group-life",
    name: "Group Life",
    shortName: "Group Life",
    audience: "employers",
    href: "/products/group-life",
    summary: "Employer-sponsored life insurance for eligible employees.",
    description:
      "Group life insurance can provide a basic death benefit for employees, sometimes with optional buy-up coverage. Coverivo helps employers understand guaranteed-issue limits and enrollment windows.",
    whoNeeds: [
      "Employers offering core protection benefits",
      "Companies that want a simple, valued employee benefit",
    ],
    coverages: [
      "Basic term life for eligible employees",
      "Optional supplemental life, subject to underwriting",
    ],
    considerations: [
      "Guaranteed-issue amounts and evidence of insurability rules apply",
      "Beneficiary designations should be kept current",
    ],
    faqs: [
      {
        question: "Is group life enough on its own?",
        answer:
          "It can be a useful foundation, but personal needs vary. Employees may still want individual coverage. Coverivo can help review both conversations separately.",
      },
    ],
  },
  {
    slug: "disability",
    name: "Disability Insurance",
    shortName: "Disability",
    audience: "employers",
    href: "/products/disability",
    summary: "Short-term and long-term disability benefits for income protection.",
    description:
      "Disability insurance can help replace a portion of income if an eligible employee cannot work due to a covered disability. Coverivo helps employers compare elimination periods, benefit percentages, and definition-of-disability language at a high level.",
    whoNeeds: [
      "Employers who want income-protection benefits",
      "Organizations with professional or knowledge-based workforces",
    ],
    coverages: [
      "Short-term disability",
      "Long-term disability",
      "Optional buy-up options where available",
    ],
    considerations: [
      "Definition of disability, offsets, and benefit duration matter",
      "State disability programs may interact with employer plans",
    ],
    faqs: [
      {
        question: "Is workers' compensation the same as disability insurance?",
        answer:
          "No. Workers' compensation is generally for work-related injuries. Disability insurance can apply to a broader set of covered disabilities, subject to the policy.",
      },
    ],
  },
  {
    slug: "employee-benefits",
    name: "Employee Benefits",
    shortName: "Employee Benefits",
    audience: "employers",
    href: "/products/employee-benefits",
    summary: "A coordinated benefits strategy across medical, dental, vision, life, and disability.",
    description:
      "Coverivo helps employers look at employee benefits as a connected package rather than isolated products. AI can support intake and education; licensed professionals help with plan design conversations and carrier coordination.",
    whoNeeds: [
      "Growing employers formalizing benefits",
      "Companies preparing for renewal",
      "Organizations that want one broker relationship for benefits",
    ],
    coverages: [
      "Group medical, dental, and vision",
      "Life and disability",
      "Enrollment, communication, and renewal support conversations",
    ],
    considerations: [
      "Budget, contribution strategy, and employee demographics should guide design",
      "Coverivo does not issue benefits plans; carriers underwrite and administer coverage",
    ],
    faqs: [
      {
        question: "Can I start benefits planning with Coverivo AI?",
        answer:
          "Yes. Coverivo AI can gather workforce details and questions. A licensed Coverivo professional should review recommendations and any placement decisions.",
      },
    ],
  },
];

export const individualProducts = products.filter((p) => p.audience === "individuals");
export const businessProducts = products.filter((p) => p.audience === "business");
export const employerProducts = products.filter((p) => p.audience === "employers");

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getProductsByAudience(audience: InsuranceProduct["audience"]) {
  return products.filter((p) => p.audience === audience);
}
