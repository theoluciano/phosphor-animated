"use client";

/**
 * TrashSimple — animated Phosphor icon.
 *
 * Lifts — the lid and its handle hop straight off the bin and drop back.
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
    ["line", { x1: "88", y1: "24", x2: "168", y2: "24" }],
    ["path", { d: "M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56" }],
  ],
  bold: [
    ["line", { x1: "216", y1: "60", x2: "40", y2: "60" }],
    ["line", { x1: "88", y1: "20", x2: "168", y2: "20" }],
    ["path", { d: "M200,60V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V60" }],
  ],
  backdrop: {
    duotone: [
      ["path", { d: "M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56Z", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.8,
  parts: {
    0: {
      rotate: [0, 0, -7, 0, 0, 0],
      y: [0, 0, -20, 0, 0, 0],
      origin: [216, 56],
      duration: 1.264,
      times: [0, 0.14, 0.36, 0.55, 0.82, 1],
      ease: [
        "easeOut",
        [0.22, 1, 0.36, 1],
        "easeInOut",
        "easeInOut",
        [0.22, 1, 0.36, 1]
      ],
      x: [0, 0, 0, 0, 0, 0]
    },
    1: {
      rotate: [0, 0.6, -8, 0.5, 0, 0],
      y: [0, 2, -23, 0, 0, 0],
      origin: [216, 56],
      duration: 1.264,
      times: [0, 0.14, 0.36, 0.55, 0.82, 1],
      ease: [
        "easeOut",
        [0.22, 1, 0.36, 1],
        "easeInOut",
        "easeInOut",
        [0.22, 1, 0.36, 1]
      ]
    }
  }
};

export const TrashSimple = createAnimatedIcon(
  "TrashSimple",
  GEOMETRY,
  STROKE,
);

export default TrashSimple;
