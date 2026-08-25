"use client";

/**
 * ArrowDown — animated Phosphor icon.
 *
 * Recoils upward — shaft retracting — then strikes back down.
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
    ["line", { x1: "128", y1: "40", x2: "128", y2: "216" }],
    ["polyline", { points: "56 144 128 216 200 144" }],
  ],
  duotone: [
    ["polygon", { points: "56 144 128 216 200 144 56 144" }],
    ["line", { x1: "128", y1: "40", x2: "128", y2: "144" }],
  ],
  backdrop: {
    duotone: [
      ["polygon", { points: "56 144 128 216 200 144 56 144", opacity: "0.2" }],
    ],
  },
  maps: {
    duotone: [1, 0],
  },
};

const STROKE: Choreography = {
  duration: 0.72,
  parts: {
    0: {
      scaleY: [1, 0.78, 0.78, 1],
      origin: [128, 40],
      duration: 0.72,
      ease: ["easeIn", "linear", "easeOut"]
    },
    1: {
      y: [0, -22, -22, 0],
      origin: [128, 128],
      duration: 0.72,
      ease: ["easeIn", "linear", "easeOut"]
    }
  }
};

export const ArrowDown = createAnimatedIcon(
  "ArrowDown",
  GEOMETRY,
  STROKE,
);

export default ArrowDown;
