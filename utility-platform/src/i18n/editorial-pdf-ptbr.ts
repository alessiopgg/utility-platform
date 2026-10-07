import type { ToolEditorial } from './tool-editorial.ts';

type PdfPtDef = {
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

function build(def: PdfPtDef): ToolEditorial {
  const inspect = def.mode === 'inspect';

  return {
    family: inspect ? 'file-inspector' : 'file-transform',
    reviewed: false,

    kicker: 'COMO FUNCIONA',
    title: def.title,
    intro: def.intro,

    facts: [
      def.input,
      def.output,
      'Processamento local',
    ],

    visual: {
      kind: 'flow',
      nodes: [def.input, def.process, def.output],
      caption: `${def.input} → ${def.process} → ${def.output}`,
    },

    stepsTitle: 'Como usar',

    steps: inspect
      ? [
          `Selecione: ${def.input}.`,
          'Execute a ferramenta.',
          'Confira o resultado.',
        ]
      : [
          `Selecione: ${def.input}.`,
          'Ajuste as opções disponíveis, se necessário.',
          'Execute a ferramenta.',
          def.outputName
            ? `Baixe: ${def.outputName}.`
            : 'Baixe o resultado.',
        ],

    insightLabel: 'BOM SABER',
    insightTitle: def.insightTitle,
    insightBody: def.insightBody,

    privacyLabel: 'PRIVACIDADE POR DESIGN',
    privacyTitle: 'O arquivo permanece no seu navegador',
    privacyBody:
      'A operação é realizada localmente no navegador, sem necessidade de enviar o arquivo para os servidores da UtilityLake.',

    faqTitle: 'Detalhes úteis',

    faq: inspect
      ? [
          {
            question: 'O PDF original é modificado?',
            answer:
              'Não. A ferramenta analisa o documento e gera o resultado sem modificar o arquivo original.',
          },
          {
            question: 'Onde ocorre o processamento?',
            answer:
              'A análise é realizada localmente no seu navegador.',
          },
        ]
      : [
          {
            question: 'O arquivo original é modificado?',
            answer:
              'Não. A UtilityLake cria um novo resultado e mantém o arquivo original inalterado.',
          },
          ...(def.outputName
            ? [{
                question: 'Qual é o nome do arquivo gerado?',
                answer: def.outputName,
              }]
            : []),
        ],

    next: [],
  };
}

const defs: Record<string, PdfPtDef> = {

  'merge-pdf': {
    mode: 'transform',
    title: 'Um novo PDF criado a partir das páginas originais',
    intro: 'A UtilityLake cria um novo documento e copia, em sequência, as páginas dos PDFs selecionados. Os arquivos originais permanecem inalterados.',
    input: '2 ou mais arquivos PDF',
    process: 'Copiar páginas em ordem',
    output: 'PDF combinado',
    outputName: 'merged.pdf',
    insightTitle: 'Combinar PDFs não significa transformar as páginas em imagens',
    insightBody: 'A ferramenta copia as páginas PDF existentes para um novo documento. Ela não rasteriza intencionalmente cada página, portanto a combinação é diferente de uma compressão baseada em imagens.',
  },

  'split-pdf': {
    mode: 'transform',
    title: 'Um PDF de entrada e um arquivo para cada página',
    intro: 'A UtilityLake copia cada página para um PDF separado de uma única página.',
    input: 'PDF',
    process: 'Copiar cada página',
    output: 'PDFs separados',
    outputName: 'page-1.pdf, page-2.pdf, …',
    insightTitle: 'Dividir um PDF não transforma suas páginas em imagens',
    insightBody: 'Cada página é copiada como uma página PDF para um novo documento, por isso dividir é diferente de rasterizar o arquivo de origem.',
  },

  'rotate-pdf': {
    mode: 'transform',
    title: 'Gire todas as páginas sem reconstruí-las como imagens',
    intro: 'Escolha 90°, 180° ou 270° e a UtilityLake atualiza a rotação de todas as páginas.',
    input: 'PDF',
    process: 'Alterar rotação',
    output: 'PDF girado',
    outputName: 'rotated.pdf',
    insightTitle: 'A rotação é armazenada como uma propriedade da página',
    insightBody: 'A ferramenta altera a rotação das páginas PDF em vez de renderizar o documento como novas imagens.',
  },

  'delete-pdf-pages': {
    mode: 'transform',
    title: 'Remova apenas as páginas que você não precisa',
    intro: 'Informe páginas individuais ou intervalos e a UtilityLake as remove de uma nova cópia do PDF.',
    input: 'PDF + intervalo de páginas',
    process: 'Remover páginas',
    output: 'PDF atualizado',
    outputName: 'pages-deleted.pdf',
    insightTitle: 'A numeração muda depois que páginas são removidas',
    insightBody: 'Após a exclusão, as páginas restantes mantêm sua ordem, mas passam naturalmente a ocupar novas posições no documento resultante.',
  },

  'extract-pdf-pages': {
    mode: 'transform',
    title: 'Crie um novo PDF a partir das páginas selecionadas',
    intro: 'Escolha as páginas desejadas e a UtilityLake copia apenas essas páginas para um novo PDF.',
    input: 'PDF + intervalo de páginas',
    process: 'Copiar páginas selecionadas',
    output: 'PDF extraído',
    outputName: 'extracted-pages.pdf',
    insightTitle: 'A extração copia páginas PDF, não capturas de tela',
    insightBody: 'As páginas selecionadas são copiadas diretamente para o novo documento, sem serem convertidas intencionalmente em imagens.',
  },

  'reorder-pdf-pages': {
    mode: 'transform',
    title: 'Reconstrua o PDF com uma nova ordem de páginas',
    intro: 'Informe a sequência completa de páginas e a UtilityLake cria um novo documento seguindo essa ordem.',
    input: 'PDF + sequência de páginas',
    process: 'Reordenar páginas',
    output: 'PDF reordenado',
    outputName: 'reordered.pdf',
    insightTitle: 'Cada página deve aparecer exatamente uma vez',
    insightBody: 'A ferramenta valida a sequência para evitar que páginas sejam omitidas ou duplicadas acidentalmente durante a reordenação.',
  },

  'images-to-pdf': {
    mode: 'transform',
    title: 'Transforme imagens JPG e PNG em páginas PDF',
    intro: 'Cada imagem selecionada é incorporada como uma página dentro de um novo PDF.',
    input: 'Imagens JPG / PNG',
    process: 'Incorporar imagens',
    output: 'PDF',
    outputName: 'images.pdf',
    insightTitle: 'Cada imagem se torna sua própria página PDF',
    insightBody: 'As dimensões da página acompanham as dimensões da imagem incorporada, em vez de forçar todas as imagens para um único tamanho de papel.',
  },

  'jpg-to-pdf': {
    mode: 'transform',
    title: 'Combine imagens JPG em um PDF',
    intro: 'A UtilityLake incorpora cada JPG como uma página em um novo documento PDF.',
    input: 'Imagens JPG',
    process: 'Incorporar páginas JPG',
    output: 'PDF',
    outputName: 'jpg-to-pdf.pdf',
    insightTitle: 'O JPG é incorporado como imagem, não recriado como texto',
    insightBody: 'O conteúdo continua baseado em imagem dentro do PDF; o texto visível em um JPG não se torna texto PDF selecionável.',
  },

  'png-to-pdf': {
    mode: 'transform',
    title: 'Combine imagens PNG em um PDF',
    intro: 'A UtilityLake incorpora cada PNG como uma página em um novo documento PDF.',
    input: 'Imagens PNG',
    process: 'Incorporar páginas PNG',
    output: 'PDF',
    outputName: 'png-to-pdf.pdf',
    insightTitle: 'O conteúdo PNG continua baseado em imagem',
    insightBody: 'A criação do PDF não executa OCR, portanto o texto desenhado dentro de um PNG permanece parte da imagem.',
  },

  'pdf-to-jpg': {
    mode: 'transform',
    title: 'Renderize cada página PDF como uma imagem JPG',
    intro: 'A UtilityLake renderiza cada página PDF no navegador e cria uma imagem JPG separada para cada página.',
    input: 'PDF',
    process: 'Renderizar páginas',
    output: 'Imagens JPG',
    outputName: 'page-1.jpg, page-2.jpg, …',
    insightTitle: 'A renderização transforma o conteúdo do documento em pixels',
    insightBody: 'Texto selecionável e gráficos vetoriais passam a fazer parte da imagem renderizada quando exportados para JPG.',
  },

  'pdf-to-png': {
    mode: 'transform',
    title: 'Renderize cada página PDF como uma imagem PNG',
    intro: 'A UtilityLake renderiza cada página PDF e cria uma imagem PNG separada para cada página.',
    input: 'PDF',
    process: 'Renderizar páginas',
    output: 'Imagens PNG',
    outputName: 'page-1.png, page-2.png, …',
    insightTitle: 'PNG evita a compressão com perdas típica do JPEG',
    insightBody: 'PNG preserva os pixels renderizados sem artefatos de compressão JPEG, embora os arquivos resultantes possam ser maiores.',
  },

  'compress-pdf': {
    mode: 'transform',
    title: 'Um PDF menor, com um equilíbrio entre tamanho e qualidade',
    intro: 'A UtilityLake renderiza cada página e reconstrói o documento usando imagens JPEG. A qualidade e a escala de renderização permitem equilibrar tamanho do arquivo e detalhe visual.',
    input: 'PDF',
    process: 'Renderizar + JPEG',
    output: 'PDF comprimido',
    outputName: 'compressed.pdf',
    insightTitle: 'A compressão muda a forma como as páginas são armazenadas',
    insightBody: 'Texto e gráficos vetoriais do PDF original passam a fazer parte de imagens rasterizadas. Reduzir qualidade ou escala pode diminuir o tamanho do arquivo, mas também reduzir a nitidez.',
  },

  'add-pdf-page-numbers': {
    mode: 'transform',
    title: 'Adicione números na parte inferior de todas as páginas',
    intro: 'A UtilityLake desenha números sequenciais em todas as páginas do PDF.',
    input: 'PDF',
    process: 'Adicionar números de página',
    output: 'PDF numerado',
    outputName: 'numbered.pdf',
    insightTitle: 'Os números são adicionados como novo conteúdo PDF',
    insightBody: 'O conteúdo original permanece no lugar enquanto um número centralizado é desenhado próximo à parte inferior de cada página.',
  },

  'add-pdf-watermark': {
    mode: 'transform',
    title: 'Adicione uma marca d’água de texto a todas as páginas',
    intro: 'Digite o texto da marca d’água e controle seu tamanho e opacidade antes de aplicá-la a todas as páginas.',
    input: 'PDF + texto da marca d’água',
    process: 'Desenhar marca d’água',
    output: 'PDF com marca d’água',
    outputName: 'watermarked.pdf',
    insightTitle: 'A marca d’água é desenhada sobre cada página',
    insightBody: 'A ferramenta posiciona a marca d’água na diagonal com opacidade ajustável, tornando-a parte do conteúdo da página resultante.',
  },

  'remove-pdf-metadata': {
    mode: 'transform',
    title: 'Remova os metadados mais comuns de um documento PDF',
    intro: 'A UtilityLake limpa campos comuns como título, autor, assunto, palavras-chave, produtor e criador.',
    input: 'PDF',
    process: 'Limpar metadados comuns',
    output: 'PDF limpo',
    outputName: 'metadata-removed.pdf',
    insightTitle: 'Remover metadados não equivale a uma limpeza forense',
    insightBody: 'A ferramenta limpa campos comuns de metadados, mas isso não deve ser tratado como garantia de remoção de qualquer possível rastro oculto ou incorporado.',
  },

  'pdf-metadata-viewer': {
    mode: 'inspect',
    title: 'Veja os metadados comuns armazenados em um PDF',
    intro: 'A UtilityLake lê campos como título, autor, criador, produtor, datas e número de páginas.',
    input: 'PDF',
    process: 'Ler metadados',
    output: 'Relatório de metadados',
    insightTitle: 'Nem todo PDF contém todos os campos de metadados',
    insightBody: 'Valores ausentes são normais: os campos de metadados são opcionais e dependem de como o documento foi criado ou editado.',
  },

  'pdf-page-count': {
    mode: 'inspect',
    title: 'Conte instantaneamente as páginas de um PDF',
    intro: 'A UtilityLake abre a estrutura do PDF e informa o número de páginas existentes.',
    input: 'PDF',
    process: 'Contar páginas',
    output: 'Total de páginas',
    insightTitle: 'Contar páginas não exige renderizar cada uma delas',
    insightBody: 'A ferramenta lê a estrutura do documento PDF para obter a contagem de páginas, sem converter cada página em imagem.',
  },

  'pdf-size-analyzer': {
    mode: 'inspect',
    title: 'Entenda rapidamente o tamanho de um PDF',
    intro: 'A UtilityLake informa o tamanho total do arquivo, o número de páginas e a média de bytes por página.',
    input: 'PDF',
    process: 'Medir tamanho + páginas',
    output: 'Resumo de tamanho',
    insightTitle: 'O tamanho médio por página é uma estimativa',
    insightBody: 'A média é calculada dividindo o tamanho total do arquivo pela quantidade de páginas; ela não mede o espaço real usado por cada página individual.',
  },

  'crop-pdf': {
    mode: 'transform',
    title: 'Altere a área visível de todas as páginas PDF',
    intro: 'Defina as margens e a UtilityLake aplica uma nova caixa de recorte a cada página.',
    input: 'PDF + margens',
    process: 'Aplicar caixas de recorte',
    output: 'PDF recortado',
    outputName: 'cropped.pdf',
    insightTitle: 'Recortar não necessariamente remove conteúdo oculto',
    insightBody: 'Alterar a caixa de recorte controla qual parte da página é exibida, mas o conteúdo fora da área visível ainda pode existir dentro do PDF.',
  },

  'protect-pdf-with-password': {
    mode: 'transform',
    title: 'Criptografe um PDF com uma senha',
    intro: 'Digite uma senha e a UtilityLake cria uma cópia criptografada do documento.',
    input: 'PDF + senha',
    process: 'Criptografar PDF',
    output: 'PDF protegido',
    outputName: 'protected.pdf',
    insightTitle: 'A senha faz parte do processo de criptografia',
    insightBody: 'O documento é salvo como um PDF criptografado, e não apenas renomeado ou colocado dentro de outro contêiner.',
  },

  'unlock-pdf-with-known-password': {
    mode: 'transform',
    title: 'Crie uma cópia desbloqueada quando você conhece a senha',
    intro: 'Informe a senha correta e a UtilityLake abre o PDF criptografado e salva uma nova cópia sem criptografia.',
    input: 'PDF protegido + senha',
    process: 'Descriptografar PDF',
    output: 'PDF desbloqueado',
    outputName: 'unlocked.pdf',
    insightTitle: 'A ferramenta não ignora uma senha desconhecida',
    insightBody: 'É necessário informar a senha correta para abrir o documento criptografado antes de criar uma cópia desbloqueada.',
  },

  'combine-images-and-pdf': {
    mode: 'transform',
    title: 'Combine PDFs e imagens em um único documento',
    intro: 'Selecione arquivos PDF, JPG e PNG e a UtilityLake os combina na ordem escolhida.',
    input: 'Arquivos PDF / JPG / PNG',
    process: 'Copiar + incorporar em ordem',
    output: 'PDF combinado',
    outputName: 'combined.pdf',
    insightTitle: 'Páginas PDF e imagens são processadas de formas diferentes',
    insightBody: 'As páginas PDF existentes são copiadas, enquanto arquivos JPG e PNG são incorporados como novas páginas baseadas em imagem.',
  },

  'pdf-page-size-converter': {
    mode: 'transform',
    title: 'Ajuste páginas PDF a um tamanho padrão',
    intro: 'Escolha A4, US Letter ou A3 e a UtilityLake redimensiona cada página original para caber no formato selecionado.',
    input: 'PDF',
    process: 'Ajustar ao tamanho de destino',
    output: 'PDF redimensionado',
    outputName: 'resized-pages.pdf',
    insightTitle: 'A proporção da página é preservada',
    insightBody: 'As páginas são redimensionadas para caber no tamanho de destino mantendo suas proporções, portanto pode permanecer espaço livre ao redor do conteúdo.',
  },

  'grayscale-pdf': {
    mode: 'transform',
    title: 'Reconstrua um PDF usando imagens em escala de cinza',
    intro: 'A UtilityLake renderiza cada página, converte seus pixels para escala de cinza e cria um novo PDF.',
    input: 'PDF',
    process: 'Renderizar + escala de cinza',
    output: 'PDF em escala de cinza',
    outputName: 'grayscale.pdf',
    insightTitle: 'A conversão para escala de cinza rasteriza as páginas',
    insightBody: 'Como as páginas são primeiro renderizadas como imagens, texto selecionável e gráficos vetoriais passam a fazer parte do resultado rasterizado.',
  },

  'pdf-text-extractor': {
    mode: 'inspect',
    title: 'Leia a camada de texto de todas as páginas PDF',
    intro: 'A UtilityLake lê os elementos de texto disponíveis em cada página PDF e os reúne em um resultado de texto extraído.',
    input: 'PDF',
    process: 'Ler camada de texto',
    output: 'Texto extraído',
    insightTitle: 'Extração de texto não é OCR',
    insightBody: 'PDFs compostos apenas por imagens digitalizadas podem conter pouco ou nenhum texto extraível, pois a ferramenta lê a camada de texto existente em vez de reconhecer caracteres a partir dos pixels.',
  },
};

export const pdfEditorialPtBr: Partial<Record<string, ToolEditorial>> =
  Object.fromEntries(
    Object.entries(defs).map(([id, def]) => [id, build(def)])
  );
