"use client";

/**
 * WarningCircle — animated Phosphor icon.
 *
 * Alerts — the ring squashes and the exclamation bounces back into place.
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
    ["circle", { cx: "128", cy: "128", r: "96", strokeMiterlimit: "10" }],
    ["line", { x1: "128", y1: "136", x2: "128", y2: "80" }],
    ["circle", { cx: "128", cy: "172", r: "12" }],
  ],
  thin: [
    ["circle", { cx: "128", cy: "128", r: "96" }],
    ["line", { x1: "128", y1: "136", x2: "128", y2: "80" }],
    ["circle", { cx: "128", cy: "172", r: "8" }],
  ],
  light: [
    ["circle", { cx: "128", cy: "128", r: "96" }],
    ["line", { x1: "128", y1: "136", x2: "128", y2: "80" }],
    ["circle", { cx: "128", cy: "172", r: "10" }],
  ],
  bold: [
    ["circle", { cx: "128", cy: "128", r: "96" }],
    ["line", { x1: "128", y1: "132", x2: "128", y2: "80" }],
    ["circle", { cx: "128", cy: "172", r: "16" }],
  ],
  backdrop: {
    duotone: [
      ["circle", { cx: "128", cy: "128", r: "96", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.896,
  parts: {
    0: {
      scale: [1, 0.96, 1.025, 0.996, 1],
      origin: [128, 128],
      duration: 0.976,
      ease: [
        "easeOut",
        "easeInOut",
        "easeInOut",
        [0.22, 1, 0.36, 1]
      ],
      times: [0, 0.18, 0.48, 0.74, 1]
    },
    1: {
      y: [0, -8.5, 4.4, -2.3, 0],
      scaleY: [1, 1.08, 0.94, 1.02, 1],
      origin: [128, 136],
      duration: 0.896,
      ease: [
        "easeOut",
        "easeInOut",
        "easeInOut",
        [0.22, 1, 0.36, 1]
      ],
      times: [0, 0.24, 0.52, 0.76, 1]
    },
    2: {
      y: [0, 7, -8, 2, 0],
      scale: [1, 0.88, 1.18, 0.93, 1],
      origin: [128, 172],
      duration: 0.976,
      ease: [
        "easeOut",
        "easeInOut",
        "easeInOut",
        [0.22, 1, 0.36, 1]
      ],
      times: [0, 0.18, 0.48, 0.74, 1]
    }
  }
};

export const WarningCircle = createAnimatedIcon(
  "WarningCircle",
  GEOMETRY,
  STROKE,
);

export default WarningCircle;
