"use client";

/**
 * Question — animated Phosphor icon.
 *
 * Wonders — the mark waggles side to side, dot in tow.
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
    ["circle", { cx: "128", cy: "180", r: "12" }],
    ["path", { d: "M128,144v-8c17.67,0,32-12.54,32-28s-14.33-28-32-28S96,92.54,96,108v4" }],
    ["circle", { cx: "128", cy: "128", r: "96" }],
  ],
  thin: [
    ["circle", { cx: "128", cy: "180", r: "8" }],
    ["path", { d: "M128,144v-8c17.67,0,32-12.54,32-28s-14.33-28-32-28S96,92.54,96,108v4" }],
    ["circle", { cx: "128", cy: "128", r: "96" }],
  ],
  light: [
    ["circle", { cx: "128", cy: "180", r: "10" }],
    ["path", { d: "M128,144v-8c17.67,0,32-12.54,32-28s-14.33-28-32-28S96,92.54,96,108v4" }],
    ["circle", { cx: "128", cy: "128", r: "96" }],
  ],
  bold: [
    ["circle", { cx: "128", cy: "180", r: "16" }],
    ["circle", { cx: "128", cy: "128", r: "96" }],
    ["path", { d: "M128,140v-8c17.67,0,32-12.54,32-28s-14.33-28-32-28S96,88.54,96,104v4" }],
  ],
  backdrop: {
    duotone: [
      ["circle", { cx: "128", cy: "128", r: "96", opacity: "0.2" }],
    ],
  },
  maps: {
    bold: [0, 2, 1],
  },
};

const STROKE: Choreography = {
  duration: 0.88,
  parts: {
    1: {
      origin: [128, 134],
      duration: 0.7,
      ease: ["easeOut"],
      pathLength: [0, 1]
    }
  },
  whole: { scale: [1, 1, 1, 1.1, 0.97, 1], ease: ["easeInOut", "easeInOut", "easeInOut", "easeInOut", "easeInOut"], duration: 0.7 }
};

export const Question = createAnimatedIcon(
  "Question",
  GEOMETRY,
  STROKE,
);

export default Question;
