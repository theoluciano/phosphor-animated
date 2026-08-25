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
      duration: 0.88,
      whole: {
        origin: [128, 128],
        ease: ["easeIn", "linear", "linear", "linear", "linear", "linear", "easeOut"],
        rotate: [0, -4, 4, -4, 4, -2, 2, 0],
      },
      parts: {
        1: {
          ease: ["easeIn", "linear", "easeOut"],
          pathLength: [1, 0, 1, 1],
        },
      },
    },
  },

  "folder-open": {
    description: "Wobbles — the whole folder rocks on its base and settles.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.96,
      whole: {
        origin: [128, 128],
        ease: ["easeOut", "easeInOut", "easeInOut", "easeInOut", "easeInOut", "easeInOut", "easeInOut"],
        rotate: [0, -4, 4, -4, 4, -2, 2, 0],
      },
      parts: {
        0: {
          pathLength: [1, 0, 1, 1],
          ease: ["easeInOut", "easeInOut", "easeInOut"],
        },
      },
    },
  },

  file: {
    description: "Hops — the page lifts with a small tilt while the corner fold flares.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.96,
      whole: {
        rotate: [0, -8, 4, -2, 0],
        ease: ["easeIn", "linear", "linear", "easeOut"],
      },
      parts: {
        1: {
          origin: [152, 88],
          duration: 0.72,
          delay: 0.192,
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
      duration: 1.2,
      whole: {
        rotate: [0, -8, 4, -2, 0],
        ease: ["easeIn", "linear", "linear", "easeOut"],
      },
      parts: {
        2: {
          pathLength: [1, 0, 1],
          duration: 0.8,
          delay: 0.16,
          ease: ["easeOut", [0.65, 0, 0.35, 1]],
          times: [0, 0.4, 1],
        },
        3: {
          pathLength: [1, 0, 1],
          duration: 0.8,
          delay: 0.4,
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
      duration: 0.88,
      parts: {
        0: {
          x: [0, -8, 0, 0],
          y: [0, 8, 0, 0],
          duration: 0.88,
          ease: [[0.34, 1.56, 0.64, 1], [0.22, 1, 0.36, 1], [0.22, 1, 0.36, 1]],
        },
        1: {
          x: [0, 7, 0, 0],
          y: [0, -7, 0, 0],
          duration: 0.88,
          ease: [[0.34, 1.56, 0.64, 1], [0.22, 1, 0.36, 1], [0.22, 1, 0.36, 1]],
          delay: 0.064,
        },
        2: {
          x: [0, -8, 0, 0],
          y: [0, 8, 0, 0],
          duration: 0.88,
          ease: [[0.34, 1.56, 0.64, 1], [0.22, 1, 0.36, 1], [0.22, 1, 0.36, 1]],
        },
        3: {
          x: [0, -8, 0, 0],
          y: [0, 8, 0, 0],
          duration: 0.88,
          ease: [[0.34, 1.56, 0.64, 1], [0.22, 1, 0.36, 1], [0.22, 1, 0.36, 1]],
        },
      },
    },
  },

  archive: {
    description: "Opens — the lid pops clear, hangs a beat, then drops shut.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.96,
      parts: {
        0: {
          y: [0, -17, -15, 0],
          origin: [128, 76],
          duration: 0.96,
          ease: [[0.34, 1.56, 0.64, 1], "easeInOut", [0.65, 0, 0.35, 1]],
          times: [0, 0.3, 0.55, 1],
        },
        2: {
          y: [0, 4, 0],
          origin: [128, 136],
          duration: 0.72,
          ease: [[0.22, 1, 0.36, 1], "easeInOut"],
          times: [0, 0.45, 1],
          delay: 0.16,
        },
      },
    },
  },

  printer: {
    description: "Prints — the paper feeds through the body and the status light blinks.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 1.12,
      parts: {
        0: {
          y: [0, 9, 0],
          ease: ["easeOut", [0.22, 1, 0.36, 1]],
          duration: 0.8,
        },
        1: {
          y: [0, 12, 0],
          scaleY: [1, 1.1, 1],
          origin: [128, 152],
          ease: ["easeOut", [0.22, 1, 0.36, 1]],
          duration: 0.88,
          delay: 0.16,
        },
        3: {
          opacity: [1, 0.2, 1],
          scale: [1, 1.3, 1],
          origin: [188, 116],
          ease: ["easeOut", "easeInOut"],
          duration: 0.72,
        },
      },
    },
  },

  "download-simple": {
    description: "Delivers — the arrow springs down and back while the tray dips to take it.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.88,
      parts: {
        0: {
          y: [0, 20, 0],
          origin: [128, 128],
          duration: 0.88,
          ease: ["easeIn", "easeOut"],
          x: [0, 0, 0],
        },
        1: {
          origin: [128, 208],
          duration: 0.48,
          ease: ["easeOut", [0.22, 1, 0.36, 1]],
          delay: 0.256,
        },
        2: {
          y: [0, 20, 0],
          origin: [128, 128],
          duration: 0.88,
          ease: ["easeIn", "easeOut"],
        },
      },
    },
  },

  "upload-simple": {
    description: "Sends — the arrow springs up and back while the tray dips to launch it.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.88,
      parts: {
        0: {
          y: [0, -12, 6.2, 0],
          origin: [128, 128],
          duration: 0.88,
          ease: ["easeOut", [0.34, 1.56, 0.64, 1], [0.22, 1, 0.36, 1]],
          times: [0, 0.38, 0.68, 1],
        },
        1: {
          y: [0, 5, 0],
          origin: [128, 208],
          duration: 0.48,
          ease: ["easeOut", [0.22, 1, 0.36, 1]],
        },
        2: {
          y: [0, -12, 6.2, 0],
          origin: [128, 128],
          duration: 0.88,
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
      duration: 1.04,
      parts: {
        0: {
          y: [0, -4, 0],
          origin: [128, 128],
          duration: 0.72,
          delay: 0.288,
          ease: ["easeOut", [0.22, 1, 0.36, 1]],
          times: [0, 0.45, 1],
        },
        1: {
          y: [0, 3, -12, 0],
          origin: [152, 168],
          duration: 1.104,
          ease: ["easeIn", [0.34, 1.56, 0.64, 1], [0.22, 1, 0.36, 1]],
          times: [0, 0.16, 0.52, 1],
        },
        2: {
          y: [0, 3, -12, 0],
          origin: [152, 168],
          duration: 1.104,
          ease: ["easeIn", [0.34, 1.56, 0.64, 1], [0.22, 1, 0.36, 1]],
          times: [0, 0.16, 0.52, 1],
        },
        3: {
          y: [0, -4, 0],
          origin: [128, 128],
          duration: 0.72,
          delay: 0.288,
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
      duration: 0.992,
      parts: {
        0: {
          origin: [128, 128],
          duration: 0.832,
          ease: ["easeOut", [0.23, 1, 0.32, 1], [0.23, 1, 0.32, 1]],
          times: [0, 0.3, 0.6, 1],
        },
        1: {
          pathLength: [1, 0, 1, 1],
          origin: [128, 184],
          duration: 0.96,
          delay: 0,
          ease: ["easeIn", "linear", "easeOut"],
          opacity: [1, 0, 1, 1],
        },
        2: {
          pathLength: [1, 0, 1, 1],
          origin: [124, 72],
          duration: 0.96,
          delay: 0,
          ease: ["easeIn", "linear", "easeOut"],
          opacity: [1, 0, 1, 1],
        },
      },
    },
  },
};
