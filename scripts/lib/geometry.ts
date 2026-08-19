/**
 * Geometric part matching across weights.
 *
 * Choreography is authored once against the regular weight ("the lid lifts", "the
 * clapper swings") but has to drive five other drawings. Addressing parts by
 * document index fails on ~18% of the set: Phosphor reorders parts between weights
 * (address-book swaps its last two), changes part counts (barcode drops a bar at
 * bold), and redraws open strokes as closed shapes so duotone can fill them.
 *
 * So parts are matched *geometrically*. Two refinements earned their place after
 * the naive version misfired on real icons:
 *
 *  1. Point-wise, not centroid-wise. An `x` is two lines with identical centroid
 *     and identical extent — centroid alone scores both pairings 0.0 and cannot
 *     tell the diagonals apart. Comparing the points themselves separates them
 *     immediately.
 *
 *  2. Judge the assignment, not each part. Duotone's arrow shaft is legitimately
 *     shortened (216 -> 144) where the filled head takes over, so the correct pair
 *     sits 36u apart — past any threshold tight enough to be safe. But the correct
 *     *assignment* costs 55 against 220 for the alternative. Confidence comes from
 *     that margin, so a large honest redraw is accepted while a genuine coin-flip
 *     is still refused.
 *
 * Assignment is solved exactly (subset DP, parts per icon are few), and an
 * ambiguous result is reported rather than guessed — a bad map should fail the
 * build, not animate the wrong part in someone's app.
 */
import type { El } from "./svg.ts";

export type Pt = [number, number];
export type Box = { cx: number; cy: number; w: number; h: number; n: number };

const nums = (s: string): number[] =>
  (s.match(/-?\d*\.?\d+(?:e[-+]?\d+)?/gi) ?? []).map(Number).filter(Number.isFinite);

const pairs = (v: number[]): Pt[] => {
  const out: Pt[] = [];
  for (let i = 0; i + 1 < v.length; i += 2) out.push([v[i], v[i + 1]]);
  return out;
};

/** Defining points of an element, in canvas units. */
export function points(el: El): Pt[] {
  const a = el.attrs;
  const f = (k: string) => Number(a[k] ?? 0);

  switch (el.tag) {
    case "line":
      return [
        [f("x1"), f("y1")],
        [f("x2"), f("y2")],
      ];
    case "circle":
      return [
        [f("cx") - f("r"), f("cy")], [f("cx") + f("r"), f("cy")],
        [f("cx"), f("cy") - f("r")], [f("cx"), f("cy") + f("r")],
      ];
    case "ellipse":
      return [
        [f("cx") - f("rx"), f("cy")], [f("cx") + f("rx"), f("cy")],
        [f("cx"), f("cy") - f("ry")], [f("cx"), f("cy") + f("ry")],
      ];
    case "rect":
      return [
        [f("x"), f("y")], [f("x") + f("width"), f("y")],
        [f("x") + f("width"), f("y") + f("height")], [f("x"), f("y") + f("height")],
      ];
    case "polyline":
    case "polygon": {
      const pts = pairs(nums(a.points ?? ""));
      // A polygon that repeats its first point as the last is the same outline as
      // the equivalent polyline — that is exactly how duotone closes arrowheads.
      if (
        pts.length > 1 &&
        pts[0][0] === pts[pts.length - 1][0] &&
        pts[0][1] === pts[pts.length - 1][1]
      )
        pts.pop();
      return pts;
    }
    case "path":
      // Numbers in `d` read as coordinate pairs. Arc parameters make this an
      // approximation, but an identical one at every weight — and matching only
      // ever compares two of these to each other, never to ground truth.
      return pairs(nums(a.d ?? ""));
  }
  return [];
}

export function box(el: El): Box {
  const pts = points(el);
  if (!pts.length) return { cx: 128, cy: 128, w: 0, h: 0, n: 0 };

  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity, sx = 0, sy = 0;
  for (const [x, y] of pts) {
    x0 = Math.min(x0, x); y0 = Math.min(y0, y);
    x1 = Math.max(x1, x); y1 = Math.max(y1, y);
    sx += x; sy += y;
  }
  return { cx: sx / pts.length, cy: sy / pts.length, w: x1 - x0, h: y1 - y0, n: pts.length };
}

const canonical = (pts: Pt[]): Pt[] =>
  [...pts].sort((p, q) => p[0] - q[0] || p[1] - q[1]);

/** Penalty added when two parts aren't even described by the same number of points. */
const SHAPE_MISMATCH = 12;

/**
 * Dissimilarity of two parts in canvas units.
 *
 * Equal point counts get the precise comparison; unequal counts fall back to
 * position and extent plus a penalty, so a same-shape match is always preferred
 * over a differently-shaped one of equal position.
 */
