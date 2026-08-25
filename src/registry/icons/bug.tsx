"use client";

/**
 * Bug — animated Phosphor icon.
 *
 * Skitters — mismatched legs twitch while the body shifts its weight.
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
    ["circle", { cx: "156", cy: "92", r: "12" }],
    ["circle", { cx: "100", cy: "92", r: "12" }],
    ["line", { x1: "128", y1: "128", x2: "128", y2: "224" }],
    ["path", { d: "M208,144a80,80,0,0,1-160,0V112a80,80,0,0,1,160,0Z" }],
    ["line", { x1: "232", y1: "184", x2: "203.18", y2: "171.41" }],
    ["line", { x1: "232", y1: "72", x2: "203.18", y2: "84.59" }],
    ["line", { x1: "24", y1: "72", x2: "52.82", y2: "84.59" }],
    ["line", { x1: "24", y1: "184", x2: "52.82", y2: "171.41" }],
    ["line", { x1: "16", y1: "128", x2: "240", y2: "128" }],
  ],
  thin: [
    ["circle", { cx: "156", cy: "92", r: "8" }],
    ["circle", { cx: "100", cy: "92", r: "8" }],
    ["line", { x1: "128", y1: "128", x2: "128", y2: "224" }],
    ["path", { d: "M208,144a80,80,0,0,1-160,0V112a80,80,0,0,1,160,0Z" }],
    ["line", { x1: "232", y1: "184", x2: "203.18", y2: "171.41" }],
    ["line", { x1: "232", y1: "72", x2: "203.18", y2: "84.59" }],
    ["line", { x1: "24", y1: "72", x2: "52.82", y2: "84.59" }],
    ["line", { x1: "24", y1: "184", x2: "52.82", y2: "171.41" }],
    ["line", { x1: "16", y1: "128", x2: "240", y2: "128" }],
  ],
  light: [
    ["circle", { cx: "156", cy: "92", r: "10" }],
    ["circle", { cx: "100", cy: "92", r: "10" }],
    ["line", { x1: "128", y1: "128", x2: "128", y2: "224" }],
    ["path", { d: "M208,144a80,80,0,0,1-160,0V112a80,80,0,0,1,160,0Z" }],
    ["line", { x1: "232", y1: "184", x2: "203.18", y2: "171.41" }],
    ["line", { x1: "232", y1: "72", x2: "203.18", y2: "84.59" }],
    ["line", { x1: "24", y1: "72", x2: "52.82", y2: "84.59" }],
    ["line", { x1: "24", y1: "184", x2: "52.82", y2: "171.41" }],
    ["line", { x1: "16", y1: "128", x2: "240", y2: "128" }],
  ],
  bold: [
    ["circle", { cx: "156", cy: "88", r: "16" }],
    ["circle", { cx: "100", cy: "88", r: "16" }],
    ["line", { x1: "128", y1: "128", x2: "128", y2: "224" }],
    ["path", { d: "M208,144a80,80,0,0,1-160,0V112a80,80,0,0,1,160,0Z" }],
    ["line", { x1: "232", y1: "184", x2: "203.18", y2: "171.41" }],
    ["line", { x1: "232", y1: "72", x2: "203.18", y2: "84.59" }],
    ["line", { x1: "24", y1: "72", x2: "52.82", y2: "84.59" }],
    ["line", { x1: "24", y1: "184", x2: "52.82", y2: "171.41" }],
    ["line", { x1: "16", y1: "128", x2: "240", y2: "128" }],
  ],
  backdrop: {
    duotone: [
      ["path", { d: "M208,128v16a80,80,0,0,1-160,0V128Z", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 1.28,
  whole: {
    rotate: [0, -3, 0.5, 3, 0],
    x: [0, 8, -2, -8, 0],
    y: [0, -10, -2, -10, 0],
    origin: [128, 132],
    duration: 1.28,
    ease: ["easeIn", "linear", "linear", "easeOut"],
    times: [0, 0.2, 0.45, 0.7, 1]
  },
  parts: {
    4: {
      rotate: [0, -8, 9, -4, 0],
      origin: [203, 171],
      duration: 1.2,
      ease: [
        "easeOut",
        "easeInOut",
        "easeInOut",
        [0.22, 1, 0.36, 1]
      ],
      times: [0, 0.18, 0.5, 0.75, 1],
      delay: 0.096
    },
    5: {
      rotate: [0, 10, -5.2, 2.7, 0],
      origin: [203, 84],
      duration: 1.2,
      ease: [
        "easeOut",
        "easeInOut",
        "easeInOut",
        [0.22, 1, 0.36, 1]
      ],
      times: [0, 0.15, 0.45, 0.72, 1]
    },
    6: {
      rotate: [0, -9, 4.7, -2.4, 0],
      origin: [52, 84],
      duration: 1.44,
      ease: [
        "easeOut",
        "easeInOut",
        "easeInOut",
        [0.22, 1, 0.36, 1]
      ],
      times: [0, 0.12, 0.42, 0.7, 1],
      delay: 0.048
    },
    7: {
      rotate: [0, 7, -9, 4, 0],
      origin: [52, 171],
      duration: 1.2,
      ease: [
        "easeOut",
        "easeInOut",
        "easeInOut",
        [0.22, 1, 0.36, 1]
      ],
      times: [0, 0.2, 0.48, 0.76, 1],
      delay: 0.144
    }
  }
};

export const Bug = createAnimatedIcon(
  "Bug",
  GEOMETRY,
  STROKE,
);

export default Bug;
