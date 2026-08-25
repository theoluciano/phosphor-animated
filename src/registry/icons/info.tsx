"use client";

/**
 * Info — animated Phosphor icon.
 *
 * The "i" bobs — the dot hops while the stem squashes and the ring breathes.
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
    ["circle", { cx: "128", cy: "128", r: "96" }],
    ["path", { d: "M120,120a8,8,0,0,1,8,8v40a8,8,0,0,0,8,8" }],
    ["circle", { cx: "124", cy: "84", r: "12" }],
  ],
  thin: [
    ["path", { d: "M120,120a8,8,0,0,1,8,8v40a8,8,0,0,0,8,8" }],
    ["circle", { cx: "124", cy: "84", r: "8" }],
    ["circle", { cx: "128", cy: "128", r: "96" }],
  ],
  light: [
    ["path", { d: "M120,120a8,8,0,0,1,8,8v40a8,8,0,0,0,8,8" }],
    ["circle", { cx: "124", cy: "84", r: "10" }],
    ["circle", { cx: "128", cy: "128", r: "96" }],
  ],
  bold: [
    ["circle", { cx: "124", cy: "84", r: "16" }],
    ["circle", { cx: "128", cy: "128", r: "96" }],
    ["path", { d: "M120,124a8,8,0,0,1,8,8v36a8,8,0,0,0,8,8" }],
  ],
  duotone: [
    ["path", { d: "M120,120a8,8,0,0,1,8,8v40a8,8,0,0,0,8,8" }],
    ["circle", { cx: "128", cy: "128", r: "96" }],
    ["circle", { cx: "124", cy: "84", r: "12" }],
  ],
  backdrop: {
    duotone: [
      ["circle", { cx: "128", cy: "128", r: "96", opacity: "0.2" }],
    ],
  },
  maps: {
    thin: [2, 0, 1],
    light: [2, 0, 1],
    bold: [1, 2, 0],
    duotone: [1, 0, 2],
  },
};

const STROKE: Choreography = {
  duration: 0.896,
  parts: {
    0: { origin: [128, 128], ease: [
        "easeOut",
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1]
      ], times: [0, 0.2, 0.5, 0.76, 1] },
    1: { origin: [128, 176], ease: ["easeOut"], pathLength: [0, 1] },
    2: { origin: [124, 84], ease: [
        "easeOut",
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1]
      ], times: [0, 0.2, 0.5, 0.76, 1] }
  },
  whole: { scale: [1, 1, 1, 1.1, 0.97, 1], duration: 0.976, ease: ["easeOut", "easeIn", "easeOut", "easeIn", "easeIn"] }
};

export const Info = createAnimatedIcon(
  "Info",
  GEOMETRY,
  STROKE,
);

export default Info;
