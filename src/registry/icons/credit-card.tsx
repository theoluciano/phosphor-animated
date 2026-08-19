"use client";

/**
 * CreditCard — animated Phosphor icon.
 *
 * Swipes — the whole card slides through and the digits catch up.
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
    ["rect", { x: "24", y: "56", width: "208", height: "144", rx: "8" }],
    ["line", { x1: "168", y1: "168", x2: "200", y2: "168" }],
    ["line", { x1: "120", y1: "168", x2: "136", y2: "168" }],
    ["line", { x1: "24", y1: "96", x2: "232", y2: "96" }],
  ],
  bold: [
    ["rect", { x: "24", y: "56", width: "208", height: "144", rx: "8" }],
    ["line", { x1: "164", y1: "164", x2: "196", y2: "164" }],
    ["line", { x1: "116", y1: "164", x2: "128", y2: "164" }],
    ["line", { x1: "24", y1: "100", x2: "232", y2: "100" }],
  ],
  backdrop: {
    duotone: [
      ["path", { d: "M24,96H232v96a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8Z", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.7,
  whole: { x: [0, -12, 6.2, 0], ease: ["easeOut", "easeInOut", "easeInOut"], times: [0, 0.4, 0.75, 1] },
  parts: {
    1: {
      origin: [184, 168],
      duration: 0.5,
      ease: [
        [0.22, 1, 0.36, 1],
        "easeInOut"
      ],
      delay: 0,
      pathLength: [1, 0, 1],
      times: [0, 0.5, 1]
    },
    2: {
      origin: [128, 168],
      duration: 0.5,
      ease: [
        [0.22, 1, 0.36, 1],
        "easeInOut"
      ],
      delay: 0,
      pathLength: [1, 0, 1],
      times: [0, 0.5, 1]
    }
  }
};

export const CreditCard = createAnimatedIcon(
  "CreditCard",
  GEOMETRY,
  STROKE,
);

export default CreditCard;
