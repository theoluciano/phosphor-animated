"use client";

/**
 * PhoneCall — animated Phosphor icon.
 *
 * Connects — the handset rocks while the signal waves blink out and pop back, inner first.
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
    ["path", { d: "M152,48a78.61,78.61,0,0,1,56,56" }],
    ["path", { d: "M144,80c16.52,4.42,27.58,15.48,32,32" }],
    ["path", { d: "M156.39,153.34a8,8,0,0,1,7.59-.69l47.16,21.13a8,8,0,0,1,4.8,8.3A48.33,48.33,0,0,1,168,224,136,136,0,0,1,32,88,48.33,48.33,0,0,1,73.92,40.06a8,8,0,0,1,8.3,4.8l21.13,47.2a8,8,0,0,1-.66,7.53L81.32,125a7.93,7.93,0,0,0-.54,7.81c8.27,16.93,25.77,34.22,42.75,42.41a7.92,7.92,0,0,0,7.83-.59Z" }],
  ],
  bold: [
    ["path", { d: "M152,48a78.61,78.61,0,0,1,56,56" }],
    ["path", { d: "M156.39,153.34a8,8,0,0,1,7.59-.69l47.16,21.13a8,8,0,0,1,4.8,8.3A48.33,48.33,0,0,1,168,224,136,136,0,0,1,32,88,48.33,48.33,0,0,1,73.92,40.06a8,8,0,0,1,8.3,4.8l21.13,47.2a8,8,0,0,1-.66,7.53L81.32,125a7.93,7.93,0,0,0-.54,7.81c8.27,16.93,25.77,34.22,42.75,42.41a7.92,7.92,0,0,0,7.83-.59Z" }],
    ["path", { d: "M141.23,86A44.11,44.11,0,0,1,170,114.77" }],
  ],
  backdrop: {
    duotone: [
      ["path", { d: "M156.39,153.34a8,8,0,0,1,7.59-.69l47.16,21.13a8,8,0,0,1,4.8,8.3A48.33,48.33,0,0,1,168,224,136,136,0,0,1,32,88,48.33,48.33,0,0,1,73.92,40.06a8,8,0,0,1,8.3,4.8l21.13,47.2a8,8,0,0,1-.66,7.53L81.32,125a7.93,7.93,0,0,0-.54,7.81c8.27,16.93,25.77,34.22,42.75,42.41a7.92,7.92,0,0,0,7.83-.59Z", opacity: "0.2" }],
    ],
  },
  maps: {
    bold: [0, 2, 1],
  },
};

const STROKE: Choreography = {
  duration: 0.8,
  parts: {
    0: {
      scale: [1, 0.8, 0.8, 1],
      opacity: [1, 0, 0, 1],
      origin: [140, 92],
      duration: 0.55,
      ease: [
        "easeOut",
        "linear",
        [0.34, 1.56, 0.64, 1]
      ],
      times: [0, 0.22, 0.5, 1],
      delay: 0.2
    },
    1: {
      scale: [1, 0.8, 0.8, 1],
      opacity: [1, 0, 0, 1],
      origin: [140, 92],
      duration: 0.55,
      ease: [
        "easeOut",
        "linear",
        [0.34, 1.56, 0.64, 1]
      ],
      times: [0, 0.22, 0.5, 1],
      delay: 0.1
    },
    2: {
      rotate: [0, -7, 3.6, -1.9, 0],
      origin: [124, 132],
      duration: 0.75,
      ease: [
        "easeOut",
        "easeInOut",
        "easeInOut",
        [0.22, 1, 0.36, 1]
      ],
      times: [0, 0.18, 0.45, 0.72, 1]
    }
  }
};

export const PhoneCall = createAnimatedIcon(
  "PhoneCall",
  GEOMETRY,
  STROKE,
);

export default PhoneCall;
