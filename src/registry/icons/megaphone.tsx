"use client";

/**
 * Megaphone — animated Phosphor icon.
 *
 * Shouts — rears up on its grip, then settles.
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
    ["path", { d: "M160,80V200.67a8,8,0,0,0,3.56,6.65l11,7.33a8,8,0,0,0,12.2-4.72L200,160" }],
    ["path", { d: "M40,200a8,8,0,0,0,13.15,6.12C105.55,162.16,160,160,160,160h40a40,40,0,0,0,0-80H160S105.55,77.84,53.15,33.89A8,8,0,0,0,40,40Z" }],
  ],
  bold: [
    ["path", { d: "M40,200a8,8,0,0,0,13.15,6.12C105.55,162.16,160,160,160,160h40a40,40,0,0,0,0-80H160S105.55,77.84,53.15,33.89A8,8,0,0,0,40,40Z" }],
    ["path", { d: "M156,79.67v121a8,8,0,0,0,3.56,6.65l15,7.33a8,8,0,0,0,12.2-4.72L200,160" }],
  ],
  backdrop: {
    duotone: [
      ["path", { d: "M160,160h40a40,40,0,0,0,0-80H160Z", opacity: "0.2" }],
    ],
  },
  maps: {
    bold: [1, 0],
  },
};

const STROKE: Choreography = {
  duration: 1.12,
  whole: {
    rotate: [0, -7.6, 4, -2.1, 0],
    origin: [180, 200],
    ease: ["easeIn", "linear", "linear", "easeOut"],
    times: [0, 0.18, 0.48, 0.74, 1]
  }
};

export const Megaphone = createAnimatedIcon(
  "Megaphone",
  GEOMETRY,
  STROKE,
);

export default Megaphone;
