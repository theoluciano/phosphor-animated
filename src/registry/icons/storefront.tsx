"use client";

/**
 * Storefront — animated Phosphor icon.
 *
 * Ripples — the awning scallops flap in turn, left to right.
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
    ["polyline", { points: "48 139.59 48 216 208 216 208 139.59" }],
    ["path", { d: "M54,40H202a8,8,0,0,1,7.69,5.8L224,96H32L46.34,45.8A8,8,0,0,1,54,40Z" }],
    ["path", { d: "M96,96v16a32,32,0,0,1-64,0V96" }],
    ["path", { d: "M160,96v16a32,32,0,0,1-64,0V96" }],
    ["path", { d: "M224,96v16a32,32,0,0,1-64,0V96" }],
  ],
  backdrop: {
    duotone: [
      ["path", { d: "M54,40H202a8,8,0,0,1,7.69,5.8L224,96H32L46.34,45.8A8,8,0,0,1,54,40Z", opacity: "0.2" }],
      ["path", { d: "M96,96v16a32,32,0,0,1-64,0V96Z", opacity: "0.2" }],
      ["path", { d: "M224,96v16a32,32,0,0,1-64,0V96Z", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.928,
  parts: {
    2: {
      scaleY: [1, 1.16, 0.97, 1],
      origin: [64, 96],
      duration: 0.672,
      ease: [
        "easeOut",
        "easeInOut",
        [0.22, 1, 0.36, 1]
      ],
      times: [0, 0.34, 0.62, 1],
      delay: 0
    },
    3: {
      scaleY: [1, 1.16, 0.97, 1],
      origin: [128, 96],
      duration: 0.672,
      ease: [
        "easeOut",
        "easeInOut",
        [0.22, 1, 0.36, 1]
      ],
      times: [0, 0.34, 0.62, 1],
      delay: 0.128
    },
    4: {
      scaleY: [1, 1.16, 0.97, 1],
      origin: [192, 96],
      duration: 0.672,
      ease: [
        "easeOut",
        "easeInOut",
        [0.22, 1, 0.36, 1]
      ],
      times: [0, 0.34, 0.62, 1],
      delay: 0.256
    }
  }
};

export const Storefront = createAnimatedIcon(
  "Storefront",
  GEOMETRY,
  STROKE,
);

export default Storefront;
