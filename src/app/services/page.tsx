import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import PillButton from "@/components/ui/PillButton";
import Footer from "@/components/Footer";
import { services } from "@/data/services";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Civil engineering and construction, industrial MEP, fabrication, PEB, installation and interior works from Merrimo Technofab Private Limited.",
  alternates: { canonical: "/services" },
};

export default function ServicesIndex() {
  return (
    <>
      <main id="main">
        <PageHero
          eyebrow="Services"
          title="One company. Multiple engineering solutions."
          lede={site.description}
          crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
        >
          <div className="mt-[34px]">
            <PillButton href="/request-a-quote">Request a Quote</PillButton>
          </div>
        </PageHero>

        <section className="gc-container py-[110px]">
          <ul className="grid grid-cols-1 border-t border-[#dcdcdc]">
            {services.map((s, i) => (
              <li key={s.slug} className="border-b border-[#dcdcdc]">
                <Link
                  href={`/services/${s.slug}`}
                  className="group grid grid-cols-1 items-start gap-x-[24px] gap-y-[10px] py-[30px] md:grid-cols-[80px_1fr_1fr_44px]"
                >
                  <span className="text-[15px] tabular-nums text-muted-soft">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-[clamp(21px,2.2vw,26px)] font-medium leading-[1.15] tracking-[-0.035em] transition-colors group-hover:text-muted">
                    {s.title}
                  </h2>
                  <p className="max-w-[520px] text-[16px] leading-[1.35] text-muted-soft">
                    {s.summary}
                  </p>
                  <span
                    aria-hidden
                    className="flex h-[44px] w-[44px] items-center justify-center justify-self-start rounded-full border border-[#cfcfcf] transition-[background-color,color,transform] duration-300 ease-out group-hover:-translate-y-[2px] group-hover:border-ink group-hover:bg-ink group-hover:text-white md:justify-self-end"
                  >
                    <svg viewBox="0 0 24 24" fill="none" className="h-[18px] w-[18px]">
                      <path
                        d="M7.5 16.5 16.5 7.5M9 7.5h7.5V15"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
