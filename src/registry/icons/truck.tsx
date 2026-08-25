"use client";

/**
 * Truck — animated Phosphor icon.
 *
 * Jounces — the body bobs on its springs while the wheels stay planted.
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
    ["path", { d: "M184,80h42.58A8,8,0,0,1,234,85l14,35" }],
    ["line", { x1: "24", y1: "144", x2: "184", y2: "144" }],
    ["circle", { cx: "192", cy: "192", r: "24" }],
    ["circle", { cx: "80", cy: "192", r: "24" }],
    ["line", { x1: "168", y1: "192", x2: "104", y2: "192" }],
    ["path", { d: "M184,120h64v64a8,8,0,0,1-8,8H216" }],
    ["path", { d: "M56,192H32a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8H184V169.37" }],
  ],
  bold: [
    ["path", { d: "M184,80h38.58A8,8,0,0,1,230,85l14,35" }],
    ["line", { x1: "24", y1: "128", x2: "184", y2: "128" }],
    ["circle", { cx: "192", cy: "192", r: "24" }],
    ["circle", { cx: "80", cy: "192", r: "24" }],
    ["line", { x1: "168", y1: "192", x2: "104", y2: "192" }],
    ["path", { d: "M184,120h60v64a8,8,0,0,1-8,8H216" }],
    ["path", { d: "M56,192H32a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8H184V169.37" }],
  ],
  backdrop: {
    duotone: [
      ["path", { d: "M184,120v24H24v40a8,8,0,0,0,8,8H56a24,24,0,0,1,48,0h64a24,24,0,0,1,48,0h24a8,8,0,0,0,8-8V120Z", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 1.04,
  parts: {
    0: { y: [0, -4, -2.1, -1.1, 0], ease: [
        "easeOut",
        "easeIn",
        "easeOut",
        [0.22, 1, 0.36, 1]
      ], times: [0, 0.22, 0.46, 0.7, 1] },
    1: { y: [0, -4, -2.1, -1.1, 0], ease: [
        "easeOut",
        "easeIn",
        "easeOut",
        [0.22, 1, 0.36, 1]
      ], times: [0, 0.22, 0.46, 0.7, 1] },
    4: { y: [0, -4, -2.1, -1.1, 0], ease: [
        "easeOut",
        "easeIn",
        "easeOut",
        [0.22, 1, 0.36, 1]
      ], times: [0, 0.22, 0.46, 0.7, 1] },
    5: { y: [0, -4, -2.1, -1.1, 0], ease: [
        "easeOut",
        "easeIn",
        "easeOut",
        [0.22, 1, 0.36, 1]
      ], times: [0, 0.22, 0.46, 0.7, 1] },
    6: { y: [0, -4, -2.1, -1.1, 0], ease: [
        "easeOut",
        "easeIn",
        "easeOut",
        [0.22, 1, 0.36, 1]
      ], times: [0, 0.22, 0.46, 0.7, 1] }
  }
};

export const Truck = createAnimatedIcon(
  "Truck",
  GEOMETRY,
  STROKE,
);

export default Truck;
