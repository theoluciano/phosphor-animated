"use client";

/**
 * Play — animated Phosphor icon.
 *
 * Starts — the triangle coils back with a tilt, then springs forward.
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
    ["path", { d: "M72,39.88V216.12a8,8,0,0,0,12.15,6.69l144.08-88.12a7.82,7.82,0,0,0,0-13.38L84.15,33.19A8,8,0,0,0,72,39.88Z" }],
  ],
  backdrop: {
    duotone: [
      ["path", { d: "M72,39.88V216.12a8,8,0,0,0,12.15,6.69l144.08-88.12a7.82,7.82,0,0,0,0-13.38L84.15,33.19A8,8,0,0,0,72,39.88Z", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.8,
  parts: {
    0: {
      origin: [128, 128],
      duration: 0.88,
      ease: ["easeInOut", "linear", "linear", "linear", "easeOut"],
      scale: [1, 0.96, 1.14, 0.96, 1.09, 1]
    }
  }
};

export const Play = createAnimatedIcon(
  "Play",
  GEOMETRY,
  STROKE,
);

export default Play;
