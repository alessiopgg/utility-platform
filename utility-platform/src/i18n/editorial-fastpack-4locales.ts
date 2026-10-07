import type { ToolEditorial } from './tool-editorial.ts';

type Locale = 'es' | 'pt-BR' | 'de' | 'fr';
type Group = 'encoding' | 'units' | 'text' | 'maker';

const data = {
  "titles": {
    "base64-encoder": {
      "es": "Codificar texto UTF-8 en Base64",
      "pt-BR": "Codificar texto UTF-8 em Base64",
      "de": "UTF-8-Text als Base64 kodieren",
      "fr": "Encoder du texte UTF-8 en Base64"
    },
    "base64-decoder": {
      "es": "Decodificar Base64 a texto UTF-8",
      "pt-BR": "Decodificar Base64 para texto UTF-8",
      "de": "Base64 in UTF-8-Text dekodieren",
      "fr": "Décoder du Base64 en texte UTF-8"
    },
    "url-encoder": {
      "es": "Codificar un componente URL",
      "pt-BR": "Codificar um componente de URL",
      "de": "Eine URL-Komponente kodieren",
      "fr": "Encoder un composant d’URL"
    },
    "url-decoder": {
      "es": "Decodificar texto URL",
      "pt-BR": "Decodificar texto de URL",
      "de": "URL-kodierten Text dekodieren",
      "fr": "Décoder du texte d’URL"
    },
    "html-entity-encoder": {
      "es": "Escapar caracteres HTML especiales",
      "pt-BR": "Escapar caracteres HTML especiais",
      "de": "HTML-Sonderzeichen maskieren",
      "fr": "Échapper les caractères HTML spéciaux"
    },
    "html-entity-decoder": {
      "es": "Decodificar entidades HTML",
      "pt-BR": "Decodificar entidades HTML",
      "de": "HTML-Entitäten dekodieren",
      "fr": "Décoder les entités HTML"
    },
    "jwt-decoder": {
      "es": "Decodificar cabecera y payload de un JWT",
      "pt-BR": "Decodificar cabeçalho e payload de um JWT",
      "de": "Header und Payload eines JWT dekodieren",
      "fr": "Décoder l’en-tête et le payload d’un JWT"
    },
    "uuid-generator": {
      "es": "Generar un UUID v4 aleatorio",
      "pt-BR": "Gerar um UUID v4 aleatório",
      "de": "Eine zufällige UUID v4 erzeugen",
      "fr": "Générer un UUID v4 aléatoire"
    },
    "ulid-generator": {
      "es": "Generar un ULID ordenable",
      "pt-BR": "Gerar um ULID ordenável",
      "de": "Eine sortierbare ULID erzeugen",
      "fr": "Générer un ULID triable"
    },
    "md5-generator": {
      "es": "Generar un checksum MD5",
      "pt-BR": "Gerar um checksum MD5",
      "de": "Eine MD5-Prüfsumme erzeugen",
      "fr": "Générer une somme de contrôle MD5"
    },
    "sha-1-generator": {
      "es": "Generar un checksum SHA-1",
      "pt-BR": "Gerar um checksum SHA-1",
      "de": "Eine SHA-1-Prüfsumme erzeugen",
      "fr": "Générer une somme de contrôle SHA-1"
    },
    "sha-256-generator": {
      "es": "Generar un hash SHA-256",
      "pt-BR": "Gerar um hash SHA-256",
      "de": "Einen SHA-256-Hash erzeugen",
      "fr": "Générer un hash SHA-256"
    },
    "sha-512-generator": {
      "es": "Generar un hash SHA-512",
      "pt-BR": "Gerar um hash SHA-512",
      "de": "Einen SHA-512-Hash erzeugen",
      "fr": "Générer un hash SHA-512"
    },
    "random-token-generator": {
      "es": "Generar un token hexadecimal aleatorio",
      "pt-BR": "Gerar um token hexadecimal aleatório",
      "de": "Ein zufälliges Hex-Token erzeugen",
      "fr": "Générer un jeton hexadécimal aléatoire"
    },
    "hex-to-text": {
      "es": "Convertir bytes hexadecimales a texto",
      "pt-BR": "Converter bytes hexadecimais em texto",
      "de": "Hexadezimale Bytes in Text umwandeln",
      "fr": "Convertir des octets hexadécimaux en texte"
    },
    "text-to-hex": {
      "es": "Convertir texto UTF-8 a hexadecimal",
      "pt-BR": "Converter texto UTF-8 em hexadecimal",
      "de": "UTF-8-Text in Hexadezimal umwandeln",
      "fr": "Convertir du texte UTF-8 en hexadécimal"
    },
    "binary-to-text": {
      "es": "Convertir bytes binarios a texto",
      "pt-BR": "Converter bytes binários em texto",
      "de": "Binärbytes in Text umwandeln",
      "fr": "Convertir des octets binaires en texte"
    },
    "text-to-binary": {
      "es": "Convertir texto UTF-8 a binario",
      "pt-BR": "Converter texto UTF-8 em binário",
      "de": "UTF-8-Text in Binärdarstellung umwandeln",
      "fr": "Convertir du texte UTF-8 en binaire"
    },
    "ascii-to-text": {
      "es": "Convertir valores decimales a texto",
      "pt-BR": "Converter valores decimais em texto",
      "de": "Dezimalwerte in Text umwandeln",
      "fr": "Convertir des valeurs décimales en texte"
    },
    "text-to-ascii": {
      "es": "Convertir texto a códigos Unicode",
      "pt-BR": "Converter texto em códigos Unicode",
      "de": "Text in Unicode-Codepoints umwandeln",
      "fr": "Convertir du texte en codes Unicode"
    },
    "length-converter": {
      "es": "Convertir unidades de longitud",
      "pt-BR": "Converter unidades de comprimento",
      "de": "Längeneinheiten umrechnen",
      "fr": "Convertir des unités de longueur"
    },
    "area-converter": {
      "es": "Convertir unidades de área",
      "pt-BR": "Converter unidades de área",
      "de": "Flächeneinheiten umrechnen",
      "fr": "Convertir des unités de surface"
    },
    "volume-converter": {
      "es": "Convertir unidades de volumen",
      "pt-BR": "Converter unidades de volume",
      "de": "Volumeneinheiten umrechnen",
      "fr": "Convertir des unités de volume"
    },
    "weight-converter": {
      "es": "Convertir unidades de masa y peso",
      "pt-BR": "Converter unidades de massa e peso",
      "de": "Masse- und Gewichtseinheiten umrechnen",
      "fr": "Convertir des unités de masse et de poids"
    },
    "temperature-converter": {
      "es": "Convertir temperaturas",
      "pt-BR": "Converter temperaturas",
      "de": "Temperaturen umrechnen",
      "fr": "Convertir des températures"
    },
    "speed-converter": {
      "es": "Convertir unidades de velocidad",
      "pt-BR": "Converter unidades de velocidade",
      "de": "Geschwindigkeitseinheiten umrechnen",
      "fr": "Convertir des unités de vitesse"
    },
    "pressure-converter": {
      "es": "Convertir unidades de presión",
      "pt-BR": "Converter unidades de pressão",
      "de": "Druckeinheiten umrechnen",
      "fr": "Convertir des unités de pression"
    },
    "energy-converter": {
      "es": "Convertir unidades de energía",
      "pt-BR": "Converter unidades de energia",
      "de": "Energieeinheiten umrechnen",
      "fr": "Convertir des unités d’énergie"
    },
    "power-converter": {
      "es": "Convertir unidades de potencia",
      "pt-BR": "Converter unidades de potência",
      "de": "Leistungseinheiten umrechnen",
      "fr": "Convertir des unités de puissance"
    },
    "torque-converter": {
      "es": "Convertir unidades de par",
      "pt-BR": "Converter unidades de torque",
      "de": "Drehmomenteinheiten umrechnen",
      "fr": "Convertir des unités de couple"
    },
    "density-converter": {
      "es": "Convertir unidades de densidad",
      "pt-BR": "Converter unidades de densidade",
      "de": "Dichteeinheiten umrechnen",
      "fr": "Convertir des unités de densité"
    },
    "fuel-economy-converter": {
      "es": "Convertir consumo y eficiencia de combustible",
      "pt-BR": "Converter consumo e eficiência de combustível",
      "de": "Kraftstoffverbrauch umrechnen",
      "fr": "Convertir la consommation de carburant"
    },
    "data-storage-converter": {
      "es": "Convertir unidades de almacenamiento",
      "pt-BR": "Converter unidades de armazenamento",
      "de": "Speichereinheiten umrechnen",
      "fr": "Convertir des unités de stockage"
    },
    "data-transfer-rate-converter": {
      "es": "Convertir tasas de transferencia de datos",
      "pt-BR": "Converter taxas de transferência de dados",
      "de": "Datenübertragungsraten umrechnen",
      "fr": "Convertir des débits de transfert de données"
    },
    "angle-converter": {
      "es": "Convertir unidades angulares",
      "pt-BR": "Converter unidades angulares",
      "de": "Winkeleinheiten umrechnen",
      "fr": "Convertir des unités d’angle"
    },
    "time-converter": {
      "es": "Convertir unidades de tiempo",
      "pt-BR": "Converter unidades de tempo",
      "de": "Zeiteinheiten umrechnen",
      "fr": "Convertir des unités de temps"
    },
    "frequency-converter": {
      "es": "Convertir unidades de frecuencia",
      "pt-BR": "Converter unidades de frequência",
      "de": "Frequenzeinheiten umrechnen",
      "fr": "Convertir des unités de fréquence"
    },
    "force-converter": {
      "es": "Convertir unidades de fuerza",
      "pt-BR": "Converter unidades de força",
      "de": "Krafteinheiten umrechnen",
      "fr": "Convertir des unités de force"
    },
    "acceleration-converter": {
      "es": "Convertir unidades de aceleración",
      "pt-BR": "Converter unidades de aceleração",
      "de": "Beschleunigungseinheiten umrechnen",
      "fr": "Convertir des unités d’accélération"
    },
    "cooking-measurement-converter": {
      "es": "Convertir medidas de cocina",
      "pt-BR": "Converter medidas culinárias",
      "de": "Küchenmaße umrechnen",
      "fr": "Convertir des mesures de cuisine"
    },
    "word-counter": {
      "es": "Contar palabras",
      "pt-BR": "Contar palavras",
      "de": "Wörter zählen",
      "fr": "Compter les mots"
    },
    "character-counter": {
      "es": "Contar caracteres",
      "pt-BR": "Contar caracteres",
      "de": "Zeichen zählen",
      "fr": "Compter les caractères"
    },
    "sentence-counter": {
      "es": "Contar frases",
      "pt-BR": "Contar frases",
      "de": "Sätze zählen",
      "fr": "Compter les phrases"
    },
    "paragraph-counter": {
      "es": "Contar párrafos",
      "pt-BR": "Contar parágrafos",
      "de": "Absätze zählen",
      "fr": "Compter les paragraphes"
    },
    "reading-time-calculator": {
      "es": "Estimar el tiempo de lectura",
      "pt-BR": "Estimar o tempo de leitura",
      "de": "Lesezeit schätzen",
      "fr": "Estimer le temps de lecture"
    },
    "speaking-time-calculator": {
      "es": "Estimar el tiempo de habla",
      "pt-BR": "Estimar o tempo de fala",
      "de": "Sprechzeit schätzen",
      "fr": "Estimer le temps de parole"
    },
    "uppercase-converter": {
      "es": "Convertir texto a mayúsculas",
      "pt-BR": "Converter texto para maiúsculas",
      "de": "Text in Großbuchstaben umwandeln",
      "fr": "Convertir le texte en majuscules"
    },
    "lowercase-converter": {
      "es": "Convertir texto a minúsculas",
      "pt-BR": "Converter texto para minúsculas",
      "de": "Text in Kleinbuchstaben umwandeln",
      "fr": "Convertir le texte en minuscules"
    },
    "title-case-converter": {
      "es": "Convertir texto a Title Case",
      "pt-BR": "Converter texto para Title Case",
      "de": "Text in Title Case umwandeln",
      "fr": "Convertir le texte en Title Case"
    },
    "sentence-case-converter": {
      "es": "Convertir texto a formato frase",
      "pt-BR": "Converter texto para formato de frase",
      "de": "Text in Satzschreibweise umwandeln",
      "fr": "Convertir le texte en casse de phrase"
    },
    "camel-case-converter": {
      "es": "Convertir palabras a camelCase",
      "pt-BR": "Converter palavras para camelCase",
      "de": "Wörter in camelCase umwandeln",
      "fr": "Convertir des mots en camelCase"
    },
    "snake-case-converter": {
      "es": "Convertir palabras a snake_case",
      "pt-BR": "Converter palavras para snake_case",
      "de": "Wörter in snake_case umwandeln",
      "fr": "Convertir des mots en snake_case"
    },
    "kebab-case-converter": {
      "es": "Convertir palabras a kebab-case",
      "pt-BR": "Converter palavras para kebab-case",
      "de": "Wörter in kebab-case umwandeln",
      "fr": "Convertir des mots en kebab-case"
    },
    "remove-duplicate-lines": {
      "es": "Eliminar líneas duplicadas",
      "pt-BR": "Remover linhas duplicadas",
      "de": "Doppelte Zeilen entfernen",
      "fr": "Supprimer les lignes en double"
    },
    "sort-lines": {
      "es": "Ordenar líneas lexicográficamente",
      "pt-BR": "Ordenar linhas lexicograficamente",
      "de": "Zeilen lexikografisch sortieren",
      "fr": "Trier les lignes lexicographiquement"
    },
    "reverse-text": {
      "es": "Invertir texto carácter por carácter",
      "pt-BR": "Inverter texto caractere por caractere",
      "de": "Text Zeichen für Zeichen umkehren",
      "fr": "Inverser le texte caractère par caractère"
    },
    "reverse-lines": {
      "es": "Invertir el orden de las líneas",
      "pt-BR": "Inverter a ordem das linhas",
      "de": "Reihenfolge der Zeilen umkehren",
      "fr": "Inverser l’ordre des lignes"
    },
    "remove-empty-lines": {
      "es": "Eliminar líneas vacías",
      "pt-BR": "Remover linhas vazias",
      "de": "Leere Zeilen entfernen",
      "fr": "Supprimer les lignes vides"
    },
    "remove-extra-spaces": {
      "es": "Eliminar espacios extra",
      "pt-BR": "Remover espaços extras",
      "de": "Überflüssige Leerzeichen entfernen",
      "fr": "Supprimer les espaces superflus"
    },
    "trim-lines": {
      "es": "Recortar espacios en cada línea",
      "pt-BR": "Remover espaços nas bordas de cada linha",
      "de": "Leerraum an jeder Zeile entfernen",
      "fr": "Supprimer les espaces en bordure de chaque ligne"
    },
    "find-and-replace": {
      "es": "Buscar y reemplazar texto literal",
      "pt-BR": "Localizar e substituir texto literal",
      "de": "Wörtlichen Text suchen und ersetzen",
      "fr": "Rechercher et remplacer du texte littéral"
    },
    "text-diff": {
      "es": "Comparar dos textos línea por línea",
      "pt-BR": "Comparar dois textos linha por linha",
      "de": "Zwei Texte zeilenweise vergleichen",
      "fr": "Comparer deux textes ligne par ligne"
    },
    "remove-line-breaks": {
      "es": "Eliminar saltos de línea",
      "pt-BR": "Remover quebras de linha",
      "de": "Zeilenumbrüche entfernen",
      "fr": "Supprimer les sauts de ligne"
    },
    "add-line-numbers": {
      "es": "Añadir números de línea",
      "pt-BR": "Adicionar números de linha",
      "de": "Zeilennummern hinzufügen",
      "fr": "Ajouter des numéros de ligne"
    },
    "randomize-lines": {
      "es": "Mezclar líneas aleatoriamente",
      "pt-BR": "Embaralhar linhas aleatoriamente",
      "de": "Zeilen zufällig mischen",
      "fr": "Mélanger les lignes aléatoirement"
    },
    "alphabetize-list": {
      "es": "Ordenar una lista alfabéticamente",
      "pt-BR": "Ordenar uma lista alfabeticamente",
      "de": "Eine Liste alphabetisch sortieren",
      "fr": "Trier une liste par ordre alphabétique"
    },
    "word-frequency-counter": {
      "es": "Contar la frecuencia de las palabras",
      "pt-BR": "Contar a frequência das palavras",
      "de": "Worthäufigkeiten zählen",
      "fr": "Compter la fréquence des mots"
    },
    "unique-word-counter": {
      "es": "Contar palabras distintas",
      "pt-BR": "Contar palavras distintas",
      "de": "Eindeutige Wörter zählen",
      "fr": "Compter les mots distincts"
    },
    "duplicate-word-finder": {
      "es": "Encontrar palabras repetidas",
      "pt-BR": "Encontrar palavras repetidas",
      "de": "Wiederholte Wörter finden",
      "fr": "Trouver les mots répétés"
    },
    "text-to-slug": {
      "es": "Crear un slug apto para URL",
      "pt-BR": "Criar um slug adequado para URL",
      "de": "Einen URL-freundlichen Slug erstellen",
      "fr": "Créer un slug adapté aux URL"
    },
    "stl-viewer": {
      "es": "Visualizar un archivo STL",
      "pt-BR": "Visualizar um arquivo STL",
      "de": "Eine STL-Datei anzeigen",
      "fr": "Visualiser un fichier STL"
    },
    "stl-dimensions-checker": {
      "es": "Comprobar las dimensiones de un STL",
      "pt-BR": "Verificar as dimensões de um STL",
      "de": "Abmessungen einer STL-Datei prüfen",
      "fr": "Vérifier les dimensions d’un STL"
    },
    "stl-volume-calculator": {
      "es": "Calcular el volumen de un STL",
      "pt-BR": "Calcular o volume de um STL",
      "de": "Volumen einer STL-Datei berechnen",
      "fr": "Calculer le volume d’un STL"
    },
    "filament-length-calculator": {
      "es": "Calcular la longitud de filamento",
      "pt-BR": "Calcular o comprimento do filamento",
      "de": "Filamentlänge berechnen",
      "fr": "Calculer la longueur de filament"
    },
    "filament-weight-calculator": {
      "es": "Calcular el peso del filamento",
      "pt-BR": "Calcular o peso do filamento",
      "de": "Filamentgewicht berechnen",
      "fr": "Calculer le poids du filament"
    },
    "filament-cost-calculator": {
      "es": "Calcular el coste del filamento",
      "pt-BR": "Calcular o custo do filamento",
      "de": "Filamentkosten berechnen",
      "fr": "Calculer le coût du filament"
    },
    "3d-print-cost-calculator": {
      "es": "Calcular el coste de una impresión 3D",
      "pt-BR": "Calcular o custo de uma impressão 3D",
      "de": "Kosten eines 3D-Drucks berechnen",
      "fr": "Calculer le coût d’une impression 3D"
    },
    "print-time-cost-calculator": {
      "es": "Calcular el coste según el tiempo de impresión",
      "pt-BR": "Calcular o custo pelo tempo de impressão",
      "de": "Kosten aus der Druckzeit berechnen",
      "fr": "Calculer le coût selon le temps d’impression"
    },
    "resin-volume-calculator": {
      "es": "Calcular el volumen de resina",
      "pt-BR": "Calcular o volume de resina",
      "de": "Harzvolumen berechnen",
      "fr": "Calculer le volume de résine"
    },
    "resin-cost-calculator": {
      "es": "Calcular el coste de la resina",
      "pt-BR": "Calcular o custo da resina",
      "de": "Harzkosten berechnen",
      "fr": "Calculer le coût de la résine"
    },
    "layer-height-calculator": {
      "es": "Calcular la altura de capa",
      "pt-BR": "Calcular a altura de camada",
      "de": "Schichthöhe berechnen",
      "fr": "Calculer la hauteur de couche"
    },
    "steps-per-mm-calculator": {
      "es": "Calcular pasos por milímetro",
      "pt-BR": "Calcular passos por milímetro",
      "de": "Schritte pro Millimeter berechnen",
      "fr": "Calculer les pas par millimètre"
    },
    "flow-rate-calculator": {
      "es": "Calcular el caudal de extrusión",
      "pt-BR": "Calcular a vazão de extrusão",
      "de": "Extrusionsfluss berechnen",
      "fr": "Calculer le débit d’extrusion"
    },
    "extrusion-multiplier-calculator": {
      "es": "Calcular el multiplicador de extrusión",
      "pt-BR": "Calcular o multiplicador de extrusão",
      "de": "Extrusionsmultiplikator berechnen",
      "fr": "Calculer le multiplicateur d’extrusion"
    },
    "e-steps-calculator": {
      "es": "Calibrar los E-steps",
      "pt-BR": "Calibrar os E-steps",
      "de": "E-Steps kalibrieren",
      "fr": "Calibrer les E-steps"
    },
    "nozzle-flow-calculator": {
      "es": "Calcular el caudal de la boquilla",
      "pt-BR": "Calcular a vazão do bico",
      "de": "Düsenfluss berechnen",
      "fr": "Calculer le débit de la buse"
    },
    "model-scale-calculator": {
      "es": "Calcular la escala de un modelo",
      "pt-BR": "Calcular a escala de um modelo",
      "de": "Modellmaßstab berechnen",
      "fr": "Calculer l’échelle d’un modèle"
    },
    "support-angle-calculator": {
      "es": "Calcular el ángulo de soporte",
      "pt-BR": "Calcular o ângulo de suporte",
      "de": "Stützwinkel berechnen",
      "fr": "Calculer l’angle de support"
    },
    "infill-material-estimator": {
      "es": "Estimar material de relleno",
      "pt-BR": "Estimar material de preenchimento",
      "de": "Infill-Material schätzen",
      "fr": "Estimer le matériau de remplissage"
    },
    "filament-remaining-calculator": {
      "es": "Estimar el filamento restante",
      "pt-BR": "Estimar o filamento restante",
      "de": "Verbleibendes Filament schätzen",
      "fr": "Estimer le filament restant"
    }
  },
  "groups": {
    "encoding": [
      "base64-encoder",
      "base64-decoder",
      "url-encoder",
      "url-decoder",
      "html-entity-encoder",
      "html-entity-decoder",
      "jwt-decoder",
      "uuid-generator",
      "ulid-generator",
      "md5-generator",
      "sha-1-generator",
      "sha-256-generator",
      "sha-512-generator",
      "random-token-generator",
      "hex-to-text",
      "text-to-hex",
      "binary-to-text",
      "text-to-binary",
      "ascii-to-text",
      "text-to-ascii"
    ],
    "units": [
      "length-converter",
      "area-converter",
      "volume-converter",
      "weight-converter",
      "temperature-converter",
      "speed-converter",
      "pressure-converter",
      "energy-converter",
      "power-converter",
      "torque-converter",
      "density-converter",
      "fuel-economy-converter",
      "data-storage-converter",
      "data-transfer-rate-converter",
      "angle-converter",
      "time-converter",
      "frequency-converter",
      "force-converter",
      "acceleration-converter",
      "cooking-measurement-converter"
    ],
    "text": [
      "word-counter",
      "character-counter",
      "sentence-counter",
      "paragraph-counter",
      "reading-time-calculator",
      "speaking-time-calculator",
      "uppercase-converter",
      "lowercase-converter",
      "title-case-converter",
      "sentence-case-converter",
      "camel-case-converter",
      "snake-case-converter",
      "kebab-case-converter",
      "remove-duplicate-lines",
      "sort-lines",
      "reverse-text",
      "reverse-lines",
      "remove-empty-lines",
      "remove-extra-spaces",
      "trim-lines",
      "find-and-replace",
      "text-diff",
      "remove-line-breaks",
      "add-line-numbers",
      "randomize-lines",
      "alphabetize-list",
      "word-frequency-counter",
      "unique-word-counter",
      "duplicate-word-finder",
      "text-to-slug"
    ],
    "maker": [
      "stl-viewer",
      "stl-dimensions-checker",
      "stl-volume-calculator",
      "filament-length-calculator",
      "filament-weight-calculator",
      "filament-cost-calculator",
      "3d-print-cost-calculator",
      "print-time-cost-calculator",
      "resin-volume-calculator",
      "resin-cost-calculator",
      "layer-height-calculator",
      "steps-per-mm-calculator",
      "flow-rate-calculator",
      "extrusion-multiplier-calculator",
      "e-steps-calculator",
      "nozzle-flow-calculator",
      "model-scale-calculator",
      "support-angle-calculator",
      "infill-material-estimator",
      "filament-remaining-calculator"
    ]
  }
} as const;

