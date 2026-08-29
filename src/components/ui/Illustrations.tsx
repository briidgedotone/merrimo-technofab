/**
 * Isometric line illustrations for the three lead service pillars.
 * Stroke-only, single ink colour, ~2px weight.
 */
const ink = "#1B1B22";

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 371 328"
      fill="none"
      aria-hidden="true"
      className="h-full w-full"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}

/** 01 — RCC foundation, equipment base, flooring bay and boundary wall. */
export function CivilIllustration() {
  return (
    <Frame>
      <g stroke={ink} strokeWidth="2" fill="none">
        {/* excavated pit with rebar cage */}
        <path d="M36 176 132 122l86 50-96 54-86-50Z" />
        <path d="M36 176v30l86 50v-30M122 226l96-54v30l-96 54" />
        <path d="M58 172 132 130l64 37-74 42-64-37Z" strokeWidth="1.4" />
        {/* rebar grid inside the pit */}
        <g strokeWidth="1.3">
          <path d="M72 168 136 205M88 159 152 196M104 150 168 187M120 141 184 178" />
          <path d="M78 187 142 150M94 196 158 159M110 205 174 168" />
        </g>
        {/* starter bars */}
        <g strokeWidth="1.5">
          <path d="M84 163v-16M100 154v-16M116 145v-16M132 172v-16M148 163v-16M164 154v-16" />
        </g>

        {/* equipment / machine foundation block */}
        <path d="M206 148 258 118l44 26-52 30-44-26Z" />
        <path d="M206 148v26l44 26v-26M250 174l52-30v26l-52 30" />
        <path d="M222 141 258 120l26 15-36 21-26-15Z" strokeWidth="1.4" />
        {/* holding-down bolts */}
        <g strokeWidth="1.5">
          <path d="M234 132v-14M246 139v-14M258 125v-14M270 132v-14" />
          <path d="M231 118h6M243 125h6M255 111h6M267 118h6" />
        </g>

        {/* boundary wall running back-left */}
        <path d="M26 132 96 92" strokeWidth="1.6" />
        <path d="M26 132v-26l70-40v26M96 92V66" strokeWidth="1.6" />
        <g strokeWidth="1.3">
          <path d="M40 124v-26M54 116v-26M68 108v-26M82 100v-26" />
        </g>

        {/* industrial flooring bay, screeded in panels */}
        <path d="M96 254 214 186l112 65-118 68-112-65Z" />
        <g strokeWidth="1.4">
          <path d="M155 220 267 285M214 186l-59 34M267 251l-59 34" />
        </g>
        <g strokeWidth="1.2" strokeDasharray="6 6">
          <path d="M126 237 238 302M185 203l112 65M96 271l112 65M155 254 267 319" />
        </g>

        {/* levelling screed board + kerb */}
        <path d="M296 214l30 17M296 214v10l30 17v-10" strokeWidth="1.6" />
      </g>
    </Frame>
  );
}

