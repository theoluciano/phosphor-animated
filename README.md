# phosphor-animated

Animated [Phosphor](https://phosphoricons.com) icons for React, installed as source
through the shadcn CLI.

Browse the set and copy install commands at
[phosphor-animated.com](https://phosphor-animated.com).

## Install

```sh
npx shadcn@latest add "https://phosphor-animated.com/r/bell.json"
```

The icon lands in your project at `components/icons/bell.tsx`, alongside
`animated-icon.tsx` — a small shared runtime that every icon reuses rather than
duplicates. `motion` is added as a dependency.

## Usage

```tsx
import { Bell } from "@/components/icons/bell";

<Bell className="size-6" />              // animates on hover
<Bell weight="duotone" trigger="in-view" />
```

### Props

| Prop | Type | Default | Notes |
| --- | --- | --- | --- |
| `weight` | `"thin" \| "light" \| "regular" \| "bold" \| "duotone"` | `"regular"` | |
| `trigger` | `"hover" \| "click" \| "in-view" \| "loop" \| "none"` | `"hover"` | How the animation starts |
| `size` | `number \| string` | `24` | Width and height |
| `speed` | `number` | `1` | Playback rate; `2` is twice as fast |

Every other SVG prop passes through — `className`, `onClick`, `aria-label`, and so
on. The stroke is `currentColor`, so colour comes from CSS.

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

`prefers-reduced-motion` is honoured without any configuration — icons render
static for readers who ask for that.

### Making it yours

Each icon is a readable file whose keyframes are plain data. Retune the motion or
replace it outright; nothing points back here.

---

Inspired by [hugeicons-animated](https://github.com/enesgules/hugeicons-animated) and [lucide-animated](https://github.com/pqoqubbw/icons)

> Unofficial and independent. Not affiliated with or endorsed by Phosphor Icons.
> Full attribution in [LICENSE](./LICENSE).