const ui = {
  es: {
    local: 'Procesamiento local',
    input: 'Entrada',
    output: 'Resultado',
    insight: 'CONVIENE SABERLO',
    faq: 'En resumen',
    privacy: 'PRIVACIDAD POR DISEÑO',
    privacyTitle: 'El contenido permanece en el navegador',
    privacyBody: 'La operación se realiza localmente en la página sin necesidad de enviar el contenido a UtilityLake.',
    q1: '¿Qué hace exactamente?',
    q2: '¿Dónde se procesa?',
    a2: 'El procesamiento se realiza localmente en el navegador.'
  },
  'pt-BR': {
    local: 'Processamento local',
    input: 'Entrada',
    output: 'Resultado',
    insight: 'BOM SABER',
    faq: 'Em resumo',
    privacy: 'PRIVACIDADE POR DESIGN',
    privacyTitle: 'O conteúdo permanece no navegador',
    privacyBody: 'A operação é realizada localmente na página sem necessidade de enviar o conteúdo à UtilityLake.',
    q1: 'O que exatamente a ferramenta faz?',
    q2: 'Onde o processamento acontece?',
    a2: 'O processamento é realizado localmente no navegador.'
  },
  de: {
    local: 'Lokale Verarbeitung',
    input: 'Eingabe',
    output: 'Ergebnis',
    insight: 'GUT ZU WISSEN',
    faq: 'Kurz erklärt',
    privacy: 'DATENSCHUTZ VON ANFANG AN',
    privacyTitle: 'Der Inhalt bleibt im Browser',
    privacyBody: 'Die Verarbeitung erfolgt lokal auf der Seite, ohne dass Inhalte an UtilityLake gesendet werden müssen.',
    q1: 'Was macht das Werkzeug genau?',
    q2: 'Wo findet die Verarbeitung statt?',
    a2: 'Die Verarbeitung erfolgt lokal im Browser.'
  },
  fr: {
    local: 'Traitement local',
    input: 'Entrée',
    output: 'Résultat',
    insight: 'BON À SAVOIR',
    faq: 'En bref',
    privacy: 'CONFIDENTIALITÉ INTÉGRÉE',
    privacyTitle: 'Le contenu reste dans le navigateur',
    privacyBody: 'L’opération est effectuée localement dans la page sans qu’il soit nécessaire d’envoyer le contenu à UtilityLake.',
    q1: 'Que fait exactement cet outil ?',
    q2: 'Où le traitement est-il effectué ?',
    a2: 'Le traitement est effectué localement dans le navigateur.'
  }
} as const;

