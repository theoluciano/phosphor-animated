"use client";

/**
 * Plus — animated Phosphor icon.
 *
 * Stamps — each stroke overshoots long, pinches short, and settles.
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
    ["line", { x1: "128", y1: "40", x2: "128", y2: "216" }],
  ],
  backdrop: {
    duotone: [
      ["rect", { x: "40", y: "40", width: "176", height: "176", rx: "16", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.55,
  parts: {
    0: {
      scaleX: [1, 1.15, 0.94, 1],
      origin: [128, 128],
      duration: 0.5,
      ease: ["easeOut", "easeInOut", "easeInOut"],
      times: [0, 0.32, 0.68, 1],
      delay: 0
    },
    1: {
      scaleY: [1, 1.15, 0.94, 1],
      origin: [128, 128],
      duration: 0.5,
      ease: ["easeOut", "easeInOut", "easeInOut"],
      times: [0, 0.32, 0.68, 1],
      delay: 0.06
    }
  }
};

export const Plus = createAnimatedIcon(
  "Plus",
  GEOMETRY,
  STROKE,
);

export default Plus;
