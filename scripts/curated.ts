/**
 * The curated set.
 *
 * Chosen for how often they appear in real product UI and for whether they have
 * something to animate — an icon animates well when it depicts an action, a state
 * change, or a thing with moving parts. A static noun with no affordance (most
 * brand logos) is deliberately excluded: a spin or a pulse on it is noise.
 */
export type Curated = { name: string; category: string };

export const CATEGORIES = [
  "Essentials", "Navigation", "Communication", "Media", "Files",
  "Commerce", "Weather & Nature", "Devices", "Development", "Feedback",
] as const;

const group = (category: string, names: string[]): Curated[] =>
  names.map((name) => ({ name, category }));

export const CURATED: Curated[] = [
  // The icons nearly every app ships.
  ...group("Essentials", [
    "bell", "bell-ringing", "bell-slash", "heart", "star", "trash", "trash-simple",
    "gear", "gear-six", "house", "magnifying-glass", "user", "users", "plus", "minus",
    "x", "check", "check-circle", "x-circle", "eye", "eye-slash", "lock", "lock-open",
    "key", "shield-check", "bookmark-simple", "tag", "pencil-simple", "note-pencil",
    "copy", "clipboard", "link", "dots-three", "list", "sliders", "funnel",
  ]),

  // Direction, movement, place.
  ...group("Navigation", [
    "arrow-right", "arrow-left", "arrow-up", "arrow-down", "arrow-clockwise",
    "arrow-counter-clockwise", "caret-down", "caret-right", "arrow-square-out",
    "sign-out", "sign-in", "map-pin", "compass", "globe", "flag", "anchor",
  ]),

  ...group("Communication", [
    "envelope", "envelope-open", "paper-plane-tilt", "chat-circle", "chat-teardrop-dots",
    "phone", "phone-call", "at", "share-network", "hand-waving", "megaphone",
  ]),

  ...group("Media", [
    "play", "pause", "stop", "skip-forward", "skip-back", "shuffle", "repeat",
    "music-note", "headphones", "speaker-high", "speaker-x", "microphone",
    "microphone-slash", "camera", "image", "video-camera",
  ]),

  ...group("Files", [
    "folder", "folder-open", "file", "file-text", "files", "archive", "printer",
    "download-simple", "upload-simple", "cloud-arrow-up", "floppy-disk",
  ]),

  ...group("Commerce", [
    "shopping-cart", "shopping-bag", "credit-card", "currency-dollar", "wallet",
    "gift", "package", "truck", "receipt", "storefront",
  ]),

  ...group("Weather & Nature", [
    "sun", "moon", "cloud", "lightning", "fire", "drop", "leaf", "tree", "snowflake",
    "wind", "umbrella", "rainbow", "cow",
  ]),

  ...group("Devices", [
    "device-mobile", "laptop", "desktop", "keyboard", "mouse", "game-controller",
    "battery-full", "battery-charging", "wifi-high", "bluetooth", "power", "plug",
    "hard-drive",
  ]),

  ...group("Development", [
    "code", "terminal-window", "git-branch", "bug", "database", "cpu", "cube",
    "wrench", "hammer", "magic-wand", "rocket", "lightbulb", "brain", "sparkle",
  ]),

  ...group("Feedback", [
    "warning", "warning-circle", "info", "question", "thumbs-up", "thumbs-down",
    "smiley", "spinner", "circle-notch", "hourglass", "clock", "timer", "alarm",
    "confetti", "crown", "trophy", "target", "heartbeat", "chart-line", "chart-bar",
    "chart-pie-slice", "trend-up", "trend-down",
  ]),
];

const seen = new Set<string>();
export const ICONS: Curated[] = CURATED.filter((i) =>
  seen.has(i.name) ? false : (seen.add(i.name), true),
);
