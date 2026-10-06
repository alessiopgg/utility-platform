
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
  enInput:string,
  itInput:string,
  enProcess:string,
  itProcess:string,
  enOutput:string,
  itOutput:string,
  enExample:string,
  itExample:string,
  enInsight:string,
  itInsight:string,
  enBody:string,
  itBody:string,
  family:SimpleEditorialDefinition["family"]="generator"
) => defs.push({
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

const qr = (
  id:string,
  enTitle:string,
  itTitle:string,
  payloadEn:string,
  payloadIt:string,
  insightEn:string,
  insightIt:string,
  bodyEn:string,
  bodyIt:string
) => add(
  id,enTitle,itTitle,
  `Build a QR payload for ${payloadEn} and render it as a PNG locally.`,
  `Crea un payload QR per ${payloadIt} e lo renderizza localmente come PNG.`,
  payloadEn,payloadIt,
  "Payload → QR matrix → PNG",
  "Payload → matrice QR → PNG",
  "QR PNG","PNG QR",
  "Size, margin, error correction and foreground/background colors can be adjusted.",
  "Dimensione, margine, correzione errori e colori possono essere regolati.",
  insightEn,insightIt,
  bodyEn,bodyIt
);

qr(
  "url-qr-generator",
  "Create a QR code for a URL",
  "Crea un QR code per un URL",
  "a URL","un URL",
  "The QR contains the URL text itself",
  "Il QR contiene direttamente il testo dell’URL",
  "The destination is opened by the scanning application; UtilityLake does not shorten or redirect the URL.",
  "La destinazione viene aperta dall’app di scansione; UtilityLake non accorcia né reindirizza l’URL."
);

qr(
  "text-qr-generator",
  "Create a QR code from text",
  "Crea un QR code da testo",
  "arbitrary text","testo arbitrario",
  "A QR code can store plain text without a web address",
  "Un QR può contenere testo semplice senza un indirizzo web",
  "What happens after scanning depends on how the reader interprets the stored text.",
  "Ciò che accade dopo la scansione dipende da come il lettore interpreta il testo memorizzato."
);

qr(
  "wi-fi-qr-generator",
  "Create a Wi-Fi QR code",
  "Crea un QR code Wi-Fi",
  "SSID, password and security type","SSID, password e tipo di sicurezza",
  "Wi-Fi QR codes use a structured WIFI payload",
  "I QR Wi-Fi usano un payload WIFI strutturato",
  "Special characters in SSID and password are escaped before the payload is encoded.",
  "I caratteri speciali di SSID e password vengono sottoposti a escape prima della codifica."
);

qr(
  "email-qr-generator",
  "Create an email QR code",
  "Crea un QR code email",
  "an email, subject and body","email, oggetto e corpo",
  "The payload uses a mailto URI",
  "Il payload usa un URI mailto",
  "Subject and body are URL-encoded before being placed into the generated mailto link.",
  "Oggetto e corpo vengono URL-encoded prima di essere inseriti nel collegamento mailto."
);

qr(
  "phone-qr-generator",
  "Create a phone-call QR code",
  "Crea un QR code per una chiamata",
  "a telephone number","un numero di telefono",
  "The payload uses the tel: URI scheme",
  "Il payload usa lo schema URI tel:",
  "Compatible scanners can offer to open the device dialer with the stored number.",
  "I lettori compatibili possono proporre l’apertura del dialer con il numero memorizzato."
);

qr(
  "sms-qr-generator",
  "Create an SMS QR code",
  "Crea un QR code SMS",
  "a phone number and message","numero di telefono e messaggio",
  "The payload uses the SMSTO format",
  "Il payload usa il formato SMSTO",
  "The phone number and message are placed into one structured SMS payload.",
  "Numero di telefono e messaggio vengono inseriti in un unico payload SMS strutturato."
);

qr(
  "whatsapp-qr-generator",
  "Create a WhatsApp chat QR code",
  "Crea un QR code per chat WhatsApp",
  "a phone number and message","numero e messaggio WhatsApp",
  "The payload is a wa.me link",
  "Il payload è un link wa.me",
  "Non-digit characters are removed from the phone number and the message is URL-encoded.",
  "I caratteri non numerici vengono rimossi dal numero e il messaggio viene URL-encoded."
);

qr(
  "vcard-qr-generator",
  "Create a contact vCard QR code",
  "Crea un QR code vCard per un contatto",
  "name, phone, email and organization","nome, telefono, email e organizzazione",
  "The payload uses vCard 3.0 text",
  "Il payload usa testo vCard 3.0",
  "Compatible scanners can interpret the structured fields as contact information rather than plain text.",
  "I lettori compatibili possono interpretare i campi come informazioni di contatto invece che semplice testo."
);

qr(
  "location-qr-generator",
  "Create a geographic location QR code",
  "Crea un QR code geografico",
  "latitude and longitude","latitudine e longitudine",
  "The payload uses the geo: URI scheme",
  "Il payload usa lo schema URI geo:",
  "The coordinates themselves are encoded; the QR does not contain a map image.",
  "Vengono codificate direttamente le coordinate; il QR non contiene un’immagine della mappa."
);

qr(
  "calendar-event-qr-generator",
  "Create a calendar-event QR code",
  "Crea un QR code per un evento calendario",
  "event title, UTC times and location","titolo evento, orari UTC e luogo",
  "The payload is an iCalendar VEVENT block",
  "Il payload è un blocco iCalendar VEVENT",
  "The current generator expects the start and end timestamps in the entered iCalendar-style UTC form.",
  "Il generatore usa gli orari inseriti nel formato UTC in stile iCalendar."
);

qr(
  "qr-color-customizer",
  "Create a custom-color QR code",
  "Crea un QR code con colori personalizzati",
  "text plus custom colors","testo e colori personalizzati",
  "Contrast matters for reliable scanning",
  "Il contrasto è importante per la scansione",
  "Highly decorative low-contrast foreground and background combinations can make a technically valid QR harder to read.",
  "Combinazioni decorative con poco contrasto possono rendere più difficile la lettura anche di un QR tecnicamente valido."
);

add(
  "qr-with-logo",
  "Create a QR code with a centered logo",
  "Crea un QR code con logo centrale",
  "Generate the QR with high error correction and overlay the uploaded logo in the center.",
  "Genera il QR con correzione errori alta e sovrappone il logo caricato al centro.",
  "Content + logo","Contenuto + logo",
  "QR level H → 20% centered logo","QR livello H → logo centrale 20%",
  "PNG QR","QR PNG",
  "The logo occupies about 20% of the QR width and receives a white padding area.",
  "Il logo occupa circa il 20% della larghezza del QR e riceve un’area bianca di margine.",
  "High error correction is forced for the logo version",
  "Per la versione con logo viene forzata la correzione errori alta",
  "Covering part of the QR removes modules, so the implementation uses level H to improve redundancy.",
  "Coprire parte del QR elimina moduli, quindi l’implementazione usa il livello H per aumentare la ridondanza."
);

add(
  "qr-reader-from-image",
  "Read a QR code from an image",
  "Leggi un QR code da un’immagine",
  "Decode an uploaded image using a QR-specific ZXing browser reader.",
  "Decodifica un’immagine caricata usando il lettore QR di ZXing nel browser.",
  "Image","Immagine",
  "ZXing QR decode","Decodifica QR ZXing",
  "Decoded content + format","Contenuto + formato",
  "The decoded text is shown without contacting the QR destination.",
  "Il testo decodificato viene mostrato senza contattare la destinazione.",
  "Reading a QR is separate from opening it",
  "Leggere un QR è diverso dall’aprirlo",
  "UtilityLake extracts the encoded content; it does not automatically navigate to URLs found inside it.",
  "UtilityLake estrae il contenuto codificato e non apre automaticamente gli URL trovati."
);

const barcode = (
  id:string,
  label:string,
  itLabel:string,
  format:string,
  detailEn:string,
  detailIt:string
) => add(
  id,
  `Generate a ${label} barcode`,
  `Genera un barcode ${itLabel}`,
  `Render the entered value as ${label} using JsBarcode.`,
  `Renderizza il valore inserito come ${itLabel} usando JsBarcode.`,
  "Barcode value + dimensions + colors",
  "Valore + dimensioni + colori",
  `JsBarcode ${format} → SVG`,
  `JsBarcode ${format} → SVG`,
  "SVG barcode",
  "Barcode SVG",
  "Bar width, height and colors can be customized.",
  "Larghezza barre, altezza e colori possono essere personalizzati.",
  `${label} has format-specific validity rules`,
  `${itLabel} ha regole di validità specifiche`,
  detailEn,
  detailIt
);

barcode(
  "barcode-generator","Code 128","Code 128","CODE128",
  "The generic barcode generator currently uses Code 128, which can represent a broad set of characters.",
  "Il generatore barcode generico usa attualmente Code 128, che può rappresentare un ampio insieme di caratteri."
);

barcode(
  "code-128-generator","Code 128","Code 128","CODE128",
  "Code 128 is denser and supports a broader character range than older Code 39.",
  "Code 128 è più denso e supporta più caratteri rispetto al più vecchio Code 39."
);

barcode(
  "ean-13-generator","EAN-13","EAN-13","EAN13",
  "EAN-13 expects the numeric structure required by that retail barcode standard.",
  "EAN-13 richiede la struttura numerica prevista da questo standard commerciale."
);

barcode(
  "ean-8-generator","EAN-8","EAN-8","EAN8",
  "EAN-8 is the shorter EAN format used when less symbol space is available.",
  "EAN-8 è il formato EAN più corto, utile quando lo spazio disponibile è minore."
);

barcode(
  "upc-a-generator","UPC-A","UPC-A","UPC",
  "UPC-A uses the numeric format expected by the UPC retail standard.",
  "UPC-A usa il formato numerico previsto dallo standard commerciale UPC."
);

barcode(
  "code-39-generator","Code 39","Code 39","CODE39",
  "Code 39 has a more restricted character set than Code 128.",
  "Code 39 possiede un insieme di caratteri più limitato rispetto a Code 128."
);

barcode(
  "isbn-barcode-generator","ISBN / EAN-13","ISBN / EAN-13","EAN13",
  "This tool renders the entered number through the EAN-13 encoder; it does not independently look up or validate a book database record.",
  "Questo strumento renderizza il numero tramite l’encoder EAN-13; non consulta né valida autonomamente un record bibliografico."
);

add(
  "barcode-reader",
  "Read a barcode from an image",
  "Leggi un barcode da un’immagine",
  "Decode supported one-dimensional or two-dimensional codes using ZXing’s multi-format reader.",
  "Decodifica codici mono o bidimensionali supportati usando il lettore multi-formato ZXing.",
  "Barcode image","Immagine barcode",
  "ZXing multi-format decode","Decodifica multi-formato ZXing",
  "Decoded content + detected format","Contenuto + formato rilevato",
  "The reader reports both the decoded text and barcode format when available.",
  "Il lettore mostra sia il testo decodificato sia il formato quando disponibile.",
  "Detection depends on the source image quality",
  "Il rilevamento dipende dalla qualità dell’immagine",
  "Blur, low resolution, clipping or insufficient contrast can prevent otherwise valid codes from being decoded.",
  "Sfocatura, bassa risoluzione, tagli o scarso contrasto possono impedire la decodifica di codici altrimenti validi.",
  "formatter"
);

export const qrEditorialBatch:
  Partial<Record<string, Partial<Record<LocaleId, ToolEditorial>>>> =
  Object.fromEntries(defs.map(def => [def.id, simpleEditorial(def)]));

