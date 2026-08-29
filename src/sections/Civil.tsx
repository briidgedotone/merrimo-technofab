import SectionHeading from "@/components/ui/SectionHeading";
import PillButton from "@/components/ui/PillButton";
import { civil } from "@/data/site";

/**
 * The priority vertical. Per the owner's instruction in the brief this gets a
 * dedicated section of its own and must not read as subordinate to the other
 * verticals — hence the full-bleed dark plate.
 */
export default function Civil() {
  return (
    <section id="civil" className="mt-[160px] bg-ink py-[110px] text-white on-photo">
      <div className="gc-container">
        <p className="flex items-center gap-[9px] text-[16px] text-white/60">
          <span aria-hidden className="h-[5px] w-[5px] rounded-full bg-white/60" />
          {civil.eyebrow}
        </p>

        <div className="mt-[26px] grid grid-cols-1 gap-x-[19px] gap-y-[44px] lg:grid-cols-[1fr_1fr]">
          <div>
            <SectionHeading
              lead={civil.heading}
              trail={civil.headingTrail}
              className="[&>span:last-child]:text-white/45"
            />
            <p className="mt-[30px] max-w-[520px] text-[18px] leading-[1.42] text-white/70">
              {civil.positioning}
            </p>
            <p className="mt-[30px] max-w-[520px] text-[20px] font-medium leading-[1.24] tracking-[-0.02em]">
              {civil.tagline}
            </p>
            <div className="mt-[34px]">
              <PillButton href="/services/civil-engineering-construction">Explore civil works</PillButton>
            </div>
          </div>

          <div>
            <h3 className="text-[16px] text-white/60">What&rsquo;s included</h3>
            <ul className="mt-[18px] border-t border-white/15">
              {civil.scope.map((item, i) => (
                <li
                  key={item}
                  className="flex items-baseline gap-[18px] border-b border-white/15 py-[15px]"
                >
                  <span className="w-[24px] shrink-0 text-[14px] tabular-nums text-white/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[18px] leading-[1.3]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
