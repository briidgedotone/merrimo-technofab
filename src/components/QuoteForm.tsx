"use client";

import { useState } from "react";
import { ArrowUpRight } from "./ui/Icons";

/**
 * Set NEXT_PUBLIC_FORM_ENDPOINT to a form service (Formspree, Basin, a Worker,
 * an inbox route) to start receiving enquiries. Until it is set the form is
 * fully usable but submitting reports that routing is not connected, so no
 * enquiry is ever silently swallowed.
 */
const ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? "";

type Status = "idle" | "sending" | "sent" | "error" | "unconfigured";

const field =
  "w-full rounded-[12px] border border-white/25 bg-white/[0.06] px-[16px] text-[16px] text-white placeholder:text-white/40 transition-[border-color,background-color,box-shadow] duration-200 hover:border-white/40 focus:border-white focus:bg-white/[0.10] focus:outline-none focus:ring-2 focus:ring-white/20";

function Label({ htmlFor, children, required }: { htmlFor: string; children: React.ReactNode; required?: boolean }) {
  return (
    <label htmlFor={htmlFor} className="mb-[8px] block text-[14px] font-medium text-white/70">
      {children}
      {required && (
        <span aria-hidden className="ml-[4px] text-white/40">
          *
        </span>
      )}
    </label>
  );
}

export default function QuoteForm({ source }: { source: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const id = (name: string) => `${source}-${name}`;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const payload = { ...Object.fromEntries(new FormData(form).entries()), source };

    if (!ENDPOINT) {
      setStatus("unconfigured");
      return;
    }

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
    <form
      onSubmit={onSubmit}
      className="w-full max-w-[520px] rounded-[20px] border border-white/12 bg-white/[0.03] p-[26px] sm:p-[30px]"
    >
      <p className="text-[14px] text-white/50">
        Fields marked <span aria-hidden>*</span> are required.
      </p>

      <div className="mt-[22px] grid grid-cols-1 gap-x-[16px] gap-y-[20px] sm:grid-cols-2">
        <div>
          <Label htmlFor={id("name")} required>
            Full name
          </Label>
          <input
            id={id("name")}
            name="name"
            required
            autoComplete="name"
            placeholder="Your name"
            className={`${field} h-[52px]`}
          />
        </div>

        <div>
          <Label htmlFor={id("company")}>Company</Label>
          <input
            id={id("company")}
            name="company"
            autoComplete="organization"
            placeholder="Company name"
            className={`${field} h-[52px]`}
          />
        </div>

        <div>
          <Label htmlFor={id("email")} required>
            Email
          </Label>
          <input
            id={id("email")}
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
            className={`${field} h-[52px]`}
          />
        </div>

        <div>
          <Label htmlFor={id("phone")}>Phone</Label>
          <input
            id={id("phone")}
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="Contact number"
            className={`${field} h-[52px]`}
          />
        </div>

        <div className="sm:col-span-2">
          <Label htmlFor={id("location")}>Project location &amp; site type</Label>
          <input
            id={id("location")}
            name="location"
            placeholder="City, and whether it is a factory, warehouse, shed…"
            className={`${field} h-[52px]`}
          />
        </div>

        <div className="sm:col-span-2">
          <Label htmlFor={id("scope")} required>
            Scope of work
          </Label>
          <textarea
            id={id("scope")}
            name="scope"
            required
            rows={5}
            placeholder="Civil, MEP, fabrication, PEB — tell us what needs building, and roughly when."
            className={`${field} resize-y py-[14px] leading-[1.45]`}
          />
        </div>
      </div>

      <div className="mt-[26px] flex flex-wrap items-center gap-[16px]">
        <button
          type="submit"
          disabled={status === "sending"}
          className="group inline-flex h-[52px] items-center rounded-full bg-white pr-[6px] shadow-[0_2px_18px_rgba(0,0,0,0.18)] transition-transform duration-300 ease-out hover:-translate-y-[1px] disabled:opacity-70"
        >
          <span className="pl-[24px] pr-[16px] text-[15px] font-medium text-ink">
            {status === "sending" ? "Sending…" : "Submit Enquiry"}
          </span>
          <span className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-ink text-white transition-transform duration-300 ease-out group-hover:rotate-45">
            <ArrowUpRight className="h-[19px] w-[19px]" />
          </span>
        </button>
      </div>

      <p role="status" aria-live="polite" className="mt-[16px] text-[15px] leading-[1.4] text-white/80">
        {status === "sent" && "Thanks — we’ve got your enquiry and will be in touch shortly."}
        {status === "error" && "Something went wrong sending that. Please try again."}
        {status === "unconfigured" &&
          "This form isn’t connected to an inbox yet, so nothing was sent. Set NEXT_PUBLIC_FORM_ENDPOINT to start receiving enquiries."}
      </p>
    </form>
  );
}
