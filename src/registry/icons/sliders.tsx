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
  duration: 0.96,
  parts: {
    0: { y: [0, -36, 0], ease: ["easeIn", "easeOut"], x: [0, 0, 0] },
    1: { y: [0, 27, 0], ease: ["easeIn", "easeOut"], delay: 0.096 },
    2: { y: [0, -46, 0], ease: ["easeIn", "easeOut"], delay: 0.192 },
    3: {
      scaleY: [1, 0.44, 1],
      origin: [56, 40],
      ease: ["easeIn", "easeOut"],
      x: [0, 0, 0],
      y: [0, 0, 0]
    },
    4: {
      scaleY: [1, 0.55, 1],
      origin: [200, 40],
      ease: ["easeIn", "easeOut"],
      delay: 0.192,
      x: [0, 0, 0],
      y: [0, 0, 0]
    },
    5: {
      scaleY: [1, 1.5, 1],
      origin: [128, 40],
      ease: ["easeIn", "easeOut"],
      delay: 0.096,
      y: [0, 5, 0]
    },
    6: { scaleY: [1, 1.45, 1], origin: [56, 216], ease: ["easeIn", "easeOut"] },
    7: {
      scaleY: [1, 1.98, 1],
      origin: [200, 216],
      ease: ["easeIn", "easeOut"],
      delay: 0.192,
      y: [0, -11, 0]
    },
    8: {
      scaleY: [1, 0.71, 1],
      origin: [128, 216],
      ease: ["easeIn", "easeOut"],
      delay: 0.096
    }
  }
};

export const Sliders = createAnimatedIcon(
  "Sliders",
  GEOMETRY,
  STROKE,
);

export default Sliders;
