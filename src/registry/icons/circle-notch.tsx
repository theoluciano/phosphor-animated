"use client";

/**
 * CircleNotch — animated Phosphor icon.
 *
 * Spins — one full turn, up to speed and easing home.
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
    ["path", { d: "M168,40a97,97,0,0,1,56,88,96,96,0,0,1-192,0A97,97,0,0,1,88,40" }],
  ],
  backdrop: {
    duotone: [
      ["circle", { cx: "128", cy: "128", r: "96", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 1.28,
  parts: {
    0: {
      rotate: [-360, 0],
      origin: [128, 128],
      duration: 1.28,
      ease: ["easeInOut"]
    }
  }
};

export const CircleNotch = createAnimatedIcon(
  "CircleNotch",
  GEOMETRY,
  STROKE,
);

export default CircleNotch;
