"use client";

/**
 * Cpu — animated Phosphor icon.
 *
 * Ticks — every pin stretches with the clock, twice.
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
    ["rect", { x: "104", y: "104", width: "48", height: "48" }],
    ["rect", { x: "48", y: "48", width: "160", height: "160", rx: "8" }],
    ["line", { x1: "208", y1: "104", x2: "232", y2: "104" }],
    ["line", { x1: "208", y1: "152", x2: "232", y2: "152" }],
    ["line", { x1: "24", y1: "104", x2: "48", y2: "104" }],
    ["line", { x1: "24", y1: "152", x2: "48", y2: "152" }],
    ["line", { x1: "152", y1: "208", x2: "152", y2: "232" }],
    ["line", { x1: "104", y1: "208", x2: "104", y2: "232" }],
    ["line", { x1: "152", y1: "24", x2: "152", y2: "48" }],
    ["line", { x1: "104", y1: "24", x2: "104", y2: "48" }],
  ],
  bold: [
    ["rect", { x: "100", y: "100", width: "56", height: "56" }],
    ["rect", { x: "48", y: "48", width: "160", height: "160", rx: "8" }],
    ["line", { x1: "208", y1: "104", x2: "232", y2: "104" }],
    ["line", { x1: "208", y1: "152", x2: "232", y2: "152" }],
    ["line", { x1: "24", y1: "104", x2: "48", y2: "104" }],
    ["line", { x1: "24", y1: "152", x2: "48", y2: "152" }],
    ["line", { x1: "152", y1: "208", x2: "152", y2: "232" }],
    ["line", { x1: "104", y1: "208", x2: "104", y2: "232" }],
    ["line", { x1: "152", y1: "24", x2: "152", y2: "48" }],
    ["line", { x1: "104", y1: "24", x2: "104", y2: "48" }],
  ],
  backdrop: {
    duotone: [
      ["path", { d: "M200,48H56a8,8,0,0,0-8,8V200a8,8,0,0,0,8,8H200a8,8,0,0,0,8-8V56A8,8,0,0,0,200,48ZM152,152H104V104h48Z", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 1.12,
  parts: {
    2: { origin: [208, 104], ease: ["easeIn", "linear", "easeOut", "easeOut"], scale: [1, 0, 1, 1, 1] },
    3: { origin: [208, 152], ease: ["easeIn", "linear", "easeOut", "easeOut"], scale: [1, 0, 1, 1, 1] },
    4: { origin: [48, 104], ease: ["easeIn", "linear", "easeOut", "easeOut"], scale: [1, 0, 1, 1, 1] },
    5: {
      scale: [1, 0, 1, 1, 1],
      origin: [48, 152],
      ease: ["easeIn", "linear", "easeOut", "easeOut"],
      x: [0, 0, 0, 0, 0],
      y: [0, 0, 0, 0, 0]
    },
    6: { scale: [1, 0, 1, 1, 1], origin: [152, 208], ease: ["easeIn", "linear", "easeOut", "easeOut"] },
    7: { scale: [1, 0, 1, 1, 1], origin: [104, 208], ease: ["easeIn", "linear", "easeOut", "easeOut"] },
    8: { scale: [1, 0, 1, 1, 1], origin: [152, 48], ease: ["easeIn", "linear", "easeOut", "easeOut"] },
    9: { scale: [1, 0, 1, 1, 1], origin: [104, 48], ease: ["easeIn", "linear", "easeOut", "easeOut"] }
  }
};

export const Cpu = createAnimatedIcon(
  "Cpu",
  GEOMETRY,
  STROKE,
);

export default Cpu;
