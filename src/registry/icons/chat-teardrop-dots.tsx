"use client";

/**
 * ChatTeardropDots — animated Phosphor icon.
 *
 * Typing — the dots blink out and back, left to right.
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
    ["path", { d: "M132,216H48a8,8,0,0,1-8-8V124a92,92,0,0,1,92-92h0a92,92,0,0,1,92,92h0A92,92,0,0,1,132,216Z" }],
    ["circle", { cx: "132", cy: "128", r: "12" }],
    ["circle", { cx: "88", cy: "128", r: "12" }],
    ["circle", { cx: "176", cy: "128", r: "12" }],
  ],
  thin: [
    ["circle", { cx: "132", cy: "128", r: "8" }],
    ["circle", { cx: "88", cy: "128", r: "8" }],
    ["circle", { cx: "176", cy: "128", r: "8" }],
    ["path", { d: "M132,216H48a8,8,0,0,1-8-8V124a92,92,0,0,1,92-92h0a92,92,0,0,1,92,92h0A92,92,0,0,1,132,216Z" }],
  ],
  light: [
    ["circle", { cx: "132", cy: "128", r: "10" }],
    ["circle", { cx: "88", cy: "128", r: "10" }],
    ["circle", { cx: "176", cy: "128", r: "10" }],
    ["path", { d: "M132,216H48a8,8,0,0,1-8-8V124a92,92,0,0,1,92-92h0a92,92,0,0,1,92,92h0A92,92,0,0,1,132,216Z" }],
  ],
  bold: [
    ["path", { d: "M132,216H48a8,8,0,0,1-8-8V124a92,92,0,0,1,92-92h0a92,92,0,0,1,92,92h0A92,92,0,0,1,132,216Z" }],
    ["circle", { cx: "108", cy: "128", r: "16" }],
    ["circle", { cx: "156", cy: "128", r: "16" }],
  ],
  backdrop: {
    duotone: [
      ["path", { d: "M132,216H48a8,8,0,0,1-8-8V124a92,92,0,0,1,92-92h0a92,92,0,0,1,92,92h0A92,92,0,0,1,132,216Z", opacity: "0.2" }],
    ],
  },
  maps: {
    thin: [3, 0, 1, 2],
    light: [3, 0, 1, 2],
  },
  divergent: ["bold"],
};

const STROKE: Choreography = {
  duration: 1.04,
  parts: {
    1: {
      opacity: [1, 0, 0, 1],
      duration: 0.72,
      ease: ["easeIn", "linear", "easeOut"],
      times: [0, 0.3, 0.55, 1],
      delay: 0.144
    },
    2: {
      opacity: [1, 0, 0, 1],
      duration: 0.72,
      ease: ["easeIn", "linear", "easeOut"],
      times: [0, 0.3, 0.55, 1],
      delay: 0
    },
    3: {
      opacity: [1, 0, 0, 1],
      duration: 0.72,
      ease: ["easeIn", "linear", "easeOut"],
      times: [0, 0.3, 0.55, 1],
      delay: 0.288
    }
  }
};

export const ChatTeardropDots = createAnimatedIcon(
  "ChatTeardropDots",
  GEOMETRY,
  STROKE,
);

export default ChatTeardropDots;
