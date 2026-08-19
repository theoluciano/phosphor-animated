"use client";

/**
 * PaperPlaneTilt — animated Phosphor icon.
 *
 * Sends — flies out of frame and a fresh one arrives.
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
    ["line", { x1: "108", y1: "148", x2: "160", y2: "96" }],
    ["path", { d: "M223.69,42.18a8,8,0,0,0-9.87-9.87l-192,58.22a8,8,0,0,0-1.25,14.93L108,148l42.54,87.42a8,8,0,0,0,14.93-1.25Z" }],
  ],
  backdrop: {
    duotone: [
      ["path", { d: "M223.69,42.18a8,8,0,0,0-9.87-9.87l-192,58.22a8,8,0,0,0-1.25,14.93L108,148l42.54,87.42a8,8,0,0,0,14.93-1.25Z", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.8,
  whole: {
    y: [0, -180, -180, -180, 0, 0],
    origin: [128, 128],
    duration: 0.85,
    ease: ["easeIn", "linear", "easeOut", "easeOut", "easeOut"],
    x: [0, 180, 180, 180, 0, 0],
    opacity: [1, 1, 0, 0, 0, 1]
  }
};

export const PaperPlaneTilt = createAnimatedIcon(
  "PaperPlaneTilt",
  GEOMETRY,
  STROKE,
);

export default PaperPlaneTilt;
