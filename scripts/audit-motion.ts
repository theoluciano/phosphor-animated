/**
 * Motion quality audit.
 *
 * Looks for the structural mistakes that make an animation feel wrong regardless of
 * how well its numbers are chosen:
 *
 *  SNAP      The first keyframe differs from the resting value. The runtime rests on
 *            the *last* keyframe, so playback begins by teleporting the part to a
 *            different place. This is the single most jarring defect available.
 *
 *  DRIFT     The last keyframe is not the identity value, so the icon settles
 *            somewhere other than where it started and never fully returns.
 *
 *  STUTTER   Three or more keyframes sharing one non-linear easing. Motion applies
 *            the curve to every segment, so the part decelerates into each waypoint
 *            and accelerates out — a visible pulsing rather than one flowing move.
 *
 *  CROWDED   Many keyframes in a short duration; each segment is too brief to read.
 */
import { ANIMATIONS } from "./animations/index.ts";
import type { Choreography, PartAnimation } from "../src/registry/icons/animated-icon";

const IDENTITY: Record<string, number> = {
  rotate: 0, scale: 1, scaleX: 1, scaleY: 1, x: 0, y: 0, opacity: 1, pathLength: 1,
};
const PROPS = Object.keys(IDENTITY);

type Finding = { icon: string; where: string; kind: string; detail: string };
const findings: Finding[] = [];

function checkAnim(
  icon: string,
  where: string,
  anim: PartAnimation,
  duration: number,
  symmetry?: number,
) {
  const frames = PROPS.filter((p) => Array.isArray((anim as Record<string, unknown>)[p]));

  for (const prop of frames) {
    const v = (anim as unknown as Record<string, number[]>)[prop];
    if (!v?.length) continue;
    const first = v[0];
    const last = v[v.length - 1];
    const id = IDENTITY[prop];

    // pathLength 0 -> 1 is a deliberate draw-on: it rests drawn and starts empty.
    const isDraw = prop === "pathLength" && first === 0 && last === 1;
    // A rotation that lands on the drawing's own symmetry looks identical to where
    // it started, so it neither jumps nor drifts however far the number is from
    // zero. A full turn always qualifies; a cog with eight teeth also qualifies at
    // every 45°.
    const step = 360 / (symmetry && symmetry > 0 ? symmetry : 1);
    const isFullTurn =
      prop === "rotate" && Math.abs(((last - first) % step + step) % step) < 0.001;

    if (!isDraw && !isFullTurn && first !== last) {
      findings.push({
        icon, where, kind: "SNAP",
        detail: `${prop} starts at ${first} but rests at ${last} — jumps on play`,
      });
    }
    if (!isDraw && !isFullTurn && last !== id) {
      findings.push({
        icon, where, kind: "DRIFT",
        detail: `${prop} settles at ${last}, not ${id}`,
      });
    }
    if (v.length >= 3 && !anim.spring) {
      const ease = anim.ease;
      const perSegment = Array.isArray(ease) && ease.length > 0 && typeof ease[0] !== "number";
      // A single curve is reapplied to every segment; only "linear" is harmless.
      if (!perSegment && ease !== "linear") {
        findings.push({
          icon, where, kind: "STUTTER",
          detail: `${prop} has ${v.length} keyframes under one easing curve`,
        });
      } else if (perSegment && (ease as unknown[]).length !== v.length - 1) {
        findings.push({
          icon, where, kind: "STUTTER",
          detail: `${prop} has ${v.length} keyframes but ${(ease as unknown[]).length} easing curves (needs ${v.length - 1})`,
        });
      }
      // What matters is the *shortest* segment, not the average: a decay weights
      // its keyframes deliberately, and judging it by the mean punishes exactly
      // the uneven spacing that makes it read well.
      const d = anim.duration ?? duration;
      const times = anim.times;
      let shortest = d / (v.length - 1);
      if (times && times.length === v.length) {
        let min = Infinity;
        for (let i = 1; i < times.length; i++) min = Math.min(min, times[i] - times[i - 1]);
        shortest = min * d;
      }
      if (shortest < 0.09) {
        findings.push({
          icon, where, kind: "CROWDED",
          detail: `shortest segment is ${(shortest * 1000).toFixed(0)}ms (${v.length} keyframes in ${d}s)`,
        });
      }
    }
  }
}

function checkChoreo(
  icon: string,
  label: string,
  c: Choreography | undefined,
  symmetry?: number,
) {
  if (!c) return;
  const duration = c.duration ?? 0.6;
  if (c.whole) checkAnim(icon, `${label}.whole`, c.whole, duration, symmetry);
  for (const [i, anim] of Object.entries(c.parts ?? {}))
    checkAnim(icon, `${label}.part[${i}]`, anim, duration, symmetry);
}

for (const [name, a] of Object.entries(ANIMATIONS)) {
  checkChoreo(name, "stroke", a.stroke, a.symmetry);
}

const byKind: Record<string, Finding[]> = {};
for (const f of findings) (byKind[f.kind] ??= []).push(f);

console.log(`\nMotion audit — ${Object.keys(ANIMATIONS).length} icons\n${"=".repeat(60)}`);
for (const kind of ["SNAP", "DRIFT", "STUTTER", "CROWDED"]) {
  const list = byKind[kind] ?? [];
  const icons = new Set(list.map((f) => f.icon));
  console.log(`\n${kind}: ${list.length} findings across ${icons.size} icons`);
  for (const f of list.slice(0, kind === "STUTTER" ? 6 : 14))
    console.log(`  ${f.icon.padEnd(20)} ${f.where.padEnd(18)} ${f.detail}`);
  if (list.length > (kind === "STUTTER" ? 6 : 14)) console.log(`  … and ${list.length - (kind === "STUTTER" ? 6 : 14)} more`);
}

const snapIcons = new Set((byKind.SNAP ?? []).map((f) => f.icon));
console.log(`\n${"=".repeat(60)}`);
console.log(`icons that visibly jump on play: ${[...snapIcons].sort().join(", ")}\n`);
