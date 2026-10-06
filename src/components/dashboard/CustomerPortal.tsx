"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FileText, Shield, UserRound } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SignOutButton } from "@/components/auth/SignOutButton";
import { coverageLabel, fieldLabel, formatDate, statusDetail, statusLabel, statusStepIndex, statusSteps } from "@/lib/status";
import type { PortalApplication } from "@/lib/types";

type PortalCustomer = {
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  zip: string;
  state: string;
};

export function CustomerPortal({
  customer,
  applications,
}: {
  customer: PortalCustomer;
  applications: PortalApplication[];
}) {
  const [selectedId, setSelectedId] = useState(applications[0]?.id ?? "");
  const selected = applications.find((item) => item.id === selectedId) || applications[0];

  useEffect(() => {
    if (!applications.some((item) => item.id === selectedId) && applications[0]) {
      setSelectedId(applications[0].id);
    }
  }, [applications, selectedId]);

  return (
    <div className="grid gap-6 lg:grid-cols-[240px_1fr]">
      <aside className="surface-card h-fit p-4">
        <p className="px-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#1769FF]">Portal</p>
        <nav className="mt-3 flex flex-col" aria-label="Dashboard">
          <a href="#applications" className="flex min-h-11 items-center gap-2 rounded-xl bg-[#F3F7FC] px-3 text-sm font-medium text-[#071B36]">
            <FileText className="h-4 w-4 text-[#1769FF]" aria-hidden="true" />
            Applications
          </a>
          <a href="#profile" className="flex min-h-11 items-center gap-2 rounded-xl px-3 text-sm text-[#071B36] hover:bg-[#F3F7FC]">
            <UserRound className="h-4 w-4 text-[#1769FF]" aria-hidden="true" />
            Profile
          </a>
          <Link href="/quote" className="flex min-h-11 items-center gap-2 rounded-xl px-3 text-sm text-[#071B36] hover:bg-[#F3F7FC]">
            <Shield className="h-4 w-4 text-[#1769FF]" aria-hidden="true" />
            New application
          </Link>
          <SignOutButton className="mt-2 justify-start px-3" />
        </nav>
      </aside>
      <div className="space-y-6">
        <section className="surface-card p-6">
          <p className="text-sm text-[#5b6b82]">Signed in as</p>
          <h2 className="mt-1 text-2xl font-semibold text-[#071B36]">
            {customer.firstName} {customer.lastName}
          </h2>
          <p className="mt-1 text-sm text-[#5b6b82]">{customer.email}</p>
        </section>
        <section id="applications" className="surface-card p-6">
          <h2 className="text-lg font-semibold text-[#071B36]">Application status</h2>
          {applications.length === 0 ? (
            <div className="mt-4 rounded-2xl border border-dashed border-[#e2eaf4] p-5 text-sm text-[#5b6b82]">
              No applications on file yet.{" "}
              <Link href="/quote" className="font-semibold text-[#1769FF]">
                Start a quote
              </Link>
            </div>
          ) : (
            <div className="mt-4 grid gap-3">
              {applications.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedId(item.id)}
                  className={`rounded-2xl border px-4 py-4 text-left cursor-pointer transition ${
                    selected?.id === item.id
                      ? "border-[#1769FF] bg-[#F3F7FC]"
                      : "border-[#e2eaf4] bg-white hover:border-[#1769FF]/40"
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="text-sm font-semibold text-[#071B36]">{coverageLabel(item.type)}</p>
                    <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#1769FF]">
                      {statusLabel(item.status)}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-[#5b6b82]">
                    {item.id} · {formatDate(item.createdAt)}
                  </p>
                </button>
              ))}
            </div>
          )}
        </section>
        {selected ? (
          <section className="surface-card p-6">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h2 className="text-lg font-semibold text-[#071B36]">{coverageLabel(selected.type)} application</h2>
                <p className="mt-1 text-sm text-[#5b6b82]">{statusDetail(selected.status)}</p>
              </div>
              <span className="rounded-full bg-[#F3F7FC] px-3 py-1 text-xs font-semibold text-[#1769FF]">
                {statusLabel(selected.status)}
              </span>
            </div>
            <div className="mt-5">
              <ol className="grid grid-cols-3 gap-2" aria-label="Application progress">
                {statusSteps.map((step, index) => {
                  const current = statusStepIndex(selected.status);
                  const done = index <= current;
                  return (
                    <li key={step.status} className="flex flex-col gap-2">
                      <span
                        className={`h-1.5 rounded-full ${done ? "bg-[#1769FF]" : "bg-[#e2eaf4]"}`}
                        aria-hidden="true"
                      />
                      <span className={`text-xs font-medium ${index === current ? "text-[#1769FF]" : "text-[#5b6b82]"}`}>
                        {step.label}
                        {index === current ? <span className="sr-only"> (current step)</span> : null}
                      </span>
                    </li>
                  );
                })}
              </ol>
            </div>
            <dl className="mt-5 grid gap-3 text-sm sm:grid-cols-2">
              <div>
                <dt className="text-[#5b6b82]">Reference</dt>
                <dd className="font-medium text-[#071B36]">{selected.id}</dd>
              </div>
              <div>
                <dt className="text-[#5b6b82]">Submitted</dt>
                <dd className="font-medium text-[#071B36]">{formatDate(selected.createdAt)}</dd>
              </div>
              <div>
                <dt className="text-[#5b6b82]">Name</dt>
                <dd className="font-medium text-[#071B36]">
                  {selected.contact.firstName} {selected.contact.lastName}
                </dd>
              </div>
              <div>
                <dt className="text-[#5b6b82]">Phone</dt>
                <dd className="font-medium text-[#071B36]">{selected.contact.phone}</dd>
              </div>
              <div>
                <dt className="text-[#5b6b82]">Location</dt>
                <dd className="font-medium text-[#071B36]">
                  {selected.contact.zip} · {selected.contact.state}
                </dd>
              </div>
              <div>
                <dt className="text-[#5b6b82]">Preferred contact</dt>
                <dd className="font-medium text-[#071B36]">{selected.contact.preferredContact || "Email"}</dd>
              </div>
              {Object.entries(selected.answers).map(([key, value]) =>
                value ? (
                  <div key={key}>
                    <dt className="text-[#5b6b82]">{fieldLabel(key)}</dt>
                    <dd className="font-medium text-[#071B36]">{value}</dd>
                  </div>
                ) : null
              )}
            </dl>
            <p className="mt-5 text-xs leading-relaxed text-[#5b6b82]">
              Application status is for tracking only. Coverivo AI and this portal cannot bind coverage, guarantee pricing, or
              determine eligibility.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href="/contact" fullWidth className="sm:w-auto">
                Talk to a professional
              </Button>
              <Button href="/quote" variant="light" fullWidth className="sm:w-auto">
                Start another application
              </Button>
            </div>
          </section>
        ) : null}
        <section id="profile" className="surface-card p-6">
          <h2 className="text-lg font-semibold text-[#071B36]">Profile</h2>
          <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
            <div>
              <dt className="text-[#5b6b82]">Email / user ID</dt>
              <dd className="font-medium text-[#071B36]">{customer.email}</dd>
            </div>
            <div>
              <dt className="text-[#5b6b82]">Phone</dt>
              <dd className="font-medium text-[#071B36]">{customer.phone}</dd>
            </div>
            <div>
              <dt className="text-[#5b6b82]">Location</dt>
              <dd className="font-medium text-[#071B36]">
                {customer.zip} · {customer.state}
              </dd>
            </div>
          </dl>
        </section>
      </div>
    </div>
  );
}
