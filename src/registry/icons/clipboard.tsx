"use client";

/**
 * Clipboard — animated Phosphor icon.
 *
 * Snaps — the clip pops up and claps back down; the board takes the hit.
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
    ["path", { d: "M160,40h40a8,8,0,0,1,8,8V216a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H96" }],
    ["path", { d: "M88,72V64a40,40,0,0,1,80,0v8Z" }],
  ],
  backdrop: {
    duotone: [
      ["path", { d: "M160,40a39.83,39.83,0,0,1,8,24v8H88V64a39.83,39.83,0,0,1,8-24H56a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H200a8,8,0,0,0,8-8V48a8,8,0,0,0-8-8Z", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.6,
  parts: {
    0: {
      y: [0, -12, 0],
      origin: [128, 224],
      duration: 0.45,
      delay: 0,
      ease: ["easeIn", "easeOut"],
      times: [0, 0.4, 1]
    },
    1: {
      y: [0, -12, 0],
      origin: [128, 48],
      duration: 0.55,
      ease: ["easeIn", "easeOut"],
      times: [0, 0.4, 1]
    }
  }
};

export const Clipboard = createAnimatedIcon(
  "Clipboard",
  GEOMETRY,
  STROKE,
);

export default Clipboard;
