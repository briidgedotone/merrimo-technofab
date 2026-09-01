"use client";

import { useState } from "react";
import { ArrowUpRight } from "./ui/Icons";

/**
 * Submissions go to Web3Forms, which relays them to the company inbox.
 * The access key is public by design — it only permits delivery to the
 * address it was issued for — and lives in a repo variable so it can be
 * rotated without a code change. Without it the form still works but
 * reports that routing is not connected, so nothing is silently swallowed.
 */
const ENDPOINT = "https://api.web3forms.com/submit";
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";

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
    const data = Object.fromEntries(new FormData(form).entries());

    if (!ACCESS_KEY) {
      setStatus("unconfigured");
      return;
    }

    // Honeypot: a bot that fills the hidden field gets a silent success.
    if (String(data.botcheck ?? "")) {
      setStatus("sent");
      form.reset();
      return;
    }

    const payload = {
      ...data,
      access_key: ACCESS_KEY,
      source,
      subject: `Website enquiry from ${data.name || "a visitor"}${data.company ? ` (${data.company})` : ""}`,
      from_name: "Merrimo Technofab website",
      replyto: data.email,
    };

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
      className="w-full max-w-[560px] rounded-[20px] border border-white/12 bg-[#101021] p-[26px] shadow-[0_24px_60px_-30px_rgba(0,0,0,0.6)] sm:p-[30px]"
    >
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

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
          "This form isn’t connected to an inbox yet, so nothing was sent. Set NEXT_PUBLIC_WEB3FORMS_KEY to start receiving enquiries."}
      </p>
    </form>
  );
}
