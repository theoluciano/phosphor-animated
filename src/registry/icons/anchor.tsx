"use client";

/**
 * Anchor — animated Phosphor icon.
 *
 * Sways from its ring, the way a moored anchor rides the swell.
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
    ["line", { x1: "128", y1: "232", x2: "128", y2: "80" }],
    ["circle", { cx: "128", cy: "56", r: "24" }],
    ["line", { x1: "88", y1: "120", x2: "168", y2: "120" }],
    ["path", { d: "M216,144c0,64-88,24-88,88,0-64-88-24-88-88" }],
  ],
  backdrop: {
    duotone: [
      ["circle", { cx: "128", cy: "56", r: "24", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.9,
  whole: {
    rotate: [0, 4.5, -2.3, 1.2, -0.6, 0],
    origin: [128, 32],
    duration: 0.9,
    ease: [
      "easeOut",
      "easeInOut",
      "easeInOut",
      "easeInOut",
      [0.22, 1, 0.36, 1]
    ],
    times: [0, 0.16, 0.42, 0.66, 0.85, 1]
  }
};

export const Anchor = createAnimatedIcon(
  "Anchor",
  GEOMETRY,
  STROKE,
);

export default Anchor;
