import type { ToolEditorial } from './tool-editorial.ts';

type PdfEsDef = {
  mode: 'transform' | 'inspect';
  title: string;
  intro: string;
  input: string;
  process: string;
  output: string;
  outputName?: string;
  insightTitle: string;
  insightBody: string;
};

function build(def: PdfEsDef): ToolEditorial {
  const inspect = def.mode === 'inspect';

  return {
    family: inspect ? 'file-inspector' : 'file-transform',
    reviewed: false,

    kicker: 'CÓMO FUNCIONA',
    title: def.title,
    intro: def.intro,

    facts: [
      def.input,
      def.output,
      'Procesamiento local',
    ],

    visual: {
      kind: 'flow',
      nodes: [
        def.input,
        def.process,
        def.output,
      ],
      caption: `${def.input} → ${def.process} → ${def.output}`,
    },

    stepsTitle: 'Cómo usarlo',

    steps: inspect
      ? [
          `Selecciona: ${def.input}.`,
          'Ejecuta la herramienta.',
          'Consulta el resultado.',
        ]
      : [
          `Selecciona: ${def.input}.`,
          'Ajusta las opciones disponibles si es necesario.',
          'Ejecuta la herramienta.',
          def.outputName
            ? `Descarga: ${def.outputName}.`
            : 'Descarga el resultado.',
        ],

    insightLabel: 'CONVIENE SABERLO',
    insightTitle: def.insightTitle,
    insightBody: def.insightBody,

    privacyLabel: 'PRIVACIDAD POR DISEÑO',
    privacyTitle: inspect
      ? 'El archivo permanece en tu navegador'
      : 'El procesamiento se realiza en tu dispositivo',

    privacyBody:
      'La operación se realiza localmente en el navegador sin necesidad de subir el archivo a los servidores de UtilityLake.',

    faqTitle: 'Detalles útiles',

    faq: inspect
      ? [
          {
            question: '¿Se modifica el PDF original?',
            answer:
              'No. La herramienta analiza el documento y genera el resultado sin modificar el archivo original.',
          },
          {
            question: '¿Dónde se realiza el procesamiento?',
            answer:
              'El análisis se realiza localmente en tu navegador.',
          },
        ]
      : [
          {
            question: '¿Se modifica el archivo original?',
            answer:
              'No. UtilityLake crea un nuevo resultado y mantiene intacto el archivo original.',
          },
          ...(def.outputName
            ? [{
                question: '¿Cómo se llama el archivo generado?',
                answer: def.outputName,
              }]
            : []),
        ],

    next: [],
  };
}

