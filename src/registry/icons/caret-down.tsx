"use client";

/**
 * CaretDown — animated Phosphor icon.
 *
 * Nudges downward, the way it points.
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
    ["polyline", { points: "208 96 128 176 48 96" }],
  ],
  duotone: [
    ["polygon", { points: "208 96 128 176 48 96 208 96" }],
  ],
  backdrop: {
    duotone: [
      ["polygon", { points: "208 96 128 176 48 96 208 96", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.8,
  parts: {
    0: {
      y: [0, 10, 0],
      origin: [128, 128],
      duration: 0.8,
      ease: ["easeIn", "easeOut"],
      times: [0, 0.4, 1]
    }
  }
};

export const CaretDown = createAnimatedIcon(
  "CaretDown",
  GEOMETRY,
  STROKE,
);

export default CaretDown;
