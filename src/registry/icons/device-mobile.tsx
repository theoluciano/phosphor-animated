"use client";

/**
 * DeviceMobile — animated Phosphor icon.
 *
 * Buzzes — the handset rattles, then settles.
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
    ["rect", { x: "64", y: "24", width: "128", height: "208", rx: "16" }],
    ["line", { x1: "64", y1: "56", x2: "192", y2: "56" }],
    ["line", { x1: "64", y1: "200", x2: "192", y2: "200" }],
  ],
  bold: [
    ["rect", { x: "64", y: "24", width: "128", height: "208", rx: "16" }],
    ["line", { x1: "64", y1: "64", x2: "192", y2: "64" }],
    ["line", { x1: "64", y1: "192", x2: "192", y2: "192" }],
  ],
  backdrop: {
    duotone: [
      ["rect", { x: "64", y: "56", width: "128", height: "144", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.6,
  whole: {
    x: [0, -7, 3.6, -1.9, 1, 0],
    origin: [128, 128],
    duration: 0.9,
    ease: [
      "easeOut",
      "easeInOut",
      "easeInOut",
      "easeInOut",
      [0.22, 1, 0.36, 1]
    ],
    times: [0, 0.12, 0.36, 0.6, 0.8, 1]
  }
};

export const DeviceMobile = createAnimatedIcon(
  "DeviceMobile",
  GEOMETRY,
  STROKE,
);

export default DeviceMobile;
