"use client";

/**
 * Bluetooth — animated Phosphor icon.
 *
 * Reconnects — the whole glyph redraws itself like a signal coming back.
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
    ["polygon", { points: "128 32 192 80 128 128 128 32" }],
    ["polygon", { points: "128 128 192 176 128 224 128 128" }],
    ["line", { x1: "64", y1: "80", x2: "128", y2: "128" }],
    ["line", { x1: "64", y1: "176", x2: "128", y2: "128" }],
  ],
  backdrop: {
    duotone: [
      ["polygon", { points: "128 32 192 80 128 128 128 32", opacity: "0.2" }],
      ["polygon", { points: "128 128 192 176 128 224 128 128", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.45,
  parts: {
    0: {
      pathLength: [0, 1],
      opacity: [0, 1],
      duration: 0.35,
      ease: "easeInOut"
    },
    1: {
      pathLength: [0, 1],
      opacity: [0, 1],
      duration: 0.35,
      ease: "easeInOut"
    },
    2: {
      pathLength: [0, 1],
      opacity: [0, 1],
      duration: 0.35,
      ease: "easeInOut"
    },
    3: {
      pathLength: [0, 1],
      opacity: [0, 1],
      duration: 0.35,
      ease: "easeInOut"
    }
  }
};

export const Bluetooth = createAnimatedIcon(
  "Bluetooth",
  GEOMETRY,
  STROKE,
);

export default Bluetooth;
