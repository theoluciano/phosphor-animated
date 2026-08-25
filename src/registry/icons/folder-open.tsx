"use client";

/**
 * FolderOpen — animated Phosphor icon.
 *
 * Wobbles — the whole folder rocks on its base and settles.
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
    ["path", { d: "M32,208V64a8,8,0,0,1,8-8H93.33a8,8,0,0,1,4.8,1.6L128,80h72a8,8,0,0,1,8,8v24" }],
    ["path", { d: "M32,208l30.18-90.53A8,8,0,0,1,69.77,112H232a8,8,0,0,1,7.59,10.53L211.09,208Z" }],
  ],
  bold: [
    ["path", { d: "M32,208V64a8,8,0,0,1,8-8H93.33a8,8,0,0,1,4.8,1.6L128,80h72a8,8,0,0,1,8,8v28" }],
    ["path", { d: "M32,208l30.18-86.53A8,8,0,0,1,69.77,116H232a8,8,0,0,1,7.59,10.53L211.09,208Z" }],
  ],
  backdrop: {
    duotone: [
      ["path", { d: "M69.77,112H208V88a8,8,0,0,0-8-8H128L98.13,57.6a8,8,0,0,0-4.8-1.6H40a8,8,0,0,0-8,8V208l30.18-90.53A8,8,0,0,1,69.77,112Z", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.96,
  whole: { origin: [128, 128], ease: ["easeOut", "easeInOut", "easeInOut", "easeInOut", "easeInOut", "easeInOut", "easeInOut"], rotate: [0, -4, 4, -4, 4, -2, 2, 0] },
  parts: {
    0: { pathLength: [1, 0, 1, 1], ease: ["easeInOut", "easeInOut", "easeInOut"] }
  }
};

export const FolderOpen = createAnimatedIcon(
  "FolderOpen",
  GEOMETRY,
  STROKE,
);

export default FolderOpen;
