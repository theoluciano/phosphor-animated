"use client";

/**
 * NotePencil — animated Phosphor icon.
 *
 * Edits — the pencil scribbles a quick stroke against the note.
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
    ["polygon", { points: "128 160 96 160 96 128 192 32 224 64 128 160" }],
    ["line", { x1: "168", y1: "56", x2: "200", y2: "88" }],
    ["path", { d: "M216,128v80a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h80" }],
  ],
  bold: [
    ["polygon", { points: "128 160 96 160 96 128 192 32 224 64 128 160" }],
    ["line", { x1: "164", y1: "60", x2: "196", y2: "92" }],
    ["path", { d: "M216,140.57V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h67.43" }],
  ],
  backdrop: {
    duotone: [
      ["polygon", { points: "128 160 96 160 96 128 168 56 200 88 128 160", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.6,
  parts: {
    0: {
      rotate: [0, -5, 2.6, -1.4, 0],
      x: [0, -10, 5.2, -2.7, 0],
      origin: [104, 152],
      ease: [
        "easeOut",
        [0.65, 0, 0.35, 1],
        [0.65, 0, 0.35, 1],
        [0.65, 0, 0.35, 1]
      ]
    },
    1: {
      rotate: [0, -5, 2.6, -1.4, 0],
      x: [0, -10, 5.2, -2.7, 0],
      origin: [104, 152],
      ease: [
        "easeOut",
        [0.65, 0, 0.35, 1],
        [0.65, 0, 0.35, 1],
        [0.65, 0, 0.35, 1]
      ]
    }
  }
};

export const NotePencil = createAnimatedIcon(
  "NotePencil",
  GEOMETRY,
  STROKE,
);

export default NotePencil;
