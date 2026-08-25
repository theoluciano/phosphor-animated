/**
 * Weather & Nature — ambient, mostly continuous motion.
 *
 * These lean slower and softer than the UI icons: weather drifts and flickers
 * rather than snapping, which is what separates it from a button responding.
 */
import type { AnimationSet } from "./types.ts";
import {
  pop, spin, wiggle, bounce, nudge, draw, dim, pulse, stagger, flare, tip, blink,
  INOUT, OUT,
} from "./recipes.ts";

export const nature: AnimationSet = {
  sun: {
    description: "Lights up — the core pops and the rays flare one by one, clockwise.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    // The rays flare from rest rather than fading in: they are part of the static
    // drawing, so starting at opacity 0 blanked them the instant a hover began.
    // Each pushes out from the core and returns; the delays are the clockwise order,
    // starting at noon (0, 4, 8, 5, 7, 3, 6, 2).
    stroke: {
      duration: 1.264,
      parts: {
        0: {
          opacity: [1, 0.4, 1],
          scale: [1, 1.09, 1],
          origin: [128, 128],
          duration: 0.544,
          ease: [[0.22, 1, 0.36, 1], "easeInOut"],
          times: [0, 0.4, 1],
          delay: 0.096,
        },
        1: {
          scale: [1, 1.08, 1],
          origin: [128, 128],
          duration: 0.544,
          ease: [[0.34, 1.56, 0.64, 1], [0.22, 1, 0.36, 1]],
        },
        2: {
          opacity: [1, 0.4, 1],
          scale: [1, 1.09, 1],
          origin: [128, 128],
          duration: 0.544,
          ease: [[0.22, 1, 0.36, 1], "easeInOut"],
          times: [0, 0.4, 1],
          delay: 0.712,
        },
        3: {
          opacity: [1, 0.4, 1],
          scale: [1, 1.09, 1],
          origin: [128, 128],
          duration: 0.544,
          ease: [[0.22, 1, 0.36, 1], "easeInOut"],
          times: [0, 0.4, 1],
          delay: 0.536,
        },
        4: {
          opacity: [1, 0.4, 1],
          scale: [1, 1.09, 1],
          origin: [128, 128],
          duration: 0.544,
          ease: [[0.22, 1, 0.36, 1], "easeInOut"],
          times: [0, 0.4, 1],
          delay: 0.184,
        },
        5: {
          opacity: [1, 0.4, 1],
          scale: [1, 1.09, 1],
          origin: [128, 128],
          duration: 0.544,
          ease: [[0.22, 1, 0.36, 1], "easeInOut"],
          times: [0, 0.4, 1],
          delay: 0.36,
        },
        6: {
          opacity: [1, 0.4, 1],
          scale: [1, 1.09, 1],
          origin: [128, 128],
          duration: 0.544,
          ease: [[0.22, 1, 0.36, 1], "easeInOut"],
          times: [0, 0.4, 1],
          delay: 0.624,
        },
        7: {
          opacity: [1, 0.4, 1],
          scale: [1, 1.09, 1],
          origin: [128, 128],
          duration: 0.544,
          ease: [[0.22, 1, 0.36, 1], "easeInOut"],
          times: [0, 0.4, 1],
          delay: 0.448,
        },
        8: {
          opacity: [1, 0.4, 1],
          scale: [1, 1.09, 1],
          origin: [128, 128],
          duration: 0.544,
          ease: [[0.22, 1, 0.36, 1], "easeInOut"],
          times: [0, 0.4, 1],
          delay: 0.272,
        },
      },
    },
  },

  moon: {
    description: "Rocks side to side, a crescent settling into the night.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 1.28,
      parts: {
        0: {
          rotate: [0, -7.6, 4, -2.1, 0],
          origin: [128, 128],
          duration: 1.28,
          ease: ["easeOut", "easeInOut", "easeInOut", [0.22, 1, 0.36, 1]],
          times: [0, 0.18, 0.48, 0.74, 1],
        },
      },
    },
  },

  cloud: {
    description: "Swells — a soft roll lifts the cloud and sets it back down.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 1.44,
      parts: {
        0: {
          duration: 1.44,
          ease: ["easeIn", "easeOut"],
          scale: [1, 0.9, 1],
        },
      },
    },
  },

  lightning: {
    description: "Strikes — the bolt draws itself on, strike-quick.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.96,
      parts: {
        0: {
          pathLength: [1, 0, 1, 1],
          opacity: [1, 0, 1, 1],
          ease: ["easeIn", "linear", "easeOut"],
        },
      },
    },
  },

  fire: {
    description: "Ignites — the flame draws itself on, the inner tongue catching last.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.8,
      parts: {
        0: {
          pathLength: [1, 0, 1, 1],
          opacity: [1, 0, 1, 1],
          times: [0, 0.45, 0.6, 1],
          ease: ["linear", "easeOut", "easeOut"],
          duration: 1.168,
        },
      },
      whole: {
        duration: 0.88,
        ease: ["easeIn", "linear", "linear", "linear", "linear", "linear", "easeOut"],
        scale: [1, 1.05, 0.95, 1, 0.95, 1, 1, 1],
        rotate: [0, -8, 8, -8, 8, -4, 4, 0],
        origin: [128, 216],
        x: [0, 0, 0, 0, 0, 0, 0, 0],
        y: [0, 0, 0, 0, 0, 0, 0, 0],
      },
    },
  },

  drop: {
    description: "Draws itself — the outline traces on, then the sheen follows.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 1.12,
      parts: {
        0: {
          duration: 0.96,
          ease: ["easeIn", "linear", "linear", "linear", "easeOut", "easeOut", "easeOut"],
          rotate: [0, -8, 8, -8, 8, -4, 4, 0],
        },
        1: {
          pathLength: [0, 1],
          opacity: [0, 1],
          duration: 0.4,
          delay: 0.672,
          ease: [0.22, 1, 0.36, 1],
        },
      },
    },
  },

  leaf: {
    description: "Drifts — tilting and travelling at once, the way a leaf falls.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 2.4,
      whole: {
        origin: [128, 128],
        ease: ["easeIn", "linear", "linear", "linear", "easeOut"],
        scale: [1, 1, 1, 1.1, 0.97, 1],
        duration: 0.704,
      },
      parts: {
        0: {
          ease: ["easeIn"],
          pathLength: [0, 1],
          duration: 0.704,
          times: [0, 0.63],
        },
      },
    },
  },

  tree: {
    description: "Sways — the whole tree leans through a gust and settles on its roots.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.96,
      whole: {
        rotate: [0, -4.1, 2.1, -1.1, 0],
        origin: [128, 232],
        ease: ["easeOut", "easeInOut", "easeInOut", [0.22, 1, 0.36, 1]],
        times: [0, 0.2, 0.48, 0.74, 1],
      },
    },
  },

  snowflake: {
    description: "Shivers — the whole flake flicks side to side and settles.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.8,
      whole: {
        rotate: [0, -5, 2.6, -1.4, 0],
        origin: [128, 128],
        times: [0, 0.28, 0.55, 0.8, 1],
        ease: ["easeOut", [0.65, 0, 0.35, 1], [0.65, 0, 0.35, 1], [0.22, 1, 0.36, 1]],
        duration: 0.88,
      },
    },
  },

  wind: {
    description: "Blows through — each stream draws itself on, one gust behind the last.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 1.28,
      parts: {
        0: {
          pathLength: [0, 1],
          opacity: [0, 1],
          duration: 0.704,
          ease: "easeInOut",
          delay: 0.256,
        },
        1: {
          pathLength: [0, 1],
          opacity: [0, 1],
          duration: 0.704,
          ease: "easeInOut",
          delay: 0.512,
        },
        2: {
          pathLength: [0, 1],
          opacity: [0, 1],
          duration: 0.704,
          ease: "easeInOut",
        },
      },
    },
  },

  umbrella: {
    description: "Takes the weather — it rocks under the shaft while the canopy absorbs the hit.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 1.12,
      whole: {
        rotate: [0, -5, 2.6, -1.4, 0],
        origin: [128, 140],
        ease: ["easeOut", "easeInOut", "easeInOut", [0.22, 1, 0.36, 1]],
        times: [0, 0.22, 0.5, 0.76, 1],
      },
      parts: {
        1: {
          scaleY: [1, 0.96, 1.015, 1],
          origin: [128, 136],
          ease: ["easeOut", [0.34, 1.56, 0.64, 1], "easeInOut"],
          times: [0, 0.24, 0.6, 1],
        },
      },
    },
  },

  rainbow: {
    description: "Appears — the bands draw on, inner arc first.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 1.12,
      parts: {
        0: {
          pathLength: [0, 0.3, 1],
          opacity: [0, 1, 1],
          times: [0, 0.2, 1],
          duration: 0.88,
          ease: [[0.22, 1, 0.36, 1], [0.22, 1, 0.36, 1]],
          delay: 0,
        },
        1: {
          pathLength: [0, 0.3, 1],
          opacity: [0, 1, 1],
          times: [0, 0.2, 1],
          duration: 0.88,
          ease: [[0.22, 1, 0.36, 1], [0.22, 1, 0.36, 1]],
          delay: 0.192,
        },
        2: {
          pathLength: [0, 0.3, 1],
          opacity: [0, 1, 1],
          times: [0, 0.2, 1],
          duration: 0.88,
          ease: [[0.22, 1, 0.36, 1], [0.22, 1, 0.36, 1]],
          delay: 0.384,
        },
      },
    },
  },

  cow: {
    description: "Cocks its head — a slow tilt, and a blink halfway through.",
    // Pivot down in the muzzle, so the horns travel furthest and the chin barely
    // moves. That is the shape of an animal looking up at you rather than of a
    // drawing being rotated.
    //
    // The ears are deliberately still. They share the head's outline at (96,72)
    // and (64,120), so rotating them — about their own hinge or about this pivot —
    // opens a visible break exactly where principle 2 says not to. Losing the ear
    // flick costs less than a cow that comes apart at 64px.
    stroke: {
      duration: 1.152,
      whole: tip(5, { origin: [128, 200], duration: 1.152 }),
      parts: {
        // The eyes are the one place a blink cannot cross another stroke: two
        // standalone circles with nothing overlapping them. Both fire together —
        // a staggered blink reads as a twitch — and land after the tilt has
        // started, which is a decisive offset rather than an accidental one.
        4: blink({ origin: [100, 124], delay: 0.256 }),
        5: blink({ origin: [156, 124], delay: 0.256 }),
      },
    },
  },
};
