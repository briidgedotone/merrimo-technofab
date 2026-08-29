import Link from "next/link";
import Navbar from "@/components/Navbar";

type Crumb = { label: string; href?: string };

/**
 * Dark banner at the top of every inner page. It reuses the overlay Navbar,
 * which sits on ink here instead of on the homepage photograph.
 */
export default function PageHero({
  eyebrow,
  title,
  lede,
  crumbs = [],
  children,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  crumbs?: Crumb[];
  children?: React.ReactNode;
}) {
  return (
    <section className="relative isolate w-full overflow-hidden bg-ink text-white on-photo">
      <Navbar />

      <div className="gc-container pb-[96px] pt-[190px]">
        {crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-[26px]">
            <ol className="flex flex-wrap items-center gap-x-[10px] gap-y-[4px] text-[15px] text-white/50">
              {crumbs.map((c, i) => (
                <li key={c.label} className="flex items-center gap-[10px]">
                  {c.href ? (
                    <Link href={c.href} className="transition-colors hover:text-white">
                      {c.label}
                    </Link>
                  ) : (
                    <span aria-current="page" className="text-white/80">
                      {c.label}
                    </span>
                  )}
                  {i < crumbs.length - 1 && <span aria-hidden>/</span>}
                </li>
              ))}
            </ol>
          </nav>
        )}

        {eyebrow && (
          <p className="flex items-center gap-[9px] text-[16px] text-white/60">
            <span aria-hidden className="h-[5px] w-[5px] rounded-full bg-white/60" />
            {eyebrow}
          </p>
        )}

        <h1 className="gc-display mt-[22px] max-w-[900px] text-[clamp(34px,4.34vw,52px)]">
          {title}
        </h1>

        {lede && (
          <p className="mt-[30px] max-w-[640px] text-[18px] leading-[1.42] text-white/70">{lede}</p>
        )}

        {children}
      </div>
    </section>
  );
}
