"use client";

import Lenis from "lenis";
import { useEffect } from "react";
import { setLenis } from "@/lib/lenis";

/**
 * Page-level smooth scrolling. Scroll-linked sections (the pinned statement
 * and the horizontal step carousel) read `window.scrollY`, so interpolating
 * the scroll position here smooths those transforms as well.
 */
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.05,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      syncTouch: false,
      anchors: true,
    });
    setLenis(lenis);

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      setLenis(null);
      lenis.destroy();
    };
  }, []);

  return null;
}
