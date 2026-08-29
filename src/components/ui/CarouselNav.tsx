"use client";

import { ArrowLeft, ArrowRight } from "./Icons";

type Props = {
  onPrev: () => void;
  onNext: () => void;
  canPrev: boolean;
  canNext: boolean;
  label: string;
};

/** The 77×69 rounded-square arrow pair used by both carousels. */
export default function CarouselNav({ onPrev, onNext, canPrev, canNext, label }: Props) {
  const shell =
    "flex h-[69px] w-[77px] items-center justify-center rounded-[24px] transition-[opacity,transform,background-color] duration-300 ease-out disabled:cursor-not-allowed";
  return (
    <div className="flex items-center gap-[16px]">
      <button
        type="button"
        onClick={onPrev}
        disabled={!canPrev}
        aria-label={`Previous ${label}`}
        className={`${shell} bg-white text-ink shadow-[0_2px_16px_rgba(0,0,0,0.06)] hover:bg-white disabled:opacity-45 ${
          canPrev ? "hover:-translate-y-[2px]" : ""
        }`}
      >
        <ArrowLeft className="h-[22px] w-[22px]" />
      </button>
      <button
        type="button"
        onClick={onNext}
        disabled={!canNext}
        aria-label={`Next ${label}`}
        className={`${shell} bg-ink text-white shadow-[0_2px_16px_rgba(0,0,0,0.14)] disabled:opacity-40 ${
          canNext ? "hover:-translate-y-[2px]" : ""
        }`}
      >
        <ArrowRight className="h-[22px] w-[22px]" />
      </button>
    </div>
  );
}
