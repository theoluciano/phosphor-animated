"use client";

/**
 * Database — animated Phosphor icon.
 *
 * Scans — a pulse sweeps the platters, top to bottom.
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
    ["ellipse", { cx: "128", cy: "80", rx: "88", ry: "48" }],
    ["path", { d: "M40,80v48c0,26.51,39.4,48,88,48s88-21.49,88-48V80" }],
    ["path", { d: "M40,128v48c0,26.51,39.4,48,88,48s88-21.49,88-48V128" }],
  ],
  backdrop: {
    duotone: [
      ["ellipse", { cx: "128", cy: "80", rx: "88", ry: "48", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.38,
  parts: {
    0: {
      origin: [128, 128],
      ease: ["easeIn", "easeOut"],
      delay: 0,
      opacity: [0, 1, 1],
      duration: 0.5,
      x: [0, 0, 0],
      y: [0, 0, 0]
    },
    1: {
      origin: [128, 128],
      ease: ["easeIn", "easeOut"],
      delay: 0.12,
      opacity: [0, 1, 1],
      duration: 0.5
    },
    2: {
      origin: [128, 128],
      ease: ["easeIn", "easeOut"],
      delay: 0.24,
      opacity: [0, 1, 1],
      duration: 0.5
    }
  }
};

export const Database = createAnimatedIcon(
  "Database",
  GEOMETRY,
  STROKE,
);

export default Database;
