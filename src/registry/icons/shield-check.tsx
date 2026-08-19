"use client";

/**
 * ShieldCheck — animated Phosphor icon.
 *
 * Re-verifies — the shield braces while the check pops in and redraws.
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
    ["path", { d: "M216,112V56a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8v56c0,96,88,120,88,120S216,208,216,112Z" }],
    ["polyline", { points: "88 136 112 160 168 104" }],
  ],
  backdrop: {
    duotone: [
      ["path", { d: "M216,112V56a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8v56c0,96,88,120,88,120S216,208,216,112Z", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.65,
  parts: {
    0: {
      scale: [1, 0.95, 1.04, 1],
      origin: [128, 128],
      duration: 0.55,
      ease: [
        "easeOut",
        "easeInOut",
        [0.22, 1, 0.36, 1]
      ],
      times: [0, 0.3, 0.62, 1]
    },
    1: {
      pathLength: [0, 1],
      opacity: [0, 1],
      scale: [0.5, 1],
      origin: [128, 132],
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.12
    }
  }
};

export const ShieldCheck = createAnimatedIcon(
  "ShieldCheck",
  GEOMETRY,
  STROKE,
);

export default ShieldCheck;
