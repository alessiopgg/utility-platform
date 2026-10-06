
import type { LocaleId } from "../core/types.ts";
import type { ToolEditorial } from "./tool-editorial.ts";
import {
  bi,
  simpleEditorial,
  type SimpleEditorialDefinition
} from "./editorial-factories.ts";

const defs: SimpleEditorialDefinition[] = [];

const add = (
  id:string,
  enTitle:string,
  itTitle:string,
  enIntro:string,
  itIntro:string,
  enProcess:string,
  itProcess:string,
  enExample:string,
  itExample:string,
  enInsight:string,
  itInsight:string,
  enBody:string,
  itBody:string,
  family:SimpleEditorialDefinition["family"]="converter",
  inputEn="Image",
  inputIt="Immagine",
  outputEn="Processed image",
  outputIt="Immagine elaborata"
) => defs.push({
  id,
  family,
  title:bi(enTitle,itTitle),
  intro:bi(enIntro,itIntro),
  input:bi(inputEn,inputIt),
  process:bi(enProcess,itProcess),
  output:bi(outputEn,outputIt),
  example:bi(enExample,itExample),
  insightTitle:bi(enInsight,itInsight),
  insightBody:bi(enBody,itBody)
});

add(
  "compress-image",
  "Compress an image by re-encoding it",
  "Comprimi un’immagine ricodificandola",
  "Re-encode the uploaded image as JPEG or WebP using the selected quality.",
  "Ricodifica l’immagine caricata in JPEG o WebP usando la qualità scelta.",
  "Decode → JPEG/WebP encode",
  "Decodifica → codifica JPEG/WebP",
  "UtilityLake reports both original and compressed file size.",
  "UtilityLake mostra sia la dimensione originale sia quella compressa.",
  "Compression changes the encoded image data",
  "La compressione modifica i dati codificati",
  "Lower quality can reduce file size further, but may also introduce visible compression artifacts.",
  "Una qualità più bassa può ridurre ulteriormente il file, ma può introdurre artefatti visibili."
);

add(
  "resize-image",
  "Resize an image to exact dimensions",
  "Ridimensiona un’immagine a dimensioni precise",
  "Resize the image to a selected width and height and export PNG, JPEG or WebP.",
  "Ridimensiona l’immagine a larghezza e altezza scelte ed esporta PNG, JPEG o WebP.",
  "Decode → resample → encode",
  "Decodifica → ricampiona → codifica",
  "Set one dimension to 0 to preserve the original aspect ratio.",
  "Imposta una dimensione a 0 per mantenere il rapporto d’aspetto.",
  "One zero dimension is calculated automatically",
  "Una dimensione a zero viene calcolata automaticamente",
  "The missing dimension is derived from the original width-to-height ratio.",
  "La dimensione mancante viene ricavata dal rapporto tra larghezza e altezza originali."
);

add(
  "crop-image",
  "Crop an image using pixel coordinates",
  "Ritaglia un’immagine usando coordinate in pixel",
  "Select the crop origin and dimensions directly in source-image pixels.",
  "Seleziona origine e dimensioni del ritaglio direttamente nei pixel dell’immagine.",
  "Select source rectangle → PNG",
  "Seleziona rettangolo → PNG",
  "Width or height 0 extends the crop to the corresponding image edge.",
  "Larghezza o altezza 0 estendono il ritaglio fino al bordo corrispondente.",
  "The crop coordinates are bounded by the image",
  "Le coordinate vengono limitate all’immagine",
  "Values outside the bitmap are clamped so the crop remains inside the available pixels.",
  "I valori oltre l’immagine vengono limitati per mantenere il ritaglio nei pixel disponibili."
);

add(
  "rotate-image",
  "Rotate an image clockwise",
  "Ruota un’immagine in senso orario",
  "Rotate the bitmap by the selected angle while expanding the output canvas to contain it.",
  "Ruota la bitmap dell’angolo scelto ampliando il canvas per contenerla.",
  "Rotate canvas geometry",
  "Ruota la geometria del canvas",
  "A 90° rotation swaps the effective width and height.",
  "Una rotazione di 90° scambia di fatto larghezza e altezza.",
  "Arbitrary angles need a larger bounding box",
  "Angoli arbitrari richiedono un riquadro più grande",
  "For non-right-angle rotations, the output canvas expands to avoid clipping the rotated image.",
  "Per rotazioni non ortogonali il canvas viene ampliato per evitare di tagliare l’immagine."
);

