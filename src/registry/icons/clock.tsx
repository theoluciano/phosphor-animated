"use client";

/**
 * Clock — animated Phosphor icon.
 *
 * Fast-forwards — the hands whip one brisk full turn.
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
    ["circle", { cx: "128", cy: "128", r: "96" }],
    ["polyline", { points: "128 72 128 128 184 128" }],
  ],
  backdrop: {
    duotone: [
      ["circle", { cx: "128", cy: "128", r: "96", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.6,
  parts: {
    1: {
      rotate: [-360, 0],
      origin: [128, 128],
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

export const Clock = createAnimatedIcon(
  "Clock",
  GEOMETRY,
  STROKE,
);

export default Clock;
