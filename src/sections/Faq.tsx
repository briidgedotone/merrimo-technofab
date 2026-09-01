"use client";

import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { faqs } from "@/data/site";

/* The reference lays the FAQ out as two independent columns, so an opened
   answer only pushes the items below it in its own column. */
const left = faqs.filter((_, i) => i % 2 === 0);
const right = faqs.filter((_, i) => i % 2 === 1);

export default function Faq() {
  const [open, setOpen] = useState<string | null>("Do you handle civil works as well as MEP?");

  return (
    <section id="faq" className="gc-container pt-[90px] lg:pt-[129px]">
      <SectionHeading lead="Got any questions?" trail="We’ve got answers" />

      <div className="mt-[60px] grid grid-cols-1 items-start gap-x-[27px] gap-y-[20px] md:grid-cols-2">
        {[left, right].map((column, ci) => (
          <div key={ci} className="space-y-[20px]">
            {column.map((item) => (
              <FaqItem
                key={item.q}
                question={item.q}
                answer={item.a}
                open={open === item.q}
                onToggle={() => setOpen(open === item.q ? null : item.q)}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

function FaqItem({
  question,
  answer,
  open,
  onToggle,
}: {
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
}) {
  const id = question.replace(/\W+/g, "-").toLowerCase();
  return (
    <div className="overflow-hidden rounded-[14px] bg-white">
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          id={`${id}-button`}
          className="flex min-h-[86px] w-full cursor-pointer items-center justify-between gap-[16px] px-[24px] py-[20px] text-left lg:min-h-[94px] lg:gap-[20px] lg:px-[38px]"
        >
          <span className="text-[19px] font-medium leading-[1.25] tracking-[-0.02em]">{question}</span>
          <span aria-hidden className="relative h-[16px] w-[16px] shrink-0">
            <span className="absolute left-0 top-1/2 h-[1.4px] w-full -translate-y-1/2 bg-ink" />
            <span
              className={`absolute left-1/2 top-0 h-full w-[1.4px] -translate-x-1/2 bg-ink transition-transform duration-300 ease-out ${
                open ? "scale-y-0" : "scale-y-100"
              }`}
            />
          </span>
        </button>
      </h3>
      <div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-button`}
        className={`grid transition-[grid-template-rows] duration-[400ms] ease-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="max-w-[510px] px-[24px] pb-[32px] pt-[22px] text-[17px] leading-[1.32] text-muted-soft lg:px-[38px] lg:pb-[40px] lg:pt-[30px]">{answer}</p>
        </div>
      </div>
    </div>
  );
}
