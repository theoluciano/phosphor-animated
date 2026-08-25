"use client";

/**
 * Fire — animated Phosphor icon.
 *
 * Ignites — the flame draws itself on, the inner tongue catching last.
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
    ["path", { d: "M136,192c20-3.37,36.61-20,40-40" }],
    ["path", { d: "M112,96l26.27-72C159.86,41.92,208,88.15,208,144a80,80,0,0,1-160,0c0-30.57,14.42-58.26,31-80Z" }],
  ],
  bold: [
    ["path", { d: "M166.17,156A40.11,40.11,0,0,1,140,182.17" }],
    ["path", { d: "M112,96l26.27-72C159.86,41.92,208,88.15,208,144a80,80,0,0,1-160,0c0-30.57,14.42-58.26,31-80Z" }],
  ],
  backdrop: {
    duotone: [
      ["path", { d: "M112,96l26.27-72C159.86,41.92,208,88.15,208,144a80,80,0,0,1-160,0c0-30.57,14.42-58.26,31-80Z", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.8,
  parts: {
    0: {
      pathLength: [1, 0, 1, 1],
      opacity: [1, 0, 1, 1],
      times: [0, 0.45, 0.6, 1],
      ease: ["linear", "easeOut", "easeOut"],
      duration: 1.168
    },
    1: { duration: 0.88, ease: ["easeIn", "linear", "linear", "linear", "easeOut"] }
  },
  whole: {
    duration: 0.88,
    ease: ["easeIn", "linear", "linear", "linear", "linear", "linear", "easeOut"],
    scale: [1, 1.05, 0.95, 1, 0.95, 1, 1, 1],
    rotate: [0, -8, 8, -8, 8, -4, 4, 0],
    origin: [128, 216],
    x: [0, 0, 0, 0, 0, 0, 0, 0],
    y: [0, 0, 0, 0, 0, 0, 0, 0]
  }
};

export const Fire = createAnimatedIcon(
  "Fire",
  GEOMETRY,
  STROKE,
);

export default Fire;
