"use client";

/**
 * Wind — animated Phosphor icon.
 *
 * Blows through — each stream draws itself on, one gust behind the last.
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
    ["path", { d: "M128,192c3.39,9.15,13.67,16,24,16a24,24,0,0,0,0-48H40" }],
    ["path", { d: "M96,64c3.39-9.15,13.67-16,24-16a24,24,0,0,1,0,48H24" }],
    ["path", { d: "M184,96c3.39-9.15,13.67-16,24-16a24,24,0,0,1,0,48H32" }],
  ],
  bold: [
    ["path", { d: "M101.22,52A27.1,27.1,0,0,1,120,44a24,24,0,0,1,0,48H24" }],
    ["path", { d: "M189.22,88A27.1,27.1,0,0,1,208,80a24,24,0,0,1,0,48H32" }],
    ["path", { d: "M133.22,204A27.1,27.1,0,0,0,152,212a24,24,0,0,0,0-48H40" }],
  ],
  backdrop: {
    duotone: [
      ["circle", { cx: "120", cy: "72", r: "24", opacity: "0.2" }],
      ["circle", { cx: "208", cy: "104", r: "24", opacity: "0.2" }],
      ["circle", { cx: "152", cy: "184", r: "24", opacity: "0.2" }],
    ],
  },
  divergent: ["bold"],
};

const STROKE: Choreography = {
  duration: 1.28,
  parts: {
    0: {
      pathLength: [0, 1],
      opacity: [0, 1],
      duration: 0.704,
      ease: "easeInOut",
      delay: 0.256
    },
    1: {
      pathLength: [0, 1],
      opacity: [0, 1],
      duration: 0.704,
      ease: "easeInOut",
      delay: 0.512
    },
    2: {
      pathLength: [0, 1],
      opacity: [0, 1],
      duration: 0.704,
      ease: "easeInOut"
    }
  }
};

export const Wind = createAnimatedIcon(
  "Wind",
  GEOMETRY,
  STROKE,
);

export default Wind;
