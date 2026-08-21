"use client";

/**
 * YoutubeLogo — a Phosphor icon, static, and deliberately outside the registry.
 *
 * Outside the registry because `scripts/curated.ts` excludes brand logos on
 * purpose: the set is meant to be icons that earn their motion, and shipping
 * someone else's trademark as a component people install is a different thing
 * from using it once as attribution. It is only ever the mark on the hero's
 * embed, so it lives here with the thing that uses it.
 *
 * Static because it is a credit, not a control. Everything that moves in the fan
 * moves to say something about itself; a source mark that animated on hover would
 * just be reading as clickable, which it isn't. So the choreography is empty
 * rather than merely untriggered — a part with no keyframes renders as a plain
 * element, so nothing here mounts any motion machinery at all.
 *
 * The geometry was still built by the real pipeline rather than transcribed by
 * hand — added to the curated list, generated, moved here, and the list put back —
 * so the drawing and its weight variants are the same machine-derived data as
 * every other icon, and it renders identically.
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
    ["polygon", { points: "160 128 112 96 112 160 160 128" }],
    ["path", { d: "M24,128c0,29.91,3.07,47.45,5.41,56.47A16,16,0,0,0,39,195.42C72.52,208.35,128,208,128,208s55.48.35,89-12.58a16,16,0,0,0,9.63-10.95c2.34-9,5.41-26.56,5.41-56.47s-3.07-47.45-5.41-56.47a16,16,0,0,0-9.63-11C183.48,47.65,128,48,128,48s-55.48-.35-89,12.58a16,16,0,0,0-9.63,11C27.07,80.54,24,98.09,24,128Z" }],
  ],
  bold: [
    ["polygon", { points: "164 128 108 92 108 164 164 128" }],
    ["path", { d: "M24,128c0,29.91,3.07,47.45,5.41,56.47A16,16,0,0,0,39,195.42C72.52,208.35,128,208,128,208s55.48.35,89-12.58a16,16,0,0,0,9.63-10.95c2.34-9,5.41-26.56,5.41-56.47s-3.07-47.45-5.41-56.47a16,16,0,0,0-9.63-11C183.48,47.65,128,48,128,48s-55.48-.35-89,12.58a16,16,0,0,0-9.63,11C27.07,80.54,24,98.09,24,128Z" }],
  ],
  backdrop: {
    duotone: [
      ["path", { d: "M226.59,71.53a16,16,0,0,0-9.63-11C183.48,47.65,128,48,128,48s-55.48-.35-89,12.58a16,16,0,0,0-9.63,11C27.07,80.54,24,98.09,24,128s3.07,47.46,5.41,56.47A16,16,0,0,0,39,195.42C72.52,208.35,128,208,128,208s55.48.35,89-12.58a16,16,0,0,0,9.63-10.95c2.34-9,5.41-26.56,5.41-56.47S228.93,80.54,226.59,71.53ZM112,160V96l48,32Z", opacity: "0.2" }],
    ],
  },
};

/** Empty on purpose — see above. */
const STROKE: Choreography = {};

export const YoutubeLogo = createAnimatedIcon(
  "YoutubeLogo",
  GEOMETRY,
  STROKE,
);

export default YoutubeLogo;
