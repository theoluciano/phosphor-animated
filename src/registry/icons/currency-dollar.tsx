"use client";

/**
 * CurrencyDollar — animated Phosphor icon.
 *
 * Draws itself — the curve sweeps through, then the bar strikes down.
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
    ["line", { x1: "128", y1: "24", x2: "128", y2: "232" }],
    ["path", { d: "M184,88a40,40,0,0,0-40-40H112a40,40,0,0,0,0,80h40a40,40,0,0,1,0,80H104a40,40,0,0,1-40-40" }],
  ],
  backdrop: {
    duotone: [
      ["path", { d: "M128,128h24a40,40,0,0,1,0,80H128Z", opacity: "0.2" }],
      ["path", { d: "M128,48H112a40,40,0,0,0,0,80h16Z", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.5,
  parts: {
    0: {
      pathLength: [0, 1, 1],
      origin: [128, 128],
      duration: 0.5,
      ease: ["easeIn", "easeOut"],
      delay: 0,
      times: [0.415, 0.786, 1],
      opacity: [0, 1, 1]
    },
    1: {
      pathLength: [0, 1, 1],
      origin: [128, 128],
      duration: 0.5,
      ease: ["easeIn", "easeOut"],
      opacity: [0, 1, 1]
    }
  }
};

export const CurrencyDollar = createAnimatedIcon(
  "CurrencyDollar",
  GEOMETRY,
  STROKE,
);

export default CurrencyDollar;
