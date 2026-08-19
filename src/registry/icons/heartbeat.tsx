"use client";

/**
 * Heartbeat — animated Phosphor icon.
 *
 * The pulse sweeps through first, then the heart draws in and beats.
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
    ["polyline", { points: "32 136 72 136 88 112 120 160 136 136 160 136" }],
    ["path", { d: "M24,104c0-.67,0-1.33,0-2A54,54,0,0,1,78,48c22.59,0,41.94,12.31,50,32,8.06-19.69,27.41-32,50-32a54,54,0,0,1,54,54c0,66-104,122-104,122s-42-22.6-72.58-56" }],
  ],
  bold: [
    ["polyline", { points: "32 136 72 136 88 112 120 160 136 136 160 136" }],
    ["path", { d: "M24.33,96A54,54,0,0,1,78,48c22.59,0,41.94,12.31,50,32,8.06-19.69,27.41-32,50-32a54,54,0,0,1,54,54c0,66-104,122-104,122s-35.36-19-64.84-48" }],
  ],
  backdrop: {
    duotone: [
      ["path", { d: "M128,224S24,168,24,102A54,54,0,0,1,78,48c22.59,0,41.94,12.31,50,32,8.06-19.69,27.41-32,50-32a54,54,0,0,1,54,54C232,168,128,224,128,224Z", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 1,
  parts: {
    0: {
      pathLength: [0, 1],
      origin: [128, 128],
      duration: 0.35,
      ease: "linear"
    },
    1: {
      pathLength: [0, 0, 1, 1, 1, 1],
      scale: [1, 1, 1, 1.1, 0.97, 1],
      origin: [128, 128],
      duration: 1,
      ease: [
        "linear",
        "easeOut",
        [0.34, 1.56, 0.64, 1],
        "easeInOut",
        [0.22, 1, 0.36, 1]
      ],
      times: [0, 0.32, 0.55, 0.72, 0.86, 1]
    }
  }
};

export const Heartbeat = createAnimatedIcon(
  "Heartbeat",
  GEOMETRY,
  STROKE,
);

export default Heartbeat;
