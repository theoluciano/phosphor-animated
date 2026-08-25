"use client";

/**
 * List — animated Phosphor icon.
 *
 * Scans — each row's right edge sweeps in and snaps back, top to bottom.
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
    ["line", { x1: "40", y1: "128", x2: "216", y2: "128" }],
    ["line", { x1: "40", y1: "64", x2: "216", y2: "64" }],
    ["line", { x1: "40", y1: "192", x2: "216", y2: "192" }],
  ],
  backdrop: {
    duotone: [
      ["rect", { x: "40", y: "64", width: "176", height: "128", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.88,
  parts: {
    0: {
      scaleX: [1, 0.6, 1.02, 1],
      origin: [40, 128],
      duration: 0.736,
      ease: ["easeIn", "linear", "easeOut"],
      times: [0, 0.42, 0.76, 1],
      delay: 0.128
    },
    1: {
      scaleX: [1, 0.6, 1.02, 1],
      origin: [40, 64],
      duration: 0.736,
      ease: ["easeIn", "linear", "easeOut"],
      times: [0, 0.42, 0.76, 1],
      delay: 0
    },
    2: {
      scaleX: [1, 0.6, 1.02, 1],
      origin: [40, 192],
      duration: 0.736,
      ease: ["easeIn", "linear", "easeOut"],
      times: [0, 0.42, 0.76, 1],
      delay: 0.256
    }
  }
};

export const List = createAnimatedIcon(
  "List",
  GEOMETRY,
  STROKE,
);

export default List;
