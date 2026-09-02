import Image from "next/image";
import { clientLogos } from "@/data/site";
import { asset } from "@/lib/asset";

/**
 * Continuously scrolling client logo strip.
 *
 * The row is rendered twice and translated by exactly -50%, so the second copy
 * lands where the first began and the loop has no seam. Assets are pre-balanced
 * against a common optical size and rendered at half their intrinsic
 * dimensions. Under prefers-reduced-motion the animation is disabled globally,
 * leaving a static row that is still scrollable.
 */
/** Divisor applied to the intrinsic asset size. The assets are optically
    balanced against each other, so one number sets the whole strip. */
const SCALE = 3.2;

/** The row is duplicated and translated -50%, so the travel is half the copies.
    Enough copies are needed that half the row exceeds the widest viewport,
    otherwise a gap appears at the loop point. */
const COPIES = 8;

export default function LogoStrip() {
  const row = Array.from({ length: COPIES }, () => clientLogos).flat();

  return (
    <section aria-labelledby="clients-heading" className="overflow-hidden pt-[70px] lg:pt-[96px]">
      <h2 id="clients-heading" className="gc-container text-[16px] text-muted">
        <span aria-hidden className="mr-[9px] inline-block h-[5px] w-[5px] rounded-full bg-muted align-middle" />
        Trusted by teams at
      </h2>

      {/* Masked at both ends so logos fade in and out rather than clipping. */}
      <div className="relative mt-[24px] [mask-image:linear-gradient(90deg,transparent,#000_9%,#000_91%,transparent)]">
        <ul className="gc-marquee flex w-max items-center">
          {row.map((logo, i) => (
            <li
              key={`${logo.name}-${i}`}
              className="flex shrink-0 items-center justify-center px-[26px] sm:px-[36px]"
              aria-hidden={i >= clientLogos.length}
            >
              <Image
                src={asset(logo.src)}
                alt={i < clientLogos.length ? logo.name : ""}
                width={Math.round(logo.w / SCALE)}
                height={Math.round(logo.h / SCALE)}
                className="h-auto w-auto opacity-70 transition-opacity duration-300"
                style={{ maxHeight: Math.round(logo.h / SCALE) }}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
