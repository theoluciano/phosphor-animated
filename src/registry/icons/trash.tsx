"use client";

/**
 * Trash — animated Phosphor icon.
 *
 * Opens — the lid lifts clear of the bin, which absorbs it on the way down.
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
    ["line", { x1: "216", y1: "56", x2: "40", y2: "56" }],
    ["line", { x1: "104", y1: "104", x2: "104", y2: "168" }],
    ["line", { x1: "152", y1: "104", x2: "152", y2: "168" }],
    ["path", { d: "M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56" }],
    ["path", { d: "M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56" }],
  ],
  bold: [
    ["line", { x1: "216", y1: "60", x2: "40", y2: "60" }],
    ["line", { x1: "104", y1: "104", x2: "104", y2: "168" }],
    ["line", { x1: "152", y1: "104", x2: "152", y2: "168" }],
    ["path", { d: "M200,60V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V60" }],
    ["path", { d: "M168,60V36a16,16,0,0,0-16-16H104A16,16,0,0,0,88,36V60" }],
  ],
  backdrop: {
    duotone: [
      ["path", { d: "M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56Z", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.7,
  parts: {
    0: {
      y: [0, 2, -20, 0, 0, 0],
      rotate: [0, 0.6, -7, 0, 0, 0],
      origin: [216, 56],
      ease: [
        "easeOut",
        [0.22, 1, 0.36, 1],
        "easeInOut",
        "easeInOut",
        [0.22, 1, 0.36, 1]
      ],
      times: [0, 0.14, 0.36, 0.55, 0.82, 1],
      duration: 0.79
    },
    1: {
      scaleY: [1, 1, 1, 1, 1],
      origin: [128, 216],
      ease: [
        "linear",
        "easeOut",
        [0.22, 1, 0.36, 1],
        "easeInOut"
      ],
      times: [0, 0.56, 0.72, 0.86, 1],
      duration: 0.79
    },
    2: {
      scaleY: [1, 1, 1, 1, 1],
      origin: [128, 216],
      ease: [
        "linear",
        "easeOut",
        [0.22, 1, 0.36, 1],
        "easeInOut"
      ],
      times: [0, 0.56, 0.72, 0.86, 1],
      duration: 0.79
    },
    3: {
      scaleY: [1, 1, 1, 1, 1],
      origin: [128, 216],
      ease: [
        "linear",
        "easeOut",
        [0.22, 1, 0.36, 1],
        "easeInOut"
      ],
      times: [0, 0.56, 0.72, 0.86, 1],
      duration: 0.79
    },
    4: {
      y: [0, 2, -23, 0, 0, 0],
      rotate: [0, 0.6, -8, 0.5, 0, 0],
      origin: [216, 56],
      ease: [
        "easeOut",
        [0.22, 1, 0.36, 1],
        "easeInOut",
        "easeInOut",
        [0.22, 1, 0.36, 1]
      ],
      times: [0, 0.14, 0.36, 0.55, 0.82, 1],
      duration: 0.79
    }
  }
};

export const Trash = createAnimatedIcon(
  "Trash",
  GEOMETRY,
  STROKE,
);

export default Trash;
