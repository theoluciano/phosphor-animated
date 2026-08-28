"use client";

/**
 * ShoppingCart — animated Phosphor icon.
 *
 * Hops — added to the cart, so it bounces four times and lands on its wheels.
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
    ["path", { d: "M188,184H91.17a16,16,0,0,1-15.74-13.14L48.73,24H24" }],
    ["circle", { cx: "92", cy: "204", r: "20" }],
    ["circle", { cx: "188", cy: "204", r: "20" }],
    ["path", { d: "M70.55,144H196.1a16,16,0,0,0,15.74-13.14L224,64H56" }],
  ],
  backdrop: {
    duotone: [
      ["path", { d: "M70.55,144H196.1a16,16,0,0,0,15.74-13.14L224,64H56Z", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.96,
  whole: {
    y: [0, -12.82, 0, -12.82, 0, -12.82, 0, -12.82, 0],
    origin: [128, 204],
    duration: 1,
    ease: [
      "easeIn",
      [0.22, 1, 0.36, 1],
      [0.22, 1, 0.36, 1],
      [0.22, 1, 0.36, 1],
      [0.22, 1, 0.36, 1],
      [0.22, 1, 0.36, 1],
      [0.22, 1, 0.36, 1],
      "easeOut"
    ]
  }
};

export const ShoppingCart = createAnimatedIcon(
  "ShoppingCart",
  GEOMETRY,
  STROKE,
);

export default ShoppingCart;
