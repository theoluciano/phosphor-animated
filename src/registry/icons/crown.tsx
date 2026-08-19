"use client";

/**
 * Crown — animated Phosphor icon.
 *
 * Bows — one restrained dip and lift while the jewels flash in turn.
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
    ["circle", { cx: "128", cy: "52", r: "20" }],
    ["circle", { cx: "220", cy: "80", r: "20" }],
    ["circle", { cx: "36", cy: "80", r: "20" }],
    ["polyline", { points: "120.02 70.35 88 144 48.61 95.52" }],
    ["polyline", { points: "207.39 95.52 168 144 135.98 70.35" }],
    ["path", { d: "M39.29,99.73l15.6,93.59A8,8,0,0,0,62.78,200H193.22a8,8,0,0,0,7.89-6.68l15.6-93.59" }],
  ],
  backdrop: {
    duotone: [
      ["path", { d: "M207.41,95.53h0L168,144,136,70.35h0a20,20,0,0,1-15.92,0h0L88,144,48.61,95.52h0a19.82,19.82,0,0,1-9.22,4.16l-.08,0,15.6,93.59A8,8,0,0,0,62.78,200H193.22a8,8,0,0,0,7.89-6.68l15.6-93.59-.08,0A19.82,19.82,0,0,1,207.41,95.53Z", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.8,
  whole: {
    y: [0, 4, -5, -1, 0],
    scale: [1, 0.99, 1.02, 1.005, 1],
    origin: [128, 128],
    ease: [
      "easeOut",
      [0.65, 0, 0.35, 1],
      [0.65, 0, 0.35, 1],
      [0.65, 0, 0.35, 1]
    ],
    times: [0, 0.2, 0.52, 0.78, 1]
  },
  parts: {
    0: {
      scale: [1, 1.2, 0.97, 1],
      origin: [128, 52],
      duration: 0.4,
      ease: [
        [0.34, 1.56, 0.64, 1],
        "easeInOut",
        [0.22, 1, 0.36, 1]
      ],
      times: [0, 0.4, 0.7, 1],
      delay: 0.18
    },
    1: {
      scale: [1, 1.2, 0.97, 1],
      origin: [220, 80],
      duration: 0.4,
      ease: [
        [0.34, 1.56, 0.64, 1],
        "easeInOut",
        [0.22, 1, 0.36, 1]
      ],
      times: [0, 0.4, 0.7, 1],
      delay: 0.26
    },
    2: {
      scale: [1, 1.2, 0.97, 1],
      origin: [36, 80],
      duration: 0.4,
      ease: [
        [0.34, 1.56, 0.64, 1],
        "easeInOut",
        [0.22, 1, 0.36, 1]
      ],
      times: [0, 0.4, 0.7, 1],
      delay: 0.1
    }
  }
};

export const Crown = createAnimatedIcon(
  "Crown",
  GEOMETRY,
  STROKE,
);

export default Crown;
