"use client";

/**
 * Flag — animated Phosphor icon.
 *
 * Gusts — the cloth lifts from the pole, billows, and settles to rest.
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
    ["line", { x1: "48", y1: "224", x2: "48", y2: "56" }],
    ["path", { d: "M48,176c64-55.43,112,55.43,176,0V56C160,111.43,112,.57,48,56" }],
  ],
  backdrop: {
    duotone: [
      ["path", { d: "M48,176c64-55.43,112,55.43,176,0V56C160,111.43,112,.57,48,56Z", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 1.12,
  parts: {
    1: {
      rotate: [0, -3, 1.6, -0.8, 0],
      scaleX: [1, 1.05, 0.98, 1.01, 1],
      origin: [48, 116],
      ease: ["easeIn", "linear", "linear", "easeOut"],
      times: [0, 0.22, 0.5, 0.75, 1]
    }
  },
  whole: { rotate: [0, -8, 6, -6, 4, 0], ease: ["easeIn", "linear", "linear", "linear", "easeOut"] }
};

export const Flag = createAnimatedIcon(
  "Flag",
  GEOMETRY,
  STROKE,
);

export default Flag;
