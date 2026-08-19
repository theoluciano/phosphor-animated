"use client";

/**
 * X — animated Phosphor icon.
 *
 * Struck out — two strokes cross in turn, and the pair lands with a snap.
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
    ["line", { x1: "200", y1: "56", x2: "56", y2: "200" }],
    ["line", { x1: "200", y1: "200", x2: "56", y2: "56" }],
  ],
  backdrop: {
    duotone: [
      ["rect", { x: "40", y: "40", width: "176", height: "176", rx: "16", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.52,
  parts: {
    0: {
      pathLength: [0, 1],
      opacity: [0, 1],
      duration: 0.34,
      ease: [0.65, 0, 0.35, 1]
    },
    1: {
      pathLength: [0, 1],
      opacity: [0, 1],
      duration: 0.34,
      ease: [0.65, 0, 0.35, 1],
      delay: 0.18
    }
  },
  whole: {
    scale: [1, 1, 1.05, 1],
    origin: [128, 128],
    duration: 0.79,
    ease: [
      "linear",
      [0.23, 1, 0.32, 1],
      [0.23, 1, 0.32, 1]
    ],
    times: [0, 0.72, 0.86, 1]
  }
};

export const X = createAnimatedIcon(
  "X",
  GEOMETRY,
  STROKE,
);

export default X;
