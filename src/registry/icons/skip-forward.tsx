"use client";

/**
 * SkipForward — animated Phosphor icon.
 *
 * Skips ahead — the triangle lunges at the end bar and knocks it.
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
    ["line", { x1: "200", y1: "40", x2: "200", y2: "216" }],
    ["path", { d: "M56,47.88V208.12a8,8,0,0,0,12.19,6.65L196.3,134.65a7.83,7.83,0,0,0,0-13.3L68.19,41.23A8,8,0,0,0,56,47.88Z" }],
  ],
  backdrop: {
    duotone: [
      ["path", { d: "M56,47.88V208.12a8,8,0,0,0,12.19,6.65L196.3,134.65a7.83,7.83,0,0,0,0-13.3L68.19,41.23A8,8,0,0,0,56,47.88Z", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.8,
  parts: {
    0: {
      x: [0, 5, 0],
      duration: 0.48,
      ease: [
        "easeOut",
        [0.22, 1, 0.36, 1]
      ],
      delay: 0.224
    },
    1: {
      x: [0, 12, 0],
      duration: 0.8,
      ease: [
        [0.22, 1, 0.36, 1],
        "easeInOut"
      ],
      times: [0, 0.45, 1]
    }
  }
};

export const SkipForward = createAnimatedIcon(
  "SkipForward",
  GEOMETRY,
  STROKE,
);

export default SkipForward;
