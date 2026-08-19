"use client";

/**
 * At — animated Phosphor icon.
 *
 * Writes itself — the centre loops first, then the spiral sweeps around.
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
    ["circle", { cx: "128", cy: "128", r: "40" }],
    ["path", { d: "M184,208c-15.21,10.11-36.37,16-56,16a96,96,0,1,1,96-96c0,22.09-8,40-28,40s-28-17.91-28-40V88" }],
  ],
  backdrop: {
    duotone: [
      ["path", { d: "M128,32a96,96,0,1,0,96,96A96,96,0,0,0,128,32Z", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.7,
  parts: {
    0: {
      pathLength: [0, 1],
      origin: [128, 128],
      duration: 0.3,
      ease: [0.65, 0, 0.35, 1]
    },
    1: {
      pathLength: [0, 1],
      origin: [128, 128],
      duration: 0.35,
      ease: [0.65, 0, 0.35, 1],
      delay: 0.3
    }
  }
};

export const At = createAnimatedIcon(
  "At",
  GEOMETRY,
  STROKE,
);

export default At;
