import type { NextConfig } from "next";

/**
 * Static export for GitHub Pages.
 *
 * Pages serves the site from /<repo>, so basePath/assetPrefix are set from an
 * env var — leave BASE_PATH unset for a custom domain or a user-root repo.
 * There is no server in this target, so next/image optimisation is off and the
 * enquiry form posts to NEXT_PUBLIC_FORM_ENDPOINT instead of a route handler.
 */
const basePath = process.env.BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  devIndicators: false,
  images: { unoptimized: true },
};

export default nextConfig;
