"use client";

/**
 * BatteryCharging — animated Phosphor icon.
 *
 * Charging — the bolt pulses twice as the current lands.
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
    ["rect", { x: "16", y: "64", width: "200", height: "128", rx: "16" }],
    ["line", { x1: "248", y1: "96", x2: "248", y2: "160" }],
    ["polyline", { points: "116 160 132 128 100 128 116 96" }],
  ],
  bold: [
    ["rect", { x: "12", y: "64", width: "200", height: "128", rx: "16" }],
    ["line", { x1: "244", y1: "104", x2: "244", y2: "152" }],
    ["polyline", { points: "116 156 132 128 100 128 116 100" }],
  ],
  backdrop: {
    duotone: [
      ["rect", { x: "16", y: "64", width: "200", height: "128", rx: "16", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.8,
  parts: {
    2: {
      scale: [1, 1.2, 1, 1.1, 1],
      opacity: [1, 0.8, 1, 0.9, 1],
      origin: [116, 128],
      ease: ["easeOut", "easeInOut", "easeInOut", "easeInOut"],
      times: [0, 0.25, 0.5, 0.75, 1]
    }
  }
};

export const BatteryCharging = createAnimatedIcon(
  "BatteryCharging",
  GEOMETRY,
  STROKE,
);

export default BatteryCharging;
