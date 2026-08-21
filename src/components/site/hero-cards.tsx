"use client";

/**
 * Three mock interfaces, fanned and cropped by the right edge of the screen.
 *
 * The point is that the set is enough to build a whole screen with, so these are
 * ordinary product surfaces — a forecast, a player, a checkout — rather than a
 * second showcase. Every glyph is the same registry component the grid below
 * renders, at the size it would really be used: 16 to 26px.
 *
 * Three rules, applied throughout:
 *
 *  - Anything that reads as a control plays on press and has a hover state.
 *    Anything that is only information plays on hover and has no hover styling,
 *    because hover styling is a promise that something will happen on click.
 *  - Controls that would hold a state in a real app hold it here: play becomes
 *    pause, the heart fills, the bell mutes. Pay is the exception — it confirms
 *    and then quietly reverts, so the fan is never left mid-transaction for
 *    whoever loads the page next.
 *  - Dimmed means disabled: the three inactive tabs take neither hover nor click.
 *
 * Almost all of it is aria-hidden and out of the tab order: it is an illustration
 * of the product, and a dozen fake controls ahead of the gallery would be a dozen
 * dead ends for anyone arriving by keyboard or screen reader. The real, reachable
 * version of every one of these animations is the grid below, which plays on
 * focus.
 *
 * The exception is the player's play button and the track it names. Those do
 * something — they start a video with sound — and anything that can start audio
 * has to be reachable by whoever might need to stop it.
 */

import * as React from "react";
import type {
  AnimatedIconHandle,
  IconComponent,
} from "@/registry/icons/animated-icon";
import { Bell } from "@/registry/icons/bell";
import { BellSlash } from "@/registry/icons/bell-slash";
import { Camera } from "@/registry/icons/camera";
import { CaretDown } from "@/registry/icons/caret-down";
import { CaretRight } from "@/registry/icons/caret-right";
import { ChatCircle } from "@/registry/icons/chat-circle";
import { CheckCircle } from "@/registry/icons/check-circle";
import { Cloud } from "@/registry/icons/cloud";
import { CreditCard } from "@/registry/icons/credit-card";
import { Envelope } from "@/registry/icons/envelope";
import { Fire } from "@/registry/icons/fire";
import { Gear } from "@/registry/icons/gear";
import { Headphones } from "@/registry/icons/headphones";
import { Heart } from "@/registry/icons/heart";
import { House } from "@/registry/icons/house";
import { Lightning } from "@/registry/icons/lightning";
import { MagnifyingGlass } from "@/registry/icons/magnifying-glass";
import { Microphone } from "@/registry/icons/microphone";
import { Moon } from "@/registry/icons/moon";
import { Pause } from "@/registry/icons/pause";
import { Play } from "@/registry/icons/play";
import { ShareNetwork } from "@/registry/icons/share-network";
import { ShoppingCart } from "@/registry/icons/shopping-cart";
import { Sun } from "@/registry/icons/sun";
import { User } from "@/registry/icons/user";
import { Wallet } from "@/registry/icons/wallet";
import { YoutubeLogo } from "./youtube-logo";
import { loadYouTubeApi, type YouTubePlayer } from "@/lib/youtube";

/** How long the checkout stays confirmed before it resets itself. */
const PAID_MS = 2400;

/**
 * The track, played through YouTube's own embed.
 *
 * The licence lives with YouTube rather than with us, which is the whole reason
 * to do it this way — but their API terms forbid isolating the audio from the
 * video, so the player is visible, sitting in the album-art slot where the
 * artwork would be. The card's own button drives it; YouTube's controls are off.
 */
const VIDEO_ID = "G95PSPyori4";

/** Straight into the chorus rather than the intro. */
const START_SECONDS = 40;

/**
 * Replays a control's glyph *after* the press has rendered.
 *
 * Half of these controls swap their icon on click — play for pause, bell for
 * bell-slash — and the handle only ever reaches the instance that is mounted
 * right now. Calling play() inside the click handler would animate the icon that
 * is on its way out. Bumping a counter and playing in an effect animates the one
 * you can actually see, and behaves identically for the controls that don't swap.
 */
