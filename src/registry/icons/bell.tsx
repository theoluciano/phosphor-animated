"use client";

/**
 * Bell — animated Phosphor icon.
 *
 * Rings — the whole bell swings wide from its mount, left first.
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
    ["path", { d: "M96,192a32,32,0,0,0,64,0" }],
    ["path", { d: "M56,104a72,72,0,0,1,144,0c0,35.82,8.3,64.6,14.9,76A8,8,0,0,1,208,192H48a8,8,0,0,1-6.88-12C47.71,168.6,56,139.81,56,104Z" }],
  ],
  bold: [
    ["path", { d: "M96,184v8a32,32,0,0,0,64,0v-8" }],
    ["path", { d: "M56,104a72,72,0,0,1,144,0c0,35.82,8.3,56.6,14.9,68A8,8,0,0,1,208,184H48a8,8,0,0,1-6.88-12C47.71,160.6,56,139.81,56,104Z" }],
  ],
  backdrop: {
    duotone: [
      ["path", { d: "M56,104a72,72,0,0,1,144,0c0,35.82,8.3,64.6,14.9,76A8,8,0,0,1,208,192H48a8,8,0,0,1-6.88-12C47.71,168.6,56,139.81,56,104Z", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.6,
  whole: {
    rotate: [0, -4.4, 2.3, -1.2, 0],
    origin: [128, 48],
    duration: 0.6,
    ease: [
      "easeInOut",
      "easeInOut",
      "easeInOut",
      [0.22, 1, 0.36, 1]
    ],
    times: [0, 0.22, 0.5, 0.78, 1]
  },
  parts: {
    0: {
      rotate: [0, -4.8, 2.5, -1.3, 0],
      origin: [128, 48],
      delay: 0.04,
      duration: 0.65,
      times: [0, 0.22, 0.5, 0.78, 1],
      ease: [
        "easeInOut",
        "easeInOut",
        "easeInOut",
        [0.22, 1, 0.36, 1]
      ]
    }
  }
};

export const Bell = createAnimatedIcon(
  "Bell",
  GEOMETRY,
  STROKE,
);

export default Bell;
