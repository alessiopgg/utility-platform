import type { LocaleId } from '../core/types.ts';
import type { ToolEditorial } from './tool-editorial.ts';
import { toolName, categoryName } from './content.ts';

type RestLocale =
  | 'ja'
  | 'ar'
  | 'id'
  | 'tr'
  | 'pl'
  | 'ko'
  | 'nl'
  | 'vi';

type Group =
  | 'calculator'
  | 'converter'
  | 'generator'
  | 'text'
  | 'formatter'
  | 'media';

type Row = {
  id: string;
  name: string;
  category: string;
};

const rows: Row[] = [
  {
    "id": "percentage-calculator",
    "name": "Percentage Calculator",
    "category": "Calculators — Math & Everyday"
  },
  {
    "id": "percentage-increase-calculator",
    "name": "Percentage Increase Calculator",
    "category": "Calculators — Math & Everyday"
  },
  {
    "id": "percentage-decrease-calculator",
    "name": "Percentage Decrease Calculator",
    "category": "Calculators — Math & Everyday"
  },
  {
    "id": "percentage-difference-calculator",
    "name": "Percentage Difference Calculator",
    "category": "Calculators — Math & Everyday"
  },
  {
    "id": "reverse-percentage-calculator",
    "name": "Reverse Percentage Calculator",
    "category": "Calculators — Math & Everyday"
  },
  {
    "id": "fraction-calculator",
    "name": "Fraction Calculator",
    "category": "Calculators — Math & Everyday"
  },
  {
    "id": "fraction-to-decimal",
    "name": "Fraction to Decimal",
    "category": "Calculators — Math & Everyday"
  },
  {
    "id": "decimal-to-fraction",
    "name": "Decimal to Fraction",
    "category": "Calculators — Math & Everyday"
  },
  {
    "id": "ratio-calculator",
    "name": "Ratio Calculator",
    "category": "Calculators — Math & Everyday"
  },
  {
    "id": "proportion-calculator",
    "name": "Proportion Calculator",
    "category": "Calculators — Math & Everyday"
  },
  {
    "id": "average-calculator",
    "name": "Average Calculator",
    "category": "Calculators — Math & Everyday"
  },
  {
    "id": "weighted-average-calculator",
    "name": "Weighted Average Calculator",
    "category": "Calculators — Math & Everyday"
  },
  {
    "id": "median-calculator",
    "name": "Median Calculator",
    "category": "Calculators — Math & Everyday"
  },
  {
    "id": "mode-calculator",
    "name": "Mode Calculator",
    "category": "Calculators — Math & Everyday"
  },
  {
    "id": "standard-deviation-calculator",
    "name": "Standard Deviation Calculator",
    "category": "Calculators — Math & Everyday"
  },
  {
    "id": "rule-of-three-calculator",
    "name": "Rule of Three Calculator",
    "category": "Calculators — Math & Everyday"
  },
  {
    "id": "scientific-notation-converter",
    "name": "Scientific Notation Converter",
    "category": "Calculators — Math & Everyday"
  },
  {
    "id": "square-root-calculator",
    "name": "Square Root Calculator",
    "category": "Calculators — Math & Everyday"
  },
  {
    "id": "exponent-calculator",
    "name": "Exponent Calculator",
    "category": "Calculators — Math & Everyday"
  },
  {
    "id": "logarithm-calculator",
    "name": "Logarithm Calculator",
    "category": "Calculators — Math & Everyday"
  },
  {
    "id": "factorial-calculator",
    "name": "Factorial Calculator",
    "category": "Calculators — Math & Everyday"
  },
  {
    "id": "gcd-calculator",
    "name": "GCD Calculator",
    "category": "Calculators — Math & Everyday"
  },
  {
    "id": "lcm-calculator",
    "name": "LCM Calculator",
    "category": "Calculators — Math & Everyday"
  },
  {
    "id": "prime-number-checker",
    "name": "Prime Number Checker",
    "category": "Calculators — Math & Everyday"
  },
  {
    "id": "prime-factorization-calculator",
    "name": "Prime Factorization Calculator",
    "category": "Calculators — Math & Everyday"
  },
  {
    "id": "rounding-calculator",
    "name": "Rounding Calculator",
    "category": "Calculators — Math & Everyday"
  },
  {
    "id": "significant-figures-calculator",
    "name": "Significant Figures Calculator",
    "category": "Calculators — Math & Everyday"
  },
  {
    "id": "percentage-error-calculator",
    "name": "Percentage Error Calculator",
    "category": "Calculators — Math & Everyday"
  },
  {
    "id": "absolute-difference-calculator",
    "name": "Absolute Difference Calculator",
    "category": "Calculators — Math & Everyday"
  },
  {
    "id": "range-calculator",
    "name": "Range Calculator",
    "category": "Calculators — Math & Everyday"
  },
  {
    "id": "margin-calculator",
    "name": "Margin Calculator",
    "category": "Calculators — Business & Finance"
  },
  {
    "id": "markup-calculator",
    "name": "Markup Calculator",
    "category": "Calculators — Business & Finance"
  },
  {
    "id": "profit-calculator",
    "name": "Profit Calculator",
    "category": "Calculators — Business & Finance"
  },
  {
    "id": "break-even-calculator",
    "name": "Break-even Calculator",
    "category": "Calculators — Business & Finance"
  },
  {
    "id": "roi-calculator",
    "name": "ROI Calculator",
    "category": "Calculators — Business & Finance"
  },
  {
    "id": "roas-calculator",
    "name": "ROAS Calculator",
    "category": "Calculators — Business & Finance"
  },
  {
    "id": "cac-calculator",
    "name": "CAC Calculator",
    "category": "Calculators — Business & Finance"
  },
  {
    "id": "ltv-calculator",
    "name": "LTV Calculator",
    "category": "Calculators — Business & Finance"
  },
  {
    "id": "conversion-rate-calculator",
    "name": "Conversion Rate Calculator",
    "category": "Calculators — Business & Finance"
  },
  {
    "id": "churn-rate-calculator",
    "name": "Churn Rate Calculator",
    "category": "Calculators — Business & Finance"
  },
  {
    "id": "growth-rate-calculator",
    "name": "Growth Rate Calculator",
    "category": "Calculators — Business & Finance"
  },
  {
    "id": "cagr-calculator",
    "name": "CAGR Calculator",
    "category": "Calculators — Business & Finance"
  },
  {
    "id": "simple-interest-calculator",
    "name": "Simple Interest Calculator",
    "category": "Calculators — Business & Finance"
  },
  {
    "id": "compound-interest-calculator",
    "name": "Compound Interest Calculator",
    "category": "Calculators — Business & Finance"
  },
  {
    "id": "loan-payment-calculator",
    "name": "Loan Payment Calculator",
    "category": "Calculators — Business & Finance"
  },
  {
    "id": "amortization-calculator",
    "name": "Amortization Calculator",
    "category": "Calculators — Business & Finance"
  },
  {
    "id": "savings-goal-calculator",
    "name": "Savings Goal Calculator",
    "category": "Calculators — Business & Finance"
  },
  {
    "id": "discount-calculator",
    "name": "Discount Calculator",
    "category": "Calculators — Business & Finance"
  },
  {
    "id": "sale-price-calculator",
    "name": "Sale Price Calculator",
    "category": "Calculators — Business & Finance"
  },
  {
    "id": "price-per-unit-calculator",
    "name": "Price Per Unit Calculator",
    "category": "Calculators — Business & Finance"
  },
  {
    "id": "cpm-calculator",
    "name": "CPM Calculator",
    "category": "Calculators — Business & Finance"
  },
  {
    "id": "cpc-calculator",
    "name": "CPC Calculator",
    "category": "Calculators — Business & Finance"
  },
  {
    "id": "ctr-calculator",
    "name": "CTR Calculator",
    "category": "Calculators — Business & Finance"
  },
  {
    "id": "revenue-calculator",
    "name": "Revenue Calculator",
    "category": "Calculators — Business & Finance"
  },
  {
    "id": "profit-margin-calculator",
    "name": "Profit Margin Calculator",
    "category": "Calculators — Business & Finance"
  },
  {
    "id": "inventory-turnover-calculator",
    "name": "Inventory Turnover Calculator",
    "category": "Calculators — Business & Finance"
  },
  {
    "id": "burn-rate-calculator",
    "name": "Burn Rate Calculator",
    "category": "Calculators — Business & Finance"
  },
  {
    "id": "runway-calculator",
    "name": "Runway Calculator",
    "category": "Calculators — Business & Finance"
  },
  {
    "id": "commission-calculator",
    "name": "Commission Calculator",
    "category": "Calculators — Business & Finance"
  },
  {
    "id": "unit-economics-calculator",
    "name": "Unit Economics Calculator",
    "category": "Calculators — Business & Finance"
  },
  {
    "id": "concrete-calculator",
    "name": "Concrete Calculator",
    "category": "Calculators — Construction & DIY"
  },
  {
    "id": "cement-calculator",
    "name": "Cement Calculator",
    "category": "Calculators — Construction & DIY"
  },
  {
    "id": "brick-calculator",
    "name": "Brick Calculator",
    "category": "Calculators — Construction & DIY"
  },
  {
    "id": "concrete-block-calculator",
    "name": "Concrete Block Calculator",
    "category": "Calculators — Construction & DIY"
  },
  {
    "id": "tile-calculator",
    "name": "Tile Calculator",
    "category": "Calculators — Construction & DIY"
  },
  {
    "id": "flooring-calculator",
    "name": "Flooring Calculator",
    "category": "Calculators — Construction & DIY"
  },
  {
    "id": "hardwood-calculator",
    "name": "Hardwood Calculator",
    "category": "Calculators — Construction & DIY"
  },
  {
    "id": "laminate-calculator",
    "name": "Laminate Calculator",
    "category": "Calculators — Construction & DIY"
  },
  {
    "id": "carpet-calculator",
    "name": "Carpet Calculator",
    "category": "Calculators — Construction & DIY"
  },
  {
    "id": "paint-calculator",
    "name": "Paint Calculator",
    "category": "Calculators — Construction & DIY"
  },
  {
    "id": "wallpaper-calculator",
    "name": "Wallpaper Calculator",
    "category": "Calculators — Construction & DIY"
  },
  {
    "id": "drywall-calculator",
    "name": "Drywall Calculator",
    "category": "Calculators — Construction & DIY"
  },
  {
    "id": "plaster-calculator",
    "name": "Plaster Calculator",
    "category": "Calculators — Construction & DIY"
  },
  {
    "id": "gravel-calculator",
    "name": "Gravel Calculator",
    "category": "Calculators — Construction & DIY"
  },
  {
    "id": "sand-calculator",
    "name": "Sand Calculator",
    "category": "Calculators — Construction & DIY"
  },
  {
    "id": "mulch-calculator",
    "name": "Mulch Calculator",
    "category": "Calculators — Construction & DIY"
  },
  {
    "id": "soil-calculator",
    "name": "Soil Calculator",
    "category": "Calculators — Construction & DIY"
  },
  {
    "id": "asphalt-calculator",
    "name": "Asphalt Calculator",
    "category": "Calculators — Construction & DIY"
  },
  {
    "id": "paver-calculator",
    "name": "Paver Calculator",
    "category": "Calculators — Construction & DIY"
  },
  {
    "id": "stone-calculator",
    "name": "Stone Calculator",
    "category": "Calculators — Construction & DIY"
  },
  {
    "id": "roof-pitch-calculator",
    "name": "Roof Pitch Calculator",
    "category": "Calculators — Construction & DIY"
  },
  {
    "id": "roof-area-calculator",
    "name": "Roof Area Calculator",
    "category": "Calculators — Construction & DIY"
  },
  {
    "id": "rafter-length-calculator",
    "name": "Rafter Length Calculator",
    "category": "Calculators — Construction & DIY"
  },
  {
    "id": "stair-calculator",
    "name": "Stair Calculator",
    "category": "Calculators — Construction & DIY"
  },
  {
    "id": "deck-board-calculator",
    "name": "Deck Board Calculator",
    "category": "Calculators — Construction & DIY"
  },
  {
    "id": "deck-material-calculator",
    "name": "Deck Material Calculator",
    "category": "Calculators — Construction & DIY"
  },
  {
    "id": "fence-calculator",
    "name": "Fence Calculator",
    "category": "Calculators — Construction & DIY"
  },
  {
    "id": "post-spacing-calculator",
    "name": "Post Spacing Calculator",
    "category": "Calculators — Construction & DIY"
  },
  {
    "id": "stud-calculator",
    "name": "Stud Calculator",
    "category": "Calculators — Construction & DIY"
  },
  {
    "id": "lumber-calculator",
    "name": "Lumber Calculator",
    "category": "Calculators — Construction & DIY"
  },
  {
    "id": "board-foot-calculator",
    "name": "Board Foot Calculator",
    "category": "Calculators — Construction & DIY"
  },
  {
    "id": "insulation-calculator",
    "name": "Insulation Calculator",
    "category": "Calculators — Construction & DIY"
  },
  {
    "id": "gutter-calculator",
    "name": "Gutter Calculator",
    "category": "Calculators — Construction & DIY"
  },
  {
    "id": "concrete-slab-calculator",
    "name": "Concrete Slab Calculator",
    "category": "Calculators — Construction & DIY"
  },
  {
    "id": "concrete-footing-calculator",
    "name": "Concrete Footing Calculator",
    "category": "Calculators — Construction & DIY"
  },
  {
    "id": "retaining-wall-calculator",
    "name": "Retaining Wall Calculator",
    "category": "Calculators — Construction & DIY"
  },
  {
    "id": "driveway-material-calculator",
    "name": "Driveway Material Calculator",
    "category": "Calculators — Construction & DIY"
  },
  {
    "id": "pool-volume-calculator",
    "name": "Pool Volume Calculator",
    "category": "Calculators — Construction & DIY"
  },
  {
    "id": "pond-volume-calculator",
    "name": "Pond Volume Calculator",
    "category": "Calculators — Construction & DIY"
  },
  {
    "id": "room-area-calculator",
    "name": "Room Area Calculator",
    "category": "Calculators — Construction & DIY"
  },
  {
    "id": "dpi-calculator",
    "name": "DPI Calculator",
    "category": "Calculators — Photography & Creator"
  },
  {
    "id": "ppi-calculator",
    "name": "PPI Calculator",
    "category": "Calculators — Photography & Creator"
  },
  {
    "id": "print-size-calculator",
    "name": "Print Size Calculator",
    "category": "Calculators — Photography & Creator"
  },
  {
    "id": "megapixel-calculator",
    "name": "Megapixel Calculator",
    "category": "Calculators — Photography & Creator"
  },
  {
    "id": "sensor-crop-factor-calculator",
    "name": "Sensor Crop Factor Calculator",
    "category": "Calculators — Photography & Creator"
  },
  {
    "id": "equivalent-focal-length-calculator",
    "name": "Equivalent Focal Length Calculator",
    "category": "Calculators — Photography & Creator"
  },
  {
    "id": "depth-of-field-calculator",
    "name": "Depth of Field Calculator",
    "category": "Calculators — Photography & Creator"
  },
  {
    "id": "hyperfocal-distance-calculator",
    "name": "Hyperfocal Distance Calculator",
    "category": "Calculators — Photography & Creator"
  },
  {
    "id": "exposure-calculator",
    "name": "Exposure Calculator",
    "category": "Calculators — Photography & Creator"
  },
  {
    "id": "shutter-speed-calculator",
    "name": "Shutter Speed Calculator",
    "category": "Calculators — Photography & Creator"
  },
  {
    "id": "long-exposure-calculator",
    "name": "Long Exposure Calculator",
    "category": "Calculators — Photography & Creator"
  },
  {
    "id": "nd-filter-calculator",
    "name": "ND Filter Calculator",
    "category": "Calculators — Photography & Creator"
  },
  {
    "id": "field-of-view-calculator",
    "name": "Field of View Calculator",
    "category": "Calculators — Photography & Creator"
  },
  {
    "id": "image-resolution-calculator",
    "name": "Image Resolution Calculator",
    "category": "Calculators — Photography & Creator"
  },
  {
    "id": "print-resolution-checker",
    "name": "Print Resolution Checker",
    "category": "Calculators — Photography & Creator"
  },
  {
    "id": "aspect-ratio-calculator",
    "name": "Aspect Ratio Calculator",
    "category": "Calculators — Photography & Creator"
  },
  {
    "id": "aspect-ratio-converter",
    "name": "Aspect Ratio Converter",
    "category": "Calculators — Photography & Creator"
  },
  {
    "id": "video-bitrate-calculator",
    "name": "Video Bitrate Calculator",
    "category": "Calculators — Photography & Creator"
  },
  {
    "id": "video-file-size-calculator",
    "name": "Video File Size Calculator",
    "category": "Calculators — Photography & Creator"
  },
  {
    "id": "audio-file-size-calculator",
    "name": "Audio File Size Calculator",
    "category": "Calculators — Photography & Creator"
  },
  {
    "id": "timelapse-storage-calculator",
    "name": "Timelapse Storage Calculator",
    "category": "Calculators — Photography & Creator"
  },
  {
    "id": "timelapse-interval-calculator",
    "name": "Timelapse Interval Calculator",
    "category": "Calculators — Photography & Creator"
  },
  {
    "id": "storage-capacity-calculator",
    "name": "Storage Capacity Calculator",
    "category": "Calculators — Photography & Creator"
  },
  {
    "id": "raw-storage-calculator",
    "name": "RAW Storage Calculator",
    "category": "Calculators — Photography & Creator"
  },
  {
    "id": "word-counter",
    "name": "Word Counter",
    "category": "Text Tools"
  },
  {
    "id": "character-counter",
    "name": "Character Counter",
    "category": "Text Tools"
  },
  {
    "id": "sentence-counter",
    "name": "Sentence Counter",
    "category": "Text Tools"
  },
  {
    "id": "paragraph-counter",
    "name": "Paragraph Counter",
    "category": "Text Tools"
  },
  {
    "id": "reading-time-calculator",
    "name": "Reading Time Calculator",
    "category": "Text Tools"
  },
  {
    "id": "speaking-time-calculator",
    "name": "Speaking Time Calculator",
    "category": "Text Tools"
  },
  {
    "id": "uppercase-converter",
    "name": "Uppercase Converter",
    "category": "Text Tools"
  },
  {
    "id": "lowercase-converter",
    "name": "Lowercase Converter",
    "category": "Text Tools"
  },
  {
    "id": "title-case-converter",
    "name": "Title Case Converter",
    "category": "Text Tools"
  },
  {
    "id": "sentence-case-converter",
    "name": "Sentence Case Converter",
    "category": "Text Tools"
  },
  {
    "id": "camel-case-converter",
    "name": "Camel Case Converter",
    "category": "Text Tools"
  },
  {
    "id": "snake-case-converter",
    "name": "Snake Case Converter",
    "category": "Text Tools"
  },
  {
    "id": "kebab-case-converter",
    "name": "Kebab Case Converter",
    "category": "Text Tools"
  },
  {
    "id": "remove-duplicate-lines",
    "name": "Remove Duplicate Lines",
    "category": "Text Tools"
  },
  {
    "id": "sort-lines",
    "name": "Sort Lines",
    "category": "Text Tools"
  },
  {
    "id": "reverse-text",
    "name": "Reverse Text",
    "category": "Text Tools"
  },
  {
    "id": "reverse-lines",
    "name": "Reverse Lines",
    "category": "Text Tools"
  },
  {
    "id": "remove-empty-lines",
    "name": "Remove Empty Lines",
    "category": "Text Tools"
  },
  {
    "id": "remove-extra-spaces",
    "name": "Remove Extra Spaces",
    "category": "Text Tools"
  },
  {
    "id": "trim-lines",
    "name": "Trim Lines",
    "category": "Text Tools"
  },
  {
    "id": "find-and-replace",
    "name": "Find and Replace",
    "category": "Text Tools"
  },
  {
    "id": "text-diff",
    "name": "Text Diff",
    "category": "Text Tools"
  },
  {
    "id": "remove-line-breaks",
    "name": "Remove Line Breaks",
    "category": "Text Tools"
  },
  {
    "id": "add-line-numbers",
    "name": "Add Line Numbers",
    "category": "Text Tools"
  },
  {
    "id": "randomize-lines",
    "name": "Randomize Lines",
    "category": "Text Tools"
  },
  {
    "id": "alphabetize-list",
    "name": "Alphabetize List",
    "category": "Text Tools"
  },
  {
    "id": "word-frequency-counter",
    "name": "Word Frequency Counter",
    "category": "Text Tools"
  },
  {
    "id": "unique-word-counter",
    "name": "Unique Word Counter",
    "category": "Text Tools"
  },
  {
    "id": "duplicate-word-finder",
    "name": "Duplicate Word Finder",
    "category": "Text Tools"
  },
  {
    "id": "text-to-slug",
    "name": "Text to Slug",
    "category": "Text Tools"
  },
  {
    "id": "json-formatter",
    "name": "JSON Formatter",
    "category": "Developer & Data Tools"
  },
  {
    "id": "json-beautifier",
    "name": "JSON Beautifier",
    "category": "Developer & Data Tools"
  },
  {
    "id": "json-minifier",
    "name": "JSON Minifier",
    "category": "Developer & Data Tools"
  },
  {
    "id": "json-validator",
    "name": "JSON Validator",
    "category": "Developer & Data Tools"
  },
  {
    "id": "json-viewer",
    "name": "JSON Viewer",
    "category": "Developer & Data Tools"
  },
  {
    "id": "json-to-csv",
    "name": "JSON to CSV",
    "category": "Developer & Data Tools"
  },
  {
    "id": "csv-to-json",
    "name": "CSV to JSON",
    "category": "Developer & Data Tools"
  },
  {
    "id": "json-to-xml",
    "name": "JSON to XML",
    "category": "Developer & Data Tools"
  },
  {
    "id": "xml-to-json",
    "name": "XML to JSON",
    "category": "Developer & Data Tools"
  },
  {
    "id": "json-to-yaml",
    "name": "JSON to YAML",
    "category": "Developer & Data Tools"
  },
  {
    "id": "yaml-to-json",
    "name": "YAML to JSON",
    "category": "Developer & Data Tools"
  },
  {
    "id": "json-sorter",
    "name": "JSON Sorter",
    "category": "Developer & Data Tools"
  },
  {
    "id": "json-escape",
    "name": "JSON Escape",
    "category": "Developer & Data Tools"
  },
  {
    "id": "json-unescape",
    "name": "JSON Unescape",
    "category": "Developer & Data Tools"
  },
  {
    "id": "json-diff",
    "name": "JSON Diff",
    "category": "Developer & Data Tools"
  },
  {
    "id": "html-formatter",
    "name": "HTML Formatter",
    "category": "Developer & Data Tools"
  },
  {
    "id": "html-minifier",
    "name": "HTML Minifier",
    "category": "Developer & Data Tools"
  },
  {
    "id": "css-formatter",
    "name": "CSS Formatter",
    "category": "Developer & Data Tools"
  },
  {
    "id": "css-minifier",
    "name": "CSS Minifier",
    "category": "Developer & Data Tools"
  },
  {
    "id": "javascript-formatter",
    "name": "JavaScript Formatter",
    "category": "Developer & Data Tools"
  },
  {
    "id": "sql-formatter",
    "name": "SQL Formatter",
    "category": "Developer & Data Tools"
  },
  {
    "id": "markdown-to-html",
    "name": "Markdown to HTML",
    "category": "Developer & Data Tools"
  },
  {
    "id": "html-to-markdown",
    "name": "HTML to Markdown",
    "category": "Developer & Data Tools"
  },
  {
    "id": "regex-tester",
    "name": "Regex Tester",
    "category": "Developer & Data Tools"
  },
  {
    "id": "regex-escape",
    "name": "Regex Escape",
    "category": "Developer & Data Tools"
  },
  {
    "id": "cron-expression-parser",
    "name": "Cron Expression Parser",
    "category": "Developer & Data Tools"
  },
  {
    "id": "unix-timestamp-converter",
    "name": "Unix Timestamp Converter",
    "category": "Developer & Data Tools"
  },
  {
    "id": "epoch-generator",
    "name": "Epoch Generator",
    "category": "Developer & Data Tools"
  },
  {
    "id": "csv-formatter",
    "name": "CSV Formatter",
    "category": "Developer & Data Tools"
  },
  {
    "id": "csv-validator",
    "name": "CSV Validator",
    "category": "Developer & Data Tools"
  },
  {
    "id": "yaml-validator",
    "name": "YAML Validator",
    "category": "Developer & Data Tools"
  },
  {
    "id": "xml-validator",
    "name": "XML Validator",
    "category": "Developer & Data Tools"
  },
  {
    "id": "url-parser",
    "name": "URL Parser",
    "category": "Developer & Data Tools"
  },
  {
    "id": "query-string-parser",
    "name": "Query String Parser",
    "category": "Developer & Data Tools"
  },
  {
    "id": "http-header-parser",
    "name": "HTTP Header Parser",
    "category": "Developer & Data Tools"
  },
  {
    "id": "base64-encoder",
    "name": "Base64 Encoder",
    "category": "Encoding, Hash & ID Tools"
  },
  {
    "id": "base64-decoder",
    "name": "Base64 Decoder",
    "category": "Encoding, Hash & ID Tools"
  },
  {
    "id": "url-encoder",
    "name": "URL Encoder",
    "category": "Encoding, Hash & ID Tools"
  },
  {
    "id": "url-decoder",
    "name": "URL Decoder",
    "category": "Encoding, Hash & ID Tools"
  },
  {
    "id": "html-entity-encoder",
    "name": "HTML Entity Encoder",
    "category": "Encoding, Hash & ID Tools"
  },
  {
    "id": "html-entity-decoder",
    "name": "HTML Entity Decoder",
    "category": "Encoding, Hash & ID Tools"
  },
  {
    "id": "jwt-decoder",
    "name": "JWT Decoder",
    "category": "Encoding, Hash & ID Tools"
  },
  {
    "id": "uuid-generator",
    "name": "UUID Generator",
    "category": "Encoding, Hash & ID Tools"
  },
  {
    "id": "ulid-generator",
    "name": "ULID Generator",
    "category": "Encoding, Hash & ID Tools"
  },
  {
    "id": "md5-generator",
    "name": "MD5 Generator",
    "category": "Encoding, Hash & ID Tools"
  },
  {
    "id": "sha-1-generator",
    "name": "SHA-1 Generator",
    "category": "Encoding, Hash & ID Tools"
  },
  {
    "id": "sha-256-generator",
    "name": "SHA-256 Generator",
    "category": "Encoding, Hash & ID Tools"
  },
  {
    "id": "sha-512-generator",
    "name": "SHA-512 Generator",
    "category": "Encoding, Hash & ID Tools"
  },
  {
    "id": "random-token-generator",
    "name": "Random Token Generator",
    "category": "Encoding, Hash & ID Tools"
  },
  {
    "id": "hex-to-text",
    "name": "Hex to Text",
    "category": "Encoding, Hash & ID Tools"
  },
  {
    "id": "text-to-hex",
    "name": "Text to Hex",
    "category": "Encoding, Hash & ID Tools"
  },
  {
    "id": "binary-to-text",
    "name": "Binary to Text",
    "category": "Encoding, Hash & ID Tools"
  },
  {
    "id": "text-to-binary",
    "name": "Text to Binary",
    "category": "Encoding, Hash & ID Tools"
  },
  {
    "id": "ascii-to-text",
    "name": "ASCII to Text",
    "category": "Encoding, Hash & ID Tools"
  },
  {
    "id": "text-to-ascii",
    "name": "Text to ASCII",
    "category": "Encoding, Hash & ID Tools"
  },
  {
    "id": "random-number-generator",
    "name": "Random Number Generator",
    "category": "Random & Picker Tools"
  },
  {
    "id": "random-name-picker",
    "name": "Random Name Picker",
    "category": "Random & Picker Tools"
  },
  {
    "id": "random-wheel",
    "name": "Random Wheel",
    "category": "Random & Picker Tools"
  },
  {
    "id": "random-team-generator",
    "name": "Random Team Generator",
    "category": "Random & Picker Tools"
  },
  {
    "id": "random-group-generator",
    "name": "Random Group Generator",
    "category": "Random & Picker Tools"
  },
  {
    "id": "random-list-picker",
    "name": "Random List Picker",
    "category": "Random & Picker Tools"
  },
  {
    "id": "random-letter-generator",
    "name": "Random Letter Generator",
    "category": "Random & Picker Tools"
  },
  {
    "id": "random-word-generator",
    "name": "Random Word Generator",
    "category": "Random & Picker Tools"
  },
  {
    "id": "coin-flip",
    "name": "Coin Flip",
    "category": "Random & Picker Tools"
  },
  {
    "id": "dice-roller",
    "name": "Dice Roller",
    "category": "Random & Picker Tools"
  },
  {
    "id": "yes-or-no-generator",
    "name": "Yes or No Generator",
    "category": "Random & Picker Tools"
  },
  {
    "id": "random-date-generator",
    "name": "Random Date Generator",
    "category": "Random & Picker Tools"
  },
  {
    "id": "random-time-generator",
    "name": "Random Time Generator",
    "category": "Random & Picker Tools"
  },
  {
    "id": "random-password-generator",
    "name": "Random Password Generator",
    "category": "Random & Picker Tools"
  },
  {
    "id": "random-uuid-generator",
    "name": "Random UUID Generator",
    "category": "Random & Picker Tools"
  },
  {
    "id": "random-pair-generator",
    "name": "Random Pair Generator",
    "category": "Random & Picker Tools"
  },
  {
    "id": "tournament-pairing-generator",
    "name": "Tournament Pairing Generator",
    "category": "Random & Picker Tools"
  },
  {
    "id": "secret-santa-generator",
    "name": "Secret Santa Generator",
    "category": "Random & Picker Tools"
  },
  {
    "id": "classroom-student-picker",
    "name": "Classroom Student Picker",
    "category": "Random & Picker Tools"
  },
  {
    "id": "random-order-generator",
    "name": "Random Order Generator",
    "category": "Random & Picker Tools"
  },
  {
    "id": "lottery-number-generator",
    "name": "Lottery Number Generator",
    "category": "Random & Picker Tools"
  },
  {
    "id": "bingo-number-generator",
    "name": "Bingo Number Generator",
    "category": "Random & Picker Tools"
  },
  {
    "id": "decision-wheel",
    "name": "Decision Wheel",
    "category": "Random & Picker Tools"
  },
  {
    "id": "random-sequence-generator",
    "name": "Random Sequence Generator",
    "category": "Random & Picker Tools"
  },
  {
    "id": "color-picker",
    "name": "Color Picker",
    "category": "Color & Design Tools"
  },
  {
    "id": "color-palette-generator",
    "name": "Color Palette Generator",
    "category": "Color & Design Tools"
  },
  {
    "id": "palette-from-image",
    "name": "Palette From Image",
    "category": "Color & Design Tools"
  },
  {
    "id": "random-color-generator",
    "name": "Random Color Generator",
    "category": "Color & Design Tools"
  },
  {
    "id": "gradient-generator",
    "name": "Gradient Generator",
    "category": "Color & Design Tools"
  },
  {
    "id": "css-gradient-generator",
    "name": "CSS Gradient Generator",
    "category": "Color & Design Tools"
  },
  {
    "id": "hex-to-rgb",
    "name": "HEX to RGB",
    "category": "Color & Design Tools"
  },
  {
    "id": "rgb-to-hex",
    "name": "RGB to HEX",
    "category": "Color & Design Tools"
  },
  {
    "id": "hex-to-hsl",
    "name": "HEX to HSL",
    "category": "Color & Design Tools"
  },
  {
    "id": "hsl-to-hex",
    "name": "HSL to HEX",
    "category": "Color & Design Tools"
  },
  {
    "id": "rgb-to-hsl",
    "name": "RGB to HSL",
    "category": "Color & Design Tools"
  },
  {
    "id": "cmyk-to-rgb",
    "name": "CMYK to RGB",
    "category": "Color & Design Tools"
  },
  {
    "id": "rgb-to-cmyk",
    "name": "RGB to CMYK",
    "category": "Color & Design Tools"
  },
  {
    "id": "color-contrast-checker",
    "name": "Color Contrast Checker",
    "category": "Color & Design Tools"
  },
  {
    "id": "wcag-contrast-calculator",
    "name": "WCAG Contrast Calculator",
    "category": "Color & Design Tools"
  },
  {
    "id": "complementary-color-generator",
    "name": "Complementary Color Generator",
    "category": "Color & Design Tools"
  },
  {
    "id": "analogous-color-generator",
    "name": "Analogous Color Generator",
    "category": "Color & Design Tools"
  },
  {
    "id": "triadic-color-generator",
    "name": "Triadic Color Generator",
    "category": "Color & Design Tools"
  },
  {
    "id": "color-shades-generator",
    "name": "Color Shades Generator",
    "category": "Color & Design Tools"
  },
  {
    "id": "color-tints-generator",
    "name": "Color Tints Generator",
    "category": "Color & Design Tools"
  },
  {
    "id": "color-mixer",
    "name": "Color Mixer",
    "category": "Color & Design Tools"
  },
  {
    "id": "brand-palette-generator",
    "name": "Brand Palette Generator",
    "category": "Color & Design Tools"
  },
  {
    "id": "css-color-generator",
    "name": "CSS Color Generator",
    "category": "Color & Design Tools"
  },
  {
    "id": "image-average-color",
    "name": "Image Average Color",
    "category": "Color & Design Tools"
  },
  {
    "id": "color-blindness-preview",
    "name": "Color Blindness Preview",
    "category": "Color & Design Tools"
  },
  {
    "id": "compress-image",
    "name": "Compress Image",
    "category": "Image Tools"
  },
  {
    "id": "resize-image",
    "name": "Resize Image",
    "category": "Image Tools"
  },
  {
    "id": "crop-image",
    "name": "Crop Image",
    "category": "Image Tools"
  },
  {
    "id": "rotate-image",
    "name": "Rotate Image",
    "category": "Image Tools"
  },
  {
    "id": "flip-image",
    "name": "Flip Image",
    "category": "Image Tools"
  },
  {
    "id": "jpg-to-png",
    "name": "JPG to PNG",
    "category": "Image Tools"
  },
  {
    "id": "png-to-jpg",
    "name": "PNG to JPG",
    "category": "Image Tools"
  },
  {
    "id": "webp-to-jpg",
    "name": "WebP to JPG",
    "category": "Image Tools"
  },
  {
    "id": "webp-to-png",
    "name": "WebP to PNG",
    "category": "Image Tools"
  },
  {
    "id": "jpg-to-webp",
    "name": "JPG to WebP",
    "category": "Image Tools"
  },
  {
    "id": "png-to-webp",
    "name": "PNG to WebP",
    "category": "Image Tools"
  },
  {
    "id": "heic-to-jpg",
    "name": "HEIC to JPG",
    "category": "Image Tools"
  },
  {
    "id": "svg-to-png",
    "name": "SVG to PNG",
    "category": "Image Tools"
  },
  {
    "id": "svg-to-jpg",
    "name": "SVG to JPG",
    "category": "Image Tools"
  },
  {
    "id": "image-to-base64",
    "name": "Image to Base64",
    "category": "Image Tools"
  },
  {
    "id": "base64-to-image",
    "name": "Base64 to Image",
    "category": "Image Tools"
  },
  {
    "id": "remove-exif-metadata",
    "name": "Remove EXIF Metadata",
    "category": "Image Tools"
  },
  {
    "id": "exif-viewer",
    "name": "EXIF Viewer",
    "category": "Image Tools"
  },
  {
    "id": "change-image-dpi",
    "name": "Change Image DPI",
    "category": "Image Tools"
  },
  {
    "id": "image-dimensions-checker",
    "name": "Image Dimensions Checker",
    "category": "Image Tools"
  },
  {
    "id": "image-file-size-estimator",
    "name": "Image File Size Estimator",
    "category": "Image Tools"
  },
  {
    "id": "add-image-border",
    "name": "Add Image Border",
    "category": "Image Tools"
  },
  {
    "id": "round-image-corners",
    "name": "Round Image Corners",
    "category": "Image Tools"
  },
  {
    "id": "grayscale-image",
    "name": "Grayscale Image",
    "category": "Image Tools"
  },
  {
    "id": "image-opacity-tool",
    "name": "Image Opacity Tool",
    "category": "Image Tools"
  },
  {
    "id": "pixelate-image",
    "name": "Pixelate Image",
    "category": "Image Tools"
  },
  {
    "id": "blur-image",
    "name": "Blur Image",
    "category": "Image Tools"
  },
  {
    "id": "image-color-picker",
    "name": "Image Color Picker",
    "category": "Image Tools"
  },
  {
    "id": "extract-colors-from-image",
    "name": "Extract Colors From Image",
    "category": "Image Tools"
  },
  {
    "id": "batch-image-resizer",
    "name": "Batch Image Resizer",
    "category": "Image Tools"
  },
  {
    "id": "profile-picture-cropper",
    "name": "Profile Picture Cropper",
    "category": "Image Tools"
  },
  {
    "id": "youtube-thumbnail-resizer",
    "name": "YouTube Thumbnail Resizer",
    "category": "Image Tools"
  },
  {
    "id": "instagram-image-resizer",
    "name": "Instagram Image Resizer",
    "category": "Image Tools"
  },
  {
    "id": "instagram-story-resizer",
    "name": "Instagram Story Resizer",
    "category": "Image Tools"
  },
  {
    "id": "opengraph-image-resizer",
    "name": "OpenGraph Image Resizer",
    "category": "Image Tools"
  },
  {
    "id": "favicon-generator",
    "name": "Favicon Generator",
    "category": "Web Asset Tools"
  },
  {
    "id": "image-to-favicon",
    "name": "Image to Favicon",
    "category": "Web Asset Tools"
  },
  {
    "id": "favicon-checker",
    "name": "Favicon Checker",
    "category": "Web Asset Tools"
  },
  {
    "id": "ico-to-png",
    "name": "ICO to PNG",
    "category": "Web Asset Tools"
  },
  {
    "id": "png-to-ico",
    "name": "PNG to ICO",
    "category": "Web Asset Tools"
  },
  {
    "id": "svg-optimizer",
    "name": "SVG Optimizer",
    "category": "Web Asset Tools"
  },
  {
    "id": "svg-viewer",
    "name": "SVG Viewer",
    "category": "Web Asset Tools"
  },
  {
    "id": "svg-to-data-uri",
    "name": "SVG to Data URI",
    "category": "Web Asset Tools"
  },
  {
    "id": "data-uri-to-image",
    "name": "Data URI to Image",
    "category": "Web Asset Tools"
  },
  {
    "id": "placeholder-image-generator",
    "name": "Placeholder Image Generator",
    "category": "Web Asset Tools"
  },
  {
    "id": "web-manifest-generator",
    "name": "Web Manifest Generator",
    "category": "Web Asset Tools"
  },
  {
    "id": "robots-txt-generator",
    "name": "Robots.txt Generator",
    "category": "Web Asset Tools"
  },
  {
    "id": "sitemap-xml-generator",
    "name": "Sitemap XML Generator",
    "category": "Web Asset Tools"
  },
  {
    "id": "meta-tag-generator",
    "name": "Meta Tag Generator",
    "category": "Web Asset Tools"
  },
  {
    "id": "opengraph-tag-generator",
    "name": "OpenGraph Tag Generator",
    "category": "Web Asset Tools"
  },
  {
    "id": "twitter-card-generator",
    "name": "Twitter Card Generator",
    "category": "Web Asset Tools"
  },
  {
    "id": "schema-markup-generator",
    "name": "Schema Markup Generator",
    "category": "Web Asset Tools"
  },
  {
    "id": "css-box-shadow-generator",
    "name": "CSS Box Shadow Generator",
    "category": "Web Asset Tools"
  },
  {
    "id": "border-radius-generator",
    "name": "Border Radius Generator",
    "category": "Web Asset Tools"
  },
  {
    "id": "css-clamp-calculator",
    "name": "CSS Clamp Calculator",
    "category": "Web Asset Tools"
  },
  {
    "id": "rem-to-px",
    "name": "REM to PX",
    "category": "Web Asset Tools"
  },
  {
    "id": "px-to-rem",
    "name": "PX to REM",
    "category": "Web Asset Tools"
  },
  {
    "id": "viewport-unit-calculator",
    "name": "Viewport Unit Calculator",
    "category": "Web Asset Tools"
  },
  {
    "id": "css-triangle-generator",
    "name": "CSS Triangle Generator",
    "category": "Web Asset Tools"
  },
  {
    "id": "css-grid-generator",
    "name": "CSS Grid Generator",
    "category": "Web Asset Tools"
  },
  {
    "id": "url-qr-generator",
    "name": "URL QR Generator",
    "category": "QR & Barcode Tools"
  },
  {
    "id": "text-qr-generator",
    "name": "Text QR Generator",
    "category": "QR & Barcode Tools"
  },
  {
    "id": "wi-fi-qr-generator",
    "name": "Wi-Fi QR Generator",
    "category": "QR & Barcode Tools"
  },
  {
    "id": "email-qr-generator",
    "name": "Email QR Generator",
    "category": "QR & Barcode Tools"
  },
  {
    "id": "phone-qr-generator",
    "name": "Phone QR Generator",
    "category": "QR & Barcode Tools"
  },
  {
    "id": "sms-qr-generator",
    "name": "SMS QR Generator",
    "category": "QR & Barcode Tools"
  },
  {
    "id": "whatsapp-qr-generator",
    "name": "WhatsApp QR Generator",
    "category": "QR & Barcode Tools"
  },
  {
    "id": "vcard-qr-generator",
    "name": "vCard QR Generator",
    "category": "QR & Barcode Tools"
  },
  {
    "id": "location-qr-generator",
    "name": "Location QR Generator",
    "category": "QR & Barcode Tools"
  },
  {
    "id": "calendar-event-qr-generator",
    "name": "Calendar Event QR Generator",
    "category": "QR & Barcode Tools"
  },
  {
    "id": "qr-color-customizer",
    "name": "QR Color Customizer",
    "category": "QR & Barcode Tools"
  },
  {
    "id": "qr-with-logo",
    "name": "QR With Logo",
    "category": "QR & Barcode Tools"
  },
  {
    "id": "qr-reader-from-image",
    "name": "QR Reader From Image",
    "category": "QR & Barcode Tools"
  },
  {
    "id": "barcode-generator",
    "name": "Barcode Generator",
    "category": "QR & Barcode Tools"
  },
  {
    "id": "code-128-generator",
    "name": "Code 128 Generator",
    "category": "QR & Barcode Tools"
  },
  {
    "id": "ean-13-generator",
    "name": "EAN-13 Generator",
    "category": "QR & Barcode Tools"
  },
  {
    "id": "ean-8-generator",
    "name": "EAN-8 Generator",
    "category": "QR & Barcode Tools"
  },
  {
    "id": "upc-a-generator",
    "name": "UPC-A Generator",
    "category": "QR & Barcode Tools"
  },
  {
    "id": "code-39-generator",
    "name": "Code 39 Generator",
    "category": "QR & Barcode Tools"
  },
  {
    "id": "isbn-barcode-generator",
    "name": "ISBN Barcode Generator",
    "category": "QR & Barcode Tools"
  },
  {
    "id": "barcode-reader",
    "name": "Barcode Reader",
    "category": "QR & Barcode Tools"
  },
  {
    "id": "merge-pdf",
    "name": "Merge PDF",
    "category": "PDF Tools"
  },
  {
    "id": "split-pdf",
    "name": "Split PDF",
    "category": "PDF Tools"
  },
  {
    "id": "rotate-pdf",
    "name": "Rotate PDF",
    "category": "PDF Tools"
  },
  {
    "id": "delete-pdf-pages",
    "name": "Delete PDF Pages",
    "category": "PDF Tools"
  },
  {
    "id": "extract-pdf-pages",
    "name": "Extract PDF Pages",
    "category": "PDF Tools"
  },
  {
    "id": "reorder-pdf-pages",
    "name": "Reorder PDF Pages",
    "category": "PDF Tools"
  },
  {
    "id": "images-to-pdf",
    "name": "Images to PDF",
    "category": "PDF Tools"
  },
  {
    "id": "jpg-to-pdf",
    "name": "JPG to PDF",
    "category": "PDF Tools"
  },
  {
    "id": "png-to-pdf",
    "name": "PNG to PDF",
    "category": "PDF Tools"
  },
  {
    "id": "pdf-to-jpg",
    "name": "PDF to JPG",
    "category": "PDF Tools"
  },
  {
    "id": "pdf-to-png",
    "name": "PDF to PNG",
    "category": "PDF Tools"
  },
  {
    "id": "compress-pdf",
    "name": "Compress PDF",
    "category": "PDF Tools"
  },
  {
    "id": "add-pdf-page-numbers",
    "name": "Add PDF Page Numbers",
    "category": "PDF Tools"
  },
  {
    "id": "add-pdf-watermark",
    "name": "Add PDF Watermark",
    "category": "PDF Tools"
  },
  {
    "id": "remove-pdf-metadata",
    "name": "Remove PDF Metadata",
    "category": "PDF Tools"
  },
  {
    "id": "pdf-metadata-viewer",
    "name": "PDF Metadata Viewer",
    "category": "PDF Tools"
  },
  {
    "id": "pdf-page-count",
    "name": "PDF Page Count",
    "category": "PDF Tools"
  },
  {
    "id": "pdf-size-analyzer",
    "name": "PDF Size Analyzer",
    "category": "PDF Tools"
  },
  {
    "id": "crop-pdf",
    "name": "Crop PDF",
    "category": "PDF Tools"
  },
  {
    "id": "protect-pdf-with-password",
    "name": "Protect PDF With Password",
    "category": "PDF Tools"
  },
  {
    "id": "unlock-pdf-with-known-password",
    "name": "Unlock PDF With Known Password",
    "category": "PDF Tools"
  },
  {
    "id": "combine-images-and-pdf",
    "name": "Combine Images and PDF",
    "category": "PDF Tools"
  },
  {
    "id": "pdf-page-size-converter",
    "name": "PDF Page Size Converter",
    "category": "PDF Tools"
  },
  {
    "id": "grayscale-pdf",
    "name": "Grayscale PDF",
    "category": "PDF Tools"
  },
  {
    "id": "pdf-text-extractor",
    "name": "PDF Text Extractor",
    "category": "PDF Tools"
  },
  {
    "id": "mp3-to-wav",
    "name": "MP3 to WAV",
    "category": "Audio, Video & Subtitle Tools"
  },
  {
    "id": "wav-to-mp3",
    "name": "WAV to MP3",
    "category": "Audio, Video & Subtitle Tools"
  },
  {
    "id": "m4a-to-mp3",
    "name": "M4A to MP3",
    "category": "Audio, Video & Subtitle Tools"
  },
  {
    "id": "ogg-to-mp3",
    "name": "OGG to MP3",
    "category": "Audio, Video & Subtitle Tools"
  },
  {
    "id": "aac-to-mp3",
    "name": "AAC to MP3",
    "category": "Audio, Video & Subtitle Tools"
  },
  {
    "id": "audio-trimmer",
    "name": "Audio Trimmer",
    "category": "Audio, Video & Subtitle Tools"
  },
  {
    "id": "audio-cutter",
    "name": "Audio Cutter",
    "category": "Audio, Video & Subtitle Tools"
  },
  {
    "id": "audio-joiner",
    "name": "Audio Joiner",
    "category": "Audio, Video & Subtitle Tools"
  },
  {
    "id": "change-audio-volume",
    "name": "Change Audio Volume",
    "category": "Audio, Video & Subtitle Tools"
  },
  {
    "id": "stereo-to-mono",
    "name": "Stereo to Mono",
    "category": "Audio, Video & Subtitle Tools"
  },
  {
    "id": "extract-audio-from-video",
    "name": "Extract Audio From Video",
    "category": "Audio, Video & Subtitle Tools"
  },
  {
    "id": "mp4-to-mp3",
    "name": "MP4 to MP3",
    "category": "Audio, Video & Subtitle Tools"
  },
  {
    "id": "video-trimmer",
    "name": "Video Trimmer",
    "category": "Audio, Video & Subtitle Tools"
  },
  {
    "id": "video-cropper",
    "name": "Video Cropper",
    "category": "Audio, Video & Subtitle Tools"
  },
  {
    "id": "video-rotator",
    "name": "Video Rotator",
    "category": "Audio, Video & Subtitle Tools"
  },
  {
    "id": "mute-video",
    "name": "Mute Video",
    "category": "Audio, Video & Subtitle Tools"
  },
  {
    "id": "gif-to-mp4",
    "name": "GIF to MP4",
    "category": "Audio, Video & Subtitle Tools"
  },
  {
    "id": "mp4-to-gif",
    "name": "MP4 to GIF",
    "category": "Audio, Video & Subtitle Tools"
  },
  {
    "id": "video-speed-changer",
    "name": "Video Speed Changer",
    "category": "Audio, Video & Subtitle Tools"
  },
  {
    "id": "audio-bitrate-converter",
    "name": "Audio Bitrate Converter",
    "category": "Audio, Video & Subtitle Tools"
  },
  {
    "id": "video-bitrate-converter",
    "name": "Video Bitrate Converter",
    "category": "Audio, Video & Subtitle Tools"
  },
  {
    "id": "srt-to-vtt",
    "name": "SRT to VTT",
    "category": "Audio, Video & Subtitle Tools"
  },
  {
    "id": "vtt-to-srt",
    "name": "VTT to SRT",
    "category": "Audio, Video & Subtitle Tools"
  },
  {
    "id": "subtitle-shift-tool",
    "name": "Subtitle Shift Tool",
    "category": "Audio, Video & Subtitle Tools"
  },
  {
    "id": "subtitle-merger",
    "name": "Subtitle Merger",
    "category": "Audio, Video & Subtitle Tools"
  },
  {
    "id": "stl-viewer",
    "name": "STL Viewer",
    "category": "3D Printing & Maker Tools"
  },
  {
    "id": "stl-dimensions-checker",
    "name": "STL Dimensions Checker",
    "category": "3D Printing & Maker Tools"
  },
  {
    "id": "stl-volume-calculator",
    "name": "STL Volume Calculator",
    "category": "3D Printing & Maker Tools"
  },
  {
    "id": "filament-length-calculator",
    "name": "Filament Length Calculator",
    "category": "3D Printing & Maker Tools"
  },
  {
    "id": "filament-weight-calculator",
    "name": "Filament Weight Calculator",
    "category": "3D Printing & Maker Tools"
  },
  {
    "id": "filament-cost-calculator",
    "name": "Filament Cost Calculator",
    "category": "3D Printing & Maker Tools"
  },
  {
    "id": "3d-print-cost-calculator",
    "name": "3D Print Cost Calculator",
    "category": "3D Printing & Maker Tools"
  },
  {
    "id": "print-time-cost-calculator",
    "name": "Print Time Cost Calculator",
    "category": "3D Printing & Maker Tools"
  },
  {
    "id": "resin-volume-calculator",
    "name": "Resin Volume Calculator",
    "category": "3D Printing & Maker Tools"
  },
  {
    "id": "resin-cost-calculator",
    "name": "Resin Cost Calculator",
    "category": "3D Printing & Maker Tools"
  },
  {
    "id": "layer-height-calculator",
    "name": "Layer Height Calculator",
    "category": "3D Printing & Maker Tools"
  },
  {
    "id": "steps-per-mm-calculator",
    "name": "Steps per mm Calculator",
    "category": "3D Printing & Maker Tools"
  },
  {
    "id": "flow-rate-calculator",
    "name": "Flow Rate Calculator",
    "category": "3D Printing & Maker Tools"
  },
  {
    "id": "extrusion-multiplier-calculator",
    "name": "Extrusion Multiplier Calculator",
    "category": "3D Printing & Maker Tools"
  },
  {
    "id": "e-steps-calculator",
    "name": "E-steps Calculator",
    "category": "3D Printing & Maker Tools"
  },
  {
    "id": "nozzle-flow-calculator",
    "name": "Nozzle Flow Calculator",
    "category": "3D Printing & Maker Tools"
  },
  {
    "id": "model-scale-calculator",
    "name": "Model Scale Calculator",
    "category": "3D Printing & Maker Tools"
  },
  {
    "id": "support-angle-calculator",
    "name": "Support Angle Calculator",
    "category": "3D Printing & Maker Tools"
  },
  {
    "id": "infill-material-estimator",
    "name": "Infill Material Estimator",
    "category": "3D Printing & Maker Tools"
  },
  {
    "id": "filament-remaining-calculator",
    "name": "Filament Remaining Calculator",
    "category": "3D Printing & Maker Tools"
  },
  {
    "id": "length-converter",
    "name": "Length Converter",
    "category": "Unit & Technical Converters"
  },
  {
    "id": "area-converter",
    "name": "Area Converter",
    "category": "Unit & Technical Converters"
  },
  {
    "id": "volume-converter",
    "name": "Volume Converter",
    "category": "Unit & Technical Converters"
  },
  {
    "id": "weight-converter",
    "name": "Weight Converter",
    "category": "Unit & Technical Converters"
  },
  {
    "id": "temperature-converter",
    "name": "Temperature Converter",
    "category": "Unit & Technical Converters"
  },
  {
    "id": "speed-converter",
    "name": "Speed Converter",
    "category": "Unit & Technical Converters"
  },
  {
    "id": "pressure-converter",
    "name": "Pressure Converter",
    "category": "Unit & Technical Converters"
  },
  {
    "id": "energy-converter",
    "name": "Energy Converter",
    "category": "Unit & Technical Converters"
  },
  {
    "id": "power-converter",
    "name": "Power Converter",
    "category": "Unit & Technical Converters"
  },
  {
    "id": "torque-converter",
    "name": "Torque Converter",
    "category": "Unit & Technical Converters"
  },
  {
    "id": "density-converter",
    "name": "Density Converter",
    "category": "Unit & Technical Converters"
  },
  {
    "id": "fuel-economy-converter",
    "name": "Fuel Economy Converter",
    "category": "Unit & Technical Converters"
  },
  {
    "id": "data-storage-converter",
    "name": "Data Storage Converter",
    "category": "Unit & Technical Converters"
  },
  {
    "id": "data-transfer-rate-converter",
    "name": "Data Transfer Rate Converter",
    "category": "Unit & Technical Converters"
  },
  {
    "id": "angle-converter",
    "name": "Angle Converter",
    "category": "Unit & Technical Converters"
  },
  {
    "id": "time-converter",
    "name": "Time Converter",
    "category": "Unit & Technical Converters"
  },
  {
    "id": "frequency-converter",
    "name": "Frequency Converter",
    "category": "Unit & Technical Converters"
  },
  {
    "id": "force-converter",
    "name": "Force Converter",
    "category": "Unit & Technical Converters"
  },
  {
    "id": "acceleration-converter",
    "name": "Acceleration Converter",
    "category": "Unit & Technical Converters"
  },
  {
    "id": "cooking-measurement-converter",
    "name": "Cooking Measurement Converter",
    "category": "Unit & Technical Converters"
  }
];

