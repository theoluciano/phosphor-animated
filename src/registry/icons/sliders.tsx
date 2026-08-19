"use client";

/**
 * Sliders — animated Phosphor icon.
 *
 * Adjusts — the knobs take turns sliding along their tracks.
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
    ["circle", { cx: "56", cy: "136", r: "24" }],
    ["circle", { cx: "128", cy: "88", r: "24" }],
    ["circle", { cx: "200", cy: "168", r: "24" }],
    ["line", { x1: "56", y1: "40", x2: "56", y2: "112" }],
    ["line", { x1: "200", y1: "40", x2: "200", y2: "144" }],
    ["line", { x1: "128", y1: "40", x2: "128", y2: "64" }],
    ["line", { x1: "56", y1: "160", x2: "56", y2: "216" }],
    ["line", { x1: "200", y1: "192", x2: "200", y2: "216" }],
    ["line", { x1: "128", y1: "112", x2: "128", y2: "216" }],
  ],
  backdrop: {
    duotone: [
      ["circle", { cx: "56", cy: "136", r: "24", opacity: "0.2" }],
      ["circle", { cx: "128", cy: "88", r: "24", opacity: "0.2" }],
      ["circle", { cx: "200", cy: "168", r: "24", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.6,
  parts: {
    0: { y: [0, 14, 0], ease: [
        "easeOut",
        [0.22, 1, 0.36, 1]
      ] },
    1: { y: [0, -12, 0], ease: [
        "easeOut",
        [0.22, 1, 0.36, 1]
      ], delay: 0.06 },
    2: { y: [0, 10, 0], ease: [
        "easeOut",
        [0.22, 1, 0.36, 1]
      ], delay: 0.12 },
    3: { scaleY: [1, 1.194, 1], origin: [56, 40], ease: [
        "easeOut",
        [0.22, 1, 0.36, 1]
      ] },
    4: {
      scaleY: [1, 1.096, 1],
      origin: [200, 40],
      ease: [
        "easeOut",
        [0.22, 1, 0.36, 1]
      ],
      delay: 0.12
    },
    5: {
      scaleY: [1, 0.5, 1],
      origin: [128, 40],
      ease: [
        "easeOut",
        [0.22, 1, 0.36, 1]
      ],
      delay: 0.06
    },
    6: { scaleY: [1, 0.75, 1], origin: [56, 216], ease: [
        "easeOut",
        [0.22, 1, 0.36, 1]
      ] },
    7: {
      scaleY: [1, 0.583, 1],
      origin: [200, 216],
      ease: [
        "easeOut",
        [0.22, 1, 0.36, 1]
      ],
      delay: 0.12
    },
    8: {
      scaleY: [1, 1.115, 1],
      origin: [128, 216],
      ease: [
        "easeOut",
        [0.22, 1, 0.36, 1]
      ],
      delay: 0.06
    }
  }
};

export const Sliders = createAnimatedIcon(
  "Sliders",
  GEOMETRY,
  STROKE,
);

export default Sliders;
