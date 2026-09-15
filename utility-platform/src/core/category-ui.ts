export type CategoryUiConfig = {
  slug: string;
  icon: string;
  featured: string[];
  groups: Array<{ title: string; toolIds: string[] }>;
  related: string[];
};

export const categoryUi: Record<string, CategoryUiConfig> = {
  math: {
    slug: 'math', icon: 'calculator',
    featured: ['percentage-calculator','fraction-calculator','average-calculator','weighted-average-calculator','standard-deviation-calculator','rule-of-three-calculator'],
    groups: [
      { title: 'Percentages & ratios', toolIds: ['percentage-calculator','percentage-increase-calculator','percentage-decrease-calculator','percentage-difference-calculator','reverse-percentage-calculator','ratio-calculator','proportion-calculator'] },
      { title: 'Averages & statistics', toolIds: ['average-calculator','weighted-average-calculator','median-calculator','mode-calculator','standard-deviation-calculator'] },
      { title: 'Numbers & fractions', toolIds: ['fraction-calculator','fraction-to-decimal','decimal-to-fraction','scientific-notation-converter','square-root-calculator'] },
    ], related: ['business','units','construction'],
  },
  business: {
    slug: 'business', icon: 'briefcase',
    featured: ['margin-calculator','profit-calculator','roi-calculator','compound-interest-calculator','loan-payment-calculator','discount-calculator'],
    groups: [
      { title: 'Pricing & profit', toolIds: ['margin-calculator','markup-calculator','profit-calculator','break-even-calculator','discount-calculator'] },
      { title: 'Growth & marketing', toolIds: ['roi-calculator','roas-calculator','cac-calculator','ltv-calculator','conversion-rate-calculator','churn-rate-calculator','growth-rate-calculator','cagr-calculator'] },
      { title: 'Loans & savings', toolIds: ['simple-interest-calculator','compound-interest-calculator','loan-payment-calculator','amortization-calculator','savings-goal-calculator'] },
    ], related: ['math','units','creator-calculators'],
  },
  construction: {
    slug: 'construction', icon: 'ruler',
    featured: ['concrete-calculator','brick-calculator','tile-calculator','paint-calculator','drywall-calculator','gravel-calculator'],
    groups: [
      { title: 'Materials', toolIds: ['concrete-calculator','cement-calculator','brick-calculator','concrete-block-calculator','drywall-calculator','plaster-calculator'] },
      { title: 'Surfaces & finishes', toolIds: ['tile-calculator','flooring-calculator','hardwood-calculator','laminate-calculator','carpet-calculator','paint-calculator','wallpaper-calculator'] },
      { title: 'Outdoor & volume', toolIds: ['gravel-calculator','sand-calculator','mulch-calculator','soil-calculator','asphalt-calculator'] },
    ], related: ['units','math','maker'],
  },
  'creator-calculators': {
    slug: 'creator-calculators', icon: 'camera',
    featured: ['dpi-calculator','print-size-calculator','depth-of-field-calculator','exposure-calculator','aspect-ratio-calculator','video-bitrate-calculator'],
    groups: [
      { title: 'Print & resolution', toolIds: ['dpi-calculator','ppi-calculator','print-size-calculator','megapixel-calculator','image-resolution-calculator','print-resolution-checker'] },
      { title: 'Lens & exposure', toolIds: ['sensor-crop-factor-calculator','equivalent-focal-length-calculator','depth-of-field-calculator','hyperfocal-distance-calculator','exposure-calculator','shutter-speed-calculator','long-exposure-calculator','nd-filter-calculator','field-of-view-calculator'] },
      { title: 'Video & aspect ratio', toolIds: ['aspect-ratio-calculator','aspect-ratio-converter','video-bitrate-calculator'] },
    ], related: ['image','color','media'],
  },
  text: {
    slug: 'text', icon: 'text',
    featured: ['word-counter','character-counter','reading-time-calculator','title-case-converter','remove-duplicate-lines','sort-lines'],
    groups: [
      { title: 'Count & measure', toolIds: ['word-counter','character-counter','sentence-counter','paragraph-counter','reading-time-calculator','speaking-time-calculator'] },
      { title: 'Change case', toolIds: ['uppercase-converter','lowercase-converter','title-case-converter','sentence-case-converter','camel-case-converter','snake-case-converter','kebab-case-converter'] },
      { title: 'Clean & organize', toolIds: ['remove-duplicate-lines','sort-lines','reverse-text','reverse-lines','remove-empty-lines'] },
    ], related: ['developer','encoding','web'],
  },
  developer: {
    slug: 'developer', icon: 'code',
    featured: ['json-formatter','json-validator','json-to-csv','csv-to-json','html-formatter','sql-formatter'],
    groups: [
      { title: 'JSON & data', toolIds: ['json-formatter','json-beautifier','json-minifier','json-validator','json-viewer','json-sorter','json-diff'] },
      { title: 'Convert structured data', toolIds: ['json-to-csv','csv-to-json','json-to-xml','xml-to-json','json-to-yaml','yaml-to-json'] },
      { title: 'Format & minify', toolIds: ['html-formatter','html-minifier','css-formatter','css-minifier','javascript-formatter','sql-formatter'] },
    ], related: ['encoding','text','web'],
  },
  encoding: {
    slug: 'encoding', icon: 'hash',
    featured: ['base64-encoder','base64-decoder','url-encoder','jwt-decoder','uuid-generator','sha-256-generator'],
    groups: [
      { title: 'Encode & decode', toolIds: ['base64-encoder','base64-decoder','url-encoder','url-decoder','html-entity-encoder','html-entity-decoder'] },
      { title: 'Hashes', toolIds: ['md5-generator','sha-1-generator','sha-256-generator','sha-512-generator'] },
      { title: 'IDs & tokens', toolIds: ['jwt-decoder','uuid-generator','ulid-generator','random-token-generator'] },
    ], related: ['developer','text','random'],
  },
  random: {
    slug: 'random', icon: 'dice',
    featured: ['random-number-generator','random-name-picker','random-wheel','random-team-generator','dice-roller','random-password-generator'],
    groups: [
      { title: 'Pick & decide', toolIds: ['random-name-picker','random-wheel','random-list-picker','coin-flip','dice-roller','yes-or-no-generator'] },
      { title: 'Teams & groups', toolIds: ['random-team-generator','random-group-generator','random-pair-generator','tournament-pairing-generator','secret-santa-generator'] },
      { title: 'Generate values', toolIds: ['random-number-generator','random-letter-generator','random-word-generator','random-date-generator','random-time-generator','random-password-generator','random-uuid-generator'] },
    ], related: ['encoding','math','text'],
  },
  color: {
    slug: 'color', icon: 'palette',
    featured: ['color-picker','color-palette-generator','gradient-generator','hex-to-rgb','color-contrast-checker','wcag-contrast-calculator'],
    groups: [
      { title: 'Choose & generate', toolIds: ['color-picker','color-palette-generator','palette-from-image','random-color-generator','gradient-generator','css-gradient-generator'] },
      { title: 'Convert colors', toolIds: ['hex-to-rgb','rgb-to-hex','hex-to-hsl','hsl-to-hex','rgb-to-hsl','cmyk-to-rgb','rgb-to-cmyk'] },
      { title: 'Contrast & harmony', toolIds: ['color-contrast-checker','wcag-contrast-calculator','complementary-color-generator','analogous-color-generator','triadic-color-generator'] },
    ], related: ['image','web','creator-calculators'],
  },
  image: {
    slug: 'image', icon: 'image',
    featured: ['compress-image','resize-image','crop-image','jpg-to-png','png-to-webp','remove-exif-metadata'],
    groups: [
      { title: 'Resize & transform', toolIds: ['resize-image','crop-image','rotate-image','flip-image','batch-image-resizer','profile-picture-cropper'] },
      { title: 'Compress & optimize', toolIds: ['compress-image','remove-exif-metadata','exif-viewer'] },
      { title: 'Convert formats', toolIds: ['jpg-to-png','png-to-jpg','webp-to-jpg','webp-to-png','jpg-to-webp','png-to-webp','heic-to-jpg','svg-to-png','svg-to-jpg','image-to-base64','base64-to-image'] },
    ], related: ['pdf','web','color','creator-calculators'],
  },
  web: {
    slug: 'web', icon: 'globe',
    featured: ['favicon-generator','svg-optimizer','web-manifest-generator','robots-txt-generator','meta-tag-generator','opengraph-tag-generator'],
    groups: [
      { title: 'Icons & images', toolIds: ['favicon-generator','image-to-favicon','favicon-checker','ico-to-png','png-to-ico','placeholder-image-generator'] },
      { title: 'SVG utilities', toolIds: ['svg-optimizer','svg-viewer','svg-to-data-uri','data-uri-to-image'] },
      { title: 'Site metadata', toolIds: ['web-manifest-generator','robots-txt-generator','sitemap-xml-generator','meta-tag-generator','opengraph-tag-generator','twitter-card-generator','schema-markup-generator'] },
    ], related: ['developer','image','color'],
  },
  'qr-barcode': {
    slug: 'qr-barcode', icon: 'qr',
    featured: ['url-qr-generator','text-qr-generator','wi-fi-qr-generator','qr-reader-from-image','barcode-generator','code-128-generator'],
    groups: [
      { title: 'Create QR codes', toolIds: ['url-qr-generator','text-qr-generator','wi-fi-qr-generator','email-qr-generator','phone-qr-generator','sms-qr-generator','whatsapp-qr-generator','vcard-qr-generator','location-qr-generator','calendar-event-qr-generator'] },
      { title: 'Customize & read', toolIds: ['qr-color-customizer','qr-with-logo','qr-reader-from-image'] },
      { title: 'Barcodes', toolIds: ['barcode-generator','code-128-generator','ean-13-generator','ean-8-generator','upc-a-generator'] },
    ], related: ['image','web','encoding'],
  },
  pdf: {
    slug: 'pdf', icon: 'document',
    featured: ['merge-pdf','split-pdf','compress-pdf','pdf-to-jpg','images-to-pdf','reorder-pdf-pages'],
    groups: [
      { title: 'Organize PDFs', toolIds: ['merge-pdf','split-pdf','rotate-pdf','delete-pdf-pages','extract-pdf-pages','reorder-pdf-pages','add-pdf-page-numbers'] },
      { title: 'Convert PDFs', toolIds: ['images-to-pdf','jpg-to-pdf','png-to-pdf','pdf-to-jpg','pdf-to-png'] },
      { title: 'Optimize & inspect', toolIds: ['compress-pdf','add-pdf-watermark','remove-pdf-metadata','pdf-metadata-viewer','pdf-page-count','pdf-size-analyzer'] },
    ], related: ['image','text','web'],
  },
  media: {
    slug: 'media', icon: 'media',
    featured: ['mp3-to-wav','wav-to-mp3','mp4-to-mp3','audio-trimmer','video-trimmer','mp4-to-gif'],
    groups: [
      { title: 'Convert audio', toolIds: ['mp3-to-wav','wav-to-mp3','m4a-to-mp3','ogg-to-mp3','aac-to-mp3','stereo-to-mono'] },
      { title: 'Edit audio', toolIds: ['audio-trimmer','audio-cutter','audio-joiner','change-audio-volume'] },
      { title: 'Video & subtitles', toolIds: ['extract-audio-from-video','mp4-to-mp3','video-trimmer','video-cropper','video-rotator','mute-video','gif-to-mp4','mp4-to-gif'] },
    ], related: ['image','creator-calculators','pdf'],
  },
  maker: {
    slug: 'maker', icon: 'cube',
    featured: ['stl-viewer','stl-dimensions-checker','stl-volume-calculator','filament-cost-calculator','3d-print-cost-calculator','layer-height-calculator'],
    groups: [
      { title: 'Inspect models', toolIds: ['stl-viewer','stl-dimensions-checker','stl-volume-calculator','model-scale-calculator'] },
      { title: 'Material & cost', toolIds: ['filament-length-calculator','filament-weight-calculator','filament-cost-calculator','3d-print-cost-calculator','print-time-cost-calculator','resin-volume-calculator','resin-cost-calculator'] },
      { title: 'Printer setup', toolIds: ['layer-height-calculator','steps-per-mm-calculator','flow-rate-calculator','extrusion-multiplier-calculator','e-steps-calculator','nozzle-flow-calculator','support-angle-calculator'] },
    ], related: ['construction','units','math'],
  },
  units: {
    slug: 'units', icon: 'swap',
    featured: ['length-converter','weight-converter','temperature-converter','speed-converter','data-storage-converter','time-converter'],
    groups: [
      { title: 'Everyday units', toolIds: ['length-converter','area-converter','volume-converter','weight-converter','temperature-converter','speed-converter','time-converter'] },
      { title: 'Engineering units', toolIds: ['pressure-converter','energy-converter','power-converter','torque-converter','density-converter','force-converter','frequency-converter'] },
      { title: 'Digital & transport', toolIds: ['fuel-economy-converter','data-storage-converter','data-transfer-rate-converter','angle-converter'] },
    ], related: ['math','construction','maker'],
  },
};

export const homePrimaryCategorySlugs = ['pdf','image','developer','media','math','units','text','qr-barcode'];
export const homeQuickToolIds = ['merge-pdf','resize-image','json-formatter','url-qr-generator','mp3-to-wav','percentage-calculator'];
