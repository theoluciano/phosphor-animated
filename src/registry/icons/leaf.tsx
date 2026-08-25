"use client";

/**
 * Leaf — animated Phosphor icon.
 *
 * Drifts — tilting and travelling at once, the way a leaf falls.
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
    ["path", { d: "M63.81,192.19c-47.89-79.81,16-159.62,151.64-151.64C223.43,176.23,143.62,240.08,63.81,192.19Z" }],
    ["line", { x1: "160", y1: "96", x2: "40", y2: "216" }],
  ],
  backdrop: {
    duotone: [
      ["path", { d: "M63.81,192.19c-47.89-79.81,16-159.62,151.64-151.64C223.43,176.23,143.62,240.08,63.81,192.19Z", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 2.4,
  whole: {
    origin: [128, 128],
    ease: ["easeIn", "linear", "linear", "linear", "easeOut"],
    scale: [1, 1, 1, 1.1, 0.97, 1],
    duration: 0.704
  },
  parts: {
    0: {
      ease: ["easeIn"],
      pathLength: [0, 1],
      duration: 0.704,
      times: [0, 0.63]
    }
  }
};

export const Leaf = createAnimatedIcon(
  "Leaf",
  GEOMETRY,
  STROKE,
);

export default Leaf;
