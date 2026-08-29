type Props = {
  id?: string;
  lead: string;
  trail?: string;
  className?: string;
};

/**
 * Two-line display heading: first line in ink, optional second line in the
 * muted grey used throughout the reference ("How it works / (Step-by-step)").
 */
export default function SectionHeading({ id, lead, trail, className = "" }: Props) {
  return (
    <h2
      id={id}
      className={`gc-display text-[clamp(34px,4.34vw,52px)] ${className}`}
    >
      <span className="block">{lead}</span>
      {trail ? <span className="block text-muted-soft">{trail}</span> : null}
    </h2>
  );
}
