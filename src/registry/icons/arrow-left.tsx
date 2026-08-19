"use client";

/**
 * ArrowLeft — animated Phosphor icon.
 *
 * Recoils — shaft retracting — then strikes back to the left.
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
    ["line", { x1: "216", y1: "128", x2: "40", y2: "128" }],
    ["polyline", { points: "112 56 40 128 112 200" }],
  ],
  duotone: [
    ["line", { x1: "216", y1: "128", x2: "112", y2: "128" }],
    ["polygon", { points: "112 56 40 128 112 200 112 56" }],
  ],
  backdrop: {
    duotone: [
      ["polygon", { points: "112 56 40 128 112 200 112 56", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.45,
  parts: {
    0: {
      scaleX: [1, 0.83, 0.83, 1],
      origin: [216, 128],
      duration: 0.45,
      ease: ["easeIn", "linear", "easeOut"]
    },
    1: {
      x: [0, 22, 22, 0],
      origin: [128, 128],
      duration: 0.45,
      ease: ["easeIn", "linear", "easeOut"]
    }
  }
};

export const ArrowLeft = createAnimatedIcon(
  "ArrowLeft",
  GEOMETRY,
  STROKE,
);

export default ArrowLeft;
