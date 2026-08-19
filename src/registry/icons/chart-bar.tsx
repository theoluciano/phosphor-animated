"use client";

/**
 * ChartBar — animated Phosphor icon.
 *
 * Redraws — the columns wipe away and rise again in turn.
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
    ["polyline", { points: "48 208 48 136 96 136" }],
    ["line", { x1: "224", y1: "208", x2: "32", y2: "208" }],
    ["polyline", { points: "96 208 96 88 152 88" }],
    ["polyline", { points: "152 208 152 40 208 40 208 208" }],
  ],
  backdrop: {
    duotone: [
      ["rect", { x: "152", y: "40", width: "56", height: "168", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.7,
  parts: {
    0: {
      pathLength: [1, 0, 1],
      opacity: [1, 0, 1],
      origin: [128, 208],
      duration: 0.5,
      ease: ["easeIn", "easeOut"],
      times: [0, 0.4, 1],
      delay: 0
    },
    2: {
      pathLength: [1, 0, 1],
      opacity: [1, 0, 1],
      origin: [128, 208],
      duration: 0.5,
      ease: [
        "easeInOut",
        [0.22, 1, 0.36, 1]
      ],
      times: [0, 0.4, 1],
      delay: 0.1
    },
    3: {
      pathLength: [1, 0, 1],
      opacity: [1, 0, 1],
      origin: [128, 208],
      duration: 0.5,
      ease: [
        "easeInOut",
        [0.22, 1, 0.36, 1]
      ],
      times: [0, 0.4, 1],
      delay: 0.2
    }
  }
};

export const ChartBar = createAnimatedIcon(
  "ChartBar",
  GEOMETRY,
  STROKE,
);

export default ChartBar;
