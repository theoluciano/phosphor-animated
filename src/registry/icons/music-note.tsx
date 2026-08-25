"use client";

/**
 * MusicNote — animated Phosphor icon.
 *
 * Plays — the note sways to the beat while its head pulses.
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
    ["circle", { cx: "88", cy: "184", r: "40" }],
    ["polyline", { points: "128 184 128 40 208 64 208 112 128 88" }],
  ],
  backdrop: {
    duotone: [
      ["circle", { cx: "88", cy: "184", r: "40", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 1.28,
  whole: {
    scale: [1, 0.96, 1.14, 0.96, 1.09, 1],
    origin: [128, 128],
    duration: 1.44,
    times: [0, 0.12, 0.32, 0.48, 0.68, 1],
    ease: ["easeIn", "linear", "linear", "linear", "easeOut"],
    rotate: [0, -7.6, 4, -2.1, 0, 0]
  }
};

export const MusicNote = createAnimatedIcon(
  "MusicNote",
  GEOMETRY,
  STROKE,
);

export default MusicNote;
