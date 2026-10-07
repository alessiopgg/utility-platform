import type { LocaleId } from '../core/types.ts';
import type { ToolEditorial } from './tool-editorial.ts';
import { toolName, categoryName } from './content.ts';

type CompletionLocale = 'es' | 'pt-BR' | 'de' | 'fr';

type Group =
  | 'percentage'
  | 'developer'
  | 'random'
  | 'color'
  | 'image'
  | 'web'
  | 'qr'
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
  }
];

const ui = {
  es: {
    input: 'Entrada',
    output: 'Resultado',
    local: 'Procesamiento local',
    how: 'CÓMO FUNCIONA',
    calc: 'CÓMO SE CALCULA',
    convert: 'LÓGICA DE CONVERSIÓN',
    generate: 'CÓMO SE GENERA',
    insight: 'CONVIENE SABERLO',
    faq: 'En resumen',
    privacy: 'PRIVACIDAD POR DISEÑO',
    privacyTitle: 'El contenido permanece en el navegador',
    privacyBody:
      'El procesamiento se realiza directamente en la página sin necesidad de enviar el contenido a UtilityLake.',
    exact: '¿Qué hace exactamente?',
    where: '¿Dónde se procesa?',
    localAnswer:
      'El procesamiento se realiza localmente en el navegador.',
    example: '¿Un ejemplo?'
  },

  'pt-BR': {
    input: 'Entrada',
    output: 'Resultado',
    local: 'Processamento local',
    how: 'COMO FUNCIONA',
    calc: 'COMO É CALCULADO',
    convert: 'LÓGICA DE CONVERSÃO',
    generate: 'COMO É GERADO',
    insight: 'BOM SABER',
    faq: 'Em resumo',
    privacy: 'PRIVACIDADE POR DESIGN',
    privacyTitle: 'O conteúdo permanece no navegador',
    privacyBody:
      'O processamento é realizado diretamente na página sem necessidade de enviar o conteúdo à UtilityLake.',
    exact: 'O que exatamente a ferramenta faz?',
    where: 'Onde o processamento acontece?',
    localAnswer:
      'O processamento é realizado localmente no navegador.',
    example: 'Um exemplo?'
  },

  de: {
    input: 'Eingabe',
    output: 'Ergebnis',
    local: 'Lokale Verarbeitung',
    how: 'SO FUNKTIONIERT ES',
    calc: 'SO WIRD ES BERECHNET',
    convert: 'UMRECHNUNGSLOGIK',
    generate: 'SO WIRD ES ERZEUGT',
    insight: 'GUT ZU WISSEN',
    faq: 'Kurz erklärt',
    privacy: 'DATENSCHUTZ VON ANFANG AN',
    privacyTitle: 'Der Inhalt bleibt im Browser',
    privacyBody:
      'Die Verarbeitung erfolgt direkt auf der Seite, ohne dass der Inhalt an UtilityLake gesendet werden muss.',
    exact: 'Was macht das Werkzeug genau?',
    where: 'Wo findet die Verarbeitung statt?',
    localAnswer:
      'Die Verarbeitung erfolgt lokal im Browser.',
    example: 'Ein Beispiel?'
  },

  fr: {
    input: 'Entrée',
    output: 'Résultat',
    local: 'Traitement local',
    how: 'COMMENT ÇA FONCTIONNE',
    calc: 'COMMENT LE CALCUL EST EFFECTUÉ',
    convert: 'LOGIQUE DE CONVERSION',
    generate: 'COMMENT LE RÉSULTAT EST GÉNÉRÉ',
    insight: 'BON À SAVOIR',
    faq: 'En bref',
    privacy: 'CONFIDENTIALITÉ INTÉGRÉE',
    privacyTitle: 'Le contenu reste dans le navigateur',
    privacyBody:
      'Le traitement est effectué directement dans la page sans qu’il soit nécessaire d’envoyer le contenu à UtilityLake.',
    exact: 'Que fait exactement cet outil ?',
    where: 'Où le traitement est-il effectué ?',
    localAnswer:
      'Le traitement est effectué localement dans le navigateur.',
    example: 'Un exemple ?'
  }
} as const;

