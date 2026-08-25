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
    rotate: [0, -3.5, 1.8, -0.9, 0],
    y: [0, -3, -1.6, -0.8, 0],
    origin: [128, 224],
    duration: 1.28,
    ease: [
      "easeOut",
      [0.65, 0, 0.35, 1],
      [0.65, 0, 0.35, 1],
      [0.22, 1, 0.36, 1]
    ],
    times: [0, 0.28, 0.58, 0.8, 1]
  },
  parts: {
    0: {
      scale: [1, 1.18, 1, 1.08, 1],
      origin: [88, 184],
      duration: 1.28,
      ease: [
        "easeOut",
        [0.65, 0, 0.35, 1],
        [0.65, 0, 0.35, 1],
        [0.65, 0, 0.35, 1]
      ],
      times: [0, 0.26, 0.52, 0.76, 1]
    }
  }
};

export const MusicNote = createAnimatedIcon(
  "MusicNote",
  GEOMETRY,
  STROKE,
);

export default MusicNote;
