"use client";

/**
 * HandWaving — animated Phosphor icon.
 *
 * Waves hello, pivoting at the wrist.
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
    ["path", { d: "M96.65,62a20,20,0,0,1,34.64-20l30,52" }],
    ["path", { d: "M69.32,94.67,55.08,70A20,20,0,0,1,89.73,50l31.17,54" }],
    ["path", { d: "M158.87,160A40,40,0,0,1,168,105.58L161.32,94A20,20,0,0,1,196,74l17.31,30A80,80,0,0,1,74.7,184l-40-69.32a20,20,0,0,1,34.64-20L88.57,128" }],
    ["path", { d: "M192,33.78A51.84,51.84,0,0,1,223.67,58l.33.57" }],
    ["path", { d: "M74.62,232A111.88,111.88,0,0,1,47,200" }],
  ],
  bold: [
    ["path", { d: "M96.65,62a20,20,0,0,1,34.64-20l30,52" }],
    ["path", { d: "M69.32,94.67,55.08,70A20,20,0,0,1,89.73,50l31.17,54" }],
    ["path", { d: "M158.87,160A40,40,0,0,1,168,105.58L161.32,94A20,20,0,0,1,196,74l17.31,30A80,80,0,0,1,74.7,184l-40-69.32a20,20,0,0,1,34.64-20L88.57,128" }],
    ["path", { d: "M220.11,40.63a60.21,60.21,0,0,0-24-14" }],
    ["path", { d: "M58.23,228a121,121,0,0,1-18.16-24" }],
  ],
  backdrop: {
    duotone: [
      ["path", { d: "M213.27,104,196,74a20,20,0,0,0-34.64,20l-30-52A20,20,0,0,0,96.65,62h0L89.73,50A20,20,0,0,0,55.08,70L69.32,94.67a20,20,0,0,0-34.64,20L74.7,184a80,80,0,0,0,138.57-80Z", opacity: "0.2" }],
    ],
  },
  maps: {
    bold: [
  0,
  1,
  2,
  null,
  4
],
  },
};

const STROKE: Choreography = {
  duration: 0.8,
  whole: { rotate: [0, -7.6, 4, -2.1, 0], origin: [80, 210], ease: ["easeOut", "easeInOut", "easeInOut", "easeInOut"] }
};

export const HandWaving = createAnimatedIcon(
  "HandWaving",
  GEOMETRY,
  STROKE,
);

export default HandWaving;
