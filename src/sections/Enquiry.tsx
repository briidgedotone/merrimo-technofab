import QuoteForm from "@/components/QuoteForm";

export default function Enquiry() {
  return (
    <section id="enquiry" className="relative isolate mt-[129px] w-full overflow-hidden on-photo">
      <div className="relative aspect-[1200/679] min-h-[520px] w-full bg-ink sm:min-h-0">
        <div className="absolute inset-0 overflow-y-auto">
          <div className="gc-container flex min-h-full flex-col items-center pb-[60px] pt-[79px] lg:justify-start">
            <h2 className="text-center text-[clamp(26px,3.34vw,40px)] font-medium leading-[1.1] tracking-[-0.038em] text-white">
              Request a Project Quote
            </h2>
            <div className="mt-[115px]">
              <QuoteForm source="homepage" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