/** 02 — pipe rack carrying utility piping, cable tray and an HVAC duct. */
export function MepIllustration() {
  return (
    <Frame>
      <g stroke={ink} strokeWidth="2" fill="none">
        {/* two rack frames */}
        {[
          { x: 74, y: 214 },
          { x: 232, y: 124 },
        ].map((p, i) => (
          <g key={i}>
            <path d={`M${p.x} ${p.y}v-96M${p.x + 62} ${p.y - 36}v-96`} />
            <path d={`M${p.x} ${p.y - 96}l62-36M${p.x} ${p.y - 62}l62-36`} />
            <path d={`M${p.x - 10} ${p.y + 4}h20M${p.x + 52} ${p.y - 32}h20`} strokeWidth="1.6" />
          </g>
        ))}
        {/* rack longitudinal beams */}
        <path d="M74 118 232 28M136 82l158-90" strokeWidth="1.6" />
        <path d="M74 152 232 62M136 116l158-90" strokeWidth="1.6" />

        {/* large utility pipe on the top tier */}
        <path d="M88 112 246 22" strokeWidth="2.4" />
        <path d="M88 126 246 36" strokeWidth="2.4" />
        <ellipse cx="88" cy="119" rx="5" ry="8" />
        {/* flange */}
        <path d="M150 77l6 10M156 72l6 10" strokeWidth="1.5" />

        {/* second pipe with a valve */}
        <path d="M92 146 250 56" strokeWidth="1.8" />
        <path d="M92 156 250 66" strokeWidth="1.8" />
        <path d="M170 100v-16m-7 16 14-8" strokeWidth="1.6" />
        <path d="M163 78h14" strokeWidth="1.8" />

        {/* cable tray — ladder rungs on the lower tier */}
        <path d="M96 190 254 100M96 204 254 114" strokeWidth="1.6" />
        <g strokeWidth="1.2">
          <path d="M112 195 118 181M132 184 138 170M152 173 158 159M172 162 178 148M192 151 198 137M212 140 218 126" />
        </g>

        {/* rectangular HVAC duct slung below */}
        <path d="M104 250 216 186l34 20-112 64-34-20Z" />
        <path d="M104 250v22l34 20v-22M138 270l112-64v22l-112 64" />
        <path d="M160 224l34 20M180 213l34 20" strokeWidth="1.3" />
        {/* hangers */}
        <path d="M120 240v-30M234 176v-30" strokeWidth="1.5" />
      </g>
    </Frame>
  );
}

/** 03 — PEB portal frame with columns, rafters, purlins and cladding. */
export function FabricationIllustration() {
  return (
    <Frame>
      <g stroke={ink} strokeWidth="2" fill="none">
        {/* front portal frame */}
        <path d="M56 262V150l84-46 84 46v112" />
        <path d="M56 150 140 104l84 46" strokeWidth="2.2" />
        <path d="M56 162 140 116l84 46" strokeWidth="1.4" />
        {/* haunches */}
        <path d="M56 150l26 14M224 150l-26 14" strokeWidth="1.5" />
        {/* base plates */}
        <path d="M44 262h24M212 262h24" strokeWidth="2.2" />

        {/* back portal frame, offset up-right */}
        <path d="M164 216V126l72-40 72 40v90" strokeWidth="1.6" />
        <path d="M164 126 236 86l72 40" strokeWidth="1.8" />
        <path d="M296 216h24M152 216h24" strokeWidth="1.8" />

        {/* eaves + ridge tying the frames together */}
        <path d="M56 150 164 126M224 150l84-24M140 104l96-18" strokeWidth="1.6" />

        {/* purlins across the roof planes */}
        <g strokeWidth="1.2">
          <path d="M78 138 186 114M100 126 208 102M122 114 230 90" />
          <path d="M202 138 294 114M180 126 272 102M158 114 250 90" />
        </g>
        {/* girts on the side wall */}
        <g strokeWidth="1.2">
          <path d="M56 186 164 162M56 222 164 198" />
        </g>

        {/* partly-fixed roof cladding sheet */}
        <path d="M140 104 236 86l-30 20-96 18 30-20Z" strokeWidth="1.5" />
        <g strokeWidth="1.1">
          <path d="M134 110 230 92M126 116 222 98M118 122 214 104" />
        </g>

        {/* bolted connection detail, bottom-right */}
        <path d="M258 254h56v-26h-56v26Z" strokeWidth="1.6" />
        <g strokeWidth="1.4">
          <circle cx="272" cy="236" r="3" />
          <circle cx="300" cy="236" r="3" />
          <circle cx="272" cy="247" r="3" />
          <circle cx="300" cy="247" r="3" />
        </g>
        <path d="M286 228v26" strokeWidth="1.3" />
      </g>
    </Frame>
  );
}

export const illustrations = {
  civil: CivilIllustration,
  mep: MepIllustration,
  fabrication: FabricationIllustration,
};

/* ---------------------------------------------------------------------------
   Secondary pillars. Same isometric line language as the three lead cards,
   drawn a little simpler since they only appear on hover.
   ------------------------------------------------------------------------ */

