"use client";

/**
 * ChatCircle — animated Phosphor icon.
 *
 * Perks up — the bubble swells and shakes on its tail.
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
    ["path", { d: "M79.93,211.11a96,96,0,1,0-35-35h0L32.42,213.46a8,8,0,0,0,10.12,10.12l37.39-12.47Z" }],
  ],
  backdrop: {
    duotone: [
      ["path", { d: "M79.93,211.11a96,96,0,1,0-35-35h0L32.42,213.46a8,8,0,0,0,10.12,10.12l37.39-12.47Z", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.6,
  parts: {
    0: {
      scale: [1, 1.08, 1.03, 1, 1],
      rotate: [0, -5, 2.6, -1.4, 0],
      origin: [38, 218],
      ease: [
        [0.22, 1, 0.36, 1],
        "easeInOut",
        "easeInOut",
        [0.22, 1, 0.36, 1]
      ],
      times: [0, 0.3, 0.55, 0.78, 1]
    }
  }
};

export const ChatCircle = createAnimatedIcon(
  "ChatCircle",
  GEOMETRY,
  STROKE,
);

export default ChatCircle;
