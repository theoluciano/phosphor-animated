/**
 * The motion vocabulary.
 *
 * Every curated icon is composed from these rather than each getting bespoke
 * keyframes, so the set feels like one family — the same easing, the same sense of
 * weight — instead of 162 unrelated animations. Each recipe is a shape of movement;
 * an icon picks the one that matches what it depicts and tunes the amount.
 *
 * Three rules hold throughout, all of them learned from auditing the first version:
 *
 *  1. Start and end at rest. The runtime rests on the last keyframe, so an
 *     animation whose first keyframe differs teleports the part the instant it
 *     plays. Anything that wants to "arrive" must leave first and come back.
 *
 *  2. Ease per segment, not per animation. Motion applies a single easing curve to
 *     *every* segment of a keyframe array, so one `easeInOut` makes a part
 *     decelerate into and accelerate out of each waypoint — a visible pulsing. A
 *     struck object should leave rest at full speed (`easeOut`) and only ease at
 *     the extremes it actually turns around at.
 *
 *  3. Few keyframes, unevenly spaced. Six waypoints in 0.7s gives each 120ms, too
 *     brief to read. Four or five, weighted so the first move is quick and the
 *     settle is slow, reads as one gesture.
 */
import type { PartAnimation } from "../../src/registry/icons/animated-icon";
import type { Transition } from "motion/react";

type Easing = NonNullable<Transition["ease"]>;
type Opts = Partial<Pick<PartAnimation, "delay" | "duration" | "ease" | "origin" | "times" | "spring">>;

const CENTRE: [number, number] = [128, 128];

/**
 * Standard curves, named for what they express. Exported so icon files reach for
 * the same handful rather than inventing new beziers per animation.
 */
export const OUT: Easing = [0.22, 1, 0.36, 1]; // leaves fast, settles gently
export const INOUT: Easing = "easeInOut";
export const GRAVITY_UP: Easing = [0.33, 0, 0.67, 1];
export const OVERSHOOT: Easing = [0.34, 1.56, 0.64, 1];

/**
 * Easing for a struck object: leave rest at speed, ease at each turnaround, ease
 * out into rest. One entry per segment, so `n` keyframes gives `n - 1` curves.
 */
const struck = (frames: number): Easing[] => [
  "easeOut",
  ...Array(Math.max(0, frames - 3)).fill(INOUT),
  ...(frames >= 3 ? [OUT] : []),
];

/**
 * Timing for a decaying oscillation. The opening move is a quarter period — the
 * object is released from rest — while every later swing is a half period, so the
 * first beat is quick and the tail spreads out.
 */
const decayTimes = (frames: number): number[] => {
  const spans = [1, ...Array(frames - 2).fill(2)];
  const total = spans.reduce((a, b) => a + b, 0);
  const out = [0];
  let acc = 0;
  for (const s of spans) {
    acc += s;
    out.push(+(acc / total).toFixed(3));
  }
  return out.slice(0, frames);
};

/** Amplitudes decaying toward rest, alternating sides, always ending at 0. */
const decay = (peak: number, sides = 4): number[] => {
  const out = [0];
  let a = peak;
  for (let i = 0; i < sides - 1; i++) {
    out.push(+(i % 2 === 0 ? a : -a).toFixed(2));
    a *= 0.52;
  }
  out.push(0);
  return out;
};

/** Pendulum swing, decaying. For anything that hangs: bells, pendants, tags. */
export const swing = (deg = 14, o: Opts = {}): PartAnimation => {
  const rotate = decay(deg);
  return {
    rotate,
    origin: o.origin ?? [128, 40],
    duration: 1.36,
    ease: struck(rotate.length),
    times: decayTimes(rotate.length),
    ...o,
  };
};

/** Rotational wobble about the icon's own centre. Attention, not alarm. */
export const wiggle = (deg = 10, o: Opts = {}): PartAnimation => {
  const rotate = decay(-deg);
  return {
    rotate,
    origin: o.origin ?? CENTRE,
    duration: 1.2,
    ease: struck(rotate.length),
    times: decayTimes(rotate.length),
    ...o,
  };
};

/** Lateral shake. Refusal, error, "no". */
export const shake = (dist = 8, o: Opts = {}): PartAnimation => {
  const x = decay(-dist);
  return {
    x,
    origin: o.origin ?? CENTRE,
    duration: 1.088,
    ease: struck(x.length),
    times: decayTimes(x.length),
    ...o,
  };
};

