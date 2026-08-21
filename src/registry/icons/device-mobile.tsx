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
    origin: [128, 128],
    duration: 0.6,
    ease: ["easeIn", "linear", "linear", "linear", "linear", "linear", "easeOut"],
    rotate: [0, -8, 8, -8, 8, -4, 4, 0]
  }
};

export const DeviceMobile = createAnimatedIcon(
  "DeviceMobile",
  GEOMETRY,
  STROKE,
);

export default DeviceMobile;
