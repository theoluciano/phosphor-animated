"use client";

/**
 * Gift — animated Phosphor icon.
 *
 * What's inside? — the box rocks from its base while the bows flutter.
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
    ["rect", { x: "32", y: "80", width: "192", height: "48", rx: "8" }],
    ["path", { d: "M208,128v72a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V128" }],
    ["line", { x1: "128", y1: "80", x2: "128", y2: "208" }],
    ["path", { d: "M176.79,31.21c9.34,9.34,9.89,25.06,0,33.82C159.88,80,128,80,128,80s0-31.88,15-48.79C151.73,21.32,167.45,21.87,176.79,31.21Z" }],
    ["path", { d: "M79.21,31.21c-9.34,9.34-9.89,25.06,0,33.82C96.12,80,128,80,128,80s0-31.88-15-48.79C104.27,21.32,88.55,21.87,79.21,31.21Z" }],
  ],
  backdrop: {
    duotone: [
      ["path", { d: "M208,128v72a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V128Z", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 1.12,
  whole: { rotate: [0, -4, 4, -4, 4, -2, 2, 0], origin: [128, 128], ease: ["easeOut", "easeInOut", "easeInOut", "easeInOut", "easeInOut", "easeInOut", "easeInOut"] },
  parts: {
    3: {
      rotate: [0, -9, 4.7, 0],
      origin: [128, 78],
      delay: 0.128,
      duration: 0.88,
      ease: ["easeOut", "easeInOut", "easeInOut"]
    },
    4: {
      rotate: [0, -9, 4.7, 0],
      origin: [128, 78],
      delay: 0.128,
      duration: 0.88,
      ease: ["easeOut", "easeInOut", "easeInOut"]
    }
  }
};

export const Gift = createAnimatedIcon(
  "Gift",
  GEOMETRY,
  STROKE,
);

export default Gift;
