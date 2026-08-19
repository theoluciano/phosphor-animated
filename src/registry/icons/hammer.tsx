"use client";

/**
 * Hammer — animated Phosphor icon.
 *
 * Strikes — a slow windup, then the head snaps down and recoils.
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
    ["line", { x1: "108", y1: "116", x2: "140", y2: "148" }],
    ["line", { x1: "228.06", y1: "99.94", x2: "188", y2: "140" }],
    ["path", { d: "M40,64,53.77,49.77a88,88,0,0,1,124.46,0l67.43,67.89a8,8,0,0,1,0,11.31L217,157.66a8,8,0,0,1-11.31,0L168,120,66.34,221.66a8,8,0,0,1-11.31,0L34.34,201a8,8,0,0,1,0-11.31L136,88,79.78,31.78" }],
  ],
  bold: [
    ["line", { x1: "108", y1: "116", x2: "140", y2: "148" }],
    ["path", { d: "M40,64,53.77,49.77a88,88,0,0,1,124.46,0l63.43,63.89a8,8,0,0,1,0,11.31L213,153.66a8,8,0,0,1-11.31,0L168,120,66.34,221.66a8,8,0,0,1-11.31,0L34.34,201a8,8,0,0,1,0-11.31L136,88,79.78,31.78" }],
    ["line", { x1: "218.08", y1: "89.92", x2: "178", y2: "130" }],
  ],
  backdrop: {
    duotone: [
      ["path", { d: "M140,148l28-28,20,20,40.06-40.06L178.23,49.77a88,88,0,0,0-98.44-18L136,88l-28,28Z", opacity: "0.2" }],
      ["path", { d: "M79.7,31.83l.09,0h0Z", opacity: "0.2" }],
    ],
  },
  maps: {
    bold: [0, 2, 1],
  },
};

const STROKE: Choreography = {
  duration: 0.8,
  whole: {
    rotate: [0, -5.7, 7.1, 0],
    scale: [1, 0.95, 0.95, 1],
    origin: [56, 200],
    ease: ["easeInOut", "easeOut", "easeOut"],
    times: [0, 0.6, 0.8, 1]
  }
};

export const Hammer = createAnimatedIcon(
  "Hammer",
  GEOMETRY,
  STROKE,
);

export default Hammer;
