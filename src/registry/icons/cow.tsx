"use client";

/**
 * Cow — animated Phosphor icon.
 *
 * Cocks its head — a slow tilt, and a blink halfway through.
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
    ["path", { d: "M56,24h0a48,48,0,0,0,48,48h48a48,48,0,0,0,48-48h0" }],
    ["rect", { x: "48", y: "160", width: "160", height: "64", rx: "32" }],
    ["line", { x1: "80", y1: "192", x2: "96", y2: "192" }],
    ["line", { x1: "160", y1: "192", x2: "176", y2: "192" }],
    ["circle", { cx: "100", cy: "124", r: "12" }],
    ["circle", { cx: "156", cy: "124", r: "12" }],
    ["path", { d: "M160,72h32.78a48,48,0,0,1,47.07,38.53A8,8,0,0,1,232,120H192" }],
    ["path", { d: "M96,72H63.22a48,48,0,0,0-47.07,38.53A8,8,0,0,0,24,120H64" }],
    ["path", { d: "M64,164.28V104A32,32,0,0,1,96,72h64a32,32,0,0,1,32,32v60.28" }],
  ],
  thin: [
    ["path", { d: "M56,24h0a48,48,0,0,0,48,48h48a48,48,0,0,0,48-48h0" }],
    ["rect", { x: "48", y: "160", width: "160", height: "64", rx: "32" }],
    ["line", { x1: "80", y1: "192", x2: "96", y2: "192" }],
    ["line", { x1: "160", y1: "192", x2: "176", y2: "192" }],
    ["circle", { cx: "100", cy: "124", r: "8" }],
    ["circle", { cx: "156", cy: "124", r: "8" }],
    ["path", { d: "M160,72h32.78a48,48,0,0,1,47.07,38.53A8,8,0,0,1,232,120H192" }],
    ["path", { d: "M96,72H63.22a48,48,0,0,0-47.07,38.53A8,8,0,0,0,24,120H64" }],
    ["path", { d: "M64,164.28V104A32,32,0,0,1,96,72h64a32,32,0,0,1,32,32v60.28" }],
  ],
  light: [
    ["path", { d: "M56,24h0a48,48,0,0,0,48,48h48a48,48,0,0,0,48-48h0" }],
    ["rect", { x: "48", y: "160", width: "160", height: "64", rx: "32" }],
    ["line", { x1: "80", y1: "192", x2: "96", y2: "192" }],
    ["line", { x1: "160", y1: "192", x2: "176", y2: "192" }],
    ["circle", { cx: "100", cy: "124", r: "10" }],
    ["circle", { cx: "156", cy: "124", r: "10" }],
    ["path", { d: "M160,72h32.78a48,48,0,0,1,47.07,38.53A8,8,0,0,1,232,120H192" }],
    ["path", { d: "M96,72H63.22a48,48,0,0,0-47.07,38.53A8,8,0,0,0,24,120H64" }],
    ["path", { d: "M64,164.28V104A32,32,0,0,1,96,72h64a32,32,0,0,1,32,32v60.28" }],
  ],
  bold: [
    ["path", { d: "M56,24h0a48,48,0,0,0,48,48h48a48,48,0,0,0,48-48h0" }],
    ["rect", { x: "48", y: "172", width: "160", height: "52", rx: "26" }],
    ["circle", { cx: "104", cy: "128", r: "16" }],
    ["circle", { cx: "152", cy: "128", r: "16" }],
    ["path", { d: "M160,72h32.78a48,48,0,0,1,47.07,38.53A8,8,0,0,1,232,120H192" }],
    ["path", { d: "M96,72H63.22a48,48,0,0,0-47.07,38.53A8,8,0,0,0,24,120H64" }],
    ["path", { d: "M64,174V104A32,32,0,0,1,96,72h64a32,32,0,0,1,32,32v70" }],
  ],
  backdrop: {
    duotone: [
      ["rect", { x: "48", y: "160", width: "160", height: "64", rx: "32", opacity: "0.2" }],
      ["path", { d: "M64,104A32,32,0,0,1,96,72H63.22a48,48,0,0,0-47.07,38.53A8,8,0,0,0,24,120H64Z", opacity: "0.2" }],
      ["path", { d: "M239.85,110.53A48,48,0,0,0,192.78,72H160a32,32,0,0,1,32,32v16h40A8,8,0,0,0,239.85,110.53Z", opacity: "0.2" }],
    ],
  },
  maps: {
    bold: [
  0,
  1,
  null,
  null,
  2,
  3,
  4,
  5,
  6
],
  },
};

const STROKE: Choreography = {
  duration: 0.72,
  whole: {
    rotate: [0, -5, 2.6, 0],
    origin: [128, 200],
    duration: 0.72,
    ease: [
      "easeOut",
      "easeInOut",
      [0.22, 1, 0.36, 1]
    ],
    times: [0, 0.2, 0.6, 1]
  },
  parts: {
    4: {
      scaleY: [1, 0.08, 1],
      origin: [100, 124],
      duration: 0.5,
      ease: ["easeIn", "easeOut"],
      times: [0, 0.45, 1],
      delay: 0.16
    },
    5: {
      scaleY: [1, 0.08, 1],
      origin: [156, 124],
      duration: 0.5,
      ease: ["easeIn", "easeOut"],
      times: [0, 0.45, 1],
      delay: 0.16
    }
  }
};

export const Cow = createAnimatedIcon(
  "Cow",
  GEOMETRY,
  STROKE,
);

export default Cow;
