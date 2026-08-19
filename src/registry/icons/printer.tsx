"use client";

/**
 * Printer — animated Phosphor icon.
 *
 * Prints — the paper feeds through the body and the status light blinks.
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
    ["polyline", { points: "64 80 64 40 192 40 192 80" }],
    ["rect", { x: "64", y: "152", width: "128", height: "64" }],
    ["path", { d: "M64,176H24V96c0-8.84,7.76-16,17.33-16H214.67C224.24,80,232,87.16,232,96v80H192" }],
    ["circle", { cx: "188", cy: "116", r: "12" }],
  ],
  thin: [
    ["polyline", { points: "64 80 64 40 192 40 192 80" }],
    ["rect", { x: "64", y: "152", width: "128", height: "64" }],
    ["path", { d: "M64,176H24V96c0-8.84,7.76-16,17.33-16H214.67C224.24,80,232,87.16,232,96v80H192" }],
    ["circle", { cx: "188", cy: "116", r: "8" }],
  ],
  light: [
    ["polyline", { points: "64 80 64 40 192 40 192 80" }],
    ["rect", { x: "64", y: "152", width: "128", height: "64" }],
    ["path", { d: "M64,176H24V96c0-8.84,7.76-16,17.33-16H214.67C224.24,80,232,87.16,232,96v80H192" }],
    ["circle", { cx: "188", cy: "116", r: "10" }],
  ],
  bold: [
    ["polyline", { points: "64 80 64 40 192 40 192 80" }],
    ["rect", { x: "64", y: "160", width: "128", height: "56" }],
    ["path", { d: "M64,176H24V96c0-8.84,7.76-16,17.33-16H214.67C224.24,80,232,87.16,232,96v80H192" }],
    ["circle", { cx: "188", cy: "120", r: "16" }],
  ],
  backdrop: {
    duotone: [
      ["path", { d: "M64,176H24V96c0-8.84,7.76-16,17.33-16H214.67C224.24,80,232,87.16,232,96v80H192V152H64Z", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.7,
  parts: {
    0: { y: [0, 9, 0], ease: [
        "easeOut",
        [0.22, 1, 0.36, 1]
      ], duration: 0.5 },
    1: {
      y: [0, 12, 0],
      scaleY: [1, 1.1, 1],
      origin: [128, 152],
      ease: [
        "easeOut",
        [0.22, 1, 0.36, 1]
      ],
      duration: 0.55,
      delay: 0.1
    },
    3: {
      opacity: [1, 0.2, 1],
      scale: [1, 1.3, 1],
      origin: [188, 116],
      ease: ["easeOut", "easeInOut"],
      duration: 0.45
    }
  }
};

export const Printer = createAnimatedIcon(
  "Printer",
  GEOMETRY,
  STROKE,
);

export default Printer;
