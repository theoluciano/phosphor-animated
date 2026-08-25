"use client";

/**
 * Trophy — animated Phosphor icon.
 *
 * Hoisted — the whole trophy is raised and set back down with weight.
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
    ["line", { x1: "96", y1: "224", x2: "160", y2: "224" }],
    ["line", { x1: "128", y1: "184", x2: "128", y2: "224" }],
    ["path", { d: "M58,128H48A32,32,0,0,1,16,96V80a8,8,0,0,1,8-8H56" }],
    ["path", { d: "M198,128h10a32,32,0,0,0,32-32V80a8,8,0,0,0-8-8H200" }],
    ["path", { d: "M56,48H200v63.1c0,39.7-31.75,72.6-71.45,72.9A72,72,0,0,1,56,112Z" }],
  ],
  backdrop: {
    duotone: [
      ["path", { d: "M56,48H200v63.1c0,39.7-31.75,72.6-71.45,72.9A72,72,0,0,1,56,112Z", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 1.12,
  whole: {
    y: [0, 2.5, -11, -9.5, 1.5, 0],
    ease: [
      "easeOut",
      [0.34, 1.56, 0.64, 1],
      "easeInOut",
      "easeInOut",
      [0.22, 1, 0.36, 1]
    ],
    times: [0, 0.14, 0.38, 0.56, 0.8, 1],
    duration: 1.264
  },
  parts: {
    4: {
      scaleY: [1, 1, 0.97, 1.012, 1],
      origin: [128, 184],
      ease: [
        "linear",
        "easeOut",
        [0.22, 1, 0.36, 1],
        "easeInOut"
      ],
      times: [0, 0.58, 0.73, 0.86, 1],
      duration: 1.36
    }
  }
};

export const Trophy = createAnimatedIcon(
  "Trophy",
  GEOMETRY,
  STROKE,
);

export default Trophy;
