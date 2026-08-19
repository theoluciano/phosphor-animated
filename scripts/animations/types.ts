import type { Choreography } from "../../src/registry/icons/animated-icon";

export type IconAnimation = {
  /** One line on what the motion depicts. Shown on the website. */
  description: string;
  /**
   * Order of rotational symmetry, where the drawing has one.
   *
   * A cog with eight teeth looks identical after 45°, so it can turn one notch and
   * stay there without anything appearing to move when the animation replays. The
   * audit needs to be told this: numerically the rotation rests away from zero, and
   * without the hint it reports a jump that no one can see.
   */
  symmetry?: number;
  /** Drives every weight: thin, light, regular, bold and duotone. */
  stroke: Choreography;
};

export type AnimationSet = Record<string, IconAnimation>;
