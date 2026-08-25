"use client";

/**
 * FloppyDisk — animated Phosphor icon.
 *
 * Saves — the disk presses in with a click while label and door rewrite.
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
    ["path", { d: "M216,83.31V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H172.69a8,8,0,0,1,5.65,2.34l35.32,35.32A8,8,0,0,1,216,83.31Z" }],
    ["path", { d: "M80,216V152a8,8,0,0,1,8-8h80a8,8,0,0,1,8,8v64" }],
    ["line", { x1: "152", y1: "72", x2: "96", y2: "72" }],
  ],
  bold: [
    ["path", { d: "M216,83.31V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H172.69a8,8,0,0,1,5.65,2.34l35.32,35.32A8,8,0,0,1,216,83.31Z" }],
    ["path", { d: "M80,216V156a8,8,0,0,1,8-8h80a8,8,0,0,1,8,8v60" }],
    ["line", { x1: "152", y1: "84", x2: "96", y2: "84" }],
  ],
  backdrop: {
    duotone: [
      ["path", { d: "M213.66,77.66,178.34,42.34A8,8,0,0,0,172.69,40H48a8,8,0,0,0-8,8V208a8,8,0,0,0,8,8H80V152a8,8,0,0,1,8-8h80a8,8,0,0,1,8,8v64h32a8,8,0,0,0,8-8V83.31A8,8,0,0,0,213.66,77.66Z", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.992,
  parts: {
    0: {
      origin: [128, 128],
      duration: 0.832,
      ease: [
        "easeOut",
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1]
      ],
      times: [0, 0.3, 0.6, 1]
    },
    1: {
      pathLength: [1, 0, 1, 1],
      origin: [128, 184],
      duration: 0.96,
      delay: 0,
      ease: ["easeIn", "linear", "easeOut"],
      opacity: [1, 0, 1, 1]
    },
    2: {
      pathLength: [1, 0, 1, 1],
      origin: [124, 72],
      duration: 0.96,
      delay: 0,
      ease: ["easeIn", "linear", "easeOut"],
      opacity: [1, 0, 1, 1]
    }
  }
};

export const FloppyDisk = createAnimatedIcon(
  "FloppyDisk",
  GEOMETRY,
  STROKE,
);

export default FloppyDisk;