function usePress(ref: React.RefObject<AnimatedIconHandle | null>) {
  const [presses, setPresses] = React.useState(0);

  React.useEffect(() => {
    if (presses > 0) ref.current?.play();
  }, [presses, ref]);

  return React.useCallback(() => setPresses((n) => n + 1), []);
}

/**
 * Information that animates when pointed at. Deliberately unstyled on hover:
 * these are not controls and should not look like them.
 */
function Glyph({ icon: Icon, size = 22 }: { icon: IconComponent; size?: number }) {
  const ref = React.useRef<AnimatedIconHandle>(null);

  return (
    <span
      onMouseEnter={() => ref.current?.play()}
      onMouseLeave={() => ref.current?.stop()}
      className="relative inline-flex shrink-0"
    >
      <Icon ref={ref} size={size} trigger="none" />
      {/*
       * Eight more pixels of target in every direction, out of flow. Padding
       * would have done it, but these glyphs sit in rows and columns with gaps,
       * and growing the box eats the gap. An absolute child reaches past the
       * edges without occupying any space, and because it is a descendant,
       * entering it still counts as entering the parent.
       */}
      <span className="absolute -inset-2" />
    </span>
  );
}

/** A control that is switched off. Takes neither pointer nor press. */
function Disabled({ icon: Icon }: { icon: IconComponent }) {
  return (
    <span className="pointer-events-none inline-flex size-8 shrink-0 items-center justify-center opacity-40">
      <Icon size={20} trigger="none" />
    </span>
  );
}

/** An icon-only control: 32px box, tinted on hover, glyph replays on press. */
function IconButton({
  icon: Icon,
  size = 20,
  onPress,
  className = "",
  fill,
}: {
  icon: IconComponent;
  size?: number;
  onPress?: () => void;
  className?: string;
  fill?: string;
}) {
  const ref = React.useRef<AnimatedIconHandle>(null);
  const press = usePress(ref);

  return (
    <button
      type="button"
      tabIndex={-1}
      onClick={() => {
        onPress?.();
        press();
      }}
      className={`
        inline-flex size-8 shrink-0 cursor-pointer items-center justify-center
        rounded-lg transition-colors hover:bg-surface-2
        ${className}
      `}
    >
      <Icon ref={ref} size={size} trigger="none" fill={fill} />
    </button>
  );
}

/**
 * A label and its own affordance, pressed as one thing — a picker rather than a
 * caret that happens to sit beside some text. The negative margin lets the hover
 * tint breathe without pushing the label out of line with the rest of the card.
 */
function TextButton({ icon: Icon, label }: { icon: IconComponent; label: string }) {
  const ref = React.useRef<AnimatedIconHandle>(null);
  const press = usePress(ref);

  return (
    <button
      type="button"
      tabIndex={-1}
      onClick={press}
      className="-mx-2 inline-flex cursor-pointer items-center gap-1.5 rounded-lg px-2 py-1 transition-colors hover:bg-surface-2"
    >
      <span className="text-[15px] font-semibold leading-5 text-ink">{label}</span>
      <Icon ref={ref} size={14} trigger="none" />
    </button>
  );
}

/**
 * The one loud control on a card: acid ground, dark glyph in both themes.
 *
 * Acid is the same colour in light and dark, so this can't take a hover tint from
 * the palette without inventing a second one. It darkens itself instead, which
 * works against either ground.
 */
function AcidButton({
  icon: Icon,
  size = 26,
  onPress,
  className = "",
  disabled = false,
  label,
  children,
}: {
  icon: IconComponent;
  size?: number;
  onPress?: () => void;
  className?: string;
  disabled?: boolean;
  /** Supply this to put the control in the tab order with a real name. */
  label?: string;
  children?: React.ReactNode;
}) {
  const ref = React.useRef<AnimatedIconHandle>(null);
  const press = usePress(ref);

  return (
    <button
      type="button"
      aria-label={label}
      tabIndex={label ? undefined : -1}
      onClick={() => {
        onPress?.();
        press();
      }}
      className={`
        inline-flex shrink-0 items-center justify-center bg-highlight
        text-deepgreen transition
        ${disabled ? "pointer-events-none" : "cursor-pointer hover:brightness-95 active:scale-[0.97]"}
        ${className}
      `}
    >
      <Icon ref={ref} size={size} trigger="none" />
      {children}
    </button>
  );
}

