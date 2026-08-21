"use client";

/**
 * Shared runtime for phosphor-animated icons.
 *
 * Every generated icon is geometry plus choreography; this module is everything
 * else — weight resolution, triggers, reduced-motion handling — kept in one place
 * rather than copied into all 162 icon files.
 *
 * Phosphor ships six weights. Four of them (thin/light/regular/bold) are usually
 * one drawing at four stroke widths, so an icon embeds regular geometry once and
 * only carries a separate copy for a weight Phosphor actually redrew. Because
 * Phosphor sometimes reorders parts between weights, choreography addresses parts
 * by their index in the *regular* drawing and each weight carries a map back to
 * its own ordering — so "the lid lifts" keeps meaning the lid at every weight.
 *
 * Fill is a single merged shape with no separate parts and no stroke to draw, so
 * it runs a second, whole-shape choreography instead. A handful of icons are
 * redrawn the same way at duotone and use that path too.
 */

import * as React from "react";
import {
  motion,
  useReducedMotion,
  type MotionStyle,
  type Transition,
  type Variants,
} from "motion/react";

export const WEIGHTS = ["thin", "light", "regular", "bold", "duotone"] as const;
export type Weight = (typeof WEIGHTS)[number];

export const STROKE_WIDTH: Record<Weight, number> = {
  thin: 8, light: 12, regular: 16, bold: 24, duotone: 16,
};

/** A drawn element: tag plus its geometry attributes. */
export type Part = [tag: string, attrs: Record<string, string | number>];

export type IconGeometry = {
  regular: Part[];
  thin?: Part[];
  light?: Part[];
  bold?: Part[];
  duotone?: Part[];
  /** Duotone's filled backdrop layer. Decoration; carries no choreography. */
  backdrop?: Partial<Record<Weight, Part[]>>;
  /** Per-weight part maps: map[i] is where regular's part i lives at this weight. */
  maps?: Partial<Record<Weight, (number | null)[]>>;
  /**
   * Weights Phosphor redrew as a merged shape, where part indices carry no meaning.
   * Per-part choreography is skipped for these; only whole-icon motion applies.
   */
  divergent?: Weight[];
};

/**
 * A damped spring, for motion that is physical rather than sequenced.
 *
 * Preferred over hand-stepped keyframes for anything that swings, bounces or
 * settles: the decay comes out of the simulation instead of being approximated by
 * waypoints, and an interrupted spring continues from its current velocity rather
 * than jumping — which is what makes un-hovering mid-swing look right.
 */
export type SpringSpec = {
  stiffness?: number;
  damping?: number;
  mass?: number;
  /** Initial velocity. This is the strike that sets a bell ringing. */
  velocity?: number;
};

/** Animatable properties of a single part. Arrays are keyframes. */
export type PartAnimation = {
  rotate?: number[];
  scale?: number[];
  scaleX?: number[];
  scaleY?: number[];
  x?: number[];
  y?: number[];
  opacity?: number[];
  /** 0 → 1 draws the stroke on. Requires a stroked element. */
  pathLength?: number[];
  /** Rotation/scale origin in viewBox units. Defaults to the canvas centre. */
  origin?: [number, number];
  /** Seconds, before this part starts. Use for stagger. */
  delay?: number;
  /** Overrides the icon's duration for this part. */
  duration?: number;
  /**
   * One curve, or one per segment.
   *
   * A single curve is applied to *every* segment of a keyframe array, so a part
   * decelerates into and accelerates out of each waypoint. That is right for a
   * pendulum passing through its extremes, but wrong for the first segment of a
   * struck object, which should leave rest at full speed. Pass an array to say so.
   */
  ease?: Transition["ease"] | Transition["ease"][];
  /** Keyframe positions in 0–1. Defaults to even spacing. */
  times?: number[];
  /** Use a spring instead of a timed tween. Overrides duration/ease/times. */
  spring?: SpringSpec;
};

