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
  duration: 1.12,
  parts: {
    0: { origin: [128, 128], duration: 0.72, ease: [
        [0.65, 0, 0.35, 1]
      ] },
    1: { origin: [232, 56], duration: 0.7, ease: ["linear"] }
  },
  whole: {
    x: [0, 1, 0],
    y: [0, -38, 0],
    duration: 0.7,
    ease: ["easeIn", "easeOut"],
    scale: [1, 1.1, 1]
  }
};

export const TrendUp = createAnimatedIcon(
  "TrendUp",
  GEOMETRY,
  STROKE,
);

export default TrendUp;
