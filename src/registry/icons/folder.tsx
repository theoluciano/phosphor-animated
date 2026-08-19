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
  duration: 0.55,
  whole: {
    y: [0, -10, 5.2, 0],
    rotate: [0, -2, 1, 0],
    origin: [128, 208],
    ease: [
      "easeOut",
      [0.23, 1, 0.32, 1],
      [0.23, 1, 0.32, 1]
    ],
    times: [0, 0.4, 0.72, 1]
  }
};

export const Folder = createAnimatedIcon(
  "Folder",
  GEOMETRY,
  STROKE,
);

export default Folder;