const insights: Record<
  Group,
  Record<CompletionLocale, [string, string]>
> = {
  percentage: {
    es: [
      'El porcentaje se convierte primero a forma decimal',
      'Dividir el porcentaje entre 100 permite multiplicarlo directamente por el valor de referencia.'
    ],
    'pt-BR': [
      'A porcentagem é convertida primeiro para forma decimal',
      'Dividir a porcentagem por 100 permite multiplicá-la diretamente pelo valor de referência.'
    ],
    de: [
      'Der Prozentsatz wird zuerst in eine Dezimalzahl umgewandelt',
      'Durch Division durch 100 kann der Prozentsatz direkt mit dem Bezugswert multipliziert werden.'
    ],
    fr: [
      'Le pourcentage est d’abord converti en valeur décimale',
      'Diviser le pourcentage par 100 permet de le multiplier directement par la valeur de référence.'
    ]
  },

  developer: {
    es: [
      'El formato de entrada importa',
      'Sintaxis, estructura, caracteres especiales y espacios pueden cambiar el resultado del procesamiento.'
    ],
    'pt-BR': [
      'O formato de entrada importa',
      'Sintaxe, estrutura, caracteres especiais e espaços podem alterar o resultado do processamento.'
    ],
    de: [
      'Das Eingabeformat ist wichtig',
      'Syntax, Struktur, Sonderzeichen und Leerraum können das Verarbeitungsergebnis beeinflussen.'
    ],
    fr: [
      'Le format d’entrée est important',
      'Syntaxe, structure, caractères spéciaux et espaces peuvent modifier le résultat du traitement.'
    ]
  },

  random: {
    es: [
      'Los resultados pueden cambiar entre ejecuciones',
      'Una herramienta aleatoria está diseñada para poder producir una selección o secuencia diferente cada vez.'
    ],
    'pt-BR': [
      'Os resultados podem mudar entre execuções',
      'Uma ferramenta aleatória foi projetada para poder produzir uma seleção ou sequência diferente a cada execução.'
    ],
    de: [
      'Ergebnisse können sich zwischen Durchläufen ändern',
      'Ein Zufallswerkzeug ist darauf ausgelegt, bei neuen Durchläufen unterschiedliche Auswahlen oder Folgen erzeugen zu können.'
    ],
    fr: [
      'Les résultats peuvent changer entre deux exécutions',
      'Un outil aléatoire est conçu pour pouvoir produire une sélection ou une séquence différente à chaque exécution.'
    ]
  },

  color: {
    es: [
      'El espacio y el formato de color importan',
      'HEX, RGB, HSL y otros modelos representan el color de formas diferentes aunque puedan describir colores equivalentes.'
    ],
    'pt-BR': [
      'O espaço e o formato de cor importam',
      'HEX, RGB, HSL e outros modelos representam cores de maneiras diferentes, mesmo quando descrevem cores equivalentes.'
    ],
    de: [
      'Farbraum und Farbformat spielen eine Rolle',
      'HEX, RGB, HSL und andere Modelle stellen Farben unterschiedlich dar, auch wenn sie gleichwertige Farben beschreiben.'
    ],
    fr: [
      'L’espace et le format colorimétriques comptent',
      'HEX, RGB, HSL et les autres modèles représentent les couleurs différemment même lorsqu’ils décrivent des couleurs équivalentes.'
    ]
  },

  image: {
    es: [
      'El archivo de origen influye en el resultado',
      'Formato, dimensiones, compresión, transparencia y metadatos pueden afectar a la imagen generada.'
    ],
    'pt-BR': [
      'O arquivo de origem influencia o resultado',
      'Formato, dimensões, compressão, transparência e metadados podem afetar a imagem gerada.'
    ],
    de: [
      'Die Quelldatei beeinflusst das Ergebnis',
      'Format, Abmessungen, Kompression, Transparenz und Metadaten können das erzeugte Bild beeinflussen.'
    ],
    fr: [
      'Le fichier source influence le résultat',
      'Format, dimensions, compression, transparence et métadonnées peuvent affecter l’image produite.'
    ]
  },

  web: {
    es: [
      'Conviene revisar el resultado antes de publicarlo',
      'Los recursos web generados pueden necesitar ajustes según el sitio, el framework o los requisitos del proyecto.'
    ],
    'pt-BR': [
      'Vale a pena revisar o resultado antes de publicar',
      'Recursos web gerados podem precisar de ajustes conforme o site, framework ou requisitos do projeto.'
    ],
    de: [
      'Das Ergebnis sollte vor der Veröffentlichung geprüft werden',
      'Erzeugte Web-Ressourcen können je nach Website, Framework oder Projektanforderungen weitere Anpassungen benötigen.'
    ],
    fr: [
      'Il est utile de vérifier le résultat avant publication',
      'Les ressources web générées peuvent nécessiter des ajustements selon le site, le framework ou les exigences du projet.'
    ]
  },

  qr: {
    es: [
      'La legibilidad depende del contenido y del diseño',
      'Contraste, tamaño, densidad de datos y calidad de la imagen pueden influir en la lectura de códigos QR y de barras.'
    ],
    'pt-BR': [
      'A legibilidade depende do conteúdo e do design',
      'Contraste, tamanho, densidade de dados e qualidade da imagem podem influenciar a leitura de QR codes e códigos de barras.'
    ],
    de: [
      'Die Lesbarkeit hängt von Inhalt und Gestaltung ab',
      'Kontrast, Größe, Datendichte und Bildqualität können das Lesen von QR- und Barcodes beeinflussen.'
    ],
    fr: [
      'La lisibilité dépend du contenu et de la conception',
      'Contraste, taille, densité des données et qualité de l’image peuvent influencer la lecture des QR codes et codes-barres.'
    ]
  },

  media: {
    es: [
      'Formato y calidad afectan al archivo final',
      'Códec, bitrate, duración, resolución y características de la fuente pueden cambiar tamaño y calidad del resultado.'
    ],
    'pt-BR': [
      'Formato e qualidade afetam o arquivo final',
      'Codec, bitrate, duração, resolução e características da origem podem alterar tamanho e qualidade do resultado.'
    ],
    de: [
      'Format und Qualität beeinflussen die Ausgabedatei',
      'Codec, Bitrate, Dauer, Auflösung und Eigenschaften der Quelle können Größe und Qualität des Ergebnisses verändern.'
    ],
    fr: [
      'Le format et la qualité influencent le fichier final',
      'Codec, débit, durée, résolution et caractéristiques de la source peuvent modifier la taille et la qualité du résultat.'
    ]
  }
};

