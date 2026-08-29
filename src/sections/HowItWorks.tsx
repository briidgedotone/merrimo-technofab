"use client";

import { motion, useMotionValueEvent, useScroll, useSpring, useTransform } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { scrollToY } from "@/lib/lenis";
import SectionHeading from "@/components/ui/SectionHeading";
import CarouselNav from "@/components/ui/CarouselNav";
import { stepIcons } from "@/components/ui/Icons";
import { steps } from "@/data/site";

/* Reference geometry: 359px cards, 19px gutter, the first card inset 275px
   past the container edge, heights rising 305 → 328 → 351 → 374 against a
   shared baseline. */
const CARD_W = 359;
const GAP = 19;
const LEAD_INSET = 275;
const CONTAINER = 1200;
const GUTTER = 25;

export default function HowItWorks() {
  const track = useRef<HTMLDivElement>(null);
  const row = useRef<HTMLDivElement>(null);

  const [leadPad, setLeadPad] = useState(GUTTER + LEAD_INSET);
  const [distance, setDistance] = useState(0);
  const [index, setIndex] = useState(0);

  // The row travels left by exactly the amount that overflows the viewport.
  const measure = useCallback(() => {
    const vw = window.innerWidth;
    const pad = Math.max(0, (vw - CONTAINER) / 2) + GUTTER + LEAD_INSET;
    setLeadPad(pad);
    const rowWidth = pad + steps.length * CARD_W + (steps.length - 1) * GAP + GUTTER;
    setDistance(Math.max(0, rowWidth - vw));
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  const { scrollYProgress } = useScroll({
    target: track,
    offset: ["start start", "end end"],
  });

  // Spring the progress before mapping it to x — this takes the last of the
  // step out of the wheel input so the row glides instead of ticking.
  const smooth = useSpring(scrollYProgress, {
    stiffness: 260,
    damping: 42,
    mass: 0.35,
    restDelta: 0.0005,
  });
  const x = useTransform(smooth, [0, 1], [0, -distance]);

  useMotionValueEvent(smooth, "change", (p) => {
    setIndex(Math.max(0, Math.min(steps.length - 1, Math.round(p * (steps.length - 1)))));
  });

  /** Arrows drive the page scroll, so they move the row and the pin together. */
  const goTo = (i: number) => {
    const el = track.current;
    if (!el) return;
    const clamped = Math.max(0, Math.min(steps.length - 1, i));
    const pin = el.offsetHeight - window.innerHeight;
    scrollToY(el.offsetTop + (pin * clamped) / (steps.length - 1));
  };

  return (
    <section id="how-it-works" className="pt-[160px]">
      {/* Two extra viewports of scroll drive the horizontal travel; the section
          stays pinned until the last card has come through, then releases. */}
      <div ref={track} className="relative h-[260vh]">
        <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
          <div className="gc-container flex items-start justify-between gap-[24px]">
            <SectionHeading lead="How we work" trail="(Step-by-step)" />
            <div className="hidden shrink-0 pt-[15px] md:block">
              <CarouselNav
                label="step"
                onPrev={() => goTo(index - 1)}
                onNext={() => goTo(index + 1)}
                canPrev={index > 0}
                canNext={index < steps.length - 1}
              />
            </div>
          </div>

          <motion.div
            ref={row}
            style={{ x, paddingLeft: leadPad }}
            className="mt-[67px] flex items-end gap-[19px] pr-[25px]"
            role="group"
            aria-label="Project execution, step by step"
          >
            {steps.map((step, i) => {
              const Icon = stepIcons[step.icon];
              const height = 305 + Math.min(i, 3) * 23;
              return (
                <article
                  key={step.number}
                  className="relative flex shrink-0 flex-col rounded-[14px] bg-white p-[16px] shadow-[0_1px_2px_rgba(16,16,24,0.05),0_10px_30px_-18px_rgba(16,16,24,0.28)]"
                  style={{ width: `min(${CARD_W}px, 80vw)`, height }}
                >
                  <h3 className="text-[24px] font-medium leading-[1.08] tracking-[-0.035em]">
                    {step.title}
                  </h3>
                  <p className="mt-[9px] max-w-[314px] text-[16px] leading-[1.31] text-muted-soft">
                    {step.body}
                  </p>
                  <span className="mt-auto flex h-[48px] w-[48px] items-center justify-center rounded-[12px] bg-bg text-ink">
                    <Icon className="h-[24px] w-[24px]" />
                  </span>
                  <span className="sr-only">Step {step.number}</span>
                </article>
              );
            })}
          </motion.div>

          {/* Progress rail — full-bleed line with the active step pinned above
              the active card and the remaining steps grouped to the right. */}
          <div className="relative mt-[60px] h-[60px]">
            <div aria-hidden className="absolute inset-x-0 top-1/2 h-[6px] -translate-y-1/2 bg-line" />
            <div className="gc-container relative h-full">
              <div className="absolute left-[25px] top-0 h-[60px] lg:left-[296px]">
                <PillMark active>{steps[index].number}</PillMark>
              </div>
              <ol className="absolute right-[25px] top-0 flex h-[60px] items-center gap-[16px] sm:gap-[33px] lg:right-[132px]">
                {steps.map((step, i) =>
                  i === index ? null : (
                    <li key={step.number}>
                      <button
                        type="button"
                        onClick={() => goTo(i)}
                        aria-label={`Go to step ${step.number}: ${step.title}`}
                        className="cursor-pointer"
                      >
                        <PillMark>{step.number}</PillMark>
                      </button>
                    </li>
                  ),
                )}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PillMark({ children, active = false }: { children: React.ReactNode; active?: boolean }) {
  return (
    <span
      className={`flex h-[60px] w-[74px] items-center justify-center rounded-[14px] text-[15px] font-medium transition-colors duration-300 ${
        active ? "bg-ink text-white" : "bg-white text-ink"
      }`}
    >
      {children}
    </span>
  );
}
