"use client";

/**
 * Headphones — animated Phosphor icon.
 *
 * Thumps — the band flexes down onto the ears and springs back, twice.
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
    ["path", { d: "M224,128H192a16,16,0,0,0-16,16v40a16,16,0,0,0,16,16h16a16,16,0,0,0,16-16V128a96,96,0,1,0-192,0v56a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V144a16,16,0,0,0-16-16H32" }],
  ],
  backdrop: {
    duotone: [
      ["path", { d: "M32,184a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V144a16,16,0,0,0-16-16H32Z", opacity: "0.2" }],
      ["path", { d: "M224,128H192a16,16,0,0,0-16,16v40a16,16,0,0,0,16,16h16a16,16,0,0,0,16-16Z", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.7,
  parts: {
    0: {
      scaleY: [1, 0.945, 1.025, 0.985, 1],
      scaleX: [1, 1.03, 0.99, 1.008, 1],
      origin: [128, 190],
      duration: 0.7,
      ease: [
        "easeOut",
        "easeInOut",
        "easeInOut",
        [0.22, 1, 0.36, 1]
      ],
      times: [0, 0.22, 0.46, 0.72, 1]
    }
  }
};

export const Headphones = createAnimatedIcon(
  "Headphones",
  GEOMETRY,
  STROKE,
);

export default Headphones;
