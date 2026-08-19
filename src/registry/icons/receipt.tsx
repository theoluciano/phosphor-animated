"use client";

/**
 * Receipt — animated Phosphor icon.
 *
 * Itemises — the lines ink themselves in, top to bottom.
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
    ["line", { x1: "80", y1: "104", x2: "176", y2: "104" }],
    ["line", { x1: "80", y1: "136", x2: "176", y2: "136" }],
    ["path", { d: "M32,208V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V208l-32-16-32,16-32-16L96,208,64,192Z" }],
  ],
  bold: [
    ["line", { x1: "80", y1: "100", x2: "176", y2: "100" }],
    ["line", { x1: "80", y1: "140", x2: "176", y2: "140" }],
    ["path", { d: "M32,208V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V208l-32-16-32,16-32-16L96,208,64,192Z" }],
  ],
  backdrop: {
    duotone: [
      ["path", { d: "M32,208V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V208l-32-16-32,16-32-16L96,208,64,192Z", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.65,
  parts: {
    0: {
      pathLength: [0, 0.25, 1],
      opacity: [0, 1, 1],
      times: [0, 0.15, 1],
      duration: 0.73,
      ease: [
        [0.22, 1, 0.36, 1],
        [0.22, 1, 0.36, 1]
      ],
      delay: 0
    },
    1: {
      pathLength: [0, 0.25, 1],
      opacity: [0, 1, 1],
      times: [0, 0.15, 1],
      duration: 0.73,
      ease: [
        [0.22, 1, 0.36, 1],
        [0.22, 1, 0.36, 1]
      ],
      delay: 0.18
    }
  }
};

export const Receipt = createAnimatedIcon(
  "Receipt",
  GEOMETRY,
  STROKE,
);

export default Receipt;
