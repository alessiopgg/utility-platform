# Utility Platform — Definitive Product Specification 1.0
**Status:** Scope frozen for Release 1.0  
**Catalog target:** 429 distinct tools  
**Languages:** 14  
**Generated localized tool pages:** approximately 6,006 before category/legal pages  
**Primary operating principle:** build once, deploy once, touch code only for bugs, security or platform breakage.
## 1. Product mission

Build a global, privacy-first utility website containing a broad portfolio of evergreen calculators, converters, generators and local file-processing tools. The production site must not depend on a database, account system, paid API, AI API, scraping service or recurring human content operation for its core functionality.

The normal user journey is: **search → open tool → complete task → optionally use a related tool → leave**. Monetization is layered on top through advertising and optional affiliate placements without making the tool itself dependent on monetization infrastructure.
## 2. Non-negotiable product principles
- **Static-first:** all indexable pages are pre-rendered at build time.
- **Local-first:** files are processed in the browser whenever technically possible.
- **No mandatory backend:** core tools remain usable if every server-side function is disabled.
- **Evergreen:** no core tool may require live prices, sports feeds, laws, news, exchange rates or other continuously updated datasets.
- **No runtime translation API:** all localized copy is shipped with the build.
- **No user accounts:** no login, profile, cloud history or synchronization in Release 1.0.
- **No deceptive monetization:** no fake download buttons, forced redirects or ad-shaped controls.
- **Distinct utility pages:** no mass-generated doorway pages for trivial parameter variations.
- **Graceful degradation:** unsupported/heavy tasks fail clearly without breaking the rest of the site.
- **Frozen dependency graph:** exact package versions and lockfile are committed for reproducible builds.

## 3. Production stack

- **Framework:** Astro, static output.
- **Language:** TypeScript with strict settings.
- **Styling:** CSS variables + scoped/component CSS; avoid a runtime-heavy UI framework unless a specific tool benefits from one.
- **Interactivity:** small client islands/modules loaded only on tool pages that require them.
- **Hosting target:** Cloudflare Pages static hosting; deployment must also remain portable to any static host.
- **Build:** Node LTS, exact version documented; `npm ci && npm run build` must produce the deployable `dist/` directory.
- **Heavy processing:** Web Workers and WASM only when justified (PDF/media/STL), lazy loaded.
- **Source control:** Git with lockfile and deterministic CI checks.
## 4. Site architecture
```text
src/
  core/            registry, routing, locale, SEO, analytics, validation
  engines/         reusable execution engines
  tools/           per-tool definitions and thin tool-specific logic
  components/      reusable UI
  workers/         image/pdf/media/stl workers
  locales/         localized UI + localized tool copy
  pages/           generated locale/category/tool routes
  styles/          design tokens and global CSS
  tests/           unit/integration fixtures
public/            static icons, manifests, robots assets
scripts/           catalog validation, sitemap checks, QA reports
```

## 5. Engines
| Engine | Responsibility | Approx. tools served |
|---|---|---:|
| Calculator Engine | number/form inputs, formulas, unit systems, tables, optional charts | ~120 |
| Text Engine | string transforms, counts, sorting, dedupe, regex operations | ~30 |
| Structured Data Engine | JSON/YAML/XML/CSV parse-transform-serialize | ~35 |
| Encoding/Crypto Engine | encode/decode/hash/ID generation | ~20 |
| Random Engine | secure random, shuffle, sampling, grouping, wheels | ~25 |
| Color Engine | color conversion, mixing, palettes, contrast | ~25 |
| Image Engine | Canvas/ImageBitmap transforms and client-side export | ~35 |
| Metadata Engine | EXIF/XMP/ICC inspection and stripping | ~8 |
| Web Asset Engine | SVG/favicon/CSS/meta generators | ~25 |
| QR/Barcode Engine | generate/decode QR and common barcode formats | ~20 |
| PDF Engine | page operations, rendering, metadata, image interoperability | ~25 |
| Diff/Validator Engine | compare and validate text/structured formats | ~12 |
| Media Engine | FFmpeg WASM audio/video operations | ~25 |
| Subtitle Engine | parse/shift/convert/merge subtitle formats | ~5 |
| 3D/Maker Engine | STL inspection plus maker calculators | ~20 |
| Localization Engine | locale routing, Intl formatting, RTL, translated SEO/content | all pages |