/**
 * A whole row that navigates somewhere. The caret is the affordance, so the caret
 * is what answers the press and what picks up the hover tint; the leading glyph is
 * content and answers the pointer on its own.
 */
function RowButton({
  icon,
  label,
  className = "",
}: {
  icon: IconComponent;
  label: string;
  className?: string;
}) {
  const ref = React.useRef<AnimatedIconHandle>(null);
  const press = usePress(ref);

  return (
    <button
      type="button"
      tabIndex={-1}
      onClick={press}
      className={`group flex w-full cursor-pointer items-center gap-2.5 ${className}`}
    >
      <Glyph icon={icon} size={22} />
      <span className="flex-1 text-left text-[13px] leading-4 text-ink">{label}</span>
      <span className="inline-flex size-6 shrink-0 items-center justify-center rounded-md transition-colors group-hover:bg-surface-2">
        <CaretRight ref={ref} size={14} trigger="none" />
      </span>
    </button>
  );
}

/** Shared card shell. Rotation and placement are the caller's business. */
function Card({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`
        flex w-[300px] shrink-0 flex-col rounded-[28px] border border-line
        bg-surface
        ${className}
      `}
    >
      {children}
    </div>
  );
}

/** One column of the hourly strip: a time, and the weather under it. */
function Hour({ time, icon }: { time: string; icon: IconComponent }) {
  return (
    <span className="flex flex-col items-center gap-2">
      <span className="font-mono text-[11px] leading-[14px] text-ink-muted">
        {time}
      </span>
      <Glyph icon={icon} size={24} />
    </span>
  );
}

/**
 * One tab. Inactive tabs keep the dot as a transparent spacer so all four glyphs
 * sit on the same line — without it the active column is taller and centring
 * drops the other three by a couple of pixels.
 */
function Tab({ icon, active = false }: { icon: IconComponent; active?: boolean }) {
  return (
    <span className="flex flex-col items-center gap-1.5">
      {active ? <IconButton icon={icon} /> : <Disabled icon={icon} />}
      <span
        className={`size-1 rounded-full ${active ? "bg-highlight" : "bg-transparent"}`}
      />
    </span>
  );
}

/** One line item: what it is, and what it costs. */
function LineItem({
  icon,
  label,
  price,
}: {
  icon: IconComponent;
  label: string;
  price: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <Glyph icon={icon} size={22} />
      <span className="flex-1 text-[13px] leading-4 text-ink">{label}</span>
      <span className="font-mono text-[13px] leading-4 text-ink">{price}</span>
    </div>
  );
}

function Forecast() {
  const [muted, setMuted] = React.useState(false);

  return (
    <Card className="gap-5 p-6">
      <div className="flex items-center justify-between">
        <TextButton icon={CaretDown} label="Portland" />
        <IconButton
          icon={muted ? BellSlash : Bell}
          size={18}
          onPress={() => setMuted((v) => !v)}
        />
      </div>

      <div className="flex items-center gap-4">
        <Glyph icon={Sun} size={66} />
        <span className="flex flex-col gap-0.5">
          <span className="text-[38px] font-semibold leading-10 tracking-[-0.03em] text-ink">
            72°
          </span>
          <span className="text-[13px] leading-4 text-ink-muted">
            Clear · feels like 70°
          </span>
        </span>
      </div>

      <div className="flex items-end justify-between border-t border-line pt-4">
        <Hour time="11a" icon={Sun} />
        <Hour time="12p" icon={Cloud} />
        <Hour time="1p" icon={Cloud} />
        <Hour time="2p" icon={Lightning} />
        <Hour time="3p" icon={Moon} />
      </div>

      <div className="flex items-center gap-2.5 rounded-2xl bg-surface-2 px-3.5 py-3">
        <Glyph icon={Fire} size={18} />
        <span className="text-[13px] leading-4 text-ink">
          {muted ? "Alerts muted" : "Heat advisory until 8pm"}
        </span>
      </div>
    </Card>
  );
}