export type Choreography = {
  /** Keyed by part index in the regular drawing. */
  parts?: Record<number, PartAnimation>;
  /** Applied to the whole <svg>. The only option for fill. */
  whole?: PartAnimation;
  duration?: number;
};

export type Trigger = "hover" | "click" | "in-view" | "loop" | "none";

export type AnimatedIconHandle = {
  play: () => void;
  stop: () => void;
};

/**
 * Standard SVG props, minus the handful Motion redefines with its own signatures
 * (React's `onAnimationStart` takes a DOM event; Motion's takes a variant name).
 */
export type AnimatedIconProps = Omit<
  React.SVGProps<SVGSVGElement>,
  | "ref"
  | "onAnimationStart" | "onAnimationEnd" | "onAnimationIteration"
  | "onDrag" | "onDragStart" | "onDragEnd"
  // SVG's `values` is a string attribute; Motion's is a MotionValue map.
  | "values"
> & {
  size?: number | string;
  weight?: Weight;
  /** How the animation starts. Default "hover". */
  trigger?: Trigger;
  /** Multiplies playback rate; 2 is twice as fast. Default 1. */
  speed?: number;
};

/**
 * One of the generated components, as a value.
 *
 * The two halves of this — the props and the handle — are declared above, so the
 * composed shape belongs here too: anything that stores an icon in a variable or
 * a lookup table needs it, and re-deriving it at each of those call sites means
 * every widening of `AnimatedIconProps` has to be chased through all of them.
 */
export type IconComponent = React.ForwardRefExoticComponent<
  AnimatedIconProps & React.RefAttributes<AnimatedIconHandle>
>;

/**
 * Everything the generated file supplies. Grouped into one prop because `stroke`
 * is itself an SVG attribute — spreading these alongside SVGProps would collide.
 */
export type IconSpec = {
  geometry: IconGeometry;
  /** Drives every weight. */
  stroke: Choreography;
};

type InternalProps = AnimatedIconProps & { spec: IconSpec };

const DEFAULT_DURATION = 0.6;
const IDENTITY: Record<string, number> = {
  rotate: 0, scale: 1, scaleX: 1, scaleY: 1, x: 0, y: 0, opacity: 1, pathLength: 1,
};

const ANIMATABLE = ["rotate", "scale", "scaleX", "scaleY", "x", "y", "opacity", "pathLength"] as const;

/**
 * Build Motion variants for one part.
 *
 * The rest state only resets the properties this part actually animates, so an
 * icon never fights the styles a consumer put on it.
 */
function buildVariants(
  anim: PartAnimation,
  duration: number,
  speed: number,
  repeat: boolean,
): Variants {
  const rest: Record<string, unknown> = {};
  const active: Record<string, unknown> = {};

  for (const key of ANIMATABLE) {
    const frames = anim[key];
    if (!frames?.length) continue;
    // Rest is the *last* keyframe — the settled state. Most animations return to
    // where they started, but a draw-on (pathLength 0 -> 1) must rest fully drawn,
    // or the icon would sit invisible until hovered.
    rest[key] = frames[frames.length - 1] ?? IDENTITY[key];
    active[key] = frames;
  }

  const delay = (anim.delay ?? 0) / (speed || 1);
  const loop = repeat ? { repeat: Infinity, repeatDelay: 0.45 / (speed || 1) } : {};

  if (anim.spring) {
    const { velocity, ...rest } = anim.spring;
    active.transition = {
      type: "spring",
      stiffness: 220,
      damping: 14,
      mass: 1,
      ...rest,
      ...(velocity !== undefined ? { velocity: velocity * (speed || 1) } : {}),
      delay,
      ...loop,
    } satisfies Transition;
  } else {
    const d = anim.duration && anim.duration > 0 ? anim.duration : duration;
    active.transition = {
      duration: d / (speed || 1),
      delay,
      ease: anim.ease ?? "easeInOut",
      ...(anim.times ? { times: anim.times } : {}),
      ...loop,
    } as Transition;
  }

  // Returning to rest gets its own spring. Without it, un-hovering mid-animation
  // snaps the part home at whatever the default is; a spring picks up the velocity
  // the part already had and carries it back, which is what makes an interrupted
  // hover look deliberate instead of broken.
  rest.transition = {
    type: "spring",
    stiffness: 260,
    damping: 26,
    mass: 0.7,
  } satisfies Transition;

  return { rest, active } as Variants;
}

