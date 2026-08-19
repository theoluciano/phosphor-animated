# phosphor-animated

Animated [Phosphor](https://phosphoricons.com) icons for React, installed as source
through the shadcn CLI.

```sh
npx shadcn@latest add "https://phosphor-animated.com/r/bell.json"
```

```tsx
import { Bell } from "@/components/icons/bell";

<Bell className="size-6" />              // animates on hover
<Bell weight="duotone" trigger="in-view" />
```

> Unofficial and independent. Not affiliated with or endorsed by Phosphor Icons.
> Icon geometry is used under Phosphor's MIT license. A handful of animations were
> informed by the motion design of [pqoqubbw/icons](https://github.com/pqoqubbw/icons),
> also MIT — see [LICENSE](./LICENSE).

## What you get

- **Five Phosphor weights.** `weight="thin | light | regular | bold | duotone"`.
- **Triggers.** `hover` (default), `click`, `in-view`, `loop`, `none` — plus a ref
  handle (`play()` / `stop()`) for animating on state changes.
- **Reduced motion.** Honours `prefers-reduced-motion` without any configuration.
- **Source, not a package.** Each icon lands in your project as a readable file whose
  keyframes are plain data. Retune or replace them; nothing points back here.

Installing an icon also installs `animated-icon.tsx`, a small shared runtime. Install
a second icon and it is reused rather than duplicated.

## How it works

Phosphor distributes two forms of every icon. The npm package ships flattened,
outlined single paths — an outlined trash can has no lid to lift and no stroke to
draw. The repo also carries `raw/`, where icons are still stroked geometry with their
parts intact. This project builds from `raw/`, so a bell's clapper can lag behind the
bell and a check can draw itself.

Choreography is written once, against the regular weight, and addresses parts by
index. That does not survive contact with the real set: Phosphor reorders parts
between weights, drops detail at heavier ones (`chat-teardrop-dots` loses a dot at
bold, where `r=12` circles would fuse at stroke-width 24), and sometimes redraws an
icon wholesale. So the build matches parts **geometrically** and emits a per-weight
map. Ambiguous matches are never guessed — they fall back to whole-shape motion.

One choreography per icon drives every weight. Where Phosphor redrew a weight as a
merged shape — duotone, for a couple of icons — part indices carry no meaning there,
so per-part motion is skipped and only whole-icon motion applies.

Fill is not currently included. Its geometry is a single merged path with no separate
parts and no strokes to draw, so it cannot share the choreography the other weights
use, and animating it well meant authoring every icon twice.

### Build pipeline

```sh
pnpm icons:fetch      # vendor Phosphor's raw/ sources into data/raw
pnpm icons:analyze    # classify every weight, emit the build IR
pnpm icons:codegen    # write src/registry/icons/*.tsx
pnpm icons:registry   # write public/r/*.json
pnpm icons:build      # analyze + codegen + registry
```

Choreography lives in `scripts/animations/`, split by category. It is a build-time
input — it gets compiled into components and is not shipped. `pnpm icons:parts`
regenerates `data/generated/parts.txt`, the reference for which part is which when
writing a new animation.

Two things the codegen refuses to emit, because both fail silently at runtime:
choreography aimed at a part that does not exist, and choreography aimed at a part
carrying its own SVG `transform` attribute (Motion writes the CSS transform property,
which overrides the attribute and displaces the part).

### Adding an icon

1. Add its name to `scripts/curated.ts`.
2. `pnpm icons:analyze && pnpm icons:parts`, then read its entry in
   `data/generated/parts.txt` to see what each part is.
3. Write its choreography in the matching `scripts/animations/*.ts`.
4. `pnpm icons:build`.

## Stack

Next.js 16, React 19, Tailwind v4, [Motion](https://motion.dev).
