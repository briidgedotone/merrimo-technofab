import type Lenis from "lenis";

/** Shared handle so components can drive the page scroll through Lenis
    instead of the browser's own (unsmoothed) scrollTo. */
let instance: Lenis | null = null;

export function setLenis(next: Lenis | null) {
  instance = next;
}

export function scrollToY(y: number) {
  if (instance) instance.scrollTo(y, { duration: 1.1 });
  else window.scrollTo({ top: y, behavior: "smooth" });
}
