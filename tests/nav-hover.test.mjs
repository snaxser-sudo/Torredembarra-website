import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const script = readFileSync(new URL("../script.js", import.meta.url), "utf8");
const styles = readFileSync(new URL("../styles.css", import.meta.url), "utf8");

assert.match(
  styles,
  /\.nav-links a:hover\s*\{[^}]*background:\s*oklch\(0\.64 0\.255 352 \/ 0\.1\);/s,
  "nav links should keep the pink hover state"
);
assert.match(
  styles,
  /\.nav-links a\[aria-current="location"\]\s*\{[^}]*background:\s*var\(--blue\);/s,
  "nav should visually mark the current section"
);
assert.match(styles, /scroll-snap-align:\s*center;/, "mobile nav items should be able to snap toward the center");
assert.match(styles, /scrollbar-width:\s*none;/, "mobile nav should hide the horizontal scrollbar chrome");
assert.match(script, /function initActiveNav\(/, "script should initialize current-section nav tracking");
assert.match(script, /function centerActiveNavLink\(/, "script should keep the active nav item visible");
assert.match(script, /IntersectionObserver/, "active nav tracking should use IntersectionObserver instead of scroll polling");
assert.match(script, /aria-current/, "active nav should expose the current section to assistive tech");
assert.doesNotMatch(
  script,
  /addEventListener\("scroll"/,
  "active nav tracking should not add a scroll listener"
);
