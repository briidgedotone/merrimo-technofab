"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/data/site";
import { ArrowUpRight, MenuGlyph } from "./ui/Icons";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="absolute inset-x-0 top-0 z-50 on-photo">
      <div className="mx-auto w-full max-w-[1200px] px-[25px] pt-[40px] md:px-[50px]">
        <div className="relative flex h-[46px] items-center justify-between">
          {/* Frosted glass plate behind the bar — spans 13px past the content
              box on both sides, from 28px above the row to 14px below it. */}
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-x-[13px] -inset-y-[14px] -z-10 rounded-[34px] border border-white/[0.14] bg-white/[0.03] shadow-[0_1px_0_rgba(0,0,0,0.05)] backdrop-blur-[9px] backdrop-saturate-[108%]"
          />
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="gc-menu"
            className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-white text-ink shadow-[0_2px_18px_rgba(0,0,0,0.18)] transition-transform duration-300 ease-out hover:scale-105"
          >
            <MenuGlyph className="h-[22px] w-[22px]" />
          </button>

          <Link
            href="/"
            className="text-[16px] font-medium tracking-[-0.01em] text-white/85 transition-colors hover:text-white"
          >
            {site.name}
          </Link>

          <Link
            href="#contacts"
            className="group flex h-[46px] items-center rounded-full bg-ink pr-[6px] shadow-[0_2px_18px_rgba(0,0,0,0.3)] transition-transform duration-300 ease-out hover:-translate-y-[1px]"
          >
            <span className="pl-[20px] pr-[12px] text-[16px] font-medium text-white">Contacts</span>
            <span className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-white text-ink transition-transform duration-300 ease-out group-hover:rotate-45">
              <ArrowUpRight className="h-[17px] w-[17px]" />
            </span>
          </Link>
        </div>
      </div>

      {/* Slide-down panel — the collapsed navigation for every viewport. */}
      <div
        id="gc-menu"
        hidden={!open}
        className="fixed inset-0 z-50 bg-ink/95 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      >
        <nav
          aria-label="Main"
          className="mx-auto flex h-full w-full max-w-[1200px] flex-col justify-center gap-[8px] px-[25px] md:px-[50px]"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="absolute right-[25px] top-[40px] flex h-[46px] w-[46px] items-center justify-center rounded-full bg-white text-ink md:right-[50px]"
          >
            <span aria-hidden className="text-[22px] leading-none">×</span>
          </button>
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="gc-display block w-fit text-[clamp(30px,5vw,52px)] text-white/70 transition-colors duration-200 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
