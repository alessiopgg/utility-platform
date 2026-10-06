import type { LocaleId } from '../core/types.ts';
import type { ToolEditorial } from './tool-editorial.ts';
import {
  bi,
  developerEditorial,
  type DeveloperEditorialDefinition
} from './editorial-factories.ts';

const defs: DeveloperEditorialDefinition[] = [

  {
    id: 'json-formatter',
    title: bi('Make JSON easier to read', 'Rendi il JSON più facile da leggere'),
    intro: bi('UtilityLake parses valid JSON and prints it again using consistent two-space indentation.', 'UtilityLake analizza JSON valido e lo ristampa usando un’indentazione costante di due spazi.'),
    input: bi('JSON', 'JSON'),
    process: bi('Parse + pretty print', 'Parsing + formattazione'),
    output: bi('Formatted JSON', 'JSON formattato'),
    insightTitle: bi('Whitespace does not normally change JSON data', 'Gli spazi normalmente non cambiano i dati JSON'),
    insightBody: bi('Indentation and line breaks mainly improve readability; they do not add new values to ordinary valid JSON.', 'Indentazione e ritorni a capo migliorano soprattutto la leggibilità e non aggiungono nuovi valori al normale JSON valido.')
  },

  {
    id: 'json-beautifier',
    title: bi('Turn compact JSON into a readable structure', 'Trasforma JSON compatto in una struttura leggibile'),
    intro: bi('Valid JSON is parsed and printed with consistent indentation.', 'Il JSON valido viene analizzato e ristampato con indentazione coerente.'),
    input: bi('JSON', 'JSON'),
    process: bi('Parse + indent', 'Parsing + indentazione'),
    output: bi('Readable JSON', 'JSON leggibile'),
    insightTitle: bi('Beautifying changes presentation, not meaning', 'Il beautify cambia la presentazione, non il significato'),
    insightBody: bi('The structure becomes easier for humans to inspect while the represented values remain the same.', 'La struttura diventa più semplice da leggere senza cambiare i valori rappresentati.')
  },

  {
    id: 'json-viewer',
    title: bi('Inspect JSON in a clean formatted form', 'Ispeziona JSON in una forma pulita e leggibile'),
    intro: bi('UtilityLake parses JSON and displays its structure using consistent formatting.', 'UtilityLake analizza il JSON e ne mostra la struttura con una formattazione coerente.'),
    input: bi('JSON', 'JSON'),
    process: bi('Parse structure', 'Analizza struttura'),
    output: bi('Readable JSON', 'JSON leggibile'),
    insightTitle: bi('Formatting reveals nesting more clearly', 'La formattazione rende più evidente l’annidamento'),
    insightBody: bi('Objects and arrays are easier to follow when each nesting level is visually separated.', 'Oggetti e array sono più semplici da seguire quando ogni livello di annidamento è separato visivamente.')
  },

  {
    id: 'json-minifier',
    title: bi('Remove unnecessary JSON whitespace', 'Rimuovi gli spazi non necessari dal JSON'),
    intro: bi('UtilityLake parses the JSON and serializes it again without indentation or extra whitespace.', 'UtilityLake analizza il JSON e lo serializza nuovamente senza indentazione o spazi superflui.'),
    input: bi('Formatted JSON', 'JSON formattato'),
    process: bi('Remove whitespace', 'Rimuove spazi'),
    output: bi('Minified JSON', 'JSON minificato'),
    insightTitle: bi('Minification reduces characters, not data', 'La minificazione riduce i caratteri, non i dati'),
    insightBody: bi('Whitespace is removed while the represented JSON values remain unchanged.', 'Gli spazi vengono rimossi mentre i valori JSON rappresentati restano invariati.')
  },

  {
    id: 'json-validator',
    title: bi('Check whether JSON syntax is valid', 'Controlla se la sintassi JSON è valida'),
    intro: bi('UtilityLake attempts to parse the input and reports whether it is valid JSON.', 'UtilityLake prova ad analizzare l’input e indica se è JSON valido.'),
    input: bi('JSON', 'JSON'),
    process: bi('Parse syntax', 'Verifica sintassi'),
    output: bi('Validation result', 'Esito validazione'),
    insightTitle: bi('Valid JSON follows strict syntax rules', 'Il JSON valido segue regole sintattiche precise'),
    insightBody: bi('Missing quotes, commas or brackets can prevent the entire document from being parsed.', 'Virgolette, virgole o parentesi mancanti possono impedire il parsing dell’intero documento.')
  },

  {
    id: 'json-to-csv',
    title: bi('Turn an array of JSON objects into CSV', 'Trasforma un array di oggetti JSON in CSV'),
    intro: bi('UtilityLake collects object keys as columns and serializes the rows into CSV.', 'UtilityLake usa le chiavi degli oggetti come colonne e serializza le righe in CSV.'),
    input: bi('JSON array', 'Array JSON'),
    process: bi('Map keys to columns', 'Mappa chiavi in colonne'),
    output: bi('CSV', 'CSV'),
    insightTitle: bi('JSON objects become tabular rows', 'Gli oggetti JSON diventano righe tabellari'),
    insightBody: bi('Keys found across the objects are used to build the CSV header.', 'Le chiavi presenti negli oggetti vengono utilizzate per costruire l’intestazione CSV.')
  },

  {
    id: 'csv-to-json',
    title: bi('Turn CSV rows into JSON objects', 'Trasforma righe CSV in oggetti JSON'),
    intro: bi('The first CSV row becomes the set of object keys and each following row becomes one JSON object.', 'La prima riga CSV diventa l’insieme delle chiavi e ogni riga successiva diventa un oggetto JSON.'),
    input: bi('CSV', 'CSV'),
    process: bi('Header + rows', 'Intestazione + righe'),
    output: bi('JSON', 'JSON'),
    insightTitle: bi('The header defines the JSON keys', 'L’intestazione definisce le chiavi JSON'),
    insightBody: bi('Each column name from the first row is reused as a property name for the following rows.', 'Ogni nome di colonna della prima riga viene riutilizzato come proprietà per le righe successive.')
  },

  {
    id: 'json-to-xml',
    title: bi('Convert JSON structure into XML elements', 'Converti la struttura JSON in elementi XML'),
    intro: bi('Objects become nested XML elements and arrays are emitted as repeated item elements.', 'Gli oggetti diventano elementi XML annidati e gli array vengono rappresentati con elementi item ripetuti.'),
    input: bi('JSON', 'JSON'),
    process: bi('Map values to XML', 'Mappa valori in XML'),
    output: bi('XML', 'XML'),
    insightTitle: bi('JSON and XML do not map perfectly one-to-one', 'JSON e XML non corrispondono perfettamente uno a uno'),
    insightBody: bi('Arrays, attributes and data types have different concepts in the two formats, so conversion requires conventions.', 'Array, attributi e tipi di dato hanno concetti diversi nei due formati e la conversione richiede convenzioni.')
  },

  {
    id: 'xml-to-json',
    title: bi('Convert XML elements into JSON', 'Converti elementi XML in JSON'),
    intro: bi('UtilityLake parses XML elements and builds a JSON representation of their nested structure.', 'UtilityLake analizza gli elementi XML e costruisce una rappresentazione JSON della loro struttura annidata.'),
    input: bi('XML', 'XML'),
    process: bi('Parse element tree', 'Analizza albero XML'),
    output: bi('JSON', 'JSON'),
    insightTitle: bi('Repeated XML elements may become arrays', 'Elementi XML ripetuti possono diventare array'),
    insightBody: bi('When multiple child elements share the same tag name, they need a collection-like representation in JSON.', 'Quando più elementi figli hanno lo stesso nome, in JSON serve una rappresentazione simile a una collezione.')
  },

  {
    id: 'json-to-yaml',
    title: bi('Convert JSON into readable YAML', 'Converti JSON in YAML leggibile'),
    intro: bi('UtilityLake parses JSON and serializes the resulting data structure as YAML.', 'UtilityLake analizza il JSON e serializza la struttura dati risultante come YAML.'),
    input: bi('JSON', 'JSON'),
    process: bi('Parse + serialize', 'Parsing + serializzazione'),
    output: bi('YAML', 'YAML'),
    insightTitle: bi('JSON and YAML can represent many of the same structures', 'JSON e YAML possono rappresentare molte delle stesse strutture'),
    insightBody: bi('Objects, arrays and scalar values can usually move naturally between the two formats.', 'Oggetti, array e valori scalari possono normalmente essere convertiti in modo naturale tra i due formati.')
  },

  {
    id: 'yaml-to-json',
    title: bi('Convert YAML into formatted JSON', 'Converti YAML in JSON formattato'),
    intro: bi('UtilityLake parses YAML and serializes the resulting data as indented JSON.', 'UtilityLake analizza YAML e serializza i dati risultanti come JSON indentato.'),
    input: bi('YAML', 'YAML'),
    process: bi('Parse + serialize', 'Parsing + serializzazione'),
    output: bi('JSON', 'JSON'),
    insightTitle: bi('YAML supports syntax that can be more human-friendly', 'YAML supporta una sintassi spesso più leggibile'),
    insightBody: bi('Indentation is structurally meaningful in YAML, unlike ordinary whitespace in JSON.', 'In YAML l’indentazione ha significato strutturale, a differenza dei normali spazi nel JSON.')
  },

  {
    id: 'json-sorter',
    title: bi('Sort JSON object keys recursively', 'Ordina ricorsivamente le chiavi JSON'),
    intro: bi('UtilityLake sorts object keys at every nesting level and prints the normalized structure.', 'UtilityLake ordina le chiavi degli oggetti a ogni livello di annidamento e ristampa la struttura normalizzata.'),
    input: bi('JSON', 'JSON'),
    process: bi('Sort keys recursively', 'Ordina chiavi ricorsivamente'),
    output: bi('Sorted JSON', 'JSON ordinato'),
    insightTitle: bi('Object key order is often for readability, not meaning', 'L’ordine delle chiavi serve spesso alla leggibilità, non al significato'),
    insightBody: bi('Sorting can make documents easier to compare even when key order is not semantically important.', 'L’ordinamento può facilitare il confronto anche quando l’ordine delle chiavi non ha importanza semantica.')
  },

  {
    id: 'json-escape',
    title: bi('Escape text for use inside a JSON string', 'Esegui l’escape del testo per una stringa JSON'),
    intro: bi('Special characters are escaped so the text can safely appear inside JSON string content.', 'I caratteri speciali vengono sottoposti a escape per poter essere inseriti in una stringa JSON.'),
    input: bi('Plain text', 'Testo'),
    process: bi('Escape special characters', 'Escape caratteri speciali'),
    output: bi('Escaped text', 'Testo escaped'),
    insightTitle: bi('Quotes and control characters need special handling', 'Virgolette e caratteri di controllo richiedono un trattamento speciale'),
    insightBody: bi('Characters such as quotes, newlines and backslashes need escape sequences inside JSON strings.', 'Caratteri come virgolette, ritorni a capo e backslash richiedono sequenze di escape nelle stringhe JSON.')
  },

  {
    id: 'json-unescape',
    title: bi('Turn escaped JSON string content back into text', 'Riporta il contenuto JSON escaped a testo'),
    intro: bi('UtilityLake interprets JSON escape sequences and reconstructs their text representation.', 'UtilityLake interpreta le sequenze di escape JSON e ricostruisce il testo corrispondente.'),
    input: bi('Escaped text', 'Testo escaped'),
    process: bi('Interpret escapes', 'Interpreta escape'),
    output: bi('Plain text', 'Testo'),
    insightTitle: bi('Escape sequences represent characters indirectly', 'Le sequenze di escape rappresentano caratteri indirettamente'),
    insightBody: bi('For example, a newline may be written as two visible characters, backslash and n, until it is unescaped.', 'Ad esempio, un ritorno a capo può essere scritto come backslash e n finché non viene eseguito l’unescape.')
  },

  {
    id: 'json-diff',
    title: bi('Compare two normalized JSON documents', 'Confronta due documenti JSON normalizzati'),
    intro: bi('UtilityLake sorts and formats both JSON inputs before comparing them line by line.', 'UtilityLake ordina e formatta entrambi gli input JSON prima di confrontarli riga per riga.'),
    input: bi('Two JSON documents', 'Due documenti JSON'),
    process: bi('Normalize + compare', 'Normalizza + confronta'),
    output: bi('Diff', 'Differenze'),
    insightTitle: bi('Normalization reduces noisy differences', 'La normalizzazione riduce le differenze inutili'),
    insightBody: bi('Sorting keys and formatting both inputs first helps reveal structural differences instead of whitespace differences.', 'Ordinare le chiavi e formattare prima gli input aiuta a evidenziare differenze strutturali invece di semplici differenze di spaziatura.')
  },

  {
    id: 'html-formatter',
    title: bi('Format HTML into a readable structure', 'Formatta HTML in una struttura leggibile'),
    intro: bi('UtilityLake uses Prettier in the browser to format HTML consistently.', 'UtilityLake usa Prettier nel browser per formattare HTML in modo coerente.'),
    input: bi('HTML', 'HTML'),
    process: bi('Parse + format', 'Parsing + formattazione'),
    output: bi('Formatted HTML', 'HTML formattato'),
    insightTitle: bi('Formatting is different from rendering', 'Formattare è diverso da renderizzare'),
    insightBody: bi('The tool changes the source layout for readability; it does not display the HTML as a webpage.', 'Lo strumento cambia la disposizione del codice sorgente per renderlo leggibile, ma non visualizza l’HTML come pagina web.')
  },

  {
    id: 'html-minifier',
    title: bi('Reduce ordinary HTML whitespace', 'Riduci gli spazi superflui nell’HTML'),
    intro: bi('UtilityLake removes comments and common unnecessary whitespace without executing the markup.', 'UtilityLake rimuove commenti e spazi comuni non necessari senza eseguire il markup.'),
    input: bi('HTML', 'HTML'),
    process: bi('Remove whitespace', 'Rimuove spazi'),
    output: bi('Minified HTML', 'HTML minificato'),
    insightTitle: bi('Minification is not the same as compression', 'Minificazione e compressione non sono la stessa cosa'),
    insightBody: bi('It reduces source characters but does not apply a binary compression algorithm such as gzip or Brotli.', 'Riduce i caratteri del sorgente ma non applica un algoritmo di compressione binaria come gzip o Brotli.')
  },

  {
    id: 'css-formatter',
    title: bi('Format CSS consistently', 'Formatta CSS in modo coerente'),
    intro: bi('UtilityLake uses Prettier to normalize spacing and layout in CSS source.', 'UtilityLake usa Prettier per normalizzare spaziatura e disposizione del codice CSS.'),
    input: bi('CSS', 'CSS'),
    process: bi('Parse + format', 'Parsing + formattazione'),
    output: bi('Formatted CSS', 'CSS formattato'),
    insightTitle: bi('Readable formatting does not change the stylesheet goal', 'Una formattazione leggibile non cambia lo scopo del foglio di stile'),
    insightBody: bi('Whitespace and line layout can usually change without changing what valid CSS declarations describe.', 'Spaziatura e disposizione delle righe possono normalmente cambiare senza alterare ciò che descrivono le dichiarazioni CSS valide.')
  },

  {
    id: 'css-minifier',
    title: bi('Make CSS source more compact', 'Rendi il codice CSS più compatto'),
    intro: bi('Comments and common unnecessary whitespace are removed from CSS source.', 'Commenti e spazi comuni non necessari vengono rimossi dal codice CSS.'),
    input: bi('CSS', 'CSS'),
    process: bi('Remove comments + spaces', 'Rimuove commenti + spazi'),
    output: bi('Minified CSS', 'CSS minificato'),
    insightTitle: bi('Minified CSS is optimized for size, not editing', 'Il CSS minificato è pensato per il peso, non per la modifica'),
    insightBody: bi('Compact source is harder for humans to read but can reduce transferred text size.', 'Un sorgente compatto è più difficile da leggere ma può ridurre la quantità di testo trasferita.')
  },

  {
    id: 'javascript-formatter',
    title: bi('Format JavaScript with consistent style', 'Formatta JavaScript con uno stile coerente'),
    intro: bi('UtilityLake uses Prettier in the browser to reformat JavaScript source.', 'UtilityLake usa Prettier nel browser per riformattare il codice JavaScript.'),
    input: bi('JavaScript', 'JavaScript'),
    process: bi('Parse + format', 'Parsing + formattazione'),
    output: bi('Formatted JavaScript', 'JavaScript formattato'),
    insightTitle: bi('Formatting changes layout, not program intent', 'La formattazione cambia il layout, non l’intento del programma'),
    insightBody: bi('A formatter reorganizes source presentation rather than deliberately changing what the code is meant to do.', 'Un formatter riorganizza la presentazione del sorgente senza voler cambiare ciò che il codice deve fare.')
  },

  {
    id: 'sql-formatter',
    title: bi('Make SQL queries easier to read', 'Rendi le query SQL più facili da leggere'),
    intro: bi('Choose a dialect and UtilityLake formats SQL with consistent indentation and uppercase keywords.', 'Scegli un dialetto e UtilityLake formatta SQL con indentazione coerente e keyword maiuscole.'),
    input: bi('SQL', 'SQL'),
    process: bi('Format selected dialect', 'Formatta il dialetto'),
    output: bi('Formatted SQL', 'SQL formattato'),
    insightTitle: bi('SQL dialects are not identical', 'I dialetti SQL non sono identici'),
    insightBody: bi('PostgreSQL, MySQL, SQLite and SQL Server can use different syntax, so selecting the correct dialect matters.', 'PostgreSQL, MySQL, SQLite e SQL Server possono usare sintassi diverse, quindi scegliere il dialetto corretto è importante.')
  },

  {
    id: 'markdown-to-html',
    title: bi('Convert Markdown syntax into HTML source', 'Converti la sintassi Markdown in HTML'),
    intro: bi('UtilityLake parses Markdown and generates the corresponding HTML markup.', 'UtilityLake analizza Markdown e genera il markup HTML corrispondente.'),
    input: bi('Markdown', 'Markdown'),
    process: bi('Parse Markdown', 'Analizza Markdown'),
    output: bi('HTML', 'HTML'),
    insightTitle: bi('Markdown is shorthand for document structure', 'Markdown è una scorciatoia per la struttura del documento'),
    insightBody: bi('Headings, lists and links written with compact Markdown syntax are expanded into HTML elements.', 'Titoli, liste e link scritti con sintassi Markdown compatta vengono trasformati in elementi HTML.')
  },

  {
    id: 'html-to-markdown',
    title: bi('Turn HTML source into Markdown', 'Trasforma HTML in Markdown'),
    intro: bi('UtilityLake converts common HTML elements into a simpler Markdown representation.', 'UtilityLake converte gli elementi HTML comuni in una rappresentazione Markdown più semplice.'),
    input: bi('HTML', 'HTML'),
    process: bi('Map elements', 'Mappa elementi'),
    output: bi('Markdown', 'Markdown'),
    insightTitle: bi('Some HTML has no exact Markdown equivalent', 'Alcuni elementi HTML non hanno un equivalente Markdown esatto'),
    insightBody: bi('Markdown is intentionally simpler than HTML, so complex markup may need approximation during conversion.', 'Markdown è intenzionalmente più semplice di HTML, quindi markup complessi possono richiedere approssimazioni.')
  },

  {
    id: 'regex-tester',
    title: bi('Test a JavaScript regular expression against text', 'Testa una regular expression JavaScript su un testo'),
    intro: bi('Enter a pattern, flags and test text to see the matches found by JavaScript regular expressions.', 'Inserisci pattern, flag e testo per vedere le corrispondenze trovate dalle regular expression JavaScript.'),
    input: bi('Pattern + text', 'Pattern + testo'),
    process: bi('Run RegExp', 'Esegue RegExp'),
    output: bi('Matches', 'Corrispondenze'),
    insightTitle: bi('Flags can completely change regex behavior', 'I flag possono cambiare completamente il comportamento della regex'),
    insightBody: bi('For example, the global flag searches for every match instead of stopping after the first one.', 'Ad esempio, il flag globale cerca tutte le corrispondenze invece di fermarsi alla prima.')
  },

  {
    id: 'regex-escape',
    title: bi('Escape text for literal use in a regex', 'Esegui l’escape del testo per usarlo letteralmente in una regex'),
    intro: bi('Regex metacharacters are escaped so the input can be matched as ordinary text.', 'I metacaratteri regex vengono sottoposti a escape per poter cercare l’input come testo normale.'),
    input: bi('Text', 'Testo'),
    process: bi('Escape metacharacters', 'Escape metacaratteri'),
    output: bi('Regex-safe text', 'Testo sicuro per regex'),
    insightTitle: bi('Characters such as . * + ? have special regex meaning', 'Caratteri come . * + ? hanno significato speciale nelle regex'),
    insightBody: bi('Escaping them tells the regex engine to interpret those characters literally.', 'L’escape indica al motore regex di interpretare quei caratteri letteralmente.')
  },

  {
    id: 'cron-expression-parser',
    title: bi('Translate a cron expression into plain language', 'Traduci un’espressione cron in linguaggio naturale'),
    intro: bi('UtilityLake parses a cron expression and describes the schedule it represents.', 'UtilityLake analizza un’espressione cron e descrive la pianificazione che rappresenta.'),
    input: bi('Cron expression', 'Espressione cron'),
    process: bi('Interpret schedule', 'Interpreta pianificazione'),
    output: bi('Description', 'Descrizione'),
    insightTitle: bi('Cron fields describe recurring time rules', 'I campi cron descrivono regole temporali ricorrenti'),
    insightBody: bi('Individual positions represent concepts such as minute, hour, day and month rather than one absolute timestamp.', 'Le diverse posizioni rappresentano concetti come minuto, ora, giorno e mese invece di un singolo timestamp assoluto.')
  },

  {
    id: 'unix-timestamp-converter',
    title: bi('Turn Unix timestamps into readable dates', 'Trasforma timestamp Unix in date leggibili'),
    intro: bi('Choose seconds or milliseconds and UtilityLake converts the Unix value into ISO, UTC and local date formats.', 'Scegli secondi o millisecondi e UtilityLake converte il valore Unix in formato ISO, UTC e data locale.'),
    input: bi('Unix timestamp', 'Timestamp Unix'),
    process: bi('Convert timestamp', 'Converte timestamp'),
    output: bi('Readable dates', 'Date leggibili'),
    insightTitle: bi('Seconds and milliseconds differ by a factor of 1000', 'Secondi e millisecondi differiscono di un fattore 1000'),
    insightBody: bi('Using the wrong unit can produce a date that is dramatically different from the intended one.', 'Usare l’unità sbagliata può produrre una data completamente diversa da quella prevista.')
  },

  {
    id: 'epoch-generator',
    title: bi('Generate the current Unix time', 'Genera il tempo Unix corrente'),
    intro: bi('UtilityLake reads the current browser time and returns Unix seconds and milliseconds.', 'UtilityLake legge l’ora corrente del browser e restituisce secondi e millisecondi Unix.'),
    input: bi('Current time', 'Ora corrente'),
    process: bi('Convert to Unix time', 'Converte in tempo Unix'),
    output: bi('Epoch values', 'Valori epoch'),
    insightTitle: bi('Unix time counts from 1 January 1970 UTC', 'Il tempo Unix conta dal 1 gennaio 1970 UTC'),
    insightBody: bi('The epoch is a numeric representation of elapsed time, which makes it useful for software and data exchange.', 'L’epoch è una rappresentazione numerica del tempo trascorso, utile nel software e nello scambio dati.')
  },

  {
    id: 'csv-formatter',
    title: bi('Normalize CSV rows into a consistent form', 'Normalizza le righe CSV in una forma coerente'),
    intro: bi('UtilityLake parses CSV rows and serializes them again using consistent quoting rules.', 'UtilityLake analizza le righe CSV e le serializza nuovamente usando regole di quoting coerenti.'),
    input: bi('CSV', 'CSV'),
    process: bi('Parse + serialize', 'Parsing + serializzazione'),
    output: bi('Formatted CSV', 'CSV formattato'),
    insightTitle: bi('CSV fields may need quoting', 'I campi CSV possono richiedere virgolette'),
    insightBody: bi('Commas, quotes and line breaks inside field values require special escaping to preserve row structure.', 'Virgole, virgolette e ritorni a capo nei valori richiedono escape specifici per preservare la struttura delle righe.')
  },

  {
    id: 'csv-validator',
    title: bi('Check CSV row and column consistency', 'Controlla la coerenza di righe e colonne CSV'),
    intro: bi('UtilityLake parses the CSV and checks whether rows contain a consistent number of columns.', 'UtilityLake analizza il CSV e controlla che le righe abbiano un numero coerente di colonne.'),
    input: bi('CSV', 'CSV'),
    process: bi('Check row widths', 'Controlla colonne'),
    output: bi('Validation report', 'Report validazione'),
    insightTitle: bi('A malformed row can shift every following column', 'Una riga malformata può spostare tutte le colonne successive'),
    insightBody: bi('Incorrect quoting or delimiters can make a row appear to contain more or fewer fields than expected.', 'Quoting o delimitatori errati possono far apparire una riga con più o meno campi del previsto.')
  },

  {
    id: 'yaml-validator',
    title: bi('Validate YAML syntax', 'Valida la sintassi YAML'),
    intro: bi('UtilityLake parses the YAML document and reports syntax errors when parsing fails.', 'UtilityLake analizza il documento YAML e segnala errori sintattici quando il parsing fallisce.'),
    input: bi('YAML', 'YAML'),
    process: bi('Parse syntax', 'Verifica sintassi'),
    output: bi('Validation result', 'Esito validazione'),
    insightTitle: bi('Indentation is part of YAML structure', 'L’indentazione fa parte della struttura YAML'),
    insightBody: bi('Incorrect indentation can change nesting or make the document invalid.', 'Un’indentazione errata può cambiare l’annidamento o rendere il documento non valido.')
  },

  {
    id: 'xml-validator',
    title: bi('Validate XML syntax', 'Valida la sintassi XML'),
    intro: bi('UtilityLake parses XML and reports an error if the document cannot be interpreted as valid XML.', 'UtilityLake analizza XML e segnala un errore se il documento non può essere interpretato come XML valido.'),
    input: bi('XML', 'XML'),
    process: bi('Parse document', 'Analizza documento'),
    output: bi('Validation result', 'Esito validazione'),
    insightTitle: bi('XML tags must form a valid tree', 'I tag XML devono formare un albero valido'),
    insightBody: bi('Elements need properly nested opening and closing tags for the document structure to be valid.', 'Gli elementi devono avere tag di apertura e chiusura correttamente annidati affinché la struttura sia valida.')
  },

  {
    id: 'url-parser',
    title: bi('Break a URL into its components', 'Scomponi un URL nei suoi componenti'),
    intro: bi('UtilityLake separates protocol, host, path, query string and fragment from an absolute URL.', 'UtilityLake separa protocollo, host, percorso, query string e frammento da un URL assoluto.'),
    input: bi('URL', 'URL'),
    process: bi('Parse URL', 'Analizza URL'),
    output: bi('URL components', 'Componenti URL'),
    insightTitle: bi('A URL contains several independent parts', 'Un URL contiene diverse parti indipendenti'),
    insightBody: bi('Protocol, hostname, path, query and fragment each have a different role in identifying or modifying a resource request.', 'Protocollo, hostname, percorso, query e frammento hanno ruoli diversi nell’identificare o modificare una richiesta.')
  },

  {
    id: 'query-string-parser',
    title: bi('Read query-string parameters clearly', 'Leggi chiaramente i parametri di una query string'),
    intro: bi('UtilityLake parses key-value pairs from a URL query string and lists them one per line.', 'UtilityLake analizza le coppie chiave-valore di una query string e le mostra una per riga.'),
    input: bi('Query string', 'Query string'),
    process: bi('Parse parameters', 'Analizza parametri'),
    output: bi('Key-value pairs', 'Coppie chiave-valore'),
    insightTitle: bi('A leading question mark is optional here', 'Il punto interrogativo iniziale è opzionale qui'),
    insightBody: bi('The parser removes an initial ? before interpreting the parameter pairs.', 'Il parser rimuove un eventuale ? iniziale prima di interpretare le coppie di parametri.')
  },

  {
    id: 'http-header-parser',
    title: bi('Split HTTP headers into names and values', 'Separa gli header HTTP in nomi e valori'),
    intro: bi('UtilityLake reads one header per line and separates each name from its value at the first colon.', 'UtilityLake legge un header per riga e separa nome e valore al primo carattere due punti.'),
    input: bi('HTTP headers', 'Header HTTP'),
    process: bi('Split name:value', 'Separa nome:valore'),
    output: bi('Parsed headers', 'Header analizzati'),
    insightTitle: bi('The first colon separates the header name', 'Il primo due punti separa il nome dell’header'),
    insightBody: bi('Additional colons may legitimately appear inside the value, so only the first separator defines the header name.', 'Altri due punti possono comparire legittimamente nel valore, quindi solo il primo separatore definisce il nome dell’header.')
  }

];

export const structuredEditorialBatch:
  Partial<Record<string, Partial<Record<LocaleId, ToolEditorial>>>> =
  Object.fromEntries(
    defs.map((def) => [def.id, developerEditorial(def)])
  );
