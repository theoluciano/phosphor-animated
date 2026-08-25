"use client";

/**
 * SignOut — animated Phosphor icon.
 *
 * Leaves — the arrow winds up and lunges out, the door recoiling behind it.
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
    ["polyline", { points: "112 40 48 40 48 216 112 216" }],
    ["line", { x1: "112", y1: "128", x2: "224", y2: "128" }],
    ["polyline", { points: "184 88 224 128 184 168" }],
  ],
  backdrop: {
    duotone: [
      ["path", { d: "M48,40H208a16,16,0,0,1,16,16V200a16,16,0,0,1-16,16H48a0,0,0,0,1,0,0V40A0,0,0,0,1,48,40Z", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.96,
  parts: {
    0: {
      x: [0, -3, 0],
      duration: 0.56,
      ease: [
        "easeOut",
        [0.22, 1, 0.36, 1]
      ],
      delay: 0.16
    },
    1: {
      x: [0, -2, 10, 0],
      duration: 0.976,
      ease: [
        "easeInOut",
        [0.22, 1, 0.36, 1],
        "easeInOut"
      ],
      times: [0, 0.18, 0.55, 1],
      delay: 0.064
    },
    2: {
      x: [0, -3, 12, 0],
      duration: 0.976,
      ease: [
        "easeInOut",
        [0.22, 1, 0.36, 1],
        "easeInOut"
      ],
      times: [0, 0.18, 0.55, 1]
    }
  }
};

export const SignOut = createAnimatedIcon(
  "SignOut",
  GEOMETRY,
  STROKE,
);

export default SignOut;