function Player() {
  const [playing, setPlaying] = React.useState(false);
  const [started, setStarted] = React.useState(false);
  const [liked, setLiked] = React.useState(false);

  const mount = React.useRef<HTMLDivElement>(null);
  const bar = React.useRef<HTMLDivElement>(null);
  const player = React.useRef<YouTubePlayer | null>(null);
  const ticker = React.useRef<number | undefined>(undefined);
  /** Constant once the embed is ready, so it is read once rather than per tick. */
  const total = React.useRef(0);
  /** Set when someone gets to the button before the embed finishes building. */
  const waiting = React.useRef(false);

  /**
   * Moves the bar by writing one custom property, rather than by holding the
   * position in state.
   *
   * State would be the obvious choice for a number the view renders, but this one
   * changes twice a second and this card holds ten animated icons — each of which
   * rebuilds its variants on every render. Re-rendering all of that to slide two
   * divs is a lot of work for two style writes, so it does the two style writes.
   *
   * Clamped at the top because getCurrentTime() can briefly overrun getDuration();
   * it has no way of going negative.
   */
  const seek = React.useCallback((fraction: number) => {
    bar.current?.style.setProperty("--pos", `${Math.min(fraction, 1) * 100}%`);
  }, []);

  const track = React.useCallback(() => {
    window.clearInterval(ticker.current);
    ticker.current = window.setInterval(() => {
      const current = player.current;
      if (!current) return;
      if (total.current <= 0) total.current = current.getDuration();
      if (total.current > 0) seek(current.getCurrentTime() / total.current);
    }, 500);
  }, [seek]);

  /**
   * Built on landing, so the first press starts the track instead of starting a
   * download — but built in an idle moment rather than during mount, so a third
   * party's script never delays the hero's own first paint.
   *
   * The button follows `onStateChange` rather than the press: if YouTube stops,
   * or refuses to start, the icon still tells the truth.
   */
  React.useEffect(() => {
    let cancelled = false;

    const build = () => {
      if (cancelled) return;

      void loadYouTubeApi()
        .then((api) => {
          const host = mount.current;
          if (cancelled || !host || player.current) return;

          // The API replaces the element it is handed, so hand it one React does
          // not own: otherwise React later tries to remove a node that an iframe
          // has taken the place of.
          const slot = document.createElement("div");
          host.appendChild(slot);

          player.current = new api.Player(slot, {
            videoId: VIDEO_ID,
            width: "100%",
            height: "100%",
            host: "https://www.youtube-nocookie.com",
            playerVars: {
              start: START_SECONDS,
              // No autoplay flag. The embed loads and then waits: the only thing
              // that ever starts it is a press on the card's own button.
              controls: 0,
              disablekb: 1,
              fs: 0,
              iv_load_policy: 3,
              modestbranding: 1,
              playsinline: 1,
              rel: 0,
              origin: window.location.origin,
            },
            events: {
              onReady: ({ target }) => {
                target
                  .getIframe()
                  .setAttribute("title", "Caroline by Boy in Space");
                if (waiting.current) {
                  waiting.current = false;
                  target.playVideo();
                }
              },
              onStateChange: ({ data }) => {
                const states = window.YT?.PlayerState;
                if (!states) return;
                if (data === states.PLAYING) {
                  setPlaying(true);
                  setStarted(true);
                  track();
                } else if (data === states.PAUSED) {
                  setPlaying(false);
                  window.clearInterval(ticker.current);
                } else if (data === states.ENDED) {
                  window.clearInterval(ticker.current);
                  setPlaying(false);

                  // Stop, and go back to where it came in. Left at the end, the
                  // frame fills with YouTube's grid of related videos — which is
                  // both someone else's design and an invitation to leave.
                  const ended = player.current;
                  if (ended) {
                    ended.seekTo(START_SECONDS, true);
                    ended.pauseVideo();
                    seek(total.current > 0 ? START_SECONDS / total.current : 0.4);
                  }
                }
              },
              // Blocked, offline, or embedding switched off on the video. The
              // card keeps its own behaviour and the artwork stays artwork.
              onError: () => {
                waiting.current = false;
                setPlaying(false);
                setStarted(false);
                window.clearInterval(ticker.current);
              },
            },
          });
        })
        .catch(() => {
          waiting.current = false;
          setPlaying(false);
        });
    };

    // requestIdleCallback isn't everywhere; a short timeout is close enough for
    // something whose only job is to be ready before anyone reaches for it.
    const idle = typeof window.requestIdleCallback === "function";
    const handle = idle
      ? window.requestIdleCallback(build, { timeout: 2500 })
      : window.setTimeout(build, 600);

    return () => {
      cancelled = true;
      if (idle) window.cancelIdleCallback?.(handle as number);
      else window.clearTimeout(handle as number);
      window.clearInterval(ticker.current);
      player.current?.destroy();
      player.current = null;
    };
  }, [seek, track]);

  const toggle = () => {
    const current = player.current;

    // Pressed before the embed finished building: remember it, and start the
    // moment it is ready rather than swallowing the press.
    if (!current) {
      waiting.current = true;
      setPlaying(true);
      return;
    }

    if (playing) current.pauseVideo();
    else current.playVideo();
  };

  return (
    <Card className="gap-4 p-5">
      <div aria-hidden="true" className="flex items-center justify-between">
        <IconButton icon={MagnifyingGlass} size={18} />
        <span className="text-[13px] font-semibold leading-4 text-ink">
          Library
        </span>
        <IconButton icon={User} size={18} />
      </div>

      {/* The artwork slot is where the video goes. A 16:9 frame in a 1.95:1 slot
          has to be oversized and cropped, since object-fit does nothing for an
          iframe. */}
      <div className="relative h-[132px] overflow-hidden rounded-[18px] bg-surface-2">
        {/* The frame takes no pointer input at all. `controls: 0` hides the bar
            but the video itself still answers a click, and hovering still pulls
            in YouTube's title and share overlays — so the transport is ours
            alone, and the artwork behaves like artwork. */}
        <div
          ref={mount}
          className="absolute inset-x-0 top-1/2 h-[146px] -translate-y-1/2 [&>iframe]:pointer-events-none [&>iframe]:size-full [&>iframe]:border-0"
        />
        {/* The artwork sits on top of the loaded-but-waiting embed and hides its
            poster frame, so the slot looks like a record sleeve rather than a
            video about to start. It clears once the track is running, and stays
            cleared through a pause — a paused frame is worth seeing; YouTube's
            thumbnail is not.

            The mark says where the track is coming from, which is worth saying
            plainly while the sleeve is up. It goes with the sleeve rather than
            sitting over the video: once the thing is playing, YouTube's own
            branding is right there in the frame. */}
        <span
          className={`
            absolute inset-0 flex items-center justify-center bg-surface-2
            transition-opacity duration-500
            ${started ? "pointer-events-none opacity-0" : "opacity-100"}
          `}
        >
          {/* Not a Glyph: that wrapper exists to play an animation on hover,
              and this one is a credit rather than something to point at. Muted,
              for the same reason — it should be legible and then ignorable. */}
          <YoutubeLogo size={52} trigger="none" className="text-ink-muted" />
        </span>
      </div>

      <div className="flex flex-col gap-0.5">
        <span className="text-base font-semibold leading-5 text-ink">
          Caroline
        </span>
        <span className="text-[13px] leading-4 text-ink-muted">
          Boy in Space
        </span>
      </div>

      {/* Real position once the embed is running; the 40% still it always was
          until then. Both the fill and the head read the same property, so the
          ticker sets one value rather than keeping two in step. */}
      <div ref={bar} aria-hidden="true" className="relative h-3 [--pos:40%]">
        <div className="absolute inset-x-0 top-1 h-[3px] rounded-full bg-surface-2" />
        <div className="absolute left-0 top-1 h-[3px] w-[var(--pos)] rounded-full bg-accent" />
        <div className="absolute top-0 left-[calc(var(--pos)-6px)] size-3 rounded-full bg-accent" />
      </div>

      <div className="flex items-center justify-between px-3">
        <span aria-hidden="true">
          <IconButton
            icon={Heart}
            size={24}
            onPress={() => setLiked((v) => !v)}
            fill={liked ? "currentColor" : "none"}
            className={liked ? "text-accent" : ""}
          />
        </span>
        {/* The one control in the fan that is real, so the one that is reachable:
            something has to be able to stop the music. */}
        <AcidButton
          icon={playing ? Pause : Play}
          onPress={toggle}
          label={playing ? "Pause Caroline by Boy in Space" : "Play Caroline by Boy in Space"}
          className="size-[58px] rounded-full"
        />
        <span aria-hidden="true">
          <IconButton icon={ShareNetwork} size={24} />
        </span>
      </div>

      {/* A wrapper rather than `display: contents`, which some engines drop from
          the accessibility tree — taking the aria-hidden with it. */}
      <div
        aria-hidden="true"
        className="flex items-start justify-between border-t border-line px-4 pt-3.5"
      >
        <Tab icon={House} active />
        <Tab icon={MagnifyingGlass} />
        <Tab icon={ChatCircle} />
        <Tab icon={Gear} />
      </div>
    </Card>
  );
}

