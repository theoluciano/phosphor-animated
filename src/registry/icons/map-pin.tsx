"use client";

/**
 * MapPin — animated Phosphor icon.
 *
 * Hops off the map and stamps back down — the dot draws in as it lands.
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
    ["circle", { cx: "128", cy: "104", r: "32" }],
    ["path", { d: "M208,104c0,72-80,128-80,128S48,176,48,104a80,80,0,0,1,160,0Z" }],
  ],
  backdrop: {
    duotone: [
      ["path", { d: "M128,24a80,80,0,0,0-80,80c0,72,80,128,80,128s80-56,80-128A80,80,0,0,0,128,24Zm0,112a32,32,0,1,1,32-32A32,32,0,0,1,128,136Z", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.7,
  parts: {
    0: {
      y: [0, -14, -7.3, -3.8, 0],
      pathLength: [0, 0, 1, 1, 1],
      origin: [128, 104],
      duration: 0.7,
      ease: ["easeOut", "easeIn", "easeOut", "easeIn"],
      times: [0, 0.3, 0.58, 0.78, 1]
    },
    1: {
      y: [0, -14, -7.3, -3.8, 0],
      origin: [128, 232],
      duration: 0.7,
      ease: ["easeOut", "easeIn", "easeOut", "easeIn"],
      times: [0, 0.3, 0.58, 0.78, 1]
    }
  }
};

export const MapPin = createAnimatedIcon(
  "MapPin",
  GEOMETRY,
  STROKE,
);

export default MapPin;
