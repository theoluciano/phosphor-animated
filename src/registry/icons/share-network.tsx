"use client";

/**
 * ShareNetwork — animated Phosphor icon.
 *
 * Broadcasts — the hub pulses, the wires carry the signal, the nodes pop as it lands.
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
    ["circle", { cx: "64", cy: "128", r: "32" }],
    ["circle", { cx: "176", cy: "200", r: "32" }],
    ["circle", { cx: "176", cy: "56", r: "32" }],
    ["line", { x1: "149.09", y1: "73.3", x2: "90.91", y2: "110.7" }],
    ["line", { x1: "90.91", y1: "145.3", x2: "149.09", y2: "182.7" }],
  ],
  thin: [
    ["line", { x1: "149.09", y1: "73.3", x2: "90.91", y2: "110.7" }],
    ["line", { x1: "90.91", y1: "145.3", x2: "149.09", y2: "182.7" }],
    ["circle", { cx: "64", cy: "128", r: "32" }],
    ["circle", { cx: "176", cy: "200", r: "32" }],
    ["circle", { cx: "176", cy: "56", r: "32" }],
  ],
  light: [
    ["line", { x1: "149.09", y1: "73.3", x2: "90.91", y2: "110.7" }],
    ["line", { x1: "90.91", y1: "145.3", x2: "149.09", y2: "182.7" }],
    ["circle", { cx: "64", cy: "128", r: "32" }],
    ["circle", { cx: "176", cy: "200", r: "32" }],
    ["circle", { cx: "176", cy: "56", r: "32" }],
  ],
  bold: [
    ["line", { x1: "149.09", y1: "73.3", x2: "90.91", y2: "110.7" }],
    ["line", { x1: "90.91", y1: "145.3", x2: "149.09", y2: "182.7" }],
    ["circle", { cx: "64", cy: "128", r: "32" }],
    ["circle", { cx: "176", cy: "200", r: "32" }],
    ["circle", { cx: "176", cy: "56", r: "32" }],
  ],
  duotone: [
    ["line", { x1: "149.09", y1: "73.3", x2: "90.91", y2: "110.7" }],
    ["line", { x1: "90.91", y1: "145.3", x2: "149.09", y2: "182.7" }],
    ["circle", { cx: "64", cy: "128", r: "32" }],
    ["circle", { cx: "176", cy: "200", r: "32" }],
    ["circle", { cx: "176", cy: "56", r: "32" }],
  ],
  backdrop: {
    duotone: [
      ["circle", { cx: "176", cy: "200", r: "32", opacity: "0.2" }],
      ["circle", { cx: "176", cy: "56", r: "32", opacity: "0.2" }],
    ],
  },
  maps: {
    thin: [2, 3, 4, 0, 1],
    light: [2, 3, 4, 0, 1],
    bold: [2, 3, 4, 0, 1],
    duotone: [2, 3, 4, 0, 1],
  },
};

const STROKE: Choreography = {
  duration: 1.28,
  parts: {
    0: {
      scale: [1, 1.25, 1],
      origin: [64, 128],
      duration: 0.64,
      ease: ["easeOut", "easeInOut"],
      times: [0, 0.45, 1]
    },
    1: {
      scale: [1, 1.25, 1],
      origin: [176, 200],
      duration: 0.64,
      ease: ["easeOut", "easeInOut"],
      times: [0, 0.45, 1],
      delay: 0.576
    },
    2: {
      scale: [1, 1.25, 1],
      origin: [176, 56],
      duration: 0.64,
      ease: ["easeOut", "easeInOut"],
      times: [0, 0.45, 1],
      delay: 0.448
    },
    3: {
      pathLength: [0, 1],
      duration: 0.56,
      ease: "easeOut",
      delay: 0.16
    },
    4: {
      pathLength: [0, 1],
      duration: 0.56,
      ease: "easeOut",
      delay: 0.16
    }
  }
};

export const ShareNetwork = createAnimatedIcon(
  "ShareNetwork",
  GEOMETRY,
  STROKE,
);

export default ShareNetwork;
