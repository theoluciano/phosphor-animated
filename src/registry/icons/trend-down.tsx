"use client";

/**
 * TrendDown — animated Phosphor icon.
 *
 * Redraws — the line retraces its fall while the frame dips with it.
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
    ["polyline", { points: "232 192 136 96 96 136 24 64" }],
    ["polyline", { points: "232 128 232 192 168 192" }],
  ],
  duotone: [
    ["polygon", { points: "232 128 232 192 168 192 232 128" }],
    ["polyline", { points: "200 160 136 96 96 136 24 64" }],
  ],
  backdrop: {
    duotone: [
      ["polygon", { points: "232 128 232 192 168 192 232 128", opacity: "0.2" }],
    ],
  },
  maps: {
    duotone: [1, 0],
  },
};

const STROKE: Choreography = {
  duration: 1.12,
  parts: {
    0: { origin: [128, 128], duration: 0.72, ease: [0.65, 0, 0.35, 1] },
    1: {
      origin: [232, 192],
      duration: 0.7,
      ease: [
        "linear",
        [0.22, 1, 0.36, 1]
      ],
      times: [0, 0.55, 1]
    }
  },
  whole: {
    scale: [1, 0.9, 1],
    x: [0, 1, 0],
    y: [0, 38, 0],
    duration: 0.7,
    ease: ["easeIn", "easeOut"]
  }
};

export const TrendDown = createAnimatedIcon(
  "TrendDown",
  GEOMETRY,
  STROKE,
);

export default TrendDown;
