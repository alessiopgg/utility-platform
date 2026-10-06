import catalog from "../src/data/catalog.json" with { type: "json" };
import { toolName } from "../src/i18n/content.ts";

const suspicious = [
  "calculator",
  "generator",
  "checker",
  "counter",
  "viewer",
  "reader",
  "formatter",
  "validator",
  "encoder",
  "decoder",
  "parser",
  "resizer",
  "extractor",
  "analyzer",
  "picker",
  "changer",

  "margin",
  "markup",
  "profit",
  "revenue",
  "random",
  "team",
  "group",
  "wheel",
  "color",
  "contrast",
  "image",
  "video",
  "audio",
  "file",
  "size",
  "speed",
  "volume",
  "weight",
  "length",
  "width",
  "height",
  "average",
  "difference",
  "increase",
  "decrease",
  "growth",
  "discount",
  "price",
  "loan",
  "payment",
  "savings",
  "interest",
  "cost",
  "time",
  "date",
  "word",
  "character",
  "sentence",
  "paragraph",
  "sorter",
  "remover",
  "reverse",
  "rounding",
  "frequency",
  "unique",
  "duplicate",
  "converter",
  "cropper",
  "trimmer",
  "joiner",
  "merger",
  "splitter",
  "compressor"
];

const allowedTechnical = new Set([
  "pdf","json","xml","yaml","csv","html","css","sql",
  "jwt","uuid","ulid","md5","sha","regex","cron",
  "url","http","qr","barcode","rgb","hsl","cmyk",
  "hex","dpi","ppi","stl","svg","jpg","jpeg","png",
  "webp","heic","mp3","wav","aac","ogg","m4a","mp4",
  "gif","base64","ascii","unix","epoch","wcag",
  "roi","roas","cac","ltv","cagr","cpm","cpc","ctr",
  "audio","video","file","volume","parser","markup","bitrate","layer","duplicate"
]);

const tools = catalog.tools ?? catalog;

const problems = [];

for (const tool of tools) {
  const italian = toolName("it", tool);
  const normalized = italian
    .toLowerCase()
    .replace(/[^\p{L}\p{N}-]+/gu, " ");

  const words = normalized.split(/\s+/).filter(Boolean);

  const hits = words.filter(word =>
    suspicious.includes(word) &&
    !allowedTechnical.has(word)
  );

  if (hits.length) {
    problems.push({
      id: tool.id,
      original: tool.name,
      italian,
      suspicious: [...new Set(hits)].join(", ")
    });
  }
}

console.log("");
console.log("Audit nomi italiani");
console.log("====================");
console.log(`Tool totali:         ${tools.length}`);
console.log(`Nomi sospetti:       ${problems.length}`);
console.log(`Nomi senza flag:     ${tools.length - problems.length}`);
console.log("");

if (!problems.length) {
  console.log("✓ Nessun termine inglese sospetto trovato.");
  process.exit(0);
}

for (const item of problems) {
  console.log(`${item.id}`);
  console.log(`  EN: ${item.original}`);
  console.log(`  IT: ${item.italian}`);
  console.log(`  -> ${item.suspicious}`);
  console.log("");
}

