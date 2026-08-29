import Link from "next/link";
import { ArrowUpRight } from "./Icons";

type Tone = "light" | "dark";

const base =
  "group inline-flex items-center rounded-full transition-[transform,box-shadow,background-color] duration-300 ease-out will-change-transform hover:-translate-y-[1px] active:translate-y-0";

const tones: Record<Tone, { shell: string; label: string; knob: string }> = {
  light: {
    shell: "bg-white text-ink shadow-[0_2px_18px_rgba(0,0,0,0.18)] hover:shadow-[0_6px_26px_rgba(0,0,0,0.24)]",
    label: "text-ink",
    knob: "bg-ink text-white",
  },
  dark: {
    shell: "bg-ink text-white shadow-[0_2px_18px_rgba(0,0,0,0.28)] hover:shadow-[0_6px_26px_rgba(0,0,0,0.34)]",
    label: "text-white",
    knob: "bg-white text-ink",
  },
};

type Props = {
  children: React.ReactNode;
  href?: string;
  type?: "button" | "submit";
  tone?: Tone;
  className?: string;
};

/** Pill with a trailing circular arrow knob — the site's primary CTA shape. */
export default function PillButton({
  children,
  href,
  type = "button",
  tone = "light",
  className = "",
}: Props) {
  const t = tones[tone];
  const inner = (
    <>
      <span className={`pl-[20px] pr-[14px] text-[15px] font-medium ${t.label}`}>{children}</span>
      <span
        className={`flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full ${t.knob} transition-transform duration-300 ease-out group-hover:rotate-45`}
      >
        <ArrowUpRight className="h-[17px] w-[17px]" />
      </span>
    </>
  );
  const cls = `${base} ${t.shell} h-[46px] pr-[6px] ${className}`;

  if (href) {
    return (
      <Link href={href} className={cls}>
        {inner}
      </Link>
    );
  }
  return (
    <button type={type} className={cls}>
      {inner}
    </button>
  );
}
