"use client";

/**
 * UploadSimple — animated Phosphor icon.
 *
 * Sends — the arrow springs up and back while the tray dips to launch it.
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
    ["polyline", { points: "88 72 128 32 168 72" }],
  ],
  backdrop: {
    duotone: [
      ["path", { d: "M56,32H200a16,16,0,0,1,16,16V208a0,0,0,0,1,0,0H40a0,0,0,0,1,0,0V48A16,16,0,0,1,56,32Z", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.55,
  parts: {
    0: {
      y: [0, -12, 6.2, 0],
      origin: [128, 128],
      duration: 0.55,
      ease: [
        "easeOut",
        [0.34, 1.56, 0.64, 1],
        [0.22, 1, 0.36, 1]
      ],
      times: [0, 0.38, 0.68, 1]
    },
    1: {
      y: [0, 5, 0],
      origin: [128, 208],
      duration: 0.3,
      ease: [
        "easeOut",
        [0.22, 1, 0.36, 1]
      ]
    },
    2: {
      y: [0, -12, 6.2, 0],
      origin: [128, 128],
      duration: 0.55,
      ease: [
        "easeOut",
        [0.34, 1.56, 0.64, 1],
        [0.22, 1, 0.36, 1]
      ],
      times: [0, 0.38, 0.68, 1]
    }
  }
};

export const UploadSimple = createAnimatedIcon(
  "UploadSimple",
  GEOMETRY,
  STROKE,
);

export default UploadSimple;
