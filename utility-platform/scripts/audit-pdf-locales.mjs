import fs from "node:fs";
import path from "node:path";

const locales = {
  es: {
    required: ["CÓMO FUNCIONA", "CONVIENE SABERLO"],
    forbidden: ["HOW IT WORKS", "GOOD TO KNOW"]
  },
  "pt-BR": {
    required: ["COMO FUNCIONA", "BOM SABER"],
    forbidden: ["HOW IT WORKS", "GOOD TO KNOW"]
  },
  de: {
    required: ["SO FUNKTIONIERT ES", "GUT ZU WISSEN"],
    forbidden: ["HOW IT WORKS", "GOOD TO KNOW"]
  },
  fr: {
    required: ["COMMENT ÇA FONCTIONNE", "BON À SAVOIR"],
    forbidden: ["HOW IT WORKS", "GOOD TO KNOW"]
  }
};

const catalog = JSON.parse(
  fs.readFileSync("src/data/catalog.json", "utf8")
);

const pdfTools = catalog.tools
  .filter((tool) => tool.category === "PDF Tools")
  .map((tool) => tool.id);

let errors = 0;
let checked = 0;

for (const [locale, rules] of Object.entries(locales)) {
  for (const toolId of pdfTools) {
    const file = path.join(
      "dist",
      locale,
      "tools",
      "pdf",
      toolId,
      "index.html"
    );

    checked++;

    if (!fs.existsSync(file)) {
      console.error(`MISSING  ${locale}  ${toolId}`);
      errors++;
      continue;
    }

    const html = fs.readFileSync(file, "utf8");

    for (const text of rules.required) {
      if (!html.includes(text)) {
        console.error(`MISSING TEXT  ${locale}  ${toolId}  -> ${text}`);
        errors++;
      }
    }

    for (const text of rules.forbidden) {
      if (html.includes(text)) {
        console.error(`EN FALLBACK  ${locale}  ${toolId}  -> ${text}`);
        errors++;
      }
    }

    if (/Â|â€|Ã.|ï¿½/.test(html)) {
      console.error(`MOJIBAKE  ${locale}  ${toolId}`);
      errors++;
    }
  }
}

console.log("");
console.log("PDF MULTILINGUAL QA");
console.log("===================");
console.log(`Pages checked: ${checked}`);
console.log(`Errors:        ${errors}`);

if (errors === 0) {
  console.log("✓ 100/100 PDF pages passed");
  process.exit(0);
}

process.exit(1);
