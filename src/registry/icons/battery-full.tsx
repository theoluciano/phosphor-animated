"use client";

/**
 * BatteryFull — animated Phosphor icon.
 *
 * Recharges — the bars blank out, then refill from the left.
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
    ["rect", { x: "16", y: "64", width: "200", height: "128", rx: "16" }],
    ["line", { x1: "176", y1: "96", x2: "176", y2: "160" }],
    ["line", { x1: "136", y1: "96", x2: "136", y2: "160" }],
    ["line", { x1: "96", y1: "96", x2: "96", y2: "160" }],
    ["line", { x1: "56", y1: "96", x2: "56", y2: "160" }],
    ["line", { x1: "248", y1: "96", x2: "248", y2: "160" }],
  ],
  bold: [
    ["rect", { x: "12", y: "64", width: "200", height: "128", rx: "16" }],
    ["line", { x1: "172", y1: "104", x2: "172", y2: "152" }],
    ["line", { x1: "132", y1: "104", x2: "132", y2: "152" }],
    ["line", { x1: "92", y1: "104", x2: "92", y2: "152" }],
    ["line", { x1: "52", y1: "104", x2: "52", y2: "152" }],
    ["line", { x1: "244", y1: "104", x2: "244", y2: "152" }],
  ],
  backdrop: {
    duotone: [
      ["rect", { x: "16", y: "64", width: "200", height: "128", rx: "16", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 1.44,
  parts: {
    1: { opacity: [1, 0, 0, 1], ease: ["easeInOut", "linear", "easeInOut"], times: [0, 0.25, 0.65, 1] },
    2: { opacity: [1, 0, 0, 1, 1], ease: ["easeInOut", "linear", "easeInOut", "linear"], times: [0, 0.25, 0.55, 0.8, 1] },
    3: { opacity: [1, 0, 0, 1, 1], ease: ["easeInOut", "linear", "easeInOut", "linear"], times: [0, 0.25, 0.45, 0.7, 1] },
    4: { opacity: [1, 0, 0, 1, 1], ease: ["easeInOut", "linear", "easeInOut", "linear"], times: [0, 0.25, 0.35, 0.6, 1] }
  }
};

export const BatteryFull = createAnimatedIcon(
  "BatteryFull",
  GEOMETRY,
  STROKE,
);

export default BatteryFull;
