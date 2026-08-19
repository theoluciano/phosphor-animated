"use client";

/**
 * Rainbow — animated Phosphor icon.
 *
 * Appears — the bands draw on, inner arc first.
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
    ["path", { d: "M176,184V168a48,48,0,0,0-96,0v16" }],
    ["path", { d: "M208,184V168a80,80,0,0,0-160,0v16" }],
    ["path", { d: "M240,184V168a112,112,0,0,0-224,0v16" }],
  ],
  bold: [
    ["path", { d: "M12,180v-8a116,116,0,0,1,232,0v8" }],
    ["path", { d: "M152,180v-4a24,24,0,0,0-48,0v4" }],
    ["path", { d: "M200,180v-4a72,72,0,0,0-144,0v4" }],
  ],
  backdrop: {
    duotone: [
      ["path", { d: "M240,184V168a112,112,0,0,0-224,0v16H80V168a48,48,0,0,1,96,0v16Z", opacity: "0.2" }],
    ],
  },
  maps: {
    bold: [
  1,
  2,
  null
],
  },
};

const STROKE: Choreography = {
  duration: 0.7,
  parts: {
    0: {
      pathLength: [0, 0.3, 1],
      opacity: [0, 1, 1],
      times: [0, 0.2, 1],
      duration: 0.55,
      ease: [
        [0.22, 1, 0.36, 1],
        [0.22, 1, 0.36, 1]
      ],
      delay: 0
    },
    1: {
      pathLength: [0, 0.3, 1],
      opacity: [0, 1, 1],
      times: [0, 0.2, 1],
      duration: 0.55,
      ease: [
        [0.22, 1, 0.36, 1],
        [0.22, 1, 0.36, 1]
      ],
      delay: 0.12
    },
    2: {
      pathLength: [0, 0.3, 1],
      opacity: [0, 1, 1],
      times: [0, 0.2, 1],
      duration: 0.55,
      ease: [
        [0.22, 1, 0.36, 1],
        [0.22, 1, 0.36, 1]
      ],
      delay: 0.24
    }
  }
};

export const Rainbow = createAnimatedIcon(
  "Rainbow",
  GEOMETRY,
  STROKE,
);

export default Rainbow;
