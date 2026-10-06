import catalog from "../src/data/catalog.json" with { type: "json" };

import { getCalculatorSpec } from "../src/engines/calculator/specs.ts";
import { getSimpleSpec } from "../src/engines/simple-registry.ts";
import { getFileSpec } from "../src/engines/file-registry.ts";
import { localizeLabel } from "../src/i18n/content.ts";

const tools = catalog.tools ?? catalog;

const allowedExact = new Set([
  // formati / standard / acronimi
  "JSON","XML","YAML","CSV","HTML","CSS","SQL",
  "JWT","UUID","ULID","MD5",
  "SHA-1","SHA-256","SHA-512",
  "URL","HTTP","HTTPS",
  "RGB","HSL","CMYK","HEX",
  "DPI","PPI","STL","SVG",
  "JPG","JPEG","PNG","WebP","HEIC","HEIF",
  "MP3","WAV","AAC","OGG","M4A","MP4","GIF",
  "Base64","ASCII",
  "QR","WCAG",
  "EXIF","XMP",
  "WPA/WPA2","WEP",

  // unità / simboli / sigle
  "px","rem","vw","vh",
  "FPS","kbps","Mbps",
  "kg","g","m","cm","mm","L","mL",
  "°","%",

  // livelli QR
  "L","M","Q","H"
]);

function getSpec(tool) {
  if (tool.engine === "calculator") {
    return getCalculatorSpec(tool.id);
  }

  return (
    getFileSpec(tool.engine, tool.id) ??
    getSimpleSpec(tool.engine, tool.id)
  );
}

const occurrences = new Map();

function inspect(tool, kind, label) {
  if (!label || allowedExact.has(label)) return;

  const localized = localizeLabel("it", label);

  if (localized !== label) return;

  if (!occurrences.has(label)) {
    occurrences.set(label, []);
  }

  occurrences.get(label).push({
    id: tool.id,
    kind
  });
}

for (const tool of tools) {
  const spec = getSpec(tool);
  if (!spec) continue;

  for (const field of spec.fields ?? []) {
    inspect(tool, "field", field.label);

    for (const option of field.options ?? []) {
      inspect(tool, "option", option.label);
    }
  }
}

const rows = [...occurrences.entries()]
  .sort((a,b) => a[0].localeCompare(b[0]));

console.log("");
console.log("Audit label italiane non tradotte");
console.log("=================================");
console.log(`Label uniche invariate: ${rows.length}`);
console.log("");

for (const [label, uses] of rows) {
  console.log(label);
  console.log(
    "  usata in: " +
    uses.slice(0,5).map(x => `${x.id} (${x.kind})`).join(", ")
  );

  if (uses.length > 5) {
    console.log(`  ... e altre ${uses.length - 5}`);
  }

  console.log("");
}
