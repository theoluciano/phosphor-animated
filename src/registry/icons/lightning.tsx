"use client";

/**
 * Lightning — animated Phosphor icon.
 *
 * Strikes — the bolt draws itself on, strike-quick.
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
    ["polygon", { points: "160 16 144 96 208 120 96 240 112 160 48 136 160 16" }],
  ],
  bold: [
    ["polygon", { points: "160 16 148 96 208 120 96 240 108 160 48 136 160 16" }],
  ],
  backdrop: {
    duotone: [
      ["polygon", { points: "160 16 144 96 208 120 96 240 112 160 48 136 160 16", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.96,
  parts: {
    0: { pathLength: [1, 0, 1, 1], opacity: [1, 0, 1, 1], ease: ["easeIn", "linear", "easeOut"] }
  }
};

export const Lightning = createAnimatedIcon(
  "Lightning",
  GEOMETRY,
  STROKE,
);

export default Lightning;
