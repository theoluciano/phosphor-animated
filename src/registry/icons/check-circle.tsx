"use client";

/**
 * CheckCircle — animated Phosphor icon.
 *
 * Confirms — the check rewrites itself and the ring nods.
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
    ["polyline", { points: "88 136 112 160 168 104" }],
    ["circle", { cx: "128", cy: "128", r: "96" }],
  ],
  backdrop: {
    duotone: [
      ["circle", { cx: "128", cy: "128", r: "96", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.55,
  parts: {
    0: {
      pathLength: [0, 1, 1],
      opacity: [0, 1, 1],
      origin: [128, 128],
      duration: 0.4,
      ease: ["easeIn", "easeOut"],
      delay: 0.1
    },
    1: {
      scale: [1, 0.97, 1.02, 1],
      origin: [128, 128],
      duration: 0.5,
      ease: [
        "easeOut",
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1]
      ],
      times: [0, 0.3, 0.62, 1]
    }
  }
};

export const CheckCircle = createAnimatedIcon(
  "CheckCircle",
  GEOMETRY,
  STROKE,
);

export default CheckCircle;
