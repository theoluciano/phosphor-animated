"use client";

/**
 * Files — animated Phosphor icon.
 *
 * Fans apart — the sheets slide diagonally away from each other and spring back.
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
    ["path", { d: "M168,224H56a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8h80l40,40V216A8,8,0,0,1,168,224Z" }],
    ["path", { d: "M80,64V40a8,8,0,0,1,8-8h80l40,40V184a8,8,0,0,1-8,8H176" }],
    ["line", { x1: "88", y1: "152", x2: "136", y2: "152" }],
    ["line", { x1: "88", y1: "184", x2: "136", y2: "184" }],
  ],
  bold: [
    ["path", { d: "M164,224H56a8,8,0,0,1-8-8V76a8,8,0,0,1,8-8h76l40,40V216A8,8,0,0,1,164,224Z" }],
    ["path", { d: "M84,68V36a8,8,0,0,1,8-8h80l40,40V176a8,8,0,0,1-8,8H172" }],
    ["line", { x1: "88", y1: "144", x2: "132", y2: "144" }],
    ["line", { x1: "88", y1: "184", x2: "132", y2: "184" }],
  ],
  backdrop: {
    duotone: [
      ["path", { d: "M176,192h24a8,8,0,0,0,8-8V72L168,32H88a8,8,0,0,0-8,8V64h56l40,40Z", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.55,
  parts: {
    0: {
      x: [0, -8, 0],
      y: [0, 8, 0],
      duration: 0.55,
      ease: [
        [0.34, 1.56, 0.64, 1],
        [0.22, 1, 0.36, 1]
      ],
      times: [0, 0.4, 1]
    },
    1: {
      x: [0, 7, 0],
      y: [0, -7, 0],
      duration: 0.55,
      ease: [
        [0.34, 1.56, 0.64, 1],
        [0.22, 1, 0.36, 1]
      ],
      times: [0, 0.4, 1],
      delay: 0.04
    },
    2: {
      x: [0, -8, 0],
      y: [0, 8, 0],
      duration: 0.55,
      ease: [
        [0.34, 1.56, 0.64, 1],
        [0.22, 1, 0.36, 1]
      ],
      times: [0, 0.4, 1]
    },
    3: {
      x: [0, -8, 0],
      y: [0, 8, 0],
      duration: 0.55,
      ease: [
        [0.34, 1.56, 0.64, 1],
        [0.22, 1, 0.36, 1]
      ],
      times: [0, 0.4, 1]
    }
  }
};

export const Files = createAnimatedIcon(
  "Files",
  GEOMETRY,
  STROKE,
);

export default Files;
