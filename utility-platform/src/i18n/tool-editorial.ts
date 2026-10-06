import type { LocaleId } from '../core/types.ts';
import { pdfEditorialBatch } from './editorial-pdf-batch.ts';
import { structuredEditorialBatch } from './editorial-structured-batch.ts';
import { calculatorMathEditorialBatch } from './editorial-calculator-math-batch.ts';
import { calculatorBusinessEditorialBatch } from './editorial-calculator-business-batch.ts';
import { calculatorConstructionEditorialBatch } from './editorial-calculator-construction-batch.ts';
import { calculatorPhotoEditorialBatch } from './editorial-calculator-photo-batch.ts';
import { textEditorialBatch } from './editorial-text-batch.ts';
import { encodingEditorialBatch } from './editorial-encoding-batch.ts';
import { unitsEditorialBatch } from './editorial-units-batch.ts';
import { randomEditorialBatch } from './editorial-random-batch.ts';
import { colorEditorialBatch } from './editorial-color-batch.ts';
import { webEditorialBatch } from './editorial-web-batch.ts';
import { imageEditorialBatch } from './editorial-image-batch.ts';
import { qrEditorialBatch } from './editorial-qr-batch.ts';
import { mediaEditorialBatch } from './editorial-media-batch.ts';
import { makerEditorialBatch } from './editorial-maker-batch.ts';

type MergeVisual = {
  kind: 'merge-pdf';
  sourceA: string;
  sourceB: string;
  result: string;
  caption: string;
};

type CompressVisual = {
  kind: 'compress-pdf';
  input: string;
  process: string;
  output: string;
  caption: string;
};

type PercentageVisual = {
  kind: 'percentage';
  percentage: string;
  value: string;
  result: string;
  formula: string;
  caption: string;
};

type FlowVisual = {
  kind: 'flow';
  nodes: string[];
  caption: string;
};

export type ToolEditorial = {
  family?: 'file-transform' | 'file-inspector' | 'calculator' | 'converter' | 'formatter' | 'text' | 'generator' | 'media';
  reviewed?: boolean;
  kicker: string;
  title: string;
  intro: string;

  facts: string[];

  visual?: MergeVisual | CompressVisual | PercentageVisual | FlowVisual;

  stepsTitle?: string;
  steps?: string[];

  insightLabel?: string;
  insightTitle?: string;
  insightBody?: string;

  privacyLabel?: string;
  privacyTitle?: string;
  privacyBody?: string;

  faqTitle?: string;
  faq?: Array<{
    question: string;
    answer: string;
  }>;

  nextTitle?: string;
  next?: Array<{
    toolId: string;
    description: string;
  }>;
};

