"use client";

/**
 * Spinner — animated Phosphor icon.
 *
 * Spins — one full turn of the wheel, winding up and easing off.
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
    ["line", { x1: "128", y1: "32", x2: "128", y2: "64" }],
    ["line", { x1: "195.88", y1: "60.12", x2: "173.25", y2: "82.75" }],
    ["line", { x1: "224", y1: "128", x2: "192", y2: "128" }],
    ["line", { x1: "195.88", y1: "195.88", x2: "173.25", y2: "173.25" }],
    ["line", { x1: "128", y1: "224", x2: "128", y2: "192" }],
    ["line", { x1: "60.12", y1: "195.88", x2: "82.75", y2: "173.25" }],
    ["line", { x1: "32", y1: "128", x2: "64", y2: "128" }],
    ["line", { x1: "60.12", y1: "60.12", x2: "82.75", y2: "82.75" }],
  ],
  backdrop: {
    duotone: [
      ["circle", { cx: "128", cy: "128", r: "96", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.5,
  parts: {
    0: {
      opacity: [1, 0.15, 1],
      origin: [128, 128],
      duration: 0.55,
      ease: ["easeInOut", "easeInOut"],
      times: [0, 0.4, 1],
      delay: 0
    },
    1: {
      opacity: [1, 0.15, 1],
      origin: [128, 128],
      duration: 0.55,
      ease: ["easeInOut", "easeInOut"],
      times: [0, 0.4, 1],
      delay: 0.055
    },
    2: {
      opacity: [1, 0.15, 1],
      origin: [128, 128],
      duration: 0.55,
      ease: ["easeInOut", "easeInOut"],
      times: [0, 0.4, 1],
      delay: 0.11
    },
    3: {
      opacity: [1, 0.15, 1],
      origin: [128, 128],
      duration: 0.55,
      ease: ["easeInOut", "easeInOut"],
      times: [0, 0.4, 1],
      delay: 0.165
    },
    4: {
      opacity: [1, 0.15, 1],
      origin: [128, 128],
      duration: 0.55,
      ease: ["easeInOut", "easeInOut"],
      times: [0, 0.4, 1],
      delay: 0.22
    },
    5: {
      opacity: [1, 0.15, 1],
      origin: [128, 128],
      duration: 0.55,
      ease: ["easeInOut", "easeInOut"],
      times: [0, 0.4, 1],
      delay: 0.275
    },
    6: {
      opacity: [1, 0.15, 1],
      origin: [128, 128],
      duration: 0.55,
      ease: ["easeInOut", "easeInOut"],
      times: [0, 0.4, 1],
      delay: 0.33
    },
    7: {
      opacity: [1, 0.15, 1],
      origin: [128, 128],
      duration: 0.55,
      ease: ["easeInOut", "easeInOut"],
      times: [0, 0.4, 1],
      delay: 0.385
    }
  }
};

export const Spinner = createAnimatedIcon(
  "Spinner",
  GEOMETRY,
  STROKE,
);

export default Spinner;
