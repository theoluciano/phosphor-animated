/**
 * Feedback & status — alerts, progress, results.
 *
 * Alerts are the one place a sharper amplitude is right: a warning that drifts
 * politely does not read as a warning.
 */
import type { AnimationSet } from "./types.ts";
import {
  pop, spin, rotateForever, shake, wiggle, bounce, nudge, beat,
  draw, dim, blink, pulse, stagger, flare, OUT,
} from "./recipes.ts";

/** Alert bar and dot: the mark flashes while the frame jolts. */
const alert = (frame: number, bar: number, dot: number) => ({
  duration: 0.96,
  parts: {
    [frame]: shake(6),
    [bar]: { opacity: [1, 0.25, 1], ease: "easeInOut" as const, delay: 0.08 },
    [dot]: { opacity: [1, 0.25, 1], scale: [1, 1.3, 1], origin: [128, 180] as [number, number], ease: "easeInOut" as const, delay: 0.192 },
  },
});

export const feedback: AnimationSet = {
  warning: {
    description: "Alerts — the triangle takes the knock and the exclamation snaps back up.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.928,
      parts: {
        0: {
          scaleY: [1, 0.955, 1.03, 0.994, 1],
          origin: [128, 216],
          duration: 0.976,
          ease: ["easeOut", "easeInOut", "easeInOut", [0.22, 1, 0.36, 1]],
          times: [0, 0.18, 0.46, 0.72, 1],
        },
        1: {
          y: [0, -9, 4.7, -2.4, 0],
          scaleY: [1, 1.1, 0.93, 1.02, 1],
          origin: [128, 144],
          duration: 0.928,
          ease: ["easeOut", "easeInOut", "easeInOut", [0.22, 1, 0.36, 1]],
          times: [0, 0.24, 0.5, 0.75, 1],
        },
        2: {
          y: [0, 7.5, -8.5, 2.2, 0],
          scale: [1, 0.86, 1.2, 0.92, 1],
          origin: [128, 180],
          duration: 0.976,
          ease: ["easeOut", "easeInOut", "easeInOut", [0.22, 1, 0.36, 1]],
          times: [0, 0.18, 0.46, 0.72, 1],
        },
      },
    },
  },

  "warning-circle": {
    description: "Alerts — the ring squashes and the exclamation bounces back into place.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.896,
      parts: {
        0: {
          scale: [1, 0.96, 1.025, 0.996, 1],
          origin: [128, 128],
          duration: 0.976,
          ease: ["easeOut", "easeInOut", "easeInOut", [0.22, 1, 0.36, 1]],
          times: [0, 0.18, 0.48, 0.74, 1],
        },
        1: {
          y: [0, -8.5, 4.4, -2.3, 0],
          scaleY: [1, 1.08, 0.94, 1.02, 1],
          origin: [128, 136],
          duration: 0.896,
          ease: ["easeOut", "easeInOut", "easeInOut", [0.22, 1, 0.36, 1]],
          times: [0, 0.24, 0.52, 0.76, 1],
        },
        2: {
          y: [0, 7, -8, 2, 0],
          scale: [1, 0.88, 1.18, 0.93, 1],
          origin: [128, 172],
          duration: 0.976,
          ease: ["easeOut", "easeInOut", "easeInOut", [0.22, 1, 0.36, 1]],
          times: [0, 0.18, 0.48, 0.74, 1],
        },
      },
    },
  },

  info: {
    description: "The \"i\" bobs — the dot hops while the stem squashes and the ring breathes.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.896,
      parts: {
        0: {
          origin: [128, 128],
          ease: ["easeOut", [0.23, 1, 0.32, 1], [0.23, 1, 0.32, 1], [0.23, 1, 0.32, 1]],
          times: [0, 0.2, 0.5, 0.76, 1],
        },
        1: {
          origin: [128, 176],
          ease: ["easeOut"],
          pathLength: [0, 1],
          duration: 0.7,
        },
        2: {
          origin: [124, 84],
          ease: ["easeOut", [0.23, 1, 0.32, 1], [0.23, 1, 0.32, 1], [0.23, 1, 0.32, 1]],
          times: [0, 0.2, 0.5, 0.76, 1],
        },
      },
      whole: {
        scale: [1, 1, 1, 1.1, 0.97, 1],
        duration: 0.7,
        ease: ["easeOut", "easeIn", "easeOut", "easeIn", "easeIn"],
      },
    },
  },

  question: {
    description: "Wonders — the mark waggles side to side, dot in tow.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.88,
      parts: {
        0: {
          duration: 0.976,
          ease: ["easeOut", "easeIn", "easeOut", "easeIn", "easeIn"],
        },
        1: {
          origin: [128, 134],
          duration: 0.7,
          ease: ["easeOut"],
          pathLength: [0, 1],
        },
        2: {
          ease: ["easeInOut", "easeInOut", "easeInOut", "easeInOut", "easeInOut"],
        },
      },
      whole: {
        scale: [1, 1, 1, 1.1, 0.97, 1],
        ease: ["easeInOut", "easeInOut", "easeInOut", "easeInOut", "easeInOut"],
        duration: 0.7,
      },
    },
  },

  "thumbs-up": {
    description: "Approves — the whole hand lifts and tips back, with a little pop.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.896,
      whole: {
        rotate: [0, -5, 2.6, 0],
        y: [0, -8.26, 6.2, 0],
        scale: [1, 1.02, 0.995, 1],
        origin: [80, 200],
        ease: ["easeOut", [0.23, 1, 0.32, 1], [0.23, 1, 0.32, 1]],
      },
    },
  },

  "thumbs-down": {
    description: "Rejects — the whole hand presses down and tips, with a little pop.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.896,
      whole: {
        rotate: [0, 5, -2.6, 0],
        y: [0, 8.26, -6.2, 0],
        scale: [1, 1.02, 0.995, 1],
        origin: [80, 56],
        ease: ["easeOut", [0.23, 1, 0.32, 1], [0.23, 1, 0.32, 1]],
      },
    },
  },

  smiley: {
    description: "Beams — the face pops and tilts, the eyes widen and the grin deepens.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.96,
      whole: {
        scale: [1, 1.09, 1.02, 1],
        rotate: [0, -3, 1.6, 0],
        origin: [128, 128],
        duration: 0.96,
        ease: ["easeOut", "easeInOut", [0.22, 1, 0.36, 1]],
        times: [0, 0.3, 0.6, 1],
      },
      parts: {
        1: {
          scale: [1, 1.35, 0.92, 1],
          origin: [92, 108],
          duration: 0.8,
          ease: ["easeOut", "easeInOut", [0.22, 1, 0.36, 1]],
          times: [0, 0.3, 0.6, 1],
        },
        2: {
          scale: [1, 1.35, 0.92, 1],
          origin: [164, 108],
          duration: 0.8,
          ease: ["easeOut", "easeInOut", [0.22, 1, 0.36, 1]],
          times: [0, 0.3, 0.6, 1],
        },
        3: {
          scaleX: [1, 1.16, 1],
          scaleY: [1, 1.22, 1],
          origin: [128, 152],
          duration: 0.72,
          ease: ["easeOut", [0.22, 1, 0.36, 1]],
          delay: 0.128,
        },
      },
    },
  },

  spinner: {
    description: "Spins — one full turn of the wheel, winding up and easing off.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.8,
      parts: {
        0: {
          opacity: [1, 0.15, 1],
          origin: [128, 128],
          duration: 0.88,
          ease: ["easeInOut", "easeInOut"],
          times: [0, 0.4, 1],
          delay: 0,
        },
        1: {
          opacity: [1, 0.15, 1],
          origin: [128, 128],
          duration: 0.88,
          ease: ["easeInOut", "easeInOut"],
          times: [0, 0.4, 1],
          delay: 0.088,
        },
        2: {
          opacity: [1, 0.15, 1],
          origin: [128, 128],
          duration: 0.88,
          ease: ["easeInOut", "easeInOut"],
          times: [0, 0.4, 1],
          delay: 0.176,
        },
        3: {
          opacity: [1, 0.15, 1],
          origin: [128, 128],
          duration: 0.88,
          ease: ["easeInOut", "easeInOut"],
          times: [0, 0.4, 1],
          delay: 0.264,
        },
        4: {
          opacity: [1, 0.15, 1],
          origin: [128, 128],
          duration: 0.88,
          ease: ["easeInOut", "easeInOut"],
          times: [0, 0.4, 1],
          delay: 0.352,
        },
        5: {
          opacity: [1, 0.15, 1],
          origin: [128, 128],
          duration: 0.88,
          ease: ["easeInOut", "easeInOut"],
          times: [0, 0.4, 1],
          delay: 0.44,
        },
        6: {
          opacity: [1, 0.15, 1],
          origin: [128, 128],
          duration: 0.88,
          ease: ["easeInOut", "easeInOut"],
          times: [0, 0.4, 1],
          delay: 0.528,
        },
        7: {
          opacity: [1, 0.15, 1],
          origin: [128, 128],
          duration: 0.88,
          ease: ["easeInOut", "easeInOut"],
          times: [0, 0.4, 1],
          delay: 0.616,
        },
      },
    },
  },

  "circle-notch": {
    description: "Spins — one full turn, up to speed and easing home.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 1.28,
      parts: {
        0: {
          rotate: [-360, 0],
          origin: [128, 128],
          duration: 1.28,
          ease: ["easeInOut"],
        },
      },
    },
  },

  hourglass: {
    description: "Flips over with a springy half-turn — the sand starts again.",
    // Two-fold: a half turn puts the frame back where it started.
    symmetry: 2,
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 1.44,
      whole: {
        // Springs past the half turn and settles onto it. The peaks decay toward 180,
        // where this rests — decaying them toward zero would swing it back upright.
        rotate: [0, 192, 176.5, 181.2, 180],
        ease: ["easeOut", "easeInOut", "easeInOut", [0.22, 1, 0.36, 1]],
        times: [0, 0.5, 0.72, 0.88, 1],
      },
    },
  },

  clock: {
    description: "Fast-forwards — the hands whip one brisk full turn.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.96,
      parts: {
        1: {
          rotate: [0, 360],
          origin: [128, 128],
          duration: 0.96,
          ease: [0.4, 0, 0.2, 1],
        },
      },
    },
  },

  timer: {
    description: "Starts — the crown presses down and the hand sweeps a full turn.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 1.344,
      parts: {
        1: {
          rotate: [0, 360],
          origin: [128, 136],
          duration: 1.152,
          ease: [0.22, 1, 0.36, 1],
          delay: 0.192,
        },
        2: {
          y: [0, 8, 0],
          scaleX: [1, 0.9, 1],
          origin: [128, 16],
          duration: 0.48,
          ease: ["easeOut", [0.34, 1.56, 0.64, 1]],
          times: [0, 0.36, 1],
        },
      },
    },
  },

  alarm: {
    description: "Rattles — the whole clock rocks gently side to side while the bells flick.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 1.28,
      whole: {
        rotate: [0, -3, 1.6, -0.8, 0.4, 0],
        origin: [128, 224],
        ease: ["easeOut", "easeInOut", "easeInOut", "easeInOut", [0.22, 1, 0.36, 1]],
        times: [0, 0.16, 0.42, 0.66, 0.85, 1],
      },
      parts: {
        1: {
          rotate: [0, -8, 4.2, -2.2, 0],
          origin: [40, 48],
          duration: 1.232,
          ease: ["easeOut", "easeInOut", "easeInOut", [0.22, 1, 0.36, 1]],
          times: [0, 0.143, 0.429, 0.714, 1],
        },
        2: {
          rotate: [0, 8, -4.2, 2.2, 0],
          origin: [216, 48],
          duration: 1.232,
          ease: ["easeOut", "easeInOut", "easeInOut", [0.22, 1, 0.36, 1]],
          times: [0, 0.143, 0.429, 0.714, 1],
        },
      },
    },
  },

  confetti: {
    description: "Pops — the cone recoils and the confetti kicks outward.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 1.28,
      parts: {
        0: {
          rotate: [0, -6, 3.1, 0],
          x: [0, -5, 2.6, 0],
          y: [0, 5, -2.6, 0],
          origin: [45, 210],
          duration: 0.96,
          ease: ["easeOut", [0.22, 1, 0.36, 1], [0.22, 1, 0.36, 1]],
          times: [0, 0.255, 0.65, 1],
        },
        1: {
          scale: [1, 0, 1, 1, 1],
          x: [0, -50, 0, 0, 0],
          y: [0, 47, 0, 0, 0],
          origin: [192, 48],
          duration: 0.88,
          ease: [[0.34, 1.56, 0.64, 1], "linear", "easeOut", "easeOut"],
          delay: 0.128,
        },
        2: {
          scale: [1, 0, 1, 1, 1],
          y: [0, 56, 0, 0, 0],
          origin: [144, 28],
          duration: 0.88,
          ease: [[0.34, 1.56, 0.64, 1], "linear", "easeOut", "easeOut"],
          delay: 0.08,
        },
        3: {
          scale: [1, 0, 1, 1, 1],
          x: [0, -60, 0, 0, 0],
          origin: [224, 120],
          duration: 0.88,
          ease: [[0.34, 1.56, 0.64, 1], "linear", "easeOut", "easeOut"],
          delay: 0.224,
        },
        4: {
          scale: [1, 0, 1, 1, 1],
          x: [0, -70, 0, 0, 0],
          y: [0, 26, 0, 0, 0],
          origin: [228, 76],
          duration: 0.88,
          ease: [[0.34, 1.56, 0.64, 1], "linear", "easeOut", "easeOut"],
          delay: 0.176,
        },
        5: {
          rotate: [0, -6, 3.1, 0],
          x: [0, -5, 2.6, 0],
          y: [0, 5, -2.6, 0],
          origin: [45, 210],
          duration: 0.96,
          ease: ["easeOut", [0.22, 1, 0.36, 1], [0.22, 1, 0.36, 1]],
          times: [0, 0.256, 0.65, 1],
        },
        6: {
          rotate: [0, -6, 3.1, 0],
          x: [0, -5, 2.6, 0],
          y: [0, 5, -2.6, 0],
          origin: [45, 210],
          duration: 0.96,
          ease: ["easeOut", [0.22, 1, 0.36, 1], [0.22, 1, 0.36, 1]],
          times: [0, 0.259, 0.65, 1],
        },
      },
    },
  },

  crown: {
    description: "Bows — one restrained dip and lift while the jewels flash in turn.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 1.28,
      whole: {
        y: [0, 4, -5, -1, 0],
        scale: [1, 0.99, 1.02, 1.005, 1],
        origin: [128, 128],
        ease: [0.65, 0, 0.35, 1],
        times: [0, 0.2, 0.52, 0.78, 1],
      },
      parts: {
        0: {
          scale: [1, 1.2, 0.97, 1],
          origin: [128, 52],
          duration: 0.64,
          ease: [[0.34, 1.56, 0.64, 1], "easeInOut", [0.22, 1, 0.36, 1]],
          times: [0, 0.4, 0.7, 1],
          delay: 0.288,
        },
        1: {
          scale: [1, 1.2, 0.97, 1],
          origin: [220, 80],
          duration: 0.64,
          ease: [[0.34, 1.56, 0.64, 1], "easeInOut", [0.22, 1, 0.36, 1]],
          times: [0, 0.4, 0.7, 1],
          delay: 0.416,
        },
        2: {
          scale: [1, 1.2, 0.97, 1],
          origin: [36, 80],
          duration: 0.64,
          ease: [[0.34, 1.56, 0.64, 1], "easeInOut", [0.22, 1, 0.36, 1]],
          times: [0, 0.4, 0.7, 1],
          delay: 0.16,
        },
      },
    },
  },

  trophy: {
    description: "Hoisted — the whole trophy is raised and set back down with weight.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 1.12,
      whole: {
        y: [0, 2.5, -11, -9.5, 1.5, 0],
        ease: ["easeOut", [0.34, 1.56, 0.64, 1], "easeInOut", "easeInOut", [0.22, 1, 0.36, 1]],
        times: [0, 0.14, 0.38, 0.56, 0.8, 1],
        duration: 1.264,
      },
      parts: {
        4: {
          scaleY: [1, 1, 0.97, 1.012, 1],
          origin: [128, 184],
          ease: ["linear", "easeOut", [0.22, 1, 0.36, 1], "easeInOut"],
          times: [0, 0.58, 0.73, 0.86, 1],
          duration: 1.36,
        },
      },
    },
  },

  target: {
    description: "Hits — the arrow draws back, lands, and the rings ring outward from the centre.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 1.376,
      parts: {
        0: {
          x: [0, 11, 11, 0],
          y: [0, -11, -11, 0],
          duration: 0.88,
          ease: ["easeOut", "linear", [0.5, 0, 0.75, 0]],
          times: [0, 0.4, 0.6, 1],
        },
        1: {
          scale: [1, 1.09, 0.995, 1],
          origin: [128, 128],
          duration: 0.704,
          ease: [[0.22, 1, 0.36, 1], "easeInOut", [0.22, 1, 0.36, 1]],
          times: [0, 0.42, 0.7, 1],
          delay: 0.672,
        },
        2: {
          scale: [1, 1.32, 0.99, 1],
          origin: [128, 128],
          duration: 0.704,
          ease: [[0.22, 1, 0.36, 1], "easeInOut", [0.22, 1, 0.36, 1]],
          times: [0, 0.42, 0.7, 1],
          delay: 0.608,
        },
      },
    },
  },

  heartbeat: {
    description: "The pulse sweeps through first, then the heart draws in and beats.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 1.6,
      parts: {
        0: {
          pathLength: [0, 1],
          origin: [128, 128],
          duration: 0.56,
          ease: "linear",
        },
        1: {
          pathLength: [0, 0, 1, 1, 1, 1],
          scale: [1, 1, 1, 1.1, 0.97, 1],
          origin: [128, 128],
          duration: 1.6,
          ease: ["linear", "easeOut", [0.34, 1.56, 0.64, 1], "easeInOut", [0.22, 1, 0.36, 1]],
          times: [0, 0.32, 0.55, 0.72, 0.86, 1],
        },
      },
    },
  },

  "chart-line": {
    description: "Replots — the trend line fades in as it draws across the axes.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.88,
      parts: {
        1: {
          pathLength: [0, 1, 1],
          opacity: [0, 1, 1],
          origin: [128, 128],
          duration: 0.72,
          delay: 0.16,
          ease: ["easeIn", "easeOut"],
        },
      },
    },
  },

  "chart-bar": {
    description: "Redraws — the columns wipe away and rise again in turn.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 1.12,
      parts: {
        0: {
          pathLength: [1, 0, 1],
          opacity: [1, 0, 1],
          origin: [128, 208],
          duration: 0.8,
          ease: ["easeIn", "easeOut"],
          times: [0, 0.4, 1],
          delay: 0,
        },
        2: {
          pathLength: [1, 0, 1],
          opacity: [1, 0, 1],
          origin: [128, 208],
          duration: 0.8,
          ease: ["easeInOut", [0.22, 1, 0.36, 1]],
          times: [0, 0.4, 1],
          delay: 0.16,
        },
        3: {
          pathLength: [1, 0, 1],
          opacity: [1, 0, 1],
          origin: [128, 208],
          duration: 0.8,
          ease: ["easeInOut", [0.22, 1, 0.36, 1]],
          times: [0, 0.4, 1],
          delay: 0.32,
        },
      },
    },
  },

  "chart-pie-slice": {
    description: "Breaks out — the slice springs free, hangs a beat, and rejoins.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.96,
      parts: {
        0: {
          x: [0, -12, -12, 0],
          y: [0, -12, -12, 0],
          origin: [128, 128],
          ease: ["easeIn", "linear", "easeOut"],
          times: [0, 0.3, 0.55, 1],
        },
      },
    },
  },

  "trend-up": {
    description: "Redraws — the line retraces its climb while the frame lifts with it.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 1.12,
      parts: {
        0: {
          pathLength: [0, 1],
          origin: [128, 128],
          duration: 0.72,
          ease: [0.65, 0, 0.35, 1],
        },
        1: {
          pathLength: [0, 0, 1],
          origin: [232, 56],
          duration: 1.12,
          ease: ["linear", [0.22, 1, 0.36, 1]],
          times: [0, 0.55, 1],
        },
      },
      whole: {
        x: [0, 10, 0],
        y: [0, -10, 0],
        duration: 0.88,
        ease: [0.65, 0, 0.35, 1],
      },
    },
  },

  "trend-down": {
    description: "Redraws — the line retraces its fall while the frame dips with it.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 1.12,
      parts: {
        0: {
          pathLength: [0, 1],
          origin: [128, 128],
          duration: 0.72,
          ease: [0.65, 0, 0.35, 1],
        },
        1: {
          pathLength: [0, 0, 1],
          origin: [232, 192],
          duration: 1.12,
          ease: ["linear", [0.22, 1, 0.36, 1]],
          times: [0, 0.55, 1],
        },
      },
      whole: {
        x: [0, 10, 0],
        y: [0, 10, 0],
        duration: 0.88,
        ease: [0.65, 0, 0.35, 1],
      },
    },
  },
};
