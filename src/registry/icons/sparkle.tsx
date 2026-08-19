"use client";

/**
 * Sparkle — animated Phosphor icon.
 *
 * Lifts — the big sparkle bobs while the small stars blink in turn.
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
    ["path", { d: "M84.27,171.73l-55.09-20.3a7.92,7.92,0,0,1,0-14.86l55.09-20.3,20.3-55.09a7.92,7.92,0,0,1,14.86,0l20.3,55.09,55.09,20.3a7.92,7.92,0,0,1,0,14.86l-55.09,20.3-20.3,55.09a7.92,7.92,0,0,1-14.86,0Z" }],
    ["line", { x1: "176", y1: "16", x2: "176", y2: "64" }],
    ["line", { x1: "224", y1: "72", x2: "224", y2: "104" }],
    ["line", { x1: "152", y1: "40", x2: "200", y2: "40" }],
    ["line", { x1: "208", y1: "88", x2: "240", y2: "88" }],
  ],
  backdrop: {
    duotone: [
      ["path", { d: "M84.27,171.73l-55.09-20.3a7.92,7.92,0,0,1,0-14.86l55.09-20.3,20.3-55.09a7.92,7.92,0,0,1,14.86,0l20.3,55.09,55.09,20.3a7.92,7.92,0,0,1,0,14.86l-55.09,20.3-20.3,55.09a7.92,7.92,0,0,1-14.86,0Z", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.8,
  parts: {
    0: {
      y: [0, -10, 5.2, 0],
      duration: 0.6,
      ease: [
        [0.34, 1.56, 0.64, 1],
        "easeInOut",
        [0.22, 1, 0.36, 1]
      ],
      times: [0, 0.35, 0.65, 1]
    },
    1: {
      opacity: [1, 0, 1],
      scale: [1, 0.7, 1],
      origin: [176, 40],
      duration: 0.4,
      ease: [
        "easeOut",
        [0.22, 1, 0.36, 1]
      ],
      delay: 0.15
    },
    2: {
      opacity: [1, 0, 1],
      scale: [1, 0.7, 1],
      origin: [224, 88],
      duration: 0.4,
      ease: [
        "easeOut",
        [0.22, 1, 0.36, 1]
      ],
      delay: 0.3
    },
    3: {
      opacity: [1, 0, 1],
      scale: [1, 0.7, 1],
      origin: [176, 40],
      duration: 0.4,
      ease: [
        "easeOut",
        [0.22, 1, 0.36, 1]
      ],
      delay: 0.15
    },
    4: {
      opacity: [1, 0, 1],
      scale: [1, 0.7, 1],
      origin: [224, 88],
      duration: 0.4,
      ease: [
        "easeOut",
        [0.22, 1, 0.36, 1]
      ],
      delay: 0.3
    }
  }
};

export const Sparkle = createAnimatedIcon(
  "Sparkle",
  GEOMETRY,
  STROKE,
);

export default Sparkle;
