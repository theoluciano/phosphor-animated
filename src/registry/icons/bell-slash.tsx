"use client";

/**
 * BellSlash — animated Phosphor icon.
 *
 * Silenced — a token shake dies as the slash strikes through.
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
    ["line", { x1: "48", y1: "40", x2: "208", y2: "216" }],
    ["path", { d: "M96,192a32,32,0,0,0,64,0" }],
    ["path", { d: "M92.48,41.36A72,72,0,0,1,200,104c0,29.1,5.48,53.56,11.07,67.8" }],
    ["path", { d: "M186.18,192H48a8,8,0,0,1-6.88-12C47.71,168.6,56,139.81,56,104A71.65,71.65,0,0,1,68.85,62.94" }],
  ],
  bold: [
    ["path", { d: "M96,184v8a32,32,0,0,0,64,0v-8" }],
    ["line", { x1: "48", y1: "40", x2: "208", y2: "216" }],
    ["path", { d: "M99.94,37.67A72,72,0,0,1,200,104c0,23.24,3.49,40.15,7.75,52.26" }],
    ["path", { d: "M178.91,184H48a8,8,0,0,1-6.88-12C47.71,160.6,56,139.81,56,104A71.65,71.65,0,0,1,68.85,62.94" }],
  ],
  backdrop: {
    duotone: [
      ["path", { d: "M56,104a72,72,0,0,1,144,0c0,35.82,8.3,64.6,14.9,76A8,8,0,0,1,208,192H48a8,8,0,0,1-6.88-12C47.71,168.6,56,139.81,56,104Z", opacity: "0.2" }],
    ],
  },
  maps: {
    bold: [1, 0, 2, 3],
  },
};

const STROKE: Choreography = {
  duration: 0.6,
  whole: {
    origin: [128, 48],
    duration: 0.5,
    ease: [
      "easeOut",
      "easeInOut",
      [0.22, 1, 0.36, 1]
    ],
    times: [0, 0.3, 0.65, 1]
  },
  parts: {
    0: {
      pathLength: [0, 1],
      duration: 0.35,
      ease: "easeOut",
      delay: 0.1
    }
  }
};

export const BellSlash = createAnimatedIcon(
  "BellSlash",
  GEOMETRY,
  STROKE,
);

export default BellSlash;
