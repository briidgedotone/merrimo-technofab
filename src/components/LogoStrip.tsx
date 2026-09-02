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
export default function LogoStrip() {
  // Four copies, translated by -50% (i.e. two copies). One copy is only
  // ~1450px, so a two-copy travel is needed to cover wide screens without a
  // gap appearing at the loop point.
  const row = [...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <section aria-labelledby="clients-heading" className="overflow-hidden pt-[70px] lg:pt-[96px]">
      <h2 id="clients-heading" className="gc-container text-[16px] text-muted">
        <span aria-hidden className="mr-[9px] inline-block h-[5px] w-[5px] rounded-full bg-muted align-middle" />
        Trusted by teams at
      </h2>

      {/* Masked at both ends so logos fade in and out rather than clipping. */}
      <div className="relative mt-[30px] [mask-image:linear-gradient(90deg,transparent,#000_9%,#000_91%,transparent)]">
        <ul className="gc-marquee flex w-max items-center">
          {row.map((logo, i) => (
            <li
              key={`${logo.name}-${i}`}
              className="flex shrink-0 items-center justify-center px-[34px] sm:px-[46px]"
              aria-hidden={i >= clientLogos.length}
            >
              <Image
                src={asset(logo.src)}
                alt={i < clientLogos.length ? logo.name : ""}
                width={Math.round(logo.w / 2)}
                height={Math.round(logo.h / 2)}
                className="h-auto w-auto opacity-70 transition-opacity duration-300"
                style={{ maxHeight: Math.round(logo.h / 2) }}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
