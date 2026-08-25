"use client";

/**
 * Minus — animated Phosphor icon.
 *
 * Pinches to the centre, then snaps back to full width.
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
  ],
  backdrop: {
    duotone: [
      ["rect", { x: "40", y: "40", width: "176", height: "176", rx: "16", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.45,
  parts: {
    0: {
      scaleX: [1, 0.15, 1.08, 1],
      origin: [128, 128],
      duration: 0.5,
      ease: ["easeIn", "linear", "easeOut"],
      times: [0, 0.42, 0.78, 1]
    }
  }
};

export const Minus = createAnimatedIcon(
  "Minus",
  GEOMETRY,
  STROKE,
);

export default Minus;
