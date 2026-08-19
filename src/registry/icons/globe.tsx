"use client";

/**
 * Globe — animated Phosphor icon.
 *
 * Draws itself — the rim first, then the meridian and parallels trace on.
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
    ["circle", { cx: "128", cy: "128", r: "96" }],
    ["path", { d: "M168,128c0,64-40,96-40,96s-40-32-40-96,40-96,40-96S168,64,168,128Z" }],
    ["line", { x1: "37.46", y1: "96", x2: "218.54", y2: "96" }],
    ["line", { x1: "37.46", y1: "160", x2: "218.54", y2: "160" }],
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
      pathLength: [0, 1],
      opacity: [0, 1],
      duration: 0.35,
      ease: "easeInOut"
    },
    1: {
      pathLength: [0, 1],
      opacity: [0, 1],
      duration: 0.45,
      delay: 0.3,
      ease: "easeInOut"
    },
    2: {
      pathLength: [0, 1],
      opacity: [0, 1],
      duration: 0.4,
      delay: 0.3,
      ease: "easeInOut"
    },
    3: {
      pathLength: [0, 1],
      opacity: [0, 1],
      duration: 0.4,
      delay: 0.38,
      ease: "easeInOut"
    }
  }
};

export const Globe = createAnimatedIcon(
  "Globe",
  GEOMETRY,
  STROKE,
);

export default Globe;
