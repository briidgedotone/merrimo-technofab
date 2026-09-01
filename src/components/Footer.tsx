"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/data/site";
import { ArrowUpRight } from "./ui/Icons";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <footer id="contacts" className="mt-[140px] bg-ink text-white lg:mt-[254px]">
      <div className="gc-container pb-[37px] pt-[37px]">
        <div className="grid grid-cols-1 gap-y-[48px] md:grid-cols-2 lg:grid-cols-[455px_322px_1fr]">
          {/* contact column */}
          <div>
            <h2 className="text-[24px] font-medium leading-[1.1] tracking-[-0.025em]">
              Let&rsquo;s talk about your project.
            </h2>
            <dl className="mt-[33px] space-y-[26px] text-[19px] leading-[1.2]">
              <div>
                <dt className="text-white">Office Address:</dt>
                <dd className="mt-[8px] text-white/75">
                  {site.address.street}
                  <br />
                  {site.address.city}
                </dd>
              </div>
              <div>
                <dt className="text-white">Phone:</dt>
                <dd className="mt-[8px] text-white/75">{site.phone}</dd>
              </div>
              <div>
                <dt className="text-white">Email:</dt>
                <dd className="mt-[8px] text-white/75">{site.email}</dd>
              </div>
            </dl>
          </div>

          {/* navigation column */}
          <nav aria-label="Footer">
            <ul className="space-y-[24px] text-[24px] leading-[1.05] tracking-[-0.02em]">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-white/90 transition-colors duration-200 hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* newsletter column */}
          <div>
            <h3 className="text-[20px] leading-[1.15]">Be the first to know</h3>
            <p className="mt-[8px] max-w-[380px] text-[19px] leading-[1.2] text-white/75">
              Occasional updates on capability, capacity and completed works.
            </p>
            <form
              className="mt-[19px] max-w-[373px]"
              onSubmit={(e) => {
                e.preventDefault();
                setDone(true);
                setEmail("");
              }}
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Enter e-mail address
              </label>
              <div className="relative">
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter e-mail address"
                  className="h-[50px] w-full rounded-full border border-white/55 bg-transparent pl-[26px] pr-[54px] text-[18px] text-white placeholder:text-white/70 transition-colors duration-300 hover:border-white focus:border-white focus:outline-none"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="group absolute right-[7px] top-1/2 flex h-[36px] w-[36px] -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink transition-transform duration-300 ease-out hover:scale-105"
                >
                  <ArrowUpRight className="h-[17px] w-[17px] transition-transform duration-300 group-hover:rotate-45" />
                </button>
              </div>
              <p role="status" aria-live="polite" className="mt-[10px] h-[18px] text-[15px] text-white">
                {done && "You’re on the list."}
              </p>
            </form>
          </div>
        </div>

        <div className="mt-[80px] flex flex-wrap items-end justify-between gap-[24px] lg:mt-[176px]">
          <p className="text-[22px] font-medium tracking-[-0.02em]">{site.legalName}</p>
          {site.social.length > 0 && (
            <ul className="flex flex-wrap items-center gap-x-[36px] gap-y-[10px] text-[16px]">
              {site.social.map((s: { label: string; href: string }) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center gap-[8px] text-white/90 transition-colors hover:text-white"
                  >
                    <span aria-hidden className="h-[5px] w-[5px] rounded-full bg-white" />
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </footer>
  );
}
