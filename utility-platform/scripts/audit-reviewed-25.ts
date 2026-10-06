import fs from "node:fs";
import path from "node:path";

import catalog from "../src/data/catalog.json" with { type: "json" };

import { hasCalculatorSpec } from "../src/engines/calculator/specs.ts";
import { simpleImplementedIds } from "../src/engines/simple-registry.ts";
import { fileImplementedIds } from "../src/engines/file-registry.ts";

import { isEditorialReviewed } from "../src/i18n/tool-editorial.ts";

const reviewedIds = [
  "merge-pdf",
  "compress-pdf",
  "split-pdf",
  "rotate-pdf",
  "reorder-pdf-pages",
  "pdf-text-extractor",

  "percentage-calculator",
  "margin-calculator",
  "compound-interest-calculator",
  "loan-payment-calculator",
  "concrete-calculator",

  "json-formatter",
  "json-validator",
  "csv-to-json",
  "regex-tester",
  "unix-timestamp-converter",

  "compress-image",
  "resize-image",
  "crop-image",
  "remove-exif-metadata",

  "url-qr-generator",
  "qr-reader-from-image",
  "color-contrast-checker",
  "temperature-converter",
  "word-counter"
];

const categoryConfig = {
  "Calculators — Math & Everyday": {
    slug: "math",
    engine: "calculator"
  },
  "Calculators — Business & Finance": {
    slug: "business",
    engine: "calculator"
  },
  "Calculators — Construction & DIY": {
    slug: "construction",
    engine: "calculator"
  },
  "Calculators — Photography & Creator": {
    slug: "creator-calculators",
    engine: "calculator"
  },
  "Text Tools": {
    slug: "text",
    engine: "text"
  },
  "Developer & Data Tools": {
    slug: "developer",
    engine: "structured-data"
  },
  "Encoding, Hash & ID Tools": {
    slug: "encoding",
    engine: "encoding"
  },
  "Random & Picker Tools": {
    slug: "random",
    engine: "random"
  },
  "Color & Design Tools": {
    slug: "color",
    engine: "color"
  },
  "Image Tools": {
    slug: "image",
    engine: "image"
  },
  "Web Asset Tools": {
    slug: "web",
    engine: "web-asset"
  },
  "QR & Barcode Tools": {
    slug: "qr-barcode",
    engine: "qr-barcode"
  },
  "PDF Tools": {
    slug: "pdf",
    engine: "pdf"
  },
  "Audio, Video & Subtitle Tools": {
    slug: "media",
    engine: "media"
  },
  "3D Printing & Maker Tools": {
    slug: "maker",
    engine: "maker"
  },
  "Unit & Technical Converters": {
    slug: "units",
    engine: "units"
  }
};

const simpleIds = simpleImplementedIds();
const fileIds = fileImplementedIds();

function isImplemented(id, engine) {
  if (engine === "calculator") {
    return hasCalculatorSpec(id);
  }

  return simpleIds.has(id) || fileIds.has(id);
}

const tools = catalog.tools ?? catalog;

const failures = [];
const warnings = [];

for (const id of reviewedIds) {
  const rawTool = tools.find(t => t.id === id);

  if (!rawTool) {
    failures.push(`${id}: non presente nel catalogo`);
    continue;
  }

  const config = categoryConfig[rawTool.category];

  if (!config) {
    failures.push(`${id}: categoria sconosciuta (${rawTool.category})`);
    continue;
  }

  if (!isImplemented(id, config.engine)) {
    failures.push(`${id}: non risulta implementato`);
  }

  if (!isEditorialReviewed(id)) {
    failures.push(`${id}: non risulta reviewed`);
  }

  const htmlPath = path.join(
    "dist",
    "it",
    "tools",
    config.slug,
    id,
    "index.html"
  );

  if (!fs.existsSync(htmlPath)) {
    failures.push(`${id}: pagina build non trovata -> ${htmlPath}`);
    continue;
  }

  const html = fs.readFileSync(htmlPath, "utf8");

  if (!html.includes('class="tool-editorial-v2"')) {
    failures.push(`${id}: componente editoriale non rilevato nella build`);
  }

  const mojibake = [
    "Ã",
    "Â",
    "â€™",
    "â€œ",
    "â€",
    "â†",
    "�"
  ];

  const badEncoding = mojibake.filter(x => html.includes(x));

  if (badEncoding.length) {
    failures.push(
      `${id}: possibile encoding rotto (${badEncoding.join(", ")})`
    );
  }

  if (
    html.includes("pagead2.googlesyndication.com") ||
    html.includes("adsbygoogle")
  ) {
    failures.push(`${id}: AdSense presente nella build`);
  }

  if (!html.includes("Funziona in locale")) {
    warnings.push(`${id}: trust message IT non trovato`);
  }
}

console.log("");
console.log("QA FINAL — 25 REVIEWED");
console.log("======================");
console.log(`Tool controllati: ${reviewedIds.length}`);
console.log(`Errori:            ${failures.length}`);
console.log(`Avvisi:            ${warnings.length}`);
console.log("");

if (failures.length) {
  console.log("ERRORI");
  console.log("------");

  for (const failure of failures) {
    console.log(`✗ ${failure}`);
  }

  console.log("");
}

if (warnings.length) {
  console.log("AVVISI");
  console.log("------");

  for (const warning of warnings) {
    console.log(`! ${warning}`);
  }

  console.log("");
}

if (!failures.length) {
  console.log(
    "✓ Tutte le 25 pagine reviewed hanno superato i controlli critici."
  );
}

if (!warnings.length) {
  console.log("✓ Nessun avviso.");
}
