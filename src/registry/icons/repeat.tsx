"use client";

/**
 * Repeat — animated Phosphor icon.
 *
 * Loops — the cycle turns once around and springs into place.
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
    ["polyline", { points: "200 88 224 64 200 40" }],
    ["path", { d: "M32,128A64,64,0,0,1,96,64H224" }],
    ["polyline", { points: "56 168 32 192 56 216" }],
    ["path", { d: "M224,128a64,64,0,0,1-64,64H32" }],
  ],
  backdrop: {
    duotone: [
      ["path", { d: "M32,128A64,64,0,0,1,96,64H224v64a64,64,0,0,1-64,64H32Z", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 1.28,
  whole: {
    rotate: [-360, 9, 0],
    origin: [128, 128],
    duration: 1,
    times: [0, 0.72, 1],
    ease: ["easeIn", "easeOut"]
  }
};

export const Repeat = createAnimatedIcon(
  "Repeat",
  GEOMETRY,
  STROKE,
);

export default Repeat;