## 6. Tool registry contract

Every tool is registered as typed data plus the smallest possible piece of tool-specific logic. The registry is the single source of truth for routing, categories, localization keys, related tools, engine loading, SEO metadata, privacy labels and QA status.

Required conceptual fields:

```ts
interface ToolDefinition {
  id: string;
  category: string;
  engine: EngineId;
  locales: LocaleId[];
  inputSchema: InputField[];
  execute: ToolExecutor;
  capabilities: {
    files?: boolean;
    localOnly?: boolean;
    download?: boolean;
    copy?: boolean;
    metricImperial?: boolean;
    heavyWorker?: boolean;
  };
  related: string[];
  seoKey: string;
  contentKey: string;
  tests: ToolTestVector[];
}
```
## 7. Localization
| Locale | Language | Direction |
|---|---|---|
| `en` | English | LTR |
| `es` | Español | LTR |
| `pt-BR` | Português (Brasil) | LTR |
| `de` | Deutsch | LTR |
| `fr` | Français | LTR |
| `it` | Italiano | LTR |
| `ja` | 日本語 | LTR |
| `ar` | العربية | RTL |
| `id` | Bahasa Indonesia | LTR |
| `tr` | Türkçe | LTR |
| `pl` | Polski | LTR |
| `ko` | 한국어 | LTR |
| `nl` | Nederlands | LTR |
| `vi` | Tiếng Việt | LTR |


Requirements:
- English is canonical/default locale; every tool exists in every Release 1.0 locale.
- Arabic receives true RTL layout using logical CSS properties, not a separate fork.
- `Intl.NumberFormat`, `Intl.DateTimeFormat` and locale-aware unit labels format outputs.
- Numeric input normalization accepts locale decimal separators and Arabic-Indic digits where applicable.
- Slugs, H1, title, description, explanatory copy and FAQ are localized, not mechanically translated at runtime.
- Every localized page declares correct `lang`, `dir`, canonical URL and reciprocal `hreflang` references including `x-default`.
- Locale switcher keeps the user on the equivalent tool whenever that route exists.
## 8. URL model

```text
/                                 default English homepage
/tools/{category}/{tool}/         English tool
/es/tools/{category}/{tool}/      Spanish equivalent
/ar/tools/{category}/{tool}/      Arabic equivalent
/{locale}/{category}/             localized category hub
/{locale}/about/
/{locale}/privacy/
/{locale}/terms/
/{locale}/contact/
```

Localized slugs may differ by language. Internal identifiers remain stable and never depend on display text.
## 9. Standard tool-page UX

Above the fold, in order:
1. Breadcrumb.
2. H1 + one-sentence value proposition.
3. Local-processing/privacy badge when applicable.
4. The actual tool interface immediately visible.
5. Primary result area.

Below the task:
6. Relevant ad slot placeholder.
7. Concise explanation / formula / supported formats.
8. Worked example when useful.
9. FAQ only when it adds real information.
10. Related tools cluster.
11. Secondary ad slot placeholder.

Requirements: keyboard usable, responsive from 320px upward, touch-friendly controls, no modal required to complete a core task, deterministic reset, clear unsupported-file and memory errors.
## 10. SEO requirements
- Unique title/H1/meta description per locale and tool.
- Static HTML containing meaningful explanatory content before JavaScript executes.
- Canonical + reciprocal hreflang graph.
- Generated XML sitemap index split by locale/category if required.
- Breadcrumb structured data where applicable.
- SoftwareApplication/WebApplication structured data only when semantically appropriate; never fabricate reviews or ratings.
- Internal linking based on real task adjacency, not arbitrary site-wide keyword blocks.
- No parameterized SEO landing pages for individual numeric values or file sizes.
- Robots rules keep development QA/admin routes and duplicate artifacts out of the index.
- 404 and locale fallback must not create soft-404 duplicate pages.

