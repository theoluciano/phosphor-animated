"use client";

/**
 * ChartPieSlice — animated Phosphor icon.
 *
 * Breaks out — the slice springs free, hangs a beat, and rejoins.
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
    ["path", { d: "M33.6,145.5A96,96,0,0,1,96,37.5v72Z" }],
    ["path", { d: "M128,128.42V32A96,96,0,1,1,45.22,176.64Z" }],
  ],
  bold: [
    ["path", { d: "M32.42,137q-.42-4.44-.42-9A95.93,95.93,0,0,1,88,40.74v65.41Z" }],
    ["path", { d: "M128,128.42V32A96,96,0,1,1,45.22,176.64Z" }],
  ],
  backdrop: {
    duotone: [
      ["path", { d: "M33.6,145.5A96,96,0,0,1,96,37.5v72Z", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.96,
  parts: {
    0: {
      x: [0, -12, -12, 0],
      y: [0, -12, -12, 0],
      origin: [128, 128],
      ease: ["easeIn", "linear", "easeOut"],
      times: [0, 0.3, 0.55, 1]
    }
  }
};

export const ChartPieSlice = createAnimatedIcon(
  "ChartPieSlice",
  GEOMETRY,
  STROKE,
);

export default ChartPieSlice;
