"use client";

/**
 * GithubLogo — a Phosphor icon, static, and deliberately outside the registry.
 *
 * Outside the registry for the reason `scripts/curated.ts` gives: brand logos are
 * excluded because the set is icons that earn their motion, and shipping someone
 * else's trademark as a component people install is a different thing from using
 * it once to point at a repository. Same arrangement as youtube-logo.tsx — it has
 * exactly one caller, so it lives next to it.
 *
 * Static for the other half of that reason: "a spin or a pulse on it is noise".
 * This one sits inside a control, unlike the hero's source mark, so the site's own
 * rule would have it animate on press — but the rule exists because motion that
 * says what an icon means is worth a visitor's attention, and a logo means only
 * "GitHub". There is nothing for it to depict. The button's hover and focus states
 * carry the affordance instead, which is the job motion would have been doing here.
 *
 * So the choreography is empty rather than merely untriggered: a part with no
 * keyframes renders as a plain element, so nothing here mounts any motion
 * machinery at all.
 *
 * Geometry was built by the real pipeline rather than transcribed — added to the
 * curated list, generated, moved here, and the list put back — so the drawing and
 * its weight variants are the same machine-derived data as every other icon.
 *
 * Geometry from Phosphor Icons (MIT, (c) 2023 Phosphor Icons).
 */

import {
  createAnimatedIcon,
  type Choreography,
  type IconGeometry,
} from "@/registry/icons/animated-icon";

const GEOMETRY: IconGeometry = {
  regular: [
    ["path", { d: "M119.83,56A52,52,0,0,0,76,32a51.92,51.92,0,0,0-3.49,44.7A49.28,49.28,0,0,0,64,104v8a48,48,0,0,0,48,48h48a48,48,0,0,0,48-48v-8a49.28,49.28,0,0,0-8.51-27.3A51.92,51.92,0,0,0,196,32a52,52,0,0,0-43.83,24Z" }],
    ["path", { d: "M104,232V192a32,32,0,0,1,32-32h0a32,32,0,0,1,32,32v40" }],
    ["path", { d: "M104,208H72a32,32,0,0,1-32-32A32,32,0,0,0,8,144" }],
  ],
  bold: [
    ["path", { d: "M119.83,56A52,52,0,0,0,76,32a51.92,51.92,0,0,0-3.49,44.7A49.28,49.28,0,0,0,64,104v8a48,48,0,0,0,48,48h48a48,48,0,0,0,48-48v-8a49.28,49.28,0,0,0-8.51-27.3A51.92,51.92,0,0,0,196,32a52,52,0,0,0-43.83,24Z" }],
    ["path", { d: "M104,232V192a32,32,0,0,1,32-32h0a32,32,0,0,1,32,32v40" }],
    ["path", { d: "M104,208H76a32,32,0,0,1-32-32,32,32,0,0,0-32-32" }],
  ],
  backdrop: {
    duotone: [
      ["path", { d: "M104,232V192a32,32,0,0,1,32-32h0a32,32,0,0,1,32,32v40Z", opacity: "0.2" }],
      ["path", { d: "M119.83,56A52,52,0,0,0,76,32a51.92,51.92,0,0,0-3.49,44.7A49.28,49.28,0,0,0,64,104v8a48,48,0,0,0,48,48h48a48,48,0,0,0,48-48v-8a49.28,49.28,0,0,0-8.51-27.3A51.92,51.92,0,0,0,196,32a52,52,0,0,0-43.83,24Z", opacity: "0.2" }],
    ],
  },
};

/** Empty on purpose — see above. */
const STROKE: Choreography = {};

export const GithubLogo = createAnimatedIcon(
  "GithubLogo",
  GEOMETRY,
  STROKE,
);

export default GithubLogo;