## 11. Privacy & security
- Files selected by the user are not uploaded by core tool code.
- No file contents are placed in analytics events.
- Object URLs are revoked and temporary buffers released after operations.
- Heavy parsers run in workers where feasible.
- File type is validated by content/signature when practical, not extension alone.
- Strict CSP compatible with required WASM/workers and ad provider once selected.
- No execution of user-supplied HTML/JS in the page origin; previews are escaped or sandboxed.
- Password tools use `crypto.getRandomValues` or equivalent secure browser randomness.
- Hash tools clearly distinguish checksum/hash utility from password-storage guidance.
- PDF unlock works only with a password supplied by the user; no password cracking feature.

## 12. Performance budget

- Category/home pages must ship no heavy tool engines.
- Calculator/text pages must not import PDF/image/media bundles.
- PDF/media/STL libraries are dynamically imported only after user intent or on the relevant tool route.
- Heavy processing must not block the main thread where a worker is practical.
- Images/icons are shared assets rather than duplicated per locale.
- Locale copy is compiled into the relevant static pages, avoiding a giant all-language runtime bundle.
- Release build must include a report of largest JS/WASM assets and page counts.
## 13. Analytics contract

The core website must work with analytics completely disabled. A provider adapter may emit only product-level events such as:

`page_view`, `tool_started`, `tool_completed`, `tool_error_code`, `download`, `copy_result`, `related_tool_clicked`, `locale_changed`.

Never send raw text input, file names, file data, JSON payloads, generated passwords, QR contents or other user material. Provider keys/IDs are environment configuration, not hard-coded throughout components.
## 14. Monetization readiness

Release 1.0 ships with reusable advertisement placeholders but does not make ad delivery part of tool execution. Ad integration must be swappable through one adapter/configuration point.

Rules:
- ads cannot mimic tool buttons;
- no interstitial is required to see the result;
- ads do not move the primary controls after page load;
- affiliate blocks, if introduced, are contextual and clearly separated from calculated results;
- consent functionality is provider/region configurable without rewriting tool pages.
## 15. Testing & automatic QA
- Unit tests for every reusable mathematical/parser/transform primitive.
- At least one normal test vector and one boundary/error vector per tool.
- Cross-locale route generation test: every tool × every Release 1.0 locale resolves.
- Hreflang reciprocal-link validator.
- Unique metadata validator.
- Broken-related-tool link validator.
- Sitemap URL count and duplicate detector.
- RTL visual smoke tests for global layout plus representative calculator, file and code-editor pages.
- Mobile/desktop browser smoke tests for representative engines.
- File fixtures remain small and synthetic; no copyrighted test corpus is required.
- Production build fails if registry entries are incomplete or QA status is false.

## 16. Definition of Done — Release 1.0
- All 429 catalog tools implemented and discoverable.
- All 14 locales generated for every tool.
- All tool registry validation and automated tests passing.
- No mandatory runtime API, database or authentication dependency.
- Production static build completes reproducibly from a clean clone.
- Cloudflare-compatible deployment folder produced.
- Sitemap, robots, canonical and hreflang validation passing.
- Privacy, Terms, About and Contact pages localized.
- Ad/analytics adapters disabled safely when IDs are absent.
- No known high-severity dependency vulnerability at release time.
- Catalog/QA report generated as part of the release.
- Release archive and deployment README included.

## 17. Explicitly excluded from Release 1.0
- AI/API-backed generation, OCR cloud, live exchange rates, stock/crypto prices, sports/news/live data, social-media downloaders, scraping tools, user accounts, cloud file history, server-side Office rendering, file hosting, collaboration, subscriptions requiring entitlement storage.

## 18. Release catalog

### Calculators — Math & Everyday (30)
1. Percentage Calculator
2. Percentage Increase Calculator
3. Percentage Decrease Calculator
4. Percentage Difference Calculator
5. Reverse Percentage Calculator
6. Fraction Calculator
7. Fraction to Decimal
8. Decimal to Fraction
9. Ratio Calculator
10. Proportion Calculator
11. Average Calculator
12. Weighted Average Calculator
13. Median Calculator
14. Mode Calculator
15. Standard Deviation Calculator
16. Rule of Three Calculator
17. Scientific Notation Converter
18. Square Root Calculator
19. Exponent Calculator
20. Logarithm Calculator
21. Factorial Calculator
22. GCD Calculator
23. LCM Calculator
24. Prime Number Checker
25. Prime Factorization Calculator
26. Rounding Calculator
27. Significant Figures Calculator
28. Percentage Error Calculator
29. Absolute Difference Calculator
30. Range Calculator

