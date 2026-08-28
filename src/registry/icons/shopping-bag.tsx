"use client";

/**
 * ShoppingBag — animated Phosphor icon.
 *
 * Picked up — the handle lifts over the top edge as the bag rocks once and settles.
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
    rotate: [0, 7, -2.6, 1.4, 0],
    origin: [128, 60],
    duration: 1.36,
    ease: ["easeIn", "linear", "linear", "easeOut"],
    times: [0, 0.143, 0.429, 0.714, 1]
  },
  parts: {
    1: {
      origin: [128, 83],
      duration: 0.8,
      ease: ["easeIn", "easeOut"],
      scaleY: [1, -1, 1]
    }
  }
};

export const ShoppingBag = createAnimatedIcon(
  "ShoppingBag",
  GEOMETRY,
  STROKE,
);

export default ShoppingBag;
