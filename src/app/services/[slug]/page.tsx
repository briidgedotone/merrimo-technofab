import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import PillButton from "@/components/ui/PillButton";
import Footer from "@/components/Footer";
import { services, serviceBySlug } from "@/data/services";
import { site } from "@/data/site";
import { asset } from "@/lib/asset";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.summary,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.title} — ${site.legalName}`,
      description: service.summary,
      url: `${site.url}/services/${service.slug}`,
      images: [{ url: `${site.url}${service.image}` }],
    },
  };
}

export default async function ServicePage({ params }: Params) {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) notFound();

  const children = service.children
    ?.map((c) => serviceBySlug(c))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.summary,
    serviceType: service.title,
    provider: { "@type": "Organization", name: site.legalName, url: site.url },
    areaServed: "IN",
  };

  return (
    <>
      <Script
        id={`jsonld-${service.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main id="main">
        <PageHero
          eyebrow={service.eyebrow}
          title={service.title}
          lede={service.summary}
          crumbs={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: service.navTitle },
          ]}
        >
          <div className="mt-[34px]">
            <PillButton href="/request-a-quote">Request a Quote</PillButton>
          </div>
        </PageHero>

        {/* Cover image */}
        <div className="gc-container mt-[60px] lg:mt-[80px]">
          <div className="relative aspect-[1200/470] w-full overflow-hidden rounded-[14px]">
            <Image
              src={asset(service.image)}
              alt={service.alt}
              fill
              sizes="(max-width: 1200px) 100vw, 1150px"
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Scope */}
        {service.groups.length > 0 && (
          <section className="gc-container pt-[110px]">
            <div className="grid grid-cols-1 gap-x-[19px] gap-y-[54px] lg:grid-cols-2">
              {service.groups.map((group) => (
                <div key={group.title}>
                  <h2 className="text-[clamp(21px,2.2vw,26px)] font-medium leading-[1.15] tracking-[-0.035em]">
                    {group.title}
                  </h2>
                  <ul className="mt-[20px] border-t border-[#dcdcdc]">
                    {group.items.map((item, i) => (
                      <li
                        key={item}
                        className="flex items-baseline gap-[18px] border-b border-[#dcdcdc] py-[15px]"
                      >
                        <span className="w-[24px] shrink-0 text-[14px] tabular-nums text-muted-soft">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="text-[18px] leading-[1.3]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* MEP overview page — links to the child verticals */}
        {children && children.length > 0 && (
          <section className="gc-container pt-[110px]">
            <h2 className="text-[clamp(21px,2.2vw,26px)] font-medium leading-[1.15] tracking-[-0.035em]">
              What MEP covers
            </h2>
            <ul className="mt-[20px] border-t border-[#dcdcdc]">
              {children.map((c) => (
                <li key={c.slug} className="border-b border-[#dcdcdc]">
                  <Link href={`/services/${c.slug}`} className="group block py-[24px]">
                    <h3 className="text-[19px] font-medium leading-[1.2] tracking-[-0.025em] transition-colors group-hover:text-muted">
                      {c.title}
                    </h3>
                    <p className="mt-[8px] max-w-[640px] text-[16px] leading-[1.31] text-muted-soft">
                      {c.summary}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {service.applications && (
          <section className="gc-container pt-[80px]">
            <h2 className="text-[16px] text-muted">Applications</h2>
            <p className="mt-[12px] max-w-[760px] text-[18px] leading-[1.42]">
              {service.applications}
            </p>
          </section>
        )}

        {/* Honest gap notice rather than invented detail. */}
        {service.needsContent && (
          <section className="gc-container pt-[90px]">
            <div className="max-w-[760px] border-l-2 border-[#cfcfcf] pl-[24px]">
              <p className="text-[18px] leading-[1.45] text-muted">
                Detailed scope for this vertical is being finalised with our engineering team.
                For a specific requirement, send us the drawings or a short description and we
                will respond with scope and pricing.
              </p>
              <div className="mt-[24px]">
                <PillButton href="/request-a-quote" tone="dark">
                  Send us your requirement
                </PillButton>
              </div>
            </div>
          </section>
        )}

        {service.tagline && (
          <section className="mt-[110px] bg-ink py-[90px] text-white on-photo">
            <div className="gc-container">
              <p className="gc-statement mx-auto max-w-[900px] text-center text-[clamp(22px,3.34vw,40px)]">
                {service.tagline}
              </p>
            </div>
          </section>
        )}

        {/* Related */}
        <section className="gc-container py-[110px]">
          <h2 className="text-[clamp(21px,2.2vw,26px)] font-medium leading-[1.15] tracking-[-0.035em]">
            Other solutions
          </h2>
          <ul className="mt-[30px] grid grid-cols-1 gap-x-[19px] gap-y-[24px] sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
              <li key={r.slug}>
                <Link
                  href={`/services/${r.slug}`}
                  className="group block h-full border-t border-[#dcdcdc] pt-[20px]"
                >
                  <h3 className="text-[19px] font-medium leading-[1.2] tracking-[-0.025em] transition-colors group-hover:text-muted">
                    {r.title}
                  </h3>
                  <p className="mt-[8px] text-[16px] leading-[1.31] text-muted-soft">{r.summary}</p>
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
