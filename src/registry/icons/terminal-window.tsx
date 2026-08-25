"use client";

/**
 * TerminalWindow — animated Phosphor icon.
 *
 * Types — the prompt pops and the line runs out after it.
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
    ["polyline", { points: "80 96 120 128 80 160" }],
    ["line", { x1: "136", y1: "160", x2: "176", y2: "160" }],
    ["rect", { x: "32", y: "48", width: "192", height: "160", rx: "8" }],
  ],
  bold: [
    ["polyline", { points: "80 96 120 128 80 160" }],
    ["line", { x1: "144", y1: "160", x2: "176", y2: "160" }],
    ["rect", { x: "32", y: "48", width: "192", height: "160", rx: "8" }],
  ],
  backdrop: {
    duotone: [
      ["rect", { x: "32", y: "48", width: "192", height: "160", rx: "8", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.96,
  parts: {
    0: {
      scale: [1, 1.14, 1],
      origin: [120, 128],
      duration: 0.48,
      ease: [
        [0.34, 1.56, 0.64, 1],
        [0.22, 1, 0.36, 1]
      ]
    },
    1: {
      pathLength: [0, 1],
      duration: 0.608,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.352
    }
  }
};

export const TerminalWindow = createAnimatedIcon(
  "TerminalWindow",
  GEOMETRY,
  STROKE,
);

export default TerminalWindow;
