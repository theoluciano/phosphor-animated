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
  duration: 0.65,
  parts: {
    1: {
      opacity: [1, 0.15, 1, 0.35, 1],
      scale: [1, 1.2, 1, 1.1, 1],
      origin: [188, 128],
      ease: [
        [0.34, 1.56, 0.64, 1],
        "easeInOut",
        "easeInOut",
        [0.22, 1, 0.36, 1]
      ],
      times: [0, 0.25, 0.5, 0.7, 1]
    }
  }
};

export const HardDrive = createAnimatedIcon(
  "HardDrive",
  GEOMETRY,
  STROKE,
);

export default HardDrive;
