"use client";

/**
 * MicrophoneSlash — animated Phosphor icon.
 *
 * Muted — the slash draws itself across the capsule.
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
    ["line", { x1: "128", y1: "200", x2: "128", y2: "240" }],
    ["line", { x1: "48", y1: "48", x2: "208", y2: "224" }],
    ["path", { d: "M172.32,184.75A72,72,0,0,1,56,128" }],
    ["path", { d: "M200,128a71.7,71.7,0,0,1-7.29,31.61" }],
    ["path", { d: "M150.68,161A39.77,39.77,0,0,1,128,168h0a40,40,0,0,1-40-40V92" }],
    ["path", { d: "M91.3,48.06A40,40,0,0,1,128,24h0a40,40,0,0,1,40,40v64a38.66,38.66,0,0,1-.22,4.19" }],
  ],
  bold: [
    ["line", { x1: "48", y1: "48", x2: "208", y2: "224" }],
    ["line", { x1: "128", y1: "208", x2: "128", y2: "240" }],
    ["path", { d: "M177.71,190.68A80,80,0,0,1,48,128" }],
    ["path", { d: "M208,128a79.86,79.86,0,0,1-5.85,30.1" }],
    ["path", { d: "M150.68,161A39.77,39.77,0,0,1,128,168h0a40,40,0,0,1-40-40V92" }],
    ["path", { d: "M95.46,40.74A39.93,39.93,0,0,1,128,24h0a40,40,0,0,1,40,40v56.54" }],
  ],
  backdrop: {
    duotone: [
      ["rect", { x: "88", y: "24", width: "80", height: "144", rx: "40", opacity: "0.2" }],
    ],
  },
  maps: {
    bold: [1, 0, 2, 3, 4, 5],
  },
};

const STROKE: Choreography = {
  duration: 0.88,
  parts: {
    1: {
      delay: 0,
      duration: 0.6,
      ease: ["easeInOut"],
      pathLength: [0, 1]
    }
  }
};

export const MicrophoneSlash = createAnimatedIcon(
  "MicrophoneSlash",
  GEOMETRY,
  STROKE,
);

export default MicrophoneSlash;
