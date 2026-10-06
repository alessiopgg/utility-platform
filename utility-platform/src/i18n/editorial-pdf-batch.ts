import type { LocaleId } from '../core/types.ts';
import type { ToolEditorial } from './tool-editorial.ts';
import { bi, fileEditorial, type FileEditorialDefinition } from './editorial-factories.ts';

const defs: FileEditorialDefinition[] = [

  {
    id: 'split-pdf',
    mode: 'transform',
    title: bi('One PDF in, one file for every page', 'Un PDF in ingresso, un file per ogni pagina'),
    intro: bi('UtilityLake copies each page into its own one-page PDF.', 'UtilityLake copia ogni pagina in un PDF separato di una sola pagina.'),
    input: bi('PDF', 'PDF'),
    process: bi('Copy each page', 'Copia ogni pagina'),
    output: bi('Separate PDFs', 'PDF separati'),
    outputName: 'page-1.pdf, page-2.pdf, …',
    insightTitle: bi('Splitting does not turn pages into images', 'Dividere un PDF non trasforma le pagine in immagini'),
    insightBody: bi('Each page is copied as a PDF page into a new document, so splitting is different from rasterizing the source.', 'Ogni pagina viene copiata come pagina PDF in un nuovo documento: la divisione non equivale a rasterizzare il file.')
  },

  {
    id: 'rotate-pdf',
    mode: 'transform',
    title: bi('Rotate every page without rebuilding it as an image', 'Ruota tutte le pagine senza trasformarle in immagini'),
    intro: bi('Choose 90°, 180° or 270° and UtilityLake updates the rotation of every page.', 'Scegli 90°, 180° o 270° e UtilityLake aggiorna la rotazione di ogni pagina.'),
    input: bi('PDF', 'PDF'),
    process: bi('Change rotation', 'Modifica rotazione'),
    output: bi('Rotated PDF', 'PDF ruotato'),
    setup: bi('Choose a rotation angle.', 'Scegli l’angolo di rotazione.'),
    outputName: 'rotated.pdf',
    insightTitle: bi('Rotation is stored as a page property', 'La rotazione è una proprietà della pagina'),
    insightBody: bi('The tool changes the PDF page rotation instead of rendering the document into new page images.', 'Lo strumento modifica la rotazione delle pagine PDF senza renderizzare il documento in nuove immagini.')
  },

  {
    id: 'delete-pdf-pages',
    mode: 'transform',
    title: bi('Remove only the pages you do not need', 'Rimuovi soltanto le pagine che non ti servono'),
    intro: bi('Enter individual pages or ranges and UtilityLake removes them from a new copy of the PDF.', 'Inserisci pagine singole o intervalli e UtilityLake le rimuove da una nuova copia del PDF.'),
    input: bi('PDF + page range', 'PDF + intervallo pagine'),
    process: bi('Remove pages', 'Rimuove pagine'),
    output: bi('Updated PDF', 'PDF aggiornato'),
    setup: bi('Enter the pages to delete, for example 1,3-5.', 'Inserisci le pagine da eliminare, ad esempio 1,3-5.'),
    outputName: 'pages-deleted.pdf',
    insightTitle: bi('Page numbers shift after pages are removed', 'I numeri di pagina cambiano dopo la rimozione'),
    insightBody: bi('After deletion, the remaining pages keep their order but naturally receive new positions in the resulting document.', 'Dopo l’eliminazione, le pagine rimaste mantengono il loro ordine ma assumono nuove posizioni nel documento finale.')
  },

  {
    id: 'extract-pdf-pages',
    mode: 'transform',
    title: bi('Build a new PDF from selected pages', 'Crea un nuovo PDF dalle pagine selezionate'),
    intro: bi('Choose the pages you want and UtilityLake copies only those pages into a new PDF.', 'Scegli le pagine desiderate e UtilityLake copia soltanto quelle in un nuovo PDF.'),
    input: bi('PDF + page range', 'PDF + intervallo pagine'),
    process: bi('Copy selected pages', 'Copia pagine selezionate'),
    output: bi('Extracted PDF', 'PDF estratto'),
    setup: bi('Enter the pages to extract, for example 1,3-5.', 'Inserisci le pagine da estrarre, ad esempio 1,3-5.'),
    outputName: 'extracted-pages.pdf',
    insightTitle: bi('Extraction copies PDF pages, not screenshots', 'L’estrazione copia pagine PDF, non screenshot'),
    insightBody: bi('Selected pages are copied directly into the new document rather than intentionally being converted into images.', 'Le pagine selezionate vengono copiate direttamente nel nuovo documento senza essere intenzionalmente convertite in immagini.')
  },

  {
    id: 'reorder-pdf-pages',
    mode: 'transform',
    title: bi('Rebuild the PDF in a new page order', 'Ricostruisci il PDF con un nuovo ordine delle pagine'),
    intro: bi('Provide the complete page sequence and UtilityLake creates a new document following that order.', 'Fornisci la sequenza completa delle pagine e UtilityLake crea un nuovo documento seguendo quell’ordine.'),
    input: bi('PDF + page sequence', 'PDF + sequenza pagine'),
    process: bi('Reorder pages', 'Riordina pagine'),
    output: bi('Reordered PDF', 'PDF riordinato'),
    setup: bi('Enter every page exactly once in the desired order.', 'Inserisci ogni pagina una sola volta nell’ordine desiderato.'),
    outputName: 'reordered.pdf',
    insightTitle: bi('Every page must appear exactly once', 'Ogni pagina deve comparire esattamente una volta'),
    insightBody: bi('The tool validates the sequence so pages cannot be accidentally omitted or duplicated while reordering.', 'Lo strumento verifica la sequenza per evitare che durante il riordino vengano omesse o duplicate pagine.')
  },

  {
    id: 'images-to-pdf',
    mode: 'transform',
    title: bi('Turn JPG and PNG images into PDF pages', 'Trasforma immagini JPG e PNG in pagine PDF'),
    intro: bi('Each selected image is embedded as a page inside a new PDF.', 'Ogni immagine selezionata viene incorporata come pagina in un nuovo PDF.'),
    input: bi('JPG / PNG images', 'Immagini JPG / PNG'),
    process: bi('Embed images', 'Incorpora immagini'),
    output: bi('PDF', 'PDF'),
    outputName: 'images.pdf',
    insightTitle: bi('Each image becomes its own PDF page', 'Ogni immagine diventa una pagina PDF'),
    insightBody: bi('The page dimensions follow the embedded image dimensions instead of forcing every image into one fixed paper size.', 'Le dimensioni della pagina seguono quelle dell’immagine incorporata invece di forzarla in un unico formato carta.')
  },

  {
    id: 'jpg-to-pdf',
    mode: 'transform',
    title: bi('Combine JPG images into a PDF', 'Combina immagini JPG in un PDF'),
    intro: bi('UtilityLake embeds each JPG as a page in a new PDF document.', 'UtilityLake incorpora ogni JPG come pagina in un nuovo documento PDF.'),
    input: bi('JPG images', 'Immagini JPG'),
    process: bi('Embed JPG pages', 'Incorpora pagine JPG'),
    output: bi('PDF', 'PDF'),
    outputName: 'jpg-to-pdf.pdf',
    insightTitle: bi('The JPG is embedded rather than re-created as text', 'Il JPG viene incorporato, non ricostruito come testo'),
    insightBody: bi('Image content stays image-based inside the PDF; text visible in a JPG does not become selectable PDF text.', 'Il contenuto rimane basato su immagine all’interno del PDF: il testo visibile nel JPG non diventa testo PDF selezionabile.')
  },

  {
    id: 'png-to-pdf',
    mode: 'transform',
    title: bi('Combine PNG images into a PDF', 'Combina immagini PNG in un PDF'),
    intro: bi('UtilityLake embeds each PNG as a page inside a new PDF document.', 'UtilityLake incorpora ogni PNG come pagina in un nuovo documento PDF.'),
    input: bi('PNG images', 'Immagini PNG'),
    process: bi('Embed PNG pages', 'Incorpora pagine PNG'),
    output: bi('PDF', 'PDF'),
    outputName: 'png-to-pdf.pdf',
    insightTitle: bi('PNG content remains image-based', 'Il contenuto PNG rimane basato su immagine'),
    insightBody: bi('Creating the PDF does not perform OCR, so text drawn inside a PNG remains part of the image.', 'La creazione del PDF non esegue OCR: il testo presente nel PNG rimane parte dell’immagine.')
  },

  {
    id: 'pdf-to-jpg',
    mode: 'transform',
    title: bi('Render every PDF page as a JPG image', 'Renderizza ogni pagina PDF come immagine JPG'),
    intro: bi('UtilityLake renders each PDF page in the browser and creates one JPG image per page.', 'UtilityLake renderizza ogni pagina PDF nel browser e crea un’immagine JPG per pagina.'),
    input: bi('PDF', 'PDF'),
    process: bi('Render pages', 'Renderizza pagine'),
    output: bi('JPG images', 'Immagini JPG'),
    setup: bi('Choose the render scale.', 'Scegli la scala di rendering.'),
    outputName: 'page-1.jpg, page-2.jpg, …',
    insightTitle: bi('Rendering turns document content into pixels', 'Il rendering trasforma il contenuto del documento in pixel'),
    insightBody: bi('Selectable text and vector graphics become part of the rendered image when exported to JPG.', 'Testo selezionabile e grafica vettoriale diventano parte dell’immagine renderizzata quando vengono esportati in JPG.')
  },

  {
    id: 'pdf-to-png',
    mode: 'transform',
    title: bi('Render every PDF page as a PNG image', 'Renderizza ogni pagina PDF come immagine PNG'),
    intro: bi('UtilityLake renders each PDF page and creates one PNG image per page.', 'UtilityLake renderizza ogni pagina PDF e crea un’immagine PNG per pagina.'),
    input: bi('PDF', 'PDF'),
    process: bi('Render pages', 'Renderizza pagine'),
    output: bi('PNG images', 'Immagini PNG'),
    setup: bi('Choose the render scale.', 'Scegli la scala di rendering.'),
    outputName: 'page-1.png, page-2.png, …',
    insightTitle: bi('PNG avoids JPEG-style lossy compression', 'PNG evita la compressione con perdita tipica del JPEG'),
    insightBody: bi('PNG preserves rendered pixels without JPEG compression artifacts, although the resulting files can be larger.', 'PNG conserva i pixel renderizzati senza gli artefatti tipici della compressione JPEG, anche se i file possono risultare più grandi.')
  },

  {
    id: 'add-pdf-page-numbers',
    mode: 'transform',
    title: bi('Add page numbers to the bottom of every page', 'Aggiungi i numeri di pagina nella parte inferiore di ogni pagina'),
    intro: bi('UtilityLake draws sequential page numbers onto every PDF page.', 'UtilityLake disegna numeri progressivi su ogni pagina del PDF.'),
    input: bi('PDF', 'PDF'),
    process: bi('Draw page numbers', 'Disegna numeri pagina'),
    output: bi('Numbered PDF', 'PDF numerato'),
    setup: bi('Set font size and bottom margin.', 'Imposta dimensione del carattere e margine inferiore.'),
    outputName: 'numbered.pdf',
    insightTitle: bi('Numbers are added as new PDF content', 'I numeri vengono aggiunti come nuovo contenuto PDF'),
    insightBody: bi('The original page contents remain in place while a centered number is drawn near the bottom of each page.', 'Il contenuto originale rimane al suo posto mentre un numero centrato viene disegnato nella parte inferiore di ogni pagina.')
  },

  {
    id: 'add-pdf-watermark',
    mode: 'transform',
    title: bi('Place a text watermark across every page', 'Inserisci una filigrana di testo su ogni pagina'),
    intro: bi('Enter watermark text and control its size and opacity before applying it to every page.', 'Inserisci il testo della filigrana e controllane dimensione e opacità prima di applicarla a ogni pagina.'),
    input: bi('PDF + watermark text', 'PDF + testo filigrana'),
    process: bi('Draw watermark', 'Disegna filigrana'),
    output: bi('Watermarked PDF', 'PDF con filigrana'),
    setup: bi('Set watermark text, font size and opacity.', 'Imposta testo, dimensione e opacità della filigrana.'),
    outputName: 'watermarked.pdf',
    insightTitle: bi('The watermark is drawn onto each page', 'La filigrana viene disegnata su ogni pagina'),
    insightBody: bi('The current tool places the watermark diagonally with adjustable opacity, making it part of the resulting page content.', 'Lo strumento attuale posiziona la filigrana in diagonale con opacità regolabile, rendendola parte del contenuto della pagina risultante.')
  },

  {
    id: 'remove-pdf-metadata',
    mode: 'transform',
    title: bi('Clear common PDF document metadata', 'Rimuovi i metadati PDF più comuni'),
    intro: bi('UtilityLake clears common fields such as title, author, subject, keywords, producer and creator.', 'UtilityLake cancella campi comuni come titolo, autore, oggetto, parole chiave, produttore e creatore.'),
    input: bi('PDF', 'PDF'),
    process: bi('Clear common metadata', 'Cancella metadati comuni'),
    output: bi('Cleaned PDF', 'PDF ripulito'),
    outputName: 'metadata-removed.pdf',
    insightTitle: bi('Metadata removal is not a forensic scrub', 'La rimozione dei metadati non è una bonifica forense'),
    insightBody: bi('The tool clears common document metadata fields, but it should not be treated as a guarantee that every possible hidden or embedded trace is removed.', 'Lo strumento cancella i principali campi di metadati del documento, ma non garantisce la rimozione di ogni possibile traccia nascosta o incorporata.')
  },

  {
    id: 'pdf-metadata-viewer',
    mode: 'inspect',
    title: bi('See the common metadata stored in a PDF', 'Visualizza i metadati comuni memorizzati in un PDF'),
    intro: bi('UtilityLake reads fields such as title, author, creator, producer, dates and page count.', 'UtilityLake legge campi come titolo, autore, creatore, produttore, date e numero di pagine.'),
    input: bi('PDF', 'PDF'),
    process: bi('Read metadata', 'Legge metadati'),
    output: bi('Metadata report', 'Report metadati'),
    insightTitle: bi('Not every PDF contains every metadata field', 'Non tutti i PDF contengono tutti i campi di metadati'),
    insightBody: bi('Missing values are normal: metadata fields are optional and depend on how the document was created or edited.', 'Valori mancanti sono normali: i campi di metadati sono opzionali e dipendono da come il documento è stato creato o modificato.')
  },

  {
    id: 'pdf-page-count',
    mode: 'inspect',
    title: bi('Count the pages in a PDF instantly', 'Conta subito le pagine di un PDF'),
    intro: bi('UtilityLake opens the PDF structure and reports the number of pages it contains.', 'UtilityLake legge la struttura del PDF e restituisce il numero di pagine contenute.'),
    input: bi('PDF', 'PDF'),
    process: bi('Count pages', 'Conta pagine'),
    output: bi('Page total', 'Numero pagine'),
    insightTitle: bi('Page count does not require rendering every page', 'Contare le pagine non richiede di renderizzarle tutte'),
    insightBody: bi('The tool reads the PDF document structure to obtain the page count rather than converting every page into an image.', 'Lo strumento legge la struttura del documento PDF per ottenere il numero di pagine senza convertirle tutte in immagini.')
  },

  {
    id: 'pdf-size-analyzer',
    mode: 'inspect',
    title: bi('Understand PDF size at a glance', 'Comprendi rapidamente il peso di un PDF'),
    intro: bi('UtilityLake reports the total file size, number of pages and average bytes per page.', 'UtilityLake mostra dimensione totale, numero di pagine e peso medio per pagina.'),
    input: bi('PDF', 'PDF'),
    process: bi('Measure size + pages', 'Misura peso + pagine'),
    output: bi('Size summary', 'Riepilogo dimensioni'),
    insightTitle: bi('Average size per page is an estimate', 'Il peso medio per pagina è una stima'),
    insightBody: bi('The average is calculated as total file size divided by page count; it does not measure the actual storage used by each individual page.', 'La media è calcolata dividendo la dimensione totale del file per il numero di pagine: non misura il peso reale di ogni singola pagina.')
  },

  {
    id: 'crop-pdf',
    mode: 'transform',
    title: bi('Change the visible area of every PDF page', 'Modifica l’area visibile di ogni pagina PDF'),
    intro: bi('Set margins and UtilityLake applies a new crop box to each page.', 'Imposta i margini e UtilityLake applica un nuovo riquadro di ritaglio a ogni pagina.'),
    input: bi('PDF + margins', 'PDF + margini'),
    process: bi('Set crop boxes', 'Imposta crop box'),
    output: bi('Cropped PDF', 'PDF ritagliato'),
    setup: bi('Enter left, right, top and bottom margins.', 'Inserisci i margini sinistro, destro, superiore e inferiore.'),
    outputName: 'cropped.pdf',
    insightTitle: bi('Cropping does not necessarily delete hidden page content', 'Il ritaglio non elimina necessariamente il contenuto nascosto'),
    insightBody: bi('Changing the crop box controls what part of the page is shown, but content outside that visible area may still exist inside the PDF.', 'Modificare il crop box controlla quale parte della pagina viene mostrata, ma il contenuto fuori dall’area visibile può ancora esistere nel PDF.')
  },

  {
    id: 'protect-pdf-with-password',
    mode: 'transform',
    title: bi('Encrypt a PDF with a password', 'Proteggi un PDF con una password'),
    intro: bi('Enter a password and UtilityLake creates an encrypted copy of the document.', 'Inserisci una password e UtilityLake crea una copia cifrata del documento.'),
    input: bi('PDF + password', 'PDF + password'),
    process: bi('Encrypt PDF', 'Cifra PDF'),
    output: bi('Protected PDF', 'PDF protetto'),
    setup: bi('Enter the password you want to use.', 'Inserisci la password che vuoi utilizzare.'),
    outputName: 'protected.pdf',
    insightTitle: bi('The password is part of the encryption process', 'La password fa parte del processo di cifratura'),
    insightBody: bi('The document is saved as an encrypted PDF, not simply renamed or placed inside another container.', 'Il documento viene salvato come PDF cifrato: non viene semplicemente rinominato o inserito in un altro contenitore.')
  },

  {
    id: 'unlock-pdf-with-known-password',
    mode: 'transform',
    title: bi('Create an unlocked copy when you know the password', 'Crea una copia sbloccata quando conosci la password'),
    intro: bi('Provide the correct password and UtilityLake opens the encrypted PDF and saves a new unencrypted copy.', 'Inserisci la password corretta e UtilityLake apre il PDF cifrato e salva una nuova copia non cifrata.'),
    input: bi('Protected PDF + password', 'PDF protetto + password'),
    process: bi('Decrypt PDF', 'Decifra PDF'),
    output: bi('Unlocked PDF', 'PDF sbloccato'),
    setup: bi('Enter the known password.', 'Inserisci la password conosciuta.'),
    outputName: 'unlocked.pdf',
    insightTitle: bi('This tool does not bypass an unknown password', 'Questo strumento non aggira una password sconosciuta'),
    insightBody: bi('The correct password is required to load the encrypted document before an unlocked copy can be created.', 'È necessaria la password corretta per aprire il documento cifrato prima di poter creare una copia sbloccata.')
  },

  {
    id: 'combine-images-and-pdf',
    mode: 'transform',
    title: bi('Mix PDFs and images into one document', 'Combina PDF e immagini in un unico documento'),
    intro: bi('Select PDF, JPG and PNG files and UtilityLake combines them in the selected order.', 'Seleziona file PDF, JPG e PNG e UtilityLake li combina nell’ordine scelto.'),
    input: bi('PDF / JPG / PNG files', 'File PDF / JPG / PNG'),
    process: bi('Copy + embed in order', 'Copia + incorpora in ordine'),
    output: bi('Combined PDF', 'PDF combinato'),
    outputName: 'combined.pdf',
    insightTitle: bi('PDF pages and images are handled differently', 'Pagine PDF e immagini vengono gestite in modo diverso'),
    insightBody: bi('Existing PDF pages are copied, while JPG and PNG files are embedded as new image-based pages inside the result.', 'Le pagine PDF esistenti vengono copiate, mentre JPG e PNG vengono incorporati come nuove pagine basate su immagine.')
  },

  {
    id: 'pdf-page-size-converter',
    mode: 'transform',
    title: bi('Fit PDF pages into a standard page size', 'Adatta le pagine PDF a un formato standard'),
    intro: bi('Choose A4, US Letter or A3 and UtilityLake scales each source page into the selected page size.', 'Scegli A4, US Letter o A3 e UtilityLake ridimensiona ogni pagina nel formato selezionato.'),
    input: bi('PDF', 'PDF'),
    process: bi('Scale into target size', 'Adatta al formato scelto'),
    output: bi('Resized PDF', 'PDF ridimensionato'),
    setup: bi('Choose A4, US Letter or A3.', 'Scegli A4, US Letter o A3.'),
    outputName: 'resized-pages.pdf',
    insightTitle: bi('Aspect ratio is preserved', 'Le proporzioni vengono mantenute'),
    insightBody: bi('Pages are scaled to fit inside the target size while preserving their proportions, so unused space can remain around the content.', 'Le pagine vengono adattate al formato mantenendo le proporzioni, quindi può rimanere spazio libero attorno al contenuto.')
  },

  {
    id: 'grayscale-pdf',
    mode: 'transform',
    title: bi('Rebuild a PDF using grayscale page images', 'Ricostruisci un PDF usando immagini delle pagine in scala di grigi'),
    intro: bi('UtilityLake renders every page, converts its pixels to grayscale and creates a new PDF.', 'UtilityLake renderizza ogni pagina, converte i pixel in scala di grigi e crea un nuovo PDF.'),
    input: bi('PDF', 'PDF'),
    process: bi('Render + grayscale', 'Render + scala di grigi'),
    output: bi('Grayscale PDF', 'PDF in scala di grigi'),
    setup: bi('Set render scale and JPEG quality.', 'Imposta scala di rendering e qualità JPEG.'),
    outputName: 'grayscale.pdf',
    insightTitle: bi('Grayscale conversion rasterizes the pages', 'La conversione in scala di grigi rasterizza le pagine'),
    insightBody: bi('Because the pages are rendered into images first, selectable text and vectors become part of the rasterized result.', 'Poiché le pagine vengono prima renderizzate come immagini, testo selezionabile e grafica vettoriale diventano parte del risultato rasterizzato.')
  },

  {
    id: 'pdf-text-extractor',
    mode: 'inspect',
    title: bi('Read the text layer from every PDF page', 'Leggi il livello di testo di ogni pagina PDF'),
    intro: bi('UtilityLake reads the text items available in each PDF page and joins them into an extracted text result.', 'UtilityLake legge gli elementi di testo disponibili in ogni pagina PDF e li unisce nel risultato estratto.'),
    input: bi('PDF', 'PDF'),
    process: bi('Read page text layer', 'Legge il livello di testo'),
    output: bi('Extracted text', 'Testo estratto'),
    insightTitle: bi('Text extraction is not OCR', 'L’estrazione del testo non è OCR'),
    insightBody: bi('Image-only scanned PDFs may contain little or no extractable text because this tool reads the existing PDF text layer rather than recognizing characters from pixels.', 'I PDF ottenuti da sole scansioni possono contenere poco o nessun testo estraibile perché lo strumento legge il livello di testo esistente e non riconosce caratteri dai pixel.')
  }

];

export const pdfEditorialBatch:
  Partial<Record<string, Partial<Record<LocaleId, ToolEditorial>>>> =
  Object.fromEntries(
    defs.map((def) => [def.id, fileEditorial(def)])
  );