const groupText = {
  encoding: {
    family: 'converter',
    kicker: {
      es: 'LÓGICA DE CODIFICACIÓN',
      'pt-BR': 'LÓGICA DE CODIFICAÇÃO',
      de: 'KODIERUNGSLOGIK',
      fr: 'LOGIQUE D’ENCODAGE'
    },
    intro: {
      es: 'Realiza esta operación directamente en el navegador con una transformación local y un resultado inmediato.',
      'pt-BR': 'Realize esta operação diretamente no navegador com transformação local e resultado imediato.',
      de: 'Führe diese Operation direkt im Browser mit lokaler Verarbeitung und sofortigem Ergebnis aus.',
      fr: 'Effectuez cette opération directement dans le navigateur avec un traitement local et un résultat immédiat.'
    },
    insightTitle: {
      es: 'Codificación y cifrado no son lo mismo',
      'pt-BR': 'Codificação e criptografia não são a mesma coisa',
      de: 'Kodierung und Verschlüsselung sind nicht dasselbe',
      fr: 'Encodage et chiffrement ne sont pas la même chose'
    },
    insightBody: {
      es: 'Comprueba siempre el formato de entrada y el objetivo del proceso: codificar, convertir, resumir con hash y cifrar resuelven problemas distintos.',
      'pt-BR': 'Verifique sempre o formato de entrada e o objetivo do processo: codificar, converter, gerar hash e criptografar resolvem problemas diferentes.',
      de: 'Prüfe stets Eingabeformat und Zweck: Kodieren, Konvertieren, Hashen und Verschlüsseln lösen unterschiedliche Aufgaben.',
      fr: 'Vérifiez toujours le format d’entrée et l’objectif : encoder, convertir, hacher et chiffrer répondent à des besoins différents.'
    }
  },
  units: {
    family: 'converter',
    kicker: {
      es: 'LÓGICA DE CONVERSIÓN',
      'pt-BR': 'LÓGICA DE CONVERSÃO',
      de: 'UMRECHNUNGSLOGIK',
      fr: 'LOGIQUE DE CONVERSION'
    },
    intro: {
      es: 'Convierte un valor entre unidades compatibles utilizando factores de conversión coherentes.',
      'pt-BR': 'Converta um valor entre unidades compatíveis usando fatores de conversão coerentes.',
      de: 'Rechne einen Wert mit konsistenten Umrechnungsfaktoren zwischen kompatiblen Einheiten um.',
      fr: 'Convertissez une valeur entre unités compatibles à l’aide de facteurs de conversion cohérents.'
    },
    insightTitle: {
      es: 'La unidad de origen determina la interpretación del valor',
      'pt-BR': 'A unidade de origem determina a interpretação do valor',
      de: 'Die Ausgangseinheit bestimmt die Bedeutung des Werts',
      fr: 'L’unité source détermine l’interprétation de la valeur'
    },
    insightBody: {
      es: 'Selecciona correctamente la unidad inicial y la unidad de destino antes de interpretar el resultado.',
      'pt-BR': 'Selecione corretamente a unidade inicial e a unidade de destino antes de interpretar o resultado.',
      de: 'Wähle Ausgangs- und Zieleinheit korrekt aus, bevor du das Ergebnis interpretierst.',
      fr: 'Choisissez correctement l’unité source et l’unité cible avant d’interpréter le résultat.'
    }
  },
  text: {
    family: 'text',
    kicker: {
      es: 'CÓMO FUNCIONA',
      'pt-BR': 'COMO FUNCIONA',
      de: 'SO FUNKTIONIERT ES',
      fr: 'COMMENT ÇA FONCTIONNE'
    },
    intro: {
      es: 'Analiza o transforma el texto directamente en el navegador sin modificar el original introducido.',
      'pt-BR': 'Analise ou transforme o texto diretamente no navegador sem modificar o conteúdo original inserido.',
      de: 'Analysiere oder transformiere Text direkt im Browser, ohne die eingegebene Quelle zu verändern.',
      fr: 'Analysez ou transformez le texte directement dans le navigateur sans modifier la source saisie.'
    },
    insightTitle: {
      es: 'El resultado depende de cómo se interpreta el texto',
      'pt-BR': 'O resultado depende de como o texto é interpretado',
      de: 'Das Ergebnis hängt davon ab, wie der Text interpretiert wird',
      fr: 'Le résultat dépend de la manière dont le texte est interprété'
    },
    insightBody: {
      es: 'Espacios, saltos de línea, mayúsculas, puntuación y caracteres Unicode pueden influir en determinadas operaciones.',
      'pt-BR': 'Espaços, quebras de linha, maiúsculas, pontuação e caracteres Unicode podem influenciar determinadas operações.',
      de: 'Leerzeichen, Zeilenumbrüche, Groß-/Kleinschreibung, Satzzeichen und Unicode-Zeichen können bestimmte Operationen beeinflussen.',
      fr: 'Espaces, sauts de ligne, casse, ponctuation et caractères Unicode peuvent influencer certaines opérations.'
    }
  },
  maker: {
    family: 'calculator',
    kicker: {
      es: 'CÓMO SE CALCULA',
      'pt-BR': 'COMO É CALCULADO',
      de: 'SO WIRD ES BERECHNET',
      fr: 'COMMENT LE CALCUL EST EFFECTUÉ'
    },
    intro: {
      es: 'Calcula o estima este parámetro de fabricación 3D a partir de las medidas y ajustes introducidos.',
      'pt-BR': 'Calcule ou estime este parâmetro de fabricação 3D a partir das medidas e configurações informadas.',
      de: 'Berechne oder schätze diesen 3D-Druck-Parameter aus den eingegebenen Maßen und Einstellungen.',
      fr: 'Calculez ou estimez ce paramètre d’impression 3D à partir des mesures et réglages saisis.'
    },
    insightTitle: {
      es: 'Los valores reales pueden variar según máquina y material',
      'pt-BR': 'Os valores reais podem variar conforme máquina e material',
      de: 'Reale Werte können je nach Maschine und Material abweichen',
      fr: 'Les valeurs réelles peuvent varier selon la machine et le matériau'
    },
    insightBody: {
      es: 'Usa el resultado como referencia y verifica los parámetros específicos de tu impresora, filamento, resina o modelo.',
      'pt-BR': 'Use o resultado como referência e verifique os parâmetros específicos da sua impressora, filamento, resina ou modelo.',
      de: 'Nutze das Ergebnis als Richtwert und prüfe die spezifischen Parameter deines Druckers, Filaments, Harzes oder Modells.',
      fr: 'Utilisez le résultat comme repère et vérifiez les paramètres propres à votre imprimante, filament, résine ou modèle.'
    }
  }
} as const;

