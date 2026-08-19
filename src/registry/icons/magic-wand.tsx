"use client";

/**
 * MagicWand — animated Phosphor icon.
 *
 * Flicks — the wand snaps a small arc and the stars twinkle in turn.
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
    ["line", { x1: "216", y1: "128", x2: "216", y2: "176" }],
    ["line", { x1: "192", y1: "152", x2: "240", y2: "152" }],
    ["line", { x1: "80", y1: "40", x2: "80", y2: "88" }],
    ["line", { x1: "56", y1: "64", x2: "104", y2: "64" }],
    ["line", { x1: "168", y1: "184", x2: "168", y2: "216" }],
    ["line", { x1: "152", y1: "200", x2: "184", y2: "200" }],
    ["line", { x1: "144", y1: "80", x2: "176", y2: "112" }],
    ["rect", { x: "21.49", y: "105.37", width: "213.02", height: "45.25", rx: "8", transform: "translate(-53.02 128) rotate(-45)" }],
  ],
  backdrop: {
    duotone: [
      ["path", { d: "M74.34,213.66a8,8,0,0,1-11.31,0L42.34,193a8,8,0,0,1,0-11.31L144,80l32,32Z", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.7,
  whole: {
    rotate: [0, -4.4, 2.3, 0],
    origin: [58, 198],
    duration: 0.55,
    ease: ["easeOut", "easeInOut", "easeInOut"],
    times: [0, 0.3, 0.6, 1]
  },
  parts: {
    0: {
      scale: [1, 0.4, 1.25, 1],
      opacity: [1, 0.4, 1, 1],
      origin: [216, 152],
      duration: 0.38,
      ease: ["easeOut", "easeInOut", "easeInOut"],
      times: [0, 0.35, 0.7, 1],
      delay: 0.22
    },
    1: {
      scale: [1, 0.4, 1.25, 1],
      opacity: [1, 0.4, 1, 1],
      origin: [216, 152],
      duration: 0.38,
      ease: ["easeOut", "easeInOut", "easeInOut"],
      times: [0, 0.35, 0.7, 1],
      delay: 0.22
    },
    2: {
      scale: [1, 0.4, 1.25, 1],
      opacity: [1, 0.4, 1, 1],
      origin: [80, 64],
      duration: 0.38,
      ease: ["easeOut", "easeInOut", "easeInOut"],
      times: [0, 0.35, 0.7, 1],
      delay: 0.12
    },
    3: {
      scale: [1, 0.4, 1.25, 1],
      opacity: [1, 0.4, 1, 1],
      origin: [80, 64],
      duration: 0.38,
      ease: ["easeOut", "easeInOut", "easeInOut"],
      times: [0, 0.35, 0.7, 1],
      delay: 0.12
    },
    4: {
      scale: [1, 0.4, 1.25, 1],
      opacity: [1, 0.4, 1, 1],
      origin: [168, 200],
      duration: 0.38,
      ease: ["easeOut", "easeInOut", "easeInOut"],
      times: [0, 0.35, 0.7, 1],
      delay: 0.32
    },
    5: {
      scale: [1, 0.4, 1.25, 1],
      opacity: [1, 0.4, 1, 1],
      origin: [168, 200],
      duration: 0.38,
      ease: ["easeOut", "easeInOut", "easeInOut"],
      times: [0, 0.35, 0.7, 1],
      delay: 0.32
    }
  }
};

export const MagicWand = createAnimatedIcon(
  "MagicWand",
  GEOMETRY,
  STROKE,
);

export default MagicWand;
