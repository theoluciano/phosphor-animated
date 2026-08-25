"use client";

/**
 * Folder — animated Phosphor icon.
 *
 * Picked up — lifts with a small lean, then settles back with weight.
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
    ["path", { d: "M216.89,208H39.38A7.4,7.4,0,0,1,32,200.62V80H216a8,8,0,0,1,8,8V200.89A7.11,7.11,0,0,1,216.89,208Z" }],
    ["path", { d: "M32,80V56a8,8,0,0,1,8-8H92.69a8,8,0,0,1,5.65,2.34L128,80" }],
  ],
  bold: [
    ["path", { d: "M216.89,208H39.38A7.4,7.4,0,0,1,32,200.62V80H216a8,8,0,0,1,8,8V200.89A7.11,7.11,0,0,1,216.89,208Z" }],
    ["path", { d: "M32,80V52a8,8,0,0,1,8-8H92.41a8,8,0,0,1,6,2.69L128,80" }],
  ],
  backdrop: {
    duotone: [
      ["path", { d: "M98.34,50.34,128,80H32V56a8,8,0,0,1,8-8H92.69A8,8,0,0,1,98.34,50.34Z", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.88,
  whole: { origin: [128, 128], ease: ["easeIn", "linear", "linear", "linear", "linear", "linear", "easeOut"], rotate: [0, -4, 4, -4, 4, -2, 2, 0] },
  parts: {
    1: { ease: ["easeIn", "linear", "easeOut"], pathLength: [1, 0, 1, 1] }
  }
};

export const Folder = createAnimatedIcon(
  "Folder",
  GEOMETRY,
  STROKE,
);

export default Folder;
