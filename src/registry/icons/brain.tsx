"use client";

/**
 * Brain — animated Phosphor icon.
 *
 * Thinks — one deep breath while the folds retract and redraw.
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
    ["path", { d: "M88,136a40,40,0,1,1-40,40v-6.73" }],
    ["path", { d: "M168,136a40,40,0,1,0,40,40v-6.73" }],
    ["path", { d: "M72,172H64A48,48,0,0,1,48,78.73V72a40,40,0,0,1,80,0V176" }],
    ["path", { d: "M184,172h8a48,48,0,0,0,16-93.27V72a40,40,0,0,0-80,0" }],
    ["path", { d: "M200,112h-4a28,28,0,0,1-28-28V80" }],
    ["path", { d: "M56,112h4A28,28,0,0,0,88,84V80" }],
  ],
  bold: [
    ["path", { d: "M72,172H64A48,48,0,0,1,48,78.73V72a40,40,0,0,1,80,0V176" }],
    ["path", { d: "M184,172h8a48,48,0,0,0,16-93.27V72a40,40,0,0,0-80,0" }],
    ["path", { d: "M196,116a28,28,0,0,1-28-28V84" }],
    ["path", { d: "M60,116A28,28,0,0,0,88,88V84" }],
    ["path", { d: "M152,139.33A40,40,0,1,0,208,176v-6.73" }],
    ["path", { d: "M104,139.33A40,40,0,1,1,48,176v-6.73" }],
  ],
  backdrop: {
    duotone: [
      ["path", { d: "M208,78.73V72a40,40,0,0,0-80,0,40,40,0,0,0-80,0v6.73a48,48,0,0,0,0,90.54h0V176a40,40,0,0,0,80,0,40,40,0,0,0,80,0v-6.73h0a48,48,0,0,0,0-90.54Z", opacity: "0.2" }],
    ],
  },
  maps: {
    bold: [
  null,
  5,
  0,
  1,
  2,
  3
],
  },
};

const STROKE: Choreography = {
  duration: 1.92,
  whole: {
    scale: [1, 1.06, 1],
    origin: [128, 128],
    duration: 1.76,
    ease: ["easeInOut", "easeInOut"],
    times: [0, 0.5, 1]
  },
  parts: {
    0: {
      pathLength: [1, 0.8, 1],
      duration: 1.6,
      ease: ["easeInOut", "easeInOut"],
      times: [0, 0.5, 1],
      delay: 0.224
    },
    1: {
      pathLength: [1, 0.8, 1],
      duration: 1.6,
      ease: ["easeInOut", "easeInOut"],
      times: [0, 0.5, 1],
      delay: 0.32
    },
    2: {
      pathLength: [1, 0.45, 1],
      duration: 1.76,
      ease: ["easeInOut", "easeInOut"],
      times: [0, 0.5, 1]
    },
    3: {
      pathLength: [1, 0.55, 1],
      duration: 1.76,
      ease: ["easeInOut", "easeInOut"],
      times: [0, 0.5, 1],
      delay: 0.128
    }
  }
};

export const Brain = createAnimatedIcon(
  "Brain",
  GEOMETRY,
  STROKE,
);

export default Brain;
