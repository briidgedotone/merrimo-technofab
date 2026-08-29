import { BrandMark } from "@/components/ui/Icons";
import { closingStatement } from "@/data/site";

export default function ClosingStatement() {
  return (
    <section aria-label="Support" className="gc-container">
      <BrandMark className="mt-[142px] h-[47px] w-[47px] text-ink" />
      <p className="gc-statement mx-auto mt-[81px] max-w-[1000px] text-center text-[clamp(22px,3.5vw,42px)] text-muted">
        {closingStatement.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </p>
    </section>
  );
}
