"use client";

/**
 * GitBranch — animated Phosphor icon.
 *
 * Draws itself — the new node pops in, the branch traces on, the tip lands.
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
    ["path", { d: "M80,168V144a16,16,0,0,1,16-16h88a16,16,0,0,0,16-16V88" }],
    ["line", { x1: "80", y1: "88", x2: "80", y2: "168" }],
    ["circle", { cx: "80", cy: "64", r: "24" }],
    ["circle", { cx: "200", cy: "64", r: "24" }],
    ["circle", { cx: "80", cy: "192", r: "24" }],
  ],
  backdrop: {
    duotone: [
      ["circle", { cx: "200", cy: "64", r: "24", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 1.36,
  parts: {
    0: {
      pathLength: [1, 0, 1],
      opacity: [1, 0, 1],
      duration: 0.4,
      delay: 0,
      ease: ["easeOut", "easeOut"],
      x: [0, 0, 0],
      y: [0, 0, 0]
    },
    1: {
      opacity: [1, 0, 1],
      duration: 0.4,
      delay: 0,
      ease: ["easeOut", "easeOut"],
      x: [0, 0, 0],
      y: [0, 0, 0]
    },
    2: {
      opacity: [1, 0, 1, 1],
      origin: [128, 78],
      delay: 0,
      duration: 0.88,
      ease: ["easeOut", "easeInOut", "easeInOut"],
      x: [0, 0, 0, 0],
      y: [0, 0, 0, 0]
    },
    3: {
      opacity: [1, 0, 0, 1, 1],
      duration: 0.88,
      delay: 0,
      ease: ["easeIn", "linear", "easeOut", "easeOut"],
      times: [0, 0.051, 0.5, 0.75, 1]
    }
  }
};

export const GitBranch = createAnimatedIcon(
  "GitBranch",
  GEOMETRY,
  STROKE,
);

export default GitBranch;
