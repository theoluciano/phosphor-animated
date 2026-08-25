"use client";

/**
 * ArrowClockwise — animated Phosphor icon.
 *
 * Refreshes — one clockwise turn, away fast and easing home.
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
    ["polyline", { points: "184 104 232 104 232 56" }],
    ["path", { d: "M188.4,192a88,88,0,1,1,1.83-126.23L232,104" }],
  ],
  backdrop: {
    duotone: [
      ["circle", { cx: "128", cy: "128", r: "88", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 1.12,
  whole: {
    rotate: [-360, -340, -20, 0],
    origin: [128, 128],
    duration: 1.12,
    ease: [
      "linear",
      [0.22, 1, 0.36, 1],
      "linear"
    ],
    times: [0, 0.14, 0.86, 1]
  }
};

export const ArrowClockwise = createAnimatedIcon(
  "ArrowClockwise",
  GEOMETRY,
  STROKE,
);

export default ArrowClockwise;
