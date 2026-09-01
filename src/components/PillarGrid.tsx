"use client";

import Image from "next/image";
import Link from "next/link";
import { useInView } from "motion/react";
import { useRef } from "react";
import { pillars } from "@/data/site";
import { asset } from "@/lib/asset";

const CARD_SIZES = "(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 371px";

/**
 * The seven secondary pillars.
 *
 * On desktop each row stays a quiet list item until it is pointed at, then
 * opens into the same illustrated card as the three lead verticals. Touch has
 * no hover, so below `lg` the card unfolds when the row scrolls into view —
 * same reveal, different trigger. `once` means it stays open afterwards.
 */
function PillarRow({ pillar }: { pillar: (typeof pillars)[number] }) {
  const ref = useRef<HTMLLIElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -22% 0px" });

  return (
    <li ref={ref} className="border-b border-[#dcdcdc]">
      <Link href={pillar.href} aria-label={pillar.title} className="group block pb-[26px] pr-[24px]">
        <div
          className={`grid transition-[grid-template-rows] duration-[520ms] ease-out lg:grid-rows-[0fr] lg:group-hover:grid-rows-[1fr] lg:group-focus-visible:grid-rows-[1fr] ${
            inView ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <div className="relative mt-[26px] aspect-[371/328] w-full overflow-hidden bg-card">
              <span className="absolute left-[11px] top-[11px] z-10 flex h-[45px] w-[45px] items-center justify-center rounded-full bg-ink text-[15px] font-medium text-white">
                {pillar.number}
              </span>
              <Image
                src={asset(pillar.illustration)}
                alt={pillar.alt}
                fill
                sizes={CARD_SIZES}
                className={`object-cover transition-opacity duration-[520ms] ease-out lg:opacity-0 lg:group-hover:opacity-100 lg:group-focus-visible:opacity-100 ${
                  inView ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          </div>
        </div>

        <h3 className="mt-[26px] text-[19px] font-medium leading-[1.2] tracking-[-0.025em] transition-colors group-hover:text-muted">
          {pillar.title}
        </h3>
        <p className="mt-[8px] text-[16px] leading-[1.31] text-muted-soft">{pillar.body}</p>
      </Link>
    </li>
  );
}

export default function PillarGrid() {
  return (
    <ul className="mt-[54px] grid grid-cols-1 items-start gap-x-[19px] border-t border-[#dcdcdc] sm:grid-cols-2 lg:mt-[76px] lg:grid-cols-3">
      {pillars.map((p) => (
        <PillarRow key={p.title} pillar={p} />
      ))}
    </ul>
  );
}
