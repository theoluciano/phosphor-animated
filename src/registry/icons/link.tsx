"use client";

/**
 * Link — animated Phosphor icon.
 *
 * Tugs — the two halves pull apart, then snap back past centre.
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
    ["path", { d: "M141.38,64.68l11-11a46.62,46.62,0,0,1,65.94,0h0a46.62,46.62,0,0,1,0,65.94L193.94,144,183.6,154.34a46.63,46.63,0,0,1-66-.05h0A46.48,46.48,0,0,1,104,120.06" }],
    ["path", { d: "M114.62,191.32l-11,11a46.63,46.63,0,0,1-66-.05h0a46.63,46.63,0,0,1,.06-65.89L72.4,101.66a46.62,46.62,0,0,1,65.94,0h0A46.45,46.45,0,0,1,152,135.94" }],
  ],
  bold: [
    ["path", { d: "M108.71,197.23l-5.11,5.11a46.63,46.63,0,0,1-66-.05h0a46.63,46.63,0,0,1,.06-65.89L72.4,101.66a46.62,46.62,0,0,1,65.94,0h0A46.34,46.34,0,0,1,150.78,124" }],
    ["path", { d: "M147.29,58.77l5.11-5.11a46.62,46.62,0,0,1,65.94,0h0a46.62,46.62,0,0,1,0,65.94L193.94,144,183.6,154.34a46.63,46.63,0,0,1-66-.05h0A46.46,46.46,0,0,1,105.22,132" }],
  ],
  backdrop: {
    duotone: [
      ["path", { d: "M218.34,53.66h0a46.62,46.62,0,0,0-65.94,0L117.66,88.4c-.33.33-.64.66-1,1A46.6,46.6,0,0,0,72.4,101.66L37.66,136.4a46.63,46.63,0,0,0-.06,65.89h0a46.63,46.63,0,0,0,66,.05l34.74-34.74c.33-.33.64-.66.95-1a46.58,46.58,0,0,0,44.31-12.26l34.74-34.74A46.62,46.62,0,0,0,218.34,53.66Z", opacity: "0.2" }],
    ],
  },
  maps: {
    bold: [1, 0],
  },
};

const STROKE: Choreography = {
  duration: 0.6,
  parts: {
    0: {
      x: [0, 3, -3.6, 0],
      y: [0, -3, 3.6, 0],
      origin: [128, 128],
      duration: 0.6,
      ease: ["easeIn", "linear", "easeOut"],
      times: [0, 0.4, 0.75, 1]
    },
    1: {
      x: [0, -3, 3.6, 0],
      y: [0, 3, -3.6, 0],
      origin: [128, 128],
      duration: 0.6,
      ease: ["easeIn", "linear", "easeOut"],
      times: [0, 0.4, 0.75, 1]
    }
  }
};

export const Link = createAnimatedIcon(
  "Link",
  GEOMETRY,
  STROKE,
);

export default Link;
