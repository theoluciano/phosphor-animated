"use client";

/**
 * Tag — animated Phosphor icon.
 *
 * Swings — nudged, the tag rocks on its eyelet and settles.
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
    ["path", { d: "M42.34,138.34A8,8,0,0,1,40,132.69V40h92.69a8,8,0,0,1,5.65,2.34l99.32,99.32a8,8,0,0,1,0,11.31L153,237.66a8,8,0,0,1-11.31,0Z" }],
    ["circle", { cx: "84", cy: "84", r: "12" }],
  ],
  thin: [
    ["path", { d: "M42.34,138.34A8,8,0,0,1,40,132.69V40h92.69a8,8,0,0,1,5.65,2.34l99.32,99.32a8,8,0,0,1,0,11.31L153,237.66a8,8,0,0,1-11.31,0Z" }],
    ["circle", { cx: "84", cy: "84", r: "8" }],
  ],
  light: [
    ["path", { d: "M42.34,138.34A8,8,0,0,1,40,132.69V40h92.69a8,8,0,0,1,5.65,2.34l99.32,99.32a8,8,0,0,1,0,11.31L153,237.66a8,8,0,0,1-11.31,0Z" }],
    ["circle", { cx: "84", cy: "84", r: "10" }],
  ],
  bold: [
    ["path", { d: "M42.34,138.34A8,8,0,0,1,40,132.69V40h92.69a8,8,0,0,1,5.65,2.34l99.32,99.32a8,8,0,0,1,0,11.31L153,237.66a8,8,0,0,1-11.31,0Z" }],
    ["circle", { cx: "88", cy: "88", r: "16" }],
  ],
  backdrop: {
    duotone: [
      ["path", { d: "M42.34,138.34A8,8,0,0,1,40,132.69V40h92.69a8,8,0,0,1,5.65,2.34l99.32,99.32a8,8,0,0,1,0,11.31L153,237.66a8,8,0,0,1-11.31,0Z", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.8,
  whole: {
    rotate: [0, 5, -2.6, 1.4, -0.7, 0],
    origin: [84, 84],
    ease: [
      "easeOut",
      "easeInOut",
      "easeInOut",
      "easeInOut",
      [0.22, 1, 0.36, 1]
    ],
    times: [0, 0.15, 0.4, 0.62, 0.82, 1]
  }
};

export const Tag = createAnimatedIcon(
  "Tag",
  GEOMETRY,
  STROKE,
);

export default Tag;
