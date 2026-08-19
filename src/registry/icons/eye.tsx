"use client";

/**
 * Eye — animated Phosphor icon.
 *
 * Blinks — the lid closes as the pupil contracts behind it.
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
    ["path", { d: "M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z" }],
    ["circle", { cx: "128", cy: "128", r: "40" }],
  ],
  bold: [
    ["path", { d: "M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z" }],
    ["circle", { cx: "128", cy: "128", r: "32" }],
  ],
  backdrop: {
    duotone: [
      ["path", { d: "M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Zm0,112a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.4,
  parts: {
    0: { scaleY: [1, 0.05, 1], origin: [128, 128], ease: ["easeOut", "easeInOut"] },
    1: {
      scale: [1, 0, 1],
      opacity: [1, 0, 1],
      origin: [128, 128],
      ease: ["easeOut", "easeInOut"]
    }
  }
};

export const Eye = createAnimatedIcon(
  "Eye",
  GEOMETRY,
  STROKE,
);

export default Eye;
