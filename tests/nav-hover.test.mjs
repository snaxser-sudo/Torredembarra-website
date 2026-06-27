import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const script = readFileSync(new URL("../script.js", import.meta.url), "utf8");
const styles = readFileSync(new URL("../styles.css", import.meta.url), "utf8");

assert.match(
  styles,
  /\.nav-links a:hover\s*\{[^}]*background:\s*oklch\(0\.64 0\.255 352 \/ 0\.1\);/s,
  "nav links should keep the pink hover state"
);
assert.doesNotMatch(
  styles,
  /\.nav-links a\.is-active|\.nav-links a\[aria-current="location"\]/,
  "nav links should not have a persistent active visual state"
);
assert.doesNotMatch(
  script,
  /function updateActiveNav\(|function initActiveNav\(|aria-current|hashchange/,
  "script should not persistently highlight nav links on click or hash changes"
);
