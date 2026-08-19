/**
 * Essentials — the icons nearly every app ships.
 *
 * Part indices refer to the regular drawing (see data/generated/parts.txt).
 */
import type { AnimationSet } from "./types.ts";
import {
  swing, beat, pop, spin, shake, wiggle, bounce, nudge, flare, squash, orbit, OUT,
  draw, hinge, dim, blink, tip, stagger,
} from "./recipes.ts";

export const essentials: AnimationSet = {
  bell: {
    description: "Rings — the whole bell swings wide from its mount, left first.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.6,
      whole: {
        rotate: [0, -4.4, 2.3, -1.2, 0],
        origin: [128, 48],
        duration: 0.6,
        ease: ["easeInOut", "easeInOut", "easeInOut", [0.22, 1, 0.36, 1]],
        times: [0, 0.22, 0.5, 0.78, 1],
      },
      parts: {
        0: {
          rotate: [0, -4.8, 2.5, -1.3, 0],
          origin: [128, 48],
          delay: 0.04,
          duration: 0.65,
          times: [0, 0.22, 0.5, 0.78, 1],
          ease: ["easeInOut", "easeInOut", "easeInOut", [0.22, 1, 0.36, 1]],
        },
      },
    },
  },

  "bell-ringing": {
    description: "Rings out loud — the bell whips from its mount and sound draws off both sides.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.8,
      parts: {
        0: {
          rotate: [0, -4.8, 2.5, -1.3, 0],
          origin: [128, 48],
          duration: 0.65,
          ease: ["easeInOut", "easeInOut", "easeInOut", [0.22, 1, 0.36, 1]],
          times: [0, 0.22, 0.5, 0.78, 1],
          delay: 0.04,
        },
        1: {
          pathLength: [0, 1],
          opacity: [0, 1],
          duration: 0.35,
          ease: [0.22, 1, 0.36, 1],
          delay: 0.12,
        },
        2: {
          pathLength: [0, 1],
          opacity: [0, 1],
          duration: 0.35,
          ease: [0.22, 1, 0.36, 1],
          delay: 0.18,
        },
        3: {
          rotate: [0, -4.3, 2.2, -1.2, 0],
          origin: [128, 48],
          duration: 0.65,
          ease: ["easeInOut", "easeInOut", "easeInOut", [0.22, 1, 0.36, 1]],
          times: [0, 0.22, 0.5, 0.78, 1],
        },
      },
    },
  },

  "bell-slash": {
    description: "Silenced — a token shake dies as the slash strikes through.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.6,
      whole: {
        origin: [128, 48],
        duration: 0.5,
        ease: ["easeOut", "easeInOut", [0.22, 1, 0.36, 1]],
        times: [0, 0.3, 0.65, 1],
      },
      parts: {
        0: {
          pathLength: [0, 1],
          duration: 0.35,
          ease: "easeOut",
          delay: 0.1,
        },
      },
    },
  },

  trash: {
    description: "Opens — the lid lifts clear of the bin, which absorbs it on the way down.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.7,
      parts: {
        0: {
          y: [0, 2, -20, 0, 0, 0],
          rotate: [0, 0.6, -7, 0, 0, 0],
          origin: [216, 56],
          ease: ["easeOut", [0.22, 1, 0.36, 1], "easeInOut", "easeInOut", [0.22, 1, 0.36, 1]],
          times: [0, 0.14, 0.36, 0.55, 0.82, 1],
          duration: 0.79,
        },
        1: {
          scaleY: [1, 1, 1, 1, 1],
          origin: [128, 216],
          ease: ["linear", "easeOut", [0.22, 1, 0.36, 1], "easeInOut"],
          times: [0, 0.56, 0.72, 0.86, 1],
          duration: 0.79,
        },
        2: {
          scaleY: [1, 1, 1, 1, 1],
          origin: [128, 216],
          ease: ["linear", "easeOut", [0.22, 1, 0.36, 1], "easeInOut"],
          times: [0, 0.56, 0.72, 0.86, 1],
          duration: 0.79,
        },
        3: {
          scaleY: [1, 1, 1, 1, 1],
          origin: [128, 216],
          ease: ["linear", "easeOut", [0.22, 1, 0.36, 1], "easeInOut"],
          times: [0, 0.56, 0.72, 0.86, 1],
          duration: 0.79,
        },
        4: {
          y: [0, 2, -23, 0, 0, 0],
          rotate: [0, 0.6, -8, 0.5, 0, 0],
          origin: [216, 56],
          ease: ["easeOut", [0.22, 1, 0.36, 1], "easeInOut", "easeInOut", [0.22, 1, 0.36, 1]],
          times: [0, 0.14, 0.36, 0.55, 0.82, 1],
          duration: 0.79,
        },
      },
    },
  },

  "trash-simple": {
    description: "Lifts — the lid and its handle hop straight off the bin and drop back.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.5,
      parts: {
        0: {
          rotate: [0, 0, -7, 0, 0, 0],
          y: [0, 0, -20, 0, 0, 0],
          origin: [216, 56],
          duration: 0.79,
          times: [0, 0.14, 0.36, 0.55, 0.82, 1],
          ease: ["easeOut", [0.22, 1, 0.36, 1], "easeInOut", "easeInOut", [0.22, 1, 0.36, 1]],
          x: [0, 0, 0, 0, 0, 0],
        },
        1: {
          rotate: [0, 0.6, -8, 0.5, 0, 0],
          y: [0, 2, -23, 0, 0, 0],
          origin: [216, 56],
          duration: 0.79,
          times: [0, 0.14, 0.36, 0.55, 0.82, 1],
          ease: ["easeOut", [0.22, 1, 0.36, 1], "easeInOut", "easeInOut", [0.22, 1, 0.36, 1]],
        },
      },
    },
  },

  heart: {
    description: "Lub-dub — a quick squeeze, then two beats, the second softer.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.72,
      parts: {
        0: {
          scale: [1, 0.96, 1.16, 0.98, 1.09, 1],
          origin: [128, 128],
          ease: ["easeOut", [0.22, 1, 0.36, 1], [0.22, 1, 0.36, 1], [0.22, 1, 0.36, 1], [0.22, 1, 0.36, 1]],
          times: [0, 0.12, 0.32, 0.48, 0.68, 1],
          duration: 0.9,
        },
      },
    },
  },

  star: {
    description: "Catches the light — stretches its points, settles, then glimmers once more.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.6,
      parts: {
        0: {
          scale: [1, 1.14, 0.995, 1.05, 1],
          rotate: [0, 10, -5.2, 2.7, 0],
          origin: [128, 128],
          duration: 0.6,
          ease: ["easeOut", "easeInOut", "easeInOut", [0.22, 1, 0.36, 1]],
          times: [0, 0.28, 0.55, 0.8, 1],
        },
      },
    },
  },

  check: {
    description: "Stamps in — the check draws on while scaling up to size.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.45,
      parts: {
        0: {
          pathLength: [0, 0.6, 1],
          origin: [132, 136],
          duration: 0.45,
          ease: ["easeIn", "easeOut"],
          times: [0, 0.35, 1],
        },
      },
    },
  },

  "check-circle": {
    description: "Confirms — the check rewrites itself and the ring nods.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.55,
      parts: {
        0: {
          pathLength: [0, 1, 1],
          opacity: [0, 1, 1],
          origin: [128, 128],
          duration: 0.4,
          ease: ["easeIn", "easeOut"],
          delay: 0.1,
        },
        1: {
          scale: [1, 0.97, 1.02, 1],
          origin: [128, 128],
          duration: 0.5,
          ease: ["easeOut", [0.23, 1, 0.32, 1], [0.23, 1, 0.32, 1]],
          times: [0, 0.3, 0.62, 1],
        },
      },
    },
  },

  x: {
    description: "Struck out — two strokes cross in turn, and the pair lands with a snap.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.52,
      parts: {
        0: {
          pathLength: [0, 1],
          opacity: [0, 1],
          duration: 0.34,
          ease: [0.65, 0, 0.35, 1],
        },
        1: {
          pathLength: [0, 1],
          opacity: [0, 1],
          duration: 0.34,
          ease: [0.65, 0, 0.35, 1],
          delay: 0.18,
        },
      },
      whole: {
        scale: [1, 1, 1.05, 1],
        origin: [128, 128],
        duration: 0.79,
        ease: ["linear", [0.23, 1, 0.32, 1], [0.23, 1, 0.32, 1]],
        times: [0, 0.72, 0.86, 1],
      },
    },
  },

  "x-circle": {
    description: "Rejects — the cross twists in and pops while the ring pulses around it.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.5,
      parts: {
        0: {
          rotate: [0, -10, 5.2, 0],
          scale: [1, 0.88, 1.08, 1],
          origin: [128, 128],
          duration: 0.42,
          ease: ["easeOut", "easeInOut", [0.22, 1, 0.36, 1]],
          times: [0, 0.3, 0.62, 1],
        },
        1: {
          rotate: [0, -10, 5.2, 0],
          scale: [1, 0.88, 1.08, 1],
          origin: [128, 128],
          duration: 0.42,
          ease: ["easeOut", "easeInOut", [0.22, 1, 0.36, 1]],
          times: [0, 0.3, 0.62, 1],
        },
        2: {
          scale: [1, 0.96, 1.025, 1],
          origin: [128, 128],
          duration: 0.48,
          ease: ["easeOut", "easeInOut", [0.22, 1, 0.36, 1]],
          times: [0, 0.34, 0.66, 1],
        },
      },
    },
  },

  minus: {
    description: "Pinches to the centre, then snaps back to full width.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.45,
      parts: {
        0: {
          scaleX: [1, 0.35, 1.08, 1],
          origin: [128, 128],
          duration: 0.5,
          ease: ["easeIn", "easeOut", [0.22, 1, 0.36, 1]],
          times: [0, 0.42, 0.78, 1],
        },
      },
    },
  },

  plus: {
    description: "Stamps — each stroke overshoots long, pinches short, and settles.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.55,
      parts: {
        0: {
          scaleX: [1, 1.15, 0.94, 1],
          origin: [128, 128],
          duration: 0.5,
          ease: "easeInOut",
          times: [0, 0.32, 0.68, 1],
          delay: 0,
        },
        1: {
          scaleY: [1, 1.15, 0.94, 1],
          origin: [128, 128],
          duration: 0.5,
          ease: "easeInOut",
          times: [0, 0.32, 0.68, 1],
          delay: 0.06,
        },
      },
    },
  },

  gear: {
    description: "Winds up, then turns a tooth counter-clockwise and eases in.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.6,
      parts: {
        1: {
          ease: [[0.34, 1.56, 0.64, 1]],
          duration: 0.6,
          rotate: [0, 90],
        },
      },
    },
  },

  "gear-six": {
    description: "Turns a tooth clockwise, overshoots, and clicks into place.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.7,
      parts: {
        1: {
          rotate: [0, 90],
          ease: [[0.34, 1.56, 0.64, 1]],
          duration: 0.6,
        },
      },
    },
  },

  eye: {
    description: "Blinks — the lid closes as the pupil contracts behind it.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.4,
      parts: {
        0: {
          scaleY: [1, 0.05, 1],
          origin: [128, 128],
          ease: ["easeOut", "easeInOut"],
        },
        1: {
          scale: [1, 0, 1],
          opacity: [1, 0, 1],
          origin: [128, 128],
          ease: ["easeOut", "easeInOut"],
        },
      },
    },
  },

  "eye-slash": {
    description: "Hidden — the slash sweeps across as the eye dims behind it.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.6,
      parts: {
        0: {
          pathLength: [0, 1],
          delay: 0.1,
          duration: 0.35,
          ease: ["easeOut"],
        },
        1: {
          delay: 0.1,
          duration: 0.35,
          ease: ["easeOut"],
        },
        2: {
          duration: 0.6,
          ease: ["easeOut", "easeInOut"],
          times: [0, 0.45, 1],
        },
        3: {
          duration: 0.6,
          ease: ["easeOut", "easeInOut"],
          times: [0, 0.45, 1],
        },
        4: {
          duration: 0.6,
          ease: ["easeOut", "easeInOut"],
          times: [0, 0.45, 1],
        },
      },
    },
  },

  lock: {
    description: "Clicks shut — the shackle presses in and the body shudders tight.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.65,
      parts: {
        2: {
          y: [0, 4, 0],
          origin: [128, 128],
          duration: 0.3,
          ease: ["easeOut", [0.22, 1, 0.36, 1]],
          times: [0, 0.4, 1],
        },
      },
      whole: {
        rotate: [0, -3, 1.6, -0.8, 0],
        scale: [1, 0.965, 1.04, 0.99, 1],
        origin: [128, 152],
        duration: 0.6,
        delay: 0.06,
        ease: ["easeOut", "easeInOut", "easeInOut", [0.22, 1, 0.36, 1]],
        times: [0, 0.22, 0.52, 0.78, 1],
      },
    },
  },

  "lock-open": {
    description: "Springs — the shackle flicks wider while the whole lock jolts.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.65,
      parts: {
        2: {
          rotate: [0, -7, 3.6, 0],
          origin: [88, 88],
          duration: 0.55,
          ease: [[0.22, 1, 0.36, 1], "easeInOut", [0.22, 1, 0.36, 1]],
          times: [0, 0.4, 0.7, 1],
        },
      },
      whole: {
        rotate: [0, 3, -1.6, 0],
        scale: [1, 1.04, 0.98, 1],
        origin: [128, 152],
        duration: 0.6,
        delay: 0.05,
        ease: ["easeOut", "easeInOut", [0.22, 1, 0.36, 1]],
        times: [0, 0.35, 0.7, 1],
      },
    },
  },

  key: {
    description: "Turns in the lock — deep, a small rebound, then lets go.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.75,
      whole: {
        rotate: [0, -7.5, -3.9, -2, 0],
        origin: [160, 96],
        times: [0, 0.38, 0.58, 0.74, 1],
        ease: ["easeOut", [0.22, 1, 0.36, 1], "easeInOut", [0.22, 1, 0.36, 1]],
      },
    },
  },

  "shield-check": {
    description: "Re-verifies — the shield braces while the check pops in and redraws.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.65,
      parts: {
        0: {
          scale: [1, 0.95, 1.04, 1],
          origin: [128, 128],
          duration: 0.55,
          ease: ["easeOut", "easeInOut", [0.22, 1, 0.36, 1]],
          times: [0, 0.3, 0.62, 1],
        },
        1: {
          pathLength: [0, 1],
          opacity: [0, 1],
          scale: [0.5, 1],
          origin: [128, 132],
          duration: 0.45,
          ease: [0.22, 1, 0.36, 1],
          delay: 0.12,
        },
      },
    },
  },

  house: {
    description: "Hops once — a welcoming little bounce.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.55,
      whole: {
        y: [0, -11, -5.7, -3, 0],
        ease: ["easeOut", "easeIn", "easeOut", "easeIn"],
        times: [0, 0.3, 0.62, 0.8, 1],
        duration: 0.61,
      },
    },
  },

  user: {
    description: "Draws itself — the head sketches in first, the shoulders follow.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.65,
      parts: {
        0: {
          pathLength: [0, 1],
          scale: [0.5, 1],
          origin: [128, 96],
          duration: 0.42,
          ease: [0.22, 1, 0.36, 1],
        },
        1: {
          pathLength: [0, 1],
          opacity: [0, 1],
          origin: [128, 188],
          duration: 0.38,
          ease: [0.65, 0, 0.35, 1],
          delay: 0.22,
        },
      },
    },
  },

  users: {
    description: "Joins in — the second figure leans in behind the first and settles.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    // The second figure is part of the drawing, so it leans in from rest rather than
    // sliding in from off-centre — arriving from x -24 at opacity 0 erased it the
    // moment a hover began. Head and shoulders share one amplitude so the figure
    // stays rigid, and 8 units keeps its strokes clear of the first figure's.
    stroke: {
      duration: 0.62,
      parts: {
        2: {
          x: [0, -8, 3, 0],
          origin: [208, 180],
          duration: 0.52,
          ease: ["easeOut", "easeInOut", [0.22, 1, 0.36, 1]],
          times: [0, 0.4, 0.7, 1],
          delay: 0.08,
        },
        3: {
          x: [0, -8, 3, 0],
          origin: [172, 108],
          duration: 0.52,
          ease: ["easeOut", "easeInOut", [0.22, 1, 0.36, 1]],
          times: [0, 0.4, 0.7, 1],
          delay: 0.08,
        },
      },
    },
  },

  "magnifying-glass": {
    description: "Sweeps a slow arc, the way you search a page.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.9,
      whole: {
        x: [0, -20, 20, 20, -20, 0],
        y: [0, -20, -20, 20, 20, 0],
        origin: [112, 112],
        duration: 1,
        ease: ["easeInOut", "easeInOut", "easeInOut", "easeInOut", "easeInOut"],
      },
    },
  },

  "bookmark-simple": {
    description: "Saved — stretches down, squashes, and settles into place.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.6,
      parts: {
        0: {
          origin: [128, 40],
          duration: 0.6,
          ease: ["easeOut", "easeOut", "easeOut", "easeOut"],
          times: [0, 0.28, 0.52, 0.76, 1],
          rotate: [0, -4.4, 2.3, -1.2, 0],
          scale: [1, 1, 1, 1, 1],
        },
      },
    },
  },

  tag: {
    description: "Swings — nudged, the tag rocks on its eyelet and settles.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.8,
      whole: {
        rotate: [0, 5, -2.6, 1.4, -0.7, 0],
        origin: [84, 84],
        ease: ["easeOut", "easeInOut", "easeInOut", "easeInOut", [0.22, 1, 0.36, 1]],
        times: [0, 0.15, 0.4, 0.62, 0.82, 1],
      },
    },
  },

  "pencil-simple": {
    description: "Writes — the nib travels a quick scribble while the shaft tilts.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.65,
      parts: {
        0: {
          rotate: [0, -3.4, 1.8, -0.9, 0],
          x: [0, -7, 3.6, -1.9, 0],
          y: [0, 7, -3.6, 1.9, 0],
          origin: [44, 210],
          duration: 0.65,
          ease: ["easeOut", "easeInOut", "easeInOut", [0.22, 1, 0.36, 1]],
          times: [0, 0.25, 0.55, 0.8, 1],
        },
        1: {
          rotate: [0, -4, 2.1, -1.1, 0],
          x: [0, -7, 3.6, -1.9, 0],
          y: [0, 7, -3.6, 1.9, 0],
          origin: [44, 210],
          duration: 0.65,
          ease: ["easeOut", "easeInOut", "easeInOut", [0.22, 1, 0.36, 1]],
          times: [0, 0.25, 0.55, 0.8, 1],
        },
      },
    },
  },

  "note-pencil": {
    description: "Edits — the pencil scribbles a quick stroke against the note.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.6,
      parts: {
        0: {
          rotate: [0, -5, 2.6, -1.4, 0],
          x: [0, -10, 5.2, -2.7, 0],
          origin: [104, 152],
          ease: ["easeOut", [0.65, 0, 0.35, 1], [0.65, 0, 0.35, 1], [0.65, 0, 0.35, 1]],
        },
        1: {
          rotate: [0, -5, 2.6, -1.4, 0],
          x: [0, -10, 5.2, -2.7, 0],
          origin: [104, 152],
          ease: ["easeOut", [0.65, 0, 0.35, 1], [0.65, 0, 0.35, 1], [0.65, 0, 0.35, 1]],
        },
      },
    },
  },

  copy: {
    description: "Duplicates — the sheets spring apart, then snap back into a stack.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.6,
      parts: {
        0: {
          x: [0, 7, -4, 0],
          y: [0, -7, 4, 0],
          origin: [128, 128],
          duration: 0.55,
          ease: ["easeIn", "linear", "easeOut"],
          times: [0, 0.4, 0.75, 1],
          delay: 0.03,
        },
        1: {
          x: [0, -9, 5, 0],
          y: [0, 9, -5, 0],
          origin: [128, 128],
          duration: 0.55,
          ease: ["easeIn", "linear", "easeOut"],
          times: [0, 0.4, 0.75, 1],
        },
      },
    },
  },

  clipboard: {
    description: "Snaps — the clip pops up and claps back down; the board takes the hit.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.6,
      parts: {
        0: {
          y: [0, -12, 0],
          origin: [128, 224],
          duration: 0.45,
          delay: 0,
          ease: ["easeIn", "easeOut"],
          times: [0, 0.4, 1],
        },
        1: {
          y: [0, -12, 0],
          origin: [128, 48],
          duration: 0.55,
          ease: ["easeIn", "easeOut"],
          times: [0, 0.4, 1],
        },
      },
    },
  },

  link: {
    description: "Tugs — the two halves pull apart, then snap back past centre.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.6,
      parts: {
        0: {
          x: [0, 7, -3.6, 0],
          y: [0, -7, 3.6, 0],
          origin: [128, 128],
          duration: 0.6,
          ease: ["easeOut", "easeInOut", "easeInOut"],
          times: [0, 0.4, 0.75, 1],
        },
        1: {
          x: [0, -7, 3.6, 0],
          y: [0, 7, -3.6, 0],
          origin: [128, 128],
          duration: 0.6,
          ease: ["easeOut", "easeInOut", "easeInOut"],
          times: [0, 0.4, 0.75, 1],
        },
      },
    },
  },

  "dots-three": {
    description: "Hops — each dot pops up in turn, left to right.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.42,
      parts: {
        0: {
          y: [0, -12, 6.2, 0],
          scale: [1, 1.15, 0.96, 1],
          origin: [128, 128],
          duration: 0.42,
          ease: ["easeOut", "easeInOut", [0.22, 1, 0.36, 1]],
          times: [0, 0.4, 0.72, 1],
          delay: 0.08,
        },
        1: {
          y: [0, -12, 6.2, 0],
          scale: [1, 1.15, 0.96, 1],
          origin: [196, 128],
          duration: 0.42,
          ease: ["easeOut", "easeInOut", [0.22, 1, 0.36, 1]],
          times: [0, 0.4, 0.72, 1],
          delay: 0.16,
        },
        2: {
          y: [0, -12, 6.2, 0],
          scale: [1, 1.15, 0.96, 1],
          origin: [60, 128],
          duration: 0.42,
          ease: ["easeOut", "easeInOut", [0.22, 1, 0.36, 1]],
          times: [0, 0.4, 0.72, 1],
          delay: 0,
        },
      },
    },
  },

  list: {
    description: "Scans — each row's right edge sweeps in and snaps back, top to bottom.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.55,
      parts: {
        0: {
          scaleX: [1, 0.76, 1.02, 1],
          origin: [40, 128],
          duration: 0.46,
          ease: ["easeOut", [0.22, 1, 0.36, 1], [0.22, 1, 0.36, 1]],
          times: [0, 0.42, 0.76, 1],
          delay: 0.08,
        },
        1: {
          scaleX: [1, 0.83, 1.02, 1],
          origin: [40, 64],
          duration: 0.46,
          ease: ["easeOut", [0.22, 1, 0.36, 1], [0.22, 1, 0.36, 1]],
          times: [0, 0.42, 0.76, 1],
          delay: 0,
        },
        2: {
          scaleX: [1, 0.83, 1.02, 1],
          origin: [40, 192],
          duration: 0.46,
          ease: ["easeOut", [0.22, 1, 0.36, 1], [0.22, 1, 0.36, 1]],
          times: [0, 0.42, 0.76, 1],
          delay: 0.16,
        },
      },
    },
  },

  sliders: {
    description: "Adjusts — the knobs take turns sliding along their tracks.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.6,
      parts: {
        0: {
          y: [0, 14, 0],
          ease: ["easeOut", [0.22, 1, 0.36, 1]],
        },
        1: {
          y: [0, -12, 0],
          ease: ["easeOut", [0.22, 1, 0.36, 1]],
          delay: 0.06,
        },
        2: {
          y: [0, 10, 0],
          ease: ["easeOut", [0.22, 1, 0.36, 1]],
          delay: 0.12,
        },
        3: {
          scaleY: [1, 1.194, 1],
          origin: [56, 40],
          ease: ["easeOut", [0.22, 1, 0.36, 1]],
        },
        4: {
          scaleY: [1, 1.096, 1],
          origin: [200, 40],
          ease: ["easeOut", [0.22, 1, 0.36, 1]],
          delay: 0.12,
        },
        5: {
          scaleY: [1, 0.5, 1],
          origin: [128, 40],
          ease: ["easeOut", [0.22, 1, 0.36, 1]],
          delay: 0.06,
        },
        6: {
          scaleY: [1, 0.75, 1],
          origin: [56, 216],
          ease: ["easeOut", [0.22, 1, 0.36, 1]],
        },
        7: {
          scaleY: [1, 0.583, 1],
          origin: [200, 216],
          ease: ["easeOut", [0.22, 1, 0.36, 1]],
          delay: 0.12,
        },
        8: {
          scaleY: [1, 1.115, 1],
          origin: [128, 216],
          ease: ["easeOut", [0.22, 1, 0.36, 1]],
          delay: 0.06,
        },
      },
    },
  },

  funnel: {
    description: "Squeezes — pinches in and pushes down, forcing everything through.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.6,
      parts: {
        0: {
          scaleX: [1, 1.06, 0.78, 1.03, 1],
          y: [0, -7, 12, -2, 0],
          origin: [128, 48],
          times: [0, 0.2, 0.52, 0.78, 1],
          ease: ["easeOut", [0.65, 0, 0.35, 1], [0.22, 1, 0.36, 1], [0.22, 1, 0.36, 1]],
        },
      },
    },
  },
};
