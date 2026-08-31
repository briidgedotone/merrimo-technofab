import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import PageHero from "@/components/PageHero";
import QuoteForm from "@/components/QuoteForm";
import PillButton from "@/components/ui/PillButton";
import Footer from "@/components/Footer";
import { services } from "@/data/services";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Merrimo Technofab Private Limited about industrial civil, MEP, fabrication, PEB and interior works.",
  alternates: { canonical: "/contact" },
};


// TODO(client): confirm these before launch — brief section 7, open items.
const pending = [
  "Registered office address",
  "Phone number(s)",
  "Enquiry email address",
  "Service locations / states covered",
];

export default function Contact() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Contact ${site.legalName}`,
    url: `${site.url}/contact`,
    about: { "@type": "Organization", name: site.legalName, url: site.url },
  };

  return (
    <>
      <Script
        id="jsonld-contact"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main id="main">
        <PageHero
          eyebrow="Contact"
          title="Let’s talk about your project."
          lede="Civil, mechanical, electrical, plumbing, HVAC, fabrication and PEB — planned and executed by one accountable partner. Tell us what you are building and we will take it from there."
          crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        >
          <div className="mt-[34px]">
            <PillButton href="/request-a-quote">Request a Quote</PillButton>
          </div>
        </PageHero>

        {/* Contact details */}
        <section className="gc-container pt-[100px]">
          <div className="max-w-[720px]">
            <h2 className="text-[clamp(21px,2.2vw,26px)] font-medium leading-[1.15] tracking-[-0.035em]">
              Company details
            </h2>
            <dl className="mt-[24px] border-t border-[#dcdcdc] text-[18px] leading-[1.3]">
              <div className="flex flex-col gap-[6px] border-b border-[#dcdcdc] py-[18px] sm:flex-row sm:gap-[24px]">
                <dt className="w-[190px] shrink-0 text-muted">Registered name</dt>
                <dd>{site.legalName}</dd>
              </div>
              <div className="flex flex-col gap-[6px] border-b border-[#dcdcdc] py-[18px] sm:flex-row sm:gap-[24px]">
                <dt className="w-[190px] shrink-0 text-muted">Office address</dt>
                <dd className="text-muted-soft">
                  {site.address.street}
                  <br />
                  {site.address.city}
                </dd>
              </div>
              <div className="flex flex-col gap-[6px] border-b border-[#dcdcdc] py-[18px] sm:flex-row sm:gap-[24px]">
                <dt className="w-[190px] shrink-0 text-muted">Phone</dt>
                <dd className="text-muted-soft">{site.phone}</dd>
              </div>
              <div className="flex flex-col gap-[6px] border-b border-[#dcdcdc] py-[18px] sm:flex-row sm:gap-[24px]">
                <dt className="w-[190px] shrink-0 text-muted">Email</dt>
                <dd className="text-muted-soft">{site.email}</dd>
              </div>
            </dl>

            {/* Honest placeholder rather than a fabricated address or map. */}
            <div className="mt-[30px] border-l-2 border-[#cfcfcf] pl-[24px]">
              <p className="text-[17px] leading-[1.45] text-muted">
                Contact details are being confirmed. Once supplied we will publish the office
                address, phone numbers, enquiry email and a location map here:
              </p>
              <ul className="mt-[14px] flex flex-wrap gap-[8px]">
                {pending.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-[#cfcfcf] px-[14px] py-[6px] text-[14px] text-muted-soft"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Enquiry form */}
        <section className="mt-[110px] bg-ink py-[100px] text-white on-photo">
          <div className="gc-container grid grid-cols-1 gap-x-[19px] gap-y-[54px] lg:grid-cols-[1fr_1fr]">
            <div>
              <h2 className="gc-display max-w-[460px] text-[clamp(28px,3.34vw,40px)]">
                Send us an enquiry
              </h2>
              <p className="mt-[24px] max-w-[460px] text-[18px] leading-[1.42] text-white/70">
                Include the scope, the site and how to reach you. Attach drawings or a tender pack
                when you have them — the more detail, the tighter the quote.
              </p>

              <div className="mt-[40px] max-w-[460px]">
                <h3 className="text-[16px] text-white/60">Or jump straight to a service</h3>
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

            <div className="lg:justify-self-end">
              <QuoteForm source="contact" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
