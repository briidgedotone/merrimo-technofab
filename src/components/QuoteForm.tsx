"use client";

import { useState } from "react";
import { ArrowUpRight } from "./ui/Icons";

const fields = [
  {
    name: "scope",
    label: "Scope of work",
    placeholder: "Scope of work — civil, MEP, fabrication, PEB",
  },
  {
    name: "project",
    label: "Project location and site type",
    placeholder: "Project location and site type",
  },
  {
    name: "contact",
    label: "Your name, company and contact details",
    placeholder: "Name, company and contact details",
  },
];

type Status = "idle" | "sending" | "sent" | "error";

/**
 * Set NEXT_PUBLIC_FORM_ENDPOINT to a form service (Formspree, Basin, a Worker,
 * an inbox route) to make the form live. Until it is set the form stays
 * visible but disabled, rather than silently swallowing enquiries.
 */
const ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? "";

/**
 * Project enquiry form. Shared by the homepage section and the dedicated
 * quote page; the POST target is a thin route so a CRM or mailer can be
 * wired in without touching this component.
 */
export default function QuoteForm({ source }: { source: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const live = ENDPOINT.length > 0;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!live) return;
    const form = e.currentTarget;
    const payload = { ...Object.fromEntries(new FormData(form).entries()), source };
    setStatus("sending");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="w-full max-w-[462px]">
      <div className="space-y-[20px]">
        {fields.map((f) => (
          <div key={f.name}>
            <label htmlFor={`${source}-${f.name}`} className="sr-only">
              {f.label}
            </label>
            <input
              id={`${source}-${f.name}`}
              name={f.name}
              required
              disabled={!live}
              autoComplete="off"
              placeholder={f.placeholder}
              className="h-[67px] w-full rounded-full border border-white/70 bg-transparent px-[36px] text-[17px] text-white placeholder:text-white/90 transition-colors duration-300 hover:border-white focus:border-white focus:bg-white/10 focus:outline-none"
            />
          </div>
        ))}
      </div>

      <div className="mt-[20px] flex flex-wrap items-center gap-[16px]">
        <button
          type="submit"
          disabled={!live || status === "sending"}
          className="group inline-flex h-[52px] items-center rounded-full bg-white pr-[6px] shadow-[0_2px_18px_rgba(0,0,0,0.18)] transition-transform duration-300 ease-out hover:-translate-y-[1px] disabled:opacity-70"
        >
          <span className="pl-[24px] pr-[16px] text-[15px] font-medium text-ink">
            {status === "sending" ? "Sending…" : "Submit Enquiry"}
          </span>
          <span className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-ink text-white transition-transform duration-300 ease-out group-hover:rotate-45">
            <ArrowUpRight className="h-[19px] w-[19px]" />
          </span>
        </button>

        <p role="status" aria-live="polite" className="text-[15px] text-white">
          {!live && "Form goes live once the enquiry inbox is confirmed."}
          {live && status === "sent" && "Thanks — we’ll be in touch shortly."}
          {live && status === "error" && "Something went wrong. Please try again."}
        </p>
      </div>
    </form>
  );
}
