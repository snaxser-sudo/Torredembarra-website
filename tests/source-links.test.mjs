import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import vm from "node:vm";

const script = readFileSync(new URL("../script.js", import.meta.url), "utf8");
const data = vm.runInNewContext(`${script}\n;({ SOURCES, SOURCE_CARDS })`, {
  localStorage: { getItem: () => null, setItem: () => {} },
  document: { addEventListener: () => {} },
  Map,
});

const sourceCardKeys = data.SOURCE_CARDS.map((card) => card.source);

assert.equal(
  data.SOURCES.excursionismeTorredembarra.url,
  "https://excursionismetorredembarra.com/",
  "Excursionisme Torredembarra should point to the requested URL"
);
assert.ok(sourceCardKeys.includes("excursionismeTorredembarra"), "sources section should link to Excursionisme Torredembarra");
assert.ok(!sourceCardKeys.includes("santaRosaliaPoster"), "sources section should not link to the Santa Rosalia poster");
assert.ok(!sourceCardKeys.includes("banderaTorredembarra"), "sources section should not link to the Torredembarra flag");
assert.ok(!sourceCardKeys.includes("escutTorredembarra"), "sources section should not link to the Torredembarra coat of arms");
