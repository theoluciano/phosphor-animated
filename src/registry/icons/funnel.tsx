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
  duration: 0.6,
  parts: {
    0: {
      scaleX: [1, 1.06, 0.78, 1.03, 1],
      y: [0, -7, 12, -2, 0],
      origin: [128, 48],
      times: [0, 0.2, 0.52, 0.78, 1],
      ease: [
        "easeOut",
        [0.65, 0, 0.35, 1],
        [0.22, 1, 0.36, 1],
        [0.22, 1, 0.36, 1]
      ]
    }
  }
};

export const Funnel = createAnimatedIcon(
  "Funnel",
  GEOMETRY,
  STROKE,
);

export default Funnel;
