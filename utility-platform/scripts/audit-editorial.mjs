import fs from "node:fs";
import path from "node:path";

const editorialDir = "src/i18n";

/* ============================================================
   REAL TOOL IDS FROM CATALOG
============================================================ */

const catalog = JSON.parse(
  fs.readFileSync("src/data/catalog.json", "utf8")
);

const realToolIds = new Set(
  catalog.tools.map((tool) => tool.id)
);

/* ============================================================
   EDITORIAL REGISTRY
============================================================ */

const registry = fs.readFileSync(
  path.join(editorialDir, "tool-editorial.ts"),
  "utf8"
);

/* ============================================================
   BATCH FILES
============================================================ */

const batchFiles = fs.readdirSync(editorialDir)
  .filter((name) => /^editorial-.*-batch\.ts$/.test(name))
  .sort();

const allBatchIds = new Set();
const perFile = [];

for (const name of batchFiles) {
  const source = fs.readFileSync(
    path.join(editorialDir, name),
    "utf8"
  );

  const ids = new Set();

  /*
    Cerca tutte le stringhe tra virgolette presenti nel file
    e conta solo quelle che corrispondono a veri tool ID
    presenti nel catalogo ufficiale.
  */
  for (const match of source.matchAll(
    /["']([^"'\\\r\n]+)["']/g
  )) {
    const candidate = match[1];

    if (realToolIds.has(candidate)) {
      ids.add(candidate);
      allBatchIds.add(candidate);
    }
  }

  perFile.push({
    name,
    ids
  });
}

/* ============================================================
   REVIEWED IDS
============================================================ */

const reviewedMatch = registry.match(
  /EDITORIAL_REVIEWED_TOOL_IDS = new Set<string>\(\[([\s\S]*?)\]\)/
);

const reviewedIds = reviewedMatch
  ? [...reviewedMatch[1].matchAll(/["']([^"']+)["']/g)]
      .map((m) => m[1])
      .filter((id) => realToolIds.has(id))
  : [];

/* ============================================================
   TOTAL
============================================================ */

const enriched = new Set([
  ...allBatchIds,
  ...reviewedIds
]);

const missing = [...realToolIds]
  .filter((id) => !enriched.has(id))
  .sort();

const coverage =
  (enriched.size / realToolIds.size * 100).toFixed(1);

/* ============================================================
   OUTPUT
============================================================ */

console.log("");
console.log("Editorial audit");
console.log("===============");
console.log("");
console.log("Catalog tools:        ", realToolIds.size);
console.log("Batch files:          ", batchFiles.length);
console.log("Batch pages:          ", allBatchIds.size);
console.log("Reviewed pages:       ", reviewedIds.length);
console.log("Total enriched:       ", enriched.size);
console.log("Coverage:             ", coverage + "%");
console.log("Still missing:        ", missing.length);

console.log("");
console.log("Per batch");
console.log("---------");

for (const { name, ids } of perFile) {
  console.log(
    name.padEnd(48),
    String(ids.size).padStart(3)
  );
}

console.log("");
console.log("Reviewed:", reviewedIds.join(", "));

console.log("");

if (missing.length > 0) {
  console.log("First missing tool IDs:");
  console.log(missing.slice(0, 25).join(", "));

  if (missing.length > 25) {
    console.log(`... and ${missing.length - 25} more`);
  }
}

console.log("");
