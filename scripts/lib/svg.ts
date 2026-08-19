/**
 * Parser for Phosphor's raw stroke sources.
 *
 * Phosphor ships two forms of every icon. The npm package (`@phosphor-icons/core`)
 * ships `assets/` — outlined, flattened single paths. Those are useless to us: an
 * outlined trash can has no lid to lift and no stroke to draw. The GitHub repo also
 * carries `raw/`, where icons are still real stroked geometry with their parts
 * intact. That is what we ingest.
 *
 * Every raw file is a single line, unnested, drawn from a tiny vocabulary, and
 * repeats the same five stroke attributes on every element. Since SVG stroke
 * attributes inherit, we hoist that boilerplate to the <svg> and keep each element
 * as pure geometry — which is what makes the generated components readable.
 */

export type Attrs = Record<string, string>;
export type El = { tag: string; attrs: Attrs };

export const WEIGHTS = ["thin", "light", "regular", "bold", "fill", "duotone"] as const;
export type Weight = (typeof WEIGHTS)[number];

/** Stroke width per line weight — the whole reason four weights share one drawing. */
export const STROKE_WIDTH: Record<string, number> = {
  thin: 8,
  light: 12,
  regular: 16,
  bold: 24,
  duotone: 16,
};

/** Attributes hoisted to the parent <svg>; elements inherit them. */
const INHERITED: Attrs = {
  fill: "none",
  stroke: "currentColor",
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
};

const DRAWABLE = new Set(["path", "line", "circle", "rect", "ellipse", "polyline", "polygon"]);

const ATTR_RE = /([a-zA-Z_:][-\w:.]*)\s*=\s*"([^"]*)"/g;
const TAG_RE = /<([a-zA-Z][-\w]*)((?:\s+[a-zA-Z_:][-\w:.]*\s*=\s*"[^"]*")*)\s*\/?>/g;

function parseAttrs(s: string): Attrs {
  const out: Attrs = {};
  for (const m of s.matchAll(ATTR_RE)) out[m[1]] = m[2];
  return out;
}

/**
 * True for the invisible `<rect width="256" height="256" fill="none"/>` that opens
 * every raw file. It exists to pin the export bounds; it draws nothing, so we drop it.
 */
function isBoundsRect(el: El): boolean {
  return (
    el.tag === "rect" &&
    el.attrs.width === "256" &&
    el.attrs.height === "256" &&
    el.attrs.fill === "none" &&
    el.attrs.x === undefined &&
    el.attrs.y === undefined
  );
}

/**
 * Parse one raw SVG into ordered drawn elements with inherited attributes stripped.
 *
 * Anything that differs from the inherited default is kept on the element — that is
 * how duotone's `opacity="0.2"` backdrop and fill's solid shapes survive the hoist.
 */
export function parseRawSvg(src: string): El[] {
  const els: El[] = [];

  for (const m of src.matchAll(TAG_RE)) {
    const tag = m[1];
    if (!DRAWABLE.has(tag)) continue; // skips <svg> itself

    const attrs = parseAttrs(m[2] ?? "");
    const el: El = { tag, attrs };
    if (isBoundsRect(el)) continue;

    // stroke-width is carried by the weight, never by the element.
    delete attrs["stroke-width"];

    for (const [k, v] of Object.entries(INHERITED)) {
      if (attrs[k] === v) delete attrs[k];
    }

    els.push(el);
  }

  return els;
}

/** Stable signature for structural comparison across weights. */
export function signature(els: El[]): string {
  return JSON.stringify(
    els.map((e) => [e.tag, Object.entries(e.attrs).sort(([a], [b]) => a.localeCompare(b))]),
  );
}

/** Just the ordered tag list — the part choreography indexes into. */
export function shape(els: El[]): string {
  return els.map((e) => e.tag).join(",");
}
