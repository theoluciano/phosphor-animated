"use client";

/**
 * Plug — animated Phosphor icon.
 *
 * Connects — the plug snaps home, then current flickers through the prongs.
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
    ["line", { x1: "144", y1: "64", x2: "184", y2: "24" }],
    ["line", { x1: "232", y1: "72", x2: "192", y2: "112" }],
    ["line", { x1: "224", y1: "144", x2: "112", y2: "32" }],
    ["path", { d: "M212,132l-58.63,58.63a32,32,0,0,1-45.25,0L65.37,147.88a32,32,0,0,1,0-45.25L124,44" }],
    ["line", { x1: "86.75", y1: "169.25", x2: "32", y2: "224" }],
  ],
  backdrop: {
    duotone: [
      ["path", { d: "M212,132l-58.63,58.63a32,32,0,0,1-45.25,0L65.37,147.88a32,32,0,0,1,0-45.25L124,44Z", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 1.04,
  whole: {
    x: [0, -20, 0],
    y: [0, 20, 0],
    duration: 0.72,
    ease: [
      "easeInOut",
      [0.34, 1.56, 0.64, 1]
    ],
    times: [0, 0.4, 1]
  },
  parts: {
    0: {
      origin: [164, 44],
      duration: 0.704,
      ease: ["easeOut", "easeInOut", "easeInOut", "easeInOut"],
      delay: 0.416
    },
    1: {
      origin: [212, 92],
      duration: 0.704,
      ease: ["easeOut", "easeInOut", "easeInOut", "easeInOut"],
      delay: 0.512
    }
  }
};

export const Plug = createAnimatedIcon(
  "Plug",
  GEOMETRY,
  STROKE,
);

export default Plug;
