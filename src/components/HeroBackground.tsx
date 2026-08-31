"use client";

import { useReducedMotion } from "motion/react";
import { asset } from "@/lib/asset";

/**
 * Looping site footage behind the hero.
 *
 * A 11.5s montage of five clips (Pexels, free licence) following the service
 * story: site development, fabrication yard, PEB frame, erection, completed
 * facilities. Clips cross-fade into each other and the tail cross-dissolves
 * over the head, so the whole thing loops without a visible cut.
 *
 * Under prefers-reduced-motion we render the poster frame instead of the
 * video, which also avoids the download entirely.
 */
export default function HeroBackground({ alt }: { alt: string }) {
  const reduced = useReducedMotion();

  if (reduced) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={asset("/video/hero-poster.jpg")}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover object-[52%_center]"
      />
    );
  }

  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster={asset("/video/hero-poster.jpg")}
      aria-label={alt}
      className="absolute inset-0 h-full w-full object-cover object-[52%_center]"
    >
      <source src={asset("/video/hero.mp4")} type="video/mp4" />
    </video>
  );
}
