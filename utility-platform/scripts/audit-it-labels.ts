import catalog from "../src/data/catalog.json" with { type: "json" };

import { getCalculatorSpec } from "../src/engines/calculator/specs.ts";
import { getSimpleSpec } from "../src/engines/simple-registry.ts";
import { getFileSpec } from "../src/engines/file-registry.ts";
import { localizeLabel } from "../src/i18n/content.ts";

const suspicious = new Set([
  "revenue","cost","price","profit","margin","markup",
  "name","names","items","item","participants",
  "number","teams","groups","group",
  "foreground","background",
  "output","format","quality",
  "width","height","size","length","weight",
  "start","end","duration","speed","angle",
  "count","color","base",
  "minimum","maximum",
  "file","files","image","images","media",
  "random","result",
  "bar","bars",
  "volume","multiplier",
  "bitrate",
  "direction",
  "label",
  "text",
  "input",
  "value",
  "values",
  "current",
  "expected",
  "measured",
  "requested",
  "actual",
  "waste",
  "allowance",
  "density",
  "diameter",
  "hours",
  "rate",
  "power",
  "electricity",
  "columns",
  "gap",
  "radius",
  "opacity",
  "simulation"
]);

const allowed = new Set([
  "json","xml","yaml","csv","html","css","sql",
  "url","http","https","jwt","uuid","ulid",
  "md5","sha","rgb","hsl","cmyk","hex",
  "dpi","ppi","stl","svg","jpg","jpeg","png",
  "webp","heic","mp3","wav","aac","ogg","m4a",
  "mp4","gif","base64","ascii",
  "qr","barcode","wcag",
  "px","rem","vw","vh",
  "fps","kbps","mbps",
  "exif","xmp","iso",
  "ssid","wep","wpa",
  "cron","unix"
]);

const tools = catalog.tools ?? catalog;
const problems = [];

function getSpec(tool) {
  if (tool.engine === "calculator") {
    return getCalculatorSpec(tool.id);
  }

  return (
    getFileSpec(tool.engine, tool.id) ??
    getSimpleSpec(tool.engine, tool.id)
  );
}

function inspectLabel(tool, kind, original) {
  if (!original) return;

  const italian = localizeLabel("it", original);

  const words = italian
    .toLowerCase()
    .replace(/[^\p{L}\p{N}-]+/gu, " ")
    .split(/\s+/)
    .filter(Boolean);

  const hits = words.filter(word =>
    suspicious.has(word) && !allowed.has(word)
  );

  if (hits.length) {
    problems.push({
      id: tool.id,
      kind,
      original,
      italian,
      hits: [...new Set(hits)]
    });
  }
}

for (const tool of tools) {
  const spec = getSpec(tool);
  if (!spec) continue;

  for (const field of spec.fields ?? []) {
    inspectLabel(tool, "field", field.label);

    for (const option of field.options ?? []) {
      inspectLabel(tool, "option", option.label);
    }
  }
}

console.log("");
console.log("Audit label italiane");
console.log("====================");
console.log(`Tool totali:          ${tools.length}`);
console.log(`Label sospette:        ${problems.length}`);
console.log("");

for (const p of problems) {
  console.log(`${p.id}`);
  console.log(`  tipo: ${p.kind}`);
  console.log(`  EN:   ${p.original}`);
  console.log(`  IT:   ${p.italian}`);
  console.log(`  ->    ${p.hits.join(", ")}`);
  console.log("");
}
