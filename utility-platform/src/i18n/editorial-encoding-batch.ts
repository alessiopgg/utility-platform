import type { LocaleId } from "../core/types.ts";
import type { ToolEditorial } from "./tool-editorial.ts";
import {
  bi,
  simpleEditorial,
  type SimpleEditorialDefinition
} from "./editorial-factories.ts";

const e = (
  id: string,
  family: SimpleEditorialDefinition["family"],
  enTitle: string,
  itTitle: string,
  enIntro: string,
  itIntro: string,
  enInput: string,
  itInput: string,
  enProcess: string,
  itProcess: string,
  enOutput: string,
  itOutput: string,
  enExample: string,
  itExample: string,
  enInsight: string,
  itInsight: string,
  enBody: string,
  itBody: string
): SimpleEditorialDefinition => ({
  id,
  family,
  title: bi(enTitle,itTitle),
  intro: bi(enIntro,itIntro),
  input: bi(enInput,itInput),
  process: bi(enProcess,itProcess),
  output: bi(enOutput,itOutput),
  example: bi(enExample,itExample),
  insightTitle: bi(enInsight,itInsight),
  insightBody: bi(enBody,itBody)
});

const defs: SimpleEditorialDefinition[] = [

  e("base64-encoder","converter",
    "Encode UTF-8 text as Base64","Codifica testo UTF-8 in Base64",
    "Text is first encoded as UTF-8 bytes and then represented using Base64.","Il testo viene prima convertito in byte UTF-8 e poi rappresentato in Base64.",
    "UTF-8 text","Testo UTF-8","UTF-8 bytes → Base64","Byte UTF-8 → Base64","Base64","Base64",
    "hello → aGVsbG8=","hello → aGVsbG8=",
    "Base64 is encoding, not encryption","Base64 è una codifica, non una cifratura",
    "Anyone can decode ordinary Base64 data without a secret key.","Chiunque può decodificare normali dati Base64 senza una chiave segreta."
  ),

  e("base64-decoder","converter",
    "Decode Base64 into UTF-8 text","Decodifica Base64 in testo UTF-8",
    "Base64 characters are converted back into bytes and decoded as UTF-8.","I caratteri Base64 vengono riconvertiti in byte e interpretati come UTF-8.",
    "Base64","Base64","Decode bytes","Decodifica byte","UTF-8 text","Testo UTF-8",
    "aGVsbG8= → hello","aGVsbG8= → hello",
    "Whitespace is ignored before decoding","Gli spazi vengono ignorati prima della decodifica",
    "The decoder removes whitespace from the Base64 input before converting it back to bytes.","Il decoder rimuove gli spazi dall’input Base64 prima di riconvertirlo in byte."
  ),

  e("url-encoder","converter",
    "Percent-encode a URL component","Codifica percentualmente un componente URL",
    "UtilityLake applies the browser encodeURIComponent rules to the input.","UtilityLake applica le regole encodeURIComponent del browser all’input.",
    "Text","Testo","Percent encoding","Codifica percentuale","Encoded component","Componente codificato",
    "hello world → hello%20world","hello world → hello%20world",
    "This encodes a component, not an entire URL","Codifica un componente, non un intero URL",
    "Characters with structural meaning in URLs can be escaped when treated as component content.","I caratteri con significato strutturale negli URL possono essere codificati se trattati come contenuto di un componente."
  ),

  e("url-decoder","converter",
    "Decode percent-encoded text","Decodifica testo percent-encoded",
    "Percent escape sequences are interpreted using decodeURIComponent.","Le sequenze percentuali vengono interpretate usando decodeURIComponent.",
    "Encoded text","Testo codificato","Percent decode","Decodifica percentuale","Decoded text","Testo decodificato",
    "hello%20world → hello world","hello%20world → hello world",
    "Malformed escape sequences can fail","Sequenze percentuali non valide possono fallire",
    "A percent sign must be followed by a valid encoded byte sequence.","Il simbolo percentuale deve essere seguito da una sequenza codificata valida."
  ),

  e("html-entity-encoder","converter",
    "Escape HTML special characters","Esegui l’escape dei caratteri HTML speciali",
    "Characters such as ampersands, angle brackets and quotes are replaced with HTML entities.","Caratteri come &, parentesi angolari e virgolette vengono sostituiti con entità HTML.",
    "Text","Testo","Escape HTML characters","Escape caratteri HTML","HTML-safe text","Testo con entità HTML",
    "<div> → &lt;div&gt;","<div> → &lt;div&gt;",
    "Escaping is different from removing markup","Fare escape è diverso dal rimuovere markup",
    "The characters remain represented in the output; they are simply encoded so they are treated as text.","I caratteri restano rappresentati nell’output, ma vengono codificati affinché siano trattati come testo."
  ),

  e("html-entity-decoder","converter",
    "Decode HTML entities","Decodifica le entità HTML",
    "The browser HTML parser is used to convert entity references back into characters.","Il parser HTML del browser viene usato per riconvertire le entità nei caratteri corrispondenti.",
    "HTML entities","Entità HTML","Parse entities","Analizza entità","Decoded text","Testo decodificato",
    "&lt; → <","&lt; → <",
    "Named and numeric entities are browser-parsed","Le entità vengono interpretate dal browser",
    "Decoding relies on the browser HTML parser rather than a small hard-coded replacement table.","La decodifica usa il parser HTML del browser invece di una piccola tabella di sostituzioni."
  ),

  e("jwt-decoder","formatter",
    "Decode a JWT header and payload","Decodifica header e payload di un JWT",
    "UtilityLake decodes the first two Base64URL sections and displays their JSON content.","UtilityLake decodifica le prime due sezioni Base64URL e mostra il loro contenuto JSON.",
    "JWT","JWT","Decode header + payload","Decodifica header + payload","JSON sections","Sezioni JSON",
    "header.payload.signature → readable header and payload","header.payload.signature → header e payload leggibili",
    "Decoding does not verify the signature","La decodifica non verifica la firma",
    "A readable JWT is not proof that the token is authentic or trustworthy. The current tool does not validate its signature.","Un JWT leggibile non dimostra che il token sia autentico o affidabile. Lo strumento attuale non verifica la firma."
  ),

  e("uuid-generator","generator",
    "Generate a random UUID v4","Genera un UUID v4 casuale",
    "UtilityLake asks the browser cryptography API to create a UUID v4.","UtilityLake usa l’API crittografica del browser per creare un UUID v4.",
    "Browser randomness","Casualità browser","crypto.randomUUID","crypto.randomUUID","UUID v4","UUID v4",
    "Example format: xxxxxxxx-xxxx-4xxx-xxxx-xxxxxxxxxxxx","Formato di esempio: xxxxxxxx-xxxx-4xxx-xxxx-xxxxxxxxxxxx",
    "UUID v4 values are random identifiers","Gli UUID v4 sono identificatori casuali",
    "They are designed to make accidental collisions extremely unlikely without requiring a central counter.","Sono progettati per rendere estremamente improbabili collisioni accidentali senza richiedere un contatore centrale."
  ),

  e("ulid-generator","generator",
    "Generate a sortable ULID","Genera un ULID ordinabile",
    "The current time is encoded into the first part and browser randomness fills the remaining characters.","Il tempo corrente viene codificato nella prima parte e la casualità del browser completa i caratteri rimanenti.",
    "Time + randomness","Tempo + casualità","Encode ULID","Codifica ULID","ULID","ULID",
    "Later ULIDs usually sort after earlier ones lexicographically.","ULID generati più tardi tendono a ordinarsi dopo quelli precedenti.",
    "ULIDs include a timestamp component","Gli ULID includono una componente temporale",
    "That time prefix is what gives ULIDs their useful approximate sort order.","È il prefisso temporale a rendere gli ULID approssimativamente ordinabili."
  ),

  e("md5-generator","generator",
    "Generate an MD5 checksum","Genera un checksum MD5",
    "UtilityLake computes the MD5 digest of the entered text locally.","UtilityLake calcola localmente il digest MD5 del testo inserito.",
    "Text","Testo","MD5 digest","Digest MD5","128-bit hash","Hash a 128 bit",
    "The same input produces the same MD5 value.","Lo stesso input produce lo stesso valore MD5.",
    "MD5 should not be used for password storage","MD5 non va usato per memorizzare password",
    "MD5 is useful for ordinary checksums and legacy compatibility, but it is cryptographically broken for collision-resistant security uses.","MD5 può essere utile per checksum e compatibilità legacy, ma non è sicuro per usi crittografici che richiedono resistenza alle collisioni."
  ),

  e("sha-1-generator","generator",
    "Generate a SHA-1 checksum","Genera un checksum SHA-1",
    "The browser Web Crypto API calculates the SHA-1 digest of UTF-8 text.","L’API Web Crypto del browser calcola il digest SHA-1 del testo UTF-8.",
    "Text","Testo","SHA-1 digest","Digest SHA-1","160-bit hash","Hash a 160 bit",
    "A tiny input change produces a very different digest.","Una piccola modifica dell’input produce un digest molto diverso.",
    "SHA-1 is no longer collision-resistant enough for modern security","SHA-1 non è più adeguato per sicurezza moderna contro le collisioni",
    "It remains common in legacy identifiers and checksums, but stronger hashes such as SHA-256 are preferred for security-sensitive uses.","È ancora comune in sistemi legacy e checksum, ma per usi sensibili sono preferibili hash più forti come SHA-256."
  ),

  e("sha-256-generator","generator",
    "Generate a SHA-256 hash","Genera un hash SHA-256",
    "The browser Web Crypto API computes a 256-bit digest from the UTF-8 input.","L’API Web Crypto del browser calcola un digest a 256 bit dall’input UTF-8.",
    "Text","Testo","SHA-256 digest","Digest SHA-256","256-bit hash","Hash a 256 bit",
    "The output contains 64 hexadecimal characters.","L’output contiene 64 caratteri esadecimali.",
    "A cryptographic hash is one-way","Un hash crittografico è unidirezionale",
    "Hashing is not encoding: there is no normal decode operation that reconstructs the original text from the digest.","L’hashing non è una codifica: non esiste una normale operazione di decode che ricostruisca il testo originale dal digest."
  ),

  e("sha-512-generator","generator",
    "Generate a SHA-512 hash","Genera un hash SHA-512",
    "The browser Web Crypto API computes a 512-bit digest from the UTF-8 input.","L’API Web Crypto del browser calcola un digest a 512 bit dall’input UTF-8.",
    "Text","Testo","SHA-512 digest","Digest SHA-512","512-bit hash","Hash a 512 bit",
    "The hexadecimal digest contains 128 characters.","Il digest esadecimale contiene 128 caratteri.",
    "A larger digest does not mean the input is encrypted","Un digest più lungo non significa che l’input sia cifrato",
    "SHA-512 is still a one-way hash function rather than reversible encryption.","SHA-512 rimane una funzione hash unidirezionale e non una cifratura reversibile."
  ),

  e("random-token-generator","generator",
    "Generate a random hexadecimal token","Genera un token esadecimale casuale",
    "A selected number of random bytes is generated through crypto.getRandomValues and represented as hexadecimal.","Un numero scelto di byte casuali viene generato tramite crypto.getRandomValues e rappresentato in esadecimale.",
    "Byte count","Numero di byte","Secure random bytes","Byte casuali sicuri","Hex token","Token esadecimale",
    "32 random bytes produce 64 hexadecimal characters.","32 byte casuali producono 64 caratteri esadecimali.",
    "Two hex characters represent one byte","Due caratteri esadecimali rappresentano un byte",
    "That is why the displayed token length is twice the selected random-byte count.","Per questo la lunghezza del token visualizzato è il doppio del numero di byte casuali scelto."
  ),

  e("hex-to-text","converter",
    "Decode hexadecimal bytes as UTF-8 text","Decodifica byte esadecimali come testo UTF-8",
    "Pairs of hexadecimal digits are converted into bytes and decoded using UTF-8.","Coppie di cifre esadecimali vengono convertite in byte e interpretate tramite UTF-8.",
    "Hex bytes","Byte esadecimali","Hex → bytes → UTF-8","Hex → byte → UTF-8","Text","Testo",
    "68 65 6c 6c 6f → hello","68 65 6c 6c 6f → hello",
    "Valid hexadecimal bytes require pairs of digits","I byte esadecimali richiedono coppie di cifre",
    "A single byte ranges from 00 through FF and is represented by exactly two hexadecimal characters.","Un byte varia da 00 a FF ed è rappresentato esattamente da due caratteri esadecimali."
  ),

  e("text-to-hex","converter",
    "Encode UTF-8 text as hexadecimal bytes","Codifica testo UTF-8 come byte esadecimali",
    "Text is encoded into UTF-8 bytes and each byte is written using two hexadecimal digits.","Il testo viene convertito in byte UTF-8 e ogni byte viene scritto con due cifre esadecimali.",
    "UTF-8 text","Testo UTF-8","Encode bytes","Codifica byte","Hex","Esadecimale",
    "hello → 68656c6c6f","hello → 68656c6c6f",
    "Characters can use more than one UTF-8 byte","I caratteri possono usare più di un byte UTF-8",
    "Non-ASCII characters may therefore produce several hexadecimal byte pairs.","I caratteri non ASCII possono quindi produrre più coppie di byte esadecimali."
  ),

  e("binary-to-text","converter",
    "Decode 8-bit binary bytes as UTF-8","Decodifica byte binari a 8 bit come UTF-8",
    "Space-separated groups of eight binary digits are converted into bytes and then UTF-8 text.","Gruppi separati da spazi di otto cifre binarie vengono convertiti in byte e poi in testo UTF-8.",
    "8-bit binary bytes","Byte binari a 8 bit","Binary → bytes","Binario → byte","Text","Testo",
    "01101000 01101001 → hi","01101000 01101001 → hi",
    "Each input group must contain exactly eight bits","Ogni gruppo deve contenere esattamente otto bit",
    "The parser treats every group as one byte before decoding the resulting byte sequence.","Il parser tratta ogni gruppo come un byte prima di decodificare la sequenza risultante."
  ),

  e("text-to-binary","converter",
    "Encode UTF-8 text as binary bytes","Codifica testo UTF-8 come byte binari",
    "Text is converted to UTF-8 bytes and every byte is displayed as eight binary digits.","Il testo viene convertito in byte UTF-8 e ogni byte viene mostrato con otto cifre binarie.",
    "UTF-8 text","Testo UTF-8","Encode bytes","Codifica byte","Binary bytes","Byte binari",
    "hi → 01101000 01101001","hi → 01101000 01101001",
    "One character is not always one byte","Un carattere non corrisponde sempre a un byte",
    "Unicode characters outside ASCII can require multiple UTF-8 bytes and therefore multiple binary groups.","Caratteri Unicode fuori da ASCII possono richiedere più byte UTF-8 e quindi più gruppi binari."
  ),

  e("ascii-to-text","converter",
    "Convert decimal byte values to text","Converti valori byte decimali in testo",
    "Decimal values from 0 to 255 are converted into character codes.","Valori decimali da 0 a 255 vengono convertiti in codici di carattere.",
    "Decimal byte values","Valori byte decimali","Byte values → characters","Valori byte → caratteri","Text","Testo",
    "72 105 → Hi","72 105 → Hi",
    "This tool accepts byte-range values only","Lo strumento accetta soltanto valori nell’intervallo di un byte",
    "Although the name says ASCII, the implementation accepts decimal values from 0 through 255.","Anche se il nome indica ASCII, l’implementazione accetta valori decimali da 0 a 255."
  ),

  e("text-to-ascii","converter",
    "Convert text to Unicode code points","Converti testo in code point Unicode",
    "Every Unicode character is converted to its decimal code point.","Ogni carattere Unicode viene convertito nel relativo code point decimale.",
    "Text","Testo","Read code points","Legge code point","Decimal codes","Codici decimali",
    "ABC → 65 66 67","ABC → 65 66 67",
    "The implementation is broader than traditional ASCII","L’implementazione è più ampia dell’ASCII tradizionale",
    "Unicode code points are returned, so characters outside the 7-bit ASCII range can also be represented.","Vengono restituiti code point Unicode, quindi possono essere rappresentati anche caratteri fuori dall’ASCII a 7 bit."
  )
];

export const encodingEditorialBatch:
  Partial<Record<string, Partial<Record<LocaleId, ToolEditorial>>>> =
  Object.fromEntries(defs.map(def => [def.id, simpleEditorial(def)]));
