/**
 * Development — code, tools, machines.
 *
 * Note: `magic-wand` part 7 carries its own SVG `transform` attribute. Motion
 * animates through the CSS transform property, which overrides the attribute, so
 * that part is left static and the sparkles carry the motion.
 */
import type { AnimationSet } from "./types.ts";
import {
  pop, spin, wiggle, shake, bounce, nudge, draw, dim, pulse, stagger, erase,
  INOUT, OUT,
} from "./recipes.ts";

/** A sparkle twinkling in and out. */
const twinkle = (delay: number, origin: [number, number]) => ({
  scale: [1, 1.32, 1],
  opacity: [1, 0.3, 1],
  origin,
  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
  delay,
});

export const development: AnimationSet = {
  code: {
    description: "Recompiles — the slash slips off down-left and a fresh one drops in from above.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 1.12,
      parts: {
        2: {
          origin: [128, 128],
          duration: 0.7,
          ease: ["easeIn"],
          pathLength: [0, 1],
        },
      },
    },
  },

  "terminal-window": {
    description: "Types — the prompt pops and the line runs out after it.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.96,
      parts: {
        0: {
          scale: [1, 1.14, 1],
          origin: [120, 128],
          duration: 0.48,
          ease: [[0.34, 1.56, 0.64, 1], [0.22, 1, 0.36, 1]],
        },
        1: {
          pathLength: [0, 1],
          duration: 0.608,
          ease: [0.22, 1, 0.36, 1],
          delay: 0.352,
        },
      },
    },
  },

  "git-branch": {
    description: "Draws itself — the new node pops in, the branch traces on, the tip lands.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 1.36,
      parts: {
        0: {
          pathLength: [1, 0, 1],
          opacity: [1, 0, 1],
          duration: 0.4,
          delay: 0,
          ease: ["easeOut", "easeOut"],
          x: [0, 0, 0],
          y: [0, 0, 0],
        },
        1: {
          opacity: [1, 0, 1],
          duration: 0.4,
          delay: 0,
          ease: ["easeOut", "easeOut"],
          x: [0, 0, 0],
          y: [0, 0, 0],
        },
        2: {
          opacity: [1, 0, 1, 1],
          origin: [128, 78],
          delay: 0,
          duration: 0.88,
          ease: ["easeOut", "easeInOut", "easeInOut"],
          x: [0, 0, 0, 0],
          y: [0, 0, 0, 0],
        },
        3: {
          opacity: [1, 0, 0, 1, 1],
          duration: 0.88,
          delay: 0,
          ease: ["easeIn", "linear", "easeOut", "easeOut"],
          times: [0, 0.051, 0.5, 0.75, 1],
        },
      },
    },
  },

  bug: {
    description: "Skitters — mismatched legs twitch while the body shifts its weight.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 1.28,
      whole: {
        rotate: [0, -3, 0.5, 3, 0],
        x: [0, 8, -2, -8, 0],
        y: [0, -10, -2, -10, 0],
        origin: [128, 132],
        duration: 1.28,
        ease: ["easeIn", "linear", "linear", "easeOut"],
        times: [0, 0.2, 0.45, 0.7, 1],
      },
      parts: {
        4: {
          rotate: [0, -8, 9, -4, 0],
          origin: [203, 171],
          duration: 1.2,
          ease: ["easeOut", "easeInOut", "easeInOut", [0.22, 1, 0.36, 1]],
          times: [0, 0.18, 0.5, 0.75, 1],
          delay: 0.096,
        },
        5: {
          rotate: [0, 10, -5.2, 2.7, 0],
          origin: [203, 84],
          duration: 1.2,
          ease: ["easeOut", "easeInOut", "easeInOut", [0.22, 1, 0.36, 1]],
          times: [0, 0.15, 0.45, 0.72, 1],
        },
        6: {
          rotate: [0, -9, 4.7, -2.4, 0],
          origin: [52, 84],
          duration: 1.44,
          ease: ["easeOut", "easeInOut", "easeInOut", [0.22, 1, 0.36, 1]],
          times: [0, 0.12, 0.42, 0.7, 1],
          delay: 0.048,
        },
        7: {
          rotate: [0, 7, -9, 4, 0],
          origin: [52, 171],
          duration: 1.2,
          ease: ["easeOut", "easeInOut", "easeInOut", [0.22, 1, 0.36, 1]],
          times: [0, 0.2, 0.48, 0.76, 1],
          delay: 0.144,
        },
      },
    },
  },

  database: {
    description: "Scans — a pulse sweeps the platters, top to bottom.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.608,
      parts: {
        0: {
          origin: [128, 128],
          ease: ["easeIn", "easeOut"],
          delay: 0,
          opacity: [0, 1, 1],
          duration: 0.8,
          x: [0, 0, 0],
          y: [0, 0, 0],
        },
        1: {
          origin: [128, 128],
          ease: ["easeIn", "easeOut"],
          delay: 0.192,
          opacity: [0, 1, 1],
          duration: 0.8,
        },
        2: {
          origin: [128, 128],
          ease: ["easeIn", "easeOut"],
          delay: 0.384,
          opacity: [0, 1, 1],
          duration: 0.8,
        },
      },
    },
  },

  cpu: {
    description: "Ticks — every pin stretches with the clock, twice.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 1.12,
      parts: {
        2: {
          origin: [208, 104],
          ease: ["easeIn", "linear", "easeOut", "easeOut"],
          scale: [1, 0, 1, 1, 1],
        },
        3: {
          origin: [208, 152],
          ease: ["easeIn", "linear", "easeOut", "easeOut"],
          scale: [1, 0, 1, 1, 1],
        },
        4: {
          origin: [48, 104],
          ease: ["easeIn", "linear", "easeOut", "easeOut"],
          scale: [1, 0, 1, 1, 1],
        },
        5: {
          scale: [1, 0, 1, 1, 1],
          origin: [48, 152],
          ease: ["easeIn", "linear", "easeOut", "easeOut"],
          x: [0, 0, 0, 0, 0],
          y: [0, 0, 0, 0, 0],
        },
        6: {
          scale: [1, 0, 1, 1, 1],
          origin: [152, 208],
          ease: ["easeIn", "linear", "easeOut", "easeOut"],
        },
        7: {
          scale: [1, 0, 1, 1, 1],
          origin: [104, 208],
          ease: ["easeIn", "linear", "easeOut", "easeOut"],
        },
        8: {
          scale: [1, 0, 1, 1, 1],
          origin: [152, 48],
          ease: ["easeIn", "linear", "easeOut", "easeOut"],
        },
        9: {
          scale: [1, 0, 1, 1, 1],
          origin: [104, 48],
          ease: ["easeIn", "linear", "easeOut", "easeOut"],
        },
      },
    },
  },

  cube: {
    description: "Draws itself — the outline first, then the folded inner edges.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 1.12,
      parts: {
        0: {
          pathLength: [0, 0.5, 1],
          opacity: [0, 1, 1],
          duration: 0.592,
          ease: ["easeIn", "easeOut"],
          times: [0, 0.3, 1],
          delay: 0.448,
        },
        1: {
          pathLength: [0, 0.5, 1],
          opacity: [0, 1, 1],
          duration: 0.8,
          ease: ["easeIn", "easeOut"],
          times: [0, 0.22, 1],
        },
        2: {
          pathLength: [0, 0.5, 1],
          opacity: [0, 1, 1],
          duration: 0.592,
          ease: ["easeIn", "easeOut"],
          times: [0, 0.3, 1],
          delay: 0.672,
        },
      },
    },
  },

  wrench: {
    description: "Ratchets — cranks the bolt in its jaws, then springs back.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.96,
      whole: {
        rotate: [0, 3.7, -4.8, 1.3, 0],
        origin: [160, 88],
        ease: ["easeInOut", "easeInOut", "easeOut", [0.22, 1, 0.36, 1]],
        times: [0, 0.4, 0.66, 0.87, 1],
        duration: 1.36,
      },
    },
  },

  hammer: {
    description: "Strikes — a slow windup, then the head snaps down and recoils.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 1.28,
      whole: {
        rotate: [0, -4, -12, -4, -12, -4, 0],
        origin: [56, 200],
        ease: ["easeIn", "linear", "linear", "linear", "linear", [0.22, 1, 0.36, 1]],
      },
    },
  },

  "magic-wand": {
    description: "Flicks — the wand snaps a small arc and the stars twinkle in turn.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 1.12,
      whole: {
        rotate: [0, -4.4, 2.3, 0],
        origin: [58, 198],
        duration: 0.88,
        ease: ["easeOut", "easeInOut", "easeInOut"],
        times: [0, 0.3, 0.6, 1],
      },
      parts: {
        0: {
          scale: [1, 0.4, 1.25, 1],
          opacity: [1, 0.4, 1, 1],
          origin: [216, 152],
          duration: 0.608,
          ease: ["easeOut", "easeInOut", "easeInOut"],
          times: [0, 0.35, 0.7, 1],
          delay: 0.352,
        },
        1: {
          scale: [1, 0.4, 1.25, 1],
          opacity: [1, 0.4, 1, 1],
          origin: [216, 152],
          duration: 0.608,
          ease: ["easeOut", "easeInOut", "easeInOut"],
          times: [0, 0.35, 0.7, 1],
          delay: 0.352,
        },
        2: {
          scale: [1, 0.4, 1.25, 1],
          opacity: [1, 0.4, 1, 1],
          origin: [80, 64],
          duration: 0.608,
          ease: ["easeOut", "easeInOut", "easeInOut"],
          times: [0, 0.35, 0.7, 1],
          delay: 0.192,
        },
        3: {
          scale: [1, 0.4, 1.25, 1],
          opacity: [1, 0.4, 1, 1],
          origin: [80, 64],
          duration: 0.608,
          ease: ["easeOut", "easeInOut", "easeInOut"],
          times: [0, 0.35, 0.7, 1],
          delay: 0.192,
        },
        4: {
          scale: [1, 0.4, 1.25, 1],
          opacity: [1, 0.4, 1, 1],
          origin: [168, 200],
          duration: 0.608,
          ease: ["easeOut", "easeInOut", "easeInOut"],
          times: [0, 0.35, 0.7, 1],
          delay: 0.512,
        },
        5: {
          scale: [1, 0.4, 1.25, 1],
          opacity: [1, 0.4, 1, 1],
          origin: [168, 200],
          duration: 0.608,
          ease: ["easeOut", "easeInOut", "easeInOut"],
          times: [0, 0.35, 0.7, 1],
          delay: 0.512,
        },
      },
    },
  },

  rocket: {
    description: "Test-fires — hops off the pad, fins trailing, exhaust flaring beneath.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 1.2,
      parts: {
        0: {
          opacity: [1, 0.25, 1],
          scaleX: [1, 1.5, 1],
          origin: [128, 224],
          duration: 0.88,
          ease: ["easeOut", "easeInOut"],
          times: [0, 0.35, 1],
        },
        1: {
          y: [0, -12, 6.2, 0],
          origin: [128, 128],
          duration: 1.04,
          ease: [[0.22, 1, 0.36, 1], "easeInOut", [0.22, 1, 0.36, 1]],
          times: [0, 0.38, 0.75, 1],
        },
        2: {
          y: [0, -7.5, 6.2, 0],
          origin: [128, 128],
          duration: 1.04,
          ease: [[0.22, 1, 0.36, 1], "easeInOut", [0.22, 1, 0.36, 1]],
          times: [0, 0.38, 0.75, 1],
        },
        3: {
          y: [0, -9, 4.7, 0],
          origin: [128, 128],
          duration: 1.04,
          ease: [[0.22, 1, 0.36, 1], "easeInOut", [0.22, 1, 0.36, 1]],
          times: [0, 0.38, 0.75, 1],
          delay: 0.08,
        },
        4: {
          y: [0, -9, 4.7, 0],
          origin: [128, 128],
          duration: 1.04,
          ease: [[0.22, 1, 0.36, 1], "easeInOut", [0.22, 1, 0.36, 1]],
          times: [0, 0.38, 0.75, 1],
          delay: 0.08,
        },
      },
    },
  },

  lightbulb: {
    description: "An idea — the glass flexes as the shine redraws.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 1.04,
      parts: {
        2: {
          pathLength: [1, 0, 1, 1],
          ease: ["easeIn", "linear", "easeOut"],
          duration: 0.8,
          delay: 0.08,
          opacity: [1, 0, 1, 1],
        },
      },
      whole: {
        rotate: [0, -4, 4, -4, 4, -2, 2, 0],
        ease: ["easeIn", "linear", "linear", "linear", "linear", "linear", "easeOut"],
      },
    },
  },

  brain: {
    description: "Thinks — one deep breath while the folds retract and redraw.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 1.92,
      whole: {
        scale: [1, 1.06, 1],
        origin: [128, 128],
        duration: 1.76,
        ease: ["easeInOut", "easeInOut"],
        times: [0, 0.5, 1],
      },
      parts: {
        0: {
          pathLength: [1, 0.8, 1],
          duration: 1.6,
          ease: ["easeInOut", "easeInOut"],
          times: [0, 0.5, 1],
          delay: 0.224,
        },
        1: {
          pathLength: [1, 0.8, 1],
          duration: 1.6,
          ease: ["easeInOut", "easeInOut"],
          times: [0, 0.5, 1],
          delay: 0.32,
        },
        2: {
          pathLength: [1, 0.45, 1],
          duration: 1.76,
          ease: ["easeInOut", "easeInOut"],
          times: [0, 0.5, 1],
        },
        3: {
          pathLength: [1, 0.55, 1],
          duration: 1.76,
          ease: ["easeInOut", "easeInOut"],
          times: [0, 0.5, 1],
          delay: 0.128,
        },
      },
    },
  },

  sparkle: {
    description: "Lifts — the big sparkle bobs while the small stars blink in turn.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 1.28,
      parts: {
        0: {
          y: [0, -10, 5.2, 0],
          duration: 0.96,
          ease: [[0.34, 1.56, 0.64, 1], "easeInOut", [0.22, 1, 0.36, 1]],
          times: [0, 0.35, 0.65, 1],
        },
        1: {
          opacity: [1, 0, 1],
          scale: [1, 0.7, 1],
          origin: [176, 40],
          duration: 0.64,
          ease: ["easeOut", [0.22, 1, 0.36, 1]],
          delay: 0.24,
        },
        2: {
          opacity: [1, 0, 1],
          scale: [1, 0.7, 1],
          origin: [224, 88],
          duration: 0.64,
          ease: ["easeOut", [0.22, 1, 0.36, 1]],
          delay: 0.48,
        },
        3: {
          opacity: [1, 0, 1],
          scale: [1, 0.7, 1],
          origin: [176, 40],
          duration: 0.64,
          ease: ["easeOut", [0.22, 1, 0.36, 1]],
          delay: 0.24,
        },
        4: {
          opacity: [1, 0, 1],
          scale: [1, 0.7, 1],
          origin: [224, 88],
          duration: 0.64,
          ease: ["easeOut", [0.22, 1, 0.36, 1]],
          delay: 0.48,
        },
      },
    },
  },
};
