import type { MetadataRoute } from "next";

// Required by output: "export" — emit these as build-time static files.
export const dynamic = "force-static";
import { services } from "@/data/services";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: site.url, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    {
      url: `${site.url}/request-a-quote`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.8,
    },
    ...services.map((s) => ({
      url: `${site.url}/services/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      // The priority vertical outranks the rest, per the owner's instruction.
      priority: s.slug === "civil-engineering-construction" ? 0.95 : 0.7,
    })),
  ];
}