/** Mechanical — pump skid with suction/discharge piping on a base frame. */
export function MechanicalIllustration() {
  return (
    <Frame>
      <g stroke={ink} strokeWidth="2" fill="none">
        {/* skid base */}
        <path d="M46 250 174 176l152 88-128 74-152-88Z" />
        <path d="M46 250v18l152 88v-18M198 338l128-74v18l-128 74" />
        {/* pump body */}
        <path d="M132 196 190 162l40 23-58 34-40-23Z" />
        <path d="M132 196v38l40 23v-38M172 219l58-34v38l-58 34" />
        {/* motor barrel */}
        <path d="M212 174 262 145l30 18v40l-50 29-30-18v-40Z" />
        <ellipse cx="252" cy="165" rx="20" ry="12" />
        <path d="M232 165v40M272 165v40" strokeWidth="1.4" />
        {/* suction + discharge */}
        <path d="M132 214 78 245M78 245v-34M64 211h28" strokeWidth="1.8" />
        <path d="M172 158v-40M158 118h28" strokeWidth="1.8" />
        <path d="M186 118 246 84" strokeWidth="1.8" />
        {/* valve wheel */}
        <ellipse cx="216" cy="101" rx="12" ry="7" strokeWidth="1.5" />
        <path d="M216 101v-14" strokeWidth="1.5" />
        {/* anchor bolts */}
        <g strokeWidth="1.4">
          <path d="M92 262v-12M132 285v-12M264 262v-12M224 285v-12" />
        </g>
      </g>
    </Frame>
  );
}

/** Electrical — distribution panel feeding a ladder-type cable tray. */
export function ElectricalIllustration() {
  return (
    <Frame>
      <g stroke={ink} strokeWidth="2" fill="none">
        {/* panel enclosure */}
        <path d="M60 250V126l70-40 70 40v124" />
        <path d="M60 126 130 86l70 40-70 40-70-40Z" />
        <path d="M130 166v124" strokeWidth="1.5" />
        {/* door split + louvres */}
        <path d="M76 232V140l54 31" strokeWidth="1.4" />
        <g strokeWidth="1.2">
          <path d="M84 160l38 22M84 176l38 22M84 192l38 22" />
        </g>
        {/* meters + indicator lamps */}
        <g strokeWidth="1.4">
          <circle cx="164" cy="152" r="7" />
          <circle cx="182" cy="163" r="4" />
          <path d="M150 190l38 22M150 206l38 22" />
        </g>
        {/* plinth */}
        <path d="M52 254l78 45 78-45" strokeWidth="1.6" />

        {/* cable tray leaving the panel */}
        <path d="M200 148 318 80M200 164 318 96" strokeWidth="1.6" />
        <g strokeWidth="1.2">
          <path d="M216 155 222 141M240 141 246 127M264 127 270 113M288 113 294 99" />
        </g>
        {/* tray support */}
        <path d="M300 88v52M288 140h24" strokeWidth="1.5" />
        {/* earthing spike */}
        <path d="M226 262v34M212 296h28M218 306h16" strokeWidth="1.6" />
      </g>
    </Frame>
  );
}

/** Plumbing & water — storage tank feeding a valved distribution manifold. */
export function PlumbingIllustration() {
  return (
    <Frame>
      <g stroke={ink} strokeWidth="2" fill="none">
        {/* tank */}
        <ellipse cx="112" cy="106" rx="56" ry="30" />
        <path d="M56 106v54c0 17 25 30 56 30s56-13 56-30v-54" />
        <path d="M80 90c14-8 44-8 58 0" strokeWidth="1.3" />
        {/* tank stand */}
        <path d="M72 186v54M152 186v54M60 240h24M140 240h24" strokeWidth="1.6" />
        <path d="M72 214l80-12" strokeWidth="1.3" />

        {/* outlet + manifold header */}
        <path d="M112 190v34M112 224h176" strokeWidth="2.2" />
        <path d="M112 236h176" strokeWidth="2.2" />
        {/* branch drops with valves */}
        {[168, 224, 280].map((x) => (
          <g key={x}>
            <path d={`M${x} 236v46`} strokeWidth="1.8" />
            <path d={`M${x - 11} 258h22`} strokeWidth="1.8" />
            <ellipse cx={x} cy="250" rx="9" ry="5" strokeWidth="1.4" />
            <path d={`M${x} 250v-9`} strokeWidth="1.4" />
            <path d={`M${x - 8} 282h16v10h-16Z`} strokeWidth="1.5" />
          </g>
        ))}
        {/* pressure gauge on the header */}
        <circle cx="140" cy="204" r="11" strokeWidth="1.5" />
        <path d="M140 215v9M140 204l6-6" strokeWidth="1.4" />
      </g>
    </Frame>
  );
}

