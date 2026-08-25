"use client";

/**
 * Power — animated Phosphor icon.
 *
 * Presses — the whole switch dips in and pops back.
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
    ["line", { x1: "128", y1: "48", x2: "128", y2: "128" }],
    ["path", { d: "M176,56c24.08,15.7,40,41.11,40,72a88,88,0,0,1-176,0c0-30.89,15.92-56.3,40-72" }],
  ],
  backdrop: {
    duotone: [
      ["circle", { cx: "128", cy: "128", r: "88", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.8,
  whole: {
    scale: [1, 0.9, 1.05, 1],
    origin: [128, 128],
    times: [0, 0.38, 0.72, 1],
    ease: ["easeIn", "linear", "easeOut"]
  },
  parts: {
    0: { ease: ["easeInOut"], pathLength: [0, 1] },
    1: { ease: ["easeInOut"], pathLength: [0, 1], duration: 0.7 }
  }
};

export const Power = createAnimatedIcon(
  "Power",
  GEOMETRY,
  STROKE,
);

export default Power;
