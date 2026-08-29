import type { MetadataRoute } from "next";

// Required by output: "export" — emit these as build-time static files.
export const dynamic = "force-static";
import { site } from "@/data/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${site.url}/sitemap.xml`,
  };
}
