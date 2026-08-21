/**
 * Navigation — direction, movement, place.
 *
 * Arrows share a rule: the head leads and the shaft follows a beat later, which
 * reads as travel rather than the whole glyph sliding sideways.
 */
import type { AnimationSet } from "./types.ts";
import { pop, spin, bounce, nudge, draw, wiggle, swing, OUT, INOUT } from "./recipes.ts";

/** Shaft/head pair, travelling in one direction. */
const arrow = (dx: number, dy: number, shaft: number, head: number) => ({
  duration: 0.5,
  parts: {
    [head]: nudge(dx, dy),
    [shaft]: nudge(dx * 0.65, dy * 0.65, { delay: 0.04 }),
  },
});

export const navigation: AnimationSet = {
  "arrow-right": {
    description: "Recoils — the arrow draws back, then springs home.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.5,
      parts: {
        0: {
          scaleX: [1, 0.78, 0.78, 1],
          origin: [40, 128],
          duration: 0.5,
          ease: ["easeIn", "linear", "easeOut"],
        },
        1: {
          x: [0, -22, -22, 0],
          origin: [128, 128],
          duration: 0.5,
          ease: ["easeIn", "linear", "easeOut"],
        },
      },
    },
  },
  "arrow-left": {
    description: "Recoils — shaft retracting — then strikes back to the left.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.45,
      parts: {
        0: {
          scaleX: [1, 0.83, 0.83, 1],
          origin: [216, 128],
          duration: 0.45,
          ease: ["easeIn", "linear", "easeOut"],
        },
        1: {
          x: [0, 22, 22, 0],
          origin: [128, 128],
          duration: 0.45,
          ease: ["easeIn", "linear", "easeOut"],
        },
      },
    },
  },
  "arrow-up": {
    description: "Crouches — the arrow dips down, then springs back up.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.5,
      parts: {
        0: {
          scaleY: [1, 0.78, 0.78, 1],
          origin: [128, 216],
          duration: 0.5,
          ease: ["easeIn", "linear", "easeOut"],
        },
        1: {
          y: [0, 22, 22, 0],
          origin: [128, 128],
          duration: 0.5,
          ease: ["easeIn", "linear", "easeOut"],
        },
      },
    },
  },
  "arrow-down": {
    description: "Recoils upward — shaft retracting — then strikes back down.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.45,
      parts: {
        0: {
          scaleY: [1, 0.78, 0.78, 1],
          origin: [128, 40],
          duration: 0.45,
          ease: ["easeIn", "linear", "easeOut"],
        },
        1: {
          y: [0, -22, -22, 0],
          origin: [128, 128],
          duration: 0.45,
          ease: ["easeIn", "linear", "easeOut"],
        },
      },
    },
  },

  "arrow-clockwise": {
    description: "Refreshes — one clockwise turn, away fast and easing home.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.7,
      whole: {
        rotate: [-360, -340, -20, 0],
        origin: [128, 128],
        duration: 0.7,
        ease: ["linear", [0.22, 1, 0.36, 1], "linear"],
        times: [0, 0.14, 0.86, 1],
      },
    },
  },
  "arrow-counter-clockwise": {
    description: "Undoes — one turn back, away fast and easing home.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.7,
      whole: {
        rotate: [360, 340, 20, 0],
        origin: [128, 128],
        duration: 0.7,
        ease: ["linear", [0.22, 1, 0.36, 1], "linear"],
        times: [0, 0.14, 0.86, 1],
      },
    },
  },

  "caret-down": {
    description: "Nudges downward, the way it points.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.5,
      parts: {
        0: {
          y: [0, 10, 0],
          origin: [128, 128],
          duration: 0.5,
          ease: ["easeIn", "easeOut"],
          times: [0, 0.4, 1],
        },
      },
    },
  },
  "caret-right": {
    description: "Nudges forward, the way it points.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.5,
      parts: {
        0: {
          x: [0, 10, 0],
          origin: [128, 128],
          duration: 0.5,
          ease: ["easeIn", "easeOut"],
          times: [0, 0.4, 1],
        },
      },
    },
  },

  "arrow-square-out": {
    description: "Slips out — the arrow drifts toward the corner and recedes.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.5,
      parts: {
        0: {
          x: [0, 10, 0],
          y: [0, -10, 0],
          scale: [1, 0.92, 1],
          origin: [216, 40],
          duration: 0.5,
          ease: "easeInOut",
          times: [0, 0.45, 1],
        },
        1: {
          x: [0, 10, 0],
          y: [0, -10, 0],
          scale: [1, 0.92, 1],
          origin: [216, 40],
          duration: 0.5,
          ease: "easeInOut",
          times: [0, 0.45, 1],
        },
      },
    },
  },

  "sign-out": {
    description: "Leaves — the arrow winds up and lunges out, the door recoiling behind it.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.6,
      parts: {
        0: {
          x: [0, -3, 0],
          duration: 0.35,
          ease: ["easeOut", [0.22, 1, 0.36, 1]],
          delay: 0.1,
        },
        1: {
          x: [0, -2, 10, 0],
          duration: 0.61,
          ease: ["easeInOut", [0.22, 1, 0.36, 1], "easeInOut"],
          times: [0, 0.18, 0.55, 1],
          delay: 0.04,
        },
        2: {
          x: [0, -3, 12, 0],
          duration: 0.61,
          ease: ["easeInOut", [0.22, 1, 0.36, 1], "easeInOut"],
          times: [0, 0.18, 0.55, 1],
        },
      },
    },
  },
  "sign-in": {
    description: "Enters — the arrow lunges in through the door, which takes the bump.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.6,
      parts: {
        0: {
          x: [0, 10, -5.2, 0],
          duration: 0.55,
          ease: [[0.22, 1, 0.36, 1], "easeInOut", "easeOut"],
          times: [0, 0.4, 0.72, 1],
          delay: 0.04,
        },
        1: {
          x: [0, 12, -6.2, 0],
          duration: 0.55,
          ease: [[0.22, 1, 0.36, 1], "easeInOut", "easeOut"],
          times: [0, 0.4, 0.72, 1],
        },
        2: {
          x: [0, 4, 0],
          duration: 0.35,
          ease: ["easeOut", [0.22, 1, 0.36, 1]],
          delay: 0.16,
        },
      },
    },
  },

  "map-pin": {
    description: "Hops off the map and stamps back down — the dot draws in as it lands.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.7,
      parts: {
        0: {
          y: [0, -14, -7.3, -3.8, 0],
          pathLength: [0, 0, 1, 1, 1],
          origin: [128, 104],
          duration: 0.7,
          ease: ["easeOut", "easeIn", "easeOut", "easeIn"],
          times: [0, 0.3, 0.58, 0.78, 1],
        },
        1: {
          y: [0, -14, -7.3, -3.8, 0],
          origin: [128, 232],
          duration: 0.7,
          ease: ["easeOut", "easeIn", "easeOut", "easeIn"],
          times: [0, 0.3, 0.58, 0.78, 1],
        },
      },
    },
  },

  compass: {
    description: "Finds north — the needle whips a full turn, overshoots, and settles.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 1,
      parts: {
        1: {
          rotate: [0, 180, 180, 180, 0],
          origin: [128, 128],
          ease: ["easeInOut", "linear", "linear", "easeInOut"],
        },
      },
    },
  },

  globe: {
    description: "Draws itself — the rim first, then the meridian and parallels trace on.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.8,
      parts: {
        0: {
          pathLength: [0, 1],
          opacity: [0, 1],
          duration: 0.35,
          ease: "easeInOut",
        },
        1: {
          pathLength: [0, 1],
          opacity: [0, 1],
          duration: 0.45,
          delay: 0.3,
          ease: "easeInOut",
        },
        2: {
          opacity: [0, 1],
          duration: 0.4,
          delay: 0.3,
          ease: ["easeInOut"],
        },
        3: {
          opacity: [0, 1],
          duration: 0.4,
          delay: 0.38,
          ease: ["easeInOut"],
        },
      },
    },
  },

  flag: {
    description: "Gusts — the cloth lifts from the pole, billows, and settles to rest.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.7,
      parts: {
        1: {
          rotate: [0, -3, 1.6, -0.8, 0],
          scaleX: [1, 1.05, 0.98, 1.01, 1],
          origin: [48, 116],
          ease: ["easeIn", "linear", "linear", "easeOut"],
          times: [0, 0.22, 0.5, 0.75, 1],
        },
      },
      whole: {
        rotate: [0, -8, 6, -6, 4, 0],
        ease: ["easeIn", "linear", "linear", "linear", "easeOut"],
      },
    },
  },

  anchor: {
    description: "Sways from its ring, the way a moored anchor rides the swell.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.9,
      whole: {
        rotate: [0, 4.5, -2.3, 1.2, -0.6, 0],
        origin: [128, 32],
        duration: 0.9,
        ease: ["easeOut", "easeInOut", "easeInOut", "easeInOut", [0.22, 1, 0.36, 1]],
        times: [0, 0.16, 0.42, 0.66, 0.85, 1],
      },
    },
  },
};
