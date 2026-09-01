import Navbar from "@/components/Navbar";
import HeroBackground from "@/components/HeroBackground";
import PillButton from "@/components/ui/PillButton";
import { heroIcons } from "@/components/ui/Icons";
import { heroFeatures } from "@/data/site";

export default function Hero() {
  return (
    <section className="relative isolate w-full overflow-hidden on-photo">
      <Navbar />

      {/* A 5:3 plate, floored so it never collapses on short viewports and
          capped at one screen so the CTA is always above the fold — on a wide
          monitor the raw 5:3 ratio is taller than the viewport. */}
      <div className="relative aspect-[5/3] max-h-[100svh] min-h-[88svh] w-full sm:min-h-[560px] md:min-h-0">
        <HeroBackground alt="Footage of Merrimo Technofab's work: industrial site development, a steel fabrication yard, a pre-engineered building frame, structural erection and completed industrial facilities." />
        {/* Legibility scrims. The footage is busier and higher-contrast than a
            still, so this is a flat wash plus directional gradients for the
            headline (top-left) and the statement and CTA (bottom-right). */}
        <div aria-hidden className="absolute inset-0 bg-[rgba(8,12,18,0.28)]" />
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,12,18,0.42)_0%,rgba(8,12,18,0.16)_28%,rgba(8,12,18,0)_50%)]"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(100deg,rgba(8,12,18,0.40)_0%,rgba(8,12,18,0.10)_46%,rgba(8,12,18,0)_66%)]"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(0deg,rgba(8,12,18,0.46)_0%,rgba(8,12,18,0.14)_26%,rgba(8,12,18,0)_48%)]"
        />

        <div className="absolute inset-0">
          <div className="gc-container relative flex h-full flex-col">
            {/* Headline and feature rows share one bottom-anchored column, so
                the headline always sits just above the blocks whatever the
                viewport height. */}
            <div className="absolute bottom-[6.5%] left-[25px] right-[25px]">
              <h1 className="gc-display max-w-[760px] text-[clamp(34px,4.34vw,52px)] text-white">
                <span className="block">One Company.</span>
                <span className="block">Multiple Engineering Solutions.</span>
              </h1>

              {/* Feature list — bottom-left column of frosted rows. */}
              <ul className="mt-[34px] w-full max-w-[500px] space-y-[22px] sm:space-y-[31px] lg:mt-[52px]">
                {heroFeatures.map((f) => {
                  const Icon = heroIcons[f.icon];
                  return (
                    <li key={f.title} className="relative w-fit">
                      <span
                        aria-hidden
                        className="absolute -left-[14px] -right-[58px] -inset-y-[12px] rounded-[60px] border border-white/[0.14] bg-white/[0.03] shadow-[0_1px_0_rgba(0,0,0,0.05)] backdrop-blur-[4px] backdrop-saturate-[108%]"
                      />
                      <div className="relative flex items-center gap-[27px]">
                        <Icon className="h-[35px] w-[35px] shrink-0 text-white" />
                        <div className="min-w-0">
                          <p className="text-[16px] font-medium leading-[1.1] text-white">
                            {f.title}
                          </p>
                          <p className="mt-[2px] max-w-[225px] text-[13px] leading-[1.16] text-white/85">
                            {f.body}
                          </p>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Supporting statement + CTA. Anchored to the plate rather than
                the 1200px container, so it sits against the right edge of the
                screen instead of stopping at the container cap. */}
            <div className="absolute bottom-[5%] right-[calc(50px-((100vw-min(100vw,1200px))/2))] hidden w-[48%] max-w-[515px] lg:block">
              <p className="text-left text-[clamp(18px,2.42vw,29px)] font-medium leading-[1.14] tracking-[-0.02em] text-white">
                Your trusted partner for complete industrial engineering
                solutions.
              </p>
              <div className="mt-[24px] flex justify-start">
                <PillButton href="#enquiry">Request a Quote</PillButton>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* On narrow viewports the right-hand statement moves below the plate
          rather than being squeezed on top of the photograph. */}
      <div className="gc-container pb-[38px] pt-[34px] lg:hidden">
        <p className="text-[clamp(20px,4.6vw,26px)] font-medium leading-[1.16] tracking-[-0.02em]">
          Your trusted partner for complete industrial engineering solutions.
        </p>
        <div className="mt-[22px]">
          <PillButton href="#enquiry">Request a Quote</PillButton>
        </div>
      </div>
    </section>
  );
}
