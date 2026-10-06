import fs from "node:fs";
import path from "node:path";

const bad = [
  ["Â©", "\u00c2\u00a9"],
  ["Â°", "\u00c2\u00b0"],
  ["Â²", "\u00c2\u00b2"],
  ["Â³", "\u00c2\u00b3"],
  ["â€”", "\u00e2\u20ac\u201d"],
  ["â€“", "\u00e2\u20ac\u201c"],
  ["â€™", "\u00e2\u20ac\u2122"],
  ["â€œ", "\u00e2\u20ac\u0153"],
  ["â†’", "\u00e2\u2020\u2019"],
  ["Ã ", "\u00c3\u00a0"],
  ["Ã¨", "\u00c3\u00a8"],
  ["Ã©", "\u00c3\u00a9"],
  ["Ã¬", "\u00c3\u00ac"],
  ["Ã²", "\u00c3\u00b2"],
  ["Ã¹", "\u00c3\u00b9"],
  ["replacement-char", "\ufffd"]
];

function walk(dir) {
  const out = [];

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);

    if (
      entry.name.endsWith(".bak") ||
      entry.name.endsWith(".old") ||
      entry.name.endsWith(".backup")
    ) continue;

    if (entry.isDirectory()) {
      out.push(...walk(full));
    } else if (entry.isFile()) {
      out.push(full);
    }
  }

  return out;
}

function auditFile(file) {
  let text;

  try {
    text = fs.readFileSync(file, "utf8");
  } catch {
    return [];
  }

  const lines = text.split(/\r?\n/);
  const hits = [];

  lines.forEach((line, index) => {
    for (const [label, value] of bad) {
      if (line.includes(value)) {
        hits.push({
          file,
          line: index + 1,
          label,
          text: line.trim().slice(0, 260)
        });
      }
    }
  });

  return hits;
}

console.log("\n=== SORGENTI ===");

const sourceHits = walk("src").flatMap(auditFile);

if (!sourceHits.length) {
  console.log("✓ Nessun mojibake noto nei file attivi di src.");
} else {
  for (const hit of sourceHits) {
    console.log(`${hit.file}:${hit.line}`);
    console.log(`  [${hit.label}] ${hit.text}`);
    console.log("");
  }
}

console.log("\n=== BUILD: PAGINA CAMPIONE ===");

const sample =
  "dist/it/tools/business/margin-calculator/index.html";

if (!fs.existsSync(sample)) {
  console.log("Pagina campione non trovata.");
  process.exit(0);
}

const buildHits = auditFile(sample);

if (!buildHits.length) {
  console.log("✓ Nessun mojibake noto nella pagina compilata.");
} else {
  for (const hit of buildHits) {
    console.log(`${hit.file}:${hit.line}`);
    console.log(`  [${hit.label}] ${hit.text}`);
    console.log("");
  }
}
