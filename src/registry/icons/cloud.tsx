"use client";

/**
 * Cloud — animated Phosphor icon.
 *
 * Swells — a soft roll lifts the cloud and sets it back down.
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
    ["path", { d: "M80,128a80,80,0,1,1,80,80H72A56,56,0,1,1,85.92,97.74" }],
  ],
  backdrop: {
    duotone: [
      ["path", { d: "M160,48A80,80,0,0,0,85.9,97.84l0-.1A56,56,0,1,0,72,208h88a80,80,0,0,0,0-160Z", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.9,
  parts: {
    0: { duration: 0.9, ease: ["easeIn", "easeOut"], scale: [1, 0.9, 1] }
  }
};

export const Cloud = createAnimatedIcon(
  "Cloud",
  GEOMETRY,
  STROKE,
);

export default Cloud;
