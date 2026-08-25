"use client";

/**
 * House — animated Phosphor icon.
 *
 * Hops once — a welcoming little bounce.
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
    ["path", { d: "M104,216V152h48v64h64V120a8,8,0,0,0-2.34-5.66l-80-80a8,8,0,0,0-11.32,0l-80,80A8,8,0,0,0,40,120v96Z" }],
  ],
  backdrop: {
    duotone: [
      ["path", { d: "M104,216V152h48v64h64V120a8,8,0,0,0-2.34-5.66l-80-80a8,8,0,0,0-11.32,0l-80,80A8,8,0,0,0,40,120v96Z", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.88,
  whole: { ease: ["easeOut", "easeIn", "easeOut", "easeIn", "easeIn"], duration: 0.976, scale: [1, 1, 1, 1.1, 0.97, 1] }
};

export const House = createAnimatedIcon(
  "House",
  GEOMETRY,
  STROKE,
);

export default House;