const ui = {
  ja: {
    input: '入力',
    output: '結果',
    local: 'ローカル処理',
    how: '仕組み',
    calc: '計算方法',
    convert: '変換ロジック',
    generate: '生成方法',
    insight: '知っておきたいこと',
    faq: '概要',
    privacy: 'プライバシー重視',
    privacyTitle: '内容はブラウザ内に保持されます',
    privacyBody:
      '処理はページ内でローカルに実行され、UtilityLake に内容を送信する必要はありません。',
    exact: 'このツールは何をしますか？',
    where: '処理はどこで行われますか？',
    localAnswer: '処理はブラウザ内でローカルに行われます。'
  },

  ar: {
    input: 'الإدخال',
    output: 'النتيجة',
    local: 'معالجة محلية',
    how: 'كيف يعمل',
    calc: 'طريقة الحساب',
    convert: 'منطق التحويل',
    generate: 'طريقة الإنشاء',
    insight: 'معلومة مفيدة',
    faq: 'باختصار',
    privacy: 'الخصوصية أولاً',
    privacyTitle: 'يبقى المحتوى داخل المتصفح',
    privacyBody:
      'تتم المعالجة محليًا داخل الصفحة دون الحاجة إلى إرسال المحتوى إلى UtilityLake.',
    exact: 'ماذا تفعل هذه الأداة بالضبط؟',
    where: 'أين تتم المعالجة؟',
    localAnswer: 'تتم المعالجة محليًا داخل المتصفح.'
  },

  id: {
    input: 'Input',
    output: 'Hasil',
    local: 'Pemrosesan lokal',
    how: 'CARA KERJA',
    calc: 'CARA PERHITUNGAN',
    convert: 'LOGIKA KONVERSI',
    generate: 'CARA HASIL DIBUAT',
    insight: 'PERLU DIKETAHUI',
    faq: 'Ringkasnya',
    privacy: 'PRIVASI SEJAK AWAL',
    privacyTitle: 'Konten tetap berada di browser',
    privacyBody:
      'Pemrosesan dilakukan secara lokal di halaman tanpa perlu mengirim konten ke UtilityLake.',
    exact: 'Apa yang dilakukan alat ini?',
    where: 'Di mana pemrosesan dilakukan?',
    localAnswer: 'Pemrosesan dilakukan secara lokal di browser.'
  },

  tr: {
    input: 'Girdi',
    output: 'Sonuç',
    local: 'Yerel işleme',
    how: 'NASIL ÇALIŞIR',
    calc: 'NASIL HESAPLANIR',
    convert: 'DÖNÜŞTÜRME MANTIĞI',
    generate: 'NASIL OLUŞTURULUR',
    insight: 'BİLİNMESİ İYİ OLUR',
    faq: 'Kısaca',
    privacy: 'GİZLİLİK ODAKLI',
    privacyTitle: 'İçerik tarayıcıda kalır',
    privacyBody:
      'İşlem, içeriği UtilityLake sunucularına göndermeye gerek kalmadan sayfada yerel olarak gerçekleştirilir.',
    exact: 'Bu araç tam olarak ne yapar?',
    where: 'İşlem nerede gerçekleşir?',
    localAnswer: 'İşlem tarayıcıda yerel olarak gerçekleştirilir.'
  },

  pl: {
    input: 'Dane wejściowe',
    output: 'Wynik',
    local: 'Przetwarzanie lokalne',
    how: 'JAK TO DZIAŁA',
    calc: 'JAK TO JEST OBLICZANE',
    convert: 'LOGIKA KONWERSJI',
    generate: 'JAK POWSTAJE WYNIK',
    insight: 'WARTO WIEDZIEĆ',
    faq: 'W skrócie',
    privacy: 'PRYWATNOŚĆ OD PODSTAW',
    privacyTitle: 'Treść pozostaje w przeglądarce',
    privacyBody:
      'Przetwarzanie odbywa się lokalnie na stronie, bez konieczności wysyłania treści do UtilityLake.',
    exact: 'Co dokładnie robi to narzędzie?',
    where: 'Gdzie odbywa się przetwarzanie?',
    localAnswer: 'Przetwarzanie odbywa się lokalnie w przeglądarce.'
  },

  ko: {
    input: '입력',
    output: '결과',
    local: '로컬 처리',
    how: '작동 방식',
    calc: '계산 방식',
    convert: '변환 방식',
    generate: '생성 방식',
    insight: '알아두면 좋은 점',
    faq: '요약',
    privacy: '개인정보 보호 중심',
    privacyTitle: '콘텐츠는 브라우저에만 유지됩니다',
    privacyBody:
      '콘텐츠를 UtilityLake로 전송할 필요 없이 페이지에서 로컬로 처리됩니다.',
    exact: '이 도구는 정확히 무엇을 하나요?',
    where: '처리는 어디에서 이루어지나요?',
    localAnswer: '처리는 브라우저에서 로컬로 이루어집니다.'
  },

  nl: {
    input: 'Invoer',
    output: 'Resultaat',
    local: 'Lokale verwerking',
    how: 'HOE HET WERKT',
    calc: 'HOE HET WORDT BEREKEND',
    convert: 'CONVERSIELOGICA',
    generate: 'HOE HET WORDT GEMAAKT',
    insight: 'GOED OM TE WETEN',
    faq: 'Kort samengevat',
    privacy: 'PRIVACY BY DESIGN',
    privacyTitle: 'De inhoud blijft in je browser',
    privacyBody:
      'De verwerking vindt lokaal op de pagina plaats zonder dat inhoud naar UtilityLake hoeft te worden gestuurd.',
    exact: 'Wat doet deze tool precies?',
    where: 'Waar vindt de verwerking plaats?',
    localAnswer: 'De verwerking vindt lokaal in de browser plaats.'
  },

  vi: {
    input: 'Dữ liệu vào',
    output: 'Kết quả',
    local: 'Xử lý cục bộ',
    how: 'CÁCH HOẠT ĐỘNG',
    calc: 'CÁCH TÍNH',
    convert: 'CÁCH CHUYỂN ĐỔI',
    generate: 'CÁCH TẠO KẾT QUẢ',
    insight: 'ĐIỀU NÊN BIẾT',
    faq: 'Tóm tắt',
    privacy: 'QUYỀN RIÊNG TƯ NGAY TỪ THIẾT KẾ',
    privacyTitle: 'Nội dung vẫn nằm trong trình duyệt',
    privacyBody:
      'Quá trình xử lý diễn ra cục bộ trên trang mà không cần gửi nội dung tới UtilityLake.',
    exact: 'Công cụ này thực hiện chính xác điều gì?',
    where: 'Quá trình xử lý diễn ra ở đâu?',
    localAnswer: 'Quá trình xử lý diễn ra cục bộ trong trình duyệt.'
  }
} as const;

