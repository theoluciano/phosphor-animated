"use client";

/**
 * Copy — animated Phosphor icon.
 *
 * Duplicates — the sheets spring apart, then snap back into a stack.
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
    ["polyline", { points: "168 168 216 168 216 40 88 40 88 88" }],
    ["rect", { x: "40", y: "88", width: "128", height: "128" }],
  ],
  backdrop: {
    duotone: [
      ["polygon", { points: "88 40 88 88 168 88 168 168 216 168 216 40 88 40", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.96,
  parts: {
    0: {
      x: [0, 7, 0, 0],
      y: [0, -7, 0, 0],
      origin: [128, 128],
      duration: 0.88,
      ease: ["easeIn", "linear", "easeOut"],
      times: [0, 0.4, 0.751, 1],
      delay: 0.048
    },
    1: {
      x: [0, -8, 0, 0],
      y: [0, 8, 0, 0],
      origin: [128, 128],
      duration: 0.88,
      ease: ["easeIn", "linear", "easeOut"],
      times: [0, 0.4, 0.75, 1]
    }
  }
};

export const Copy = createAnimatedIcon(
  "Copy",
  GEOMETRY,
  STROKE,
);

export default Copy;