/** Tip side to side about a low pivot, like something top-heavy. */
export const tip = (deg = 12, o: Opts = {}): PartAnimation => {
  const rotate = decay(-deg, 3);
  return {
    rotate,
    origin: o.origin ?? [128, 208],
    duration: 1.12,
    ease: struck(rotate.length),
    times: decayTimes(rotate.length),
    ...o,
  };
};

/**
 * Two-beat heartbeat. The first contraction is fast and the long tail after the
 * second is what makes it read as a pulse rather than a throb.
 */
export const beat = (amount = 0.18, o: Opts = {}): PartAnimation => ({
  scale: [1, 1 + amount, 1 + amount * 0.35, 1 + amount * 0.72, 1],
  origin: o.origin ?? CENTRE,
  duration: 1.44,
  ease: ["easeOut", INOUT, "easeOut", OUT],
  times: [0, 0.14, 0.28, 0.42, 1],
  ...o,
});

/** Single confident scale-up and settle. The default "something happened". */
export const pop = (amount = 0.22, o: Opts = {}): PartAnimation => ({
  scale: [1, 1 + amount, 1 - amount * 0.14, 1],
  origin: o.origin ?? CENTRE,
  duration: 0.8,
  ease: [OVERSHOOT, INOUT, OUT],
  times: [0, 0.4, 0.66, 1],
  ...o,
});

/** Full revolution. Only for things that genuinely rotate. */
export const spin = (turns = 1, o: Opts = {}): PartAnimation => ({
  rotate: [0, 360 * turns],
  origin: o.origin ?? CENTRE,
  duration: 1.44,
  ease: OUT,
  ...o,
});

/** Continuous rotation for loaders. Linear, because easing a spinner looks broken. */
export const rotateForever = (o: Opts = {}): PartAnimation => ({
  rotate: [0, 360],
  origin: o.origin ?? CENTRE,
  duration: 1.6,
  ease: "linear",
  ...o,
});

/** Vertical hop, easing like real gravity: fast up, slow at the apex, fast down. */
export const bounce = (dist = 14, o: Opts = {}): PartAnimation => ({
  y: [0, -dist, 0, -dist * 0.28, 0],
  origin: o.origin ?? CENTRE,
  duration: 1.12,
  ease: ["easeOut", GRAVITY_UP, "easeOut", GRAVITY_UP],
  times: [0, 0.3, 0.58, 0.76, 1],
  ...o,
});

/** Travel out and return. Direction is the caller's to choose. */
export const nudge = (dx = 10, dy = 0, o: Opts = {}): PartAnimation => ({
  ...(dx ? { x: [0, dx, 0] } : null),
  ...(dy ? { y: [0, dy, 0] } : null),
  origin: o.origin ?? CENTRE,
  duration: 0.8,
  ease: [OUT, INOUT],
  times: [0, 0.45, 1],
  ...o,
});

/** Leaves the frame in one direction and re-enters from the other. */
export const traverse = (dx = 0, dy = 0, o: Opts = {}): PartAnimation => ({
  ...(dx ? { x: [0, dx, -dx, 0] } : null),
  ...(dy ? { y: [0, dy, -dy, 0] } : null),
  opacity: [1, 0, 0, 1],
  origin: o.origin ?? CENTRE,
  duration: 1.36,
  ease: ["easeIn", "linear", "easeOut"],
  times: [0, 0.42, 0.5, 1],
  ...o,
});

/** Draws the stroke on from nothing. Rests fully drawn. */
export const draw = (o: Opts = {}): PartAnimation => ({
  pathLength: [0, 1],
  origin: o.origin ?? CENTRE,
  duration: 0.88,
  ease: [0.65, 0, 0.35, 1],
  ...o,
});

/** Hinged rotation — lids, flaps, doors, covers. Origin is the hinge. */
export const hinge = (deg: number, origin: [number, number], o: Opts = {}): PartAnimation => ({
  rotate: [0, deg, 0],
  origin,
  duration: 0.96,
  ease: [OUT, INOUT],
  times: [0, 0.42, 1],
  ...o,
});

