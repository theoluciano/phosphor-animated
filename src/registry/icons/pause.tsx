"use client";

/**
 * Pause — animated Phosphor icon.
 *
 * Holds — the bars dip in turn, left then right, and spring back.
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
    ["rect", { x: "152", y: "40", width: "56", height: "176", rx: "8" }],
    ["rect", { x: "48", y: "40", width: "56", height: "176", rx: "8" }],
  ],
  backdrop: {
    duotone: [
      ["rect", { x: "152", y: "40", width: "56", height: "176", rx: "8", opacity: "0.2" }],
      ["rect", { x: "48", y: "40", width: "56", height: "176", rx: "8", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.88,
  parts: {
    0: {
      y: [0, 12, -6.2, 0],
      duration: 0.72,
      ease: [
        "easeOut",
        [0.22, 1, 0.36, 1],
        "easeInOut"
      ],
      times: [0, 0.28, 0.62, 1],
      delay: 0.16
    },
    1: {
      y: [0, 12, -6.2, 0],
      duration: 0.72,
      ease: [
        "easeOut",
        [0.22, 1, 0.36, 1],
        "easeInOut"
      ],
      times: [0, 0.28, 0.62, 1],
      delay: 0
    }
  }
};

export const Pause = createAnimatedIcon(
  "Pause",
  GEOMETRY,
  STROKE,
);

export default Pause;
