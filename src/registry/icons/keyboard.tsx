"use client";

/**
 * Keyboard — animated Phosphor icon.
 *
 * Types — key, key, spacebar, each blinking as it's struck.
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
    ["rect", { x: "24", y: "56", width: "208", height: "144", rx: "8" }],
    ["line", { x1: "56", y1: "128", x2: "200", y2: "128" }],
    ["line", { x1: "56", y1: "96", x2: "200", y2: "96" }],
    ["line", { x1: "56", y1: "160", x2: "64", y2: "160" }],
    ["line", { x1: "96", y1: "160", x2: "160", y2: "160" }],
    ["line", { x1: "192", y1: "160", x2: "200", y2: "160" }],
  ],
  bold: [
    ["rect", { x: "24", y: "56", width: "208", height: "144", rx: "8" }],
    ["line", { x1: "64", y1: "128", x2: "192", y2: "128" }],
    ["line", { x1: "64", y1: "92", x2: "192", y2: "92" }],
    ["line", { x1: "64", y1: "164", x2: "72", y2: "164" }],
    ["line", { x1: "108", y1: "164", x2: "148", y2: "164" }],
    ["line", { x1: "184", y1: "164", x2: "192", y2: "164" }],
  ],
  backdrop: {
    duotone: [
      ["rect", { x: "24", y: "56", width: "208", height: "144", rx: "8", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.96,
  parts: {
    3: {
      y: [0, 3, 0],
      opacity: [1, 0.2, 1],
      duration: 0.48,
      ease: [
        "easeOut",
        [0.22, 1, 0.36, 1]
      ],
      delay: 0
    },
    4: {
      y: [0, 3, 0],
      opacity: [1, 0.2, 1],
      duration: 0.48,
      ease: [
        "easeOut",
        [0.22, 1, 0.36, 1]
      ],
      delay: 0.288
    },
    5: {
      y: [0, 3, 0],
      opacity: [1, 0.2, 1],
      duration: 0.48,
      ease: [
        "easeOut",
        [0.22, 1, 0.36, 1]
      ],
      delay: 0.144
    }
  }
};

export const Keyboard = createAnimatedIcon(
  "Keyboard",
  GEOMETRY,
  STROKE,
);

export default Keyboard;
