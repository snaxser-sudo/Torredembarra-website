import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const script = readFileSync(new URL("../script.js", import.meta.url), "utf8");

assert.match(script, /Последний маяк Испании/, "Russian lighthouse card should use the requested title");
assert.match(script, /план морских сигналов 1985-1989/, "Russian lighthouse card should include a short history note");