function Checkout() {
  const [paid, setPaid] = React.useState(false);
  const timer = React.useRef<number | undefined>(undefined);

  React.useEffect(() => () => window.clearTimeout(timer.current), []);

  const pay = () => {
    setPaid(true);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setPaid(false), PAID_MS);
  };

  return (
    <Card className="gap-4 p-5">
      <div className="flex items-center gap-2.5">
        <Glyph icon={ShoppingCart} size={22} />
        <span className="flex-1 text-[15px] font-semibold leading-5 text-ink">
          Your cart
        </span>
        <span className="font-mono text-[11px] leading-[14px] text-ink-muted">
          3 ITEMS
        </span>
      </div>

      {/* The products are the icons — a set that can furnish a store page can
          furnish the store's stock too. */}
      <LineItem icon={Headphones} label="Studio cans" price="$180" />
      <LineItem icon={Camera} label="35mm lens" price="$420" />
      <LineItem icon={Microphone} label="USB mic" price="$95" />

      <RowButton
        icon={CreditCard}
        label="Visa ···· 4242"
        className="border-t border-line pt-3.5"
      />

      {/* Inert while confirmed: a second press would only stack another timer
          and reset the one already running. */}
      <AcidButton
        icon={paid ? CheckCircle : Wallet}
        size={18}
        onPress={pay}
        disabled={paid}
        className="h-12 gap-2.5 rounded-full"
      >
        <span className="text-[15px] font-semibold leading-5">
          {paid ? "Paid" : "Pay $695"}
        </span>
      </AcidButton>

      <div className="flex items-center gap-2.5">
        <Glyph icon={Envelope} size={16} />
        <span className="text-[13px] leading-4 text-ink-muted">
          {paid ? "Receipt sent to nadia@studio.co" : "Receipt to nadia@studio.co"}
        </span>
      </div>
    </Card>
  );
}

