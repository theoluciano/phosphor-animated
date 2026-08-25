"use client";

/**
 * Cube — animated Phosphor icon.
 *
 * Draws itself — the outline first, then the folded inner edges.
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
    ["polyline", { points: "32.7 76.92 128 129.08 223.3 76.92" }],
    ["path", { d: "M131.84,25l88,48.18a8,8,0,0,1,4.16,7v95.64a8,8,0,0,1-4.16,7l-88,48.18a8,8,0,0,1-7.68,0l-88-48.18a8,8,0,0,1-4.16-7V80.18a8,8,0,0,1,4.16-7l88-48.18A8,8,0,0,1,131.84,25Z" }],
    ["line", { x1: "128", y1: "129.09", x2: "128", y2: "232" }],
  ],
  backdrop: {
    duotone: [
      ["path", { d: "M128,129.09V232a8,8,0,0,1-3.84-1l-88-48.16a8,8,0,0,1-4.16-7V80.2a8,8,0,0,1,.7-3.27Z", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 1.12,
  parts: {
    0: {
      pathLength: [0, 0.5, 1],
      opacity: [0, 1, 1],
      duration: 0.592,
      ease: ["easeIn", "easeOut"],
      times: [0, 0.3, 1],
      delay: 0.448
    },
    1: {
      pathLength: [0, 0.5, 1],
      opacity: [0, 1, 1],
      duration: 0.8,
      ease: ["easeIn", "easeOut"],
      times: [0, 0.22, 1]
    },
    2: {
      pathLength: [0, 0.5, 1],
      opacity: [0, 1, 1],
      duration: 0.592,
      ease: ["easeIn", "easeOut"],
      times: [0, 0.3, 1],
      delay: 0.672
    }
  }
};

export const Cube = createAnimatedIcon(
  "Cube",
  GEOMETRY,
  STROKE,
);

export default Cube;
