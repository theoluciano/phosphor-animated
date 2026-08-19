"use client";

/**
 * ChartLine — animated Phosphor icon.
 *
 * Replots — the trend line fades in as it draws across the axes.
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
    ["polyline", { points: "224 208 32 208 32 48" }],
    ["polyline", { points: "224 96 160 152 96 104 32 160" }],
  ],
  backdrop: {
    duotone: [
      ["path", { d: "M32,48H208a16,16,0,0,1,16,16V208a0,0,0,0,1,0,0H32a0,0,0,0,1,0,0V48A0,0,0,0,1,32,48Z", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.55,
  parts: {
    1: {
      pathLength: [0, 1, 1],
      opacity: [0, 1, 1],
      origin: [128, 128],
      duration: 0.45,
      delay: 0.1,
      ease: ["easeIn", "easeOut"]
    }
  }
};

export const ChartLine = createAnimatedIcon(
  "ChartLine",
  GEOMETRY,
  STROKE,
);

export default ChartLine;