/** Rainwater — roof gutter, down-take pipe, catch pit and recharge well. */
export function RainwaterIllustration() {
  return (
    <Frame>
      <g stroke={ink} strokeWidth="2" fill="none">
        {/* pitched roof */}
        <path d="M40 122 168 48l134 78" />
        <path d="M40 122v16l128 74 134-78v-16" strokeWidth="1.6" />
        <g strokeWidth="1.2">
          <path d="M76 101 208 178M112 80 244 157M148 59 280 136" />
        </g>
        {/* gutter along the eave */}
        <path d="M36 140 164 214M36 154 164 228" strokeWidth="1.6" />
        {/* down-take pipe */}
        <path d="M46 152v96M60 160v96" strokeWidth="1.8" />
        <path d="M46 200h14M46 224h14" strokeWidth="1.2" />
        {/* rain */}
        <g strokeWidth="1.4">
          <path d="M196 66v-18M222 80v-18M248 94v-18M274 108v-18" />
        </g>
        {/* catch pit */}
        <path d="M26 248 82 216l40 23-56 33-40-24Z" />
        <path d="M26 248v30l40 24v-30M66 272l56-33v30l-56 33" />
        <g strokeWidth="1.2">
          <path d="M44 244l38 22M58 236l38 22M72 228l38 22" />
        </g>
        {/* pipe run to the recharge well */}
        <path d="M122 262 196 304M122 274 196 316" strokeWidth="1.6" />
        {/* recharge well with filter media */}
        <path d="M196 288 262 250l50 29-66 38-50-29Z" />
        <path d="M196 288v22l50 29v-22M246 317l66-38v22l-66 38" />
        <g strokeWidth="1.2">
          <circle cx="238" cy="284" r="4" />
          <circle cx="256" cy="292" r="4" />
          <circle cx="274" cy="278" r="4" />
          <circle cx="222" cy="292" r="3" />
        </g>
      </g>
    </Frame>
  );
}

/** HVAC — rectangular duct run with an elbow, take-off and diffuser. */
export function HvacIllustration() {
  return (
    <Frame>
      <g stroke={ink} strokeWidth="2" fill="none">
        {/* main duct run */}
        <path d="M34 158 150 90l52 30-116 68-52-30Z" />
        <path d="M34 158v42l52 30v-42M86 188l116-68v42L86 230" />
        {/* flanged joints */}
        <g strokeWidth="1.4">
          <path d="M72 136v42M110 114v42" />
          <path d="M72 136l52 30M110 114l52 30" />
        </g>
        {/* elbow turning down-right */}
        <path d="M202 120l52 30v42l-52-30v-42Z" />
        <path d="M254 150l44-26v42l-44 26" />
        <path d="M202 120l44-26 52 30" strokeWidth="1.6" />
        <g strokeWidth="1.2">
          <path d="M214 133l44-25M226 146l44-25" />
        </g>
        {/* branch take-off + damper */}
        <path d="M150 176v46l38 22v-46" strokeWidth="1.6" />
        <path d="M150 176l38 22" strokeWidth="1.6" />
        <path d="M158 196l24 14" strokeWidth="1.3" />
        {/* diffuser grille */}
        <path d="M138 240 188 212l44 25-50 29-44-26Z" />
        <g strokeWidth="1.2">
          <path d="M154 246l44-25M166 253l44-25M178 260l44-25" />
        </g>
        {/* threaded rod hangers */}
        <path d="M62 132V96M120 100V64M270 118V82" strokeWidth="1.5" />
        <path d="M52 96h20M110 64h20M260 82h20" strokeWidth="1.5" />
      </g>
    </Frame>
  );
}

