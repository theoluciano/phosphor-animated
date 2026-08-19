"use client";

/**
 * Code — animated Phosphor icon.
 *
 * Recompiles — the slash slips off down-left and a fresh one drops in from above.
 *
 * Geometry from Phosphor Icons (MIT, (c) 2023 Phosphor Icons). This file is yours:
 * the keyframes below are ordinary data, so retune or replace them freely.
 */

import {
  createAnimatedIcon,
  type Choreography,
  type IconGeometry,
} from "./animated-icon";

const GEOMETRY: IconGeometry = {
  regular: [
    ["polyline", { points: "64 88 16 128 64 168" }],
    ["polyline", { points: "192 88 240 128 192 168" }],
    ["line", { x1: "160", y1: "40", x2: "96", y2: "216" }],
  ],
  backdrop: {
    duotone: [
      ["polygon", { points: "192 168 240 128 192 88 64 88 16 128 64 168 192 168", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.7,
  parts: {
    2: {
      origin: [128, 128],
      duration: 0.5,
      ease: ["easeIn"],
      pathLength: [0, 1]
    }
  }
};

export const Code = createAnimatedIcon(
  "Code",
  GEOMETRY,
  STROKE,
);

export default Code;
