/**
 * Devices — hardware, power, connectivity.
 *
 * Note: `desktop` part 0 carries an SVG `transform` attribute of its own. Motion
 * animates via the CSS transform property, which wins over the attribute, so
 * animating that part would wipe out its placement. It is left alone and the
 * motion is carried by the other parts — codegen enforces this.
 */
import type { AnimationSet } from "./types.ts";
import { pop, wiggle, shake, bounce, nudge, draw, dim, hinge, stagger } from "./recipes.ts";

export const devices: AnimationSet = {
  "device-mobile": {
    description: "Buzzes — the handset rattles, then settles.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.96,
      whole: {
        origin: [128, 128],
        duration: 0.96,
        ease: ["easeIn", "linear", "linear", "linear", "linear", "linear", "easeOut"],
        rotate: [0, -8, 8, -8, 8, -4, 4, 0],
      },
    },
  },

  laptop: {
    description: "Nods — the lid dips shut a touch, then springs back open.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.96,
      parts: {
        0: {
          scaleY: [1, 0, 1, 1],
          origin: [128, 176],
          times: [0, 0.286, 0.781, 1],
          ease: ["easeIn", "linear", "easeOut"],
        },
        2: {
          opacity: [1, 0, 0, 0, 1],
          ease: ["easeIn", "linear", "linear", "easeOut"],
          y: [0, 88, 88, 88, 0],
          times: [0, 0.25, 0.283, 0.305, 1],
        },
      },
    },
  },

  desktop: {
    description: "Wakes — the screen lights and the stand takes the weight.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.88,
      parts: {
        2: {
          pathLength: [0, 1],
          origin: [128, 128],
          duration: 0.72,
          ease: [0.65, 0, 0.35, 1],
        },
        3: {
          origin: [128, 224],
          duration: 0.72,
          ease: [[0.34, 1.56, 0.64, 1], "easeInOut", [0.22, 1, 0.36, 1]],
          times: [0, 0.4, 0.7, 1],
          delay: 0.192,
        },
      },
    },
  },

  keyboard: {
    description: "Types — key, key, spacebar, each blinking as it's struck.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.96,
      parts: {
        3: {
          y: [0, 3, 0],
          opacity: [1, 0.2, 1],
          duration: 0.48,
          ease: ["easeOut", [0.22, 1, 0.36, 1]],
          delay: 0,
        },
        4: {
          y: [0, 3, 0],
          opacity: [1, 0.2, 1],
          duration: 0.48,
          ease: ["easeOut", [0.22, 1, 0.36, 1]],
          delay: 0.288,
        },
        5: {
          y: [0, 3, 0],
          opacity: [1, 0.2, 1],
          duration: 0.48,
          ease: ["easeOut", [0.22, 1, 0.36, 1]],
          delay: 0.144,
        },
      },
    },
  },

  mouse: {
    description: "Clicks — the whole mouse presses down and springs back, wheel first.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.56,
      whole: {
        origin: [128, 128],
        duration: 0.7,
        ease: ["easeIn", "linear", "linear", "easeOut"],
        times: [0, 0.5, 0.64, 0.86, 1],
        rotate: [0, -7.6, 4, -2.1, 0],
      },
      parts: {
        1: {
          origin: [128, 112],
          duration: 0.7,
          ease: ["easeOut", [0.23, 1, 0.32, 1], [0.23, 1, 0.32, 1]],
          pathLength: [1, 0, 1, 1],
        },
      },
    },
  },

  "game-controller": {
    description: "Rumbles — a quick vibration buzzes through the pad and dies out.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.8,
      whole: {
        rotate: [0, -4, 4, -4, 4, -2, 2, 0],
        ease: ["easeIn", "linear", "linear", "linear", "linear", "linear", "easeOut"],
        duration: 0.88,
      },
      parts: {
        0: {
          opacity: [1, 0, 1, 1],
          ease: ["easeInOut", "easeInOut", "easeInOut"],
          delay: 0.4,
        },
        1: {
          ease: ["easeInOut", "easeInOut", "easeInOut"],
          opacity: [1, 0, 1, 1],
        },
        2: {
          ease: ["easeInOut", "easeInOut", "easeInOut"],
          opacity: [1, 0, 1, 1],
        },
      },
    },
  },

  "battery-full": {
    description: "Recharges — the bars blank out, then refill from the left.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 1.44,
      parts: {
        1: {
          opacity: [1, 0, 0, 1],
          ease: ["easeInOut", "linear", "easeInOut"],
          times: [0, 0.25, 0.65, 1],
        },
        2: {
          opacity: [1, 0, 0, 1, 1],
          ease: ["easeInOut", "linear", "easeInOut", "linear"],
          times: [0, 0.25, 0.55, 0.8, 1],
        },
        3: {
          opacity: [1, 0, 0, 1, 1],
          ease: ["easeInOut", "linear", "easeInOut", "linear"],
          times: [0, 0.25, 0.45, 0.7, 1],
        },
        4: {
          opacity: [1, 0, 0, 1, 1],
          ease: ["easeInOut", "linear", "easeInOut", "linear"],
          times: [0, 0.25, 0.35, 0.6, 1],
        },
      },
    },
  },

  "battery-charging": {
    description: "Charging — the bolt pulses twice as the current lands.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 1.28,
      parts: {
        2: {
          scale: [1, 1.2, 1, 1.1, 1],
          opacity: [1, 0.8, 1, 0.9, 1],
          origin: [116, 128],
          ease: "easeInOut",
          times: [0, 0.25, 0.5, 0.75, 1],
        },
      },
    },
  },

  "wifi-high": {
    description: "Reconnects — the signal drops out and rebuilds outward from the dot.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 1.04,
      parts: {
        0: {
          scale: [1, 0.85, 1.15, 1],
          origin: [128, 204],
          duration: 0.88,
          ease: ["easeOut", "easeInOut", [0.34, 1.56, 0.64, 1]],
          times: [0, 0.3, 0.6, 1],
        },
        1: {
          opacity: [1, 0, 0, 1],
          origin: [128, 204],
          duration: 0.88,
          ease: ["easeOut", "linear", [0.22, 1, 0.36, 1]],
          times: [0, 0.3, 0.5, 1],
          delay: 0.224,
        },
        2: {
          opacity: [1, 0, 0, 1],
          origin: [128, 204],
          duration: 0.88,
          ease: ["easeOut", "linear", [0.22, 1, 0.36, 1]],
          times: [0, 0.3, 0.5, 1],
          delay: 0.112,
        },
        3: {
          opacity: [1, 0, 0, 1],
          origin: [128, 204],
          duration: 0.88,
          ease: ["easeOut", "linear", [0.22, 1, 0.36, 1]],
          times: [0, 0.3, 0.5, 1],
          delay: 0,
        },
      },
    },
  },

  bluetooth: {
    description: "Reconnects — the whole glyph redraws itself like a signal coming back.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.72,
      parts: {
        0: {
          pathLength: [0, 1],
          opacity: [0, 1],
          duration: 0.56,
          ease: "easeInOut",
        },
        1: {
          pathLength: [0, 1],
          opacity: [0, 1],
          duration: 0.56,
          ease: "easeInOut",
        },
        2: {
          pathLength: [0, 1],
          opacity: [0, 1],
          duration: 0.56,
          ease: "easeInOut",
        },
        3: {
          pathLength: [0, 1],
          opacity: [0, 1],
          duration: 0.56,
          ease: "easeInOut",
        },
      },
    },
  },

  power: {
    description: "Presses — the whole switch dips in and pops back.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.8,
      whole: {
        scale: [1, 0.9, 1.05, 1],
        origin: [128, 128],
        times: [0, 0.38, 0.72, 1],
        ease: ["easeIn", "linear", "easeOut"],
      },
      parts: {
        0: {
          ease: ["easeInOut"],
          pathLength: [0, 1],
        },
        1: {
          ease: ["easeInOut"],
          pathLength: [0, 1],
          duration: 0.7,
        },
      },
    },
  },

  plug: {
    description: "Connects — the plug snaps home, then current flickers through the prongs.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 1.04,
      whole: {
        x: [0, -20, 0],
        y: [0, 20, 0],
        duration: 0.72,
        ease: ["easeInOut", [0.34, 1.56, 0.64, 1]],
        times: [0, 0.4, 1],
      },
      parts: {
        0: {
          origin: [164, 44],
          duration: 0.704,
          ease: ["easeOut", "easeInOut", "easeInOut", "easeInOut"],
          delay: 0.416,
        },
        1: {
          origin: [212, 92],
          duration: 0.704,
          ease: ["easeOut", "easeInOut", "easeInOut", "easeInOut"],
          delay: 0.512,
        },
      },
    },
  },

  "hard-drive": {
    description: "Reads — the activity light pops and blinks twice.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 1.04,
      parts: {
        1: {
          opacity: [1, 0, 1, 0, 1],
          origin: [188, 128],
          ease: ["linear", "linear", "linear", "linear"],
          duration: 0.96,
        },
      },
    },
  },
};
