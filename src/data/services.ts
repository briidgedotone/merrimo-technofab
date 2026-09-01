/**
 * Service vertical content, transcribed from the client brief
 * "Merrimo Technofab — Website Content & Structure Brief" (sections 3 and 4).
 *
 * `needsContent: true` marks a vertical the brief supplied only a one-line
 * description for. Those pages render an honest "detail to follow" note rather
 * than padded filler — see brief section 7, open items.
 */

export type ServiceGroup = { title: string; items: string[] };

export type Service = {
  slug: string;
  title: string;
  navTitle: string;
  eyebrow: string;
  summary: string;
  tagline?: string;
  groups: ServiceGroup[];
  applications?: string;
  image: string;
  alt: string;
  needsContent?: boolean;
  children?: string[];
};

export const services: Service[] = [
  {
    slug: "civil-engineering-construction",
    title: "Civil Engineering & Construction",
    navTitle: "Civil Engineering & Construction",
    eyebrow: "Priority vertical",
    summary:
      "Merrimo Technofab Private Limited undertakes industrial civil construction and infrastructure works for factories, warehouses, manufacturing units and commercial facilities — with a focus on quality construction, proper execution, safety and timely completion of industrial civil works as per project requirements.",
    tagline:
      "Integrated Solutions for Industrial Infrastructure — Built on a Strong Civil Foundation.",
    groups: [
      {
        title: "What's included",
        items: [
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
      },
    ],
    image: "/images/svc-civil.webp",
    alt: "Tower cranes over an industrial construction site at dusk.",
  },

  {
    slug: "industrial-mep",
    title: "Industrial MEP Solutions",
    navTitle: "Industrial MEP Solutions",
    eyebrow: "Overview",
    summary:
      "Complete Mechanical, Electrical & Plumbing (MEP) solutions for industrial facilities, factories, warehouses and commercial buildings — coordinated as one scope so services are planned, routed and commissioned together rather than trade by trade.",
    groups: [],
    children: ["mechanical", "electrical", "plumbing-water", "hvac-ducting"],
    image: "/images/svc-mep.webp",
    alt: "Industrial plant with pipe bridges, ducting and process equipment.",
  },

  {
    slug: "mechanical",
    title: "Mechanical Solutions",
    navTitle: "Mechanical Solutions",
    eyebrow: "MEP",
    summary:
      "Industrial mechanical installation, equipment support, piping-related works, ducting and mechanical system installation.",
    groups: [],
    needsContent: true,
    image: "/images/svc-mechanical.webp",
    alt: "Large-bore mechanical pipework with couplings, valves and gauges.",
  },

  {
    slug: "electrical",
    title: "Industrial Electrical Solutions",
    navTitle: "Electrical Solutions",
    eyebrow: "MEP",
    summary:
      "Comprehensive industrial electrical solutions for manufacturing units and industrial infrastructure projects, covering cabling, lighting and cable management.",
    tagline: "Safe Power. Reliable Performance. Industrial Excellence.",
    groups: [
      {
        title: "Industrial Cabling & Wiring",
        items: [
          "LT power cable installation",
          "Control cable installation",
          "Internal & external electrical wiring",
          "Cable laying & dressing",
          "Cable termination & jointing",
          "Cable tray & cable trench installation",
          "Industrial equipment cabling",
        ],
      },
      {
        title: "Industrial & Commercial Lighting",
        items: [
          "Indoor and outdoor lighting",
          "Industrial shed & high-bay lighting",
          "Flood lighting, street & area lighting",
          "Emergency lighting",
          "Energy-efficient LED lighting solutions",
        ],
      },
      {
        title: "Cable Tray & Cable Management",
        items: [
          "GI cable trays, perforated cable trays, ladder-type cable trays",
          "Cable trunking and cable supports",
          "Cable route management and industrial cable dressing",
        ],
      },
    ],
    image: "/images/svc-electrical.webp",
    alt: "High-voltage substation with gantries and transmission lines.",
  },

  {
    slug: "plumbing-water",
    title: "Plumbing & Water Solutions",
    navTitle: "Plumbing & Water Solutions",
    eyebrow: "MEP",
    summary:
      "Merrimo Technofab provides reliable and professional plumbing solutions for industrial, commercial and infrastructure projects — from material selection and pipe installation to testing, commissioning and maintenance.",
    tagline: "Reliable Plumbing. Quality Work. Long-Term Performance.",
    groups: [
      {
        title: "Water Supply Piping",
        items: [
          "Installation of cold and hot water pipelines",
          "Internal and external water supply piping",
          "CPVC, UPVC, HDPE, GI and other approved piping systems",
          "Pipe fittings, valves and accessories",
          "Water storage tank connections",
          "Pump and water-supply connections",
        ],
      },
      {
        title: "Sanitary & Drainage Works",
        items: [
          "Soil and waste pipe installation",
          "Sanitary drainage systems",
          "Floor drain and waste-water connections",
          "Inspection chambers and drainage connections",
          "Rainwater drainage piping",
          "Proper slope and drainage arrangements",
        ],
      },
      {
        title: "Industrial Plumbing",
        items: [
          "Industrial utility piping",
          "Process and utility water lines",
          "Equipment water connections",
          "Pump room piping",
          "Tank and pipeline interconnections",
          "Industrial drainage systems",
        ],
      },
      {
        title: "Toilet & Washroom Plumbing",
        items: [
          "Complete plumbing for toilets and washrooms",
          "Wash basin, WC and urinal connections",
          "Shower and floor-trap installation",
          "Hot and cold water connections",
          "Waste and soil piping, testing and commissioning",
        ],
      },
      {
        title: "Testing & Commissioning",
        items: [
          "Hydro / pressure testing",
          "Leakage inspection",
          "Pipeline flushing",
          "Drainage-flow testing",
          "Final inspection and commissioning",
        ],
      },
    ],
    image: "/images/svc-plumbing.webp",
    alt: "An engineer inspecting large-diameter water pipework and valves in a plant room.",
  },

  {
    slug: "rainwater-industrial-water",
    title: "Rainwater & Industrial Water Solutions",
    navTitle: "Rainwater & Industrial Water",
    eyebrow: "Water",
    summary:
      "Comprehensive rainwater harvesting, rainwater drainage and industrial water management solutions for factories, warehouses, industrial buildings and commercial facilities — covering efficient collection, transportation, management and reuse of rainwater alongside reliable industrial water infrastructure.",
    tagline: "Smart Water Management for Sustainable Industrial Infrastructure.",
    groups: [
      {
        title: "Rainwater Management",
        items: [
          "Roof rainwater collection systems",
          "Rainwater down-take piping",
          "Storm water drainage systems",
          "Underground rainwater piping",
          "Catch pits & gully chambers",
          "Recharge pit & recharge well systems",
          "Rainwater harvesting systems",
          "Collection tank connections",
          "Rainwater filtration arrangements",
          "Site storm-water drainage",
        ],
      },
      {
        title: "Industrial Water Solutions",
        items: [
          "Industrial water supply piping",
          "Process & utility water pipelines",
          "Raw water distribution",
          "Pump room piping",
          "Water storage tank connections",
          "Industrial water transfer systems",
          "Equipment water connections",
          "HDPE / UPVC / GI / CPVC piping solutions",
          "Water treatment plant piping support",
          "Pipeline testing & commissioning",
        ],
      },
    ],
    image: "/images/svc-rainwater.webp",
    alt: "Aerial view of a water treatment and settlement pond installation.",
  },

  {
    slug: "hvac-ducting",
    title: "HVAC Ducting",
    navTitle: "HVAC Ducting",
    eyebrow: "MEP",
    summary:
      "HVAC duct fabrication and installation, ventilation, exhaust ducting, duct supports and air distribution systems.",
    groups: [],
    needsContent: true,
    image: "/images/svc-hvac.webp",
    alt: "Rooftop air-handling units and exhaust ducting.",
  },

  {
    slug: "ms-fabrication",
    title: "MS Fabrication",
    navTitle: "MS Fabrication",
    eyebrow: "Fabrication",
    summary:
      "Merrimo Technofab specialises in MS fabrication for industrial sheds, warehouses, factories, structural steel works and other industrial infrastructure — combining shop fabrication with safe, accurate site erection.",
    tagline: "Strong Fabrication. Accurate Installation. Reliable Industrial Structures.",
    groups: [
      {
        title: "MS Fabrication",
        items: [
          "Industrial structural steel fabrication",
          "MS beam, column & support fabrication",
          "Platforms & staircase fabrication",
          "Handrails & safety railings",
          "Industrial frames & structures, equipment supports",
          "Pipe supports & utility structures",
          "Customised fabrication as per drawings; welding & assembly works",
        ],
      },
    ],
    applications:
      "Industrial sheds, factories, warehouses, workshops, manufacturing units, storage buildings, structural steel projects.",
    image: "/images/svc-fabrication.webp",
    alt: "Steel-framed industrial hall with overhead crane rails.",
  },

  {
    slug: "peb-building",
    title: "PEB Building",
    navTitle: "PEB Building",
    eyebrow: "Fabrication",
    summary:
      "Pre-Engineered Building fabrication and installation for industrial sheds, warehouses and factories — from structural component fabrication through erection, alignment, roofing and cladding.",
    tagline: "Strong Fabrication. Accurate Installation. Reliable Industrial Structures.",
    groups: [
      {
        title: "PEB Fabrication & Installation",
        items: [
          "PEB structural component fabrication",
          "Column & rafter fabrication; purlins & girts",
          "Roof & wall structural components",
          "Steel structure assembly, PEB erection & installation",
          "Roofing & cladding installation",
          "Structural alignment & levelling, bolting & connection works",
          "Site installation & final inspection",
        ],
      },
    ],
    applications:
      "Industrial sheds, factories, warehouses, workshops, manufacturing units, storage buildings, structural steel projects.",
    image: "/images/svc-fabrication.webp",
    alt: "Pre-engineered steel building interior with portal frames and crane rails.",
  },

  {
    slug: "installation-erection",
    title: "Industrial Installation & Erection",
    navTitle: "Installation & Erection",
    eyebrow: "Execution",
    summary:
      "Complete site installation, erection, fabrication, equipment support and project execution services.",
    groups: [],
    needsContent: true,
    image: "/images/svc-installation.webp",
    alt: "Tower cranes erecting a multi-storey industrial structure.",
  },

  {
    slug: "interior",
    title: "Interior Solutions",
    navTitle: "Interior Solutions",
    eyebrow: "Fit-out",
    summary:
      "Industrial and commercial interior works, including partitioning, ceilings, flooring, finishing and other associated interior requirements.",
    groups: [],
    needsContent: true,
    image: "/images/svc-interior.webp",
    alt: "Fitted-out factory floor with machinery bays and marked circulation aisles.",
  },
];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);
