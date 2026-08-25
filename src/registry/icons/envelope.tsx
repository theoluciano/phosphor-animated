"use client";

/**
 * Envelope — animated Phosphor icon.
 *
 * Opens — the flap swings up, then snaps shut with a soft bounce.
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
    ["polyline", { points: "224 56 128 144 32 56" }],
    ["path", { d: "M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z" }],
    ["line", { x1: "110.55", y1: "128", x2: "34.47", y2: "197.74" }],
    ["line", { x1: "221.53", y1: "197.74", x2: "145.45", y2: "128" }],
  ],
  bold: [
    ["polyline", { points: "224 56 128 144 32 56" }],
    ["path", { d: "M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56a0,0,0,0,1,0,0Z" }],
    ["line", { x1: "110.55", y1: "128", x2: "34.47", y2: "197.74" }],
    ["line", { x1: "221.53", y1: "197.74", x2: "145.45", y2: "128" }],
  ],
  backdrop: {
    duotone: [
      ["polygon", { points: "224 56 128 144 32 56 224 56", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 1.12,
  parts: {
    0: {
      origin: [128, 56],
      duration: 1.12,
      ease: [
        [0.65, 0, 0.35, 1],
        [0.65, 0, 0.35, 1],
        [0.65, 0, 0.35, 1]
      ],
      pathLength: [1, 0, 1, 1]
    },
    1: {
      origin: [128, 56],
      duration: 0.88,
      delay: 0,
      ease: [
        "easeOut",
        [0.22, 1, 0.36, 1],
        [0.22, 1, 0.36, 1]
      ],
      times: [0, 0.45, 0.75, 1]
    },
    2: {
      origin: [128, 56],
      duration: 0.88,
      delay: 0.32,
      ease: [
        "easeOut",
        [0.22, 1, 0.36, 1],
        [0.22, 1, 0.36, 1]
      ],
      pathLength: [1, 0, 0, 1]
    },
    3: {
      pathLength: [1, 0, 0, 1],
      origin: [128, 56],
      delay: 0.32,
      duration: 0.88,
      ease: [
        "easeOut",
        [0.22, 1, 0.36, 1],
        [0.22, 1, 0.36, 1]
      ]
    }
  }
};

export const Envelope = createAnimatedIcon(
  "Envelope",
  GEOMETRY,
  STROKE,
);

export default Envelope;
