"use client";

/**
 * User — animated Phosphor icon.
 *
 * Draws itself — the head sketches in first, the shoulders follow.
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
    ["circle", { cx: "128", cy: "96", r: "64" }],
    ["path", { d: "M32,216c19.37-33.47,54.55-56,96-56s76.63,22.53,96,56" }],
  ],
  backdrop: {
    duotone: [
      ["circle", { cx: "128", cy: "96", r: "64", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.65,
  parts: {
    0: {
      pathLength: [0, 1],
      scale: [0.5, 1],
      origin: [128, 96],
      duration: 0.42,
      ease: [0.22, 1, 0.36, 1]
    },
    1: {
      pathLength: [0, 1],
      opacity: [0, 1],
      origin: [128, 188],
      duration: 0.38,
      ease: [0.65, 0, 0.35, 1],
      delay: 0.22
    }
  }
};

export const User = createAnimatedIcon(
  "User",
  GEOMETRY,
  STROKE,
);

export default User;
