"use client";

/**
 * Heart — animated Phosphor icon.
 *
 * Lub-dub — a quick squeeze, then two beats, the second softer.
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
    ["path", { d: "M128,224S24,168,24,102A54,54,0,0,1,78,48c22.59,0,41.94,12.31,50,32,8.06-19.69,27.41-32,50-32a54,54,0,0,1,54,54C232,168,128,224,128,224Z" }],
  ],
  backdrop: {
    duotone: [
      ["path", { d: "M128,224S24,168,24,102A54,54,0,0,1,78,48c22.59,0,41.94,12.31,50,32,8.06-19.69,27.41-32,50-32a54,54,0,0,1,54,54C232,168,128,224,128,224Z", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.72,
  parts: {
    0: {
      scale: [1, 0.96, 1.14, 0.96, 1.09, 1],
      origin: [128, 128],
      ease: [
        "easeOut",
        [0.22, 1, 0.36, 1],
        [0.22, 1, 0.36, 1],
        [0.22, 1, 0.36, 1],
        [0.22, 1, 0.36, 1]
      ],
      times: [0, 0.12, 0.32, 0.48, 0.68, 1],
      duration: 0.9
    }
  }
};

export const Heart = createAnimatedIcon(
  "Heart",
  GEOMETRY,
  STROKE,
);

export default Heart;
