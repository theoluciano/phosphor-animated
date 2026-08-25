"use client";

/**
 * SkipBack — animated Phosphor icon.
 *
 * Skips back — the triangle lunges at the start bar and knocks it.
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
    ["line", { x1: "56", y1: "40", x2: "56", y2: "216" }],
    ["path", { d: "M200,47.88V208.12a8,8,0,0,1-12.19,6.65L59.7,134.65a7.83,7.83,0,0,1,0-13.3L187.81,41.23A8,8,0,0,1,200,47.88Z" }],
  ],
  backdrop: {
    duotone: [
      ["path", { d: "M200,47.88V208.12a8,8,0,0,1-12.19,6.65L59.7,134.65a7.83,7.83,0,0,1,0-13.3L187.81,41.23A8,8,0,0,1,200,47.88Z", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.8,
  parts: {
    0: {
      x: [0, -5, 0],
      duration: 0.48,
      ease: [
        "easeOut",
        [0.22, 1, 0.36, 1]
      ],
      delay: 0.224
    },
    1: {
      x: [0, -12, 0],
      duration: 0.8,
      ease: [
        [0.22, 1, 0.36, 1],
        "easeInOut"
      ],
      times: [0, 0.45, 1]
    }
  }
};

export const SkipBack = createAnimatedIcon(
  "SkipBack",
  GEOMETRY,
  STROKE,
);

export default SkipBack;
