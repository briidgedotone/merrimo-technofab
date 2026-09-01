import { BrandMark } from "@/components/ui/Icons";
import { closingStatement } from "@/data/site";

export default function ClosingStatement() {
  return (
    <section aria-label="Support" className="gc-container">
      <BrandMark className="mt-[96px] h-[40px] w-[40px] text-ink lg:mt-[142px] lg:h-[47px] lg:w-[47px]" />
      <p className="gc-statement mx-auto mt-[52px] max-w-[1000px] text-center text-[clamp(22px,3.5vw,42px)] text-muted lg:mt-[81px]">
        {closingStatement.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </p>
    </section>
  );
}
