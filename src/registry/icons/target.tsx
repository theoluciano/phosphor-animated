"use client";

/**
 * Target — animated Phosphor icon.
 *
 * Hits — the arrow draws back, lands, and the rings ring outward from the centre.
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
    ["line", { x1: "128", y1: "128", x2: "224", y2: "32" }],
    ["path", { d: "M195.88,60.12a95.88,95.88,0,1,0,18.77,26.49" }],
    ["path", { d: "M161.94,94.06a48,48,0,1,0,14,31.2" }],
  ],
  bold: [
    ["line", { x1: "128", y1: "128", x2: "224", y2: "32" }],
    ["path", { d: "M195.88,60.12A95.92,95.92,0,1,0,218,94.56" }],
    ["path", { d: "M161.94,94.06a48,48,0,1,0,13.11,43.46" }],
  ],
  backdrop: {
    duotone: [
      ["circle", { cx: "128", cy: "128", r: "48", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.86,
  parts: {
    0: {
      x: [0, 11, 11, 0],
      y: [0, -11, -11, 0],
      duration: 0.55,
      ease: [
        "easeOut",
        "linear",
        [0.5, 0, 0.75, 0]
      ],
      times: [0, 0.4, 0.6, 1]
    },
    1: {
      scale: [1, 1.09, 0.995, 1],
      origin: [128, 128],
      duration: 0.44,
      ease: [
        [0.22, 1, 0.36, 1],
        "easeInOut",
        [0.22, 1, 0.36, 1]
      ],
      times: [0, 0.42, 0.7, 1],
      delay: 0.42
    },
    2: {
      scale: [1, 1.32, 0.99, 1],
      origin: [128, 128],
      duration: 0.44,
      ease: [
        [0.22, 1, 0.36, 1],
        "easeInOut",
        [0.22, 1, 0.36, 1]
      ],
      times: [0, 0.42, 0.7, 1],
      delay: 0.38
    }
  }
};

export const Target = createAnimatedIcon(
  "Target",
  GEOMETRY,
  STROKE,
);

export default Target;