### Calculators — Business & Finance (30)
1. Margin Calculator
2. Markup Calculator
3. Profit Calculator
4. Break-even Calculator
5. ROI Calculator
6. ROAS Calculator
7. CAC Calculator
8. LTV Calculator
9. Conversion Rate Calculator
10. Churn Rate Calculator
11. Growth Rate Calculator
12. CAGR Calculator
13. Simple Interest Calculator
14. Compound Interest Calculator
15. Loan Payment Calculator
16. Amortization Calculator
17. Savings Goal Calculator
18. Discount Calculator
19. Sale Price Calculator
20. Price Per Unit Calculator
21. CPM Calculator
22. CPC Calculator
23. CTR Calculator
24. Revenue Calculator
25. Profit Margin Calculator
26. Inventory Turnover Calculator
27. Burn Rate Calculator
28. Runway Calculator
29. Commission Calculator
30. Unit Economics Calculator

### Calculators — Construction & DIY (40)
1. Concrete Calculator
2. Cement Calculator
3. Brick Calculator
4. Concrete Block Calculator
5. Tile Calculator
6. Flooring Calculator
7. Hardwood Calculator
8. Laminate Calculator
9. Carpet Calculator
10. Paint Calculator
11. Wallpaper Calculator
12. Drywall Calculator
13. Plaster Calculator
14. Gravel Calculator
15. Sand Calculator
16. Mulch Calculator
17. Soil Calculator
18. Asphalt Calculator
19. Paver Calculator
20. Stone Calculator
21. Roof Pitch Calculator
22. Roof Area Calculator
23. Rafter Length Calculator
24. Stair Calculator
25. Deck Board Calculator
26. Deck Material Calculator
27. Fence Calculator
28. Post Spacing Calculator
29. Stud Calculator
30. Lumber Calculator
31. Board Foot Calculator
32. Insulation Calculator
33. Gutter Calculator
34. Concrete Slab Calculator
35. Concrete Footing Calculator
36. Retaining Wall Calculator
37. Driveway Material Calculator
38. Pool Volume Calculator
39. Pond Volume Calculator
40. Room Area Calculator

### Calculators — Photography & Creator (24)
1. DPI Calculator
2. PPI Calculator
3. Print Size Calculator
4. Megapixel Calculator
5. Sensor Crop Factor Calculator
6. Equivalent Focal Length Calculator
7. Depth of Field Calculator
8. Hyperfocal Distance Calculator
9. Exposure Calculator
10. Shutter Speed Calculator
11. Long Exposure Calculator
12. ND Filter Calculator
13. Field of View Calculator
14. Image Resolution Calculator
15. Print Resolution Checker
16. Aspect Ratio Calculator
17. Aspect Ratio Converter
18. Video Bitrate Calculator
19. Video File Size Calculator
20. Audio File Size Calculator
21. Timelapse Storage Calculator
22. Timelapse Interval Calculator
23. Storage Capacity Calculator
24. RAW Storage Calculator

### Text Tools (30)
1. Word Counter
2. Character Counter
3. Sentence Counter
4. Paragraph Counter
5. Reading Time Calculator
6. Speaking Time Calculator
7. Uppercase Converter
8. Lowercase Converter
9. Title Case Converter
10. Sentence Case Converter
11. Camel Case Converter
12. Snake Case Converter
13. Kebab Case Converter
14. Remove Duplicate Lines
15. Sort Lines
16. Reverse Text
17. Reverse Lines
18. Remove Empty Lines
19. Remove Extra Spaces
20. Trim Lines
21. Find and Replace
22. Text Diff
23. Remove Line Breaks
24. Add Line Numbers
25. Randomize Lines
26. Alphabetize List
27. Word Frequency Counter
28. Unique Word Counter
29. Duplicate Word Finder
30. Text to Slug

