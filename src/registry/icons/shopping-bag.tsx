"use client";

/**
 * ShoppingBag — animated Phosphor icon.
 *
 * Picked up — swings once from the handle and settles.
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
    ["rect", { x: "32", y: "48", width: "192", height: "160", rx: "8" }],
    ["path", { d: "M168,88a40,40,0,0,1-80,0" }],
  ],
  backdrop: {
    duotone: [
      ["rect", { x: "32", y: "48", width: "192", height: "160", rx: "8", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 1.12,
  whole: {
    rotate: [0, 5, -2.6, 1.4, 0],
    origin: [128, 60],
    duration: 1.36,
    ease: [
      "easeOut",
      "easeInOut",
      "easeInOut",
      [0.22, 1, 0.36, 1]
    ],
    times: [0, 0.143, 0.429, 0.714, 1]
  }
};

export const ShoppingBag = createAnimatedIcon(
  "ShoppingBag",
  GEOMETRY,
  STROKE,
);

export default ShoppingBag;
