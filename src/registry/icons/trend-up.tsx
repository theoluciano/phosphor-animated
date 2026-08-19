"use client";

/**
 * TrendUp — animated Phosphor icon.
 *
 * Redraws — the line retraces its climb while the frame lifts with it.
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
    ["polyline", { points: "232 56 136 152 96 112 24 184" }],
    ["polyline", { points: "232 120 232 56 168 56" }],
  ],
  duotone: [
    ["polygon", { points: "232 120 232 56 168 56 232 120" }],
    ["polyline", { points: "200 88 136 152 96 112 24 184" }],
  ],
  backdrop: {
    duotone: [
      ["polyline", { points: "232 56 168 56 232 120 232 56", opacity: "0.2" }],
    ],
  },
  maps: {
    duotone: [1, 0],
  },
};

const STROKE: Choreography = {
  duration: 0.7,
  parts: {
    0: {
      pathLength: [0, 1],
      origin: [128, 128],
      duration: 0.45,
      ease: [0.65, 0, 0.35, 1]
    },
    1: {
      pathLength: [0, 0, 1],
      origin: [232, 56],
      duration: 0.7,
      ease: [
        "linear",
        [0.22, 1, 0.36, 1]
      ],
      times: [0, 0.55, 1]
    }
  },
  whole: {
    x: [0, 10, 0],
    y: [0, -10, 0],
    duration: 0.55,
    ease: [
      "easeOut",
      [0.65, 0, 0.35, 1]
    ]
  }
};

export const TrendUp = createAnimatedIcon(
  "TrendUp",
  GEOMETRY,
  STROKE,
);

export default TrendUp;
