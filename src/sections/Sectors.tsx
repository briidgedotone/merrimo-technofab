"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import CarouselNav from "@/components/ui/CarouselNav";
import { sectors } from "@/data/site";
import { asset } from "@/lib/asset";

export default function Sectors() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [stride, setStride] = useState(391);
  const [perView, setPerView] = useState(3);

  const measure = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const cards = el.querySelectorAll<HTMLElement>("[data-sector-card]");
    if (cards.length > 1) {
      const s = cards[1].offsetLeft - cards[0].offsetLeft;
      setStride(s);
      setPerView(Math.max(1, Math.round(el.clientWidth / s)));
    }
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  const maxIndex = Math.max(0, sectors.length - perView);

  const goTo = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    const clamped = Math.max(0, Math.min(maxIndex, i));
    el.scrollTo({ left: clamped * stride, behavior: "smooth" });
    setIndex(clamped);
  };

  const onScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    setIndex(Math.max(0, Math.min(maxIndex, Math.round(el.scrollLeft / stride))));
  };

  return (
    <section id="sectors" className="pt-[130px]">
      <div className="gc-container flex items-start justify-between gap-[24px]">
        <SectionHeading lead="Built for" trail="Industrial Sites" />
        <div className="hidden shrink-0 pt-[10px] md:block">
          <CarouselNav
            label="sector"
            onPrev={() => goTo(index - 1)}
            onNext={() => goTo(index + 1)}
            canPrev={index > 0}
            canNext={index < maxIndex}
          />
        </div>
      </div>

      <div className="gc-container mt-[73px]">
        <div
          ref={trackRef}
          onScroll={onScroll}
          tabIndex={0}
          role="group"
          aria-label="Sectors we build for"
          className="gc-hide-scrollbar flex snap-x snap-mandatory gap-[19px] overflow-x-auto scroll-smooth"
        >
          {sectors.map((p) => (
            <article
              key={p.number}
              data-sector-card
              className="group relative aspect-[371/398] shrink-0 snap-start overflow-hidden rounded-[14px]"
              style={{ width: "min(371px, 82vw)" }}
            >
              <Image
                src={asset(p.image)}
                alt={p.alt}
                fill
                sizes="(max-width: 900px) 82vw, 371px"
                className="object-cover transition-transform duration-[700ms] ease-out group-hover:scale-[1.05]"
              />

              {/* frosted header plate */}
              <div className="absolute inset-x-0 top-0 h-[92px] bg-white/10 backdrop-blur-[9px]" />
              <div className="absolute inset-x-[13px] top-[85px] h-px bg-white/45" />

              <header className="absolute inset-x-[13px] top-[10px] flex items-start gap-[13px] text-white">
                <p className="text-[44px] font-medium leading-[0.95] tracking-[-0.03em]">{p.number}</p>
                <span aria-hidden className="mt-[4px] h-[52px] w-px bg-white/45" />
                <div className="min-w-0 flex-1">
                  <p className="text-[13px] leading-[1.1] text-white/80">{p.label}</p>
                  <p className="mt-[2px] text-[20px] font-medium leading-[1.15] tracking-[-0.02em]">
                    {p.name}
                  </p>
                </div>
              </header>

              <p className="absolute inset-x-[10px] bottom-[10px] rounded-[10px] bg-black/25 px-[12px] py-[11px] text-[17px] leading-[1.2] text-white backdrop-blur-[6px]">
                {p.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
