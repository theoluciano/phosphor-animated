"use client";

/**
 * XCircle — animated Phosphor icon.
 *
 * Rejects — the cross twists in and pops while the ring pulses around it.
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
    ["line", { x1: "160", y1: "96", x2: "96", y2: "160" }],
    ["line", { x1: "96", y1: "96", x2: "160", y2: "160" }],
    ["circle", { cx: "128", cy: "128", r: "96" }],
  ],
  backdrop: {
    duotone: [
      ["circle", { cx: "128", cy: "128", r: "96", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.8,
  parts: {
    0: {
      rotate: [0, -10, 5.2, 0],
      scale: [1, 0.88, 1.08, 1],
      origin: [128, 128],
      duration: 0.672,
      ease: [
        "easeOut",
        "easeInOut",
        [0.22, 1, 0.36, 1]
      ],
      times: [0, 0.3, 0.62, 1]
    },
    1: {
      rotate: [0, -10, 5.2, 0],
      scale: [1, 0.88, 1.08, 1],
      origin: [128, 128],
      duration: 0.672,
      ease: [
        "easeOut",
        "easeInOut",
        [0.22, 1, 0.36, 1]
      ],
      times: [0, 0.3, 0.62, 1]
    },
    2: {
      scale: [1, 0.96, 1.025, 1],
      origin: [128, 128],
      duration: 0.768,
      ease: [
        "easeOut",
        "easeInOut",
        [0.22, 1, 0.36, 1]
      ],
      times: [0, 0.34, 0.66, 1]
    }
  }
};

export const XCircle = createAnimatedIcon(
  "XCircle",
  GEOMETRY,
  STROKE,
);

export default XCircle;
