"use client";

/**
 * Sun — animated Phosphor icon.
 *
 * Lights up — the core pops and the rays flare one by one, clockwise.
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
    ["line", { x1: "128", y1: "40", x2: "128", y2: "16" }],
    ["circle", { cx: "128", cy: "128", r: "56" }],
    ["line", { x1: "64", y1: "64", x2: "48", y2: "48" }],
    ["line", { x1: "64", y1: "192", x2: "48", y2: "208" }],
    ["line", { x1: "192", y1: "64", x2: "208", y2: "48" }],
    ["line", { x1: "192", y1: "192", x2: "208", y2: "208" }],
    ["line", { x1: "40", y1: "128", x2: "16", y2: "128" }],
    ["line", { x1: "128", y1: "216", x2: "128", y2: "240" }],
    ["line", { x1: "216", y1: "128", x2: "240", y2: "128" }],
  ],
  bold: [
    ["line", { x1: "128", y1: "36", x2: "128", y2: "20" }],
    ["circle", { cx: "128", cy: "128", r: "56" }],
    ["line", { x1: "60", y1: "60", x2: "48", y2: "48" }],
    ["line", { x1: "60", y1: "196", x2: "48", y2: "208" }],
    ["line", { x1: "196", y1: "60", x2: "208", y2: "48" }],
    ["line", { x1: "196", y1: "196", x2: "208", y2: "208" }],
    ["line", { x1: "36", y1: "128", x2: "20", y2: "128" }],
    ["line", { x1: "128", y1: "220", x2: "128", y2: "236" }],
    ["line", { x1: "220", y1: "128", x2: "236", y2: "128" }],
  ],
  backdrop: {
    duotone: [
      ["circle", { cx: "128", cy: "128", r: "56", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.79,
  parts: {
    0: {
      opacity: [1, 0.4, 1],
      scale: [1, 1.09, 1],
      origin: [128, 128],
      duration: 0.34,
      ease: [
        [0.22, 1, 0.36, 1],
        "easeInOut"
      ],
      times: [0, 0.4, 1],
      delay: 0.06
    },
    1: {
      scale: [1, 1.08, 1],
      origin: [128, 128],
      duration: 0.34,
      ease: [
        [0.34, 1.56, 0.64, 1],
        [0.22, 1, 0.36, 1]
      ]
    },
    2: {
      opacity: [1, 0.4, 1],
      scale: [1, 1.09, 1],
      origin: [128, 128],
      duration: 0.34,
      ease: [
        [0.22, 1, 0.36, 1],
        "easeInOut"
      ],
      times: [0, 0.4, 1],
      delay: 0.445
    },
    3: {
      opacity: [1, 0.4, 1],
      scale: [1, 1.09, 1],
      origin: [128, 128],
      duration: 0.34,
      ease: [
        [0.22, 1, 0.36, 1],
        "easeInOut"
      ],
      times: [0, 0.4, 1],
      delay: 0.335
    },
    4: {
      opacity: [1, 0.4, 1],
      scale: [1, 1.09, 1],
      origin: [128, 128],
      duration: 0.34,
      ease: [
        [0.22, 1, 0.36, 1],
        "easeInOut"
      ],
      times: [0, 0.4, 1],
      delay: 0.115
    },
    5: {
      opacity: [1, 0.4, 1],
      scale: [1, 1.09, 1],
      origin: [128, 128],
      duration: 0.34,
      ease: [
        [0.22, 1, 0.36, 1],
        "easeInOut"
      ],
      times: [0, 0.4, 1],
      delay: 0.225
    },
    6: {
      opacity: [1, 0.4, 1],
      scale: [1, 1.09, 1],
      origin: [128, 128],
      duration: 0.34,
      ease: [
        [0.22, 1, 0.36, 1],
        "easeInOut"
      ],
      times: [0, 0.4, 1],
      delay: 0.39
    },
    7: {
      opacity: [1, 0.4, 1],
      scale: [1, 1.09, 1],
      origin: [128, 128],
      duration: 0.34,
      ease: [
        [0.22, 1, 0.36, 1],
        "easeInOut"
      ],
      times: [0, 0.4, 1],
      delay: 0.28
    },
    8: {
      opacity: [1, 0.4, 1],
      scale: [1, 1.09, 1],
      origin: [128, 128],
      duration: 0.34,
      ease: [
        [0.22, 1, 0.36, 1],
        "easeInOut"
      ],
      times: [0, 0.4, 1],
      delay: 0.17
    }
  }
};

export const Sun = createAnimatedIcon(
  "Sun",
  GEOMETRY,
  STROKE,
);

export default Sun;
