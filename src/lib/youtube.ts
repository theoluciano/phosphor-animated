/**
 * YouTube's iframe embed API, typed and loaded once.
 *
 * Its own module because of what the script is: a `<script>` appended to the
 * document, a global the page can only have one of, and a `Window` augmentation
 * that applies project-wide. None of that is the business of whichever component
 * happens to be the first to want a player, and a second embed anywhere on the
 * site would otherwise either duplicate the loader or import it out of a hero.
 */

export type YouTubePlayer = {
  playVideo: () => void;
  pauseVideo: () => void;
  seekTo: (seconds: number, allowSeekAhead: boolean) => void;
  getCurrentTime: () => number;
  getDuration: () => number;
  getIframe: () => HTMLIFrameElement;
  destroy: () => void;
};

export type YouTubeApi = {
  Player: new (
    host: HTMLElement,
    options: {
      videoId: string;
      width?: string;
      height?: string;
      host?: string;
      playerVars?: Record<string, string | number>;
      events?: {
        onReady?: (event: { target: YouTubePlayer }) => void;
        onStateChange?: (event: { data: number }) => void;
        onError?: () => void;
      };
    },
  ) => YouTubePlayer;
  PlayerState: { ENDED: number; PLAYING: number; PAUSED: number };
};

declare global {
  interface Window {
    YT?: YouTubeApi;
    onYouTubeIframeAPIReady?: () => void;
  }
}

/**
 * Module scope rather than component state, so a remount doesn't add a second
 * <script>.
 */
let apiRequest: Promise<YouTubeApi> | null = null;

export function loadYouTubeApi(): Promise<YouTubeApi> {
  if (apiRequest) return apiRequest;

  apiRequest = new Promise<YouTubeApi>((resolve, reject) => {
    if (window.YT?.Player) {
      resolve(window.YT);
      return;
    }

    // The API calls exactly one global hook when it is ready, so chain rather
    // than clobber — something else on the page may be waiting on it too.
    const earlier = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      earlier?.();
      if (window.YT?.Player) resolve(window.YT);
      else reject(new Error("YouTube API loaded without a Player"));
    };

    const script = document.createElement("script");
    script.src = "https://www.youtube.com/iframe_api";
    script.async = true;
    script.onerror = () => reject(new Error("YouTube API blocked"));
    document.head.appendChild(script);
  });

  return apiRequest;
}
