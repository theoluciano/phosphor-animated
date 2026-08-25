"use client";

/**
 * GameController — animated Phosphor icon.
 *
 * Rumbles — a quick vibration buzzes through the pad and dies out.
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
    ["line", { x1: "152", y1: "104", x2: "176", y2: "104" }],
    ["line", { x1: "72", y1: "104", x2: "104", y2: "104" }],
    ["line", { x1: "88", y1: "88", x2: "88", y2: "120" }],
    ["path", { d: "M105.91,152,63.8,199.8a28,28,0,0,1-47.37-24.66L32.79,91a52,52,0,0,1,51.1-43H172a52,52,0,1,1,0,104Z" }],
    ["path", { d: "M150.09,152l42.11,47.8a28,28,0,0,0,47.37-24.66L223.21,91" }],
  ],
  backdrop: {
    duotone: [
      ["path", { d: "M239.57,175.14,223.21,91h0A51.94,51.94,0,0,1,172,152H150.09l42.11,47.8a28,28,0,0,0,47.37-24.66Z", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.8,
  whole: { rotate: [0, -4, 4, -4, 4, -2, 2, 0], ease: ["easeIn", "linear", "linear", "linear", "linear", "linear", "easeOut"], duration: 0.88 },
  parts: {
    0: { opacity: [1, 0, 1, 1], ease: ["easeInOut", "easeInOut", "easeInOut"], delay: 0.4 },
    1: { ease: ["easeInOut", "easeInOut", "easeInOut"], opacity: [1, 0, 1, 1] },
    2: { ease: ["easeInOut", "easeInOut", "easeInOut"], opacity: [1, 0, 1, 1] }
  }
};

export const GameController = createAnimatedIcon(
  "GameController",
  GEOMETRY,
  STROKE,
);

export default GameController;
