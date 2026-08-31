/**
 * All homepage copy, sourced from the client brief
 * "Merrimo Technofab — Website Content & Structure Brief".
 *
 * Items the brief flags as OPEN (section 7) are marked TODO(client) and use
 * visible placeholders rather than invented values.
 */

export const site = {
  name: "Merrimo Technofab",
  legalName: "Merrimo Technofab Private Limited",
  url: "https://briidgedotone.github.io/merrimo-technofab",
  tagline: "Your Trusted Partner for Complete Industrial Engineering Solutions.",
  supportingLine: "One Company. Multiple Engineering Solutions.",
  description:
    "Merrimo Technofab Private Limited is a professionally managed industrial MEP, fabrication and installation solutions provider, delivering integrated Civil, Mechanical, Electrical, Plumbing, HVAC, Fabrication, PEB and Interior works for industrial and commercial projects.",

  // TODO(client): confirm office address, phone and email before launch.
  address: {
    street: "Office address to be confirmed",
    city: "Service locations to be confirmed",
  },
  phone: "Phone to be confirmed",
  phoneHref: "",
  email: "Email to be confirmed",

  social: [] as { label: string; href: string }[],

  nav: [
    { label: "Home", href: "/" },
    { label: "About us", href: "/#about" },
    { label: "Services", href: "/services" },
    { label: "Civil Engineering", href: "/services/civil-engineering-construction" },
    { label: "How we work", href: "/#how-it-works" },
    { label: "Sectors", href: "/#sectors" },
    { label: "Request a quote", href: "/request-a-quote" },
    { label: "FAQ", href: "/#faq" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export const heroFeatures = [
  {
    icon: "foundation" as const,
    title: "Civil-led execution",
    body: "Foundations, flooring, structural and site development works.",
  },
  {
    icon: "mep" as const,
    title: "Complete MEP under one roof",
    body: "Mechanical, electrical, plumbing, HVAC and fabrication.",
  },
  {
    icon: "document" as const,
    title: "Tested and commissioned",
    body: "Proper testing, commissioning and post-handover support.",
  },
];

export const trustStatement = [
  "Complete engineering solutions under one roof",
  "Civil, Mechanical, Electrical, Plumbing, HVAC, Fabrication, PEB",
  "Experienced, safety-focused industrial workforce",
];

/** The three lead pillars, shown as illustrated cards. Civil is first per the
    owner's priority instruction in the brief. */
export const advantages = [
  {
    number: "01",
    eyebrow: "Priority",
    title: "Civil Engineering & Construction",
    href: "/services/civil-engineering-construction",
    illustration: "/illustrations/civil.webp",
    alt: "Isometric line drawing of an industrial building under construction: RCC frame, tower crane, concrete mixer and foundation pad.",
  },
  {
    number: "02",
    eyebrow: "MEP",
    title: "Integrated Industrial MEP",
    href: "/services/industrial-mep",
    illustration: "/illustrations/mep.webp",
    alt: "Isometric line drawing of a plant room with utility piping, control panels, ducting and a condenser unit.",
  },
  {
    number: "03",
    eyebrow: "Fabrication",
    title: "MS Fabrication & PEB Buildings",
    href: "/services/ms-fabrication",
    illustration: "/illustrations/fabrication.webp",
    alt: "Isometric line drawing of a pre-engineered steel building alongside fabricated beams, trusses and a mobile crane.",
  },
];

/** The remaining pillars from brief section 2, shown as a compact grid. */
export const pillars = [
  {
    title: "Mechanical Solutions",
    body: "Industrial mechanical installation, equipment support, piping-related works, ducting and mechanical system installation.",
    number: "04",
    href: "/services/mechanical",
    illustration: "/illustrations/mechanical.webp",
    alt: "Isometric line drawing of a mechanical skid with motor, pump, pressure vessel, heat exchanger and gearbox.",
  },
  {
    title: "Electrical Solutions",
    body: "Power distribution, LT and control cabling, cable trays, panels, lighting, earthing and electrical maintenance works.",
    number: "05",
    href: "/services/electrical",
    illustration: "/illustrations/electrical.webp",
    alt: "Isometric line drawing of a substation with transmission tower, LT panel, transformer, generator and cable trays.",
  },
  {
    title: "Plumbing & Water Solutions",
    body: "Industrial plumbing, water distribution, drainage, rainwater management and associated piping solutions.",
    number: "06",
    href: "/services/plumbing-water",
    illustration: "/illustrations/plumbing.webp",
    alt: "Isometric line drawing of a plumbing installation with overhead tank, washroom fittings, pump set and filtration.",
  },
  {
    title: "Rainwater & Industrial Water",
    body: "Rainwater harvesting, storm-water drainage, recharge pits, collection tanks and industrial water infrastructure.",
    number: "07",
    href: "/services/rainwater-industrial-water",
    illustration: "/illustrations/rainwater.webp",
    alt: "Isometric line drawing of a rainwater harvesting system: roof collection, filtration, recharge pit and storage tank.",
  },
  {
    title: "HVAC Ducting",
    body: "HVAC duct fabrication and installation, ventilation, exhaust ducting, duct supports and air distribution systems.",
    number: "08",
    href: "/services/hvac-ducting",
    illustration: "/illustrations/hvac.webp",
    alt: "Isometric line drawing of an HVAC installation with air-handling unit, duct runs, diffusers and an exhaust riser.",
  },
  {
    title: "Industrial Installation & Erection",
    body: "Complete site installation, erection, fabrication, equipment support and project execution services.",
    number: "09",
    href: "/services/installation-erection",
    illustration: "/illustrations/installation.webp",
    alt: "Isometric line drawing of site erection works: crawler crane, structural platform, vessels and a working crew.",
  },
  {
    title: "Interior Solutions",
    body: "Industrial and commercial interior works — partitioning, ceilings, flooring, finishing and associated requirements.",
    number: "10",
    href: "/services/interior",
    illustration: "/illustrations/interior.webp",
    alt: "Isometric line drawing of a fitted-out commercial interior with partitions, ceilings, workstations and meeting rooms.",
  },
];

/** Brief section 3 — the priority vertical, given its own section. */
export const civil = {
  eyebrow: "Priority vertical",
  heading: "Civil Engineering",
  headingTrail: "& Construction",
  positioning:
    "Merrimo Technofab Private Limited undertakes industrial civil construction and infrastructure works for factories, warehouses, manufacturing units and commercial facilities — with a focus on quality construction, proper execution, safety and timely completion of industrial civil works as per project requirements.",
  tagline: "Integrated Solutions for Industrial Infrastructure — Built on a Strong Civil Foundation.",
  scope: [
    "RCC Foundation & Civil Foundations",
    "Industrial Flooring & PCC Works",
    "Equipment & Machine Foundations",
    "Structural Foundation Works",
    "Boundary Walls & Compound Development",
    "Drainage & Storm-Water Civil Works",
    "Underground Water & Utility Chambers",
    "Roads, Paving & Internal Development",
    "Civil Works for Industrial Sheds",
    "Repair, Renovation & Maintenance Works",
  ],
};

export const steps = [
  {
    number: "01",
    title: "Site Study & Requirement",
    body: "We review drawings, site conditions and project requirements before quoting the works.",
    icon: "survey" as const,
  },
  {
    number: "02",
    title: "Planning & Method",
    body: "Material selection, method statements and an execution schedule agreed before mobilisation.",
    icon: "planning" as const,
  },
  {
    number: "03",
    title: "Execution & Installation",
    body: "Civil, MEP and fabrication works executed on site by our own supervised, safety-focused crews.",
    icon: "execution" as const,
  },
  {
    number: "04",
    title: "Testing & Handover",
    body: "Pressure testing, inspection and commissioning, then handover with maintenance support.",
    icon: "handover" as const,
  },
];

/**
 * Sectors served, taken from the applications line in brief section 4.4.
 * These are capability statements, not client case studies — the brief flags
 * that no project photographs or references have been supplied yet.
 */
export const sectors = [
  {
    number: "01",
    label: "Civil",
    name: "Factories & Manufacturing Units",
    body: "Foundations, equipment bases, industrial flooring and site development works.",
    image: "/images/sector-civil.jpg",
    alt: "Reinforced concrete formwork and structural civil works on an industrial site.",
  },
  {
    number: "02",
    label: "PEB",
    name: "Pre-Engineered Buildings",
    body: "Column, rafter and purlin fabrication with structural erection and cladding.",
    image: "/images/sector-peb.jpg",
    alt: "Structural steel frame being erected against an open sky.",
  },
  {
    number: "03",
    label: "Warehousing",
    name: "Warehouses & Storage",
    body: "Shed civil works, flooring, high-bay lighting and complete MEP fit-out.",
    image: "/images/sector-warehouse.jpg",
    alt: "Interior of a completed steel-framed warehouse with high-bay lighting.",
  },
  {
    number: "04",
    label: "Workshops",
    name: "Industrial Sheds & Workshops",
    body: "Structural steel works, roofing, ventilation ducting and utility piping.",
    image: "/images/sector-shed.jpg",
    alt: "Interior of a large industrial shed with an arched steel roof structure.",
  },
  {
    number: "05",
    label: "Infrastructure",
    name: "Site & Utility Development",
    body: "Roads, paving, drainage, underground chambers and utility connections.",
    image: "/images/sector-sitework.jpg",
    alt: "Cranes over an industrial site during infrastructure development works.",
  },
];

export const faqs = [
  {
    q: "What services does Merrimo Technofab provide?",
    a: "We deliver integrated industrial engineering and project execution: Civil, Mechanical, Electrical, Plumbing, HVAC ducting, MS fabrication, PEB buildings, installation and erection, and interior works — for industrial and commercial projects.",
  },
  {
    q: "Do you handle civil works as well as MEP?",
    a: "Yes. Civil engineering and construction is a core strength, covering RCC and equipment foundations, industrial flooring and PCC, structural foundation works, boundary walls, drainage and storm-water works, underground utility chambers, roads and paving, civil works for industrial sheds, and repair and renovation works. Because we also deliver the mechanical, electrical and plumbing scope, the civil and services works are planned and sequenced together instead of being split across separate contractors.",
  },
  {
    q: "What types of projects do you take on?",
    a: "Industrial sheds, factories, warehouses, workshops, manufacturing units, storage buildings, structural steel projects and commercial facilities.",
  },
  {
    q: "Do you fabricate in a workshop or on site?",
    a: "Both. Structural steel, platforms, staircases, handrails, frames and equipment supports are shop-fabricated to drawings, then erected, aligned, levelled and bolted on site.",
  },
  {
    q: "Which piping systems do you work with?",
    a: "CPVC, UPVC, HDPE, GI and other approved piping systems, for cold and hot water supply, process and utility water lines, soil and waste, and rainwater down-take piping.",
  },
  {
    q: "Do you carry out testing and commissioning?",
    a: "Every project includes hydro and pressure testing, leakage inspection, pipeline flushing, drainage-flow testing, and a final inspection before commissioning.",
  },
  {
    q: "Do you handle rainwater harvesting?",
    a: "Yes — roof rainwater collection, down-take piping, storm-water drainage, catch pits and gully chambers, recharge pits and wells, harvesting systems, collection tank connections and filtration arrangements.",
  },
  {
    q: "Is support available after handover?",
    a: "Yes. We provide maintenance and troubleshooting support after handover, alongside single-point project coordination throughout execution.",
  },
];

export const closingStatement = [
  "Have a drawing set, tender or site requirement?",
  "Talk to us early — civil, MEP and fabrication",
  "planned together saves rework on site.",
  "One company. Multiple engineering solutions.",
];
