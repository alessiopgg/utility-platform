import fs from "node:fs";
import path from "node:path";

const dist = "dist";

const locales = [
  "en","es","pt-BR","de","fr","it",
  "ja","ar","id","tr","pl","ko","nl","vi"
];

const expectedToolPagesPerLocale = 429;
const expectedToolPages = 429 * 14;
const expectedHtmlPages = 6301;
const expectedSitemapUrls = 6300;

const failures = [];

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      return walk(full);
    }

    return entry.isFile() ? [full] : [];
  });
}

if (!fs.existsSync(dist)) {
  console.error("✗ dist non esiste. Esegui prima npm run build.");
  process.exit(1);
}

const files = walk(dist);
const htmlFiles = files.filter((f) => f.endsWith(".html"));

function relative(file) {
  return path.relative(dist, file).replaceAll("\\", "/");
}

function localeForToolPage(rel) {
  const p = rel.split("/");

  // English:
  // tools/category/tool/index.html
  if (
    p.length === 4 &&
    p[0] === "tools" &&
    p[3] === "index.html"
  ) {
    return "en";
  }

  // Localized:
  // locale/tools/category/tool/index.html
  if (
    p.length === 5 &&
    locales.includes(p[0]) &&
    p[1] === "tools" &&
    p[4] === "index.html"
  ) {
    return p[0];
  }

  return null;
}

const toolPages = htmlFiles
  .map((file) => ({
    file,
    rel: relative(file),
    locale: localeForToolPage(relative(file))
  }))
  .filter((x) => x.locale);

console.log("");
console.log("=== PAGINE HTML ===");

console.log("HTML totali:", htmlFiles.length);

if (htmlFiles.length !== expectedHtmlPages) {
  failures.push(
    `HTML totali: attesi ${expectedHtmlPages}, trovati ${htmlFiles.length}`
  );
}

console.log("");
console.log("=== TOOL PAGES PER LINGUA ===");

for (const locale of locales) {
  const pages = toolPages.filter((x) => x.locale === locale);

  console.log(
    locale.padEnd(6),
    `${pages.length}/${expectedToolPagesPerLocale}`
  );

  if (pages.length !== expectedToolPagesPerLocale) {
    failures.push(
      `${locale}: attese ${expectedToolPagesPerLocale} tool pages, trovate ${pages.length}`
    );
  }
}

if (toolPages.length !== expectedToolPages) {
  failures.push(
    `Tool pages totali: attese ${expectedToolPages}, trovate ${toolPages.length}`
  );
}

console.log("");
console.log("Tool pages totali:", toolPages.length);

console.log("");
console.log("=== CONTROLLO EDITORIAL / SEO / HREFLANG ===");

let missingEditorial = 0;
let badCanonical = 0;
let badLang = 0;
let badHreflang = 0;
let badArabicDir = 0;

for (const page of toolPages) {
  const html = fs.readFileSync(page.file, "utf8");

  if (!html.includes("tool-editorial-v2")) {
    missingEditorial++;
    failures.push(`Editorial mancante: ${page.rel}`);
  }

  if (
    !html.includes('rel="canonical"') ||
    !html.includes("https://utilitylake.com")
  ) {
    badCanonical++;
    failures.push(`Canonical errato/mancante: ${page.rel}`);
  }

  const langNeedle = `<html lang="${page.locale}"`;

  if (!html.includes(langNeedle)) {
    badLang++;
    failures.push(
      `html lang errato per ${page.rel} — atteso ${page.locale}`
    );
  }

  const hreflangCount =
    (html.match(/hreflang=/g) || []).length;

  // 14 lingue + x-default
  if (hreflangCount !== 15) {
    badHreflang++;
    failures.push(
      `hreflang ${page.rel}: attesi 15, trovati ${hreflangCount}`
    );
  }

  if (
    page.locale === "ar" &&
    !html.includes('dir="rtl"')
  ) {
    badArabicDir++;
    failures.push(`RTL mancante: ${page.rel}`);
  }
}

console.log("Editorial mancanti:", missingEditorial);
console.log("Canonical errati:", badCanonical);
console.log("HTML lang errati:", badLang);
console.log("Hreflang errati:", badHreflang);
console.log("RTL arabo errati:", badArabicDir);

console.log("");
console.log("=== DOMAIN CHECK ===");

let badSeoDomain = 0;

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, "utf8");
  const rel = relative(file);

  const seoTags = [
    ...html.matchAll(
      /<link[^>]+rel=["']canonical["'][^>]*>/gi
    ),
    ...html.matchAll(
      /<link[^>]+rel=["']alternate["'][^>]*>/gi
    ),
    ...html.matchAll(
      /<meta[^>]+property=["']og:url["'][^>]*>/gi
    )
  ].map((match) => match[0]);

  if (
    seoTags.some((tag) =>
      tag.includes("example.com")
    )
  ) {
    badSeoDomain++;
    failures.push(
      `example.com presente nei metadati SEO di ${rel}`
    );
  }
}

console.log(
  "Pagine con example.com nei metadati SEO:",
  badSeoDomain
);

console.log("");
console.log("=== SITEMAP ===");

const sitemapPath = path.join(dist, "sitemap-0.xml");

if (!fs.existsSync(sitemapPath)) {
  failures.push("dist/sitemap-0.xml mancante");
} else {
  const sitemap = fs.readFileSync(sitemapPath, "utf8");

  const locCount =
    (sitemap.match(/<url><loc>/g) || []).length;

  console.log("URL sitemap:", locCount);

  if (locCount !== expectedSitemapUrls) {
    failures.push(
      `Sitemap: attesi ${expectedSitemapUrls} URL, trovati ${locCount}`
    );
  }

  if (sitemap.includes("example.com")) {
    failures.push("example.com presente nella sitemap");
  }

  if (!sitemap.includes("https://utilitylake.com/")) {
    failures.push("utilitylake.com non trovato nella sitemap");
  }
}

console.log("");
console.log("=== RISULTATO ===");

if (failures.length) {
  console.error(
    `✗ QA FALLITO — ${failures.length} problemi`
  );

  for (const failure of failures.slice(0, 30)) {
    console.error(" -", failure);
  }

  if (failures.length > 30) {
    console.error(
      ` ... altri ${failures.length - 30} problemi`
    );
  }

  process.exit(1);
}

console.log("✓ 14/14 lingue");
console.log("✓ 429 tool per lingua");
console.log("✓ 6006 tool pages");
console.log("✓ editorial presente su tutte le tool pages");
console.log("✓ canonical UtilityLake");
console.log("✓ 15 hreflang per tool page");
console.log("✓ arabo RTL");
console.log("✓ nessun example.com nei metadati SEO");
console.log("✓ sitemap corretta");
console.log("");
console.log("✓ QA MULTILINGUA COMPLETATO CON SUCCESSO");

