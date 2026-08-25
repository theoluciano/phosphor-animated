"use client";

/**
 * Mouse — animated Phosphor icon.
 *
 * Clicks — the whole mouse presses down and springs back, wheel first.
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
    ["rect", { x: "56", y: "24", width: "144", height: "208", rx: "56" }],
    ["line", { x1: "128", y1: "112", x2: "128", y2: "24" }],
    ["line", { x1: "56", y1: "112", x2: "200", y2: "112" }],
  ],
  backdrop: {
    duotone: [
      ["path", { d: "M56,112H200v64a56,56,0,0,1-56,56H112a56,56,0,0,1-56-56Z", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.35,
  whole: {
    origin: [128, 128],
    duration: 0.7,
    ease: ["easeIn", "linear", "linear", "easeOut"],
    times: [0, 0.5, 0.64, 0.86, 1],
    rotate: [0, -7.6, 4, -2.1, 0]
  },
  parts: {
    1: {
      origin: [128, 112],
      duration: 0.79,
      ease: [
        "easeOut",
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1]
      ],
      pathLength: [1, 0, 1, 1]
    }
  }
};

export const Mouse = createAnimatedIcon(
  "Mouse",
  GEOMETRY,
  STROKE,
);

export default Mouse;
