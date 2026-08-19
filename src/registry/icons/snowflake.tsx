"use client";

/**
 * Snowflake — animated Phosphor icon.
 *
 * Shivers — the whole flake flicks side to side and settles.
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
    ["line", { x1: "128", y1: "64", x2: "128", y2: "192" }],
    ["polyline", { points: "104 40 128 64 152 40" }],
    ["polyline", { points: "104 216 128 192 152 216" }],
    ["line", { x1: "72.57", y1: "96", x2: "183.43", y2: "160" }],
    ["polyline", { points: "40 104 72.57 96 64 64" }],
    ["polyline", { points: "192 192 183.43 160 216 152" }],
    ["line", { x1: "72.57", y1: "160", x2: "183.43", y2: "96" }],
    ["polyline", { points: "64 192 72.57 160 40 152" }],
    ["polyline", { points: "216 104 183.43 96 192 64" }],
  ],
  backdrop: {
    duotone: [
      ["path", { d: "M128,36a92,92,0,1,0,92,92A92.1,92.1,0,0,0,128,36Z", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.5,
  whole: {
    rotate: [0, -5, 2.6, -1.4, 0],
    origin: [128, 128],
    times: [0, 0.28, 0.55, 0.8, 1],
    ease: [
      "easeOut",
      [0.65, 0, 0.35, 1],
      [0.65, 0, 0.35, 1],
      [0.22, 1, 0.36, 1]
    ],
    duration: 0.55
  }
};

export const Snowflake = createAnimatedIcon(
  "Snowflake",
  GEOMETRY,
  STROKE,
);

export default Snowflake;
