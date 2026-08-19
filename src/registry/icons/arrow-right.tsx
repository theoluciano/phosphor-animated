"use client";

/**
 * ArrowRight — animated Phosphor icon.
 *
 * Recoils — the arrow draws back, then springs home.
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
    ["line", { x1: "40", y1: "128", x2: "216", y2: "128" }],
    ["polyline", { points: "144 56 216 128 144 200" }],
  ],
  duotone: [
    ["line", { x1: "40", y1: "128", x2: "144", y2: "128" }],
    ["polygon", { points: "144 56 216 128 144 200 144 56" }],
  ],
  backdrop: {
    duotone: [
      ["polygon", { points: "144 56 216 128 144 200 144 56", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.5,
  parts: {
    0: {
      scaleX: [1, 0.78, 0.78, 1],
      origin: [40, 128],
      duration: 0.5,
      ease: ["easeIn", "linear", "easeOut"]
    },
    1: {
      x: [0, -22, -22, 0],
      origin: [128, 128],
      duration: 0.5,
      ease: ["easeIn", "linear", "easeOut"]
    }
  }
};

export const ArrowRight = createAnimatedIcon(
  "ArrowRight",
  GEOMETRY,
  STROKE,
);

export default ArrowRight;
