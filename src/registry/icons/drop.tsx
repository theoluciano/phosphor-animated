"use client";

/**
 * Drop — animated Phosphor icon.
 *
 * Draws itself — the outline traces on, then the sheen follows.
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
    ["path", { d: "M208,144c0-72-80-128-80-128S48,72,48,144a80,80,0,0,0,160,0Z" }],
    ["path", { d: "M136,192c20-3.37,36.61-20,40-40" }],
  ],
  bold: [
    ["path", { d: "M208,144c0-72-80-128-80-128S48,72,48,144a80,80,0,0,0,160,0Z" }],
    ["path", { d: "M166.17,156A40.11,40.11,0,0,1,140,182.17" }],
  ],
  backdrop: {
    duotone: [
      ["path", { d: "M208,144c0-72-80-128-80-128S48,72,48,144a80,80,0,0,0,160,0Z", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.7,
  parts: {
    0: {
      pathLength: [0, 1, 1, 1, 1, 1],
      duration: 0.55,
      ease: ["easeIn", "linear", "linear", "linear", "easeOut"],
      rotate: [0, -8, 4, -2, 2, 0]
    },
    1: {
      pathLength: [0, 1],
      opacity: [0, 1],
      duration: 0.25,
      delay: 0.42,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export const Drop = createAnimatedIcon(
  "Drop",
  GEOMETRY,
  STROKE,
);

export default Drop;
