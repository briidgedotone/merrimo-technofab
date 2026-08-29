import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import QuoteForm from "@/components/QuoteForm";
import Footer from "@/components/Footer";
import { services } from "@/data/services";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Request a Quote",
  description:
    "Send Merrimo Technofab your scope of work, project location and contact details for a civil, MEP, fabrication or PEB enquiry.",
  alternates: { canonical: "/request-a-quote" },
};

const helpsWith = [
  "Drawings, tender documents or a written scope",
  "Site visit and requirement study before quoting",
  "Civil, MEP and fabrication priced as one coordinated scope",
  "Method statement, material list and execution schedule",
];

export default function RequestAQuote() {
  return (
    <>
      <main id="main" className="relative isolate bg-ink text-white on-photo">
        <Navbar />

        <div className="gc-container pb-[120px] pt-[190px]">
          <nav aria-label="Breadcrumb" className="mb-[26px]">
            <ol className="flex items-center gap-[10px] text-[15px] text-white/50">
              <li>
                <Link href="/" className="transition-colors hover:text-white">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li aria-current="page" className="text-white/80">
                Request a quote
              </li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 gap-x-[19px] gap-y-[64px] lg:grid-cols-[1fr_1fr]">
            <div>
              <h1 className="gc-display max-w-[620px] text-[clamp(34px,4.34vw,52px)]">
                Request a project quote
              </h1>
              <p className="mt-[30px] max-w-[520px] text-[18px] leading-[1.42] text-white/70">
                Tell us the scope, the site and how to reach you. We review drawings and site
                conditions before quoting, so the price you get reflects the work as it will
                actually be executed.
              </p>

              <ul className="mt-[40px] max-w-[520px] border-t border-white/15">
                {helpsWith.map((item, i) => (
                  <li
                    key={item}
                    className="flex items-baseline gap-[18px] border-b border-white/15 py-[15px]"
                  >
                    <span className="w-[24px] shrink-0 text-[14px] tabular-nums text-white/40">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[17px] leading-[1.3]">{item}</span>
                  </li>
                ))}
              </ul>

              <dl className="mt-[44px] space-y-[22px] text-[17px] leading-[1.25]">
                <div>
                  <dt className="text-white">Office Address:</dt>
                  <dd className="mt-[6px] text-white/70">
                    {site.address.street}
                    <br />
                    {site.address.city}
                  </dd>
                </div>
                <div>
                  <dt className="text-white">Phone:</dt>
                  <dd className="mt-[6px] text-white/70">{site.phone}</dd>
                </div>
                <div>
                  <dt className="text-white">Email:</dt>
                  <dd className="mt-[6px] text-white/70">{site.email}</dd>
                </div>
              </dl>
            </div>

            <div className="lg:justify-self-end">
              <QuoteForm source="request-a-quote" />

              <div className="mt-[54px] max-w-[462px]">
                <h2 className="text-[16px] text-white/60">Enquiring about a specific service?</h2>
                <ul className="mt-[16px] flex flex-wrap gap-[10px]">
                  {services.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}`}
                        className="inline-flex rounded-full border border-white/25 px-[16px] py-[8px] text-[14px] text-white/80 transition-colors hover:border-white hover:text-white"
                      >
                        {s.navTitle}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