/** Installation & erection — crane hook lifting a steel beam into place. */
export function InstallationIllustration() {
  return (
    <Frame>
      <g stroke={ink} strokeWidth="2" fill="none">
        {/* mast */}
        <path d="M84 300V78M124 300V78" />
        <g strokeWidth="1.3">
          <path d="M84 108l40-30M124 108l-40-30M84 168l40-30M124 168l-40-30M84 228l40-30M124 228l-40-30M84 288l40-30M124 288l-40-30" />
          <path d="M84 108h40M84 168h40M84 228h40M84 288h40" />
        </g>
        <path d="M66 300h76" strokeWidth="2.2" />
        {/* jib */}
        <path d="M124 78 320 96M124 96 320 110" />
        <g strokeWidth="1.3">
          <path d="M156 81 168 98M188 84 200 101M220 87 232 104M252 90 264 107M284 93 296 110" />
        </g>
        {/* counter jib + pendant */}
        <path d="M84 78 30 86M84 92 30 96" strokeWidth="1.6" />
        <path d="M104 46 104 78M104 46 264 100M104 46 44 86" strokeWidth="1.5" />
        {/* hoist rope + hook block */}
        <path d="M256 104v56" strokeWidth="1.6" />
        <path d="M244 160h24v16h-24Z" strokeWidth="1.6" />
        <path d="M256 176v10c0 8-10 8-10 0" strokeWidth="1.6" />
        {/* slings + beam being landed */}
        <path d="M250 186 214 226M262 186 298 226" strokeWidth="1.4" />
        <path d="M198 226h116v14H198Z" />
        <path d="M198 240h116v10H198Z" strokeWidth="1.4" />
        <path d="M206 250v40M306 250v40" strokeWidth="1.5" />
        {/* landing column below */}
        <path d="M290 290h32v10h-32Z" strokeWidth="1.6" />
      </g>
    </Frame>
  );
}

/** Interiors — partition framing with a suspended ceiling grid. */
export function InteriorIllustration() {
  return (
    <Frame>
      <g stroke={ink} strokeWidth="2" fill="none">
        {/* floor plane */}
        <path d="M34 258 172 178l166 96-138 80-166-96Z" />
        {/* partition wall, studs exposed on the near half */}
        <path d="M60 244V150l112-65v94" />
        <path d="M60 150 172 85" strokeWidth="1.6" />
        <g strokeWidth="1.3">
          <path d="M82 232v-94M104 219v-94M126 206v-94M148 194v-94" />
          <path d="M60 198l112-64M60 174l112-64" />
        </g>
        {/* board being fixed to the far half */}
        <path d="M172 85 284 150v94l-112-65V85Z" strokeWidth="1.6" />
        <path d="M196 112v94M232 133v94" strokeWidth="1.2" />

        {/* suspended ceiling grid */}
        <path d="M96 92 208 27l106 61-112 65-106-61Z" strokeWidth="1.6" />
        <g strokeWidth="1.2">
          <path d="M132 71 238 132M168 50 274 111M132 113 244 48M168 134 280 69" />
        </g>
        {/* drop rods */}
        <g strokeWidth="1.4">
          <path d="M132 71V47M204 113V89M274 111V87" />
        </g>
        {/* skirting + floor finish joints */}
        <g strokeWidth="1.2">
          <path d="M96 282 234 202M138 306 276 226" />
        </g>
      </g>
    </Frame>
  );
}

export const pillarIllustrations = {
  mechanical: MechanicalIllustration,
  electrical: ElectricalIllustration,
  plumbing: PlumbingIllustration,
  rainwater: RainwaterIllustration,
  hvac: HvacIllustration,
  installation: InstallationIllustration,
  interior: InteriorIllustration,
};
