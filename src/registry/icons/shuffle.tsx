"use client";

/**
 * Shuffle — animated Phosphor icon.
 *
 * Weaves — both tracks redraw through the crossing and the heads snap outward.
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
    ["path", { d: "M32,72H55.06a64,64,0,0,1,52.08,26.8l41.72,58.4A64,64,0,0,0,200.94,184H232" }],
    ["polyline", { points: "208 48 232 72 208 96" }],
    ["polyline", { points: "208 160 232 184 208 208" }],
    ["path", { d: "M147.66,100.47l1.2-1.67A64,64,0,0,1,200.94,72H232" }],
    ["path", { d: "M32,184H55.06a64,64,0,0,0,52.08-26.8l1.2-1.67" }],
  ],
  bold: [
    ["path", { d: "M32,72H55.06a64,64,0,0,1,52.08,26.8l41.72,58.4A64,64,0,0,0,200.94,184H232" }],
    ["polyline", { points: "208 48 232 72 208 96" }],
    ["polyline", { points: "208 160 232 184 208 208" }],
    ["path", { d: "M152.77,93.86A64,64,0,0,1,200.94,72H232" }],
    ["path", { d: "M32,184H55.06a64,64,0,0,0,48.17-21.86" }],
  ],
  backdrop: {
    duotone: [
      ["path", { d: "M32,184H55.06a64,64,0,0,0,52.08-26.8l41.72-58.4A64,64,0,0,1,200.94,72H232V184H200.94a64,64,0,0,1-52.08-26.8L107.14,98.8A64,64,0,0,0,55.06,72H32Z", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 1.12,
  parts: {
    0: {
      pathLength: [0, 1],
      opacity: [0, 1],
      duration: 0.8,
      ease: "easeInOut"
    },
    1: {
      x: [0, 7, 0],
      duration: 0.448,
      ease: [
        [0.34, 1.56, 0.64, 1],
        "easeInOut"
      ],
      delay: 0.736
    },
    2: {
      x: [0, 7, 0],
      duration: 0.448,
      ease: [
        [0.34, 1.56, 0.64, 1],
        "easeInOut"
      ],
      delay: 0.672
    },
    3: {
      pathLength: [0, 0, 1],
      opacity: [0, 0, 1],
      duration: 0.8,
      ease: ["linear", "easeInOut"],
      times: [0, 0.5, 1]
    },
    4: {
      pathLength: [0, 1],
      opacity: [0, 1],
      duration: 0.352,
      ease: "easeOut"
    }
  }
};

export const Shuffle = createAnimatedIcon(
  "Shuffle",
  GEOMETRY,
  STROKE,
);

export default Shuffle;
