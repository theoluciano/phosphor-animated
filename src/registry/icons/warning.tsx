"use client";

/**
 * Warning — animated Phosphor icon.
 *
 * Alerts — the triangle takes the knock and the exclamation snaps back up.
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
    ["path", { d: "M142.41,40.22l87.46,151.87C236,202.79,228.08,216,215.46,216H40.54C27.92,216,20,202.79,26.13,192.09L113.59,40.22C119.89,29.26,136.11,29.26,142.41,40.22Z" }],
    ["line", { x1: "128", y1: "144", x2: "128", y2: "104" }],
    ["circle", { cx: "128", cy: "180", r: "12" }],
  ],
  thin: [
    ["path", { d: "M142.41,40.22l87.46,151.87C236,202.79,228.08,216,215.46,216H40.54C27.92,216,20,202.79,26.13,192.09L113.59,40.22C119.89,29.26,136.11,29.26,142.41,40.22Z" }],
    ["line", { x1: "128", y1: "144", x2: "128", y2: "104" }],
    ["circle", { cx: "128", cy: "180", r: "8" }],
  ],
  light: [
    ["path", { d: "M142.41,40.22l87.46,151.87C236,202.79,228.08,216,215.46,216H40.54C27.92,216,20,202.79,26.13,192.09L113.59,40.22C119.89,29.26,136.11,29.26,142.41,40.22Z" }],
    ["line", { x1: "128", y1: "144", x2: "128", y2: "104" }],
    ["circle", { cx: "128", cy: "180", r: "10" }],
  ],
  bold: [
    ["path", { d: "M142.41,40.22l87.46,151.87C236,202.79,228.08,216,215.46,216H40.54C27.92,216,20,202.79,26.13,192.09L113.59,40.22C119.89,29.26,136.11,29.26,142.41,40.22Z" }],
    ["line", { x1: "128", y1: "136", x2: "128", y2: "104" }],
    ["circle", { cx: "128", cy: "176", r: "16" }],
  ],
  backdrop: {
    duotone: [
      ["path", { d: "M142.41,40.22l87.46,151.87C236,202.79,228.08,216,215.46,216H40.54C27.92,216,20,202.79,26.13,192.09L113.59,40.22C119.89,29.26,136.11,29.26,142.41,40.22Z", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.928,
  parts: {
    0: {
      scaleY: [1, 0.955, 1.03, 0.994, 1],
      origin: [128, 216],
      duration: 0.976,
      ease: [
        "easeOut",
        "easeInOut",
        "easeInOut",
        [0.22, 1, 0.36, 1]
      ],
      times: [0, 0.18, 0.46, 0.72, 1]
    },
    1: {
      y: [0, -9, 4.7, -2.4, 0],
      scaleY: [1, 1.1, 0.93, 1.02, 1],
      origin: [128, 144],
      duration: 0.928,
      ease: [
        "easeOut",
        "easeInOut",
        "easeInOut",
        [0.22, 1, 0.36, 1]
      ],
      times: [0, 0.24, 0.5, 0.75, 1]
    },
    2: {
      y: [0, 7.5, -8.5, 2.2, 0],
      scale: [1, 0.86, 1.2, 0.92, 1],
      origin: [128, 180],
      duration: 0.976,
      ease: [
        "easeOut",
        "easeInOut",
        "easeInOut",
        [0.22, 1, 0.36, 1]
      ],
      times: [0, 0.18, 0.46, 0.72, 1]
    }
  }
};

export const Warning = createAnimatedIcon(
  "Warning",
  GEOMETRY,
  STROKE,
);

export default Warning;
