"use client";

/**
 * CloudArrowUp — animated Phosphor icon.
 *
 * Uploads — the arrow dips, surges up, and the cloud lifts buoyantly with it.
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
    ["path", { d: "M112,208H72A56,56,0,1,1,85.92,97.74" }],
    ["polyline", { points: "120 160 152 128 184 160" }],
    ["line", { x1: "152", y1: "208", x2: "152", y2: "128" }],
    ["path", { d: "M80,128a80,80,0,1,1,112,73.34" }],
  ],
  bold: [
    ["path", { d: "M100,208H72A56,56,0,1,1,85.92,97.74" }],
    ["polyline", { points: "124 160 156 128 188 160" }],
    ["line", { x1: "156", y1: "208", x2: "156", y2: "128" }],
    ["path", { d: "M80,128a80,80,0,1,1,156,25.05" }],
  ],
  backdrop: {
    duotone: [
      ["path", { d: "M160,48A80,80,0,0,0,85.9,97.84l0-.1A56,56,0,1,0,72,208h88a80,80,0,0,0,0-160Z", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.65,
  parts: {
    0: {
      y: [0, -4, 0],
      origin: [128, 128],
      duration: 0.45,
      delay: 0.18,
      ease: [
        "easeOut",
        [0.22, 1, 0.36, 1]
      ],
      times: [0, 0.45, 1]
    },
    1: {
      y: [0, 3, -12, 0],
      origin: [152, 168],
      duration: 0.69,
      ease: [
        "easeIn",
        [0.34, 1.56, 0.64, 1],
        [0.22, 1, 0.36, 1]
      ],
      times: [0, 0.16, 0.52, 1]
    },
    2: {
      y: [0, 3, -12, 0],
      origin: [152, 168],
      duration: 0.69,
      ease: [
        "easeIn",
        [0.34, 1.56, 0.64, 1],
        [0.22, 1, 0.36, 1]
      ],
      times: [0, 0.16, 0.52, 1]
    },
    3: {
      y: [0, -4, 0],
      origin: [128, 128],
      duration: 0.45,
      delay: 0.18,
      ease: [
        "easeOut",
        [0.22, 1, 0.36, 1]
      ],
      times: [0, 0.45, 1]
    }
  }
};

export const CloudArrowUp = createAnimatedIcon(
  "CloudArrowUp",
  GEOMETRY,
  STROKE,
);

export default CloudArrowUp;
