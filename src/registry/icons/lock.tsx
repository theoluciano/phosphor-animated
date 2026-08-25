"use client";

/**
 * Lock — animated Phosphor icon.
 *
 * Clicks shut — the shackle presses in and the body shudders tight.
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
    ["rect", { x: "40", y: "88", width: "176", height: "128", rx: "8" }],
    ["circle", { cx: "128", cy: "152", r: "12" }],
    ["path", { d: "M88,88V56a40,40,0,0,1,80,0V88" }],
  ],
  thin: [
    ["rect", { x: "40", y: "88", width: "176", height: "128", rx: "8" }],
    ["circle", { cx: "128", cy: "152", r: "8" }],
    ["path", { d: "M88,88V56a40,40,0,0,1,80,0V88" }],
  ],
  light: [
    ["rect", { x: "40", y: "88", width: "176", height: "128", rx: "8" }],
    ["circle", { cx: "128", cy: "152", r: "10" }],
    ["path", { d: "M88,88V56a40,40,0,0,1,80,0V88" }],
  ],
  bold: [
    ["rect", { x: "40", y: "88", width: "176", height: "128", rx: "8" }],
    ["circle", { cx: "128", cy: "152", r: "16" }],
    ["path", { d: "M88,88V56a40,40,0,0,1,80,0V88" }],
  ],
  backdrop: {
    duotone: [
      ["rect", { x: "40", y: "88", width: "176", height: "128", rx: "8", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 1.04,
  parts: {
    2: {
      y: [0, -11, 0],
      origin: [128, 128],
      duration: 0.48,
      ease: ["easeIn", "easeOut"],
      times: [0, 0.4, 1],
      scaleY: [1, 0.7, 1]
    }
  },
  whole: {
    rotate: [0, -3, 1.6, -0.8, 0],
    scale: [1, 0.965, 1.04, 0.99, 1],
    origin: [128, 128],
    duration: 0.96,
    delay: 0.096,
    ease: ["easeIn", "linear", "linear", "easeOut"],
    times: [0.261, 0.41, 0.538, 0.78, 1]
  }
};

export const Lock = createAnimatedIcon(
  "Lock",
  GEOMETRY,
  STROKE,
);

export default Lock;
