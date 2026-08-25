/**
 * Communication — sending, calling, talking.
 */
import type { AnimationSet } from "./types.ts";
import {
  pop, shake, wiggle, bounce, nudge, traverse, stagger, swing, flare, draw, ring,
  OVERSHOOT, INOUT, OUT,
} from "./recipes.ts";

/**
 * Concentric arcs radiating outward — used for sound and signal.
 *
 * Pulses out from rest rather than fading up from nothing: starting at zero opacity
 * made the arcs blink into existence the instant the animation began, and ending at
 * 0.85 left them permanently faded afterwards.
 */
const emit = (delay = 0) => flare(0.16, { delay });

export const communication: AnimationSet = {
  envelope: {
    description: "Opens — the flap swings up, then snaps shut with a soft bounce.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 1.12,
      parts: {
        0: {
          origin: [128, 56],
          duration: 1.12,
          ease: [[0.65, 0, 0.35, 1], [0.65, 0, 0.35, 1], [0.65, 0, 0.35, 1]],
          pathLength: [1, 0, 1, 1],
        },
        1: {
          origin: [128, 56],
          duration: 0.88,
          delay: 0,
          ease: ["easeOut", [0.22, 1, 0.36, 1], [0.22, 1, 0.36, 1]],
          times: [0, 0.45, 0.75, 1],
        },
        2: {
          origin: [128, 56],
          duration: 0.88,
          delay: 0.32,
          ease: ["easeOut", [0.22, 1, 0.36, 1], [0.22, 1, 0.36, 1]],
          pathLength: [1, 0, 0, 1],
        },
        3: {
          pathLength: [1, 0, 0, 1],
          origin: [128, 56],
          delay: 0.32,
          duration: 0.88,
          ease: ["easeOut", [0.22, 1, 0.36, 1], [0.22, 1, 0.36, 1]],
        },
      },
    },
  },

  "envelope-open": {
    description: "The letter inside pushes up — the pocket fold lifts, then settles shut.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 1.04,
      parts: {
        0: {
          pathLength: [1, 0, 1, 1],
          origin: [128, 56],
          delay: 0.32,
          duration: 0.88,
          ease: ["easeOut", [0.22, 1, 0.36, 1], [0.22, 1, 0.36, 1]],
        },
        1: {
          origin: [34.47, 205.74],
          duration: 1.04,
          ease: ["easeOut", [0.65, 0, 0.35, 1]],
          x: [0, 0, 0],
          y: [0, 0, 0],
        },
        2: {
          origin: [221.53, 205.74],
          duration: 1.04,
          ease: ["easeOut", [0.65, 0, 0.35, 1], [0.22, 1, 0.36, 1]],
          times: [0, 0.4, 0.75, 1],
        },
        3: {
          origin: [128, 96],
          duration: 1.04,
          ease: ["easeOut", [0.65, 0, 0.35, 1], [0.22, 1, 0.36, 1]],
          times: [0, 0.4, 0.75, 1],
        },
      },
    },
  },

  "paper-plane-tilt": {
    description: "Sends — flies out of frame and a fresh one arrives.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 1.28,
      whole: {
        y: [0, -180, -180, -180, 0, 0],
        origin: [128, 128],
        duration: 1.36,
        ease: ["easeIn", "linear", "easeOut", "easeOut", "easeOut"],
        x: [0, 180, 180, 180, 0, 0],
        opacity: [1, 1, 0, 0, 0, 1],
      },
    },
  },

  "chat-circle": {
    description: "Perks up — the bubble swells and shakes on its tail.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.96,
      parts: {
        0: {
          scale: [1, 1.08, 1.03, 1, 1],
          rotate: [0, -5, 2.6, -1.4, 0],
          origin: [38, 218],
          ease: [[0.22, 1, 0.36, 1], "easeInOut", "easeInOut", [0.22, 1, 0.36, 1]],
          times: [0, 0.3, 0.55, 0.78, 1],
        },
      },
    },
  },

  "chat-teardrop-dots": {
    description: "Typing — the dots blink out and back, left to right.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 1.04,
      parts: {
        1: {
          opacity: [1, 0, 0, 1],
          duration: 0.72,
          ease: ["easeIn", "linear", "easeOut"],
          times: [0, 0.3, 0.55, 1],
          delay: 0.144,
        },
        2: {
          opacity: [1, 0, 0, 1],
          duration: 0.72,
          ease: ["easeIn", "linear", "easeOut"],
          times: [0, 0.3, 0.55, 1],
          delay: 0,
        },
        3: {
          opacity: [1, 0, 0, 1],
          duration: 0.72,
          ease: ["easeIn", "linear", "easeOut"],
          times: [0, 0.3, 0.55, 1],
          delay: 0.288,
        },
      },
    },
  },

  phone: {
    description: "Rings — the handset rattles in decaying swings and settles home.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 1.28,
      parts: {
        0: {
          rotate: [0, 8.9, -5.3, 3.1, -3, 0],
          scale: [1, 1.13, 1.03, 1.01, 1, 1],
          origin: [128, 128],
          duration: 1.28,
          ease: ["easeIn", "linear", "linear", "linear", "easeOut"],
          times: [0, 0.15, 0.35, 0.58, 0.8, 1],
        },
      },
    },
  },

  "phone-call": {
    description: "Connects — the handset rocks while the signal waves blink out and pop back, inner first.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 1.28,
      parts: {
        0: {
          opacity: [1, 0, 0, 1],
          origin: [140, 92],
          duration: 0.88,
          ease: ["easeOut", "linear", [0.34, 1.56, 0.64, 1]],
          times: [0, 0.22, 0.5, 1],
          delay: 0.32,
        },
        1: {
          opacity: [1, 0, 0, 1],
          origin: [140, 92],
          duration: 0.88,
          ease: ["easeOut", "linear", [0.34, 1.56, 0.64, 1]],
          times: [0, 0.22, 0.5, 1],
          delay: 0.16,
        },
        2: {
          rotate: [0, -7, 3.6, -1.9, 0],
          origin: [124, 132],
          duration: 1.2,
          ease: ["easeOut", "easeInOut", "easeInOut", [0.22, 1, 0.36, 1]],
          times: [0, 0.18, 0.45, 0.72, 1],
        },
      },
      whole: {
        rotate: [0, 8.9, -5.3, 3.1, -3, 0],
        scale: [1, 1.13, 1.03, 1.01, 1, 1],
        origin: [128, 128],
        duration: 1.28,
        times: [0, 0.15, 0.35, 0.58, 0.8, 1],
        ease: ["easeIn", "linear", "linear", "linear", "easeOut"],
      },
    },
  },

  at: {
    description: "Writes itself — the centre loops first, then the spiral sweeps around.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 1.12,
      parts: {
        0: {
          pathLength: [0, 1],
          origin: [128, 128],
          duration: 0.48,
          ease: [0.65, 0, 0.35, 1],
        },
        1: {
          pathLength: [0, 1],
          origin: [128, 128],
          duration: 0.56,
          ease: [0.65, 0, 0.35, 1],
          delay: 0.48,
        },
      },
    },
  },

  "share-network": {
    description: "Broadcasts — the hub pulses, the wires carry the signal, the nodes pop as it lands.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 1.28,
      parts: {
        0: {
          scale: [1, 1.25, 1],
          origin: [64, 128],
          duration: 0.64,
          ease: ["easeOut", "easeInOut"],
          times: [0, 0.45, 1],
        },
        1: {
          scale: [1, 1.25, 1],
          origin: [176, 200],
          duration: 0.64,
          ease: ["easeOut", "easeInOut"],
          times: [0, 0.45, 1],
          delay: 0.576,
        },
        2: {
          scale: [1, 1.25, 1],
          origin: [176, 56],
          duration: 0.64,
          ease: ["easeOut", "easeInOut"],
          times: [0, 0.45, 1],
          delay: 0.448,
        },
        3: {
          pathLength: [0, 1],
          duration: 0.56,
          ease: "easeOut",
          delay: 0.16,
        },
        4: {
          pathLength: [0, 1],
          duration: 0.56,
          ease: "easeOut",
          delay: 0.16,
        },
      },
    },
  },

  "hand-waving": {
    description: "Waves hello, pivoting at the wrist.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 1.28,
      whole: {
        rotate: [0, -7.6, 4, -2.1, 0],
        origin: [128, 128],
        ease: ["easeOut", "easeInOut", "easeInOut", "easeInOut"],
      },
    },
  },

  megaphone: {
    description: "Shouts — rears up on its grip, then settles.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 1.12,
      whole: {
        rotate: [0, -7.6, 4, -2.1, 0],
        origin: [180, 200],
        ease: ["easeIn", "linear", "linear", "easeOut"],
        times: [0, 0.18, 0.48, 0.74, 1],
      },
    },
  },
};
