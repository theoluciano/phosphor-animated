"use client";

/**
 * Smiley — animated Phosphor icon.
 *
 * Beams — the face pops and tilts, the eyes widen and the grin deepens.
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
    ["circle", { cx: "92", cy: "108", r: "12" }],
    ["circle", { cx: "164", cy: "108", r: "12" }],
    ["path", { d: "M168,152c-8.3,14.35-22.23,24-40,24s-31.7-9.65-40-24" }],
  ],
  thin: [
    ["path", { d: "M168,152c-8.3,14.35-22.23,24-40,24s-31.7-9.65-40-24" }],
    ["circle", { cx: "128", cy: "128", r: "96" }],
    ["circle", { cx: "92", cy: "108", r: "8" }],
    ["circle", { cx: "164", cy: "108", r: "8" }],
  ],
  light: [
    ["path", { d: "M168,152c-8.3,14.35-22.23,24-40,24s-31.7-9.65-40-24" }],
    ["circle", { cx: "128", cy: "128", r: "96" }],
    ["circle", { cx: "92", cy: "108", r: "10" }],
    ["circle", { cx: "164", cy: "108", r: "10" }],
  ],
  bold: [
    ["path", { d: "M168,152c-8.3,14.35-22.23,24-40,24s-31.7-9.65-40-24" }],
    ["circle", { cx: "128", cy: "128", r: "96" }],
    ["circle", { cx: "92", cy: "108", r: "16" }],
    ["circle", { cx: "164", cy: "108", r: "16" }],
  ],
  backdrop: {
    duotone: [
      ["circle", { cx: "128", cy: "128", r: "96", opacity: "0.2" }],
    ],
  },
  maps: {
    thin: [1, 2, 3, 0],
    light: [1, 2, 3, 0],
    bold: [1, 2, 3, 0],
  },
};

const STROKE: Choreography = {
  duration: 0.96,
  whole: {
    scale: [1, 1.09, 1.02, 1],
    rotate: [0, -3, 1.6, 0],
    origin: [128, 128],
    duration: 0.96,
    ease: [
      "easeOut",
      "easeInOut",
      [0.22, 1, 0.36, 1]
    ],
    times: [0, 0.3, 0.6, 1]
  },
  parts: {
    1: {
      scale: [1, 1.35, 0.92, 1],
      origin: [92, 108],
      duration: 0.8,
      ease: [
        "easeOut",
        "easeInOut",
        [0.22, 1, 0.36, 1]
      ],
      times: [0, 0.3, 0.6, 1]
    },
    2: {
      scale: [1, 1.35, 0.92, 1],
      origin: [164, 108],
      duration: 0.8,
      ease: [
        "easeOut",
        "easeInOut",
        [0.22, 1, 0.36, 1]
      ],
      times: [0, 0.3, 0.6, 1]
    },
    3: {
      scaleX: [1, 1.16, 1],
      scaleY: [1, 1.22, 1],
      origin: [128, 152],
      duration: 0.72,
      ease: [
        "easeOut",
        [0.22, 1, 0.36, 1]
      ],
      delay: 0.128
    }
  }
};

export const Smiley = createAnimatedIcon(
  "Smiley",
  GEOMETRY,
  STROKE,
);

export default Smiley;
