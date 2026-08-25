"use client";

/**
 * Alarm — animated Phosphor icon.
 *
 * Rattles — the whole clock rocks gently side to side while the bells flick.
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
    ["circle", { cx: "128", cy: "136", r: "88" }],
    ["line", { x1: "56", y1: "32", x2: "24", y2: "64" }],
    ["line", { x1: "200", y1: "32", x2: "232", y2: "64" }],
    ["polyline", { points: "128 80 128 136 184 136" }],
  ],
  bold: [
    ["circle", { cx: "128", cy: "136", r: "88" }],
    ["line", { x1: "56", y1: "32", x2: "24", y2: "64" }],
    ["line", { x1: "200", y1: "32", x2: "232", y2: "64" }],
    ["polyline", { points: "128 88 128 136 176 136" }],
  ],
  backdrop: {
    duotone: [
      ["circle", { cx: "128", cy: "136", r: "88", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 1.28,
  whole: {
    rotate: [0, -3, 1.6, -0.8, 0.4, 0],
    origin: [128, 224],
    ease: [
      "easeOut",
      "easeInOut",
      "easeInOut",
      "easeInOut",
      [0.22, 1, 0.36, 1]
    ],
    times: [0, 0.16, 0.42, 0.66, 0.85, 1]
  },
  parts: {
    1: {
      rotate: [0, -8, 4.2, -2.2, 0],
      origin: [40, 48],
      duration: 1.232,
      ease: [
        "easeOut",
        "easeInOut",
        "easeInOut",
        [0.22, 1, 0.36, 1]
      ],
      times: [0, 0.143, 0.429, 0.714, 1]
    },
    2: {
      rotate: [0, 8, -4.2, 2.2, 0],
      origin: [216, 48],
      duration: 1.232,
      ease: [
        "easeOut",
        "easeInOut",
        "easeInOut",
        [0.22, 1, 0.36, 1]
      ],
      times: [0, 0.143, 0.429, 0.714, 1]
    }
  }
};

export const Alarm = createAnimatedIcon(
  "Alarm",
  GEOMETRY,
  STROKE,
);

export default Alarm;