const defs: Record<string, PdfEsDef> = {

  'merge-pdf': {
    mode: 'transform',
    title: 'Un nuevo PDF creado a partir de las páginas originales',
    intro: 'UtilityLake crea un nuevo documento y copia en orden las páginas de los PDF seleccionados. Los archivos originales permanecen sin cambios.',
    input: '2 o más archivos PDF',
    process: 'Copiar páginas en orden',
    output: 'PDF combinado',
    outputName: 'merged.pdf',
    insightTitle: 'Combinar PDF no significa convertir sus páginas en imágenes',
    insightBody: 'La herramienta copia las páginas PDF existentes dentro de un nuevo documento. No rasteriza intencionadamente cada página, por lo que combinar es una operación distinta de una compresión basada en imágenes.',
  },

  'split-pdf': {
    mode: 'transform',
    title: 'Un PDF de entrada y un archivo para cada página',
    intro: 'UtilityLake copia cada página del documento en un PDF independiente de una sola página.',
    input: 'PDF',
    process: 'Copiar cada página',
    output: 'PDF separados',
    outputName: 'page-1.pdf, page-2.pdf, …',
    insightTitle: 'Dividir un PDF no convierte sus páginas en imágenes',
    insightBody: 'Cada página se copia como página PDF dentro de un nuevo documento, por lo que dividir el archivo es diferente de rasterizar el original.',
  },

  'rotate-pdf': {
    mode: 'transform',
    title: 'Gira todas las páginas sin reconstruirlas como imágenes',
    intro: 'Elige 90°, 180° o 270° y UtilityLake actualiza la rotación de todas las páginas del documento.',
    input: 'PDF',
    process: 'Cambiar la rotación',
    output: 'PDF girado',
    outputName: 'rotated.pdf',
    insightTitle: 'La rotación se almacena como una propiedad de la página',
    insightBody: 'La herramienta modifica la rotación de las páginas PDF en lugar de renderizar el documento y crear nuevas imágenes.',
  },

  'delete-pdf-pages': {
    mode: 'transform',
    title: 'Elimina únicamente las páginas que no necesitas',
    intro: 'Indica páginas individuales o intervalos y UtilityLake las elimina de una nueva copia del PDF.',
    input: 'PDF + intervalo de páginas',
    process: 'Eliminar páginas',
    output: 'PDF actualizado',
    outputName: 'pages-deleted.pdf',
    insightTitle: 'La numeración cambia después de eliminar páginas',
    insightBody: 'Tras la eliminación, las páginas restantes conservan su orden, pero ocupan nuevas posiciones dentro del documento resultante.',
  },

  'extract-pdf-pages': {
    mode: 'transform',
    title: 'Crea un nuevo PDF a partir de las páginas seleccionadas',
    intro: 'Elige las páginas que necesitas y UtilityLake copia únicamente esas páginas en un nuevo PDF.',
    input: 'PDF + intervalo de páginas',
    process: 'Copiar páginas seleccionadas',
    output: 'PDF extraído',
    outputName: 'extracted-pages.pdf',
    insightTitle: 'La extracción copia páginas PDF, no capturas de pantalla',
    insightBody: 'Las páginas seleccionadas se copian directamente al nuevo documento sin convertirse intencionadamente en imágenes.',
  },

  'reorder-pdf-pages': {
    mode: 'transform',
    title: 'Reconstruye el PDF con un nuevo orden de páginas',
    intro: 'Indica la secuencia completa de páginas y UtilityLake crea un nuevo documento siguiendo exactamente ese orden.',
    input: 'PDF + secuencia de páginas',
    process: 'Reordenar páginas',
    output: 'PDF reordenado',
    outputName: 'reordered.pdf',
    insightTitle: 'Cada página debe aparecer exactamente una vez',
    insightBody: 'La herramienta valida la secuencia para evitar que alguna página se omita o se duplique accidentalmente durante la reordenación.',
  },

  'images-to-pdf': {
    mode: 'transform',
    title: 'Convierte imágenes JPG y PNG en páginas PDF',
    intro: 'Cada imagen seleccionada se incorpora como una página dentro de un nuevo documento PDF.',
    input: 'Imágenes JPG / PNG',
    process: 'Incorporar imágenes',
    output: 'PDF',
    outputName: 'images.pdf',
    insightTitle: 'Cada imagen se convierte en su propia página PDF',
    insightBody: 'Las dimensiones de la página siguen las dimensiones de la imagen incorporada en lugar de forzar todas las imágenes a un único tamaño de papel.',
  },

  'jpg-to-pdf': {
    mode: 'transform',
    title: 'Combina imágenes JPG en un PDF',
    intro: 'UtilityLake incorpora cada JPG como una página dentro de un nuevo documento PDF.',
    input: 'Imágenes JPG',
    process: 'Incorporar páginas JPG',
    output: 'PDF',
    outputName: 'jpg-to-pdf.pdf',
    insightTitle: 'El JPG se incorpora como imagen y no se reconstruye como texto',
    insightBody: 'El contenido sigue siendo una imagen dentro del PDF; el texto visible en un JPG no se convierte en texto PDF seleccionable.',
  },

  'png-to-pdf': {
    mode: 'transform',
    title: 'Combina imágenes PNG en un PDF',
    intro: 'UtilityLake incorpora cada PNG como una página dentro de un nuevo documento PDF.',
    input: 'Imágenes PNG',
    process: 'Incorporar páginas PNG',
    output: 'PDF',
    outputName: 'png-to-pdf.pdf',
    insightTitle: 'El contenido PNG sigue siendo una imagen',
    insightBody: 'La creación del PDF no realiza OCR, por lo que el texto dibujado dentro de un PNG continúa formando parte de la imagen.',
  },

  'pdf-to-jpg': {
    mode: 'transform',
    title: 'Renderiza cada página PDF como una imagen JPG',
    intro: 'UtilityLake renderiza cada página del PDF en el navegador y crea una imagen JPG independiente por página.',
    input: 'PDF',
    process: 'Renderizar páginas',
    output: 'Imágenes JPG',
    outputName: 'page-1.jpg, page-2.jpg, …',
    insightTitle: 'El renderizado convierte el contenido del documento en píxeles',
    insightBody: 'El texto seleccionable y los gráficos vectoriales pasan a formar parte de la imagen renderizada al exportar a JPG.',
  },

  'pdf-to-png': {
    mode: 'transform',
    title: 'Renderiza cada página PDF como una imagen PNG',
    intro: 'UtilityLake renderiza cada página del PDF y crea una imagen PNG independiente por página.',
    input: 'PDF',
    process: 'Renderizar páginas',
    output: 'Imágenes PNG',
    outputName: 'page-1.png, page-2.png, …',
    insightTitle: 'PNG evita la compresión con pérdida típica de JPEG',
    insightBody: 'PNG conserva los píxeles renderizados sin artefactos de compresión JPEG, aunque los archivos resultantes pueden ser más grandes.',
  },

  'compress-pdf': {
    mode: 'transform',
    title: 'Un PDF más ligero, con un compromiso entre tamaño y calidad',
    intro: 'UtilityLake renderiza cada página y reconstruye el documento usando imágenes JPEG. La calidad y la escala de renderizado permiten equilibrar tamaño de archivo y detalle visual.',
    input: 'PDF',
    process: 'Renderizar + JPEG',
    output: 'PDF comprimido',
    outputName: 'compressed.pdf',
    insightTitle: 'La compresión cambia la forma en que se almacenan las páginas',
    insightBody: 'El texto y los gráficos vectoriales del PDF original pasan a formar parte de imágenes rasterizadas. Reducir la calidad o la escala puede disminuir el tamaño del archivo, pero también reducir la nitidez.',
  },

  'add-pdf-page-numbers': {
    mode: 'transform',
    title: 'Añade números de página en la parte inferior de cada página',
    intro: 'UtilityLake dibuja números consecutivos sobre todas las páginas del documento PDF.',
    input: 'PDF',
    process: 'Añadir números de página',
    output: 'PDF numerado',
    outputName: 'numbered.pdf',
    insightTitle: 'Los números se añaden como nuevo contenido PDF',
    insightBody: 'El contenido original permanece en su sitio mientras se dibuja un número centrado cerca de la parte inferior de cada página.',
  },

  'add-pdf-watermark': {
    mode: 'transform',
    title: 'Añade una marca de agua de texto a todas las páginas',
    intro: 'Introduce el texto de la marca de agua y controla su tamaño y opacidad antes de aplicarla a cada página.',
    input: 'PDF + texto de marca de agua',
    process: 'Dibujar marca de agua',
    output: 'PDF con marca de agua',
    outputName: 'watermarked.pdf',
    insightTitle: 'La marca de agua se dibuja sobre cada página',
    insightBody: 'La herramienta coloca actualmente la marca de agua en diagonal con opacidad ajustable, convirtiéndola en parte del contenido de la página resultante.',
  },

  'remove-pdf-metadata': {
    mode: 'transform',
    title: 'Elimina los metadatos habituales de un documento PDF',
    intro: 'UtilityLake borra campos comunes como título, autor, asunto, palabras clave, productor y creador.',
    input: 'PDF',
    process: 'Eliminar metadatos comunes',
    output: 'PDF limpio',
    outputName: 'metadata-removed.pdf',
    insightTitle: 'Eliminar metadatos no equivale a una limpieza forense',
    insightBody: 'La herramienta elimina los campos de metadatos habituales, pero no debe considerarse una garantía de que desaparezca cualquier posible rastro oculto o incorporado.',
  },

  'pdf-metadata-viewer': {
    mode: 'inspect',
    title: 'Consulta los metadatos habituales almacenados en un PDF',
    intro: 'UtilityLake lee campos como título, autor, creador, productor, fechas y número de páginas.',
    input: 'PDF',
    process: 'Leer metadatos',
    output: 'Informe de metadatos',
    insightTitle: 'No todos los PDF contienen todos los campos de metadatos',
    insightBody: 'Es normal encontrar valores ausentes: los campos de metadatos son opcionales y dependen de cómo se creó o editó el documento.',
  },

  'pdf-page-count': {
    mode: 'inspect',
    title: 'Cuenta al instante las páginas de un PDF',
    intro: 'UtilityLake abre la estructura del PDF e indica cuántas páginas contiene.',
    input: 'PDF',
    process: 'Contar páginas',
    output: 'Número total de páginas',
    insightTitle: 'Contar páginas no requiere renderizarlas todas',
    insightBody: 'La herramienta lee la estructura del documento PDF para obtener el número de páginas sin convertir cada una de ellas en una imagen.',
  },

  'pdf-size-analyzer': {
    mode: 'inspect',
    title: 'Comprueba rápidamente el tamaño de un PDF',
    intro: 'UtilityLake muestra el tamaño total del archivo, el número de páginas y el promedio de bytes por página.',
    input: 'PDF',
    process: 'Medir tamaño + páginas',
    output: 'Resumen de tamaño',
    insightTitle: 'El tamaño medio por página es una estimación',
    insightBody: 'El promedio se calcula dividiendo el tamaño total del archivo entre el número de páginas; no mide el espacio real utilizado por cada página individual.',
  },

  'crop-pdf': {
    mode: 'transform',
    title: 'Cambia el área visible de todas las páginas PDF',
    intro: 'Define los márgenes y UtilityLake aplica un nuevo cuadro de recorte a cada página.',
    input: 'PDF + márgenes',
    process: 'Aplicar cuadros de recorte',
    output: 'PDF recortado',
    outputName: 'cropped.pdf',
    insightTitle: 'Recortar no elimina necesariamente el contenido oculto',
    insightBody: 'Modificar el cuadro de recorte controla qué parte de la página se muestra, pero el contenido situado fuera del área visible puede seguir existiendo dentro del PDF.',
  },

  'protect-pdf-with-password': {
    mode: 'transform',
    title: 'Cifra un PDF con una contraseña',
    intro: 'Introduce una contraseña y UtilityLake crea una copia cifrada del documento.',
    input: 'PDF + contraseña',
    process: 'Cifrar PDF',
    output: 'PDF protegido',
    outputName: 'protected.pdf',
    insightTitle: 'La contraseña forma parte del proceso de cifrado',
    insightBody: 'El documento se guarda como un PDF cifrado; no se limita a cambiar de nombre ni a colocarse dentro de otro contenedor.',
  },

  'unlock-pdf-with-known-password': {
    mode: 'transform',
    title: 'Crea una copia desbloqueada cuando conoces la contraseña',
    intro: 'Introduce la contraseña correcta y UtilityLake abre el PDF cifrado y guarda una nueva copia sin cifrar.',
    input: 'PDF protegido + contraseña',
    process: 'Descifrar PDF',
    output: 'PDF desbloqueado',
    outputName: 'unlocked.pdf',
    insightTitle: 'La herramienta no evita una contraseña desconocida',
    insightBody: 'Es necesario proporcionar la contraseña correcta para abrir el documento cifrado antes de crear una copia desbloqueada.',
  },

  'combine-images-and-pdf': {
    mode: 'transform',
    title: 'Combina PDF e imágenes en un único documento',
    intro: 'Selecciona archivos PDF, JPG y PNG y UtilityLake los combina respetando el orden elegido.',
    input: 'Archivos PDF / JPG / PNG',
    process: 'Copiar + incorporar en orden',
    output: 'PDF combinado',
    outputName: 'combined.pdf',
    insightTitle: 'Las páginas PDF y las imágenes se procesan de forma diferente',
    insightBody: 'Las páginas PDF existentes se copian, mientras que los archivos JPG y PNG se incorporan como nuevas páginas basadas en imágenes.',
  },

  'pdf-page-size-converter': {
    mode: 'transform',
    title: 'Adapta las páginas PDF a un tamaño de página estándar',
    intro: 'Elige A4, US Letter o A3 y UtilityLake escala cada página original para ajustarla al formato seleccionado.',
    input: 'PDF',
    process: 'Escalar al tamaño de destino',
    output: 'PDF redimensionado',
    outputName: 'resized-pages.pdf',
    insightTitle: 'Se conserva la relación de aspecto',
    insightBody: 'Las páginas se escalan para caber dentro del tamaño de destino manteniendo sus proporciones, por lo que puede quedar espacio libre alrededor del contenido.',
  },

  'grayscale-pdf': {
    mode: 'transform',
    title: 'Reconstruye un PDF usando imágenes de página en escala de grises',
    intro: 'UtilityLake renderiza cada página, convierte sus píxeles a escala de grises y crea un nuevo PDF.',
    input: 'PDF',
    process: 'Renderizar + escala de grises',
    output: 'PDF en escala de grises',
    outputName: 'grayscale.pdf',
    insightTitle: 'La conversión a escala de grises rasteriza las páginas',
    insightBody: 'Como las páginas se renderizan primero como imágenes, el texto seleccionable y los gráficos vectoriales pasan a formar parte del resultado rasterizado.',
  },

  'pdf-text-extractor': {
    mode: 'inspect',
    title: 'Lee la capa de texto de todas las páginas PDF',
    intro: 'UtilityLake lee los elementos de texto disponibles en cada página PDF y los combina en un resultado de texto extraído.',
    input: 'PDF',
    process: 'Leer la capa de texto',
    output: 'Texto extraído',
    insightTitle: 'Extraer texto no es lo mismo que hacer OCR',
    insightBody: 'Los PDF formados únicamente por imágenes escaneadas pueden contener poco o ningún texto extraíble, porque la herramienta lee la capa de texto existente en lugar de reconocer caracteres a partir de píxeles.',
  },
};

export const pdfEditorialEs: Partial<Record<string, ToolEditorial>> =
  Object.fromEntries(
    Object.entries(defs).map(([id, def]) => [id, build(def)])
  );
