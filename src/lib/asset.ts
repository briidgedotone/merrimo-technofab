/**
 * Prefix a public asset with the deploy base path.
 *
 * Next applies `basePath` to its own bundles automatically, but not to the
 * `src` of `next/image` when `images.unoptimized` is set — the default loader
 * returns the path untouched. Anything under /public must go through here.
 */
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string) {
  return `${BASE}${path}`;
}

/** Absolute URL, for metadata that must not be resolved relative to a page. */
export function absoluteAsset(origin: string, path: string) {
  return `${origin}${path}`;
}
