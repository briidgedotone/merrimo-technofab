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

        {/* Details on the left, enquiry form alongside on the right. */}
        <section className="gc-container py-[100px]">
          <div className="grid grid-cols-1 items-start gap-x-[19px] gap-y-[64px] lg:grid-cols-[1fr_560px]">
            <div>
              <h2 className="text-[clamp(21px,2.2vw,26px)] font-medium leading-[1.15] tracking-[-0.035em]">
                Company details
              </h2>
              <dl className="mt-[24px] max-w-[560px] border-t border-[#dcdcdc] text-[18px] leading-[1.3]">
                <div className="flex flex-col gap-[6px] border-b border-[#dcdcdc] py-[18px] sm:flex-row sm:gap-[24px]">
                  <dt className="w-[170px] shrink-0 text-muted">Registered name</dt>
                  <dd>{site.legalName}</dd>
                </div>
                <div className="flex flex-col gap-[6px] border-b border-[#dcdcdc] py-[18px] sm:flex-row sm:gap-[24px]">
                  <dt className="w-[170px] shrink-0 text-muted">Office address</dt>
                  <dd className="text-muted-soft">
                    {site.address.street}
                    <br />
                    {site.address.city}
                  </dd>
                </div>
                <div className="flex flex-col gap-[6px] border-b border-[#dcdcdc] py-[18px] sm:flex-row sm:gap-[24px]">
                  <dt className="w-[170px] shrink-0 text-muted">Phone</dt>
                  <dd className="text-muted-soft">{site.phone}</dd>
                </div>
                <div className="flex flex-col gap-[6px] border-b border-[#dcdcdc] py-[18px] sm:flex-row sm:gap-[24px]">
                  <dt className="w-[170px] shrink-0 text-muted">Email</dt>
                  <dd className="text-muted-soft">{site.email}</dd>
                </div>
              </dl>

              {/* Honest placeholder rather than a fabricated address or map. */}
              <div className="mt-[30px] max-w-[560px] border-l-2 border-[#cfcfcf] pl-[24px]">
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

              <div className="mt-[40px] max-w-[560px]">
                <h3 className="text-[16px] text-muted">Or jump straight to a service</h3>
                <ul className="mt-[14px] flex flex-wrap gap-[8px]">
                  {services.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}`}
                        className="inline-flex rounded-full border border-[#cfcfcf] px-[14px] py-[6px] text-[14px] text-muted-soft transition-colors hover:border-ink hover:text-ink"
                      >
                        {s.navTitle}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:sticky lg:top-[40px]">
              <h2 className="text-[clamp(21px,2.2vw,26px)] font-medium leading-[1.15] tracking-[-0.035em]">
                Send us an enquiry
              </h2>
              <p className="mt-[12px] max-w-[520px] text-[17px] leading-[1.45] text-muted-soft">
                Include the scope, the site and how to reach you — the more detail, the tighter the
                quote.
              </p>
              <div className="mt-[24px]">
                <QuoteForm source="contact" />
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
