"use client";

/**
 * VideoCamera — animated Phosphor icon.
 *
 * Rolls — the body breathes while the lens draws back and returns.
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
    ["rect", { x: "24", y: "64", width: "176", height: "128", rx: "8" }],
    ["polyline", { points: "200 112 248 80 248 176 200 144" }],
  ],
  bold: [
    ["rect", { x: "24", y: "64", width: "176", height: "128", rx: "8" }],
    ["polyline", { points: "200 112 244 80 244 176 200 144" }],
  ],
  backdrop: {
    duotone: [
      ["rect", { x: "24", y: "64", width: "176", height: "128", rx: "8", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.55,
  parts: {
    0: {
      scale: [1, 0.985, 1.015, 1],
      origin: [112, 128],
      duration: 0.48,
      ease: [
        "easeOut",
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1]
      ],
      times: [0, 0.26, 0.6, 1]
    },
    1: {
      x: [0, -6, -1, 0],
      scaleX: [1, 0.94, 0.99, 1],
      origin: [200, 128],
      duration: 0.5,
      ease: [
        "easeOut",
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1]
      ],
      times: [0, 0.3, 0.64, 1]
    }
  }
};

export const VideoCamera = createAnimatedIcon(
  "VideoCamera",
  GEOMETRY,
  STROKE,
);

export default VideoCamera;