add(
  "flip-image",
  "Flip an image horizontally or vertically",
  "Rifletti un’immagine orizzontalmente o verticalmente",
  "Mirror the bitmap across the selected axis.",
  "Riflette la bitmap rispetto all’asse selezionato.",
  "Canvas scale âˆ’1 on one axis",
  "Scala canvas âˆ’1 su un asse",
  "Horizontal flip mirrors left and right; vertical flip mirrors top and bottom.",
  "La riflessione orizzontale scambia destra e sinistra, quella verticale alto e basso.",
  "Flipping preserves pixel dimensions",
  "La riflessione mantiene le dimensioni",
  "Only the orientation changes; width and height remain unchanged.",
  "Cambia soltanto l’orientamento: larghezza e altezza rimangono invariate."
);

const formatConvert = (
  id:string,
  from:string,
  to:string
) => add(
  id,
  `Convert ${from} to ${to}`,
  `Converti ${from} in ${to}`,
  `Decode the source image and re-encode its pixels as ${to} locally.`,
  `Decodifica l’immagine sorgente e ricodifica localmente i pixel in ${to}.`,
  `Decode ${from} → encode ${to}`,
  `Decodifica ${from} → codifica ${to}`,
  `The downloaded file uses the ${to} format.`,
  `Il file scaricato utilizza il formato ${to}.`,
  "Conversion is a re-encode",
  "La conversione è una ricodifica",
  "The original compressed byte stream is not simply renamed; the browser decodes the image and creates a new file.",
  "Il flusso di byte originale non viene semplicemente rinominato: il browser decodifica l’immagine e crea un nuovo file."
);

formatConvert("jpg-to-png","JPG","PNG");
formatConvert("png-to-jpg","PNG","JPG");
formatConvert("webp-to-jpg","WebP","JPG");
formatConvert("webp-to-png","WebP","PNG");
formatConvert("jpg-to-webp","JPG","WebP");
formatConvert("png-to-webp","PNG","WebP");

add(
  "heic-to-jpg",
  "Convert HEIC or HEIF to JPEG",
  "Converti HEIC o HEIF in JPEG",
  "Decode HEIC/HEIF in the browser and encode the result as JPEG.",
  "Decodifica HEIC/HEIF nel browser e codifica il risultato come JPEG.",
  "HEIC decoder → JPEG encode",
  "Decoder HEIC → codifica JPEG",
  "JPEG quality can be selected from 1 to 100.",
  "La qualità JPEG può essere selezionata da 1 a 100.",
  "HEIC conversion uses a dedicated browser library",
  "La conversione HEIC usa una libreria dedicata nel browser",
  "HEIC is not handled by the ordinary canvas decode path on every browser, so UtilityLake uses heic2any for this conversion.",
  "HEIC non è gestito dal normale percorso canvas in tutti i browser, quindi UtilityLake usa heic2any."
);

const svgConvert = (id:string,to:string) => add(
  id,
  `Render SVG as ${to}`,
  `Renderizza SVG come ${to}`,
  `Rasterize the SVG and export it as ${to}.`,
  `Rasterizza l’SVG e lo esporta come ${to}.`,
  `SVG render → ${to}`,
  `Render SVG → ${to}`,
  "Width or height 0 can preserve the corresponding original proportion.",
  "Larghezza o altezza 0 possono mantenere la proporzione originale.",
  "The result is no longer vector graphics",
  "Il risultato non è più vettoriale",
  "PNG or JPEG stores raster pixels, so unlimited vector scaling is lost after conversion.",
  "PNG o JPEG memorizzano pixel raster, quindi dopo la conversione si perde la scalabilità vettoriale illimitata."
);

svgConvert("svg-to-png","PNG");
svgConvert("svg-to-jpg","JPG");

add(
  "image-to-base64",
  "Convert an image to a Base64 Data URL",
  "Converti un’immagine in Data URL Base64",
  "Read the file locally and represent its bytes as a browser Data URL.",
  "Legge localmente il file e rappresenta i suoi byte come Data URL.",
  "FileReader → Data URL",
  "FileReader → Data URL",
  "The output begins with a data:image/... prefix.",
  "L’output inizia con un prefisso data:image/....",
  "Base64 usually increases text size",
  "Base64 generalmente aumenta la dimensione testuale",
  "Encoding binary bytes as Base64 typically needs more characters than the original binary representation.",
  "Rappresentare byte binari in Base64 richiede generalmente più caratteri rispetto ai dati binari originali.",
  "converter","Image file","File immagine","Base64 Data URL","Data URL Base64"
);

