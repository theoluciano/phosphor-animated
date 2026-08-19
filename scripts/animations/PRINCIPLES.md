# Motion principles

Derived from review notes on the set, not invented up front. Each rule exists
because something specific looked wrong.

## 1. Never clip

Phosphor draws to the edge of its safe area, so anything that scales up or rotates
will hit the viewBox boundary. The runtime sets `overflow: visible` to allow bleed,
but that is a safety net, not a licence — keep scale under about `1.15` and
rotation under about `20°` for parts that already sit near the edge.

> *"the ends of the arms get cut off by the bounding box as they scale up"* — star
> *"the top gets cut off by the bounding box"* — trash

## 2. Strokes must not cross each other

Phosphor strokes are open and unfilled, so when two parts move independently their
lines pass through one another and the icon reads as broken glass. Parts that
overlap should move **together**, or one should stay still.

This is why a clapper must not swing further than the bell it hangs inside.

> *"you can see the ends of the hammer over the top of the bottom of the bell"* — bell
> *"you can see lines coming through underneath other lines; looks janky"* — bell-slash

## 3. A full turn is too much

A 360° spin reads as a loading state, not a response to a hover. Prefer a partial
turn — enough to say the thing rotates, not enough to become the whole animation.
A gear turning one tooth is more convincing than a gear whirling.

> *"there's too much spinning"* — gear

## 4. If it cannot be seen at 16px, it is not there

Most of these icons live at 16–24px. Movement under roughly 6 units on the 256 grid
is invisible at that size. Either commit to an amplitude that reads, or do nothing.

> *"can hardly see the movement"* — user

## 5. Opacity needs a reason

Fading a part in and out is a crutch — it adds visible change without meaning.
Only dim something when dimming *is* the idea: a light going out, a signal dropping,
a part genuinely switching off. Never as generic activity.

> *"the opacity change doesn't make sense for the context"* — trash
> *"the opacity change is janky"* — users

## 6. Stagger decisively or not at all

A small offset between two parts reads as a mistake — as though the animation is
out of sync. Either fire them together, or separate them far enough (≥ 0.15s) that
the sequence is clearly deliberate.

> *"should animate at the same time or clearly different times, this is somewhere in
> between and looks broken"* — x

## 7. Restraint, with a few exceptions

Most icons should do one small, quick, legible thing. A curated handful earn real
character. Everything performing at once is exhausting and makes the expressive ones
land less hard.

Corollary: "barely moves" is a legitimate result. Some icons are better still.

## 8. Rotation amplitude depends on how far the pivot is

An angle means nothing on its own — what reads is how far the *far end* travels.
A bell pivoting at `y=48` has its base 168 units away, so 12° sweeps that base
through 21% of the icon's width, which looks violent. The same 12° on something
pivoting near its own centre is barely visible.

Pick the angle from the distance:

```
sweep = distance_from_pivot × sin(peak_to_peak_angle)
```

Aim for a sweep of roughly **8–10% of the icon width** (20–26 units on the 256
grid). And note the decay recipes swing back about half the peak on the return, so
peak-to-peak is roughly `1.5 ×` the number passed in.

| pivot distance | reasonable peak |
| --- | --- |
| ~170 units (bell, anchor) | 4–5° |
| ~100 units (tag) | 7° |
| near centre | 10–14° |

> *"there's way too much movement with the bells now"*

## 9. Drawing suits outline shapes

Where an icon is essentially one continuous outline, drawing it on reads better than
pushing it around.

> *"pretty boring; maybe draw out the outline?"* — house
