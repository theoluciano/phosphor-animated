"use client";

/**
 * Users — animated Phosphor icon.
 *
 * Joins in — the second figure leans in behind the first and settles.
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
    ["circle", { cx: "84", cy: "108", r: "52" }],
    ["path", { d: "M10.23,200a88,88,0,0,1,147.54,0" }],
    ["path", { d: "M172,160a87.93,87.93,0,0,1,73.77,40" }],
    ["path", { d: "M152.69,59.7A52,52,0,1,1,172,160" }],
  ],
  thin: [
    ["path", { d: "M10.23,200a88,88,0,0,1,147.54,0" }],
    ["path", { d: "M172,160a87.93,87.93,0,0,1,73.77,40" }],
    ["circle", { cx: "84", cy: "108", r: "52" }],
    ["path", { d: "M152.69,59.7A52,52,0,1,1,172,160" }],
  ],
  light: [
    ["path", { d: "M10.23,200a88,88,0,0,1,147.54,0" }],
    ["path", { d: "M172,160a87.93,87.93,0,0,1,73.77,40" }],
    ["circle", { cx: "84", cy: "108", r: "52" }],
    ["path", { d: "M152.69,59.7A52,52,0,1,1,172,160" }],
  ],
  bold: [
    ["circle", { cx: "84", cy: "108", r: "52" }],
    ["path", { d: "M13,196a88,88,0,0,1,142,0" }],
    ["path", { d: "M172,160a87.86,87.86,0,0,1,71,36" }],
    ["path", { d: "M158.62,57.74A52,52,0,1,1,172,160" }],
  ],
  duotone: [
    ["path", { d: "M10.23,200a88,88,0,0,1,147.54,0" }],
    ["path", { d: "M172,160a87.93,87.93,0,0,1,73.77,40" }],
    ["circle", { cx: "84", cy: "108", r: "52" }],
    ["path", { d: "M152.69,59.7A52,52,0,1,1,172,160" }],
  ],
  backdrop: {
    duotone: [
      ["circle", { cx: "84", cy: "108", r: "52", opacity: "0.2" }],
    ],
  },
  maps: {
    thin: [2, 0, 1, 3],
    light: [2, 0, 1, 3],
    duotone: [2, 0, 1, 3],
  },
};

const STROKE: Choreography = {
  duration: 0.62,
  parts: {
    2: {
      x: [0, -8, 3, 0],
      origin: [208, 180],
      duration: 0.52,
      ease: [
        "easeOut",
        "easeInOut",
        [0.22, 1, 0.36, 1]
      ],
      times: [0, 0.4, 0.7, 1],
      delay: 0.08
    },
    3: {
      x: [0, -8, 3, 0],
      origin: [172, 108],
      duration: 0.52,
      ease: [
        "easeOut",
        "easeInOut",
        [0.22, 1, 0.36, 1]
      ],
      times: [0, 0.4, 0.7, 1],
      delay: 0.08
    }
  }
};

export const Users = createAnimatedIcon(
  "Users",
  GEOMETRY,
  STROKE,
);

export default Users;