export function HeroCards() {
  return (
    <div className="relative -mb-10 w-[300px] shrink-0 lg:mb-0 lg:w-auto lg:flex-1 lg:pb-10">
      {/*
        Below lg only the player renders: three 300px cards want 800px of width,
        and a fan crushed into a phone is a pile. It keeps the tilt, and its
        bottom runs past the end of the header so the grid's top edge cuts it —
        tucked behind the directory rather than parked above it. The 3° is a
        degree shy of the desktop tilt because at 320px the wider bounding box
        would start losing corners.

        From lg up the three sit tilted and run off the right of the screen — the
        crop is the composition, not an accident, so the header clips them rather
        than letting them widen the page.

        The player, the tallest of the three, stays in flow and sets the height of
        the whole column; the other two are absolute against it. That keeps this
        out of the business of knowing how tall the fan is, which a fixed height
        would have to be re-guessed every time a row is added to a card.
      */}
      <div
        aria-hidden="true"
        className="hidden lg:absolute lg:left-0 lg:top-0 lg:block lg:-rotate-[7deg]"
      >
        <Forecast />
      </div>

      <div className="rotate-[3deg] lg:ml-[248px] lg:mt-16 lg:rotate-[4deg]">
        <Player />
      </div>

      <div
        aria-hidden="true"
        className="hidden lg:absolute lg:left-[496px] lg:top-[184px] lg:block lg:-rotate-[3deg]"
      >
        <Checkout />
      </div>
    </div>
  );
}
