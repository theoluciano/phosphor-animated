"use client";

/**
 * SignIn — animated Phosphor icon.
 *
 * Enters — the arrow lunges in through the door, which takes the bump.
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
    ["line", { x1: "24", y1: "128", x2: "136", y2: "128" }],
    ["polyline", { points: "96 88 136 128 96 168" }],
    ["polyline", { points: "136 40 200 40 200 216 136 216" }],
  ],
  backdrop: {
    duotone: [
      ["path", { d: "M40,40H200a0,0,0,0,1,0,0V216a0,0,0,0,1,0,0H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40Z", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.96,
  parts: {
    0: {
      x: [0, 16, -5.2, 0],
      duration: 0.88,
      ease: ["easeIn", "linear", "easeOut"],
      times: [0, 0.4, 0.72, 1],
      delay: 0,
      y: [0, 0, 0, 0]
    },
    1: {
      x: [0, 20, -6.2, 0],
      duration: 0.88,
      ease: ["easeIn", "linear", "easeOut"],
      times: [0, 0.4, 0.72, 1],
      y: [0, 0, 0, 0]
    },
    2: {
      x: [0, 12, 0],
      duration: 0.56,
      ease: ["easeIn", "easeOut"],
      delay: 0.256
    }
  }
};

export const SignIn = createAnimatedIcon(
  "SignIn",
  GEOMETRY,
  STROKE,
);

export default SignIn;
