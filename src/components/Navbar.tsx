"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { site } from "@/data/site";
import { ArrowUpRight, MenuGlyph } from "./ui/Icons";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const wrap = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLButtonElement>(null);

  // Close on Escape, and hand focus back to the trigger.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape" || !open) return;
      setOpen(false);
      button.current?.focus();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Close on a click or a focus move outside the menu.
  useEffect(() => {
    if (!open) return;
    const outside = (e: Event) => {
      if (!wrap.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", outside);
    document.addEventListener("focusin", outside);
    return () => {
      document.removeEventListener("pointerdown", outside);
      document.removeEventListener("focusin", outside);
    };
  }, [open]);

  return (
    <header className="absolute inset-x-0 top-0 z-50 on-photo">
      <div className="mx-auto w-full max-w-[1200px] px-[25px] pt-[40px] md:px-[50px]">
        <div className="relative flex h-[46px] items-center justify-between">
          {/* Frosted glass plate behind the bar — spans 13px past the content
              box on both sides, from 14px above the row to 14px below it. */}
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-x-[13px] -inset-y-[14px] -z-10 rounded-[34px] border border-white/[0.14] bg-white/[0.03] shadow-[0_1px_0_rgba(0,0,0,0.05)] backdrop-blur-[9px] backdrop-saturate-[108%]"
          />

          <div ref={wrap} className="relative">
            <button
              ref={button}
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="gc-menu"
              className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-white text-ink shadow-[0_2px_18px_rgba(0,0,0,0.18)] transition-transform duration-300 ease-out hover:scale-105"
            >
              <MenuGlyph className="h-[22px] w-[22px]" />
            </button>

            {/* Dropdown anchored under the trigger. */}
            <nav
              id="gc-menu"
              aria-label="Main"
              className={`absolute left-0 top-[calc(100%+14px)] w-[264px] origin-top-left rounded-[22px] border border-black/5 bg-white p-[8px] shadow-[0_24px_60px_-18px_rgba(16,16,24,0.35)] transition-[opacity,transform] duration-200 ease-out ${
                open
                  ? "pointer-events-auto scale-100 opacity-100"
                  : "pointer-events-none -translate-y-[6px] scale-[0.98] opacity-0"
              }`}
            >
              <ul>
                {site.nav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      tabIndex={open ? 0 : -1}
                      onClick={() => setOpen(false)}
                      className="block rounded-[14px] px-[16px] py-[10px] text-[16px] font-medium text-ink transition-colors duration-150 hover:bg-bg"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <Link
            href="/"
            className="text-[16px] font-medium tracking-[-0.01em] text-white/85 transition-colors hover:text-white"
          >
            {site.name}
          </Link>

          <Link
            href="/contact"
            className="group flex h-[46px] items-center rounded-full bg-ink pr-[6px] shadow-[0_2px_18px_rgba(0,0,0,0.3)] transition-transform duration-300 ease-out hover:-translate-y-[1px]"
          >
            <span className="pl-[20px] pr-[12px] text-[16px] font-medium text-white">Contact</span>
            <span className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-white text-ink transition-transform duration-300 ease-out group-hover:rotate-45">
              <ArrowUpRight className="h-[17px] w-[17px]" />
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