add(
  "base64-to-image",
  "Decode Base64 into an image file",
  "Decodifica Base64 in un file immagine",
  "Decode either a full image Data URL or a raw Base64 string into bytes.",
  "Decodifica una Data URL immagine completa o una stringa Base64 grezza in byte.",
  "Base64 → bytes → Blob",
  "Base64 → byte → Blob",
  "A Data URL can preserve its embedded MIME type.",
  "Una Data URL può mantenere il tipo MIME incorporato.",
  "Raw Base64 defaults to PNG",
  "Il Base64 grezzo usa PNG come predefinito",
  "When no Data URL MIME type is provided, the current implementation assumes image/png.",
  "Quando non è presente un tipo MIME nella Data URL, l’implementazione presume image/png.",
  "converter","Base64 / Data URL","Base64 / Data URL","Image file","File immagine"
);

add(
  "remove-exif-metadata",
  "Remove image metadata by re-encoding pixels",
  "Rimuovi i metadati ricodificando i pixel",
  "Decode the visible image and create a fresh JPEG, PNG or WebP file from its pixels.",
  "Decodifica l’immagine visibile e crea un nuovo JPEG, PNG o WebP dai pixel.",
  "Decode pixels → fresh encode",
  "Decodifica pixel → nuova codifica",
  "The exported image is rebuilt rather than editing individual metadata tags.",
  "L’immagine esportata viene ricostruita invece di modificare singoli tag.",
  "Re-encoding strips more than a single EXIF field",
  "La ricodifica elimina più di un singolo campo EXIF",
  "Because a new image is created from decoded pixels, attached metadata is not intentionally copied into the new file.",
  "Poiché viene creata una nuova immagine dai pixel decodificati, i metadati allegati non vengono intenzionalmente copiati."
);

add(
  "exif-viewer",
  "Inspect EXIF and image metadata",
  "Visualizza EXIF e metadati immagine",
  "Read supported EXIF, XMP and other metadata directly from the uploaded file.",
  "Legge EXIF, XMP e altri metadati supportati direttamente dal file.",
  "ExifReader → normalize tags",
  "ExifReader → normalizza tag",
  "Up to 250 cleaned metadata entries are displayed.",
  "Vengono mostrati fino a 250 metadati ripuliti.",
  "Large thumbnail and MakerNote fields are intentionally omitted",
  "Thumbnail e MakerNote vengono intenzionalmente esclusi",
  "Those fields can be large or highly device-specific, so the viewer excludes them from the displayed result.",
  "Questi campi possono essere grandi o molto specifici del dispositivo, quindi non vengono mostrati.",
  "formatter","Image file","File immagine","Metadata","Metadati"
);

add(
  "change-image-dpi",
  "Change JPEG DPI metadata",
  "Modifica i metadati DPI di un JPEG",
  "Update the JPEG XResolution and YResolution metadata without resampling the image pixels.",
  "Aggiorna i metadati JPEG XResolution e YResolution senza ricampionare i pixel.",
  "Edit EXIF resolution fields",
  "Modifica campi EXIF di risoluzione",
  "300 DPI changes metadata while pixel width and height remain the same.",
  "300 DPI modifica i metadati mentre larghezza e altezza in pixel restano uguali.",
  "Changing DPI does not add image detail",
  "Cambiare i DPI non aggiunge dettaglio",
  "DPI metadata can influence physical print sizing, but it does not create additional pixels.",
  "I metadati DPI possono influenzare le dimensioni fisiche di stampa, ma non creano nuovi pixel."
);

add(
  "image-dimensions-checker",
  "Read image pixel dimensions",
  "Leggi le dimensioni in pixel di un’immagine",
  "Decode the image and report width, height and total megapixels.",
  "Decodifica l’immagine e mostra larghezza, altezza e megapixel totali.",
  "Decode bitmap → inspect dimensions",
  "Decodifica bitmap → legge dimensioni",
  "6000 × 4000 pixels = 24 megapixels.",
  "6000 × 4000 pixel = 24 megapixel.",
  "Megapixels are width multiplied by height",
  "I megapixel sono larghezza per altezza",
  "The value is calculated from pixel dimensions and does not depend on DPI metadata.",
  "Il valore viene calcolato dalle dimensioni in pixel e non dipende dai metadati DPI.",
  "formatter","Image file","File immagine","Dimensions","Dimensioni"
);

add(
  "image-file-size-estimator",
  "Estimate encoded image size",
  "Stima la dimensione codificata di un’immagine",
  "Actually re-encode the image using the chosen JPEG or WebP settings and measure the resulting Blob.",
  "Ricodifica realmente l’immagine con le impostazioni JPEG o WebP scelte e misura il Blob risultante.",
  "Test encode → measure Blob",
  "Codifica di prova → misura Blob",
  "The estimate reflects the actual browser encoder output for the chosen settings.",
  "La stima riflette l’output reale dell’encoder del browser con le impostazioni scelte.",
  "This is more concrete than a pixels-only estimate",
  "È più concreto di una stima basata soltanto sui pixel",
  "Image complexity and encoder behavior affect compressed size, so UtilityLake measures a real re-encoding.",
  "Complessità dell’immagine e comportamento dell’encoder influenzano il peso, quindi UtilityLake misura una ricodifica reale.",
  "formatter","Image + encoding settings","Immagine + impostazioni","Estimated size","Dimensione stimata"
);

