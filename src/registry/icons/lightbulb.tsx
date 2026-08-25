"use client";

/**
 * Lightbulb — animated Phosphor icon.
 *
 * An idea — the glass flexes as the shine redraws.
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
    ["line", { x1: "88", y1: "232", x2: "168", y2: "232" }],
    ["path", { d: "M78.7,167A79.87,79.87,0,0,1,48,104.45C47.76,61.09,82.72,25,126.07,24a80,80,0,0,1,51.34,142.9A24.3,24.3,0,0,0,168,186v6a8,8,0,0,1-8,8H96a8,8,0,0,1-8-8v-6A24.11,24.11,0,0,0,78.7,167Z" }],
    ["path", { d: "M136,56c20,3.37,36.61,20,40,40" }],
  ],
  bold: [
    ["line", { x1: "88", y1: "232", x2: "168", y2: "232" }],
    ["path", { d: "M78.7,167A79.87,79.87,0,0,1,48,104.45C47.76,61.09,82.72,25,126.07,24a80,80,0,0,1,51.34,142.9A24.3,24.3,0,0,0,168,186v2a8,8,0,0,1-8,8H96a8,8,0,0,1-8-8v-2A24.11,24.11,0,0,0,78.7,167Z" }],
    ["path", { d: "M140,70a36.39,36.39,0,0,1,24,30" }],
  ],
  backdrop: {
    duotone: [
      ["path", { d: "M78.7,167A79.87,79.87,0,0,1,48,104.45C47.76,61.09,82.72,25,126.07,24a80,80,0,0,1,51.34,142.9A24.3,24.3,0,0,0,168,186v6a8,8,0,0,1-8,8H96a8,8,0,0,1-8-8v-6A24.11,24.11,0,0,0,78.7,167Z", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.65,
  parts: {
    1: { origin: [128, 194], times: [0, 0.24, 0.52, 0.78, 1], ease: [
        "easeOut",
        [0.34, 1.56, 0.64, 1],
        "easeInOut",
        [0.22, 1, 0.36, 1]
      ] },
    2: {
      pathLength: [1, 0, 1, 1],
      ease: ["easeIn", "linear", "easeOut"],
      duration: 0.5,
      delay: 0.05,
      opacity: [1, 0, 1, 1]
    }
  },
  whole: { rotate: [0, -4, 4, -4, 4, -2, 2, 0], ease: ["easeIn", "linear", "linear", "linear", "linear", "linear", "easeOut"] }
};

export const Lightbulb = createAnimatedIcon(
  "Lightbulb",
  GEOMETRY,
  STROKE,
);

export default Lightbulb;
