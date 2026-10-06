import type { ToolEditorial } from './tool-editorial.ts';

export type Bi = {
  en: string;
  it: string;
};

export const bi = (en: string, it: string): Bi => ({ en, it });

export type FileEditorialDefinition = {
  id: string;
  mode: 'transform' | 'inspect';

  title: Bi;
  intro: Bi;

  input: Bi;
  process: Bi;
  output: Bi;

  setup?: Bi;
  outputName?: string;

  insightTitle: Bi;
  insightBody: Bi;
};

const txt = (value: Bi, locale: 'en' | 'it') => value[locale];

function build(
  def: FileEditorialDefinition,
  locale: 'en' | 'it'
): ToolEditorial {
  const it = locale === 'it';

  const steps = def.mode === 'inspect'
    ? [
        it ? `Seleziona: ${txt(def.input, locale)}.` : `Choose: ${txt(def.input, locale)}.`,
        it ? 'Avvia lo strumento.' : 'Run the tool.',
        it ? 'Consulta il risultato.' : 'Review the result.'
      ]
    : [
        it ? `Seleziona: ${txt(def.input, locale)}.` : `Choose: ${txt(def.input, locale)}.`,
        ...(def.setup ? [txt(def.setup, locale)] : []),
        it ? 'Avvia lo strumento.' : 'Run the tool.',
        def.outputName
          ? (it ? `Scarica: ${def.outputName}.` : `Download: ${def.outputName}.`)
          : (it ? 'Scarica il risultato.' : 'Download the result.')
      ];

  const faq = def.mode === 'inspect'
    ? [
        {
          question: it ? 'Il PDF originale viene modificato?' : 'Is the original PDF modified?',
          answer: it
            ? 'No. Lo strumento legge il documento per ricavare il risultato senza modificare il file sorgente.'
            : 'No. The tool reads the document to produce the result without modifying the source file.'
        },
        {
          question: it ? 'Dove avviene l’elaborazione?' : 'Where does the processing happen?',
          answer: it
            ? 'L’analisi viene eseguita localmente nel browser.'
            : 'The analysis runs locally in your browser.'
        }
      ]
    : [
        {
          question: it ? 'Il file originale viene modificato?' : 'Is the original file modified?',
          answer: it
            ? 'No. UtilityLake crea un nuovo risultato e lascia invariato il file originale.'
            : 'No. UtilityLake creates a new result and leaves the original file unchanged.'
        },
        ...(def.outputName ? [{
          question: it ? 'Come si chiama il file generato?' : 'What is the generated file called?',
          answer: def.outputName
        }] : [])
      ];

  return {
    family: def.mode === 'inspect' ? 'file-inspector' : 'file-transform',
    reviewed: false,

    kicker: it ? 'COME FUNZIONA' : 'HOW IT WORKS',
    title: txt(def.title, locale),
    intro: txt(def.intro, locale),

    facts: [
      txt(def.input, locale),
      txt(def.output, locale),
      it ? 'Elaborazione locale' : 'Runs locally'
    ],

    visual: {
      kind: 'flow',
      nodes: [
        txt(def.input, locale),
        txt(def.process, locale),
        txt(def.output, locale)
      ],
      caption: it
        ? `${txt(def.input, locale)} → ${txt(def.process, locale)} → ${txt(def.output, locale)}`
        : `${txt(def.input, locale)} → ${txt(def.process, locale)} → ${txt(def.output, locale)}`
    },

    stepsTitle: it ? 'Come usarlo' : 'How to use it',
    steps,

    insightLabel: it ? 'DA SAPERE' : 'GOOD TO KNOW',
    insightTitle: txt(def.insightTitle, locale),
    insightBody: txt(def.insightBody, locale),

    privacyLabel: it ? 'PRIVACY BY DESIGN' : 'PRIVATE BY DESIGN',
    privacyTitle: it ? 'Il file resta nel browser' : 'Your file stays in the browser',
    privacyBody: it
      ? 'L’operazione viene eseguita localmente sul dispositivo senza dover caricare il file sui server di UtilityLake.'
      : 'The operation runs locally on your device without requiring the file to be uploaded to UtilityLake.',

    faqTitle: it ? 'Dettagli utili' : 'Useful details',
    faq,

    next: []
  };
}

export function fileEditorial(def: FileEditorialDefinition) {
  return {
    en: build(def, 'en'),
    it: build(def, 'it')
  };
}


export type DeveloperEditorialDefinition = {
  id: string;
  title: Bi;
  intro: Bi;
  input: Bi;
  process: Bi;
  output: Bi;
  insightTitle: Bi;
  insightBody: Bi;
};

