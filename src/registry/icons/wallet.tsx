"use client";

/**
 * Wallet — animated Phosphor icon.
 *
 * Hefts — the whole wallet lifts, tips back, and drops into place.
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
    ["path", { d: "M40,56V184a16,16,0,0,0,16,16H216a8,8,0,0,0,8-8V80a8,8,0,0,0-8-8H56A16,16,0,0,1,40,56h0A16,16,0,0,1,56,40H192" }],
    ["circle", { cx: "180", cy: "132", r: "12" }],
  ],
  thin: [
    ["path", { d: "M40,56V184a16,16,0,0,0,16,16H216a8,8,0,0,0,8-8V80a8,8,0,0,0-8-8H56A16,16,0,0,1,40,56h0A16,16,0,0,1,56,40H192" }],
    ["circle", { cx: "180", cy: "132", r: "8" }],
  ],
  light: [
    ["path", { d: "M40,56V184a16,16,0,0,0,16,16H216a8,8,0,0,0,8-8V80a8,8,0,0,0-8-8H56A16,16,0,0,1,40,56h0A16,16,0,0,1,56,40H192" }],
    ["circle", { cx: "180", cy: "132", r: "10" }],
  ],
  bold: [
    ["circle", { cx: "180", cy: "136", r: "16" }],
    ["path", { d: "M40,60.73V180a20,20,0,0,0,20,20H204a20,20,0,0,0,20-20V100a20,20,0,0,0-20-20H60.48C49.63,80,40.4,71.57,40,60.73A20,20,0,0,1,60,40H192" }],
  ],
  backdrop: {
    duotone: [
      ["path", { d: "M40,184a16,16,0,0,0,16,16H216a8,8,0,0,0,8-8V80a8,8,0,0,0-8-8H56A16,16,0,0,1,40,56Z", opacity: "0.2" }],
    ],
  },
  maps: {
    bold: [1, 0],
  },
};

const STROKE: Choreography = {
  duration: 0.88,
  whole: {
    y: [0, -13, 6.8, 0],
    rotate: [0, -4, 2.1, 0],
    origin: [128, 128],
    ease: [
      "easeOut",
      "easeInOut",
      [0.22, 1, 0.36, 1]
    ],
    times: [0, 0.42, 0.72, 1]
  }
};

export const Wallet = createAnimatedIcon(
  "Wallet",
  GEOMETRY,
  STROKE,
);

export default Wallet;
