import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";
import { illustrations, pillarIllustrations } from "@/components/ui/Illustrations";
import { advantages, pillars } from "@/data/site";

export default function Solutions() {
  return (
    <section id="solutions" className="gc-container pt-[238px]">
      <SectionHeading lead="Core Solutions" />

      <ul className="mt-[66px] grid grid-cols-1 gap-x-[19px] gap-y-[54px] sm:grid-cols-2 lg:grid-cols-3">
        {advantages.map((item) => {
          const Illustration = illustrations[item.illustration];
          return (
            <li key={item.number}>
              <Link href={item.href} className="group block">
                <div className="relative aspect-[371/328] w-full overflow-hidden bg-card">
                  <span className="absolute left-[11px] top-[11px] z-10 flex h-[45px] w-[45px] items-center justify-center rounded-full bg-ink text-[15px] font-medium text-white">
                    {item.number}
                  </span>
                  <div
                    role="img"
                    aria-label={item.alt}
                    className="absolute inset-0 p-[12px] transition-transform duration-[600ms] ease-out group-hover:scale-[1.03]"
                  >
                    <Illustration />
                  </div>
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
          );
        })}
      </ul>

      {/* The remaining pillars read as a quiet list until pointed at, then
          open into the same illustrated card as the three lead verticals. */}
      <ul className="mt-[76px] grid grid-cols-1 items-start gap-x-[19px] border-t border-[#dcdcdc] sm:grid-cols-2 lg:grid-cols-3">
        {pillars.map((p) => {
          const Illustration = pillarIllustrations[p.illustration];
          return (
            <li key={p.title} className="border-b border-[#dcdcdc]">
              <Link
                href={p.href}
                aria-label={p.title}
                className="group block pb-[26px] pr-[24px]"
              >
                <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-[420ms] ease-out group-hover:grid-rows-[1fr] group-focus-visible:grid-rows-[1fr]">
                  <div className="overflow-hidden">
                    <div className="relative mt-[26px] aspect-[371/328] w-full overflow-hidden bg-card">
                      <span className="absolute left-[11px] top-[11px] z-10 flex h-[45px] w-[45px] items-center justify-center rounded-full bg-ink text-[15px] font-medium text-white">
                        {p.number}
                      </span>
                      <div
                        role="img"
                        aria-label={p.alt}
                        className="absolute inset-0 p-[12px] opacity-0 transition-opacity duration-[420ms] ease-out group-hover:opacity-100 group-focus-visible:opacity-100"
                      >
                        <Illustration />
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="mt-[26px] text-[19px] font-medium leading-[1.2] tracking-[-0.025em] transition-colors group-hover:text-muted">
                  {p.title}
                </h3>
                <p className="mt-[8px] text-[16px] leading-[1.31] text-muted-soft">{p.body}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