/**
 * Pivot for a part, in viewBox units.
 *
 * Must go through Motion's originX/originY rather than plain `transformOrigin`:
 * Motion derives transform-origin from those values on every frame and would
 * otherwise overwrite a CSS one with its default centre — which silently turns
 * every hinge, wheel and pivot into a spin about the middle of the icon.
 *
 * `transform-box: view-box` is what makes these px values read as viewBox units,
 * so a hinge stays on its hinge at any rendered size.
 */
function originStyle(anim: PartAnimation): MotionStyle {
  const [ox, oy] = anim.origin ?? [128, 128];
  return { transformBox: "view-box", originX: `${ox}px`, originY: `${oy}px` };
}

/**
 * Resolve which geometry and which choreography a weight uses.
 *
 * Exported so the tuning studio can render a frozen frame through exactly the same
 * resolution the live component uses — a second implementation would drift, and the
 * editor would end up showing something that never ships.
 */
export function resolveWeight(geometry: IconGeometry, weight: Weight) {
  const divergent = geometry.divergent?.includes(weight) ?? false;
  const parts =
    (weight === "regular" ? geometry.regular : geometry[weight]) ?? geometry.regular;
  const map = geometry.maps?.[weight];
  const backdrop = geometry.backdrop?.[weight];
  return { parts, map, backdrop, divergent };
}