export function distance(a: El, b: El): number {
  const pa = points(a);
  const pb = points(b);

  if (pa.length > 0 && pa.length === pb.length) {
    const sa = canonical(pa);
    const sb = canonical(pb);
    let sum = 0;
    for (let i = 0; i < sa.length; i++) sum += Math.hypot(sa[i][0] - sb[i][0], sa[i][1] - sb[i][1]);
    return sum / sa.length;
  }

  const ba = box(a);
  const bb = box(b);
  return (
    Math.hypot(ba.cx - bb.cx, ba.cy - bb.cy) +
    (Math.abs(ba.w - bb.w) + Math.abs(ba.h - bb.h)) / 2 +
    SHAPE_MISMATCH
  );
}

/** Cost of leaving a part unmatched. Above this, no pairing is worth making. */
const DROP = 90;

type Assignment = { map: (number | null)[]; cost: number };

/**
 * Exact minimum-cost assignment of `n` rows to `m` columns, rows optionally
 * dropped at `DROP`. Subset DP: O(n · 2^m), and icons have few parts.
 */
function solve(cost: number[][], n: number, m: number, forbid?: [number, number]): Assignment {
  const C = (i: number, j: number) =>
    forbid && forbid[0] === i && forbid[1] === j ? Infinity : cost[i][j];

  const size = 1 << m;
  const best = new Float64Array((n + 1) * size).fill(Infinity);
  const from = new Int32Array((n + 1) * size).fill(-2);
  best[0] = 0;

  for (let i = 0; i < n; i++) {
    for (let mask = 0; mask < size; mask++) {
      const cur = best[i * size + mask];
      if (!Number.isFinite(cur)) continue;

      // drop row i
      const dropIdx = (i + 1) * size + mask;
      if (cur + DROP < best[dropIdx]) {
        best[dropIdx] = cur + DROP;
        from[dropIdx] = -1;
      }
      // assign row i to a free column
      for (let j = 0; j < m; j++) {
        if (mask & (1 << j)) continue;
        const c = C(i, j);
        if (!Number.isFinite(c)) continue;
        const nm = mask | (1 << j);
        const idx = (i + 1) * size + nm;
        if (cur + c < best[idx]) {
          best[idx] = cur + c;
          from[idx] = j;
        }
      }
    }
  }

  let bestMask = 0;
  let bestCost = Infinity;
  for (let mask = 0; mask < size; mask++) {
    const c = best[n * size + mask];
    if (c < bestCost) { bestCost = c; bestMask = mask; }
  }

  const map: (number | null)[] = new Array(n).fill(null);
  let mask = bestMask;
  for (let i = n - 1; i >= 0; i--) {
    const j = from[(i + 1) * size + mask];
    if (j === -2) break;
    if (j >= 0) { map[i] = j; mask &= ~(1 << j); }
  }

  // Unmatched columns are counted so a target with spare parts is still flagged.
  return { map, cost: bestCost };
}

export type MatchResult = {
  map: (number | null)[];
  ok: boolean;
  cost: number;
  issues: string[];
};

/**
 * Match `from` onto `to`.
 *
 * `minMargin` is how much worse the best alternative assignment must be before a
 * pairing counts as decided. Expressed in canvas units of total cost.
 */
export function matchParts(from: El[], to: El[], minMargin = 8): MatchResult {
  const n = from.length;
  const m = to.length;
  const issues: string[] = [];

  if (n === 0 || m === 0) return { map: new Array(n).fill(null), ok: n === 0, cost: 0, issues: n ? ["empty target"] : [] };
  if (m > 24) return { map: new Array(n).fill(null), ok: false, cost: Infinity, issues: [`too many parts (${m})`] };

  const cost: number[][] = from.map((a) => to.map((b) => distance(a, b)));
  const base = solve(cost, n, m);

  for (let i = 0; i < n; i++) {
    if (base.map[i] === null) {
      issues.push(`part ${i} (${from[i].tag}) left unmatched`);
      continue;
    }
    // How much worse is the best world in which part i pairs differently?
    const alt = solve(cost, n, m, [i, base.map[i]!]);
    const margin = alt.cost - base.cost;
    if (margin < minMargin)
      issues.push(
        `part ${i} (${from[i].tag}) ambiguous: alternative assignment only ${margin.toFixed(1)}u worse`,
      );
  }

  const used = new Set(base.map.filter((v): v is number => v !== null));
  const spare = m - used.size;
  if (spare > 0) issues.push(`${spare} part(s) in target had no source`);

  return { map: base.map, ok: issues.length === 0, cost: base.cost, issues };
}

export function isIdentity(map: (number | null)[]): boolean {
  return map.every((v, i) => v === i);
}
