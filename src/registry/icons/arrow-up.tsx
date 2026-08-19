"use client";

/**
 * ArrowUp — animated Phosphor icon.
 *
 * Crouches — the arrow dips down, then springs back up.
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
    ["line", { x1: "128", y1: "216", x2: "128", y2: "40" }],
    ["polyline", { points: "56 112 128 40 200 112" }],
  ],
  duotone: [
    ["line", { x1: "128", y1: "216", x2: "128", y2: "112" }],
    ["polygon", { points: "56 112 128 40 200 112 56 112" }],
  ],
  backdrop: {
    duotone: [
      ["polygon", { points: "56 112 128 40 200 112 56 112", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.5,
  parts: {
    0: {
      scaleY: [1, 0.78, 0.78, 1],
      origin: [128, 216],
      duration: 0.5,
      ease: ["easeIn", "linear", "easeOut"]
    },
    1: {
      y: [0, 22, 22, 0],
      origin: [128, 128],
      duration: 0.5,
      ease: ["easeIn", "linear", "easeOut"]
    }
  }
};

export const ArrowUp = createAnimatedIcon(
  "ArrowUp",
  GEOMETRY,
  STROKE,
);

export default ArrowUp;
