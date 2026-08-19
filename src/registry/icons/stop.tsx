"use client";

/**
 * Stop — animated Phosphor icon.
 *
 * Presses in — the square dips like a struck button, then settles.
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
    ["rect", { x: "48", y: "48", width: "160", height: "160", rx: "8" }],
  ],
  backdrop: {
    duotone: [
      ["rect", { x: "48", y: "48", width: "160", height: "160", rx: "8", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.45,
  parts: {
    0: {
      scale: [1, 0.9, 1.03, 1],
      origin: [128, 128],
      duration: 0.45,
      ease: [
        "easeOut",
        [0.34, 1.56, 0.64, 1],
        [0.22, 1, 0.36, 1]
      ],
      times: [0, 0.3, 0.62, 1]
    }
  }
};

export const Stop = createAnimatedIcon(
  "Stop",
  GEOMETRY,
  STROKE,
);

export default Stop;
