/**
 * Media — playback and capture.
 */
import type { AnimationSet } from "./types.ts";
import { pop, spin, wiggle, bounce, nudge, draw, dim, stagger, flare } from "./recipes.ts";

export const media: AnimationSet = {
  play: {
    description: "Starts — the triangle coils back with a tilt, then springs forward.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.8,
      parts: {
        0: {
          origin: [128, 128],
          duration: 0.88,
          ease: ["easeInOut", "linear", "linear", "linear", "easeOut"],
          scale: [1, 0.96, 1.14, 0.96, 1.09, 1],
        },
      },
    },
  },

  pause: {
    description: "Holds — the bars dip in turn, left then right, and spring back.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.88,
      parts: {
        0: {
          y: [0, 16, -12.2, 0],
          duration: 0.72,
          ease: ["easeIn", "linear", "easeOut"],
          times: [0, 0.28, 0.62, 1],
          delay: 0.16,
        },
        1: {
          y: [0, 16, -12.2, 0],
          duration: 0.72,
          ease: ["easeIn", "linear", "easeOut"],
          times: [0, 0.28, 0.62, 1],
          delay: 0,
        },
      },
    },
  },

  stop: {
    description: "Presses in — the square dips like a struck button, then settles.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.72,
      parts: {
        0: {
          scale: [1, 0.9, 1.03, 1],
          origin: [128, 128],
          duration: 0.72,
          ease: ["easeOut", [0.34, 1.56, 0.64, 1], [0.22, 1, 0.36, 1]],
          times: [0, 0.3, 0.62, 1],
        },
      },
    },
  },

  "skip-forward": {
    description: "Skips ahead — the triangle lunges at the end bar and knocks it.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.8,
      parts: {
        0: {
          x: [0, 5, 0],
          duration: 0.48,
          ease: ["easeOut", [0.22, 1, 0.36, 1]],
          delay: 0.224,
        },
        1: {
          x: [0, 12, 0],
          duration: 0.8,
          ease: [[0.22, 1, 0.36, 1], "easeInOut"],
          times: [0, 0.45, 1],
        },
      },
    },
  },

  "skip-back": {
    description: "Skips back — the triangle lunges at the start bar and knocks it.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.8,
      parts: {
        0: {
          x: [0, -5, 0],
          duration: 0.48,
          ease: ["easeOut", [0.22, 1, 0.36, 1]],
          delay: 0.224,
        },
        1: {
          x: [0, -12, 0],
          duration: 0.8,
          ease: [[0.22, 1, 0.36, 1], "easeInOut"],
          times: [0, 0.45, 1],
        },
      },
    },
  },

  shuffle: {
    description: "Weaves — both tracks redraw through the crossing and the heads snap outward.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 1.12,
      parts: {
        0: {
          pathLength: [0, 1],
          opacity: [0, 1],
          duration: 0.8,
          ease: "easeInOut",
        },
        1: {
          x: [0, 7, 0],
          duration: 0.448,
          ease: [[0.34, 1.56, 0.64, 1], "easeInOut"],
          delay: 0.736,
        },
        2: {
          x: [0, 7, 0],
          duration: 0.448,
          ease: [[0.34, 1.56, 0.64, 1], "easeInOut"],
          delay: 0.672,
        },
        3: {
          pathLength: [0, 0, 1],
          opacity: [0, 0, 1],
          duration: 0.8,
          ease: ["linear", "easeInOut"],
          times: [0, 0.5, 1],
        },
        4: {
          pathLength: [0, 1],
          opacity: [0, 1],
          duration: 0.352,
          ease: "easeOut",
        },
      },
    },
  },

  repeat: {
    description: "Loops — the cycle turns once around and springs into place.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 1.28,
      whole: {
        rotate: [0, 369, 360],
        origin: [128, 128],
        duration: 1.28,
        times: [0, 0.72, 1],
        ease: [[0.65, 0, 0.35, 1], [0.22, 1, 0.36, 1]],
      },
    },
  },

  "music-note": {
    description: "Plays — the note sways to the beat while its head pulses.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 1.28,
      whole: {
        scale: [1, 0.96, 1.14, 0.96, 1.09, 1],
        origin: [128, 128],
        duration: 1.44,
        times: [0, 0.12, 0.32, 0.48, 0.68, 1],
        ease: ["easeIn", "linear", "linear", "linear", "easeOut"],
        rotate: [0, -7.6, 4, -2.1, 0, 0],
      },
    },
  },

  headphones: {
    description: "Thumps — the band flexes down onto the ears and springs back, twice.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 1.12,
      parts: {
        0: {
          scaleY: [1, 0.9, 1.025, 0.95, 1],
          scaleX: [1, 1.06, 0.95, 1.04, 1],
          origin: [128, 128],
          duration: 1.12,
          ease: ["easeIn", "linear", "linear", "easeOut"],
          times: [0, 0.22, 0.46, 0.72, 1],
        },
      },
    },
  },

  "speaker-high": {
    description: "Sounds — the cone pulses and the waves radiate out from it.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 1.28,
      parts: {
        0: {
          scale: [1, 0.97, 1.05, 1],
          origin: [88, 128],
          duration: 0.96,
          ease: [0.65, 0, 0.35, 1],
          times: [0, 0.25, 0.6, 1],
        },
        1: {
          scale: [1, 0.97, 1.05, 1],
          origin: [88, 128],
          duration: 0.96,
          ease: [0.65, 0, 0.35, 1],
          times: [0, 0.25, 0.6, 1],
        },
        // The waves swell out of the driver and settle back rather than fading in
        // from nothing: they are part of the static drawing, so a hover that began
        // at opacity 0 blanked them first. Scaling about the cone's own origin
        // carries each arc outward, inner before outer.
        2: {
          opacity: [1, 0.35, 1],
          scale: [1, 1.06, 1],
          origin: [88, 128],
          duration: 0.72,
          ease: [[0.22, 1, 0.36, 1], "easeInOut"],
          times: [0, 0.38, 1],
          delay: 0.16,
        },
        3: {
          opacity: [1, 0.35, 1],
          scale: [1, 1.06, 1],
          origin: [88, 128],
          duration: 0.72,
          ease: [[0.22, 1, 0.36, 1], "easeInOut"],
          times: [0, 0.38, 1],
          delay: 0.352,
        },
      },
    },
  },

  "speaker-x": {
    description: "Muted — the cross draws itself in, stroke after stroke.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.96,
      parts: {
        1: {
          pathLength: [0, 1],
          opacity: [0, 1],
          duration: 0.64,
          ease: [0.65, 0, 0.35, 1],
          delay: 0.16,
        },
        2: {
          pathLength: [0, 1],
          opacity: [0, 1],
          duration: 0.64,
          ease: [0.65, 0, 0.35, 1],
          delay: 0.352,
        },
      },
    },
  },

  microphone: {
    description: "Sound check — the capsule bobs one-two in its cradle.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.96,
      parts: {
        0: {
          y: [0, -10, 8, -4, 0],
          origin: [128, 96],
          duration: 0.96,
          ease: ["easeOut", "easeInOut", "easeInOut", "easeInOut"],
          x: [0, 0, 0, 0, 0],
        },
      },
    },
  },

  "microphone-slash": {
    description: "Muted — the slash draws across and the capsule dims.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.88,
      parts: {
        1: {
          pathLength: [1, 0, 1, 1],
          origin: [128, 128],
          duration: 0.72,
          ease: ["easeIn", "linear", "easeOut"],
          delay: 0.128,
        },
      },
    },
  },

  camera: {
    description: "Pulls focus — the lens breathes, then the body snaps the shot.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.96,
      parts: {
        0: {
          scale: [1, 1, 1.05, 1],
          origin: [128, 128],
          duration: 0.96,
          ease: ["easeIn", "linear", "easeOut"],
          times: [0, 0.5, 0.7, 1],
        },
        1: {
          scale: [1, 1, 1.2, 1],
          origin: [128, 132],
          duration: 0.96,
          ease: ["easeOut", "easeInOut", [0.22, 1, 0.36, 1]],
          times: [0, 0.35, 0.68, 1],
          x: [0, 0, 0, 0],
          y: [0, 0, 0, 0],
        },
      },
    },
  },

  image: {
    description: "Lifts in hand — the sun and hills shift with shallow parallax.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.928,
      whole: {
        y: [0, -8, 4.2, 0],
        rotate: [0, -2, 1, 0],
        scale: [1, 1.03, 0.992, 1],
        origin: [128, 128],
        ease: ["easeOut", [0.23, 1, 0.32, 1], [0.23, 1, 0.32, 1]],
        times: [0, 0.28, 0.68, 1],
      },
      parts: {
        1: {
          x: [0, 8, -4.2, 0],
          y: [0, -10, 5.2, 0],
          scale: [1, 0.96, 1.06, 1],
          origin: [156, 100],
          ease: ["easeOut", [0.23, 1, 0.32, 1], [0.23, 1, 0.32, 1]],
          times: [0, 0.34, 0.74, 1],
        },
        2: {
          y: [0, 4, -2.1, 0],
          scaleY: [1, 0.95, 1.02, 1],
          origin: [185, 178],
          ease: ["easeOut", [0.23, 1, 0.32, 1], [0.23, 1, 0.32, 1]],
          times: [0, 0.38, 0.76, 1],
          rotate: [0, -2, 1, 0],
        },
        3: {
          y: [0, 4, -2.1, 0],
          scaleY: [1, 0.95, 1.02, 1],
          origin: [112, 208],
          ease: ["easeOut", [0.23, 1, 0.32, 1], [0.23, 1, 0.32, 1]],
          times: [0, 0.38, 0.76, 1],
          rotate: [0, -2, 1, 0],
        },
      },
    },
  },

  "video-camera": {
    description: "Rolls — the body breathes while the lens draws back and returns.",
    // The lens already reaches the right edge of the box at rest, so it can only
    // move inward: flaring it out pushed the stroke a pixel and a half past the
    // frame. Drawing back toward the body tells the same story and stays inside.
    stroke: {
      duration: 0.88,
      parts: {
        0: {
          scale: [1, 0.985, 1.015, 1],
          origin: [112, 128],
          duration: 0.768,
          ease: ["easeOut", [0.23, 1, 0.32, 1], [0.23, 1, 0.32, 1]],
          times: [0, 0.26, 0.6, 1],
        },
        1: {
          x: [0, -6, -1, 0],
          scaleX: [1, 0.94, 0.99, 1],
          origin: [200, 128],
          duration: 0.8,
          ease: ["easeOut", [0.23, 1, 0.32, 1], [0.23, 1, 0.32, 1]],
          times: [0, 0.3, 0.64, 1],
        },
      },
    },
  },
};
