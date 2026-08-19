"use client";

/**
 * Hourglass — animated Phosphor icon.
 *
 * Flips over with a springy half-turn — the sand starts again.
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
    ["path", { d: "M128,128,67.2,82.4A8,8,0,0,1,64,76V40a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8V75.64A8,8,0,0,1,188.82,82L128,128h0" }],
    ["path", { d: "M128,128,67.2,173.6A8,8,0,0,0,64,180v36a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V180.36a8,8,0,0,0-3.18-6.38L128,128h0" }],
  ],
  backdrop: {
    duotone: [
      ["path", { d: "M128,128,67.2,82.4A8,8,0,0,1,64,76V40a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8V75.64A8,8,0,0,1,188.82,82L128,128h0", opacity: "0.2" }],
      ["path", { d: "M128,128,67.2,173.6A8,8,0,0,0,64,180v36a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V180.36a8,8,0,0,0-3.18-6.38L128,128h0", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.9,
  whole: { rotate: [0, 192, 176.5, 181.2, 180], ease: [
      "easeOut",
      "easeInOut",
      "easeInOut",
      [0.22, 1, 0.36, 1]
    ], times: [0, 0.5, 0.72, 0.88, 1] }
};

export const Hourglass = createAnimatedIcon(
  "Hourglass",
  GEOMETRY,
  STROKE,
);

export default Hourglass;
