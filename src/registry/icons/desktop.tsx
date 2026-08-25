"use client";

/**
 * Desktop — animated Phosphor icon.
 *
 * Wakes — the screen lights and the stand takes the weight.
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
    ["rect", { x: "32", y: "48", width: "192", height: "144", rx: "16", transform: "translate(256 240) rotate(180)" }],
    ["line", { x1: "160", y1: "224", x2: "96", y2: "224" }],
    ["line", { x1: "32", y1: "152", x2: "224", y2: "152" }],
    ["line", { x1: "128", y1: "192", x2: "128", y2: "224" }],
  ],
  bold: [
    ["rect", { x: "32", y: "48", width: "192", height: "140", rx: "16", transform: "translate(256 236) rotate(180)" }],
    ["line", { x1: "160", y1: "224", x2: "96", y2: "224" }],
    ["line", { x1: "32", y1: "148", x2: "224", y2: "148" }],
    ["line", { x1: "128", y1: "192", x2: "128", y2: "224" }],
  ],
  backdrop: {
    duotone: [
      ["path", { d: "M32,152V64A16,16,0,0,1,48,48H208a16,16,0,0,1,16,16v88Z", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.88,
  parts: {
    2: {
      pathLength: [0, 1],
      origin: [128, 128],
      duration: 0.72,
      ease: [0.65, 0, 0.35, 1]
    },
    3: {
      origin: [128, 224],
      duration: 0.72,
      ease: [
        [0.34, 1.56, 0.64, 1],
        "easeInOut",
        [0.22, 1, 0.36, 1]
      ],
      times: [0, 0.4, 0.7, 1],
      delay: 0.192
    }
  }
};

export const Desktop = createAnimatedIcon(
  "Desktop",
  GEOMETRY,
  STROKE,
);

export default Desktop;
