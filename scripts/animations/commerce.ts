/**
 * Commerce — buying, paying, delivering.
 */
import type { AnimationSet } from "./types.ts";
import { pop, spin, wiggle, bounce, nudge, draw, swing, stagger } from "./recipes.ts";

export const commerce: AnimationSet = {
  "shopping-cart": {
    description: "Hops — added to the cart, so it bounces twice and lands on its wheels.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.96,
      whole: {
        y: [0, -7.82, -5.7, -3, 0],
        scale: [1, 1.04, 1, 1.03, 1],
        origin: [128, 204],
        duration: 0.96,
        ease: ["easeOut", "easeIn", "easeOut", "easeIn"],
        times: [0, 0.24, 0.52, 0.74, 1],
      },
    },
  },

  "shopping-bag": {
    description: "Picked up — swings once from the handle and settles.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 1.12,
      whole: {
        rotate: [0, 5, -2.6, 1.4, 0],
        origin: [128, 60],
        duration: 1.36,
        ease: ["easeOut", "easeInOut", "easeInOut", [0.22, 1, 0.36, 1]],
        times: [0, 0.143, 0.429, 0.714, 1],
      },
    },
  },

  "credit-card": {
    description: "Swipes — the whole card slides through and the digits catch up.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 1.12,
      whole: {
        x: [0, -12, 6.2, 0],
        ease: ["easeOut", "easeInOut", "easeInOut"],
        times: [0, 0.4, 0.75, 1],
      },
      parts: {
        1: {
          origin: [184, 168],
          duration: 0.8,
          ease: [[0.22, 1, 0.36, 1], "easeInOut"],
          delay: 0,
          pathLength: [1, 0, 1],
          times: [0, 0.5, 1],
        },
        2: {
          origin: [128, 168],
          duration: 0.8,
          ease: [[0.22, 1, 0.36, 1], "easeInOut"],
          delay: 0,
          pathLength: [1, 0, 1],
          times: [0, 0.5, 1],
        },
      },
    },
  },

  "currency-dollar": {
    description: "Draws itself — the curve sweeps through, then the bar strikes down.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.8,
      parts: {
        0: {
          pathLength: [0, 1, 1],
          origin: [128, 128],
          duration: 0.8,
          ease: ["easeIn", "easeOut"],
          delay: 0,
          times: [0.415, 0.786, 1],
          opacity: [0, 1, 1],
        },
        1: {
          pathLength: [0, 1, 1],
          origin: [128, 128],
          duration: 0.8,
          ease: ["easeIn", "easeOut"],
          opacity: [0, 1, 1],
        },
      },
    },
  },

  wallet: {
    description: "Hefts — the whole wallet lifts, tips back, and drops into place.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.88,
      whole: {
        y: [0, -13, 6.8, 0],
        rotate: [0, -4, 2.1, 0],
        origin: [128, 128],
        ease: ["easeOut", "easeInOut", [0.22, 1, 0.36, 1]],
        times: [0, 0.42, 0.72, 1],
      },
    },
  },

  gift: {
    description: "What's inside? — the box rocks from its base while the bows flutter.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 1.12,
      whole: {
        rotate: [0, -4, 4, -4, 4, -2, 2, 0],
        origin: [128, 128],
        ease: ["easeOut", "easeInOut", "easeInOut", "easeInOut", "easeInOut", "easeInOut", "easeInOut"],
      },
      parts: {
        3: {
          rotate: [0, -9, 4.7, 0],
          origin: [128, 78],
          delay: 0.128,
          duration: 0.88,
          ease: ["easeOut", "easeInOut", "easeInOut"],
        },
        4: {
          rotate: [0, -9, 4.7, 0],
          origin: [128, 78],
          delay: 0.128,
          duration: 0.88,
          ease: ["easeOut", "easeInOut", "easeInOut"],
        },
      },
    },
  },

  package: {
    description: "Draws itself — the box outlines first, then its seams.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.88,
      parts: {
        0: {
          duration: 0.704,
          ease: ["easeOut", "easeOut"],
          times: [0, 0.25, 1],
          delay: 0.32,
        },
        1: {
          duration: 0.704,
          ease: ["easeOut", "easeOut"],
          times: [0, 0.25, 1],
          delay: 0.224,
        },
        2: {
          duration: 0.72,
          ease: ["easeOut", "easeOut"],
          times: [0, 0.25, 1],
        },
        3: {
          pathLength: [0, 0.3, 1],
          opacity: [0, 1, 1],
          duration: 0.704,
          ease: ["easeOut", "easeOut"],
          times: [0, 0.25, 1],
          delay: 0.32,
        },
      },
      whole: {
        rotate: [0, -7.6, 4, -2.1, 0],
        ease: ["easeIn", "linear", "linear", "easeOut"],
      },
    },
  },

  truck: {
    description: "Jounces — the body bobs on its springs while the wheels stay planted.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 1.04,
      parts: {
        0: {
          y: [0, -4, -2.1, -1.1, 0],
          ease: ["easeOut", "easeIn", "easeOut", [0.22, 1, 0.36, 1]],
          times: [0, 0.22, 0.46, 0.7, 1],
        },
        1: {
          y: [0, -4, -2.1, -1.1, 0],
          ease: ["easeOut", "easeIn", "easeOut", [0.22, 1, 0.36, 1]],
          times: [0, 0.22, 0.46, 0.7, 1],
        },
        4: {
          y: [0, -4, -2.1, -1.1, 0],
          ease: ["easeOut", "easeIn", "easeOut", [0.22, 1, 0.36, 1]],
          times: [0, 0.22, 0.46, 0.7, 1],
        },
        5: {
          y: [0, -4, -2.1, -1.1, 0],
          ease: ["easeOut", "easeIn", "easeOut", [0.22, 1, 0.36, 1]],
          times: [0, 0.22, 0.46, 0.7, 1],
        },
        6: {
          y: [0, -4, -2.1, -1.1, 0],
          ease: ["easeOut", "easeIn", "easeOut", [0.22, 1, 0.36, 1]],
          times: [0, 0.22, 0.46, 0.7, 1],
        },
      },
    },
  },

  receipt: {
    description: "Itemises — the lines ink themselves in, top to bottom.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 1.04,
      parts: {
        0: {
          pathLength: [0, 0.25, 1],
          opacity: [0, 1, 1],
          times: [0, 0.15, 1],
          duration: 1.168,
          ease: [[0.22, 1, 0.36, 1], [0.22, 1, 0.36, 1]],
          delay: 0,
        },
        1: {
          pathLength: [0, 0.25, 1],
          opacity: [0, 1, 1],
          times: [0, 0.15, 1],
          duration: 1.168,
          ease: [[0.22, 1, 0.36, 1], [0.22, 1, 0.36, 1]],
          delay: 0.288,
        },
      },
    },
  },

  storefront: {
    description: "Ripples — the awning scallops flap in turn, left to right.",
    // Tuned in the studio; values are explicit rather than recipe calls.
    stroke: {
      duration: 0.928,
      parts: {
        2: {
          scaleY: [1, 1.16, 0.97, 1],
          origin: [64, 96],
          duration: 0.672,
          ease: ["easeOut", "easeInOut", [0.22, 1, 0.36, 1]],
          times: [0, 0.34, 0.62, 1],
          delay: 0,
        },
        3: {
          scaleY: [1, 1.16, 0.97, 1],
          origin: [128, 96],
          duration: 0.672,
          ease: ["easeOut", "easeInOut", [0.22, 1, 0.36, 1]],
          times: [0, 0.34, 0.62, 1],
          delay: 0.128,
        },
        4: {
          scaleY: [1, 1.16, 0.97, 1],
          origin: [192, 96],
          duration: 0.672,
          ease: ["easeOut", "easeInOut", [0.22, 1, 0.36, 1]],
          times: [0, 0.34, 0.62, 1],
          delay: 0.256,
        },
      },
    },
  },
};
