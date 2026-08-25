"use client";

/**
 * DownloadSimple — animated Phosphor icon.
 *
 * Delivers — the arrow springs down and back while the tray dips to take it.
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
    ["line", { x1: "128", y1: "144", x2: "128", y2: "32" }],
    ["polyline", { points: "216 144 216 208 40 208 40 144" }],
    ["polyline", { points: "168 104 128 144 88 104" }],
  ],
  backdrop: {
    duotone: [
      ["path", { d: "M56,32H200a16,16,0,0,1,16,16V208a0,0,0,0,1,0,0H40a0,0,0,0,1,0,0V48A16,16,0,0,1,56,32Z", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.88,
  parts: {
    0: {
      y: [0, 20, 0],
      origin: [128, 128],
      duration: 0.88,
      ease: ["easeIn", "easeOut"],
      x: [0, 0, 0]
    },
    1: {
      origin: [128, 208],
      duration: 0.48,
      ease: [
        "easeOut",
        [0.22, 1, 0.36, 1]
      ],
      delay: 0.256
    },
    2: {
      y: [0, 20, 0],
      origin: [128, 128],
      duration: 0.88,
      ease: ["easeIn", "easeOut"]
    }
  }
};

export const DownloadSimple = createAnimatedIcon(
  "DownloadSimple",
  GEOMETRY,
  STROKE,
);

export default DownloadSimple;
