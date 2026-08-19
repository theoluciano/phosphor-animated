"use client";

/**
 * Archive — animated Phosphor icon.
 *
 * Opens — the lid pops clear, hangs a beat, then drops shut.
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
    ["rect", { x: "24", y: "56", width: "208", height: "40", rx: "8" }],
    ["path", { d: "M216,96v96a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V96" }],
    ["line", { x1: "104", y1: "136", x2: "152", y2: "136" }],
  ],
  backdrop: {
    duotone: [
      ["path", { d: "M216,96v96a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V96Z", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.6,
  parts: {
    0: {
      y: [0, -17, -15, 0],
      origin: [128, 76],
      duration: 0.6,
      ease: [
        [0.34, 1.56, 0.64, 1],
        "easeInOut",
        [0.65, 0, 0.35, 1]
      ],
      times: [0, 0.3, 0.55, 1]
    },
    2: {
      y: [0, 4, 0],
      origin: [128, 136],
      duration: 0.45,
      ease: [
        [0.22, 1, 0.36, 1],
        "easeInOut"
      ],
      times: [0, 0.45, 1],
      delay: 0.1
    }
  }
};

export const Archive = createAnimatedIcon(
  "Archive",
  GEOMETRY,
  STROKE,
);

export default Archive;
