"use client";

/**
 * Umbrella — animated Phosphor icon.
 *
 * Takes the weather — it rocks under the shaft while the canopy absorbs the hit.
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
    ["path", { d: "M176,200a24,24,0,0,1-48,0V136" }],
    ["path", { d: "M32,136a8,8,0,0,1-8-8.71,104.37,104.37,0,0,1,207.94,0,8,8,0,0,1-8,8.71Z" }],
    ["path", { d: "M88,136c0-72,40-104,40-104s40,32,40,104" }],
  ],
  backdrop: {
    duotone: [
      ["path", { d: "M88,136c0-72,40-104,40-104A104.21,104.21,0,0,0,24,127.29,8,8,0,0,0,32,136Z", opacity: "0.2" }],
      ["path", { d: "M128,32s40,32,40,104h56a8,8,0,0,0,8-8.71A104.21,104.21,0,0,0,128,32Z", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.7,
  whole: {
    rotate: [0, -5, 2.6, -1.4, 0],
    origin: [128, 140],
    ease: [
      "easeOut",
      "easeInOut",
      "easeInOut",
      [0.22, 1, 0.36, 1]
    ],
    times: [0, 0.22, 0.5, 0.76, 1]
  },
  parts: {
    1: {
      scaleY: [1, 0.96, 1.015, 1],
      origin: [128, 136],
      ease: [
        "easeOut",
        [0.34, 1.56, 0.64, 1],
        "easeInOut"
      ],
      times: [0, 0.24, 0.6, 1]
    }
  }
};

export const Umbrella = createAnimatedIcon(
  "Umbrella",
  GEOMETRY,
  STROKE,
);

export default Umbrella;