add(
  "add-image-border",
  "Add a solid border around an image",
  "Aggiungi un bordo uniforme a un’immagine",
  "Create a larger canvas, fill it with the selected color and draw the original image in the center.",
  "Crea un canvas più grande, lo riempie con il colore scelto e disegna l’immagine al centro.",
  "Expand canvas → fill → draw image",
  "Espande canvas → riempie → disegna",
  "A 20 px border adds 40 px to both image dimensions.",
  "Un bordo da 20 px aggiunge 40 px a entrambe le dimensioni.",
  "The border is added outside the original bitmap",
  "Il bordo viene aggiunto fuori dalla bitmap originale",
  "The source image is not shrunk to make room; the output canvas becomes larger.",
  "L’immagine originale non viene ridotta per fare spazio: il canvas finale diventa più grande."
);

add(
  "round-image-corners",
  "Round image corners",
  "Arrotonda gli angoli di un’immagine",
  "Clip the original image with a rounded rectangle and export a transparent PNG.",
  "Ritaglia l’immagine con un rettangolo arrotondato ed esporta PNG trasparente.",
  "Rounded clip → PNG",
  "Clip arrotondato → PNG",
  "The radius is capped at half the image width or height.",
  "Il raggio viene limitato a metà della larghezza o altezza.",
  "Transparency is needed outside the rounded corners",
  "Serve trasparenza fuori dagli angoli arrotondati",
  "PNG preserves those transparent corner regions.",
  "PNG mantiene trasparenti le zone esterne agli angoli."
);

add(
  "grayscale-image",
  "Convert an image to grayscale",
  "Converti un’immagine in scala di grigi",
  "Apply the browser Canvas grayscale filter and export the result as PNG.",
  "Applica il filtro grayscale del Canvas del browser ed esporta PNG.",
  "Canvas grayscale filter",
  "Filtro grayscale Canvas",
  "Pixel dimensions remain unchanged.",
  "Le dimensioni in pixel rimangono invariate.",
  "Color information is removed from the rendered result",
  "Le informazioni cromatiche vengono rimosse dal risultato",
  "The transformation changes displayed pixel colors rather than simply adding a metadata flag.",
  "La trasformazione modifica i colori dei pixel visualizzati e non aggiunge semplicemente un flag."
);

add(
  "image-opacity-tool",
  "Apply transparency to an image",
  "Applica trasparenza a un’immagine",
  "Draw the source image with a selected Canvas global alpha and export transparent PNG.",
  "Disegna l’immagine con un alpha globale scelto ed esporta PNG trasparente.",
  "Apply globalAlpha",
  "Applica globalAlpha",
  "60% opacity uses an alpha factor of 0.6.",
  "Un’opacità del 60% usa un fattore alpha di 0,6.",
  "PNG keeps the generated transparency",
  "PNG mantiene la trasparenza generata",
  "A format without alpha support would not preserve the same transparent result.",
  "Un formato senza supporto alpha non manterrebbe lo stesso risultato."
);

add(
  "pixelate-image",
  "Pixelate an image",
  "Pixelizza un’immagine",
  "Downscale the image according to the block size, then enlarge it again with smoothing disabled.",
  "Riduce l’immagine in base alla dimensione dei blocchi e poi la ingrandisce disattivando lo smoothing.",
  "Downsample → nearest-neighbor upscale",
  "Riduce → ingrandisce senza smoothing",
  "Larger block sizes create larger visible pixels.",
  "Blocchi più grandi producono pixel visivi più grandi.",
  "Pixelation is produced by resolution reduction",
  "La pixelizzazione deriva da una riduzione di risoluzione",
  "It is not a blur: neighboring regions remain block-like instead of being smoothly averaged.",
  "Non è una sfocatura: le regioni restano a blocchi invece di essere mediate in modo continuo."
);

