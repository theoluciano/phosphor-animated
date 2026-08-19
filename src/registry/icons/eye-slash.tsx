"use client";

/**
 * EyeSlash — animated Phosphor icon.
 *
 * Hidden — the slash sweeps across as the eye dims behind it.
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
    ["line", { x1: "48", y1: "40", x2: "208", y2: "216" }],
    ["path", { d: "M154.91,157.6a40,40,0,0,1-53.82-59.2" }],
    ["path", { d: "M135.53,88.71a40,40,0,0,1,32.3,35.53" }],
    ["path", { d: "M208.61,169.1C230.41,149.58,240,128,240,128S208,56,128,56a126,126,0,0,0-20.68,1.68" }],
    ["path", { d: "M74,68.6C33.23,89.24,16,128,16,128s32,72,112,72a118.05,118.05,0,0,0,54-12.6" }],
  ],
  bold: [
    ["line", { x1: "48", y1: "40", x2: "208", y2: "216" }],
    ["path", { d: "M74,68.6C33.23,89.24,16,128,16,128s32,72,112,72a118.05,118.05,0,0,0,54-12.6" }],
    ["path", { d: "M214.41,163.59C232.12,145.73,240,128,240,128S208,56,128,56c-3.76,0-7.42.16-11,.46" }],
  ],
  backdrop: {
    duotone: [
      ["path", { d: "M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Zm0,112a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z", opacity: "0.2" }],
    ],
  },
  maps: {
    bold: [
  0,
  null,
  null,
  2,
  1
],
  },
};

const STROKE: Choreography = {
  duration: 0.6,
  parts: {
    0: {
      pathLength: [0, 1],
      delay: 0.1,
      duration: 0.35,
      ease: ["easeOut"]
    },
    1: { delay: 0.1, duration: 0.35, ease: ["easeOut"] },
    2: { duration: 0.6, ease: ["easeOut", "easeInOut"], times: [0, 0.45, 1] },
    3: { duration: 0.6, ease: ["easeOut", "easeInOut"], times: [0, 0.45, 1] },
    4: { duration: 0.6, ease: ["easeOut", "easeInOut"], times: [0, 0.45, 1] }
  }
};

export const EyeSlash = createAnimatedIcon(
  "EyeSlash",
  GEOMETRY,
  STROKE,
);

export default EyeSlash;