const genericIntro = {
  ja: (title: string, category: string) =>
    title +
    ' をブラウザ上で直接利用できます。' +
    category +
    ' に属するツールで、入力を処理してページ内に結果を表示します。',

  ar: (title: string, category: string) =>
    'استخدم ' +
    title +
    ' مباشرة في المتصفح. تنتمي هذه الأداة إلى ' +
    category +
    ' وتقوم بمعالجة المدخلات وعرض النتيجة داخل الصفحة.',

  id: (title: string, category: string) =>
    'Gunakan ' +
    title +
    ' langsung di browser. Alat ini termasuk dalam ' +
    category +
    ' dan memproses input untuk menghasilkan hasil langsung di halaman.',

  tr: (title: string, category: string) =>
    title +
    ' aracını doğrudan tarayıcıda kullanın. Bu araç ' +
    category +
    ' kategorisinde yer alır ve girdiyi işleyerek sonucu sayfada gösterir.',

  pl: (title: string, category: string) =>
    'Korzystaj z ' +
    title +
    ' bezpośrednio w przeglądarce. Narzędzie należy do kategorii ' +
    category +
    ' i przetwarza dane wejściowe, pokazując wynik na stronie.',

  ko: (title: string, category: string) =>
    title +
    '을(를) 브라우저에서 바로 사용할 수 있습니다. ' +
    category +
    '에 속하는 도구로, 입력 데이터를 처리하고 결과를 페이지에 표시합니다.',

  nl: (title: string, category: string) =>
    'Gebruik ' +
    title +
    ' rechtstreeks in je browser. Deze tool hoort bij ' +
    category +
    ' en verwerkt de invoer om het resultaat direct op de pagina te tonen.',

  vi: (title: string, category: string) =>
    'Sử dụng ' +
    title +
    ' trực tiếp trong trình duyệt. Công cụ này thuộc nhóm ' +
    category +
    ' và xử lý dữ liệu đầu vào để hiển thị kết quả ngay trên trang.'
} as const;

