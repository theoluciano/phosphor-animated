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
  duration: 1.5,
  whole: {
    rotate: [0, -3.5, 1.8, -0.9, 0],
    x: [0, 5, -2.6, 1.4, 0],
    y: [0, -9, -5, -2, 0],
    origin: [40, 216],
    ease: [
      "easeOut",
      "easeInOut",
      "easeInOut",
      [0.22, 1, 0.36, 1]
    ],
    times: [0, 0.24, 0.52, 0.76, 1]
  }
};

export const Leaf = createAnimatedIcon(
  "Leaf",
  GEOMETRY,
  STROKE,
);

export default Leaf;
