"use client";

/**
 * Funnel — animated Phosphor icon.
 *
 * Squeezes — pinches in and pushes down, forcing everything through.
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
    ["path", { d: "M34.1,61.38A8,8,0,0,1,40,48H216a8,8,0,0,1,5.92,13.38L152,136v58.65a8,8,0,0,1-3.56,6.66l-32,21.33A8,8,0,0,1,104,216V136Z" }],
  ],
  backdrop: {
    duotone: [
      ["path", { d: "M34.1,61.38A8,8,0,0,1,40,48H216a8,8,0,0,1,5.92,13.38L152,136v58.65a8,8,0,0,1-3.56,6.66l-32,21.33A8,8,0,0,1,104,216V136Z", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.96,
  parts: {
    0: {
      scaleX: [1, 1.05, 0.8, 1.05, 1],
      y: [0, -7, 12, -7, 0],
      origin: [128, 48],
      times: [0, 0.2, 0.52, 0.78, 1],
      ease: ["easeIn", "linear", "linear", "easeOut"]
    }
  }
};

export const Funnel = createAnimatedIcon(
  "Funnel",
  GEOMETRY,
  STROKE,
);

export default Funnel;
