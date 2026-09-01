import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import PillarGrid from "@/components/PillarGrid";
import { advantages } from "@/data/site";
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

      <PillarGrid />
    </section>
  );
}
