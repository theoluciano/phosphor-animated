"use client";

/**
 * SpeakerX — animated Phosphor icon.
 *
 * Muted — the cross draws itself in, stroke after stroke.
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
    ["path", { d: "M80,168H32a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H80l72-56V224Z" }],
    ["line", { x1: "240", y1: "104", x2: "192", y2: "152" }],
    ["line", { x1: "240", y1: "152", x2: "192", y2: "104" }],
    ["line", { x1: "80", y1: "88", x2: "80", y2: "168" }],
  ],
  thin: [
    ["path", { d: "M80,168H32a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H80l72-56V224Z" }],
    ["line", { x1: "240", y1: "104", x2: "192", y2: "152" }],
    ["line", { x1: "240", y1: "152", x2: "192", y2: "104" }],
    ["line", { x1: "79.99", y1: "88", x2: "79.99", y2: "168" }],
  ],
  light: [
    ["path", { d: "M80,168H32a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H80l72-56V224Z" }],
    ["line", { x1: "240", y1: "104", x2: "192", y2: "152" }],
    ["line", { x1: "240", y1: "152", x2: "192", y2: "104" }],
    ["line", { x1: "79.99", y1: "88", x2: "79.99", y2: "168" }],
  ],
  bold: [
    ["path", { d: "M80,168H32a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H80l72-56V224Z" }],
    ["line", { x1: "240", y1: "104", x2: "192", y2: "152" }],
    ["line", { x1: "240", y1: "152", x2: "192", y2: "104" }],
    ["line", { x1: "79.98", y1: "88", x2: "79.98", y2: "168" }],
  ],
  duotone: [
    ["path", { d: "M80,168H32a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H80l72-56V224Z" }],
    ["line", { x1: "240", y1: "104", x2: "192", y2: "152" }],
    ["line", { x1: "240", y1: "152", x2: "192", y2: "104" }],
    ["line", { x1: "79.97", y1: "88", x2: "79.97", y2: "168" }],
  ],
  backdrop: {
    duotone: [
      ["path", { d: "M80,168H32a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H80Z", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.6,
  parts: {
    1: {
      pathLength: [0, 1],
      opacity: [0, 1],
      duration: 0.4,
      ease: [0.65, 0, 0.35, 1],
      delay: 0.1
    },
    2: {
      pathLength: [0, 1],
      opacity: [0, 1],
      duration: 0.4,
      ease: [0.65, 0, 0.35, 1],
      delay: 0.22
    }
  }
};

export const SpeakerX = createAnimatedIcon(
  "SpeakerX",
  GEOMETRY,
  STROKE,
);

export default SpeakerX;
