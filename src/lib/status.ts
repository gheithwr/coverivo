import type { ApplicationStatus } from "@/lib/types";
import { quoteTypes } from "@/data/quotes";

const statusCopy: Record<ApplicationStatus, { label: string; detail: string }> = {
  submitted: {
    label: "Submitted",
    detail: "Coverivo received this request. A licensed insurance professional will review it.",
  },
  "in-review": {
    label: "In review",
    detail: "A Coverivo specialist is reviewing the information you provided.",
  },
  quoted: {
    label: "Quoted",
    detail: "Options may be available for discussion. This is not a binder or a guarantee of coverage.",
  },
};

export const statusSteps: { status: ApplicationStatus; label: string }[] = [
  { status: "submitted", label: "Submitted" },
  { status: "in-review", label: "In review" },
  { status: "quoted", label: "Quoted" },
];

export function statusStepIndex(status: ApplicationStatus) {
  const index = statusSteps.findIndex((step) => step.status === status);
  return index === -1 ? 0 : index;
}

export function statusLabel(status: ApplicationStatus) {
  return statusCopy[status].label;
}

export function statusDetail(status: ApplicationStatus) {
  return statusCopy[status].detail;
}

export function coverageLabel(type: string) {
  return quoteTypes.find((item) => item.id === type)?.label || type.replace(/-/g, " ");
}

export function formatDate(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" });
}

export function fieldLabel(key: string) {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/[-_]/g, " ")
    .replace(/^\w/, (letter) => letter.toUpperCase());
}