/** Fade down and back. For parts that momentarily stop mattering. */
export const dim = (to = 0.25, o: Opts = {}): PartAnimation => ({
  opacity: [1, to, 1],
  origin: o.origin ?? CENTRE,
  duration: 0.88,
  ease: [INOUT, INOUT],
  times: [0, 0.4, 1],
  ...o,
});

/** Squash on one axis. Blinks, and anything that closes. */
export const blink = (o: Opts = {}): PartAnimation => ({
  scaleY: [1, 0.08, 1],
  origin: o.origin ?? CENTRE,
  duration: 0.8,
  ease: ["easeIn", "easeOut"],
  times: [0, 0.45, 1],
  ...o,
});

/** Breathe — a slow swell for ambient, always-on states. */
export const pulse = (amount = 0.12, o: Opts = {}): PartAnimation => ({
  scale: [1, 1 + amount, 1],
  opacity: [1, 0.72, 1],
  origin: o.origin ?? CENTRE,
  duration: 1.44,
  ease: [INOUT, INOUT],
  times: [0, 0.5, 1],
  ...o,
});

/**
 * A part flaring outward and settling — rays, signal arcs, sparkles.
 *
 * Starts and ends at rest, so it can be staggered across many parts without any of
 * them jumping when the animation begins.
 */
export const flare = (amount = 0.3, o: Opts = {}): PartAnimation => ({
  scale: [1, 1 + amount, 1],
  opacity: [1, 0.4, 1],
  origin: o.origin ?? CENTRE,
  duration: 1.12,
  ease: [OUT, INOUT],
  times: [0, 0.38, 1],
  ...o,
});

/**
 * Squash and stretch: the two axes move in opposite phase, so the part keeps its
 * apparent volume while it deforms. Reads as something elastic rather than
 * something being scaled.
 */
export const squash = (amount = 0.3, o: Opts = {}): PartAnimation => ({
  scaleY: [1, 1 + amount, 1 - amount * 0.33, 1 + amount * 0.17, 1],
  scaleX: [1, 1 - amount * 0.33, 1 + amount * 0.33, 1 - amount * 0.17, 1],
  origin: o.origin ?? CENTRE,
  duration: 0.96,
  ease: ["easeOut", INOUT, INOUT, OUT],
  times: [0, 0.28, 0.52, 0.74, 1],
  ...o,
});

/**
 * A circular sweep — the part travels a small loop and returns. For scanning and
 * searching gestures, where a straight nudge reads as a bump instead.
 */
export const orbit = (radius = 10, o: Opts = {}): PartAnimation => ({
  x: [0, -radius, 0, radius, 0],
  y: [0, -radius * 0.6, -radius, -radius * 0.6, 0],
  origin: o.origin ?? CENTRE,
  duration: 1.6,
  ease: [INOUT, INOUT, INOUT, INOUT],
  times: [0, 0.25, 0.5, 0.75, 1],
  ...o,
});

/**
 * Retracts a stroke partway and restores it. Unlike `draw`, it rests fully drawn at
 * both ends, so it suits an always-visible icon that should look like it is working
 * — thinking, processing, transmitting.
 */
export const erase = (to = 0.5, o: Opts = {}): PartAnimation => ({
  pathLength: [1, to, 1],
  origin: o.origin ?? CENTRE,
  duration: 1.92,
  ease: [INOUT, INOUT],
  times: [0, 0.5, 1],
  ...o,
});

/**
 * A struck ring: rotation with a scale pulse on the first beat, so the object reads
 * as vibrating rather than merely rocking.
 */
export const ring = (deg = 16, o: Opts = {}): PartAnimation => ({
  rotate: [0, deg, -deg * 0.75, deg * 0.4, 0],
  scale: [1, 1.08, 1, 1.02, 1],
  origin: o.origin ?? CENTRE,
  duration: 1.28,
  ease: ["easeOut", INOUT, INOUT, OUT],
  times: [0, 0.16, 0.44, 0.72, 1],
  ...o,
});

/** Stagger helper: same recipe across parts, offset in sequence. */
export const stagger = (
  indices: number[],
  make: (i: number) => PartAnimation,
  step = 0.112,
): Record<number, PartAnimation> =>
  Object.fromEntries(
    indices.map((partIndex, n) => {
      const anim = make(n);
      return [partIndex, { ...anim, delay: (anim.delay ?? 0) + n * step }];
    }),
  );
