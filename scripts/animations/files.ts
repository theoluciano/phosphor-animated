/**
 * Files — documents, storage, transfer.
 *
 * The transfer icons (download/upload/cloud) share a rule: the arrowhead travels
 * and the shaft follows, so the motion reads as something moving rather than the
 * glyph sliding.
 */
import type { AnimationSet } from "./types.ts";
import { pop, bounce, nudge, draw, hinge, dim, stagger } from "./recipes.ts";

export const files: AnimationSet = {
  folder: {
    description: "Picked up — lifts with a small lean, then settles back with weight.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.55,
      whole: {
        y: [0, -10, 5.2, 0],
        rotate: [0, -2, 1, 0],
        origin: [128, 208],
        ease: ["easeOut", [0.23, 1, 0.32, 1], [0.23, 1, 0.32, 1]],
        times: [0, 0.4, 0.72, 1],
      },
    },
  },

  "folder-open": {
    description: "Wobbles — the whole folder rocks on its base and settles.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.6,
      whole: {
        rotate: [0, -4.3, 2.2, -1.2, 0],
        origin: [128, 208],
        ease: ["easeOut", "easeInOut", "easeInOut", [0.22, 1, 0.36, 1]],
        times: [0, 0.28, 0.55, 0.8, 1],
      },
    },
  },

  file: {
    description: "Hops — the page lifts with a small tilt while the corner fold flares.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.6,
      whole: {
        rotate: [0, -8, 4, -2, 0],
        ease: ["easeIn", "linear", "linear", "easeOut"],
      },
      parts: {
        1: {
          origin: [152, 88],
          duration: 0.45,
          delay: 0.12,
          ease: ["easeIn", "linear", "easeOut"],
          pathLength: [1, 0, 1, 1],
        },
      },
    },
  },

  "file-text": {
    description: "Rewrites — the file perks up as its lines erase and retype.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.75,
      whole: {
        rotate: [0, -8, 4, -2, 0],
        ease: ["easeIn", "linear", "linear", "easeOut"],
      },
      parts: {
        2: {
          pathLength: [1, 0, 1],
          duration: 0.5,
          delay: 0.1,
          ease: ["easeOut", [0.65, 0, 0.35, 1]],
          times: [0, 0.4, 1],
        },
        3: {
          pathLength: [1, 0, 1],
          duration: 0.5,
          delay: 0.25,
          ease: ["easeOut", [0.65, 0, 0.35, 1]],
          times: [0, 0.4, 1],
        },
      },
    },
  },

  files: {
    description: "Fans apart — the sheets slide diagonally away from each other and spring back.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.55,
      parts: {
        0: {
          x: [0, -8, 0],
          y: [0, 8, 0],
          duration: 0.55,
          ease: [[0.34, 1.56, 0.64, 1], [0.22, 1, 0.36, 1]],
          times: [0, 0.4, 1],
        },
        1: {
          x: [0, 7, 0],
          y: [0, -7, 0],
          duration: 0.55,
          ease: [[0.34, 1.56, 0.64, 1], [0.22, 1, 0.36, 1]],
          times: [0, 0.4, 1],
          delay: 0.04,
        },
        2: {
          x: [0, -8, 0],
          y: [0, 8, 0],
          duration: 0.55,
          ease: [[0.34, 1.56, 0.64, 1], [0.22, 1, 0.36, 1]],
          times: [0, 0.4, 1],
        },
        3: {
          x: [0, -8, 0],
          y: [0, 8, 0],
          duration: 0.55,
          ease: [[0.34, 1.56, 0.64, 1], [0.22, 1, 0.36, 1]],
          times: [0, 0.4, 1],
        },
      },
    },
  },

  archive: {
    description: "Opens — the lid pops clear, hangs a beat, then drops shut.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.6,
      parts: {
        0: {
          y: [0, -17, -15, 0],
          origin: [128, 76],
          duration: 0.6,
          ease: [[0.34, 1.56, 0.64, 1], "easeInOut", [0.65, 0, 0.35, 1]],
          times: [0, 0.3, 0.55, 1],
        },
        2: {
          y: [0, 4, 0],
          origin: [128, 136],
          duration: 0.45,
          ease: [[0.22, 1, 0.36, 1], "easeInOut"],
          times: [0, 0.45, 1],
          delay: 0.1,
        },
      },
    },
  },

  printer: {
    description: "Prints — the paper feeds through the body and the status light blinks.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.7,
      parts: {
        0: {
          y: [0, 9, 0],
          ease: ["easeOut", [0.22, 1, 0.36, 1]],
          duration: 0.5,
        },
        1: {
          y: [0, 12, 0],
          scaleY: [1, 1.1, 1],
          origin: [128, 152],
          ease: ["easeOut", [0.22, 1, 0.36, 1]],
          duration: 0.55,
          delay: 0.1,
        },
        3: {
          opacity: [1, 0.2, 1],
          scale: [1, 1.3, 1],
          origin: [188, 116],
          ease: ["easeOut", "easeInOut"],
          duration: 0.45,
        },
      },
    },
  },

  "download-simple": {
    description: "Delivers — the arrow springs down and back while the tray dips to take it.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.55,
      parts: {
        0: {
          y: [0, 20, 0],
          origin: [128, 128],
          duration: 0.55,
          ease: ["easeIn", "easeOut"],
          x: [0, 0, 0],
        },
        1: {
          origin: [128, 208],
          duration: 0.3,
          ease: ["easeOut", [0.22, 1, 0.36, 1]],
          delay: 0.16,
        },
        2: {
          y: [0, 20, 0],
          origin: [128, 128],
          duration: 0.55,
          ease: ["easeIn", "easeOut"],
        },
      },
    },
  },

  "upload-simple": {
    description: "Sends — the arrow springs up and back while the tray dips to launch it.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.55,
      parts: {
        0: {
          y: [0, -12, 6.2, 0],
          origin: [128, 128],
          duration: 0.55,
          ease: ["easeOut", [0.34, 1.56, 0.64, 1], [0.22, 1, 0.36, 1]],
          times: [0, 0.38, 0.68, 1],
        },
        1: {
          y: [0, 5, 0],
          origin: [128, 208],
          duration: 0.3,
          ease: ["easeOut", [0.22, 1, 0.36, 1]],
        },
        2: {
          y: [0, -12, 6.2, 0],
          origin: [128, 128],
          duration: 0.55,
          ease: ["easeOut", [0.34, 1.56, 0.64, 1], [0.22, 1, 0.36, 1]],
          times: [0, 0.38, 0.68, 1],
        },
      },
    },
  },

  "cloud-arrow-up": {
    description: "Uploads — the arrow dips, surges up, and the cloud lifts buoyantly with it.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.65,
      parts: {
        0: {
          y: [0, -4, 0],
          origin: [128, 128],
          duration: 0.45,
          delay: 0.18,
          ease: ["easeOut", [0.22, 1, 0.36, 1]],
          times: [0, 0.45, 1],
        },
        1: {
          y: [0, 3, -12, 0],
          origin: [152, 168],
          duration: 0.69,
          ease: ["easeIn", [0.34, 1.56, 0.64, 1], [0.22, 1, 0.36, 1]],
          times: [0, 0.16, 0.52, 1],
        },
        2: {
          y: [0, 3, -12, 0],
          origin: [152, 168],
          duration: 0.69,
          ease: ["easeIn", [0.34, 1.56, 0.64, 1], [0.22, 1, 0.36, 1]],
          times: [0, 0.16, 0.52, 1],
        },
        3: {
          y: [0, -4, 0],
          origin: [128, 128],
          duration: 0.45,
          delay: 0.18,
          ease: ["easeOut", [0.22, 1, 0.36, 1]],
          times: [0, 0.45, 1],
        },
      },
    },
  },

  "floppy-disk": {
    description: "Saves — the disk presses in with a click while label and door rewrite.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.62,
      parts: {
        0: {
          y: [0, 4.8, -2.5, 0],
          scale: [1, 0.985, 1.01, 1],
          origin: [128, 128],
          duration: 0.52,
          ease: ["easeOut", [0.23, 1, 0.32, 1], [0.23, 1, 0.32, 1]],
          times: [0, 0.3, 0.6, 1],
        },
        // Label and door retract and redraw — full at both ends, like `erase`. The
        // old 0.25 start was a partial draw-on rather than a real one, so both
        // strokes appeared half-erased for a frame the moment a hover began.
        1: {
          pathLength: [1, 0.35, 1],
          scaleX: [1, 0.94, 1],
          origin: [128, 184],
          duration: 0.46,
          delay: 0.06,
          ease: [[0.23, 1, 0.32, 1], [0.23, 1, 0.32, 1]],
          times: [0, 0.45, 1],
        },
        2: {
          pathLength: [1, 0.35, 1],
          scaleX: [1, 0.94, 1],
          origin: [124, 72],
          duration: 0.46,
          delay: 0.14,
          ease: [[0.23, 1, 0.32, 1], [0.23, 1, 0.32, 1]],
          times: [0, 0.45, 1],
        },
      },
    },
  },
};
