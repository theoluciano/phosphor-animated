/**
 * Per-icon choreography, by category.
 *
 * Part indices refer to the *regular* drawing (see data/generated/parts.txt); the
 * build maps them onto every other weight. `stroke` drives thin/light/regular/bold
 * and usually duotone; `solid` drives fill, plus duotone for the few icons Phosphor
 * redraws there — fill is one merged shape, so it can only move as a whole.
 *
 * The aim in each case is that the motion says what the icon means. A bell swings
 * and its clapper lags behind it; a trash lid hinges up rather than the bin
 * wobbling; a check draws itself the way it would be written.
 */
import type { AnimationSet, IconAnimation } from "./types.ts";
import { normalizeSet } from "./normalize.ts";
import { essentials } from "./essentials.ts";
import { navigation } from "./navigation.ts";
import { communication } from "./communication.ts";
import { media } from "./media.ts";
import { files } from "./files.ts";
import { commerce } from "./commerce.ts";
import { nature } from "./nature.ts";
import { devices } from "./devices.ts";
import { development } from "./development.ts";
import { feedback } from "./feedback.ts";

export type { IconAnimation, AnimationSet };

const SETS: AnimationSet[] = [
  essentials, navigation, communication, media, files,
  commerce, nature, devices, development, feedback,
];

/** Guards against the same icon being defined in two categories. */
function merge(sets: AnimationSet[]): AnimationSet {
  const out: AnimationSet = {};
  for (const set of sets) {
    for (const [name, anim] of Object.entries(set)) {
      if (out[name]) throw new Error(`duplicate choreography for "${name}"`);
      out[name] = anim;
    }
  }
  return out;
}

/**
 * Normalised on the way out, so codegen and the studio both see the easing that
 * will actually play rather than the shorthand it was authored as.
 */
export const ANIMATIONS: AnimationSet = normalizeSet(merge(SETS));
