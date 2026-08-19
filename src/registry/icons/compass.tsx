"use client";

/**
 * Compass — animated Phosphor icon.
 *
 * Finds north — the needle whips a full turn, overshoots, and settles.
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
    ["circle", { cx: "128", cy: "128", r: "96" }],
    ["polygon", { points: "176 80 112 112 80 176 144 144 176 80" }],
  ],
  bold: [
    ["circle", { cx: "128", cy: "128", r: "96" }],
    ["polygon", { points: "168 88 112 112 88 168 144 144 168 88" }],
  ],
  backdrop: {
    duotone: [
      ["path", { d: "M128,32a96,96,0,1,0,96,96A96,96,0,0,0,128,32Zm16,112L80,176l32-64,64-32Z", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 1,
  parts: {
    1: { rotate: [0, 180, 180, 180, 0], origin: [128, 128], ease: ["easeInOut", "linear", "linear", "easeInOut"] }
  }
};

export const Compass = createAnimatedIcon(
  "Compass",
  GEOMETRY,
  STROKE,
);

export default Compass;