### Developer & Data Tools (35)
1. JSON Formatter
2. JSON Beautifier
3. JSON Minifier
4. JSON Validator
5. JSON Viewer
6. JSON to CSV
7. CSV to JSON
8. JSON to XML
9. XML to JSON
10. JSON to YAML
11. YAML to JSON
12. JSON Sorter
13. JSON Escape
14. JSON Unescape
15. JSON Diff
16. HTML Formatter
17. HTML Minifier
18. CSS Formatter
19. CSS Minifier
20. JavaScript Formatter
21. SQL Formatter
22. Markdown to HTML
23. HTML to Markdown
24. Regex Tester
25. Regex Escape
26. Cron Expression Parser
27. Unix Timestamp Converter
28. Epoch Generator
29. CSV Formatter
30. CSV Validator
31. YAML Validator
32. XML Validator
33. URL Parser
34. Query String Parser
35. HTTP Header Parser

### Encoding, Hash & ID Tools (20)
1. Base64 Encoder
2. Base64 Decoder
3. URL Encoder
4. URL Decoder
5. HTML Entity Encoder
6. HTML Entity Decoder
7. JWT Decoder
8. UUID Generator
9. ULID Generator
10. MD5 Generator
11. SHA-1 Generator
12. SHA-256 Generator
13. SHA-512 Generator
14. Random Token Generator
15. Hex to Text
16. Text to Hex
17. Binary to Text
18. Text to Binary
19. ASCII to Text
20. Text to ASCII

### Random & Picker Tools (24)
1. Random Number Generator
2. Random Name Picker
3. Random Wheel
4. Random Team Generator
5. Random Group Generator
6. Random List Picker
7. Random Letter Generator
8. Random Word Generator
9. Coin Flip
10. Dice Roller
11. Yes or No Generator
12. Random Date Generator
13. Random Time Generator
14. Random Password Generator
15. Random UUID Generator
16. Random Pair Generator
17. Tournament Pairing Generator
18. Secret Santa Generator
19. Classroom Student Picker
20. Random Order Generator
21. Lottery Number Generator
22. Bingo Number Generator
23. Decision Wheel
24. Random Sequence Generator

### Color & Design Tools (25)
1. Color Picker
2. Color Palette Generator
3. Palette From Image
4. Random Color Generator
5. Gradient Generator
6. CSS Gradient Generator
7. HEX to RGB
8. RGB to HEX
9. HEX to HSL
10. HSL to HEX
11. RGB to HSL
12. CMYK to RGB
13. RGB to CMYK
14. Color Contrast Checker
15. WCAG Contrast Calculator
16. Complementary Color Generator
17. Analogous Color Generator
18. Triadic Color Generator
19. Color Shades Generator
20. Color Tints Generator
21. Color Mixer
22. Brand Palette Generator
23. CSS Color Generator
24. Image Average Color
25. Color Blindness Preview

### Image Tools (35)
1. Compress Image
2. Resize Image
3. Crop Image
4. Rotate Image
5. Flip Image
6. JPG to PNG
7. PNG to JPG
8. WebP to JPG
9. WebP to PNG
10. JPG to WebP
11. PNG to WebP
12. HEIC to JPG
13. SVG to PNG
14. SVG to JPG
15. Image to Base64
16. Base64 to Image
17. Remove EXIF Metadata
18. EXIF Viewer
19. Change Image DPI
20. Image Dimensions Checker
21. Image File Size Estimator
22. Add Image Border
23. Round Image Corners
24. Grayscale Image
25. Image Opacity Tool
26. Pixelate Image
27. Blur Image
28. Image Color Picker
29. Extract Colors From Image
30. Batch Image Resizer
31. Profile Picture Cropper
32. YouTube Thumbnail Resizer
33. Instagram Image Resizer
34. Instagram Story Resizer
35. OpenGraph Image Resizer

### Web Asset Tools (25)
1. Favicon Generator
2. Image to Favicon
3. Favicon Checker
4. ICO to PNG
5. PNG to ICO
6. SVG Optimizer
7. SVG Viewer
8. SVG to Data URI
9. Data URI to Image
10. Placeholder Image Generator
11. Web Manifest Generator
12. Robots.txt Generator
13. Sitemap XML Generator
14. Meta Tag Generator
15. OpenGraph Tag Generator
16. Twitter Card Generator
17. Schema Markup Generator
18. CSS Box Shadow Generator
19. Border Radius Generator
20. CSS Clamp Calculator
21. REM to PX
22. PX to REM
23. Viewport Unit Calculator
24. CSS Triangle Generator
25. CSS Grid Generator

