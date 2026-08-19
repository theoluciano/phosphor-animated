"use client";

/**
 * CaretRight — animated Phosphor icon.
 *
 * Nudges forward, the way it points.
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
    ["polyline", { points: "96 48 176 128 96 208" }],
  ],
  duotone: [
    ["polygon", { points: "96 48 176 128 96 208 96 48" }],
  ],
  backdrop: {
    duotone: [
      ["polygon", { points: "96 48 176 128 96 208 96 48", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.5,
  parts: {
    0: {
      x: [0, 10, 0],
      origin: [128, 128],
      duration: 0.5,
      ease: ["easeIn", "easeOut"],
      times: [0, 0.4, 1]
    }
  }
};

export const CaretRight = createAnimatedIcon(
  "CaretRight",
  GEOMETRY,
  STROKE,
);

export default CaretRight;
