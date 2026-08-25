"use client";

/**
 * ThumbsUp — animated Phosphor icon.
 *
 * Approves — the whole hand lifts and tips back, with a little pop.
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
    ["path", { d: "M32,104H80a0,0,0,0,1,0,0V208a0,0,0,0,1,0,0H32a8,8,0,0,1-8-8V112A8,8,0,0,1,32,104Z" }],
    ["path", { d: "M80,104l40-80a32,32,0,0,1,32,32V80h64a16,16,0,0,1,15.87,18l-12,96A16,16,0,0,1,204,208H80" }],
  ],
  backdrop: {
    duotone: [
      ["path", { d: "M32,104H80a0,0,0,0,1,0,0V208a0,0,0,0,1,0,0H32a8,8,0,0,1-8-8V112A8,8,0,0,1,32,104Z", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.896,
  whole: {
    rotate: [0, -5, 2.6, 0],
    y: [0, -8.26, 6.2, 0],
    scale: [1, 1.02, 0.995, 1],
    origin: [80, 200],
    ease: [
      "easeOut",
      [0.23, 1, 0.32, 1],
      [0.23, 1, 0.32, 1]
    ]
  }
};

export const ThumbsUp = createAnimatedIcon(
  "ThumbsUp",
  GEOMETRY,
  STROKE,
);

export default ThumbsUp;