add(
  "blur-image",
  "Blur an image",
  "Sfoca un’immagine",
  "Apply the Canvas blur filter using the selected pixel radius.",
  "Applica il filtro blur del Canvas usando il raggio in pixel scelto.",
  "Canvas blur(radius)",
  "Canvas blur(raggio)",
  "A higher radius produces a stronger blur.",
  "Un raggio maggiore produce una sfocatura più forte.",
  "Blur and pixelation are fundamentally different",
  "Sfocatura e pixelizzazione sono operazioni diverse",
  "Blur blends neighboring image information while pixelation deliberately creates discrete blocks.",
  "La sfocatura miscela informazioni vicine mentre la pixelizzazione crea deliberatamente blocchi discreti."
);

add(
  "image-color-picker",
  "Read the color of one image pixel",
  "Leggi il colore di un pixel dell’immagine",
  "Read the RGBA data at a selected X/Y pixel coordinate.",
  "Legge i dati RGBA alla coordinata X/Y selezionata.",
  "Canvas getImageData(1×1)",
  "Canvas getImageData(1×1)",
  "The result is returned as both HEX and RGB.",
  "Il risultato viene restituito sia in HEX sia in RGB.",
  "Coordinates are clamped to valid pixels",
  "Le coordinate vengono limitate ai pixel validi",
  "Values beyond the image edge are moved back to the nearest valid coordinate.",
  "I valori oltre il bordo vengono riportati alla coordinata valida più vicina.",
  "formatter","Image + X/Y","Immagine + X/Y","HEX + RGB","HEX + RGB"
);

add(
  "extract-colors-from-image",
  "Extract approximate dominant colors",
  "Estrai colori dominanti approssimativi",
  "Downsample the image, sample pixels and group RGB values into coarse color buckets.",
  "Riduce l’immagine, campiona i pixel e raggruppa valori RGB in fasce cromatiche.",
  "Sample → quantize RGB → rank",
  "Campiona → quantizza RGB → ordina",
  "Choose between 1 and 12 returned colors.",
  "Puoi ottenere da 1 a 12 colori.",
  "The palette is approximate by design",
  "La palette è approssimata per scelta",
  "Quantizing channels into coarse buckets makes the operation fast but does not perform full clustering.",
  "Quantizzare i canali in fasce rende l’operazione rapida ma non esegue un clustering completo.",
  "generator","Image","Immagine","Dominant colors","Colori dominanti"
);

add(
  "batch-image-resizer",
  "Resize multiple images at once",
  "Ridimensiona più immagini insieme",
  "Process every selected image sequentially and export each result as JPEG.",
  "Elabora in sequenza ogni immagine selezionata ed esporta ogni risultato come JPEG.",
  "For each file → resize → JPEG",
  "Per ogni file → ridimensiona → JPEG",
  "Height 0 preserves each image’s own aspect ratio.",
  "Altezza 0 mantiene il rapporto d’aspetto di ogni immagine.",
  "Each source keeps its own proportions",
  "Ogni sorgente mantiene le proprie proporzioni",
  "With automatic height, images with different original aspect ratios receive different output heights.",
  "Con altezza automatica, immagini con rapporti diversi ricevono altezze finali differenti."
);

const socialCrop = (
  id:string,
  enTitle:string,
  itTitle:string,
  w:number,
  h:number
) => add(
  id,
  enTitle,
  itTitle,
  `Center-crop the uploaded image to fill a fixed ${w}×${h} output.`,
  `Ritaglia centralmente l’immagine per riempire un output fisso ${w}×${h}.`,
  `Center cover → ${w}×${h} JPEG`,
  `Cover centrale → JPEG ${w}×${h}`,
  `The output is always ${w}×${h} pixels.`,
  `L’output è sempre ${w}×${h} pixel.`,
  "Cover resizing can crop the edges",
  "Il ridimensionamento cover può tagliare i bordi",
  "The image is scaled until the full target rectangle is filled, then excess content is removed symmetrically from the center.",
  "L’immagine viene scalata fino a riempire il rettangolo e il contenuto in eccesso viene rimosso simmetricamente dal centro."
);

socialCrop("profile-picture-cropper","Crop a profile picture","Ritaglia un’immagine profilo",1080,1080);
socialCrop("youtube-thumbnail-resizer","Resize for a YouTube thumbnail","Ridimensiona per thumbnail YouTube",1280,720);
socialCrop("instagram-image-resizer","Resize for an Instagram square","Ridimensiona per Instagram quadrato",1080,1080);
socialCrop("instagram-story-resizer","Resize for an Instagram Story","Ridimensiona per una Story Instagram",1080,1920);
socialCrop("opengraph-image-resizer","Resize for an Open Graph image","Ridimensiona per immagine Open Graph",1200,630);

export const imageEditorialBatch:
  Partial<Record<string, Partial<Record<LocaleId, ToolEditorial>>>> =
  Object.fromEntries(defs.map(def => [def.id, simpleEditorial(def)]));

