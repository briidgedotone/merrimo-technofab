import QuoteForm from "@/components/QuoteForm";

export default function Enquiry() {
  return (
    // Sized by its content — the form panel is taller than the fixed-ratio
    // plate this section used to use, and was being clipped by it.
    <section id="enquiry" className="mt-[90px] w-full bg-ink py-[70px] on-photo lg:mt-[129px] lg:py-[100px]">
      <div className="gc-container flex flex-col items-center">
        <h2 className="text-center text-[clamp(26px,3.34vw,40px)] font-medium leading-[1.1] tracking-[-0.038em] text-white">
          Request a Project Quote
        </h2>
        <p className="mt-[18px] max-w-[520px] text-center text-[17px] leading-[1.45] text-white/60">
          Tell us the scope, the site and how to reach you. We review drawings and site conditions
          before quoting.
        </p>
        <div className="mt-[36px] lg:mt-[48px]">
          <QuoteForm source="homepage" />
        </div>
      </div>
    </section>
  );
}
