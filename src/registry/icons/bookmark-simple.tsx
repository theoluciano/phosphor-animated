"use client";

/**
 * BookmarkSimple — animated Phosphor icon.
 *
 * Saved — stretches down, squashes, and settles into place.
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
    ["path", { d: "M192,224l-64-40L64,224V48a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8Z" }],
  ],
  backdrop: {
    duotone: [
      ["path", { d: "M192,224l-64-40L64,224V48a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8Z", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.96,
  parts: {
    0: {
      origin: [128, 40],
      duration: 0.96,
      ease: ["easeOut", "easeOut", "easeOut", "easeOut"],
      times: [0, 0.28, 0.52, 0.76, 1],
      rotate: [0, -4.4, 2.3, -1.2, 0],
      scale: [1, 1, 1, 1, 1]
    }
  }
};

export const BookmarkSimple = createAnimatedIcon(
  "BookmarkSimple",
  GEOMETRY,
  STROKE,
);

export default BookmarkSimple;
