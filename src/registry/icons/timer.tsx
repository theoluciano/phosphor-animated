"use client";

/**
 * Timer — animated Phosphor icon.
 *
 * Starts — the crown presses down and the hand sweeps a full turn.
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
    ["line", { x1: "128", y1: "136", x2: "168", y2: "96" }],
    ["line", { x1: "104", y1: "16", x2: "152", y2: "16" }],
  ],
  bold: [
    ["circle", { cx: "128", cy: "140", r: "84" }],
    ["line", { x1: "128", y1: "136", x2: "156", y2: "108" }],
    ["line", { x1: "104", y1: "16", x2: "152", y2: "16" }],
  ],
  backdrop: {
    duotone: [
      ["circle", { cx: "128", cy: "136", r: "88", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 1.344,
  parts: {
    1: {
      rotate: [-360, 0],
      origin: [128, 136],
      duration: 1.152,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.192
    },
    2: {
      y: [0, 8, 0],
      scaleX: [1, 0.9, 1],
      origin: [128, 16],
      duration: 0.48,
      ease: [
        "easeOut",
        [0.34, 1.56, 0.64, 1]
      ],
      times: [0, 0.36, 1]
    }
  }
};

export const Timer = createAnimatedIcon(
  "Timer",
  GEOMETRY,
  STROKE,
);

export default Timer;
