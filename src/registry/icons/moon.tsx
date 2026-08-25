"use client";

/**
 * Moon — animated Phosphor icon.
 *
 * Rocks side to side, a crescent settling into the night.
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
    ["path", { d: "M108.11,28.11A96.09,96.09,0,0,0,227.89,147.89,96,96,0,1,1,108.11,28.11Z" }],
  ],
  backdrop: {
    duotone: [
      ["path", { d: "M108.11,28.11A96.09,96.09,0,0,0,227.89,147.89,96,96,0,1,1,108.11,28.11Z", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.8,
  parts: {
    0: {
      rotate: [0, -7.6, 4, -2.1, 0],
      origin: [128, 128],
      duration: 0.8,
      ease: [
        "easeOut",
        "easeInOut",
        "easeInOut",
        [0.22, 1, 0.36, 1]
      ],
      times: [0, 0.18, 0.48, 0.74, 1]
    }
  }
};

export const Moon = createAnimatedIcon(
  "Moon",
  GEOMETRY,
  STROKE,
);

export default Moon;
