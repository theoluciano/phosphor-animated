"use client";

/**
 * FileText — animated Phosphor icon.
 *
 * Rewrites — the file perks up as its lines erase and retype.
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
    ["path", { d: "M200,224H56a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h96l56,56V216A8,8,0,0,1,200,224Z" }],
    ["polyline", { points: "152 32 152 88 208 88" }],
    ["line", { x1: "96", y1: "136", x2: "160", y2: "136" }],
    ["line", { x1: "96", y1: "168", x2: "160", y2: "168" }],
  ],
  bold: [
    ["path", { d: "M200,224H56a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h96l56,56V216A8,8,0,0,1,200,224Z" }],
    ["polyline", { points: "148 32 148 92 208 92" }],
    ["line", { x1: "96", y1: "132", x2: "160", y2: "132" }],
    ["line", { x1: "96", y1: "172", x2: "160", y2: "172" }],
  ],
  backdrop: {
    duotone: [
      ["polygon", { points: "152 32 152 88 208 88 152 32", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.75,
  whole: { rotate: [0, -8, 4, -2, 0], ease: ["easeIn", "linear", "linear", "easeOut"] },
  parts: {
    2: {
      pathLength: [1, 0, 1],
      duration: 0.5,
      delay: 0.1,
      ease: [
        "easeOut",
        [0.65, 0, 0.35, 1]
      ],
      times: [0, 0.4, 1]
    },
    3: {
      pathLength: [1, 0, 1],
      duration: 0.5,
      delay: 0.25,
      ease: [
        "easeOut",
        [0.65, 0, 0.35, 1]
      ],
      times: [0, 0.4, 1]
    }
  }
};

export const FileText = createAnimatedIcon(
  "FileText",
  GEOMETRY,
  STROKE,
);

export default FileText;
