"use client";

/**
 * Tree — animated Phosphor icon.
 *
 * Sways — the whole tree leans through a gust and settles on its roots.
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
    ["line", { x1: "128", y1: "232", x2: "128", y2: "88" }],
    ["line", { x1: "128", y1: "152", x2: "80", y2: "128" }],
    ["line", { x1: "128", y1: "128", x2: "176", y2: "104" }],
    ["path", { d: "M128,177.94a63.72,63.72,0,0,0,41.66,14c33.93-.86,62.43-30.22,62.34-64.16a64,64,0,0,0-40.13-59.2,68,68,0,0,0-127.74,0A64,64,0,0,0,24,127.82c-.09,33.94,28.42,63.3,62.35,64.16A63.71,63.71,0,0,0,128,177.94Z" }],
  ],
  backdrop: {
    duotone: [
      ["path", { d: "M128,177.94a63.72,63.72,0,0,0,41.66,14c33.93-.86,62.43-30.22,62.34-64.16a64,64,0,0,0-40.13-59.2,68,68,0,0,0-127.74,0A64,64,0,0,0,24,127.82c-.09,33.94,28.42,63.3,62.35,64.16A63.71,63.71,0,0,0,128,177.94Z", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.96,
  whole: {
    rotate: [0, -4.1, 2.1, -1.1, 0],
    origin: [128, 232],
    ease: [
      "easeOut",
      "easeInOut",
      "easeInOut",
      [0.22, 1, 0.36, 1]
    ],
    times: [0, 0.2, 0.48, 0.74, 1]
  }
};

export const Tree = createAnimatedIcon(
  "Tree",
  GEOMETRY,
  STROKE,
);

export default Tree;