function groupFor(row: Row): Group {
  if (row.id === 'percentage-calculator') return 'percentage';

  switch (row.category) {
    case 'Developer & Data Tools':
      return 'developer';

    case 'Random & Picker Tools':
      return 'random';

    case 'Color & Design Tools':
      return 'color';

    case 'Image Tools':
      return 'image';

    case 'Web Asset Tools':
      return 'web';

    case 'QR & Barcode Tools':
      return 'qr';

    case 'Audio, Video & Subtitle Tools':
      return 'media';

    default:
      throw new Error('Unsupported completion category: ' + row.category);
  }
}

function familyFor(
  group: Group
): NonNullable<ToolEditorial['family']> {
  switch (group) {
    case 'percentage':
      return 'calculator';

    case 'developer':
      return 'formatter';

    case 'random':
      return 'generator';

    case 'color':
      return 'converter';

    case 'image':
    case 'media':
      return 'media';

    case 'web':
    case 'qr':
      return 'generator';
  }
}

function kickerFor(
  locale: CompletionLocale,
  family: NonNullable<ToolEditorial['family']>
): string {
  const t = ui[locale];

  if (family === 'calculator') return t.calc;
  if (family === 'converter') return t.convert;
  if (family === 'generator') return t.generate;

  return t.how;
}