const insights: Record<
  Group,
  Record<RestLocale, [string, string]>
> = {
  calculator: {
    ja: [
      '入力値が結果を左右します',
      '入力値、単位、前提条件を変更すると計算結果も変わります。結果を使用する前に入力内容を確認してください。'
    ],
    ar: [
      'قيم الإدخال تؤثر مباشرة في النتيجة',
      'تغيير القيم أو الوحدات أو الافتراضات يؤدي إلى تغيير النتيجة، لذلك تحقق من المدخلات قبل الاعتماد على الحساب.'
    ],
    id: [
      'Nilai input menentukan hasil',
      'Perubahan nilai, satuan, atau asumsi akan mengubah hasil perhitungan. Periksa input sebelum menggunakan hasil.'
    ],
    tr: [
      'Girdi değerleri sonucu doğrudan etkiler',
      'Değerler, birimler veya varsayımlar değiştiğinde hesaplama sonucu da değişir. Sonucu kullanmadan önce girdileri kontrol edin.'
    ],
    pl: [
      'Dane wejściowe bezpośrednio wpływają na wynik',
      'Zmiana wartości, jednostek lub założeń zmienia wynik obliczenia. Przed użyciem wyniku warto sprawdzić dane wejściowe.'
    ],
    ko: [
      '입력값이 결과에 직접 영향을 줍니다',
      '값, 단위 또는 가정이 달라지면 계산 결과도 달라집니다. 결과를 사용하기 전에 입력값을 확인하세요.'
    ],
    nl: [
      'Invoerwaarden bepalen het resultaat',
      'Als waarden, eenheden of aannames veranderen, verandert ook de berekening. Controleer de invoer voordat je het resultaat gebruikt.'
    ],
    vi: [
      'Giá trị đầu vào ảnh hưởng trực tiếp đến kết quả',
      'Khi giá trị, đơn vị hoặc giả định thay đổi, kết quả tính toán cũng thay đổi. Hãy kiểm tra dữ liệu đầu vào trước khi sử dụng kết quả.'
    ]
  },

  converter: {
    ja: [
      '元の形式と変換先を確認してください',
      '正しい変換には、入力形式、単位、表現方法を正しく選択することが重要です。'
    ],
    ar: [
      'تحقق من تنسيق المصدر والهدف',
      'تعتمد دقة التحويل على اختيار صيغة الإدخال والوحدة أو التمثيل الصحيح.'
    ],
    id: [
      'Periksa format sumber dan tujuan',
      'Konversi yang benar bergantung pada format input, satuan, atau representasi yang dipilih.'
    ],
    tr: [
      'Kaynak ve hedef biçimini kontrol edin',
      'Doğru dönüşüm için giriş biçiminin, birimin veya gösterimin doğru seçilmesi önemlidir.'
    ],
    pl: [
      'Sprawdź format źródłowy i docelowy',
      'Poprawna konwersja zależy od właściwego wyboru formatu wejściowego, jednostki lub sposobu zapisu.'
    ],
    ko: [
      '원본과 대상 형식을 확인하세요',
      '정확한 변환을 위해서는 입력 형식, 단위 또는 표현 방식을 올바르게 선택해야 합니다.'
    ],
    nl: [
      'Controleer bron- en doelformaat',
      'Een correcte conversie hangt af van het juiste invoerformaat, de eenheid of de gekozen notatie.'
    ],
    vi: [
      'Hãy kiểm tra định dạng nguồn và đích',
      'Việc chuyển đổi chính xác phụ thuộc vào định dạng đầu vào, đơn vị hoặc cách biểu diễn được chọn.'
    ]
  },

  generator: {
    ja: [
      '生成結果は用途に合わせて確認してください',
      '生成された内容は出発点として利用し、実際に使用する前に必要な値や形式を確認してください。'
    ],
    ar: [
      'راجع النتيجة قبل استخدامها',
      'يمكن استخدام الناتج كنقطة بداية، لكن يُفضّل التحقق من القيم والتنسيق قبل الاستخدام الفعلي.'
    ],
    id: [
      'Periksa hasil sebelum digunakan',
      'Hasil yang dibuat dapat digunakan sebagai titik awal, tetapi nilai dan formatnya sebaiknya diperiksa sebelum digunakan.'
    ],
    tr: [
      'Oluşturulan sonucu kullanmadan önce kontrol edin',
      'Üretilen içerik başlangıç noktası olarak kullanılabilir; gerçek kullanım öncesinde değerleri ve biçimi doğrulayın.'
    ],
    pl: [
      'Sprawdź wygenerowany wynik przed użyciem',
      'Wygenerowana treść może być punktem wyjścia, ale przed użyciem należy sprawdzić wartości i format.'
    ],
    ko: [
      '생성된 결과는 사용 전에 확인하세요',
      '생성된 내용은 출발점으로 사용할 수 있지만 실제 사용 전 값과 형식을 확인하는 것이 좋습니다.'
    ],
    nl: [
      'Controleer het gegenereerde resultaat voor gebruik',
      'De gegenereerde inhoud is een goed uitgangspunt, maar controleer waarden en formaat voordat je deze daadwerkelijk gebruikt.'
    ],
    vi: [
      'Hãy kiểm tra kết quả trước khi sử dụng',
      'Nội dung được tạo có thể dùng làm điểm bắt đầu, nhưng nên kiểm tra giá trị và định dạng trước khi sử dụng thực tế.'
    ]
  },

  text: {
    ja: [
      '文字や空白も結果に影響します',
      '大文字と小文字、句読点、改行、空白、Unicode文字などが処理結果に影響する場合があります。'
    ],
    ar: [
      'الأحرف والمسافات قد تؤثر في النتيجة',
      'قد تؤثر حالة الأحرف وعلامات الترقيم وفواصل الأسطر والمسافات ومحارف Unicode في نتيجة المعالجة.'
    ],
    id: [
      'Karakter dan spasi dapat memengaruhi hasil',
      'Huruf besar-kecil, tanda baca, baris baru, spasi, dan karakter Unicode dapat memengaruhi hasil pemrosesan.'
    ],
    tr: [
      'Karakterler ve boşluklar sonucu etkileyebilir',
      'Büyük-küçük harf, noktalama, satır sonları, boşluklar ve Unicode karakterleri işlem sonucunu etkileyebilir.'
    ],
    pl: [
      'Znaki i odstępy mogą wpływać na wynik',
      'Wielkość liter, interpunkcja, podziały wierszy, spacje i znaki Unicode mogą wpływać na wynik przetwarzania.'
    ],
    ko: [
      '문자와 공백도 결과에 영향을 줄 수 있습니다',
      '대소문자, 구두점, 줄바꿈, 공백 및 Unicode 문자가 처리 결과에 영향을 줄 수 있습니다.'
    ],
    nl: [
      'Tekens en witruimte kunnen het resultaat beïnvloeden',
      'Hoofdletters, leestekens, regeleinden, spaties en Unicode-tekens kunnen de verwerking beïnvloeden.'
    ],
    vi: [
      'Ký tự và khoảng trắng có thể ảnh hưởng đến kết quả',
      'Chữ hoa chữ thường, dấu câu, xuống dòng, khoảng trắng và ký tự Unicode có thể ảnh hưởng đến quá trình xử lý.'
    ]
  },

  formatter: {
    ja: [
      '構文と構造が重要です',
      'JSON、XML、YAML、CSVなどのデータでは、区切り文字、引用符、階層、構文エラーが結果に影響します。'
    ],
    ar: [
      'البنية والصياغة مهمتان',
      'في البيانات مثل JSON وXML وYAML وCSV يمكن أن تؤثر الفواصل والاقتباسات والبنية وأخطاء الصياغة في النتيجة.'
    ],
    id: [
      'Sintaks dan struktur sangat penting',
      'Pada data seperti JSON, XML, YAML, dan CSV, pemisah, tanda kutip, struktur, dan kesalahan sintaks dapat memengaruhi hasil.'
    ],
    tr: [
      'Sözdizimi ve yapı önemlidir',
      'JSON, XML, YAML ve CSV gibi verilerde ayırıcılar, tırnaklar, yapı ve sözdizimi hataları sonucu etkileyebilir.'
    ],
    pl: [
      'Składnia i struktura mają znaczenie',
      'W danych takich jak JSON, XML, YAML i CSV separatory, cudzysłowy, struktura oraz błędy składni mogą wpływać na wynik.'
    ],
    ko: [
      '구문과 구조가 중요합니다',
      'JSON, XML, YAML, CSV 같은 데이터에서는 구분자, 따옴표, 구조 및 구문 오류가 결과에 영향을 줄 수 있습니다.'
    ],
    nl: [
      'Syntaxis en structuur zijn belangrijk',
      'Bij gegevens zoals JSON, XML, YAML en CSV kunnen scheidingstekens, aanhalingstekens, structuur en syntaxisfouten het resultaat beïnvloeden.'
    ],
    vi: [
      'Cú pháp và cấu trúc rất quan trọng',
      'Với dữ liệu như JSON, XML, YAML và CSV, dấu phân cách, dấu ngoặc kép, cấu trúc và lỗi cú pháp có thể ảnh hưởng đến kết quả.'
    ]
  },

  media: {
    ja: [
      '元ファイルの品質と形式が結果に影響します',
      '解像度、圧縮、コーデック、メタデータ、元ファイルの品質によって出力結果が変わる場合があります。'
    ],
    ar: [
      'جودة الملف الأصلي وتنسيقه تؤثران في النتيجة',
      'يمكن أن تؤثر الدقة والضغط والترميز والبيانات الوصفية وجودة المصدر في الملف الناتج.'
    ],
    id: [
      'Kualitas dan format sumber memengaruhi hasil',
      'Resolusi, kompresi, codec, metadata, dan kualitas file sumber dapat memengaruhi hasil akhir.'
    ],
    tr: [
      'Kaynak dosyanın kalitesi ve biçimi sonucu etkiler',
      'Çözünürlük, sıkıştırma, codec, meta veriler ve kaynak kalitesi çıktı sonucunu değiştirebilir.'
    ],
    pl: [
      'Jakość i format pliku źródłowego wpływają na wynik',
      'Rozdzielczość, kompresja, kodek, metadane oraz jakość źródła mogą wpływać na plik wynikowy.'
    ],
    ko: [
      '원본 파일의 품질과 형식이 결과에 영향을 줍니다',
      '해상도, 압축, 코덱, 메타데이터 및 원본 품질에 따라 출력 결과가 달라질 수 있습니다.'
    ],
    nl: [
      'Kwaliteit en formaat van het bronbestand beïnvloeden het resultaat',
      'Resolutie, compressie, codec, metadata en bronkwaliteit kunnen invloed hebben op het uitvoerbestand.'
    ],
    vi: [
      'Chất lượng và định dạng tệp nguồn ảnh hưởng đến kết quả',
      'Độ phân giải, nén, codec, siêu dữ liệu và chất lượng nguồn có thể ảnh hưởng đến tệp đầu ra.'
    ]
  }
};

