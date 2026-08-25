"use client";

/**
 * Package — animated Phosphor icon.
 *
 * Draws itself — the box outlines first, then its seams.
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
    ["line", { x1: "128", y1: "129.09", x2: "128", y2: "231.97" }],
    ["polyline", { points: "32.7 76.92 128 129.08 223.3 76.92" }],
    ["path", { d: "M219.84,182.84l-88,48.18a8,8,0,0,1-7.68,0l-88-48.18a8,8,0,0,1-4.16-7V80.18a8,8,0,0,1,4.16-7l88-48.18a8,8,0,0,1,7.68,0l88,48.18a8,8,0,0,1,4.16,7v95.64A8,8,0,0,1,219.84,182.84Z" }],
    ["polyline", { points: "81.56 48.31 176 100 176 152" }],
  ],
  thin: [
    ["polyline", { points: "32.7 76.92 128 129.08 223.3 76.92" }],
    ["line", { x1: "128", y1: "129.09", x2: "128", y2: "231.97" }],
    ["path", { d: "M219.84,182.84l-88,48.18a8,8,0,0,1-7.68,0l-88-48.18a8,8,0,0,1-4.16-7V80.18a8,8,0,0,1,4.16-7l88-48.18a8,8,0,0,1,7.68,0l88,48.18a8,8,0,0,1,4.16,7v95.64A8,8,0,0,1,219.84,182.84Z" }],
    ["polyline", { points: "81.56 48.31 176 100 176 152" }],
  ],
  light: [
    ["polyline", { points: "32.7 76.92 128 129.08 223.3 76.92" }],
    ["line", { x1: "128", y1: "129.09", x2: "128", y2: "231.97" }],
    ["path", { d: "M219.84,182.84l-88,48.18a8,8,0,0,1-7.68,0l-88-48.18a8,8,0,0,1-4.16-7V80.18a8,8,0,0,1,4.16-7l88-48.18a8,8,0,0,1,7.68,0l88,48.18a8,8,0,0,1,4.16,7v95.64A8,8,0,0,1,219.84,182.84Z" }],
    ["polyline", { points: "81.56 48.31 176 100 176 152" }],
  ],
  bold: [
    ["polyline", { points: "32.7 76.92 128 129.08 223.3 76.92" }],
    ["line", { x1: "128", y1: "129.09", x2: "128", y2: "231.97" }],
    ["path", { d: "M219.84,182.84l-88,48.18a8,8,0,0,1-7.68,0l-88-48.18a8,8,0,0,1-4.16-7V80.18a8,8,0,0,1,4.16-7l88-48.18a8,8,0,0,1,7.68,0l88,48.18a8,8,0,0,1,4.16,7v95.64A8,8,0,0,1,219.84,182.84Z" }],
    ["polyline", { points: "81.56 48.31 176 100 176 152" }],
  ],
  duotone: [
    ["polyline", { points: "32.7 76.92 128 129.08 223.3 76.92" }],
    ["line", { x1: "128", y1: "129.09", x2: "128", y2: "231.97" }],
    ["path", { d: "M219.84,182.84l-88,48.18a8,8,0,0,1-7.68,0l-88-48.18a8,8,0,0,1-4.16-7V80.18a8,8,0,0,1,4.16-7l88-48.18a8,8,0,0,1,7.68,0l88,48.18a8,8,0,0,1,4.16,7v95.64A8,8,0,0,1,219.84,182.84Z" }],
    ["polyline", { points: "81.56 48.31 176 100 176 152" }],
  ],
  backdrop: {
    duotone: [
      ["path", { d: "M128,129.09,32.7,76.93a8,8,0,0,0-.7,3.25v95.64a8,8,0,0,0,4.16,7l88,48.18a8,8,0,0,0,3.84,1Z", opacity: "0.2" }],
    ],
  },
  maps: {
    thin: [1, 0, 2, 3],
    light: [1, 0, 2, 3],
    bold: [1, 0, 2, 3],
    duotone: [1, 0, 2, 3],
  },
};

const STROKE: Choreography = {
  duration: 0.88,
  parts: {
    0: {
      duration: 0.704,
      ease: ["easeOut", "easeOut"],
      times: [0, 0.25, 1],
      delay: 0.32
    },
    1: {
      duration: 0.704,
      ease: ["easeOut", "easeOut"],
      times: [0, 0.25, 1],
      delay: 0.224
    },
    2: { duration: 0.72, ease: ["easeOut", "easeOut"], times: [0, 0.25, 1] },
    3: {
      pathLength: [0, 0.3, 1],
      opacity: [0, 1, 1],
      duration: 0.704,
      ease: ["easeOut", "easeOut"],
      times: [0, 0.25, 1],
      delay: 0.32
    }
  },
  whole: { rotate: [0, -7.6, 4, -2.1, 0], ease: ["easeIn", "linear", "linear", "easeOut"] }
};

export const Package = createAnimatedIcon(
  "Package",
  GEOMETRY,
  STROKE,
);

export default Package;
