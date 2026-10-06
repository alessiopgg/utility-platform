
import type { LocaleId } from "../core/types.ts";
import type { ToolEditorial } from "./tool-editorial.ts";
import {
  bi,
  simpleEditorial,
  type SimpleEditorialDefinition
} from "./editorial-factories.ts";

const d = (
  id:string,
  family:SimpleEditorialDefinition["family"],
  enTitle:string,itTitle:string,
  enIntro:string,itIntro:string,
  enInput:string,itInput:string,
  enProcess:string,itProcess:string,
  enOutput:string,itOutput:string,
  enExample:string,itExample:string,
  enInsight:string,itInsight:string,
  enBody:string,itBody:string
):SimpleEditorialDefinition => ({
  id,family,
  title:bi(enTitle,itTitle),
  intro:bi(enIntro,itIntro),
  input:bi(enInput,itInput),
  process:bi(enProcess,itProcess),
  output:bi(enOutput,itOutput),
  example:bi(enExample,itExample),
  insightTitle:bi(enInsight,itInsight),
  insightBody:bi(enBody,itBody)
});

const defs:SimpleEditorialDefinition[] = [

  d("favicon-generator","generator",
    "Generate a text-based SVG favicon","Genera una favicon SVG testuale",
    "Create a 64×64 SVG favicon from one or two characters plus foreground and background colors.","Crea una favicon SVG 64×64 da uno o due caratteri con colori di testo e sfondo.",
    "Text + colors","Testo + colori","Build 64×64 SVG","Crea SVG 64×64","SVG + Data URI","SVG + Data URI",
    "Only the first two entered characters are used.","Vengono usati soltanto i primi due caratteri inseriti.",
    "The favicon remains vector-based","La favicon rimane vettoriale",
    "The generated source is SVG, so the simple shape and text can scale without a fixed raster resolution.","Il risultato è SVG, quindi forma e testo possono scalare senza una risoluzione raster fissa."
  ),

  d("image-to-favicon","converter",
    "Create favicon.ico from an image","Crea favicon.ico da un’immagine",
    "Scale the uploaded image to fit inside a transparent 256×256 square and wrap the PNG data in an ICO container.","Ridimensiona l’immagine dentro un quadrato trasparente 256×256 e inserisce i dati PNG in un contenitore ICO.",
    "Image","Immagine","Fit to 256×256 PNG → ICO","Adatta a PNG 256×256 → ICO","favicon.ico","favicon.ico",
    "Non-square images are centered without intentional stretching.","Le immagini non quadrate vengono centrate senza deformazione intenzionale.",
    "The current ICO contains one 256×256 image entry",
    "L’ICO attuale contiene una singola immagine 256×256",
    "It is a compact favicon conversion rather than a multi-resolution ICO package.","È una conversione favicon compatta e non un pacchetto ICO con molte risoluzioni."
  ),

  d("favicon-checker","formatter",
    "Inspect a favicon file","Analizza un file favicon",
    "Read its dimensions and file size and check whether the image is square and at least 32×32.","Legge dimensioni e peso e controlla se l’immagine è quadrata e almeno 32×32.",
    "Image or ICO","Immagine o ICO","Decode image metadata","Legge metadati immagine","Dimensions + suitability","Dimensioni + idoneità",
    "A square image of at least 32×32 is reported as broadly suitable.","Un’immagine quadrata di almeno 32×32 viene indicata come generalmente adatta.",
    "One favicon file does not cover every platform perfectly",
    "Una sola favicon non copre perfettamente ogni piattaforma",
    "The checker also suggests common variants such as 32×32, 48×48 and 180×180 where appropriate.","Il controllo suggerisce anche varianti comuni come 32×32, 48×48 e 180×180."
  ),

  d("ico-to-png","converter",
    "Convert an ICO favicon to PNG","Converti una favicon ICO in PNG",
    "Let the browser decode the ICO, center the result in a 256×256 canvas and export PNG.","Fa decodificare l’ICO al browser, centra il risultato in un canvas 256×256 ed esporta PNG.",
    "ICO","ICO","Browser decode → 256×256 canvas","Decode browser → canvas 256×256","PNG","PNG",
    "The exported filename is favicon.png.","Il file esportato si chiama favicon.png.",
    "The output is rasterized to the converter canvas",
    "L’output viene rasterizzato sul canvas del convertitore",
    "The PNG dimensions are determined by the conversion canvas rather than preserving arbitrary ICO canvas dimensions.","Le dimensioni PNG sono determinate dal canvas di conversione invece di preservare dimensioni arbitrarie dell’ICO."
  ),

  d("png-to-ico","converter",
    "Convert PNG to favicon.ico","Converti PNG in favicon.ico",
    "Fit the PNG into a 256×256 square and wrap the resulting PNG bytes in an ICO container.","Adatta il PNG a un quadrato 256×256 e inserisce i byte PNG risultanti in un contenitore ICO.",
    "PNG","PNG","Resize → ICO container","Ridimensiona → contenitore ICO","favicon.ico","favicon.ico",
    "Aspect ratio is preserved while fitting inside the square.","Il rapporto d’aspetto viene mantenuto durante l’adattamento.",
    "ICO is a container format",
    "ICO è un formato contenitore",
    "The current implementation stores PNG image data inside the ICO structure instead of rebuilding pixel data as a legacy bitmap.","L’implementazione attuale inserisce dati PNG nella struttura ICO invece di ricostruirli come bitmap legacy."
  ),

  d("svg-optimizer","formatter",
    "Clean up SVG source conservatively","Ottimizza SVG in modo conservativo",
    "Remove XML comments and redundant whitespace without performing aggressive geometry rewriting.","Rimuove commenti XML e spazi ridondanti senza riscrivere aggressivamente la geometria.",
    "SVG source","Codice SVG","Remove comments + whitespace","Rimuove commenti + spazi","Cleaned SVG","SVG ripulito",
    "Whitespace between adjacent SVG tags is collapsed.","Gli spazi tra tag SVG adiacenti vengono eliminati.",
    "This is not a full semantic SVG optimizer",
    "Non è un ottimizzatore SVG semantico completo",
    "Paths, transforms and drawing commands are not deeply rewritten or merged.","Path, trasformazioni e comandi grafici non vengono riscritti o unificati in profondità."
  ),

  d("svg-viewer","formatter",
    "Validate and inspect SVG structure","Valida e analizza la struttura SVG",
    "Parse SVG as XML and report the root element, viewBox and declared dimensions.","Interpreta SVG come XML e mostra elemento radice, viewBox e dimensioni dichiarate.",
    "SVG source","Codice SVG","DOMParser XML parse","Parsing XML con DOMParser","SVG metadata","Metadati SVG",
    "Malformed XML produces a parser error instead of an inspection result.","XML non valido produce un errore di parsing.",
    "The tool inspects source rather than executing embedded scripts",
    "Lo strumento analizza il sorgente senza eseguire script incorporati",
    "Its purpose is structural validation and metadata inspection, not running arbitrary SVG behavior.","Lo scopo è validare struttura e metadati, non eseguire comportamento arbitrario contenuto nell’SVG."
  ),

  d("svg-to-data-uri","converter",
    "Encode SVG as a Data URI","Codifica SVG come Data URI",
    "Percent-encode SVG source after a data:image/svg+xml prefix.","Applica percent-encoding al sorgente SVG dopo il prefisso data:image/svg+xml.",
    "SVG source","Codice SVG","encodeURIComponent","encodeURIComponent","SVG Data URI","Data URI SVG",
    "The complete image can be embedded into a URL-like string.","L’intera immagine può essere incorporata in una stringa simile a un URL.",
    "This implementation uses percent encoding rather than Base64",
    "Questa implementazione usa percent-encoding e non Base64",
    "SVG is text, so a percent-encoded data URI can represent it directly.","SVG è testo, quindi una Data URI percent-encoded può rappresentarlo direttamente."
  ),

  d("data-uri-to-image","converter",
    "Decode an image Data URI","Decodifica una Data URI immagine",
    "Parse the MIME type and payload, supporting both Base64 and percent-encoded Data URIs.","Analizza tipo MIME e payload supportando Data URI sia Base64 sia percent-encoded.",
    "Image Data URI","Data URI immagine","Parse MIME + decode payload","Analizza MIME + decodifica payload","Image file","File immagine",
    "data:image/png;base64,... becomes a downloadable PNG blob.","data:image/png;base64,... diventa un blob PNG scaricabile.",
    "The MIME type determines the output extension",
    "Il tipo MIME determina l’estensione",
    "The decoder derives the file type from the media type included in the Data URI.","Il decoder ricava il tipo di file dal media type contenuto nella Data URI."
  ),

  d("placeholder-image-generator","generator",
    "Generate an SVG placeholder image","Genera un’immagine segnaposto SVG",
    "Build an SVG with custom dimensions, colors and centered label text.","Crea un SVG con dimensioni, colori e testo centrale personalizzati.",
    "Size + colors + label","Dimensioni + colori + testo","Build SVG","Crea SVG","SVG + Data URI","SVG + Data URI",
    "1200×630 can be generated directly for a social-card placeholder.","È possibile generare direttamente un placeholder 1200×630 per social card.",
    "The font size adapts to the smaller image dimension",
    "La dimensione del testo si adatta al lato minore",
    "The generator scales the label font from the requested canvas dimensions while enforcing a minimum size.","Il generatore scala il testo in base alle dimensioni richieste mantenendo una dimensione minima."
  ),

  d("web-manifest-generator","formatter",
    "Generate a minimal web app manifest","Genera un manifest minimale per web app",
    "Build formatted JSON containing app name, short name, start URL, standalone display and theme colors.","Crea JSON formattato con nome, nome breve, URL iniziale, display standalone e colori del tema.",
    "App settings","Impostazioni app","Build manifest JSON","Crea JSON manifest","manifest.webmanifest","manifest.webmanifest",
    "display is generated as standalone.","display viene generato come standalone.",
    "This is intentionally a minimal manifest",
    "È intenzionalmente un manifest minimale",
    "Icons, shortcuts, screenshots and advanced PWA fields are not generated by this tool.","Icone, shortcut, screenshot e campi PWA avanzati non vengono generati da questo strumento."
  ),

  d("robots-txt-generator","formatter",
    "Generate a simple robots.txt","Genera un robots.txt semplice",
    "Create rules for User-agent: * plus either one Disallow path or Allow: / and a sitemap URL.","Crea regole per User-agent: * con un percorso Disallow oppure Allow: / e URL della sitemap.",
    "Sitemap + optional path","Sitemap + percorso opzionale","Build crawler directives","Crea direttive crawler","robots.txt","robots.txt",
    "Leaving Disallow empty generates Allow: /.","Lasciare Disallow vuoto genera Allow: /.",
    "robots.txt controls crawling, not guaranteed indexing",
    "robots.txt controlla il crawling, non garantisce l’indicizzazione",
    "Search engines can use many signals beyond this file when deciding whether a URL appears in results.","I motori di ricerca usano molti altri segnali oltre a questo file per decidere se mostrare un URL."
  ),

  d("sitemap-xml-generator","formatter",
    "Generate an XML sitemap from URLs","Genera una sitemap XML da URL",
    "Validate every entered URL, XML-escape it and insert it into a sitemap urlset.","Valida ogni URL inserito, applica l’escape XML e lo inserisce in un urlset sitemap.",
    "One URL per line","Un URL per riga","Validate → XML escape → wrap","Valida → escape XML → inserisce","sitemap.xml","sitemap.xml",
    "Invalid URLs are rejected before the sitemap is generated.","Gli URL non validi vengono rifiutati prima di generare la sitemap.",
    "The generator produces the core loc structure only",
    "Il generatore produce la struttura loc essenziale",
    "Optional sitemap fields such as lastmod are not added by the current implementation.","Campi opzionali come lastmod non vengono aggiunti dall’implementazione attuale."
  ),

  d("meta-tag-generator","formatter",
    "Generate basic SEO meta tags","Genera meta tag SEO di base",
    "Create a title element, meta description and canonical link while escaping HTML-sensitive characters.","Crea title, meta description e canonical applicando l’escape ai caratteri HTML sensibili.",
    "Title + description + canonical","Titolo + descrizione + canonical","HTML escape + template","Escape HTML + template","Meta tags","Meta tag",
    "A canonical URL is emitted as a link rel=canonical element.","L’URL canonico viene emesso come elemento link rel=canonical.",
    "The tool generates markup, not an SEO score",
    "Lo strumento genera markup, non un punteggio SEO",
    "Whether a page performs well in search depends on much more than these three tags.","Le prestazioni di una pagina nei motori di ricerca dipendono da molti altri fattori oltre questi tre tag."
  ),

  d("opengraph-tag-generator","formatter",
    "Generate Open Graph tags","Genera tag Open Graph",
    "Create og:title, description, URL, image and a fixed website type.","Crea og:title, descrizione, URL, immagine e tipo website fisso.",
    "Page metadata","Metadati pagina","Escape + build og:* tags","Escape + crea tag og:*","Open Graph HTML","HTML Open Graph",
    "og:type is generated as website.","og:type viene generato come website.",
    "Open Graph metadata controls link previews, not page content",
    "I metadati Open Graph controllano le anteprime, non il contenuto della pagina",
    "Platforms may cache previews, so changing tags does not always update a shared preview immediately.","Le piattaforme possono memorizzare le anteprime, quindi una modifica ai tag non sempre appare immediatamente."
  ),

  d("twitter-card-generator","formatter",
    "Generate Twitter/X card tags","Genera tag per Twitter/X Card",
    "Create summary_large_image card metadata from title, description and image URL.","Crea metadati summary_large_image usando titolo, descrizione e URL immagine.",
    "Title + description + image","Titolo + descrizione + immagine","Build twitter:* tags","Crea tag twitter:*","Card HTML","HTML della card",
    "The generated card type is summary_large_image.","Il tipo generato è summary_large_image.",
    "The tool generates the tags but does not fetch the image",
    "Lo strumento genera i tag ma non scarica l’immagine",
    "The supplied image URL is inserted into markup after HTML escaping.","L’URL dell’immagine viene inserito nel markup dopo l’escape HTML."
  ),

  d("schema-markup-generator","formatter",
    "Generate WebApplication JSON-LD","Genera JSON-LD WebApplication",
    "Create Schema.org JSON-LD for a free WebApplication using name, URL and description.","Crea JSON-LD Schema.org per una WebApplication gratuita usando nome, URL e descrizione.",
    "Name + URL + description","Nome + URL + descrizione","Build JSON-LD object","Crea oggetto JSON-LD","script markup","Markup script",
    "isAccessibleForFree is set to true.","isAccessibleForFree viene impostato a true.",
    "Structured data should describe the real page",
    "I dati strutturati devono descrivere la pagina reale",
    "Generating valid-looking JSON-LD does not make inaccurate structured data appropriate to publish.","Generare JSON-LD formalmente valido non rende corretto pubblicare dati strutturati che non descrivono realmente la pagina."
  ),

  d("css-box-shadow-generator","generator",
    "Generate a CSS box-shadow","Genera un box-shadow CSS",
    "Combine X/Y offsets, blur, spread, color and opacity into one CSS declaration.","Combina offset X/Y, blur, spread, colore e opacità in una dichiarazione CSS.",
    "Shadow parameters","Parametri ombra","HEX + opacity → rgba()","HEX + opacità → rgba()","box-shadow CSS","CSS box-shadow",
    "20% opacity becomes an alpha value of 0.2.","Un’opacità del 20% diventa un alpha di 0,2.",
    "Blur and spread are different controls",
    "Blur e spread controllano aspetti diversi",
    "Blur softens the edge while spread expands or contracts the shadow footprint before blur.","Il blur ammorbidisce il bordo mentre lo spread amplia o restringe l’area dell’ombra prima della sfocatura."
  ),

  d("border-radius-generator","generator",
    "Generate CSS border-radius values","Genera valori CSS border-radius",
    "Combine four corner radii into the four-value CSS shorthand.","Combina i raggi dei quattro angoli nella sintassi abbreviata CSS a quattro valori.",
    "Four corner radii","Quattro raggi","TL → TR → BR → BL","TL → TR → BR → BL","border-radius CSS","CSS border-radius",
    "16 16 16 16 produces equal rounding on every corner.","16 16 16 16 produce la stessa curvatura su ogni angolo.",
    "CSS four-value order follows the corners clockwise",
    "L’ordine CSS dei quattro valori segue gli angoli in senso orario",
    "The sequence is top-left, top-right, bottom-right, bottom-left.","La sequenza è alto-sinistra, alto-destra, basso-destra, basso-sinistra."
  ),

  d("css-clamp-calculator","generator",
    "Generate a fluid CSS clamp()","Genera un clamp() CSS fluido",
    "Calculate a linear interpolation between two font or size values at two viewport widths.","Calcola un’interpolazione lineare tra due dimensioni a due larghezze viewport.",
    "Min/max size + viewports","Dimensioni min/max + viewport","Slope + intercept","Pendenza + intercetta","CSS clamp()","CSS clamp()",
    "The middle expression combines pixels with vw.","L’espressione centrale combina pixel e vw.",
    "The fluid value is a straight line between two reference points",
    "Il valore fluido segue una retta tra due punti",
    "clamp then prevents the calculated value from moving below the minimum or above the maximum.","clamp impedisce poi al valore di scendere sotto il minimo o salire oltre il massimo."
  ),

  d("rem-to-px","converter",
    "Convert rem to pixels","Converti rem in pixel",
    "Multiply rem units by the selected root font size.","Moltiplica i rem per la dimensione font radice selezionata.",
    "rem + root size","rem + dimensione root","rem × root px","rem × px root","Pixels","Pixel",
    "1 rem with a 16 px root = 16 px.","1 rem con root 16 px = 16 px.",
    "rem is relative to the root font size",
    "rem è relativo alla dimensione font radice",
    "Changing the root size changes the pixel equivalent without changing the rem value.","Cambiare la dimensione radice modifica l’equivalente in pixel senza cambiare il valore rem."
  ),

  d("px-to-rem","converter",
    "Convert pixels to rem","Converti pixel in rem",
    "Divide the pixel value by the selected root font size.","Divide il valore in pixel per la dimensione font radice selezionata.",
    "Pixels + root size","Pixel + dimensione root","px ÷ root px","px ÷ px root","rem","rem",
    "24 px with a 16 px root = 1.5 rem.","24 px con root 16 px = 1,5 rem.",
    "The conversion depends on the chosen root size",
    "La conversione dipende dalla dimensione root scelta",
    "There is no universal px-to-rem number independent of the document’s root font size.","Non esiste una conversione px-rem universale indipendente dalla dimensione font radice del documento."
  ),

  d("viewport-unit-calculator","converter",
    "Convert pixels to viewport-width units","Converti pixel in unità viewport-width",
    "Express a pixel length as a percentage of a selected viewport dimension.","Esprime una lunghezza in pixel come percentuale di una dimensione viewport scelta.",
    "Pixels + viewport width","Pixel + larghezza viewport","px ÷ viewport × 100","px ÷ viewport × 100","vw value","Valore vw",
    "144 px in a 1440 px viewport = 10 vw.","144 px in un viewport da 1440 px = 10 vw.",
    "The current output is vw",
    "L’output attuale è vw",
    "Although viewport units also include vh, this implementation formats the calculated result specifically as vw.","Anche se esistono unità come vh, questa implementazione restituisce specificamente il risultato in vw."
  ),

  d("css-triangle-generator","generator",
    "Generate a pure-CSS triangle","Genera un triangolo in puro CSS",
    "Use transparent borders plus one colored border to create a triangle in the selected direction.","Usa bordi trasparenti e un bordo colorato per creare un triangolo nella direzione selezionata.",
    "Size + color + direction","Dimensione + colore + direzione","Zero-size box + borders","Box senza dimensione + bordi","Triangle CSS","CSS triangolo",
    "Directions supported are up, down, left and right.","Le direzioni supportate sono su, giù, sinistra e destra.",
    "The triangle is created from borders, not a polygon element",
    "Il triangolo viene creato con i bordi, non con un poligono",
    "A zero-width, zero-height element exposes triangular border regions that can be colored selectively.","Un elemento con larghezza e altezza zero espone regioni triangolari dei bordi che possono essere colorate selettivamente."
  ),

  d("css-grid-generator","generator",
    "Generate a CSS grid declaration","Genera una dichiarazione CSS Grid",
    "Create a fixed number of grid columns using repeat() and minmax(), plus a configurable gap.","Crea un numero fisso di colonne usando repeat() e minmax(), con gap configurabile.",
    "Columns + minimum width + gap","Colonne + larghezza minima + gap","Build grid-template-columns","Crea grid-template-columns","CSS Grid","CSS Grid",
    "3 columns with 220px minimum creates repeat(3, minmax(220px, 1fr)).","3 colonne con minimo 220px creano repeat(3, minmax(220px, 1fr)).",
    "The column count is explicitly fixed",
    "Il numero di colonne è esplicitamente fisso",
    "The current generator uses repeat(number, …), not auto-fit or auto-fill.","Il generatore attuale usa repeat(numero, …), non auto-fit o auto-fill."
  )

];

export const webEditorialBatch:
  Partial<Record<string, Partial<Record<LocaleId, ToolEditorial>>>> =
  Object.fromEntries(defs.map(def => [def.id, simpleEditorial(def)]));
