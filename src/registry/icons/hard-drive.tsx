"use client";

/**
 * HardDrive — animated Phosphor icon.
 *
 * Reads — the activity light pops and blinks twice.
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
    ["rect", { x: "24", y: "72", width: "208", height: "112", rx: "8" }],
    ["circle", { cx: "188", cy: "128", r: "12" }],
  ],
  thin: [
    ["rect", { x: "24", y: "72", width: "208", height: "112", rx: "8" }],
    ["circle", { cx: "188", cy: "128", r: "8" }],
  ],
  light: [
    ["rect", { x: "24", y: "72", width: "208", height: "112", rx: "8" }],
    ["circle", { cx: "188", cy: "128", r: "10" }],
  ],
  bold: [
    ["rect", { x: "24", y: "72", width: "208", height: "112", rx: "8" }],
    ["circle", { cx: "180", cy: "128", r: "16" }],
  ],
  backdrop: {
    duotone: [
      ["rect", { x: "24", y: "72", width: "208", height: "112", rx: "8", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 1.04,
  parts: {
    1: {
      opacity: [1, 0, 1, 0, 1],
      origin: [188, 128],
      ease: ["linear", "linear", "linear", "linear"],
      duration: 0.96
    }
  }
};

export const HardDrive = createAnimatedIcon(
  "HardDrive",
  GEOMETRY,
  STROKE,
);

export default HardDrive;
