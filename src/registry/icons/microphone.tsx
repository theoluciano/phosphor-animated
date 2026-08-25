"use client";

/**
 * Microphone — animated Phosphor icon.
 *
 * Sound check — the capsule bobs one-two in its cradle.
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
    ["rect", { x: "88", y: "24", width: "80", height: "144", rx: "40" }],
    ["line", { x1: "128", y1: "200", x2: "128", y2: "240" }],
    ["path", { d: "M200,128a72,72,0,0,1-144,0" }],
  ],
  bold: [
    ["rect", { x: "88", y: "24", width: "80", height: "144", rx: "40" }],
    ["line", { x1: "128", y1: "208", x2: "128", y2: "240" }],
    ["path", { d: "M208,128a80,80,0,0,1-160,0" }],
  ],
  backdrop: {
    duotone: [
      ["rect", { x: "88", y: "24", width: "80", height: "144", rx: "40", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.6,
  parts: {
    0: {
      y: [0, -10, 8, -4, 0],
      origin: [128, 96],
      duration: 0.6,
      ease: ["easeOut", "easeInOut", "easeInOut", "easeInOut"],
      x: [0, 0, 0, 0, 0]
    }
  }
};

export const Microphone = createAnimatedIcon(
  "Microphone",
  GEOMETRY,
  STROKE,
);

export default Microphone;
