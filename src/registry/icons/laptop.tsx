"use client";

/**
 * Laptop — animated Phosphor icon.
 *
 * Nods — the lid dips shut a touch, then springs back open.
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
    ["path", { d: "M40,176V72A16,16,0,0,1,56,56H200a16,16,0,0,1,16,16V176" }],
    ["path", { d: "M24,176H232a0,0,0,0,1,0,0v16a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V176A0,0,0,0,1,24,176Z" }],
    ["line", { x1: "144", y1: "88", x2: "112", y2: "88" }],
  ],
  bold: [
    ["path", { d: "M40,168V72A16,16,0,0,1,56,56H200a16,16,0,0,1,16,16v96" }],
    ["path", { d: "M24,168H232a0,0,0,0,1,0,0v24a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V168a0,0,0,0,1,0,0Z" }],
    ["line", { x1: "144", y1: "96", x2: "112", y2: "96" }],
  ],
  backdrop: {
    duotone: [
      ["path", { d: "M40,176V72A16,16,0,0,1,56,56H200a16,16,0,0,1,16,16V176Z", opacity: "0.2" }],
    ],
  },
};

const STROKE: Choreography = {
  duration: 0.6,
  parts: {
    0: {
      scaleY: [1, 0.9, 1.03, 1],
      origin: [128, 176],
      times: [0, 0.4, 0.7, 1],
      ease: [
        "easeOut",
        [0.34, 1.56, 0.64, 1],
        [0.22, 1, 0.36, 1]
      ]
    },
    2: {
      y: [0, 9, -4.7, 0],
      opacity: [1, 0.45, 1, 1],
      times: [0, 0.4, 0.7, 1],
      ease: [
        "easeOut",
        [0.34, 1.56, 0.64, 1],
        [0.22, 1, 0.36, 1]
      ]
    }
  }
};

export const Laptop = createAnimatedIcon(
  "Laptop",
  GEOMETRY,
  STROKE,
);

export default Laptop;
