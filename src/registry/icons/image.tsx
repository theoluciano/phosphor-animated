"use client";

/**
 * Image — animated Phosphor icon.
 *
 * Lifts in hand — the sun and hills shift with shallow parallax.
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
    ["rect", { x: "32", y: "48", width: "192", height: "160", rx: "8" }],
    ["circle", { cx: "156", cy: "100", r: "12" }],
    ["path", { d: "M147.31,164,173,138.34a8,8,0,0,1,11.31,0L224,178.06" }],
    ["path", { d: "M32,168.69l54.34-54.35a8,8,0,0,1,11.32,0L191.31,208" }],
  ],
  thin: [
    ["rect", { x: "32", y: "48", width: "192", height: "160", rx: "8" }],
    ["circle", { cx: "156", cy: "100", r: "8" }],
    ["path", { d: "M147.31,164,173,138.34a8,8,0,0,1,11.31,0L224,178.06" }],
    ["path", { d: "M32,168.69l54.34-54.35a8,8,0,0,1,11.32,0L191.31,208" }],
  ],
  light: [
    ["rect", { x: "32", y: "48", width: "192", height: "160", rx: "8" }],
    ["circle", { cx: "156", cy: "100", r: "10" }],
    ["path", { d: "M147.31,164,173,138.34a8,8,0,0,1,11.31,0L224,178.06" }],
    ["path", { d: "M32,168.69l54.34-54.35a8,8,0,0,1,11.32,0L191.31,208" }],
  ],
  bold: [
    ["circle", { cx: "160", cy: "96", r: "16" }],
    ["rect", { x: "32", y: "48", width: "192", height: "160", rx: "8" }],
    ["path", { d: "M147.31,164,173,138.34a8,8,0,0,1,11.31,0L224,178.06" }],
    ["path", { d: "M32,168.69l54.34-54.35a8,8,0,0,1,11.32,0L191.31,208" }],
  ],
  backdrop: {
    duotone: [
      ["path", { d: "M97.66,114.34,147.31,164h0L173,138.34a8,8,0,0,1,11.31,0L224,178.06V56a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V168.69l54.34-54.35A8,8,0,0,1,97.66,114.34Z", opacity: "0.2" }],
    ],
  },
  maps: {
    bold: [1, 0, 2, 3],
  },
};

const STROKE: Choreography = {
  duration: 0.58,
  whole: {
    y: [0, -8, 4.2, 0],
    rotate: [0, -2, 1, 0],
    scale: [1, 1.03, 0.992, 1],
    origin: [128, 128],
    ease: [
      "easeOut",
      [0.23, 1, 0.32, 1],
      [0.23, 1, 0.32, 1]
    ],
    times: [0, 0.28, 0.68, 1]
  },
  parts: {
    1: {
      x: [0, 8, -4.2, 0],
      y: [0, -10, 5.2, 0],
      scale: [1, 0.96, 1.06, 1],
      origin: [156, 100],
      ease: [
        "easeOut",
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1]
      ],
      times: [0, 0.34, 0.74, 1]
    },
    2: {
      y: [0, 4, -2.1, 0],
      scaleY: [1, 0.95, 1.02, 1],
      origin: [185, 178],
      ease: [
        "easeOut",
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1]
      ],
      times: [0, 0.38, 0.76, 1],
      rotate: [0, -2, 1, 0]
    },
    3: {
      y: [0, 4, -2.1, 0],
      scaleY: [1, 0.95, 1.02, 1],
      origin: [112, 208],
      ease: [
        "easeOut",
        [0.23, 1, 0.32, 1],
        [0.23, 1, 0.32, 1]
      ],
      times: [0, 0.38, 0.76, 1],
      rotate: [0, -2, 1, 0]
    }
  }
};

export const Image = createAnimatedIcon(
  "Image",
  GEOMETRY,
  STROKE,
);

export default Image;