const content: Partial<Record<string, Partial<Record<LocaleId, ToolEditorial>>>> = {
  ...pdfEditorialBatch,
  ...structuredEditorialBatch,
  ...calculatorMathEditorialBatch,
  ...calculatorBusinessEditorialBatch,
  ...calculatorConstructionEditorialBatch,
  ...calculatorPhotoEditorialBatch,
  ...textEditorialBatch,
  ...encodingEditorialBatch,
  ...unitsEditorialBatch,
  ...randomEditorialBatch,
  ...colorEditorialBatch,
  ...webEditorialBatch,
  ...imageEditorialBatch,
  ...qrEditorialBatch,
  ...mediaEditorialBatch,
  ...makerEditorialBatch,
  'merge-pdf': {
    en: {
      kicker: 'HOW IT WORKS',
      title: 'A new PDF, built from the original pages',
      intro: 'UtilityLake creates a new document and copies the pages from each selected PDF into it in sequence. The original files remain unchanged.',

      facts: [
        '2+ PDF files',
        'Keeps file order',
        'Output: merged.pdf',
        'Runs locally'
      ],

      visual: {
        kind: 'merge-pdf',
        sourceA: 'PDF A',
        sourceB: 'PDF B',
        result: 'Merged PDF',
        caption: 'Pages are copied in sequence into a new document.'
      },

      stepsTitle: 'Merge PDFs in four steps',
      steps: [
        'Choose at least two PDF files.',
        'Check the order of the selected documents.',
        'Run Merge PDF.',
        'Download the new merged.pdf file.'
      ],

      insightLabel: 'GOOD TO KNOW',
      insightTitle: 'Merging is not the same as turning pages into images',
      insightBody: 'This tool copies the existing PDF pages into a new document. It does not intentionally rasterize every page into a screenshot, so the merge operation itself is different from image-based PDF compression.',

      privacyLabel: 'PRIVATE BY DESIGN',
      privacyTitle: 'Your PDFs stay in your browser',
      privacyBody: 'The merge operation runs locally on your device. Your selected PDF files do not need to be uploaded to UtilityLake in order to create the final document.',

      faqTitle: 'A few useful answers',
      faq: [
        {
          question: 'Does merging modify my original PDFs?',
          answer: 'No. UtilityLake creates a separate PDF and leaves the original files unchanged.'
        },
        {
          question: 'Does the order of the files matter?',
          answer: 'Yes. All pages from the first selected PDF are inserted first, followed by the second PDF, the third and so on.'
        },
        {
          question: 'Is there a practical file-size limit?',
          answer: 'Because processing happens in the browser, very large documents depend on the memory and resources available on your device and browser.'
        }
      ],

      nextTitle: 'What do you want to do next?',
      next: [
        {
          toolId: 'compress-pdf',
          description: 'Reduce the size of the merged document.'
        },
        {
          toolId: 'reorder-pdf-pages',
          description: 'Change the order of individual pages.'
        },
        {
          toolId: 'delete-pdf-pages',
          description: 'Remove pages you no longer need.'
        }
      ]
    },

    it: {
      kicker: 'COME FUNZIONA',
      title: 'Un nuovo PDF costruito dalle pagine originali',
      intro: 'UtilityLake crea un nuovo documento e copia al suo interno, in sequenza, le pagine dei PDF selezionati. I file originali rimangono invariati.',

      facts: [
        'Almeno 2 PDF',
        'Mantiene l’ordine',
        'Output: merged.pdf',
        'Elaborazione locale'
      ],

      visual: {
        kind: 'merge-pdf',
        sourceA: 'PDF A',
        sourceB: 'PDF B',
        result: 'PDF finale',
        caption: 'Le pagine vengono copiate in sequenza in un nuovo documento.'
      },

      stepsTitle: 'Unisci i PDF in quattro passaggi',
      steps: [
        'Seleziona almeno due file PDF.',
        'Controlla l’ordine dei documenti.',
        'Avvia Unisci PDF.',
        'Scarica il nuovo file merged.pdf.'
      ],

      insightLabel: 'UNA CURIOSITÀ UTILE',
      insightTitle: 'Unire PDF non significa trasformare le pagine in immagini',
      insightBody: 'Lo strumento copia le pagine PDF esistenti all’interno di un nuovo documento. Non rasterizza intenzionalmente ogni pagina come uno screenshot: per questo l’unione è un’operazione diversa dalla compressione basata su immagini.',

      privacyLabel: 'PRIVACY BY DESIGN',
      privacyTitle: 'I tuoi PDF restano nel browser',
      privacyBody: 'L’unione viene eseguita localmente sul dispositivo. I PDF selezionati non devono essere caricati sui server di UtilityLake per creare il documento finale.',

      faqTitle: 'Qualche risposta utile',
      faq: [
        {
          question: 'I PDF originali vengono modificati?',
          answer: 'No. UtilityLake crea un nuovo documento separato e lascia invariati i file originali.'
        },
        {
          question: 'L’ordine dei file è importante?',
          answer: 'Sì. Vengono inserite prima tutte le pagine del primo PDF, poi quelle del secondo, del terzo e così via.'
        },
        {
          question: 'Esiste un limite pratico alla dimensione dei file?',
          answer: 'Poiché l’elaborazione avviene nel browser, documenti molto grandi dipendono dalla memoria e dalle risorse disponibili sul dispositivo e nel browser.'
        }
      ],

      nextTitle: 'Cosa vuoi fare adesso?',
      next: [
        {
          toolId: 'compress-pdf',
          description: 'Riduci le dimensioni del documento appena creato.'
        },
        {
          toolId: 'reorder-pdf-pages',
          description: 'Cambia l’ordine delle singole pagine.'
        },
        {
          toolId: 'delete-pdf-pages',
          description: 'Rimuovi le pagine che non ti servono.'
        }
      ]
    }
  },

  'compress-pdf': {
    en: {
      kicker: 'HOW IT WORKS',
      title: 'A smaller PDF, with a trade-off',
      intro: 'UtilityLake renders each page and rebuilds the document using JPEG images. Quality and render scale let you choose the balance between file size and visual detail.',

      facts: [
        'JPEG-based',
        'Adjustable quality',
        'Adjustable scale',
        'Runs locally'
      ],

      visual: {
        kind: 'compress-pdf',
        input: 'Original PDF',
        process: 'Render + JPEG',
        output: 'Compressed PDF',
        caption: 'Each page is rendered and encoded again before the new PDF is created.'
      },

      stepsTitle: 'Compress a PDF in four steps',
      steps: [
        'Choose the PDF you want to reduce.',
        'Set JPEG quality for the page images.',
        'Adjust render scale if needed.',
        'Run the tool and download compressed.pdf.'
      ],

      insightLabel: 'GOOD TO KNOW',
      insightTitle: 'Compression changes how the pages are stored',
      insightBody: 'Text and vector graphics in the original PDF become part of rasterized page images. Lower quality or scale can reduce file size, but may also make fine text and graphics less sharp.',

      privacyLabel: 'PRIVATE BY DESIGN',
      privacyTitle: 'Compression happens on your device',
      privacyBody: 'Rendering and PDF generation happen in the browser, so the selected document does not need to be uploaded to UtilityLake.',

      faqTitle: 'Before you compress',
      faq: [
        {
          question: 'Will the compressed PDF always be smaller?',
          answer: 'Not necessarily. A PDF that is already highly optimized may already be very efficient before rasterization.'
        },
        {
          question: 'What does JPEG quality change?',
          answer: 'Lower quality usually reduces file size more, but can introduce visible compression artifacts.'
        },
        {
          question: 'What does render scale change?',
          answer: 'It changes the resolution used when each page is turned into an image. Lower scale means fewer pixels and potentially a smaller file.'
        }
      ],

      nextTitle: 'What do you want to do next?',
      next: [
        {
          toolId: 'merge-pdf',
          description: 'Combine the compressed document with other PDFs.'
        },
        {
          toolId: 'pdf-size-analyzer',
          description: 'Inspect file size and average size per page.'
        },
        {
          toolId: 'split-pdf',
          description: 'Separate the document into individual pages.'
        }
      ]
    },

    it: {
      kicker: 'COME FUNZIONA',
      title: 'Un PDF più leggero, con un compromesso',
      intro: 'UtilityLake renderizza ogni pagina e ricostruisce il documento usando immagini JPEG. Qualità e scala permettono di scegliere il compromesso tra peso del file e dettaglio visivo.',

      facts: [
        'Compressione JPEG',
        'Qualità regolabile',
        'Scala regolabile',
        'Elaborazione locale'
      ],

      visual: {
        kind: 'compress-pdf',
        input: 'PDF originale',
        process: 'Render + JPEG',
        output: 'PDF compresso',
        caption: 'Ogni pagina viene renderizzata e ricodificata prima di creare il nuovo PDF.'
      },

      stepsTitle: 'Comprimi un PDF in quattro passaggi',
      steps: [
        'Seleziona il PDF che vuoi ridurre.',
        'Imposta la qualità JPEG.',
        'Regola la scala di rendering se necessario.',
        'Avvia il tool e scarica compressed.pdf.'
      ],

      insightLabel: 'DA SAPERE',
      insightTitle: 'La compressione cambia come vengono memorizzate le pagine',
      insightBody: 'Testo e grafica vettoriale del PDF originale diventano parte delle immagini rasterizzate. Ridurre qualità o scala può diminuire il peso, ma anche rendere meno nitidi testi e dettagli.',

      privacyLabel: 'PRIVACY BY DESIGN',
      privacyTitle: 'La compressione avviene sul dispositivo',
      privacyBody: 'Il rendering e la creazione del nuovo PDF vengono eseguiti nel browser, senza dover caricare il documento sui server di UtilityLake.',

      faqTitle: 'Prima di comprimere',
      faq: [
        {
          question: 'Il PDF compresso sarà sempre più piccolo?',
          answer: 'Non necessariamente. Un PDF già molto ottimizzato può essere già efficiente prima della rasterizzazione.'
        },
        {
          question: 'Cosa cambia con la qualità JPEG?',
          answer: 'Valori più bassi tendono a ridurre maggiormente il peso, ma possono introdurre artefatti visibili.'
        },
        {
          question: 'Cosa cambia con la scala di rendering?',
          answer: 'Determina la risoluzione usata per trasformare ogni pagina in immagine. Una scala più bassa utilizza meno pixel.'
        }
      ],

      nextTitle: 'Cosa vuoi fare adesso?',
      next: [
        {
          toolId: 'merge-pdf',
          description: 'Combina il PDF compresso con altri documenti.'
        },
        {
          toolId: 'pdf-size-analyzer',
          description: 'Analizza dimensione totale e peso medio per pagina.'
        },
        {
          toolId: 'split-pdf',
          description: 'Separa il documento in PDF individuali.'
        }
      ]
    }
  },

  'percentage-calculator': {
    en: {
      kicker: 'THE FORMULA',
      title: 'A percentage is a fraction of one hundred',
      intro: 'Enter a percentage and a value. UtilityLake divides the percentage by 100 and multiplies it by the value to calculate the corresponding part.',

      facts: [
        '2 inputs',
        'Instant result',
        'Simple formula',
        'Runs locally'
      ],

      visual: {
        kind: 'percentage',
        percentage: '20%',
        value: '100',
        result: '20',
        formula: '20 ÷ 100 × 100 = 20',
        caption: 'Example: 20% of 100 is 20.'
      },

      stepsTitle: 'Calculate a percentage in four steps',
      steps: [
        'Enter the percentage.',
        'Enter the reference value.',
        'Run the calculator.',
        'Read the resulting part of the value.'
      ],

      insightLabel: 'DID YOU KNOW?',
      insightTitle: 'Percent literally means “per hundred”',
      insightBody: '20% is another way of writing 20/100, or 0.20. That is why finding 20% of a value is the same as multiplying that value by 0.20.',

      privacyLabel: 'LOCAL CALCULATION',
      privacyTitle: 'The calculation happens in your browser',
      privacyBody: 'The numbers you enter are processed directly on the page. No account or server-side calculation is required.',

      faqTitle: 'Useful percentage basics',
      faq: [
        {
          question: 'What formula does this calculator use?',
          answer: 'Result = percentage ÷ 100 × value.'
        },
        {
          question: 'What is 15% of 200?',
          answer: '15 ÷ 100 × 200 = 30.'
        },
        {
          question: 'Is this the same as percentage increase?',
          answer: 'No. This calculator finds a percentage of a value. Percentage increase compares an original value with a new value.'
        }
      ],

      nextTitle: 'Need another percentage calculation?',
      next: [
        {
          toolId: 'percentage-increase-calculator',
          description: 'Calculate how much a value increased.'
        },
        {
          toolId: 'percentage-decrease-calculator',
          description: 'Calculate how much a value decreased.'
        },
        {
          toolId: 'reverse-percentage-calculator',
          description: 'Find the whole from a known part and percentage.'
        }
      ]
    },

    it: {
      kicker: 'LA FORMULA',
      title: 'Una percentuale è una frazione di cento',
      intro: 'Inserisci una percentuale e un valore. UtilityLake divide la percentuale per 100 e la moltiplica per il valore per calcolare la parte corrispondente.',

      facts: [
        '2 valori',
        'Risultato immediato',
        'Formula semplice',
        'Calcolo locale'
      ],

      visual: {
        kind: 'percentage',
        percentage: '20%',
        value: '100',
        result: '20',
        formula: '20 ÷ 100 × 100 = 20',
        caption: 'Esempio: il 20% di 100 è 20.'
      },

      stepsTitle: 'Calcola una percentuale in quattro passaggi',
      steps: [
        'Inserisci la percentuale.',
        'Inserisci il valore di riferimento.',
        'Avvia il calcolo.',
        'Leggi la parte del valore ottenuta.'
      ],

      insightLabel: 'LO SAPEVI?',
      insightTitle: 'Percentuale significa letteralmente “per cento”',
      insightBody: '20% equivale a 20/100, cioè 0,20. Per questo trovare il 20% di un valore significa moltiplicarlo per 0,20.',

      privacyLabel: 'CALCOLO LOCALE',
      privacyTitle: 'Il calcolo avviene nel browser',
      privacyBody: 'I numeri inseriti vengono elaborati direttamente nella pagina. Non serve un account né un calcolo eseguito sul server.',

      faqTitle: 'Qualche concetto utile',
      faq: [
        {
          question: 'Quale formula utilizza il calcolatore?',
          answer: 'Risultato = percentuale ÷ 100 × valore.'
        },
        {
          question: 'Quanto è il 15% di 200?',
          answer: '15 ÷ 100 × 200 = 30.'
        },
        {
          question: 'È la stessa cosa dell’aumento percentuale?',
          answer: 'No. Questo calcolatore trova una percentuale di un valore. L’aumento percentuale confronta invece un valore iniziale con un nuovo valore.'
        }
      ],

      nextTitle: 'Ti serve un altro calcolo percentuale?',
      next: [
        {
          toolId: 'percentage-increase-calculator',
          description: 'Calcola di quanto è aumentato un valore.'
        },
        {
          toolId: 'percentage-decrease-calculator',
          description: 'Calcola di quanto è diminuito un valore.'
        },
        {
          toolId: 'reverse-percentage-calculator',
          description: 'Ricava il totale conoscendo una parte e la percentuale.'
        }
      ]
    }
  }
};

export function toolEditorial(locale: LocaleId, toolId: string): ToolEditorial | null {
  return content[toolId]?.[locale] ?? null;
}


export const EDITORIAL_REVIEWED_TOOL_IDS = new Set<string>([
  'merge-pdf',
  'compress-pdf',
  'split-pdf',
  'rotate-pdf',
  'reorder-pdf-pages',
  'pdf-text-extractor',
  'percentage-calculator',
  'margin-calculator',
  'compound-interest-calculator',
  'loan-payment-calculator',
  'concrete-calculator',
  'json-formatter',
  'json-validator',
  'csv-to-json',
  'regex-tester',
  'unix-timestamp-converter',
  'compress-image',
  'resize-image',
  'crop-image',
  'remove-exif-metadata',
  'url-qr-generator',
  'qr-reader-from-image',
  'color-contrast-checker',
  'temperature-converter',
  'word-counter',
]);

export function isEditorialReviewed(toolId: string): boolean {
  return EDITORIAL_REVIEWED_TOOL_IDS.has(toolId);
}
