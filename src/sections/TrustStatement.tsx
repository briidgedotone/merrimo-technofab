"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { BrandMark } from "@/components/ui/Icons";
import { trustStatement } from "@/data/site";

const GREY = "#78777D";
const INK = "#050516";

/** Flat list of every word across the three lines, so the reveal runs
    continuously from the first word to the last. */
const words = trustStatement.map((line) => line.split(" "));
const total = words.reduce((n, line) => n + line.length, 0);

export default function TrustStatement() {
  const track = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  // The statement stays pinned while the track scrolls past; progress runs
  // 0 → 1 over exactly that pinned distance.
  const { scrollYProgress } = useScroll({
    target: track,
    offset: ["start start", "end end"],
  });

  let index = 0;

  return (
    <section id="about" aria-label="Company credentials">
      {/* The whole viewport is pinned for one screen of scrolling: the track is
          two viewports tall and the sticky child fills one, so nothing on
          screen moves while the words turn from grey to ink. */}
      <div ref={track} className="relative h-[170svh] lg:h-[200svh]">
        <div className="gc-container sticky top-0 flex h-[100svh] flex-col">
          <BrandMark className="mt-[56px] h-[40px] w-[40px] shrink-0 text-ink lg:mt-[88px] lg:h-[48px] lg:w-[48px]" />
          <div className="flex flex-1 items-center">
            <p className="gc-statement mx-auto max-w-[900px] text-center text-[clamp(22px,3.34vw,40px)]">
              {words.map((line, li) => (
                <span key={li} className="block">
                  {line.map((word) => {
                    const i = index++;
                    return (
                      <Word
                        key={`${li}-${i}`}
                        word={word}
                        start={i / total}
                        end={(i + 1) / total}
                        progress={scrollYProgress}
                        reduced={!!reduced}
                      />
                    );
                  })}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Word({
  word,
  start,
  end,
  progress,
  reduced,
}: {
  word: string;
  start: number;
  end: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  reduced: boolean;
}) {
  const color = useTransform(progress, [start, end], [GREY, INK]);
  return (
    <motion.span style={reduced ? { color: INK } : { color }} className="inline-block">
      {word}
      {" "}
    </motion.span>
  );
}