export function developerEditorial(def: DeveloperEditorialDefinition) {
  const build = (locale: 'en' | 'it'): ToolEditorial => {
    const it = locale === 'it';

    return {
      family: 'formatter',
      reviewed: false,

      kicker: it ? 'DIETRO IL TOOL' : 'BEHIND THE TOOL',
      title: txt(def.title, locale),
      intro: txt(def.intro, locale),

      facts: [
        txt(def.input, locale),
        txt(def.output, locale),
        it ? 'Elaborazione locale' : 'Runs locally'
      ],

      visual: {
        kind: 'flow',
        nodes: [
          txt(def.input, locale),
          txt(def.process, locale),
          txt(def.output, locale)
        ],
        caption: `${txt(def.input, locale)} → ${txt(def.process, locale)} → ${txt(def.output, locale)}`
      },

      insightLabel: it ? 'DA SAPERE' : 'GOOD TO KNOW',
      insightTitle: txt(def.insightTitle, locale),
      insightBody: txt(def.insightBody, locale),

      privacyLabel: it ? 'PRIVACY BY DESIGN' : 'PRIVATE BY DESIGN',
      privacyTitle: it ? 'L’input resta nel browser' : 'Your input stays in the browser',
      privacyBody: it
        ? 'L’elaborazione viene eseguita direttamente nella pagina senza dover inviare il contenuto a UtilityLake.'
        : 'Processing runs directly in the page without requiring the content to be sent to UtilityLake.',

      faqTitle: it ? 'Dettagli utili' : 'Useful details',
      faq: [
        {
          question: it ? 'L’input viene modificato?' : 'Is the original input modified?',
          answer: it
            ? 'No. Lo strumento genera un nuovo risultato lasciando invariato il contenuto inserito.'
            : 'No. The tool produces a new result while leaving the entered source unchanged.'
        },
        {
          question: it ? 'L’elaborazione avviene localmente?' : 'Does processing happen locally?',
          answer: it
            ? 'Sì. Il contenuto viene elaborato nel browser.'
            : 'Yes. The content is processed in your browser.'
        }
      ],

      next: []
    };
  };

  return {
    en: build('en'),
    it: build('it')
  };
}


export type CalculatorEditorialDefinition = {
  id: string;

  title: Bi;
  intro: Bi;

  formula: string;
  example: Bi;

  insightTitle: Bi;
  insightBody: Bi;
};

export function calculatorEditorial(def: CalculatorEditorialDefinition) {
  const build = (locale: 'en' | 'it'): ToolEditorial => {
    const it = locale === 'it';

    return {
      family: 'calculator',
      reviewed: false,

      kicker: it ? 'COME SI CALCOLA' : 'HOW IT IS CALCULATED',
      title: txt(def.title, locale),
      intro: txt(def.intro, locale),

      facts: [
        it ? 'Calcolo immediato' : 'Instant result',
        it ? 'Formula trasparente' : 'Clear formula',
        it ? 'Calcolo locale' : 'Runs locally'
      ],

      visual: {
        kind: 'flow',
        nodes: [
          it ? 'Valori' : 'Values',
          def.formula,
          it ? 'Risultato' : 'Result'
        ],
        caption: txt(def.example, locale)
      },

      insightLabel: it ? 'DA SAPERE' : 'GOOD TO KNOW',
      insightTitle: txt(def.insightTitle, locale),
      insightBody: txt(def.insightBody, locale),

      faqTitle: it ? 'In breve' : 'In short',

      faq: [
        {
          question: it ? 'Quale logica usa il calcolatore?' : 'What logic does the calculator use?',
          answer: def.formula
        },
        {
          question: it ? 'Un esempio?' : 'Example?',
          answer: txt(def.example, locale)
        }
      ],

      next: []
    };
  };

  return {
    en: build('en'),
    it: build('it')
  };
}


export type SimpleEditorialDefinition = {
  id: string;
  family: 'text' | 'converter' | 'generator' | 'formatter';

  title: Bi;
  intro: Bi;

  input: Bi;
  process: Bi;
  output: Bi;

  example: Bi;

  insightTitle: Bi;
  insightBody: Bi;

  privacy?: boolean;
};

export function simpleEditorial(def: SimpleEditorialDefinition) {
  const build = (locale: 'en' | 'it'): ToolEditorial => {
    const it = locale === 'it';

    const base: ToolEditorial = {
      family: def.family,
      reviewed: false,

      kicker:
        def.family === 'converter'
          ? (it ? 'LOGICA DI CONVERSIONE' : 'CONVERSION LOGIC')
          : def.family === 'generator'
            ? (it ? 'COME VIENE GENERATO' : 'HOW IT IS GENERATED')
            : (it ? 'COME FUNZIONA' : 'HOW IT WORKS'),

      title: txt(def.title, locale),
      intro: txt(def.intro, locale),

      facts: [
        txt(def.input, locale),
        txt(def.output, locale),
        it ? 'Elaborazione locale' : 'Runs locally'
      ],

      visual: {
        kind: 'flow',
        nodes: [
          txt(def.input, locale),
          txt(def.process, locale),
          txt(def.output, locale)
        ],
        caption: txt(def.example, locale)
      },

      insightLabel: it ? 'DA SAPERE' : 'GOOD TO KNOW',
      insightTitle: txt(def.insightTitle, locale),
      insightBody: txt(def.insightBody, locale),

      faqTitle: it ? 'In breve' : 'In short',

      faq: [
        {
          question: it ? 'Cosa fa esattamente?' : 'What exactly does it do?',
          answer: txt(def.intro, locale)
        },
        {
          question: it ? 'Un esempio?' : 'Example?',
          answer: txt(def.example, locale)
        }
      ],

      next: []
    };

    if (def.privacy !== false) {
      base.privacyLabel = it ? 'PRIVACY BY DESIGN' : 'PRIVATE BY DESIGN';
      base.privacyTitle = it
        ? 'Il contenuto resta nel browser'
        : 'Your content stays in the browser';
      base.privacyBody = it
        ? 'L’elaborazione viene eseguita localmente nella pagina senza dover inviare il contenuto a UtilityLake.'
        : 'Processing runs locally in the page without requiring the content to be sent to UtilityLake.';
    }

    return base;
  };

  return {
    en: build('en'),
    it: build('it')
  };
}
