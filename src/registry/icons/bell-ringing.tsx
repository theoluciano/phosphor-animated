"use client";

/**
 * BellRinging — animated Phosphor icon.
 *
 * Rings out loud — the bell whips from its mount and sound draws off both sides.
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
    ["path", { d: "M96,192a32,32,0,0,0,64,0" }],
    ["path", { d: "M184,24a102.71,102.71,0,0,1,36.29,40" }],
    ["path", { d: "M35.71,64A102.71,102.71,0,0,1,72,24" }],
    ["path", { d: "M56,112a72,72,0,0,1,144,0c0,35.82,8.3,56.6,14.9,68A8,8,0,0,1,208,192H48a8,8,0,0,1-6.88-12C47.71,168.6,56,147.81,56,112Z" }],
  ],
  bold: [
    ["path", { d: "M96,188v8a32,32,0,0,0,64,0v-8" }],
    ["path", { d: "M184,24a102.71,102.71,0,0,1,36.29,40" }],
    ["path", { d: "M35.71,64A102.71,102.71,0,0,1,72,24" }],
    ["path", { d: "M52,188a8,8,0,0,1-6.38-12.81C53.85,164.49,63.84,144.6,64,112a64,64,0,0,1,128,0c.16,32.6,10.15,52.49,18.35,63.19A8,8,0,0,1,204,188Z" }],
  ],
  backdrop: {
    duotone: [
      ["path", { d: "M56,112a72,72,0,0,1,144,0c0,35.82,8.3,56.6,14.9,68A8,8,0,0,1,208,192H48a8,8,0,0,1-6.88-12C47.71,168.6,56,147.81,56,112Z", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 1.28,
  parts: {
    0: {
      rotate: [0, -4.8, 2.5, -1.3, 0],
      origin: [128, 48],
      duration: 1.04,
      ease: [
        "easeInOut",
        "easeInOut",
        "easeInOut",
        [0.22, 1, 0.36, 1]
      ],
      times: [0, 0.22, 0.5, 0.78, 1],
      delay: 0.064
    },
    1: {
      pathLength: [0, 1],
      opacity: [0, 1],
      duration: 0.56,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.192
    },
    2: {
      pathLength: [0, 1],
      opacity: [0, 1],
      duration: 0.56,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.288
    },
    3: {
      rotate: [0, -4.3, 2.2, -1.2, 0],
      origin: [128, 48],
      duration: 1.04,
      ease: [
        "easeInOut",
        "easeInOut",
        "easeInOut",
        [0.22, 1, 0.36, 1]
      ],
      times: [0, 0.22, 0.5, 0.78, 1]
    }
  }
};

export const BellRinging = createAnimatedIcon(
  "BellRinging",
  GEOMETRY,
  STROKE,
);

export default BellRinging;
