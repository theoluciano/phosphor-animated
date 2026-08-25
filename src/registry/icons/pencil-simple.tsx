"use client";

/**
 * PencilSimple — animated Phosphor icon.
 *
 * Writes — the nib travels a quick scribble while the shaft tilts.
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
    ["path", { d: "M92.69,216H48a8,8,0,0,1-8-8V163.31a8,8,0,0,1,2.34-5.65L165.66,34.34a8,8,0,0,1,11.31,0L221.66,79a8,8,0,0,1,0,11.31L98.34,213.66A8,8,0,0,1,92.69,216Z" }],
    ["line", { x1: "136", y1: "64", x2: "192", y2: "120" }],
  ],
  backdrop: {
    duotone: [
      ["path", { d: "M192,120,136,64l29.66-29.66a8,8,0,0,1,11.31,0L221.66,79a8,8,0,0,1,0,11.31Z", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 1.04,
  parts: {
    0: {
      rotate: [0, -5, 2.6, -1.4, 0],
      x: [0, -10, 5.2, -2.7, 0],
      origin: [104, 152],
      ease: ["easeIn", "linear", "linear", "easeOut"]
    },
    1: {
      rotate: [0, -5, 2.6, -1.4, 0],
      x: [0, -10, 5.2, -2.7, 0],
      origin: [104, 152],
      ease: ["easeIn", "linear", "linear", "easeOut"]
    }
  }
};

export const PencilSimple = createAnimatedIcon(
  "PencilSimple",
  GEOMETRY,
  STROKE,
);

export default PencilSimple;
