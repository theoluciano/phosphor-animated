"use client";

/**
 * Wrench — animated Phosphor icon.
 *
 * Ratchets — cranks the bolt in its jaws, then springs back.
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
    ["path", { d: "M104,126.94a64,64,0,0,1,80-90.29L144,80l5.66,26.34L176,112l43.35-40a64,64,0,0,1-90.29,80L73,217A24,24,0,0,1,39,183Z" }],
  ],
  bold: [
    ["path", { d: "M73,217A24,24,0,0,1,39,183l63.77-58.28A64,64,0,0,1,184,36.65L144,80l5.66,26.34L176,112l43.35-40a64,64,0,0,1-88.1,81.2Z" }],
  ],
  backdrop: {
    duotone: [
      ["path", { d: "M104,126.94a64,64,0,0,1,80-90.29L144,80l5.66,26.34L176,112l43.35-40a64,64,0,0,1-90.29,80L73,217A24,24,0,0,1,39,183Z", opacity: "0.2" }],
    ],
  },
  divergent: ["bold"],
};

const STROKE: Choreography = {
  duration: 0.6,
  whole: {
    rotate: [0, 3.7, -4.8, 1.3, 0],
    origin: [160, 88],
    ease: [
      "easeInOut",
      "easeInOut",
      "easeOut",
      [0.22, 1, 0.36, 1]
    ],
    times: [0, 0.4, 0.66, 0.87, 1],
    duration: 0.85
  }
};

export const Wrench = createAnimatedIcon(
  "Wrench",
  GEOMETRY,
  STROKE,
);

export default Wrench;
