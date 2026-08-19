"use client";

/**
 * WifiHigh — animated Phosphor icon.
 *
 * Reconnects — the signal drops out and rebuilds outward from the dot.
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
    ["circle", { cx: "128", cy: "204", r: "12" }],
    ["path", { d: "M232,93.19a164,164,0,0,0-208,0" }],
    ["path", { d: "M200,129a116,116,0,0,0-144,0" }],
    ["path", { d: "M168,165a68,68,0,0,0-80,0" }],
  ],
  thin: [
    ["circle", { cx: "128", cy: "204", r: "8" }],
    ["path", { d: "M232,93.19a164,164,0,0,0-208,0" }],
    ["path", { d: "M200,129a116,116,0,0,0-144,0" }],
    ["path", { d: "M168,165a68,68,0,0,0-80,0" }],
  ],
  light: [
    ["circle", { cx: "128", cy: "204", r: "10" }],
    ["path", { d: "M232,93.19a164,164,0,0,0-208,0" }],
    ["path", { d: "M200,129a116,116,0,0,0-144,0" }],
    ["path", { d: "M168,165a68,68,0,0,0-80,0" }],
  ],
  bold: [
    ["circle", { cx: "128", cy: "204", r: "16" }],
    ["path", { d: "M232,93.19a164,164,0,0,0-208,0" }],
    ["path", { d: "M200,129a116,116,0,0,0-144,0" }],
    ["path", { d: "M168,165a68,68,0,0,0-80,0" }],
  ],
  duotone: [
    ["path", { d: "M134.15,213.12l104-125.43a7.79,7.79,0,0,0-1.31-11.21,180.75,180.75,0,0,0-217.78,0A7.79,7.79,0,0,0,17.8,87.69L121.85,213.12A8,8,0,0,0,134.15,213.12Z" }],
  ],
  backdrop: {
    duotone: [
      ["path", { d: "M134.15,213.12l104-125.43a7.79,7.79,0,0,0-1.31-11.21,180.75,180.75,0,0,0-217.78,0A7.79,7.79,0,0,0,17.8,87.69L121.85,213.12A8,8,0,0,0,134.15,213.12Z", opacity: "0.2" }],
    ],
  },
  divergent: ["duotone"],
};

const STROKE: Choreography = {
  duration: 0.65,
  parts: {
    0: {
      scale: [1, 0.85, 1.15, 1],
      origin: [128, 204],
      duration: 0.55,
      ease: [
        "easeOut",
        "easeInOut",
        [0.34, 1.56, 0.64, 1]
      ],
      times: [0, 0.3, 0.6, 1]
    },
    1: {
      opacity: [1, 0, 0, 1],
      origin: [128, 204],
      duration: 0.55,
      ease: [
        "easeOut",
        "linear",
        [0.22, 1, 0.36, 1]
      ],
      times: [0, 0.3, 0.5, 1],
      delay: 0.14
    },
    2: {
      opacity: [1, 0, 0, 1],
      origin: [128, 204],
      duration: 0.55,
      ease: [
        "easeOut",
        "linear",
        [0.22, 1, 0.36, 1]
      ],
      times: [0, 0.3, 0.5, 1],
      delay: 0.07
    },
    3: {
      opacity: [1, 0, 0, 1],
      origin: [128, 204],
      duration: 0.55,
      ease: [
        "easeOut",
        "linear",
        [0.22, 1, 0.36, 1]
      ],
      times: [0, 0.3, 0.5, 1],
      delay: 0
    }
  }
};

export const WifiHigh = createAnimatedIcon(
  "WifiHigh",
  GEOMETRY,
  STROKE,
);

export default WifiHigh;
