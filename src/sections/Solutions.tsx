import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import { advantages, pillars } from "@/data/site";
import { asset } from "@/lib/asset";

/* The illustration sheets are pre-framed to the card ratio on the card's own
   background colour, so they sit flush inside the plate with no padding. */
const CARD_SIZES = "(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 371px";

export default function Solutions() {
  return (
    <section id="solutions" className="gc-container pt-[120px] lg:pt-[238px]">
      <SectionHeading lead="Core Solutions" />

      <ul className="mt-[66px] grid grid-cols-1 gap-x-[19px] gap-y-[54px] sm:grid-cols-2 lg:grid-cols-3">
        {advantages.map((item) => (
          <li key={item.number}>
            <Link href={item.href} className="group block">
              <div className="relative aspect-[371/328] w-full overflow-hidden bg-card">
                <span className="absolute left-[11px] top-[11px] z-10 flex h-[45px] w-[45px] items-center justify-center rounded-full bg-ink text-[15px] font-medium text-white">
                  {item.number}
                </span>
                <Image
                  src={asset(item.illustration)}
                  alt={item.alt}
                  fill
                  sizes={CARD_SIZES}
                  className="object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.03]"
                />
              </div>
              <p className="mt-[10px] flex items-center gap-[9px] text-[16px] text-muted">
                <span aria-hidden className="h-[5px] w-[5px] rounded-full bg-muted" />
                {item.eyebrow}
              </p>
              <h3 className="mt-[10px] text-[clamp(20px,2.17vw,26px)] font-medium leading-[1.1] tracking-[-0.052em] transition-colors group-hover:text-muted">
                {item.title}
              </h3>
            </Link>
          </li>
        ))}
      </ul>

      {/* The remaining pillars read as a quiet list until pointed at, then
          open into the same illustrated card as the three lead verticals. */}
      <ul className="mt-[54px] grid grid-cols-1 items-start gap-x-[19px] border-t border-[#dcdcdc] sm:grid-cols-2 lg:mt-[76px] lg:grid-cols-3">
        {pillars.map((p) => (
          <li key={p.title} className="border-b border-[#dcdcdc]">
            <Link href={p.href} aria-label={p.title} className="group block pb-[26px] pr-[24px]">
              <div className="grid grid-rows-[1fr] transition-[grid-template-rows] duration-[420ms] ease-out lg:grid-rows-[0fr] lg:group-hover:grid-rows-[1fr] lg:group-focus-visible:grid-rows-[1fr]">
                <div className="overflow-hidden">
                  <div className="relative mt-[26px] aspect-[371/328] w-full overflow-hidden bg-card">
                    <span className="absolute left-[11px] top-[11px] z-10 flex h-[45px] w-[45px] items-center justify-center rounded-full bg-ink text-[15px] font-medium text-white">
                      {p.number}
                    </span>
                    <Image
                      src={asset(p.illustration)}
                      alt={p.alt}
                      fill
                      sizes={CARD_SIZES}
                      className="object-cover opacity-100 transition-opacity duration-[420ms] ease-out lg:opacity-0 lg:group-hover:opacity-100 lg:group-focus-visible:opacity-100"
                    />
                  </div>
                </div>
              </div>

              <h3 className="mt-[26px] text-[19px] font-medium leading-[1.2] tracking-[-0.025em] transition-colors group-hover:text-muted">
                {p.title}
              </h3>
              <p className="mt-[8px] text-[16px] leading-[1.31] text-muted-soft">{p.body}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