function genericIntro(
  locale: CompletionLocale,
  title: string,
  category: string
): string {
  switch (locale) {
    case 'es':
      return (
        'Utiliza ' +
        title +
        ' directamente en el navegador. Esta herramienta forma parte de ' +
        category +
        ' y genera el resultado en la propia página.'
      );

    case 'pt-BR':
      return (
        'Use ' +
        title +
        ' diretamente no navegador. Esta ferramenta faz parte de ' +
        category +
        ' e gera o resultado na própria página.'
      );

    case 'de':
      return (
        'Nutze ' +
        title +
        ' direkt im Browser. Dieses Werkzeug gehört zu ' +
        category +
        ' und erzeugt das Ergebnis direkt auf der Seite.'
      );

    case 'fr':
      return (
        'Utilisez ' +
        title +
        ' directement dans le navigateur. Cet outil appartient à ' +
        category +
        ' et produit le résultat directement dans la page.'
      );
  }
}

function percentageIntro(locale: CompletionLocale): string {
  switch (locale) {
    case 'es':
      return 'Calcula qué cantidad representa un porcentaje determinado de un valor.';

    case 'pt-BR':
      return 'Calcule qual quantidade corresponde a uma determinada porcentagem de um valor.';

    case 'de':
      return 'Berechne, welcher Betrag einem bestimmten Prozentsatz eines Werts entspricht.';

    case 'fr':
      return 'Calculez quelle quantité correspond à un pourcentage donné d’une valeur.';
  }
}

function percentageExample(locale: CompletionLocale): string {
  switch (locale) {
    case 'es':
      return '20% de 150 = 30';

    case 'pt-BR':
      return '20% de 150 = 30';

    case 'de':
      return '20 % von 150 = 30';

    case 'fr':
      return '20 % de 150 = 30';
  }
}

function build(
  locale: CompletionLocale,
  row: Row
): ToolEditorial {
  const group = groupFor(row);
  const family = familyFor(group);

  const title = toolName(
    locale as LocaleId,
    row.name
  );

  const localizedCategory = categoryName(
    locale as LocaleId,
    row.category
  );

  const t = ui[locale];

  const intro =
    group === 'percentage'
      ? percentageIntro(locale)
      : genericIntro(
          locale,
          title,
          localizedCategory
        );

  const insight = insights[group][locale];

  const process =
    group === 'percentage'
      ? 'percentage ÷ 100 × value'
      : title;

  const example =
    group === 'percentage'
      ? percentageExample(locale)
      : t.localAnswer;

  return {
    family,
    reviewed: false,

    kicker: kickerFor(locale, family),

    title,
    intro,

    facts: [
      t.input,
      t.output,
      t.local
    ],

    visual: {
      kind: 'flow',
      nodes: [
        t.input,
        process,
        t.output
      ],
      caption:
        group === 'percentage'
          ? example
          : t.input + ' → ' + title + ' → ' + t.output
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
        question:
          group === 'percentage'
            ? t.exact
            : t.exact,
        answer:
          group === 'percentage'
            ? 'percentage ÷ 100 × value'
            : intro
      },
      {
        question:
          group === 'percentage'
            ? t.example
            : t.where,
        answer: example
      }
    ],

    next: []
  };
}

function make(
  locale: CompletionLocale
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

export const completionEditorialEs =
  make('es');

export const completionEditorialPtBr =
  make('pt-BR');

export const completionEditorialDe =
  make('de');

export const completionEditorialFr =
  make('fr');