function groupFor(category: string): Group {
  switch (category) {
    case 'Calculators — Math & Everyday':
    case 'Calculators — Business & Finance':
    case 'Calculators — Construction & DIY':
    case 'Calculators — Photography & Creator':
    case '3D Printing & Maker Tools':
      return 'calculator';

    case 'Unit & Technical Converters':
    case 'Encoding, Hash & ID Tools':
    case 'Color & Design Tools':
      return 'converter';

    case 'Random & Picker Tools':
    case 'Web Asset Tools':
    case 'QR & Barcode Tools':
      return 'generator';

    case 'Text Tools':
      return 'text';

    case 'Developer & Data Tools':
      return 'formatter';

    case 'PDF Tools':
    case 'Image Tools':
    case 'Audio, Video & Subtitle Tools':
      return 'media';

    default:
      throw new Error(
        'Categoria editoriale non gestita: ' + category
      );
  }
}

function kicker(
  locale: RestLocale,
  group: Group
): string {
  const t = ui[locale];

  if (group === 'calculator') return t.calc;
  if (group === 'converter') return t.convert;
  if (group === 'generator') return t.generate;

  return t.how;
}

function build(
  locale: RestLocale,
  row: Row
): ToolEditorial {
  const group = groupFor(row.category);

  const title = toolName(
    locale as LocaleId,
    row.name
  );

  const category = categoryName(
    locale as LocaleId,
    row.category
  );

  const t = ui[locale];
  const insight = insights[group][locale];

  return {
    family: group,
    reviewed: false,

    kicker: kicker(locale, group),

    title,

    intro:
      genericIntro[locale](
        title,
        category
      ),

    facts: [
      t.input,
      t.output,
      t.local
    ],

    visual: {
      kind: 'flow',
      nodes: [
        t.input,
        title,
        t.output
      ],
      caption:
        t.input +
        ' → ' +
        title +
        ' → ' +
        t.output
    },

    insightLabel: t.insight,
    insightTitle: insight[0],
    insightBody: insight[1],

    privacyLabel: t.privacy,
    privacyTitle: t.privacyTitle,
    privacyBody: t.privacyBody,

    faqTitle: t.faq,

    faq: [
      {
        question: t.exact,
        answer:
          genericIntro[locale](
            title,
            category
          )
      },
      {
        question: t.where,
        answer: t.localAnswer
      }
    ],

    next: []
  };
}

function make(
  locale: RestLocale
): Partial<Record<string, ToolEditorial>> {
  return Object.fromEntries(
    rows.map(
      (row) => [
        row.id,
        build(locale, row)
      ]
    )
  );
}

export const editorialRest8:
  Partial<
    Record<
      LocaleId,
      Partial<Record<string, ToolEditorial>>
    >
  > = {
    ja: make('ja'),
    ar: make('ar'),
    id: make('id'),
    tr: make('tr'),
    pl: make('pl'),
    ko: make('ko'),
    nl: make('nl'),
    vi: make('vi')
  };