export const AnimatedIcon = React.forwardRef<AnimatedIconHandle, InternalProps>(
  function AnimatedIcon(
    {
      spec,
      size = 24, weight = "regular", trigger = "hover", speed = 1,
      onMouseEnter, onMouseLeave, onClick, style,
      /**
       * Defaulted here rather than written straight onto the <svg>, because the
       * attributes below sit before `{...rest}`: a caller who passes
       * `fill={maybeUndefined}` — the ordinary shape of a toggle, and the one
       * prop this component invites callers to set — would otherwise land
       * `fill: undefined` in the spread and wipe the attribute out entirely.
       * The SVG then falls back to its initial value, which is solid black, not
       * the "none" it was meant to keep. A default parameter absorbs the
       * undefined instead.
       */
      fill = "none",
      ...rest
    },
    ref,
  ) {
    const reduced = useReducedMotion();
    const [active, setActive] = React.useState(false);

    React.useImperativeHandle(ref, () => ({
      play: () => setActive(true),
      stop: () => setActive(false),
    }), []);

    const { parts, map, backdrop, divergent } = resolveWeight(spec.geometry, weight);
    const choreo = spec.stroke;
    // `??` would let a zero through, and a zero-duration tween completes instantly —
    // the icon jumps to its end state with no visible animation at all.
    const duration = choreo.duration && choreo.duration > 0 ? choreo.duration : DEFAULT_DURATION;
    const looping = trigger === "loop";

    // Reduced motion: render the icon, skip the motion. Never animate against an
    // explicit OS-level preference not to.
    const animateState = reduced ? "rest" : looping || active ? "active" : "rest";

    const wholeVariants = React.useMemo(
      () => (choreo.whole ? buildVariants(choreo.whole, duration, speed, looping) : null),
      [choreo.whole, duration, speed, looping],
    );

    const svgStyle: MotionStyle = {
      /**
       * Clip to the viewBox, as SVG does by default.
       *
       * This was once set to `visible`, because Phosphor draws right out to the edge
       * of its safe area and an oversized scale or hinge got sliced at the boundary.
       * But letting the drawing escape trades a clipped icon for a worse one: the
       * glyph swings past the bounds of the space it was given and over whatever sits
       * beside it, which reads as a mistake rather than as motion. The real fix is to
       * size the motion to the box — every animation here now stays inside it — and
       * the clip is what keeps that true, so an amplitude that outgrows the frame
       * shows up as a clipped edge instead of silently overlapping a neighbour.
       *
       * An icon that genuinely departs (`traverse`) wants this: it leaves at the
       * frame edge, which is what "flies out of frame" means.
       *
       * For this to mean anything, whole-icon motion has to happen *inside* the
       * frame rather than on it — see the group below. Transforming the `<svg>`
       * itself would carry its clip along with it, and the drawing would sail out
       * of position with nothing to stop it.
       */
      overflow: "hidden",
      ...(style as MotionStyle),
    };

    const handlers = {
      onMouseEnter: (e: React.MouseEvent<SVGSVGElement>) => {
        if (trigger === "hover") setActive(true);
        onMouseEnter?.(e);
      },
      onMouseLeave: (e: React.MouseEvent<SVGSVGElement>) => {
        if (trigger === "hover") setActive(false);
        onMouseLeave?.(e);
      },
      onClick: (e: React.MouseEvent<SVGSVGElement>) => {
        if (trigger === "click") {
          setActive(true);
          window.setTimeout(() => setActive(false), (duration / (speed || 1)) * 1000 + 60);
        }
        onClick?.(e);
      },
    };

    const drawing = (
      <>
        {backdrop?.map(([tag, attrs], i) =>
          React.createElement(tag, { key: `bd-${i}`, ...attrs, fill: "currentColor", stroke: "none" }),
        )}

        {parts.map((_, renderIndex) => {
          // Choreography is keyed by regular-weight indices; find which one drives
          // the part being rendered at this weight.
          const sourceIndex = map
            ? map.findIndex((target) => target === renderIndex)
            : renderIndex;
          const anim = !divergent && sourceIndex >= 0 ? choreo.parts?.[sourceIndex] : undefined;
          const [tag, attrs] = parts[renderIndex];

          if (!anim) return React.createElement(tag, { key: renderIndex, ...attrs });

          const v = buildVariants(anim, duration, speed, looping);
          const MotionTag = (motion as unknown as Record<string, React.ElementType>)[tag];

          return (
            <MotionTag
              key={renderIndex}
              {...attrs}
              style={originStyle(anim)}
              variants={{ rest: v.rest, active: v.active }}
            />
          );
        })}
      </>
    );

    return (
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill={fill}
        stroke="currentColor"
        strokeWidth={STROKE_WIDTH[weight]}
        strokeLinecap="round"
        strokeLinejoin="round"
        style={svgStyle}
        initial="rest"
        animate={animateState}
        {...(trigger === "in-view"
          ? { whileInView: "active", viewport: { once: false, amount: 0.6 } }
          : null)}
        {...handlers}
        {...rest}
      >
        {/* Whole-icon motion rides a group inside the frame, so the frame can clip
            it. Motion propagates the variant down from the <svg>, so this animates
            with everything else. */}
        {wholeVariants && choreo.whole ? (
          <motion.g
            style={originStyle(choreo.whole)}
            variants={{ rest: wholeVariants.rest, active: wholeVariants.active }}
          >
            {drawing}
          </motion.g>
        ) : (
          drawing
        )}
      </motion.svg>
    );
  },
);

/** Wraps a generated icon so consumers get a clean, typed component. */
export function createAnimatedIcon(
  displayName: string,
  geometry: IconGeometry,
  stroke: Choreography,
) {
  const spec: IconSpec = { geometry, stroke };
  const Icon = React.forwardRef<AnimatedIconHandle, AnimatedIconProps>(function Icon(props, ref) {
    return <AnimatedIcon ref={ref} spec={spec} {...props} />;
  });
  Icon.displayName = displayName;
  return Icon;
}
