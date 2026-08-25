"use client";

/**
 * Camera — animated Phosphor icon.
 *
 * Pulls focus — the lens breathes, then the body snaps the shot.
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
    ["path", { d: "M208,208H48a16,16,0,0,1-16-16V80A16,16,0,0,1,48,64H80L96,40h64l16,24h32a16,16,0,0,1,16,16V192A16,16,0,0,1,208,208Z" }],
    ["circle", { cx: "128", cy: "132", r: "36" }],
  ],
  backdrop: {
    duotone: [
      ["path", { d: "M208,64H176L160,40H96L80,64H48A16,16,0,0,0,32,80V192a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V80A16,16,0,0,0,208,64ZM128,168a36,36,0,1,1,36-36A36,36,0,0,1,128,168Z", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.96,
  parts: {
    0: {
      scale: [1, 1, 1.05, 1],
      origin: [128, 128],
      duration: 0.96,
      ease: ["easeIn", "linear", "easeOut"],
      times: [0, 0.5, 0.7, 1]
    },
    1: {
      scale: [1, 1, 1.2, 1],
      origin: [128, 132],
      duration: 0.96,
      ease: [
        "easeOut",
        "easeInOut",
        [0.22, 1, 0.36, 1]
      ],
      times: [0, 0.35, 0.68, 1],
      x: [0, 0, 0, 0],
      y: [0, 0, 0, 0]
    }
  }
};

export const Camera = createAnimatedIcon(
  "Camera",
  GEOMETRY,
  STROKE,
);

export default Camera;
