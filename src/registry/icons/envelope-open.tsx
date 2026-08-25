"use client";

/**
 * EnvelopeOpen — animated Phosphor icon.
 *
 * The letter inside pushes up — the pocket fold lifts, then settles shut.
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
    ["path", { d: "M32,96V200a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V96L128,32Z" }],
    ["line", { x1: "110.55", y1: "152", x2: "34.47", y2: "205.74" }],
    ["line", { x1: "221.53", y1: "205.74", x2: "145.45", y2: "152" }],
    ["polyline", { points: "224 96 145.46 152 110.55 152 32 96" }],
  ],
  thin: [
    ["path", { d: "M224,96V200a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V96l96-64Z" }],
    ["line", { x1: "110.55", y1: "152", x2: "34.47", y2: "205.74" }],
    ["line", { x1: "221.53", y1: "205.74", x2: "145.45", y2: "152" }],
    ["polyline", { points: "224 96 145.46 152 110.55 152 32 96" }],
  ],
  light: [
    ["path", { d: "M224,96V200a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V96l96-64Z" }],
    ["line", { x1: "110.55", y1: "152", x2: "34.47", y2: "205.74" }],
    ["line", { x1: "221.53", y1: "205.74", x2: "145.45", y2: "152" }],
    ["polyline", { points: "224 96 145.46 152 110.55 152 32 96" }],
  ],
  bold: [
    ["path", { d: "M224,96V200a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V96l96-64Z" }],
    ["line", { x1: "110.55", y1: "152", x2: "34.47", y2: "205.74" }],
    ["line", { x1: "221.53", y1: "205.74", x2: "145.45", y2: "152" }],
    ["polyline", { points: "224 96 145.46 152 110.55 152 32 96" }],
  ],
  backdrop: {
    duotone: [
      ["polygon", { points: "224 96 145.46 152 110.55 152 32 96 128 32 224 96", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 1.04,
  parts: {
    0: {
      pathLength: [1, 0, 1, 1],
      origin: [128, 56],
      delay: 0.32,
      duration: 0.88,
      ease: [
        "easeOut",
        [0.22, 1, 0.36, 1],
        [0.22, 1, 0.36, 1]
      ]
    },
    1: {
      origin: [34.47, 205.74],
      duration: 1.04,
      ease: [
        "easeOut",
        [0.65, 0, 0.35, 1]
      ],
      x: [0, 0, 0],
      y: [0, 0, 0]
    }
  }
};

export const EnvelopeOpen = createAnimatedIcon(
  "EnvelopeOpen",
  GEOMETRY,
  STROKE,
);

export default EnvelopeOpen;
