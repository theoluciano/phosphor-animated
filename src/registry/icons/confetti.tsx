"use client";

/**
 * Confetti — animated Phosphor icon.
 *
 * Pops — the cone recoils and the confetti kicks outward.
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
    ["path", { d: "M40.49,205.52,93,61.14a7.79,7.79,0,0,1,12.84-2.85l91.88,91.88A7.79,7.79,0,0,1,194.86,163L50.48,215.51A7.79,7.79,0,0,1,40.49,205.52Z" }],
    ["path", { d: "M168,72s0-24,24-24,24-24,24-24" }],
    ["line", { x1: "144", y1: "16", x2: "144", y2: "40" }],
    ["line", { x1: "216", y1: "112", x2: "232", y2: "128" }],
    ["line", { x1: "216", y1: "80", x2: "240", y2: "72" }],
    ["line", { x1: "78.09", y1: "102.09", x2: "153.91", y2: "177.91" }],
    ["line", { x1: "101.11", y1: "197.11", x2: "58.89", y2: "154.89" }],
  ],
  bold: [
    ["path", { d: "M40.49,205.52,93,61.14a7.79,7.79,0,0,1,12.84-2.85l91.88,91.88A7.79,7.79,0,0,1,194.86,163L50.48,215.51A7.79,7.79,0,0,1,40.49,205.52Z" }],
    ["line", { x1: "140", y1: "16", x2: "140", y2: "40" }],
    ["line", { x1: "220", y1: "116", x2: "236", y2: "132" }],
    ["line", { x1: "216", y1: "80", x2: "240", y2: "72" }],
    ["line", { x1: "78.09", y1: "102.09", x2: "153.91", y2: "177.91" }],
    ["line", { x1: "101.11", y1: "197.11", x2: "58.89", y2: "154.89" }],
    ["path", { d: "M168.42,68c1.19-6.83,5.8-20,23.58-20,24,0,24-24,24-24" }],
  ],
  backdrop: {
    duotone: [
      ["path", { d: "M101.11,197.11,58.89,154.89l-18.4,50.63a7.79,7.79,0,0,0,10,10Z", opacity: "0.2" }],
      ["path", { d: "M78.09,102.09l75.82,75.82,41-14.9a7.79,7.79,0,0,0,2.85-12.84L105.83,58.29A7.79,7.79,0,0,0,93,61.14Z", opacity: "0.2" }],
    ],
  },
  maps: {
    bold: [0, 6, 1, 2, 3, 4, 5],
  },
};

const STROKE: Choreography = {
  duration: 0.8,
  parts: {
    0: {
      rotate: [0, -6, 3.1, 0],
      x: [0, -5, 2.6, 0],
      y: [0, 5, -2.6, 0],
      origin: [45, 210],
      duration: 0.6,
      ease: [
        "easeOut",
        [0.22, 1, 0.36, 1],
        [0.22, 1, 0.36, 1]
      ],
      times: [0, 0.255, 0.65, 1]
    },
    1: {
      scale: [1, 0, 1, 1, 1],
      x: [0, -50, 0, 0, 0],
      y: [0, 47, 0, 0, 0],
      origin: [192, 48],
      duration: 0.55,
      ease: [
        [0.34, 1.56, 0.64, 1],
        "linear",
        "easeOut",
        "easeOut"
      ],
      delay: 0.08
    },
    2: {
      scale: [1, 0, 1, 1, 1],
      y: [0, 56, 0, 0, 0],
      origin: [144, 28],
      duration: 0.55,
      ease: [
        [0.34, 1.56, 0.64, 1],
        "linear",
        "easeOut",
        "easeOut"
      ],
      delay: 0.05
    },
    3: {
      scale: [1, 0, 1, 1, 1],
      x: [0, -60, 0, 0, 0],
      origin: [224, 120],
      duration: 0.55,
      ease: [
        [0.34, 1.56, 0.64, 1],
        "linear",
        "easeOut",
        "easeOut"
      ],
      delay: 0.14
    },
    4: {
      scale: [1, 0, 1, 1, 1],
      x: [0, -70, 0, 0, 0],
      y: [0, 26, 0, 0, 0],
      origin: [228, 76],
      duration: 0.55,
      ease: [
        [0.34, 1.56, 0.64, 1],
        "linear",
        "easeOut",
        "easeOut"
      ],
      delay: 0.11
    },
    5: {
      rotate: [0, -6, 3.1, 0],
      x: [0, -5, 2.6, 0],
      y: [0, 5, -2.6, 0],
      origin: [45, 210],
      duration: 0.6,
      ease: [
        "easeOut",
        [0.22, 1, 0.36, 1],
        [0.22, 1, 0.36, 1]
      ],
      times: [0, 0.256, 0.65, 1]
    },
    6: {
      rotate: [0, -6, 3.1, 0],
      x: [0, -5, 2.6, 0],
      y: [0, 5, -2.6, 0],
      origin: [45, 210],
      duration: 0.6,
      ease: [
        "easeOut",
        [0.22, 1, 0.36, 1],
        [0.22, 1, 0.36, 1]
      ],
      times: [0, 0.259, 0.65, 1]
    }
  }
};

export const Confetti = createAnimatedIcon(
  "Confetti",
  GEOMETRY,
  STROKE,
);

export default Confetti;
