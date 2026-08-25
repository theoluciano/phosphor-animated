"use client";

/**
 * Check — animated Phosphor icon.
 *
 * Stamps in — the check draws on while scaling up to size.
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
    ["polyline", { points: "40 144 96 200 224 72" }],
  ],
  duotone: [
    ["polyline", { points: "64 136 104 176 200 80" }],
  ],
  backdrop: {
    duotone: [
      ["path", { d: "M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Z", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.72,
  parts: {
    0: {
      pathLength: [0, 0.6, 1],
      origin: [132, 136],
      duration: 0.72,
      ease: ["easeIn", "easeOut"],
      times: [0, 0.35, 1]
    }
  }
};

export const Check = createAnimatedIcon(
  "Check",
  GEOMETRY,
  STROKE,
);

export default Check;
