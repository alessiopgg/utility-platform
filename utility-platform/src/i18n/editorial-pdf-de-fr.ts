import type { ToolEditorial } from './tool-editorial.ts';

type Locale = 'de' | 'fr';

type PdfDef = {
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

const ui = {
  de: {
    kicker: 'SO FUNKTIONIERT ES',
    local: 'Lokale Verarbeitung',
    stepsTitle: 'So verwendest du das Tool',
    choose: 'Wähle',
    run: 'Starte das Tool.',
    review: 'Prüfe das Ergebnis.',
    options: 'Passe bei Bedarf die verfügbaren Optionen an.',
    download: 'Lade das Ergebnis herunter.',
    downloadNamed: 'Herunterladen',
    insight: 'GUT ZU WISSEN',
    privacyLabel: 'DATENSCHUTZ BY DESIGN',
    privacyTitle: 'Die Datei bleibt in deinem Browser',
    privacyBody: 'Die Verarbeitung erfolgt lokal im Browser. Die Datei muss nicht auf die Server von UtilityLake hochgeladen werden.',
    faq: 'Nützliche Details',
    inspectQ1: 'Wird das ursprüngliche PDF verändert?',
    inspectA1: 'Nein. Das Tool analysiert das Dokument und erzeugt das Ergebnis, ohne die Quelldatei zu verändern.',
    inspectQ2: 'Wo findet die Verarbeitung statt?',
    inspectA2: 'Die Analyse erfolgt lokal in deinem Browser.',
    transformQ1: 'Wird die Originaldatei verändert?',
    transformA1: 'Nein. UtilityLake erstellt ein neues Ergebnis und lässt die Originaldatei unverändert.',
    fileQ: 'Wie heißt die erzeugte Datei?',
  },
  fr: {
    kicker: 'COMMENT ÇA FONCTIONNE',
    local: 'Traitement local',
    stepsTitle: 'Comment l’utiliser',
    choose: 'Sélectionnez',
    run: 'Lancez l’outil.',
    review: 'Consultez le résultat.',
    options: 'Ajustez les options disponibles si nécessaire.',
    download: 'Téléchargez le résultat.',
    downloadNamed: 'Téléchargez',
    insight: 'BON À SAVOIR',
    privacyLabel: 'CONFIDENTIALITÉ DÈS LA CONCEPTION',
    privacyTitle: 'Le fichier reste dans votre navigateur',
    privacyBody: 'Le traitement s’effectue localement dans le navigateur, sans avoir à envoyer le fichier aux serveurs de UtilityLake.',
    faq: 'Détails utiles',
    inspectQ1: 'Le PDF d’origine est-il modifié ?',
    inspectA1: 'Non. L’outil analyse le document et produit le résultat sans modifier le fichier source.',
    inspectQ2: 'Où le traitement est-il effectué ?',
    inspectA2: 'L’analyse est effectuée localement dans votre navigateur.',
    transformQ1: 'Le fichier d’origine est-il modifié ?',
    transformA1: 'Non. UtilityLake crée un nouveau résultat et laisse le fichier d’origine inchangé.',
    fileQ: 'Quel est le nom du fichier généré ?',
  },
} as const;

function build(locale: Locale, def: PdfDef): ToolEditorial {
  const t = ui[locale];
  const inspect = def.mode === 'inspect';

  return {
    family: inspect ? 'file-inspector' : 'file-transform',
    reviewed: false,

    kicker: t.kicker,
    title: def.title,
    intro: def.intro,

    facts: [
      def.input,
      def.output,
      t.local,
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

    stepsTitle: t.stepsTitle,

    steps: inspect
      ? [
          `${t.choose}: ${def.input}.`,
          t.run,
          t.review,
        ]
      : [
          `${t.choose}: ${def.input}.`,
          t.options,
          t.run,
          def.outputName
            ? `${t.downloadNamed}: ${def.outputName}.`
            : t.download,
        ],

    insightLabel: t.insight,
    insightTitle: def.insightTitle,
    insightBody: def.insightBody,

    privacyLabel: t.privacyLabel,
    privacyTitle: t.privacyTitle,
    privacyBody: t.privacyBody,

    faqTitle: t.faq,

    faq: inspect
      ? [
          {
            question: t.inspectQ1,
            answer: t.inspectA1,
          },
          {
            question: t.inspectQ2,
            answer: t.inspectA2,
          },
        ]
      : [
          {
            question: t.transformQ1,
            answer: t.transformA1,
          },
          ...(def.outputName
            ? [{
                question: t.fileQ,
                answer: def.outputName,
              }]
            : []),
        ],

    next: [],
  };
}

const de: Record<string, PdfDef> = {

  'merge-pdf': {
    mode: 'transform',
    title: 'Ein neues PDF aus den ursprünglichen Seiten',
    intro: 'UtilityLake erstellt ein neues Dokument und kopiert die Seiten der ausgewählten PDFs der Reihe nach hinein. Die Originaldateien bleiben unverändert.',
    input: '2 oder mehr PDF-Dateien',
    process: 'Seiten der Reihe nach kopieren',
    output: 'Zusammengeführtes PDF',
    outputName: 'merged.pdf',
    insightTitle: 'PDFs zusammenzuführen bedeutet nicht, Seiten in Bilder umzuwandeln',
    insightBody: 'Das Tool kopiert vorhandene PDF-Seiten in ein neues Dokument. Die Seiten werden nicht absichtlich rasterisiert, daher unterscheidet sich das Zusammenführen von einer bildbasierten PDF-Komprimierung.',
  },

  'split-pdf': {
    mode: 'transform',
    title: 'Ein PDF hinein, eine Datei für jede Seite',
    intro: 'UtilityLake kopiert jede Seite in ein eigenes einseitiges PDF.',
    input: 'PDF',
    process: 'Jede Seite kopieren',
    output: 'Separate PDFs',
    outputName: 'page-1.pdf, page-2.pdf, …',
    insightTitle: 'Beim Teilen werden die Seiten nicht in Bilder umgewandelt',
    insightBody: 'Jede Seite wird als PDF-Seite in ein neues Dokument kopiert. Das Teilen unterscheidet sich daher vom Rasterisieren der Quelldatei.',
  },

  'rotate-pdf': {
    mode: 'transform',
    title: 'Alle Seiten drehen, ohne sie als Bilder neu aufzubauen',
    intro: 'Wähle 90°, 180° oder 270° und UtilityLake aktualisiert die Drehung jeder Seite.',
    input: 'PDF',
    process: 'Drehung ändern',
    output: 'Gedrehtes PDF',
    outputName: 'rotated.pdf',
    insightTitle: 'Die Drehung wird als Seiteneigenschaft gespeichert',
    insightBody: 'Das Tool ändert die Rotationsangabe der PDF-Seiten, anstatt das Dokument in neue Seitenbilder zu rendern.',
  },

  'delete-pdf-pages': {
    mode: 'transform',
    title: 'Nur die Seiten entfernen, die du nicht brauchst',
    intro: 'Gib einzelne Seiten oder Bereiche an und UtilityLake entfernt sie aus einer neuen Kopie des PDFs.',
    input: 'PDF + Seitenbereich',
    process: 'Seiten entfernen',
    output: 'Aktualisiertes PDF',
    outputName: 'pages-deleted.pdf',
    insightTitle: 'Seitennummern ändern sich nach dem Entfernen',
    insightBody: 'Die verbleibenden Seiten behalten ihre Reihenfolge, erhalten im resultierenden Dokument aber neue Positionen.',
  },

  'extract-pdf-pages': {
    mode: 'transform',
    title: 'Ein neues PDF aus ausgewählten Seiten erstellen',
    intro: 'Wähle die gewünschten Seiten aus und UtilityLake kopiert nur diese Seiten in ein neues PDF.',
    input: 'PDF + Seitenbereich',
    process: 'Ausgewählte Seiten kopieren',
    output: 'Extrahiertes PDF',
    outputName: 'extracted-pages.pdf',
    insightTitle: 'Die Extraktion kopiert PDF-Seiten und keine Screenshots',
    insightBody: 'Die ausgewählten Seiten werden direkt in das neue Dokument kopiert, anstatt absichtlich in Bilder umgewandelt zu werden.',
  },

  'reorder-pdf-pages': {
    mode: 'transform',
    title: 'Das PDF in einer neuen Seitenreihenfolge aufbauen',
    intro: 'Gib die vollständige Seitenfolge an und UtilityLake erstellt ein neues Dokument genau in dieser Reihenfolge.',
    input: 'PDF + Seitenfolge',
    process: 'Seiten neu anordnen',
    output: 'Neu angeordnetes PDF',
    outputName: 'reordered.pdf',
    insightTitle: 'Jede Seite muss genau einmal vorkommen',
    insightBody: 'Das Tool prüft die Reihenfolge, damit beim Neuordnen keine Seiten versehentlich ausgelassen oder doppelt eingefügt werden.',
  },

  'images-to-pdf': {
    mode: 'transform',
    title: 'JPG- und PNG-Bilder in PDF-Seiten umwandeln',
    intro: 'Jedes ausgewählte Bild wird als eigene Seite in ein neues PDF eingebettet.',
    input: 'JPG- / PNG-Bilder',
    process: 'Bilder einbetten',
    output: 'PDF',
    outputName: 'images.pdf',
    insightTitle: 'Jedes Bild wird zu einer eigenen PDF-Seite',
    insightBody: 'Die Seitengröße orientiert sich an den Abmessungen des eingebetteten Bildes, anstatt jedes Bild in ein festes Papierformat zu zwingen.',
  },

  'jpg-to-pdf': {
    mode: 'transform',
    title: 'JPG-Bilder zu einem PDF zusammenfassen',
    intro: 'UtilityLake bettet jedes JPG als eigene Seite in ein neues PDF-Dokument ein.',
    input: 'JPG-Bilder',
    process: 'JPG-Seiten einbetten',
    output: 'PDF',
    outputName: 'jpg-to-pdf.pdf',
    insightTitle: 'Das JPG wird eingebettet und nicht als Text rekonstruiert',
    insightBody: 'Der Inhalt bleibt im PDF bildbasiert. Text, der im JPG sichtbar ist, wird nicht zu auswählbarem PDF-Text.',
  },

  'png-to-pdf': {
    mode: 'transform',
    title: 'PNG-Bilder zu einem PDF zusammenfassen',
    intro: 'UtilityLake bettet jedes PNG als eigene Seite in ein neues PDF-Dokument ein.',
    input: 'PNG-Bilder',
    process: 'PNG-Seiten einbetten',
    output: 'PDF',
    outputName: 'png-to-pdf.pdf',
    insightTitle: 'PNG-Inhalte bleiben bildbasiert',
    insightBody: 'Beim Erstellen des PDFs wird keine OCR durchgeführt. Text innerhalb eines PNG bleibt daher Teil des Bildes.',
  },

  'pdf-to-jpg': {
    mode: 'transform',
    title: 'Jede PDF-Seite als JPG-Bild rendern',
    intro: 'UtilityLake rendert jede PDF-Seite im Browser und erstellt pro Seite ein separates JPG-Bild.',
    input: 'PDF',
    process: 'Seiten rendern',
    output: 'JPG-Bilder',
    outputName: 'page-1.jpg, page-2.jpg, …',
    insightTitle: 'Beim Rendern wird Dokumentinhalt zu Pixeln',
    insightBody: 'Auswählbarer Text und Vektorgrafiken werden beim Export nach JPG Teil des gerenderten Bildes.',
  },

  'pdf-to-png': {
    mode: 'transform',
    title: 'Jede PDF-Seite als PNG-Bild rendern',
    intro: 'UtilityLake rendert jede PDF-Seite und erstellt pro Seite ein separates PNG-Bild.',
    input: 'PDF',
    process: 'Seiten rendern',
    output: 'PNG-Bilder',
    outputName: 'page-1.png, page-2.png, …',
    insightTitle: 'PNG vermeidet die verlustbehaftete JPEG-Komprimierung',
    insightBody: 'PNG speichert die gerenderten Pixel ohne typische JPEG-Kompressionsartefakte, auch wenn die resultierenden Dateien größer sein können.',
  },

  'compress-pdf': {
    mode: 'transform',
    title: 'Ein kleineres PDF mit einem Kompromiss zwischen Größe und Qualität',
    intro: 'UtilityLake rendert jede Seite und erstellt das Dokument mit JPEG-Bildern neu. Qualität und Render-Skalierung bestimmen das Verhältnis zwischen Dateigröße und visueller Detailtreue.',
    input: 'PDF',
    process: 'Rendern + JPEG',
    output: 'Komprimiertes PDF',
    outputName: 'compressed.pdf',
    insightTitle: 'Die Komprimierung verändert die Speicherung der Seiten',
    insightBody: 'Text und Vektorgrafiken des ursprünglichen PDFs werden Teil rasterisierter Seitenbilder. Eine niedrigere Qualität oder Skalierung kann die Dateigröße reduzieren, aber auch die Schärfe verringern.',
  },

  'add-pdf-page-numbers': {
    mode: 'transform',
    title: 'Seitennummern am unteren Rand jeder Seite hinzufügen',
    intro: 'UtilityLake zeichnet fortlaufende Seitennummern auf jede PDF-Seite.',
    input: 'PDF',
    process: 'Seitennummern hinzufügen',
    output: 'Nummeriertes PDF',
    outputName: 'numbered.pdf',
    insightTitle: 'Die Nummern werden als neuer PDF-Inhalt hinzugefügt',
    insightBody: 'Der ursprüngliche Seiteninhalt bleibt erhalten, während nahe dem unteren Seitenrand eine zentrierte Nummer hinzugefügt wird.',
  },

  'add-pdf-watermark': {
    mode: 'transform',
    title: 'Ein Text-Wasserzeichen auf jeder Seite platzieren',
    intro: 'Gib den Wasserzeichentext ein und stelle Größe und Deckkraft ein, bevor er auf alle Seiten angewendet wird.',
    input: 'PDF + Wasserzeichentext',
    process: 'Wasserzeichen zeichnen',
    output: 'PDF mit Wasserzeichen',
    outputName: 'watermarked.pdf',
    insightTitle: 'Das Wasserzeichen wird auf jede Seite gezeichnet',
    insightBody: 'Das Tool platziert das Wasserzeichen diagonal mit einstellbarer Deckkraft und macht es damit zu einem Bestandteil des resultierenden Seiteninhalts.',
  },

  'remove-pdf-metadata': {
    mode: 'transform',
    title: 'Gängige PDF-Dokumentmetadaten entfernen',
    intro: 'UtilityLake löscht übliche Felder wie Titel, Autor, Betreff, Schlüsselwörter, Producer und Creator.',
    input: 'PDF',
    process: 'Metadaten löschen',
    output: 'Bereinigtes PDF',
    outputName: 'metadata-removed.pdf',
    insightTitle: 'Das Entfernen von Metadaten ist keine forensische Bereinigung',
    insightBody: 'Das Tool entfernt gängige Dokumentmetadaten, garantiert aber nicht, dass jede mögliche verborgene oder eingebettete Spur entfernt wird.',
  },

  'pdf-metadata-viewer': {
    mode: 'inspect',
    title: 'Gängige Metadaten eines PDFs anzeigen',
    intro: 'UtilityLake liest Felder wie Titel, Autor, Creator, Producer, Datumsangaben und Seitenzahl.',
    input: 'PDF',
    process: 'Metadaten lesen',
    output: 'Metadatenbericht',
    insightTitle: 'Nicht jedes PDF enthält jedes Metadatenfeld',
    insightBody: 'Fehlende Werte sind normal. Metadatenfelder sind optional und hängen davon ab, wie ein Dokument erstellt oder bearbeitet wurde.',
  },

  'pdf-page-count': {
    mode: 'inspect',
    title: 'Die Seitenzahl eines PDFs sofort ermitteln',
    intro: 'UtilityLake liest die PDF-Struktur und gibt die Anzahl der enthaltenen Seiten aus.',
    input: 'PDF',
    process: 'Seiten zählen',
    output: 'Seitenanzahl',
    insightTitle: 'Zum Zählen müssen nicht alle Seiten gerendert werden',
    insightBody: 'Das Tool liest die Dokumentstruktur, um die Seitenzahl zu erhalten, anstatt jede Seite in ein Bild umzuwandeln.',
  },

  'pdf-size-analyzer': {
    mode: 'inspect',
    title: 'Die Größe eines PDFs auf einen Blick verstehen',
    intro: 'UtilityLake zeigt die gesamte Dateigröße, die Seitenzahl und die durchschnittliche Anzahl von Bytes pro Seite.',
    input: 'PDF',
    process: 'Größe + Seiten messen',
    output: 'Größenübersicht',
    insightTitle: 'Die durchschnittliche Größe pro Seite ist nur eine Schätzung',
    insightBody: 'Der Durchschnitt entsteht durch Teilen der Gesamtgröße durch die Seitenzahl und misst nicht den tatsächlichen Speicherverbrauch jeder einzelnen Seite.',
  },

  'crop-pdf': {
    mode: 'transform',
    title: 'Den sichtbaren Bereich jeder PDF-Seite ändern',
    intro: 'Lege Ränder fest und UtilityLake wendet auf jede Seite eine neue Crop-Box an.',
    input: 'PDF + Ränder',
    process: 'Crop-Boxen setzen',
    output: 'Zugeschnittenes PDF',
    outputName: 'cropped.pdf',
    insightTitle: 'Zuschneiden entfernt verborgenen Seiteninhalt nicht zwingend',
    insightBody: 'Die Crop-Box steuert den sichtbaren Bereich der Seite. Inhalte außerhalb dieses Bereichs können jedoch weiterhin im PDF vorhanden sein.',
  },

  'protect-pdf-with-password': {
    mode: 'transform',
    title: 'Ein PDF mit einem Passwort verschlüsseln',
    intro: 'Gib ein Passwort ein und UtilityLake erstellt eine verschlüsselte Kopie des Dokuments.',
    input: 'PDF + Passwort',
    process: 'PDF verschlüsseln',
    output: 'Geschütztes PDF',
    outputName: 'protected.pdf',
    insightTitle: 'Das Passwort ist Teil des Verschlüsselungsprozesses',
    insightBody: 'Das Dokument wird als verschlüsseltes PDF gespeichert und nicht lediglich umbenannt oder in einen anderen Container gelegt.',
  },

  'unlock-pdf-with-known-password': {
    mode: 'transform',
    title: 'Eine entsperrte Kopie erstellen, wenn das Passwort bekannt ist',
    intro: 'Gib das richtige Passwort ein und UtilityLake öffnet das verschlüsselte PDF und speichert eine neue unverschlüsselte Kopie.',
    input: 'Geschütztes PDF + Passwort',
    process: 'PDF entschlüsseln',
    output: 'Entsperrtes PDF',
    outputName: 'unlocked.pdf',
    insightTitle: 'Das Tool umgeht kein unbekanntes Passwort',
    insightBody: 'Das richtige Passwort ist erforderlich, um das verschlüsselte Dokument zu öffnen, bevor eine entsperrte Kopie erstellt werden kann.',
  },

  'combine-images-and-pdf': {
    mode: 'transform',
    title: 'PDFs und Bilder in einem Dokument kombinieren',
    intro: 'Wähle PDF-, JPG- und PNG-Dateien aus und UtilityLake kombiniert sie in der gewählten Reihenfolge.',
    input: 'PDF- / JPG- / PNG-Dateien',
    process: 'Kopieren + der Reihe nach einbetten',
    output: 'Kombiniertes PDF',
    outputName: 'combined.pdf',
    insightTitle: 'PDF-Seiten und Bilder werden unterschiedlich verarbeitet',
    insightBody: 'Vorhandene PDF-Seiten werden kopiert, während JPG- und PNG-Dateien als neue bildbasierte Seiten eingebettet werden.',
  },

  'pdf-page-size-converter': {
    mode: 'transform',
    title: 'PDF-Seiten an ein Standardseitenformat anpassen',
    intro: 'Wähle A4, US Letter oder A3 und UtilityLake skaliert jede Ausgangsseite in das gewählte Format.',
    input: 'PDF',
    process: 'Auf Zielformat skalieren',
    output: 'Skaliertes PDF',
    outputName: 'resized-pages.pdf',
    insightTitle: 'Das Seitenverhältnis bleibt erhalten',
    insightBody: 'Die Seiten werden proportional in das Zielformat eingepasst. Dadurch kann freier Raum um den Inhalt herum verbleiben.',
  },

  'grayscale-pdf': {
    mode: 'transform',
    title: 'Ein PDF mit Graustufen-Seitenbildern neu aufbauen',
    intro: 'UtilityLake rendert jede Seite, wandelt ihre Pixel in Graustufen um und erstellt daraus ein neues PDF.',
    input: 'PDF',
    process: 'Rendern + Graustufen',
    output: 'Graustufen-PDF',
    outputName: 'grayscale.pdf',
    insightTitle: 'Die Graustufenumwandlung rasterisiert die Seiten',
    insightBody: 'Da die Seiten zuerst als Bilder gerendert werden, werden auswählbarer Text und Vektorgrafiken Teil des rasterisierten Ergebnisses.',
  },

  'pdf-text-extractor': {
    mode: 'inspect',
    title: 'Die Textebene jeder PDF-Seite auslesen',
    intro: 'UtilityLake liest die verfügbaren Textelemente jeder PDF-Seite und fasst sie zu einem extrahierten Textergebnis zusammen.',
    input: 'PDF',
    process: 'Textebene lesen',
    output: 'Extrahierter Text',
    insightTitle: 'Textextraktion ist keine OCR',
    insightBody: 'Reine Scan-PDFs können wenig oder keinen extrahierbaren Text enthalten, da das Tool die vorhandene PDF-Textebene liest und keine Zeichen aus Pixeln erkennt.',
  },
};

const fr: Record<string, PdfDef> = {

  'merge-pdf': {
    mode: 'transform',
    title: 'Un nouveau PDF construit à partir des pages d’origine',
    intro: 'UtilityLake crée un nouveau document et copie dans l’ordre les pages des PDF sélectionnés. Les fichiers d’origine restent inchangés.',
    input: '2 fichiers PDF ou plus',
    process: 'Copier les pages dans l’ordre',
    output: 'PDF fusionné',
    outputName: 'merged.pdf',
    insightTitle: 'Fusionner des PDF ne signifie pas transformer les pages en images',
    insightBody: 'L’outil copie les pages PDF existantes dans un nouveau document. Il ne les rasterise pas volontairement, ce qui distingue la fusion d’une compression PDF basée sur des images.',
  },

  'split-pdf': {
    mode: 'transform',
    title: 'Un PDF en entrée, un fichier pour chaque page',
    intro: 'UtilityLake copie chaque page dans un PDF distinct contenant une seule page.',
    input: 'PDF',
    process: 'Copier chaque page',
    output: 'PDF séparés',
    outputName: 'page-1.pdf, page-2.pdf, …',
    insightTitle: 'Scinder un PDF ne transforme pas les pages en images',
    insightBody: 'Chaque page est copiée comme page PDF dans un nouveau document. La séparation est donc différente de la rasterisation du fichier source.',
  },

  'rotate-pdf': {
    mode: 'transform',
    title: 'Faire pivoter toutes les pages sans les reconstruire comme images',
    intro: 'Choisissez 90°, 180° ou 270° et UtilityLake met à jour la rotation de toutes les pages.',
    input: 'PDF',
    process: 'Modifier la rotation',
    output: 'PDF pivoté',
    outputName: 'rotated.pdf',
    insightTitle: 'La rotation est stockée comme propriété de la page',
    insightBody: 'L’outil modifie la rotation des pages PDF au lieu de rendre le document sous forme de nouvelles images.',
  },

  'delete-pdf-pages': {
    mode: 'transform',
    title: 'Supprimer uniquement les pages dont vous n’avez pas besoin',
    intro: 'Indiquez des pages individuelles ou des plages et UtilityLake les retire d’une nouvelle copie du PDF.',
    input: 'PDF + plage de pages',
    process: 'Supprimer des pages',
    output: 'PDF mis à jour',
    outputName: 'pages-deleted.pdf',
    insightTitle: 'Les numéros de page changent après une suppression',
    insightBody: 'Après la suppression, les pages restantes conservent leur ordre mais occupent naturellement de nouvelles positions dans le document final.',
  },

  'extract-pdf-pages': {
    mode: 'transform',
    title: 'Créer un nouveau PDF à partir des pages sélectionnées',
    intro: 'Choisissez les pages voulues et UtilityLake copie uniquement celles-ci dans un nouveau PDF.',
    input: 'PDF + plage de pages',
    process: 'Copier les pages sélectionnées',
    output: 'PDF extrait',
    outputName: 'extracted-pages.pdf',
    insightTitle: 'L’extraction copie des pages PDF et non des captures d’écran',
    insightBody: 'Les pages sélectionnées sont copiées directement dans le nouveau document sans être volontairement converties en images.',
  },

  'reorder-pdf-pages': {
    mode: 'transform',
    title: 'Reconstruire le PDF avec un nouvel ordre de pages',
    intro: 'Indiquez la séquence complète des pages et UtilityLake crée un nouveau document en suivant exactement cet ordre.',
    input: 'PDF + séquence de pages',
    process: 'Réorganiser les pages',
    output: 'PDF réorganisé',
    outputName: 'reordered.pdf',
    insightTitle: 'Chaque page doit apparaître exactement une fois',
    insightBody: 'L’outil valide la séquence pour éviter qu’une page soit accidentellement omise ou dupliquée lors de la réorganisation.',
  },

  'images-to-pdf': {
    mode: 'transform',
    title: 'Transformer des images JPG et PNG en pages PDF',
    intro: 'Chaque image sélectionnée est intégrée comme une page dans un nouveau PDF.',
    input: 'Images JPG / PNG',
    process: 'Intégrer les images',
    output: 'PDF',
    outputName: 'images.pdf',
    insightTitle: 'Chaque image devient sa propre page PDF',
    insightBody: 'Les dimensions de la page suivent celles de l’image intégrée au lieu d’imposer à toutes les images un format de papier fixe.',
  },

  'jpg-to-pdf': {
    mode: 'transform',
    title: 'Combiner des images JPG dans un PDF',
    intro: 'UtilityLake intègre chaque JPG comme une page dans un nouveau document PDF.',
    input: 'Images JPG',
    process: 'Intégrer les pages JPG',
    output: 'PDF',
    outputName: 'jpg-to-pdf.pdf',
    insightTitle: 'Le JPG est intégré comme image et non recréé comme texte',
    insightBody: 'Le contenu reste basé sur l’image dans le PDF ; le texte visible dans un JPG ne devient pas du texte PDF sélectionnable.',
  },

  'png-to-pdf': {
    mode: 'transform',
    title: 'Combiner des images PNG dans un PDF',
    intro: 'UtilityLake intègre chaque PNG comme une page dans un nouveau document PDF.',
    input: 'Images PNG',
    process: 'Intégrer les pages PNG',
    output: 'PDF',
    outputName: 'png-to-pdf.pdf',
    insightTitle: 'Le contenu PNG reste basé sur l’image',
    insightBody: 'La création du PDF n’effectue pas d’OCR. Le texte présent dans un PNG reste donc une partie de l’image.',
  },

  'pdf-to-jpg': {
    mode: 'transform',
    title: 'Rendre chaque page PDF sous forme d’image JPG',
    intro: 'UtilityLake rend chaque page PDF dans le navigateur et crée une image JPG distincte pour chaque page.',
    input: 'PDF',
    process: 'Rendre les pages',
    output: 'Images JPG',
    outputName: 'page-1.jpg, page-2.jpg, …',
    insightTitle: 'Le rendu transforme le contenu du document en pixels',
    insightBody: 'Le texte sélectionnable et les graphiques vectoriels deviennent une partie de l’image rendue lors de l’exportation en JPG.',
  },

  'pdf-to-png': {
    mode: 'transform',
    title: 'Rendre chaque page PDF sous forme d’image PNG',
    intro: 'UtilityLake rend chaque page PDF et crée une image PNG distincte pour chaque page.',
    input: 'PDF',
    process: 'Rendre les pages',
    output: 'Images PNG',
    outputName: 'page-1.png, page-2.png, …',
    insightTitle: 'PNG évite la compression avec perte propre au JPEG',
    insightBody: 'PNG conserve les pixels rendus sans artefacts de compression JPEG, même si les fichiers obtenus peuvent être plus volumineux.',
  },

  'compress-pdf': {
    mode: 'transform',
    title: 'Un PDF plus léger avec un compromis entre taille et qualité',
    intro: 'UtilityLake rend chaque page puis reconstruit le document à l’aide d’images JPEG. La qualité et l’échelle de rendu permettent d’équilibrer taille du fichier et niveau de détail.',
    input: 'PDF',
    process: 'Rendu + JPEG',
    output: 'PDF compressé',
    outputName: 'compressed.pdf',
    insightTitle: 'La compression modifie la manière dont les pages sont stockées',
    insightBody: 'Le texte et les graphiques vectoriels du PDF d’origine deviennent une partie d’images rasterisées. Réduire la qualité ou l’échelle peut diminuer la taille du fichier mais aussi sa netteté.',
  },

  'add-pdf-page-numbers': {
    mode: 'transform',
    title: 'Ajouter des numéros en bas de chaque page',
    intro: 'UtilityLake dessine des numéros de page successifs sur toutes les pages du PDF.',
    input: 'PDF',
    process: 'Ajouter les numéros de page',
    output: 'PDF numéroté',
    outputName: 'numbered.pdf',
    insightTitle: 'Les numéros sont ajoutés comme nouveau contenu PDF',
    insightBody: 'Le contenu d’origine reste en place tandis qu’un numéro centré est dessiné près du bas de chaque page.',
  },

  'add-pdf-watermark': {
    mode: 'transform',
    title: 'Ajouter un filigrane texte sur chaque page',
    intro: 'Saisissez le texte du filigrane et réglez sa taille et son opacité avant de l’appliquer à toutes les pages.',
    input: 'PDF + texte du filigrane',
    process: 'Dessiner le filigrane',
    output: 'PDF avec filigrane',
    outputName: 'watermarked.pdf',
    insightTitle: 'Le filigrane est dessiné sur chaque page',
    insightBody: 'L’outil place actuellement le filigrane en diagonale avec une opacité réglable, ce qui l’intègre au contenu de la page finale.',
  },

  'remove-pdf-metadata': {
    mode: 'transform',
    title: 'Supprimer les métadonnées PDF les plus courantes',
    intro: 'UtilityLake efface les champs courants tels que titre, auteur, sujet, mots-clés, producteur et créateur.',
    input: 'PDF',
    process: 'Effacer les métadonnées',
    output: 'PDF nettoyé',
    outputName: 'metadata-removed.pdf',
    insightTitle: 'Supprimer les métadonnées n’est pas un nettoyage forensique',
    insightBody: 'L’outil efface les champs de métadonnées courants mais ne garantit pas la suppression de toute trace cachée ou intégrée.',
  },

  'pdf-metadata-viewer': {
    mode: 'inspect',
    title: 'Afficher les métadonnées courantes stockées dans un PDF',
    intro: 'UtilityLake lit des champs comme le titre, l’auteur, le créateur, le producteur, les dates et le nombre de pages.',
    input: 'PDF',
    process: 'Lire les métadonnées',
    output: 'Rapport de métadonnées',
    insightTitle: 'Tous les PDF ne contiennent pas tous les champs de métadonnées',
    insightBody: 'L’absence de certaines valeurs est normale : les champs de métadonnées sont facultatifs et dépendent de la manière dont le document a été créé ou modifié.',
  },

  'pdf-page-count': {
    mode: 'inspect',
    title: 'Compter instantanément les pages d’un PDF',
    intro: 'UtilityLake lit la structure du PDF et indique le nombre de pages qu’il contient.',
    input: 'PDF',
    process: 'Compter les pages',
    output: 'Nombre total de pages',
    insightTitle: 'Compter les pages ne nécessite pas de toutes les rendre',
    insightBody: 'L’outil lit la structure du document PDF pour obtenir le nombre de pages au lieu de convertir chaque page en image.',
  },

  'pdf-size-analyzer': {
    mode: 'inspect',
    title: 'Comprendre rapidement la taille d’un PDF',
    intro: 'UtilityLake indique la taille totale du fichier, le nombre de pages et le nombre moyen d’octets par page.',
    input: 'PDF',
    process: 'Mesurer taille + pages',
    output: 'Résumé de taille',
    insightTitle: 'La taille moyenne par page est une estimation',
    insightBody: 'La moyenne correspond à la taille totale divisée par le nombre de pages et ne mesure pas l’espace réellement utilisé par chaque page.',
  },

  'crop-pdf': {
    mode: 'transform',
    title: 'Modifier la zone visible de chaque page PDF',
    intro: 'Définissez les marges et UtilityLake applique une nouvelle zone de recadrage à chaque page.',
    input: 'PDF + marges',
    process: 'Définir les zones de recadrage',
    output: 'PDF recadré',
    outputName: 'cropped.pdf',
    insightTitle: 'Le recadrage ne supprime pas nécessairement le contenu masqué',
    insightBody: 'Modifier la zone de recadrage contrôle la partie visible de la page, mais le contenu situé hors de cette zone peut toujours exister dans le PDF.',
  },

  'protect-pdf-with-password': {
    mode: 'transform',
    title: 'Chiffrer un PDF avec un mot de passe',
    intro: 'Saisissez un mot de passe et UtilityLake crée une copie chiffrée du document.',
    input: 'PDF + mot de passe',
    process: 'Chiffrer le PDF',
    output: 'PDF protégé',
    outputName: 'protected.pdf',
    insightTitle: 'Le mot de passe fait partie du processus de chiffrement',
    insightBody: 'Le document est enregistré comme PDF chiffré ; il n’est pas simplement renommé ou placé dans un autre conteneur.',
  },

  'unlock-pdf-with-known-password': {
    mode: 'transform',
    title: 'Créer une copie déverrouillée lorsque le mot de passe est connu',
    intro: 'Saisissez le bon mot de passe et UtilityLake ouvre le PDF chiffré puis enregistre une nouvelle copie non chiffrée.',
    input: 'PDF protégé + mot de passe',
    process: 'Déchiffrer le PDF',
    output: 'PDF déverrouillé',
    outputName: 'unlocked.pdf',
    insightTitle: 'Cet outil ne contourne pas un mot de passe inconnu',
    insightBody: 'Le bon mot de passe est nécessaire pour ouvrir le document chiffré avant de pouvoir créer une copie déverrouillée.',
  },

  'combine-images-and-pdf': {
    mode: 'transform',
    title: 'Combiner PDF et images dans un seul document',
    intro: 'Sélectionnez des fichiers PDF, JPG et PNG et UtilityLake les combine dans l’ordre choisi.',
    input: 'Fichiers PDF / JPG / PNG',
    process: 'Copier + intégrer dans l’ordre',
    output: 'PDF combiné',
    outputName: 'combined.pdf',
    insightTitle: 'Les pages PDF et les images sont traitées différemment',
    insightBody: 'Les pages PDF existantes sont copiées tandis que les fichiers JPG et PNG sont intégrés comme nouvelles pages basées sur des images.',
  },

  'pdf-page-size-converter': {
    mode: 'transform',
    title: 'Adapter les pages PDF à un format de page standard',
    intro: 'Choisissez A4, US Letter ou A3 et UtilityLake redimensionne chaque page source pour l’adapter au format sélectionné.',
    input: 'PDF',
    process: 'Adapter au format cible',
    output: 'PDF redimensionné',
    outputName: 'resized-pages.pdf',
    insightTitle: 'Les proportions sont conservées',
    insightBody: 'Les pages sont redimensionnées pour tenir dans le format cible tout en conservant leurs proportions, ce qui peut laisser de l’espace libre autour du contenu.',
  },

  'grayscale-pdf': {
    mode: 'transform',
    title: 'Reconstruire un PDF avec des images de pages en niveaux de gris',
    intro: 'UtilityLake rend chaque page, convertit ses pixels en niveaux de gris puis crée un nouveau PDF.',
    input: 'PDF',
    process: 'Rendu + niveaux de gris',
    output: 'PDF en niveaux de gris',
    outputName: 'grayscale.pdf',
    insightTitle: 'La conversion en niveaux de gris rasterise les pages',
    insightBody: 'Comme les pages sont d’abord rendues sous forme d’images, le texte sélectionnable et les graphiques vectoriels deviennent une partie du résultat rasterisé.',
  },

  'pdf-text-extractor': {
    mode: 'inspect',
    title: 'Lire la couche de texte de chaque page PDF',
    intro: 'UtilityLake lit les éléments de texte disponibles sur chaque page PDF et les rassemble dans un résultat de texte extrait.',
    input: 'PDF',
    process: 'Lire la couche de texte',
    output: 'Texte extrait',
    insightTitle: 'L’extraction de texte n’est pas de l’OCR',
    insightBody: 'Les PDF constitués uniquement de pages numérisées peuvent contenir peu ou pas de texte extractible, car l’outil lit la couche de texte existante au lieu de reconnaître des caractères à partir des pixels.',
  },
};

export const pdfEditorialDe: Partial<Record<string, ToolEditorial>> =
  Object.fromEntries(
    Object.entries(de).map(([id, def]) => [id, build('de', def)])
  );

export const pdfEditorialFr: Partial<Record<string, ToolEditorial>> =
  Object.fromEntries(
    Object.entries(fr).map(([id, def]) => [id, build('fr', def)])
  );
