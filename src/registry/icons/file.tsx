"use client";

/**
 * File — animated Phosphor icon.
 *
 * Hops — the page lifts with a small tilt while the corner fold flares.
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
    ["path", { d: "M200,224H56a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h96l56,56V216A8,8,0,0,1,200,224Z" }],
    ["polyline", { points: "152 32 152 88 208 88" }],
  ],
  bold: [
    ["path", { d: "M200,224H56a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h96l56,56V216A8,8,0,0,1,200,224Z" }],
    ["polyline", { points: "148 32 148 92 208 92" }],
  ],
  backdrop: {
    duotone: [
      ["polygon", { points: "152 32 152 88 208 88 152 32", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.6,
  whole: { rotate: [0, -8, 4, -2, 0], ease: ["easeIn", "linear", "linear", "easeOut"] },
  parts: {
    1: {
      origin: [152, 88],
      duration: 0.45,
      delay: 0.12,
      ease: ["easeIn", "linear", "easeOut"],
      pathLength: [1, 0, 1, 1]
    }
  }
};

export const File = createAnimatedIcon(
  "File",
  GEOMETRY,
  STROKE,
);

export default File;
