"use client";

/**
 * ArrowSquareOut — animated Phosphor icon.
 *
 * Slips out — the arrow drifts toward the corner and recedes.
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
    ["polyline", { points: "216 104 215.99 40.01 152 40" }],
    ["line", { x1: "136", y1: "120", x2: "216", y2: "40" }],
    ["path", { d: "M184,136v72a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8h72" }],
  ],
  thin: [
    ["line", { x1: "136", y1: "120", x2: "216", y2: "40" }],
    ["polyline", { points: "216 104 215.99 40.01 152 40" }],
    ["path", { d: "M184,136v72a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8h72" }],
  ],
  light: [
    ["line", { x1: "136", y1: "120", x2: "216", y2: "40" }],
    ["polyline", { points: "216 104 215.99 40.01 152 40" }],
    ["path", { d: "M184,136v72a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8h72" }],
  ],
  bold: [
    ["line", { x1: "136", y1: "120", x2: "216", y2: "40" }],
    ["polyline", { points: "216 104 215.99 40.01 152 40" }],
    ["path", { d: "M184,140v68a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8h68" }],
  ],
  duotone: [
    ["line", { x1: "136", y1: "120", x2: "216", y2: "40" }],
    ["polyline", { points: "216 104 215.99 40.01 152 40" }],
    ["path", { d: "M184,136v72a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8h72" }],
  ],
  backdrop: {
    duotone: [
      ["rect", { x: "40", y: "72", width: "144", height: "144", rx: "8", opacity: "0.2" }],
    ],
  },
  maps: {
    thin: [1, 0, 2],
    light: [1, 0, 2],
    bold: [1, 0, 2],
    duotone: [1, 0, 2],
  },
};

const STROKE: Choreography = {
  duration: 0.8,
  parts: {
    0: {
      x: [0, 10, 0],
      y: [0, -10, 0],
      scale: [1, 0.92, 1],
      origin: [216, 40],
      duration: 0.8,
      ease: ["easeOut", "easeInOut"],
      times: [0, 0.45, 1]
    },
    1: {
      x: [0, 10, 0],
      y: [0, -10, 0],
      scale: [1, 0.92, 1],
      origin: [216, 40],
      duration: 0.8,
      ease: ["easeOut", "easeInOut"],
      times: [0, 0.45, 1]
    }
  }
};

export const ArrowSquareOut = createAnimatedIcon(
  "ArrowSquareOut",
  GEOMETRY,
  STROKE,
);

export default ArrowSquareOut;
