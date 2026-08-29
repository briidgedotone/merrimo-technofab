import Image from "next/image";
import Navbar from "@/components/Navbar";
import PillButton from "@/components/ui/PillButton";
import { heroIcons } from "@/components/ui/Icons";
import { heroFeatures } from "@/data/site";
import { asset } from "@/lib/asset";

export default function Hero() {
  return (
    <section className="relative isolate w-full overflow-hidden on-photo">
      <Navbar />

      {/* 1200 × 720 in the reference — a 5:3 plate, floored so the
          composition never collapses on short viewports. */}
      <div className="relative aspect-[5/3] min-h-[560px] w-full sm:min-h-0">
        <Image
          src={asset("/images/hero.jpg")}
          alt="Structural steel frame and formwork on an industrial construction site."
          fill
          priority
          sizes="100vw"
          className="object-cover object-[52%_center]"
        />
        {/* legibility scrim — top-left for the headline, bottom for the CTA */}
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,18,26,0.34)_0%,rgba(10,18,26,0.10)_26%,rgba(10,18,26,0)_46%)]"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(100deg,rgba(8,14,10,0.30)_0%,rgba(8,14,10,0.06)_42%,rgba(8,14,10,0)_62%)]"
        />

        <div className="absolute inset-0">
          <div className="gc-container relative flex h-full flex-col">
            {/* Headline — sits at 27% of the plate height in the reference. */}
            <h1 className="gc-display absolute top-[27%] left-[25px] right-[25px] max-w-[760px] text-[clamp(34px,4.34vw,52px)] text-white">
              <span className="block">One Company.</span>
              <span className="block">Multiple Engineering Solutions.</span>
            </h1>

            {/* Feature list — bottom-left column of frosted rows. */}
            <ul className="absolute bottom-[6.5%] left-[25px] w-full max-w-[500px] space-y-[31px] pr-[25px]">
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
                        <p className="text-[16px] font-medium leading-[1.1] text-white">{f.title}</p>
                        <p className="mt-[2px] max-w-[225px] text-[13px] leading-[1.16] text-white/85">{f.body}</p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>

            {/* Supporting statement + CTA, right half. */}
            <div className="absolute bottom-[5%] right-[25px] hidden w-[48%] max-w-[515px] lg:block">
              <p className="text-center text-[clamp(18px,2.42vw,29px)] font-medium leading-[1.14] tracking-[-0.02em] text-white">
                Your trusted partner for complete industrial engineering solutions.
              </p>
              <div className="mt-[24px] flex justify-end">
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
