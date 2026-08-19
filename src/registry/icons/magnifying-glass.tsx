"use client";

/**
 * MagnifyingGlass — animated Phosphor icon.
 *
 * Sweeps a slow arc, the way you search a page.
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
    ["circle", { cx: "112", cy: "112", r: "80" }],
    ["line", { x1: "168.57", y1: "168.57", x2: "224", y2: "224" }],
  ],
  backdrop: {
    duotone: [
      ["circle", { cx: "112", cy: "112", r: "80", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.9,
  whole: {
    x: [0, -20, 20, 20, -20, 0],
    y: [0, -20, -20, 20, 20, 0],
    origin: [112, 112],
    duration: 1,
    ease: ["easeInOut", "easeInOut", "easeInOut", "easeInOut", "easeInOut"]
  }
};

export const MagnifyingGlass = createAnimatedIcon(
  "MagnifyingGlass",
  GEOMETRY,
  STROKE,
);

export default MagnifyingGlass;
