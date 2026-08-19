/**
 * Normalises authored choreography before anything consumes it.
 *
 * Motion applies a single easing curve to *every* segment of a keyframe array, so
 * `ease: "easeInOut"` across `[0, 12, -9, 5, 0]` makes the part decelerate into and
 * accelerate out of all four waypoints — the mechanical pulsing that made the first
 * version of this library feel wrong. Expanding to one curve per segment fixes it.
 *
 * The opening segment gets `easeOut` whenever the animation starts at rest: an
 * object leaving rest under an impulse is at its fastest immediately, not easing
 * into motion. Later segments keep the authored curve, because those are the
 * turnarounds where the part genuinely does slow to a stop.
 *
 * Doing this here rather than in the runtime keeps the generated component honest —
 * what you read in the file is what actually plays.
 */
import type { Choreography, PartAnimation } from "../../src/registry/icons/animated-icon";
import type { AnimationSet } from "./types.ts";

const IDENTITY: Record<string, number> = {
  rotate: 0, scale: 1, scaleX: 1, scaleY: 1, x: 0, y: 0, opacity: 1, pathLength: 1,
};
const PROPS = Object.keys(IDENTITY);

/** True for a per-segment list, false for a single cubic-bezier written as numbers. */
const isPerSegment = (ease: unknown): ease is unknown[] =>
  Array.isArray(ease) && ease.length > 0 && typeof ease[0] !== "number";

/** Longest keyframe array on this animation — the one that sets the segment count. */
function segmentCount(anim: PartAnimation): number {
  let longest = 0;
  for (const p of PROPS) {
    const v = (anim as unknown as Record<string, number[]>)[p];
    if (Array.isArray(v)) longest = Math.max(longest, v.length);
  }
  return Math.max(0, longest - 1);
}

/** Does every animated property begin at its resting value? */
function startsAtRest(anim: PartAnimation): boolean {
  for (const p of PROPS) {
    const v = (anim as unknown as Record<string, number[]>)[p];
    if (!Array.isArray(v) || !v.length) continue;
    // A draw-on legitimately starts empty and rests drawn.
    if (p === "pathLength" && v[0] === 0) continue;
    if (v[0] !== IDENTITY[p]) return false;
  }
  return true;
}

/**
 * Pad every animated property to the same keyframe count.
 *
 * Motion takes one easing list per transition, not per property, so an animation
 * whose `opacity` has five keyframes and whose `scale` has three cannot be described
 * by a single list — one of them ends up with the wrong number of curves. Extending
 * the shorter property by holding its final value makes the segment counts agree.
 */
function padProperties(anim: PartAnimation): PartAnimation {
  const longest = segmentCount(anim) + 1;
  if (longest < 2) return anim;

  const out = { ...anim } as unknown as Record<string, unknown>;
  for (const p of PROPS) {
    const v = (anim as unknown as Record<string, number[]>)[p];
    if (!Array.isArray(v) || v.length === 0 || v.length === longest) continue;
    out[p] = [...v, ...Array(longest - v.length).fill(v[v.length - 1])];
  }
  return out as unknown as PartAnimation;
}

/**
 * Express a full turn as ending at zero rather than starting there.
 *
 * A spin authored as `[0, 360]` rests at 360. That is the same pose as 0, but a very
 * different number for the return spring to travel back to, so letting go part-way
 * through winds the whole way round to reach it — a flick of the mouse across a grid
 * of icons buys an entire extra revolution. Subtracting the whole turns keeps every
 * pose and the direction of travel while resting at 0, so an interrupted spin takes
 * the short way home and a completed one is already there.
 *
 * Rotations that rest part-way round on purpose — a cog on its next tooth, an
 * hourglass on its half turn — are not whole turns and stay exactly as written.
 */
function unwindFullTurns(anim: PartAnimation): PartAnimation {
  const rotate = anim.rotate;
  if (!Array.isArray(rotate) || !rotate.length) return anim;
  const last = rotate[rotate.length - 1];
  if (last === 0 || last % 360 !== 0) return anim;
  return { ...anim, rotate: rotate.map((deg) => deg - last) };
}

function normalizeAnimation(input: PartAnimation): PartAnimation {
  return unwindFullTurns(withSegmentEasing(input));
}

function withSegmentEasing(input: PartAnimation): PartAnimation {
  const anim = padProperties(input);
  const segments = segmentCount(anim);
  if (segments < 2 || anim.spring) return anim;

  const ease = anim.ease;
  if (isPerSegment(ease)) {
    // Already explicit. Pad or trim so Motion never silently reuses a short list.
    if (ease.length === segments) return anim;
    const filled = Array.from({ length: segments }, (_, i) => ease[Math.min(i, ease.length - 1)]);
    return { ...anim, ease: filled as PartAnimation["ease"] };
  }

  const curve = ease ?? "easeInOut";
  const expanded = Array.from({ length: segments }, () => curve);
  if (startsAtRest(anim)) expanded[0] = "easeOut";

  return { ...anim, ease: expanded as PartAnimation["ease"] };
}

function normalizeChoreography(c: Choreography | undefined): Choreography | undefined {
  if (!c) return c;
  return {
    ...c,
    ...(c.whole ? { whole: normalizeAnimation(c.whole) } : {}),
    ...(c.parts
      ? {
          parts: Object.fromEntries(
            Object.entries(c.parts).map(([i, a]) => [i, normalizeAnimation(a)]),
          ),
        }
      : {}),
  };
}

export function normalizeSet(set: AnimationSet): AnimationSet {
  return Object.fromEntries(
    Object.entries(set).map(([name, anim]) => [
      name,
      {
        ...anim,
        stroke: normalizeChoreography(anim.stroke)!,
      },
    ]),
  );
}
