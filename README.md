# phosphor-animated
<img width="1624" height="1061" alt="image" src="https://github.com/user-attachments/assets/719d8138-f54a-410f-b64e-db9ed094d2e6" />

163 hand-animated [Phosphor](https://phosphoricons.com) icons for React, installed
as source through the shadcn CLI. Five weights, ten categories, and no package to
depend on — each icon arrives as a file in your repo that you own outright.

### [Browse the set → phosphor-animated.com](https://phosphor-animated.com)

Hover anything to watch it move, search by name, switch weights, and copy the one
command that installs it.

## Install

```sh
npx shadcn@latest add "https://phosphor-animated.com/r/bell.json"
```

Two files land in your project: `components/icons/bell.tsx`, and
`components/icons/animated-icon.tsx` — a small shared runtime every icon reuses
rather than duplicates. `motion` is added as a dependency; nothing else is.

Works with React 18 or 19. color comes from `currentColor` and size from a prop,
so Tailwind is welcome but not required.

## Usage

```tsx
import { Bell } from "@/components/icons/bell";

<Bell className="size-6" />                  // animates on hover
<Bell weight="duotone" trigger="in-view" />
```

Icons draw as strokes on an unfilled canvas. Where the drawing is a closed shape,
passing `fill` gives you the solid half of an on/off pair:

```tsx
<Heart fill={liked ? "currentColor" : "none"} />
```

### Props

| Prop | Type | Default | Notes |
| --- | --- | --- | --- |
| `weight` | `"thin" \| "light" \| "regular" \| "bold" \| "duotone"` | `"regular"` | Phosphor's six minus `fill` — use the `fill` prop above instead |
| `trigger` | `"hover" \| "click" \| "in-view" \| "loop" \| "none"` | `"hover"` | What starts the animation |
| `size` | `number \| string` | `24` | Width and height |
| `speed` | `number` | `1` | Playback rate; `2` is twice as fast |

Every other SVG prop passes through — `className`, `fill`, `onClick`, `aria-label`,
and so on.

### Animating on state changes

With `trigger="none"`, drive the animation yourself through a ref:

```tsx
import { useRef } from "react";
import { Bell } from "@/components/icons/bell";
import type { AnimatedIconHandle } from "@/components/icons/animated-icon";

const bell = useRef<AnimatedIconHandle>(null);

<Bell ref={bell} trigger="none" />;

bell.current?.play();
bell.current?.stop();
```

### Reduced motion

`prefers-reduced-motion` is honoured with no configuration — icons render static
for readers who ask for that.

### Making it yours

Each icon is a readable file whose choreography is plain data: a duration, an
origin, and the values each part moves through. Retune it, or replace it outright;
nothing points back here. The rules the set was tuned against are written down in
[PRINCIPLES.md](./scripts/animations/PRINCIPLES.md).

Full reference, with every weight and trigger running live, is at
[phosphor-animated.com/usage](https://phosphor-animated.com/usage).

## License

MIT — see [LICENSE](./LICENSE).

Inspired by [hugeicons-animated](https://github.com/enesgules/hugeicons-animated)
and [lucide-animated](https://github.com/pqoqubbw/icons).

> Unofficial and independent. Not affiliated with, endorsed by, or sponsored by
> Phosphor Icons. Icon geometry is derived from Phosphor Icons under the MIT
> License; full attribution in [LICENSE](./LICENSE).
