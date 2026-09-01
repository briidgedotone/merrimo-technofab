import Script from "next/script";
import Hero from "@/sections/Hero";
import TrustStatement from "@/sections/TrustStatement";
import Solutions from "@/sections/Solutions";
import Civil from "@/sections/Civil";
import HowItWorks from "@/sections/HowItWorks";
import Sectors from "@/sections/Sectors";
import Enquiry from "@/sections/Enquiry";
import Faq from "@/sections/Faq";
import ClosingStatement from "@/sections/ClosingStatement";
import Footer from "@/components/Footer";
import { faqs, site } from "@/data/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${site.url}#organization`,
      name: site.legalName,
      alternateName: site.name,
      url: site.url,
      description: site.description,
      telephone: site.phone,
      vatID: site.gstin,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Shop 7, White Orchid, Gaur City 2, Sector 16C",
        addressLocality: "Greater Noida West, Gautam Buddha Nagar",
        addressRegion: "Uttar Pradesh",
        addressCountry: "IN",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <Script
        id="gc-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main id="main">
        <Hero />
        <TrustStatement />
        <Solutions />
        <Civil />
        <HowItWorks />
        <Sectors />
        <Enquiry />
        <Faq />
        <ClosingStatement />
      </main>
      <Footer />
    </>
  );
}
