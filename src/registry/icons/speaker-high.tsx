"use client";

/**
 * SpeakerHigh — animated Phosphor icon.
 *
 * Sounds — the cone pulses and the waves radiate out from it.
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
    ["path", { d: "M80,168H32a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H80l72-56V224Z" }],
    ["line", { x1: "80", y1: "88", x2: "80", y2: "168" }],
    ["path", { d: "M192,106.85a32,32,0,0,1,0,42.3" }],
    ["path", { d: "M221.67,80a72,72,0,0,1,0,96" }],
  ],
  backdrop: {
    duotone: [
      ["path", { d: "M80,168H32a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H80Z", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.8,
  parts: {
    0: {
      scale: [1, 0.97, 1.05, 1],
      origin: [88, 128],
      duration: 0.6,
      ease: [
        "easeOut",
        [0.65, 0, 0.35, 1],
        [0.65, 0, 0.35, 1]
      ],
      times: [0, 0.25, 0.6, 1]
    },
    1: {
      scale: [1, 0.97, 1.05, 1],
      origin: [88, 128],
      duration: 0.6,
      ease: [
        "easeOut",
        [0.65, 0, 0.35, 1],
        [0.65, 0, 0.35, 1]
      ],
      times: [0, 0.25, 0.6, 1]
    },
    2: {
      opacity: [1, 0.35, 1],
      scale: [1, 1.06, 1],
      origin: [88, 128],
      duration: 0.45,
      ease: [
        [0.22, 1, 0.36, 1],
        "easeInOut"
      ],
      times: [0, 0.38, 1],
      delay: 0.1
    },
    3: {
      opacity: [1, 0.35, 1],
      scale: [1, 1.06, 1],
      origin: [88, 128],
      duration: 0.45,
      ease: [
        [0.22, 1, 0.36, 1],
        "easeInOut"
      ],
      times: [0, 0.38, 1],
      delay: 0.22
    }
  }
};

export const SpeakerHigh = createAnimatedIcon(
  "SpeakerHigh",
  GEOMETRY,
  STROKE,
);

export default SpeakerHigh;
