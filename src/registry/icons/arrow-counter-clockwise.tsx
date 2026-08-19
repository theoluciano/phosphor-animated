"use client";

/**
 * ArrowCounterClockwise — animated Phosphor icon.
 *
 * Undoes — one turn back, away fast and easing home.
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
    ["polyline", { points: "24 56 24 104 72 104" }],
    ["path", { d: "M67.59,192A88,88,0,1,0,65.77,65.77L24,104" }],
  ],
  backdrop: {
    duotone: [
      ["circle", { cx: "128", cy: "128", r: "88", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.7,
  whole: {
    rotate: [360, 340, 20, 0],
    origin: [128, 128],
    duration: 0.7,
    ease: [
      "linear",
      [0.22, 1, 0.36, 1],
      "linear"
    ],
    times: [0, 0.14, 0.86, 1]
  }
};

export const ArrowCounterClockwise = createAnimatedIcon(
  "ArrowCounterClockwise",
  GEOMETRY,
  STROKE,
);

export default ArrowCounterClockwise;
