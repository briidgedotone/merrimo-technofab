import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

/** Brand mark — two interlocked structural frames on a common node. */
export function BrandMark({ className, ...rest }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true" className={className} {...rest}>
      <g stroke="currentColor" strokeWidth="2.6" strokeLinejoin="round">
        <rect x="6.4" y="6.4" width="27.2" height="27.2" rx="4" transform="rotate(45 20 20)" />
        <rect x="9.6" y="9.6" width="20.8" height="20.8" rx="3" />
      </g>
      <circle cx="20" cy="20" r="2.4" fill="currentColor" />
    </svg>
  );
}

export function ArrowUpRight({ className, ...rest }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className} {...rest}>
      <path
        d="M7.5 16.5 16.5 7.5M9 7.5h7.5V15"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowLeft({ className, ...rest }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className} {...rest}>
      <path
        d="M20 12H4m0 0 6.5-6.5M4 12l6.5 6.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowRight({ className, ...rest }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className} {...rest}>
      <path
        d="M4 12h16m0 0-6.5-6.5M20 12l-6.5 6.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MenuGlyph({ className, ...rest }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className} {...rest}>
      <path d="M5 10h14M5 14h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

/* ---------------- hero feature icons ---------------- */

export function FoundationIcon({ className, ...rest }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className={className} {...rest}>
      <path d="M16 3 30 10.4 16 17.8 2 10.4 16 3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M2 16.2 16 23.6l14-7.4M2 21.9 16 29.3l14-7.4" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

export function MepIcon({ className, ...rest }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className={className} {...rest}>
      <path d="M3 8.5h17a4.5 4.5 0 0 1 0 9H12a4.5 4.5 0 0 0 0 9h17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M20 4.5v8M12 19.5v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="20" cy="4.5" r="1.9" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="27.5" r="1.9" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export function DocumentIcon({ className, ...rest }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className={className} {...rest}>
      <path
        d="M4.5 3.5h13L27.5 13v15.5h-23V3.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M17.5 3.5V13h10" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M10 18.5h12M10 23h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/* ---------------- process step icons ---------------- */

export function SurveyIcon({ className, ...rest }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className} {...rest}>
      <path d="M4 20V7.5l7-3.5v16M11 20h9V11l-9-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M14.5 13.5h2.5M14.5 17h2.5M7 10.5v.01M7 14v.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function PlanningIcon({ className, ...rest }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className} {...rest}>
      <rect x="3.5" y="4.5" width="17" height="15" rx="1.6" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3.5 9h17M8 9v10.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M11.5 12.5h6M11.5 16h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function ExecutionIcon({ className, ...rest }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className} {...rest}>
      <path d="m13.4 6.4 4.2 4.2-8.5 8.5a3 3 0 0 1-4.2-4.2l8.5-8.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="m15.2 4.6 4.2 4.2-1.8 1.8-4.2-4.2 1.8-1.8Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="m7 12.8 4.2 4.2" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function HandoverIcon({ className, ...rest }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className} {...rest}>
      <path
        d="M12 2.8 20.5 7v10L12 21.2 3.5 17V7L12 2.8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="m8 11.6 2.9 2.9L16.4 9"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export const stepIcons = {
  survey: SurveyIcon,
  planning: PlanningIcon,
  execution: ExecutionIcon,
  handover: HandoverIcon,
};

export const heroIcons = {
  foundation: FoundationIcon,
  mep: MepIcon,
  document: DocumentIcon,
};