### QR & Barcode Tools (21)
1. URL QR Generator
2. Text QR Generator
3. Wi-Fi QR Generator
4. Email QR Generator
5. Phone QR Generator
6. SMS QR Generator
7. WhatsApp QR Generator
8. vCard QR Generator
9. Location QR Generator
10. Calendar Event QR Generator
11. QR Color Customizer
12. QR With Logo
13. QR Reader From Image
14. Barcode Generator
15. Code 128 Generator
16. EAN-13 Generator
17. EAN-8 Generator
18. UPC-A Generator
19. Code 39 Generator
20. ISBN Barcode Generator
21. Barcode Reader

### PDF Tools (25)
1. Merge PDF
2. Split PDF
3. Rotate PDF
4. Delete PDF Pages
5. Extract PDF Pages
6. Reorder PDF Pages
7. Images to PDF
8. JPG to PDF
9. PNG to PDF
10. PDF to JPG
11. PDF to PNG
12. Compress PDF
13. Add PDF Page Numbers
14. Add PDF Watermark
15. Remove PDF Metadata
16. PDF Metadata Viewer
17. PDF Page Count
18. PDF Size Analyzer
19. Crop PDF
20. Protect PDF With Password
21. Unlock PDF With Known Password
22. Combine Images and PDF
23. PDF Page Size Converter
24. Grayscale PDF
25. PDF Text Extractor

### Audio, Video & Subtitle Tools (25)
1. MP3 to WAV
2. WAV to MP3
3. M4A to MP3
4. OGG to MP3
5. AAC to MP3
6. Audio Trimmer
7. Audio Cutter
8. Audio Joiner
9. Change Audio Volume
10. Stereo to Mono
11. Extract Audio From Video
12. MP4 to MP3
13. Video Trimmer
14. Video Cropper
15. Video Rotator
16. Mute Video
17. GIF to MP4
18. MP4 to GIF
19. Video Speed Changer
20. Audio Bitrate Converter
21. Video Bitrate Converter
22. SRT to VTT
23. VTT to SRT
24. Subtitle Shift Tool
25. Subtitle Merger

### 3D Printing & Maker Tools (20)
1. STL Viewer
2. STL Dimensions Checker
3. STL Volume Calculator
4. Filament Length Calculator
5. Filament Weight Calculator
6. Filament Cost Calculator
7. 3D Print Cost Calculator
8. Print Time Cost Calculator
9. Resin Volume Calculator
10. Resin Cost Calculator
11. Layer Height Calculator
12. Steps per mm Calculator
13. Flow Rate Calculator
14. Extrusion Multiplier Calculator
15. E-steps Calculator
16. Nozzle Flow Calculator
17. Model Scale Calculator
18. Support Angle Calculator
19. Infill Material Estimator
20. Filament Remaining Calculator

### Unit & Technical Converters (20)
1. Length Converter
2. Area Converter
3. Volume Converter
4. Weight Converter
5. Temperature Converter
6. Speed Converter
7. Pressure Converter
8. Energy Converter
9. Power Converter
10. Torque Converter
11. Density Converter
12. Fuel Economy Converter
13. Data Storage Converter
14. Data Transfer Rate Converter
15. Angle Converter
16. Time Converter
17. Frequency Converter
18. Force Converter
19. Acceleration Converter
20. Cooking Measurement Converter

## 19. Implementation order (internal only; not a staged product launch)

The public release remains one complete Release 1.0. Internally, implementation should be ordered to maximize code reuse and catch architectural mistakes early:

1. Core platform + localization + registry + QA.
2. Calculator, Text, Structured Data, Encoding, Random, Color engines.
3. Image + Metadata + Web Asset engines.
4. QR/Barcode + PDF engines.
5. Media + Subtitle + STL/Maker engines.
6. Full catalog completion, localization QA and production optimization.
7. Final static build, deployment smoke test and release archive.
## 20. Operational model after launch

Expected normal operation requires no code changes. The owner may periodically inspect traffic/monetization dashboards, but the product does not rely on publishing new tools or content. Code changes are reserved for browser/platform breakage, security issues, dependency bugs, legal/consent integration changes, or defects discovered in an existing tool.
