"use client";

/**
 * DotsThree — animated Phosphor icon.
 *
 * Hops — each dot pops up in turn, left to right.
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
    ["circle", { cx: "128", cy: "128", r: "12" }],
    ["circle", { cx: "196", cy: "128", r: "12" }],
    ["circle", { cx: "60", cy: "128", r: "12" }],
  ],
  thin: [
    ["circle", { cx: "128", cy: "128", r: "8" }],
    ["circle", { cx: "60", cy: "128", r: "8" }],
    ["circle", { cx: "196", cy: "128", r: "8" }],
  ],
  light: [
    ["circle", { cx: "128", cy: "128", r: "10" }],
    ["circle", { cx: "60", cy: "128", r: "10" }],
    ["circle", { cx: "196", cy: "128", r: "10" }],
  ],
  bold: [
    ["circle", { cx: "128", cy: "128", r: "16" }],
    ["circle", { cx: "60", cy: "128", r: "16" }],
    ["circle", { cx: "196", cy: "128", r: "16" }],
  ],
  backdrop: {
    duotone: [
      ["rect", { x: "16", y: "80", width: "224", height: "96", rx: "16", opacity: "0.2" }],
    ],
  },
  maps: {
    thin: [0, 2, 1],
    light: [0, 2, 1],
    bold: [0, 2, 1],
  },
};

const STROKE: Choreography = {
  duration: 0.672,
  parts: {
    0: {
      y: [0, -12, 6.2, 0],
      scale: [1, 1.15, 0.96, 1],
      origin: [128, 128],
      duration: 0.672,
      ease: [
        "easeOut",
        "easeInOut",
        [0.22, 1, 0.36, 1]
      ],
      times: [0, 0.4, 0.72, 1],
      delay: 0.128
    },
    1: {
      y: [0, -12, 6.2, 0],
      scale: [1, 1.15, 0.96, 1],
      origin: [196, 128],
      duration: 0.672,
      ease: [
        "easeOut",
        "easeInOut",
        [0.22, 1, 0.36, 1]
      ],
      times: [0, 0.4, 0.72, 1],
      delay: 0.256
    },
    2: {
      y: [0, -12, 6.2, 0],
      scale: [1, 1.15, 0.96, 1],
      origin: [60, 128],
      duration: 0.672,
      ease: [
        "easeOut",
        "easeInOut",
        [0.22, 1, 0.36, 1]
      ],
      times: [0, 0.4, 0.72, 1],
      delay: 0
    }
  }
};

export const DotsThree = createAnimatedIcon(
  "DotsThree",
  GEOMETRY,
  STROKE,
);

export default DotsThree;