function lowerFirst(value: string): string {
  return value.length ? value.charAt(0).toLocaleLowerCase() + value.slice(1) : value;
}

function makeIntro(locale: Locale, group: Group, title: string): string {
  const base = groupText[group].intro[locale];
  if (group === 'units' || group === 'maker') return base;

  if (locale === 'es') return `${base} Acción: ${lowerFirst(title)}.`;
  if (locale === 'pt-BR') return `${base} Ação: ${lowerFirst(title)}.`;
  if (locale === 'de') return `${base} Vorgang: ${title}.`;
  return `${base} Opération : ${lowerFirst(title)}.`;
}

function build(locale: Locale, group: Group, id: string): ToolEditorial {
  const t = ui[locale];
  const g = groupText[group];
  const title = data.titles[id as keyof typeof data.titles][locale];

  return {
    family: g.family,
    reviewed: false,
    kicker: g.kicker[locale],
    title,
    intro: makeIntro(locale, group, title),
    facts: [t.input, t.output, t.local],
    visual: {
      kind: 'flow',
      nodes: [t.input, title, t.output],
      caption: `${t.input} → ${title} → ${t.output}`
    },
    insightLabel: t.insight,
    insightTitle: g.insightTitle[locale],
    insightBody: g.insightBody[locale],
    privacyLabel: t.privacy,
    privacyTitle: t.privacyTitle,
    privacyBody: t.privacyBody,
    faqTitle: t.faq,
    faq: [
      { question: t.q1, answer: makeIntro(locale, group, title) },
      { question: t.q2, answer: t.a2 }
    ],
    next: []
  };
}

function make(locale: Locale, group: Group): Partial<Record<string, ToolEditorial>> {
  return Object.fromEntries(
    data.groups[group].map((id) => [id, build(locale, group, id)])
  );
}

export const fastEncodingEs = make('es', 'encoding');
export const fastEncodingPtBr = make('pt-BR', 'encoding');
export const fastEncodingDe = make('de', 'encoding');
export const fastEncodingFr = make('fr', 'encoding');

export const fastUnitsEs = make('es', 'units');
export const fastUnitsPtBr = make('pt-BR', 'units');
export const fastUnitsDe = make('de', 'units');
export const fastUnitsFr = make('fr', 'units');

export const fastTextEs = make('es', 'text');
export const fastTextPtBr = make('pt-BR', 'text');
export const fastTextDe = make('de', 'text');
export const fastTextFr = make('fr', 'text');

export const fastMakerEs = make('es', 'maker');
export const fastMakerPtBr = make('pt-BR', 'maker');
export const fastMakerDe = make('de', 'maker');
export const fastMakerFr = make('fr', 'maker');
