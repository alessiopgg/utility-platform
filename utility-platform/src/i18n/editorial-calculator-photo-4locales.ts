import type { ToolEditorial } from './tool-editorial.ts';

type Locale = 'es' | 'pt-BR' | 'de' | 'fr';

type Row = {
  id: string;
  formula: string;
  es: [string, string, string, string, string];
  'pt-BR': [string, string, string, string, string];
  de: [string, string, string, string, string];
  fr: [string, string, string, string, string];
};

const rows: Row[] = [
  {
    "id": "dpi-calculator",
    "formula": "pixels ÷ inches",
    "es": [
      "Calcular DPI a partir de píxeles y tamaño de impresión",
      "Calcula la densidad de impresión dividiendo los píxeles disponibles entre el tamaño físico en pulgadas.",
      "3000 px sobre 10 in = 300 DPI",
      "Los DPI dependen del tamaño físico de salida",
      "La misma imagen tiene un DPI efectivo diferente si se imprime a un tamaño distinto."
    ],
    "pt-BR": [
      "Calcular DPI a partir de pixels e tamanho de impressão",
      "Calcule a densidade de impressão dividindo os pixels disponíveis pelo tamanho físico em polegadas.",
      "3000 px em 10 in = 300 DPI",
      "O DPI depende do tamanho físico de saída",
      "A mesma imagem tem DPI efetivo diferente quando impressa em outro tamanho."
    ],
    "de": [
      "DPI aus Pixeln und Druckgröße berechnen",
      "Berechne die Druckauflösung, indem du die verfügbaren Pixel durch die physische Größe in Zoll teilst.",
      "3000 px auf 10 in = 300 DPI",
      "DPI hängt von der physischen Ausgabegröße ab",
      "Dasselbe Bild hat bei unterschiedlicher Druckgröße eine andere effektive DPI."
    ],
    "fr": [
      "Calculer les DPI à partir des pixels et de la taille d’impression",
      "Calculez la densité d’impression en divisant les pixels disponibles par la taille physique en pouces.",
      "3000 px sur 10 in = 300 DPI",
      "Les DPI dépendent de la taille physique de sortie",
      "La même image a des DPI effectifs différents lorsqu’elle est imprimée à une autre taille."
    ]
  },
  {
    "id": "ppi-calculator",
    "formula": "pixels ÷ inches",
    "es": [
      "Calcular píxeles por pulgada",
      "Calcula la densidad de píxeles dividiendo la cantidad de píxeles entre el ancho físico en pulgadas.",
      "3840 px sobre 15,6 in ≈ 246 PPI",
      "El PPI describe la densidad de píxeles",
      "Más píxeles en la misma anchura física producen una densidad mayor."
    ],
    "pt-BR": [
      "Calcular pixels por polegada",
      "Calcule a densidade de pixels dividindo a quantidade de pixels pela largura física em polegadas.",
      "3840 px em 15,6 in ≈ 246 PPI",
      "O PPI descreve a densidade de pixels",
      "Mais pixels na mesma largura física produzem maior densidade."
    ],
    "de": [
      "Pixel pro Zoll berechnen",
      "Berechne die Pixeldichte, indem du die Pixelzahl durch die physische Breite in Zoll teilst.",
      "3840 px auf 15,6 in ≈ 246 PPI",
      "PPI beschreibt die Pixeldichte",
      "Mehr Pixel auf derselben physischen Breite ergeben eine höhere Pixeldichte."
    ],
    "fr": [
      "Calculer les pixels par pouce",
      "Calculez la densité de pixels en divisant le nombre de pixels par la largeur physique en pouces.",
      "3840 px sur 15,6 in ≈ 246 PPI",
      "Le PPI décrit la densité de pixels",
      "Plus de pixels sur la même largeur physique donnent une densité plus élevée."
    ]
  },
  {
    "id": "print-size-calculator",
    "formula": "pixels ÷ DPI",
    "es": [
      "Calcular el tamaño de impresión a partir de píxeles y DPI",
      "Convierte dimensiones en píxeles y una resolución de impresión elegida en tamaño físico.",
      "6000 px a 300 DPI = 20 pulgadas",
      "Más DPI significa una impresión más pequeña con el mismo número de píxeles",
      "Las dimensiones en píxeles son fijas; la densidad elegida determina el tamaño físico."
    ],
    "pt-BR": [
      "Calcular o tamanho de impressão a partir de pixels e DPI",
      "Converta dimensões em pixels e uma resolução de impressão escolhida em tamanho físico.",
      "6000 px a 300 DPI = 20 polegadas",
      "Mais DPI significa uma impressão menor com a mesma quantidade de pixels",
      "As dimensões em pixels são fixas; a densidade escolhida determina o tamanho físico."
    ],
    "de": [
      "Druckgröße aus Pixeln und DPI berechnen",
      "Wandle Pixelabmessungen und eine gewählte Druckauflösung in eine physische Größe um.",
      "6000 px bei 300 DPI = 20 Zoll",
      "Höhere DPI bedeuten bei gleicher Pixelzahl einen kleineren Druck",
      "Die Pixelabmessungen bleiben fest; die gewählte Dichte bestimmt die physische Größe."
    ],
    "fr": [
      "Calculer la taille d’impression à partir des pixels et des DPI",
      "Convertissez les dimensions en pixels et une résolution d’impression choisie en taille physique.",
      "6000 px à 300 DPI = 20 pouces",
      "Plus de DPI signifie une impression plus petite pour le même nombre de pixels",
      "Les dimensions en pixels restent fixes ; la densité choisie détermine la taille physique."
    ]
  },
  {
    "id": "megapixel-calculator",
    "formula": "width × height ÷ 1,000,000",
    "es": [
      "Calcular los megapíxeles de una imagen",
      "Multiplica anchura y altura en píxeles y expresa el total en millones de píxeles.",
      "6000 × 4000 = 24 MP",
      "Los megapíxeles miden el número total de píxeles",
      "Los megapíxeles por sí solos no describen calidad óptica, ruido ni rango dinámico."
    ],
    "pt-BR": [
      "Calcular os megapixels de uma imagem",
      "Multiplique largura e altura em pixels e expresse o total em milhões de pixels.",
      "6000 × 4000 = 24 MP",
      "Megapixels medem a quantidade total de pixels",
      "Megapixels isoladamente não descrevem qualidade da lente, ruído ou faixa dinâmica."
    ],
    "de": [
      "Megapixel eines Bildes berechnen",
      "Multipliziere Breite und Höhe in Pixeln und gib die Gesamtzahl in Millionen Pixeln an.",
      "6000 × 4000 = 24 MP",
      "Megapixel messen die gesamte Pixelzahl",
      "Megapixel allein beschreiben weder Objektivqualität noch Rauschen oder Dynamikumfang."
    ],
    "fr": [
      "Calculer les mégapixels d’une image",
      "Multipliez la largeur et la hauteur en pixels puis exprimez le total en millions de pixels.",
      "6000 × 4000 = 24 MP",
      "Les mégapixels mesurent le nombre total de pixels",
      "Les mégapixels seuls ne décrivent ni la qualité optique, ni le bruit, ni la plage dynamique."
    ]
  },
  {
    "id": "sensor-crop-factor-calculator",
    "formula": "43.2666 ÷ sensor diagonal",
    "es": [
      "Calcular el factor de recorte a partir del tamaño del sensor",
      "Compara la diagonal del sensor con la diagonal de referencia del formato 35 mm.",
      "Un sensor más pequeño produce un factor de recorte mayor",
      "El factor de recorte compara diagonales de sensor",
      "El cálculo utiliza la diagonal del sensor y no solo su anchura."
    ],
    "pt-BR": [
      "Calcular o fator de corte a partir do tamanho do sensor",
      "Compare a diagonal do sensor com a diagonal de referência do formato 35 mm.",
      "Um sensor menor produz fator de corte maior",
      "O fator de corte compara diagonais de sensores",
      "O cálculo usa a diagonal do sensor e não apenas sua largura."
    ],
    "de": [
      "Crop-Faktor aus der Sensorgröße berechnen",
      "Vergleiche die Sensordiagonale mit der Referenzdiagonale des 35-mm-Vollformats.",
      "Ein kleinerer Sensor ergibt einen größeren Crop-Faktor",
      "Der Crop-Faktor vergleicht Sensordiagonalen",
      "Die Berechnung verwendet die Diagonale und nicht nur die Sensorbreite."
    ],
    "fr": [
      "Calculer le facteur de recadrage à partir de la taille du capteur",
      "Comparez la diagonale du capteur à la diagonale de référence du format 35 mm.",
      "Un capteur plus petit produit un facteur de recadrage plus élevé",
      "Le facteur de recadrage compare les diagonales des capteurs",
      "Le calcul utilise la diagonale du capteur et non sa seule largeur."
    ]
  },
  {
    "id": "equivalent-focal-length-calculator",
    "formula": "focal length × crop factor",
    "es": [
      "Calcular la focal equivalente en formato completo",
      "Multiplica la distancia focal real por el factor de recorte para comparar el encuadre con full frame.",
      "35 mm × 1,5 = 52,5 mm equivalentes",
      "La focal equivalente describe el encuadre",
      "No cambia físicamente la distancia focal indicada en el objetivo."
    ],
    "pt-BR": [
      "Calcular a distância focal equivalente em full frame",
      "Multiplique a distância focal real pelo fator de corte para comparar o enquadramento com full frame.",
      "35 mm × 1,5 = 52,5 mm equivalentes",
      "A distância focal equivalente descreve o enquadramento",
      "Ela não altera fisicamente a distância focal indicada na lente."
    ],
    "de": [
      "Vollformat-äquivalente Brennweite berechnen",
      "Multipliziere die reale Brennweite mit dem Crop-Faktor, um den Bildwinkel mit Vollformat zu vergleichen.",
      "35 mm × 1,5 = 52,5 mm äquivalent",
      "Die äquivalente Brennweite beschreibt den Bildausschnitt",
      "Sie verändert die auf dem Objektiv angegebene Brennweite nicht physisch."
    ],
    "fr": [
      "Calculer la focale équivalente plein format",
      "Multipliez la focale réelle par le facteur de recadrage pour comparer le cadrage au plein format.",
      "35 mm × 1,5 = 52,5 mm équivalents",
      "La focale équivalente décrit le cadrage",
      "Elle ne modifie pas physiquement la focale inscrite sur l’objectif."
    ]
  },
  {
    "id": "depth-of-field-calculator",
    "formula": "hyperfocal geometry → near/far limits",
    "es": [
      "Estimar la profundidad de campo",
      "Estima los límites cercano y lejano de nitidez aceptable a partir de focal, apertura, distancia de enfoque y círculo de confusión.",
      "Apertura, focal y distancia de enfoque influyen en la profundidad de campo",
      "La profundidad de campo usa un criterio de nitidez aceptable",
      "El círculo de confusión representa un umbral perceptivo y no un límite físico totalmente nítido."
    ],
    "pt-BR": [
      "Estimar a profundidade de campo",
      "Estime os limites próximo e distante de nitidez aceitável usando distância focal, abertura, foco e círculo de confusão.",
      "Abertura, distância focal e distância de foco influenciam a profundidade de campo",
      "A profundidade de campo usa um critério de nitidez aceitável",
      "O círculo de confusão representa um limiar perceptivo, não uma fronteira física perfeitamente nítida."
    ],
    "de": [
      "Schärfentiefe schätzen",
      "Schätze Nah- und Ferngrenze akzeptabler Schärfe aus Brennweite, Blende, Fokusdistanz und Zerstreuungskreis.",
      "Blende, Brennweite und Fokusdistanz beeinflussen die Schärfentiefe",
      "Schärfentiefe basiert auf einem Kriterium akzeptabler Schärfe",
      "Der Zerstreuungskreis ist ein Wahrnehmungskriterium und keine harte physikalische Grenze."
    ],
    "fr": [
      "Estimer la profondeur de champ",
      "Estimez les limites proche et lointaine de netteté acceptable à partir de la focale, de l’ouverture, de la distance de mise au point et du cercle de confusion.",
      "Ouverture, focale et distance de mise au point influencent la profondeur de champ",
      "La profondeur de champ repose sur un critère de netteté acceptable",
      "Le cercle de confusion représente un seuil perceptif et non une frontière physique parfaitement nette."
    ]
  },
  {
    "id": "hyperfocal-distance-calculator",
    "formula": "f² ÷ (N × CoC) + f",
    "es": [
      "Calcular la distancia hiperfocal",
      "Calcula la distancia de enfoque que maximiza la profundidad de campo hacia el infinito.",
      "Focales más cortas y aperturas más cerradas reducen la distancia hiperfocal",
      "Enfocar a la hiperfocal maximiza la profundidad de campo lejana",
      "El resultado depende del círculo de confusión elegido."
    ],
    "pt-BR": [
      "Calcular a distância hiperfocal",
      "Calcule a distância de foco que maximiza a profundidade de campo em direção ao infinito.",
      "Distâncias focais menores e aberturas mais fechadas reduzem a hiperfocal",
      "Focar na hiperfocal maximiza a profundidade de campo distante",
      "O resultado depende do círculo de confusão escolhido."
    ],
    "de": [
      "Hyperfokaldistanz berechnen",
      "Berechne die Fokusdistanz, die die Schärfentiefe bis unendlich maximiert.",
      "Kürzere Brennweiten und kleinere Blendenöffnungen verringern die Hyperfokaldistanz",
      "Fokussieren auf die Hyperfokaldistanz maximiert die Fernschärfentiefe",
      "Das Ergebnis hängt vom gewählten Zerstreuungskreis ab."
    ],
    "fr": [
      "Calculer la distance hyperfocale",
      "Calculez la distance de mise au point qui maximise la profondeur de champ vers l’infini.",
      "Des focales plus courtes et des ouvertures plus fermées réduisent la distance hyperfocale",
      "Faire la mise au point à l’hyperfocale maximise la profondeur de champ lointaine",
      "Le résultat dépend du cercle de confusion choisi."
    ]
  },
  {
    "id": "exposure-calculator",
    "formula": "log₂(N²/t) − log₂(ISO/100)",
    "es": [
      "Calcular el valor de exposición EV100",
      "Combina apertura, tiempo de obturación e ISO para expresar la exposición como EV100.",
      "Apertura, obturación e ISO se combinan en un valor de exposición",
      "Un paso representa duplicar o reducir a la mitad la luz",
      "Ajustes equivalentes pueden intercambiar apertura y tiempo manteniendo una exposición similar."
    ],
    "pt-BR": [
      "Calcular o valor de exposição EV100",
      "Combine abertura, velocidade do obturador e ISO para expressar a exposição como EV100.",
      "Abertura, obturador e ISO se combinam em um valor de exposição",
      "Um stop representa dobrar ou reduzir pela metade a luz",
      "Configurações equivalentes podem trocar abertura e obturador mantendo exposição semelhante."
    ],
    "de": [
      "Belichtungswert EV100 berechnen",
      "Kombiniere Blende, Verschlusszeit und ISO, um die Belichtung als EV100 auszudrücken.",
      "Blende, Verschlusszeit und ISO ergeben gemeinsam einen Belichtungswert",
      "Eine Blendenstufe entspricht einer Verdopplung oder Halbierung der Lichtmenge",
      "Äquivalente Einstellungen können Blende und Zeit gegeneinander tauschen und die Belichtung ähnlich halten."
    ],
    "fr": [
      "Calculer la valeur d’exposition EV100",
      "Combinez ouverture, vitesse d’obturation et ISO pour exprimer l’exposition en EV100.",
      "Ouverture, obturation et ISO se combinent en une valeur d’exposition",
      "Un stop correspond à doubler ou diviser par deux la lumière",
      "Des réglages équivalents peuvent échanger ouverture et vitesse tout en conservant une exposition similaire."
    ]
  },
  {
    "id": "shutter-speed-calculator",
    "formula": "1 ÷ (focal length × crop factor)",
    "es": [
      "Estimar una velocidad de obturación a pulso",
      "Aplica la regla del recíproco ajustada por focal y factor de recorte para obtener una referencia de disparo a mano.",
      "50 mm en full frame → alrededor de 1/50 s",
      "La regla del recíproco es solo una guía",
      "Estabilización, técnica y movimiento del sujeto pueden exigir tiempos más rápidos o permitir tiempos más lentos."
    ],
    "pt-BR": [
      "Estimar uma velocidade de obturador para fotografar à mão",
      "Aplique a regra do recíproco ajustada por distância focal e fator de corte como referência para fotografar sem tripé.",
      "50 mm em full frame → cerca de 1/50 s",
      "A regra do recíproco é apenas uma orientação",
      "Estabilização, técnica e movimento do assunto podem exigir tempos mais rápidos ou permitir tempos mais lentos."
    ],
    "de": [
      "Freihand-Verschlusszeit schätzen",
      "Nutze die Kehrwertregel mit Brennweite und Crop-Faktor als Richtwert für Freihandaufnahmen.",
      "50 mm am Vollformat → etwa 1/50 s",
      "Die Kehrwertregel ist nur eine Faustregel",
      "Stabilisierung, Technik und Motivbewegung können kürzere oder auch längere Zeiten sinnvoll machen."
    ],
    "fr": [
      "Estimer une vitesse d’obturation à main levée",
      "Appliquez la règle de l’inverse ajustée à la focale et au facteur de recadrage comme repère pour la prise de vue à main levée.",
      "50 mm en plein format → environ 1/50 s",
      "La règle de l’inverse n’est qu’un repère",
      "Stabilisation, technique et mouvement du sujet peuvent imposer des vitesses plus rapides ou permettre des vitesses plus lentes."
    ]
  },
  {
    "id": "long-exposure-calculator",
    "formula": "base shutter × 2^stops",
    "es": [
      "Calcular el tiempo de exposición con filtro ND",
      "Calcula cómo aumenta el tiempo de obturación al añadir un filtro de densidad neutra de varios pasos.",
      "10 pasos multiplican el tiempo de exposición por 1024",
      "Cada paso ND duplica el tiempo necesario",
      "La relación exponencial hace que los filtros fuertes produzcan exposiciones muy largas."
    ],
    "pt-BR": [
      "Calcular o tempo de exposição com filtro ND",
      "Calcule como o tempo do obturador aumenta ao adicionar um filtro de densidade neutra de vários stops.",
      "10 stops multiplicam o tempo de exposição por 1024",
      "Cada stop ND dobra o tempo necessário",
      "A relação exponencial faz filtros fortes produzirem exposições muito longas."
    ],
    "de": [
      "Belichtungszeit mit ND-Filter berechnen",
      "Berechne, wie sich die Verschlusszeit durch einen Neutraldichtefilter mit mehreren Stufen verlängert.",
      "10 Stufen multiplizieren die Belichtungszeit mit 1024",
      "Jede ND-Stufe verdoppelt die nötige Belichtungszeit",
      "Die exponentielle Beziehung führt bei starken ND-Filtern zu sehr langen Belichtungen."
    ],
    "fr": [
      "Calculer le temps de pose avec un filtre ND",
      "Calculez l’allongement du temps d’obturation lorsqu’un filtre à densité neutre de plusieurs stops est ajouté.",
      "10 stops multiplient le temps de pose par 1024",
      "Chaque stop ND double le temps de pose nécessaire",
      "La relation exponentielle fait que les filtres ND puissants produisent des poses très longues."
    ]
  },
  {
    "id": "nd-filter-calculator",
    "formula": "log₂(target shutter ÷ base shutter)",
    "es": [
      "Calcular la intensidad necesaria de un filtro ND",
      "Compara el tiempo de obturación base con el objetivo para determinar cuántos pasos ND hacen falta.",
      "0,008 s → 8 s son aproximadamente 10 pasos",
      "La intensidad ND es logarítmica",
      "Duplicar el tiempo de exposición equivale a un paso adicional."
    ],
    "pt-BR": [
      "Calcular a intensidade necessária de um filtro ND",
      "Compare o tempo de obturador base com o desejado para determinar quantos stops ND são necessários.",
      "0,008 s → 8 s corresponde a aproximadamente 10 stops",
      "A intensidade ND é logarítmica",
      "Dobrar o tempo de exposição corresponde a um stop adicional."
    ],
    "de": [
      "Benötigte ND-Filterstärke berechnen",
      "Vergleiche Ausgangs- und Zielverschlusszeit, um die nötige Anzahl ND-Stufen zu bestimmen.",
      "0,008 s → 8 s sind ungefähr 10 Stufen",
      "ND-Stärke ist logarithmisch",
      "Eine Verdopplung der Belichtungszeit entspricht einer zusätzlichen Stufe."
    ],
    "fr": [
      "Calculer la puissance nécessaire d’un filtre ND",
      "Comparez la vitesse de base à la vitesse cible pour déterminer le nombre de stops ND requis.",
      "0,008 s → 8 s correspond à environ 10 stops",
      "La puissance ND est logarithmique",
      "Doubler le temps de pose correspond à un stop supplémentaire."
    ]
  },
  {
    "id": "field-of-view-calculator",
    "formula": "2 × atan(sensor ÷ (2 × focal))",
    "es": [
      "Calcular el ángulo de visión",
      "Calcula el campo angular a partir de la dimensión del sensor y la distancia focal.",
      "Sensores mayores o focales más cortas producen un campo más amplio",
      "El campo de visión depende de la dimensión del sensor usada",
      "Los campos horizontal, vertical y diagonal utilizan dimensiones de sensor diferentes."
    ],
    "pt-BR": [
      "Calcular o campo de visão angular",
      "Calcule o campo angular a partir da dimensão do sensor e da distância focal.",
      "Sensores maiores ou distâncias focais menores produzem campo mais amplo",
      "O campo de visão depende da dimensão do sensor utilizada",
      "Campos horizontal, vertical e diagonal usam dimensões diferentes do sensor."
    ],
    "de": [
      "Bildwinkel berechnen",
      "Berechne den Winkel des Sichtfelds aus Sensormaß und Brennweite.",
      "Größere Sensoren oder kürzere Brennweiten ergeben ein weiteres Sichtfeld",
      "Der Bildwinkel hängt von der verwendeten Sensordimension ab",
      "Horizontaler, vertikaler und diagonaler Bildwinkel verwenden unterschiedliche Sensormaße."
    ],
    "fr": [
      "Calculer le champ de vision angulaire",
      "Calculez l’angle de champ à partir de la dimension du capteur et de la focale.",
      "Des capteurs plus grands ou des focales plus courtes donnent un champ plus large",
      "Le champ de vision dépend de la dimension du capteur utilisée",
      "Les champs horizontal, vertical et diagonal utilisent des dimensions de capteur différentes."
    ]
  },
  {
    "id": "image-resolution-calculator",
    "formula": "width × height",
    "es": [
      "Calcular píxeles y megapíxeles",
      "Multiplica anchura y altura para obtener el número total de píxeles de una imagen.",
      "3840 × 2160 = 8.294.400 píxeles",
      "La resolución es bidimensional",
      "Duplicar anchura y altura cuadruplica el número total de píxeles."
    ],
    "pt-BR": [
      "Calcular pixels e megapixels",
      "Multiplique largura e altura para obter a quantidade total de pixels da imagem.",
      "3840 × 2160 = 8.294.400 pixels",
      "A resolução é bidimensional",
      "Dobrar largura e altura quadruplica a quantidade total de pixels."
    ],
    "de": [
      "Pixelzahl und Megapixel berechnen",
      "Multipliziere Breite und Höhe, um die gesamte Pixelzahl eines Bildes zu erhalten.",
      "3840 × 2160 = 8.294.400 Pixel",
      "Auflösung ist zweidimensional",
      "Eine Verdopplung von Breite und Höhe vervierfacht die gesamte Pixelzahl."
    ],
    "fr": [
      "Calculer les pixels et les mégapixels",
      "Multipliez largeur et hauteur pour obtenir le nombre total de pixels d’une image.",
      "3840 × 2160 = 8 294 400 pixels",
      "La résolution est bidimensionnelle",
      "Doubler largeur et hauteur quadruple le nombre total de pixels."
    ]
  },
  {
    "id": "print-resolution-checker",
    "formula": "pixels ÷ print inches",
    "es": [
      "Comprobar la resolución efectiva de impresión",
      "Calcula los DPI efectivos en cada dimensión comparando píxeles disponibles y tamaño físico de impresión.",
      "6000 px sobre 20 in = 300 DPI",
      "Los DPI horizontales y verticales pueden diferir",
      "Una diferencia puede indicar que la relación de aspecto de la imagen y la impresión no coincide exactamente."
    ],
    "pt-BR": [
      "Verificar a resolução efetiva de impressão",
      "Calcule o DPI efetivo em cada dimensão comparando pixels disponíveis e tamanho físico de impressão.",
      "6000 px em 20 in = 300 DPI",
      "O DPI horizontal e vertical podem ser diferentes",
      "Uma diferença pode indicar que as proporções da imagem e da impressão não coincidem perfeitamente."
    ],
    "de": [
      "Effektive Druckauflösung prüfen",
      "Berechne die effektive DPI je Richtung aus verfügbaren Pixeln und physischer Druckgröße.",
      "6000 px auf 20 in = 300 DPI",
      "Horizontale und vertikale DPI können unterschiedlich sein",
      "Eine Abweichung kann darauf hinweisen, dass Bild- und Druckseitenverhältnis nicht exakt übereinstimmen."
    ],
    "fr": [
      "Vérifier la résolution effective d’impression",
      "Calculez les DPI effectifs dans chaque dimension en comparant pixels disponibles et taille physique d’impression.",
      "6000 px sur 20 in = 300 DPI",
      "Les DPI horizontaux et verticaux peuvent différer",
      "Un écart peut indiquer que les rapports d’aspect de l’image et de l’impression ne correspondent pas exactement."
    ]
  },
  {
    "id": "aspect-ratio-calculator",
    "formula": "width:GCD : height:GCD",
    "es": [
      "Reducir dimensiones a una relación de aspecto",
      "Simplifica anchura y altura mediante su máximo común divisor para obtener la proporción.",
      "1920 × 1080 → 16:9",
      "La relación de aspecto ignora el tamaño absoluto",
      "1920×1080 y 1280×720 comparten la misma forma 16:9."
    ],
    "pt-BR": [
      "Reduzir dimensões a uma proporção de aspecto",
      "Simplifique largura e altura pelo máximo divisor comum para obter a proporção.",
      "1920 × 1080 → 16:9",
      "A proporção de aspecto ignora o tamanho absoluto",
      "1920×1080 e 1280×720 compartilham o mesmo formato 16:9."
    ],
    "de": [
      "Abmessungen auf ein Seitenverhältnis kürzen",
      "Kürze Breite und Höhe mit ihrem größten gemeinsamen Teiler, um das Verhältnis zu erhalten.",
      "1920 × 1080 → 16:9",
      "Das Seitenverhältnis ignoriert die absolute Größe",
      "1920×1080 und 1280×720 haben beide dasselbe 16:9-Format."
    ],
    "fr": [
      "Réduire des dimensions à un rapport d’aspect",
      "Simplifiez largeur et hauteur avec leur plus grand commun diviseur pour obtenir la proportion.",
      "1920 × 1080 → 16:9",
      "Le rapport d’aspect ignore la taille absolue",
      "1920×1080 et 1280×720 partagent la même forme 16:9."
    ]
  },
  {
    "id": "aspect-ratio-converter",
    "formula": "new height = new width × old height ÷ old width",
    "es": [
      "Redimensionar conservando la relación de aspecto",
      "Calcula una nueva dimensión a partir de la otra sin deformar la proporción original.",
      "1920×1080 → ancho 1280 da altura 720",
      "Cambiar una dimensión determina la otra",
      "Conservar la relación evita estirar o comprimir la imagen."
    ],
    "pt-BR": [
      "Redimensionar preservando a proporção de aspecto",
      "Calcule uma nova dimensão a partir da outra sem deformar a proporção original.",
      "1920×1080 → largura 1280 resulta em altura 720",
      "Alterar uma dimensão determina a outra",
      "Preservar a proporção evita esticar ou comprimir a imagem."
    ],
    "de": [
      "Größe unter Beibehaltung des Seitenverhältnisses ändern",
      "Berechne eine neue Abmessung aus der anderen, ohne das ursprüngliche Verhältnis zu verzerren.",
      "1920×1080 → Breite 1280 ergibt Höhe 720",
      "Ändert sich eine Dimension, bestimmt sie die andere",
      "Das Beibehalten des Verhältnisses verhindert ein Strecken oder Stauchen des Bildes."
    ],
    "fr": [
      "Redimensionner en conservant le rapport d’aspect",
      "Calculez une nouvelle dimension à partir de l’autre sans déformer la proportion d’origine.",
      "1920×1080 → largeur 1280 donne hauteur 720",
      "Modifier une dimension détermine l’autre",
      "Conserver le rapport évite d’étirer ou d’écraser l’image."
    ]
  },
  {
    "id": "video-bitrate-calculator",
    "formula": "file size(MB) × 8 ÷ duration(s)",
    "es": [
      "Estimar el bitrate medio de un vídeo",
      "Calcula la tasa media de datos a partir del tamaño del archivo y la duración.",
      "1000 MB durante 600 s ≈ 13,33 Mbps",
      "El bitrate es una tasa media de datos",
      "Un vídeo de bitrate variable puede usar tasas muy diferentes de un momento a otro."
    ],
    "pt-BR": [
      "Estimar o bitrate médio de um vídeo",
      "Calcule a taxa média de dados a partir do tamanho do arquivo e da duração.",
      "1000 MB por 600 s ≈ 13,33 Mbps",
      "Bitrate é uma taxa média de dados",
      "Um vídeo com bitrate variável pode usar taxas muito diferentes ao longo do tempo."
    ],
    "de": [
      "Durchschnittliche Videobitrate schätzen",
      "Berechne die mittlere Datenrate aus Dateigröße und Dauer.",
      "1000 MB über 600 s ≈ 13,33 Mbps",
      "Bitrate ist eine durchschnittliche Datenrate",
      "Video mit variabler Bitrate kann von Moment zu Moment deutlich unterschiedliche Raten verwenden."
    ],
    "fr": [
      "Estimer le débit vidéo moyen",
      "Calculez le débit moyen à partir de la taille du fichier et de la durée.",
      "1000 MB sur 600 s ≈ 13,33 Mbps",
      "Le débit est une moyenne de données par seconde",
      "Une vidéo à débit variable peut utiliser des débits très différents d’un instant à l’autre."
    ]
  },
  {
    "id": "video-file-size-calculator",
    "formula": "bitrate × duration ÷ 8",
    "es": [
      "Estimar el tamaño de un archivo de vídeo",
      "Calcula el tamaño aproximado a partir del bitrate medio y la duración.",
      "8 Mbps durante 600 s ≈ 600 MB",
      "Duración y bitrate afectan linealmente al tamaño",
      "Duplicar el bitrate medio o la duración aproximadamente duplica el tamaño del archivo."
    ],
    "pt-BR": [
      "Estimar o tamanho de um arquivo de vídeo",
      "Calcule o tamanho aproximado a partir do bitrate médio e da duração.",
      "8 Mbps por 600 s ≈ 600 MB",
      "Duração e bitrate afetam o tamanho linearmente",
      "Dobrar o bitrate médio ou a duração aproximadamente dobra o tamanho do arquivo."
    ],
    "de": [
      "Videodateigröße schätzen",
      "Berechne die ungefähre Dateigröße aus mittlerer Bitrate und Dauer.",
      "8 Mbps für 600 s ≈ 600 MB",
      "Dauer und Bitrate beeinflussen die Größe linear",
      "Eine Verdopplung von mittlerer Bitrate oder Dauer verdoppelt die Dateigröße ungefähr."
    ],
    "fr": [
      "Estimer la taille d’un fichier vidéo",
      "Calculez la taille approximative à partir du débit moyen et de la durée.",
      "8 Mbps pendant 600 s ≈ 600 MB",
      "La durée et le débit influencent linéairement la taille",
      "Doubler le débit moyen ou la durée double approximativement la taille du fichier."
    ]
  },
  {
    "id": "audio-file-size-calculator",
    "formula": "kbps × duration ÷ 8 ÷ 1000",
    "es": [
      "Estimar el tamaño de un archivo de audio",
      "Calcula el tamaño aproximado a partir del bitrate de audio y la duración.",
      "320 kbps durante 300 s ≈ 12 MB",
      "El bitrate representa datos por segundo",
      "Un bitrate mayor requiere proporcionalmente más almacenamiento a igual duración."
    ],
    "pt-BR": [
      "Estimar o tamanho de um arquivo de áudio",
      "Calcule o tamanho aproximado a partir do bitrate de áudio e da duração.",
      "320 kbps por 300 s ≈ 12 MB",
      "Bitrate representa dados por segundo",
      "Um bitrate maior exige proporcionalmente mais armazenamento para a mesma duração."
    ],
    "de": [
      "Audiodateigröße schätzen",
      "Berechne die ungefähre Dateigröße aus Audiobitrate und Dauer.",
      "320 kbps für 300 s ≈ 12 MB",
      "Bitrate beschreibt Daten pro Sekunde",
      "Eine höhere Bitrate benötigt bei gleicher Dauer proportional mehr Speicher."
    ],
    "fr": [
      "Estimer la taille d’un fichier audio",
      "Calculez la taille approximative à partir du débit audio et de la durée.",
      "320 kbps pendant 300 s ≈ 12 MB",
      "Le débit représente des données par seconde",
      "Un débit plus élevé nécessite proportionnellement plus de stockage à durée égale."
    ]
  },
  {
    "id": "timelapse-storage-calculator",
    "formula": "frames × average image size",
    "es": [
      "Estimar el almacenamiento de un timelapse",
      "Multiplica el número de fotogramas por el tamaño medio de cada imagen para estimar el espacio necesario.",
      "3000 × 25 MB = 75 GB",
      "Los timelapses RAW pueden crecer rápidamente",
      "Miles de archivos fuente suelen requerir mucho más espacio que el vídeo final renderizado."
    ],
    "pt-BR": [
      "Estimar o armazenamento de um timelapse",
      "Multiplique a quantidade de quadros pelo tamanho médio de cada imagem para estimar o espaço necessário.",
      "3000 × 25 MB = 75 GB",
      "Timelapses em RAW podem crescer rapidamente",
      "Milhares de arquivos-fonte geralmente exigem muito mais espaço que o vídeo final renderizado."
    ],
    "de": [
      "Speicherbedarf eines Timelapse schätzen",
      "Multipliziere die Bildanzahl mit der durchschnittlichen Dateigröße, um den Speicherbedarf zu schätzen.",
      "3000 × 25 MB = 75 GB",
      "RAW-Timelapses können schnell sehr groß werden",
      "Tausende Quelldateien benötigen oft deutlich mehr Speicher als das fertige gerenderte Video."
    ],
    "fr": [
      "Estimer le stockage nécessaire pour un timelapse",
      "Multipliez le nombre d’images par la taille moyenne de chaque fichier pour estimer l’espace nécessaire.",
      "3000 × 25 MB = 75 GB",
      "Les timelapses RAW peuvent grossir très vite",
      "Des milliers d’images source nécessitent souvent bien plus d’espace que la vidéo finale rendue."
    ]
  },
  {
    "id": "timelapse-interval-calculator",
    "formula": "real duration ÷ (video duration × fps)",
    "es": [
      "Calcular el intervalo de captura de un timelapse",
      "Calcula cuántos fotogramas requiere el vídeo final y distribúyelos a lo largo de la duración real del evento.",
      "20 s a 30 fps requieren 600 fotogramas",
      "Duración final y FPS determinan el número de fotogramas",
      "El intervalo de captura reparte esos fotogramas a lo largo del tiempo real."
    ],
    "pt-BR": [
      "Calcular o intervalo de captura de um timelapse",
      "Calcule quantos quadros o vídeo final exige e distribua-os ao longo da duração real do evento.",
      "20 s a 30 fps exigem 600 quadros",
      "Duração final e FPS determinam a quantidade de quadros",
      "O intervalo de captura distribui esses quadros ao longo do tempo real."
    ],
    "de": [
      "Aufnahmeintervall eines Timelapse berechnen",
      "Berechne die benötigte Bildanzahl des fertigen Videos und verteile sie über die reale Ereignisdauer.",
      "20 s bei 30 fps benötigen 600 Bilder",
      "Enddauer und FPS bestimmen die Bildanzahl",
      "Das Aufnahmeintervall verteilt diese Bilder über die reale Dauer des Ereignisses."
    ],
    "fr": [
      "Calculer l’intervalle de prise de vue d’un timelapse",
      "Calculez le nombre d’images nécessaire à la vidéo finale puis répartissez-les sur la durée réelle de l’événement.",
      "20 s à 30 fps nécessitent 600 images",
      "La durée finale et les FPS déterminent le nombre d’images",
      "L’intervalle de capture répartit ces images sur la durée réelle de l’événement."
    ]
  },
  {
    "id": "storage-capacity-calculator",
    "formula": "storage(GB) × 1000 ÷ file size(MB)",
    "es": [
      "Estimar cuántos archivos caben en un almacenamiento",
      "Divide la capacidad disponible por el tamaño medio de cada archivo para estimar cuántos caben.",
      "128 GB con archivos de 25 MB ≈ 5120 archivos",
      "Es una estimación basada en unidades decimales",
      "La capacidad realmente utilizable puede ser menor por formato del dispositivo y sistema de archivos."
    ],
    "pt-BR": [
      "Estimar quantos arquivos cabem em um armazenamento",
      "Divida a capacidade disponível pelo tamanho médio de cada arquivo para estimar quantos cabem.",
      "128 GB com arquivos de 25 MB ≈ 5120 arquivos",
      "É uma estimativa baseada em unidades decimais",
      "A capacidade realmente utilizável pode ser menor por causa da formatação e do sistema de arquivos."
    ],
    "de": [
      "Schätzen, wie viele Dateien in einen Speicher passen",
      "Teile die verfügbare Kapazität durch die durchschnittliche Dateigröße, um die mögliche Dateianzahl zu schätzen.",
      "128 GB mit 25-MB-Dateien ≈ 5120 Dateien",
      "Dies ist eine Schätzung mit dezimalen Speichereinheiten",
      "Die tatsächlich nutzbare Kapazität kann wegen Formatierung und Dateisystem geringer sein."
    ],
    "fr": [
      "Estimer combien de fichiers tiennent dans un stockage",
      "Divisez la capacité disponible par la taille moyenne des fichiers pour estimer combien peuvent y tenir.",
      "128 GB avec fichiers de 25 MB ≈ 5120 fichiers",
      "Il s’agit d’une estimation en unités décimales",
      "La capacité réellement utilisable peut être plus faible à cause du formatage et du système de fichiers."
    ]
  },
  {
    "id": "raw-storage-calculator",
    "formula": "photos × average RAW size ÷ 1000",
    "es": [
      "Estimar el almacenamiento para fotografías RAW",
      "Multiplica el número de fotos por el tamaño RAW medio para estimar el espacio necesario.",
      "1000 × 45 MB ≈ 45 GB",
      "El tamaño RAW varía según cámara y escena",
      "Resolución, profundidad de bits, compresión y contenido pueden cambiar el tamaño real de los archivos RAW."
    ],
    "pt-BR": [
      "Estimar o armazenamento para fotografias RAW",
      "Multiplique a quantidade de fotos pelo tamanho médio do RAW para estimar o espaço necessário.",
      "1000 × 45 MB ≈ 45 GB",
      "O tamanho do RAW varia conforme câmera e cena",
      "Resolução, profundidade de bits, compressão e conteúdo podem alterar o tamanho real dos arquivos RAW."
    ],
    "de": [
      "Speicherbedarf für RAW-Fotos schätzen",
      "Multipliziere die Fotoanzahl mit der durchschnittlichen RAW-Dateigröße, um den benötigten Speicher zu schätzen.",
      "1000 × 45 MB ≈ 45 GB",
      "RAW-Dateigröße variiert je nach Kamera und Motiv",
      "Auflösung, Bittiefe, Kompression und Bildinhalt können die reale RAW-Größe verändern."
    ],
    "fr": [
      "Estimer le stockage pour des photos RAW",
      "Multipliez le nombre de photos par la taille RAW moyenne pour estimer l’espace nécessaire.",
      "1000 × 45 MB ≈ 45 GB",
      "La taille RAW varie selon l’appareil et la scène",
      "Résolution, profondeur de bits, compression et contenu peuvent modifier la taille réelle des fichiers RAW."
    ]
  }
];

const ui = {
  es: {
    kicker: 'CÓMO SE CALCULA',
    facts: ['Resultado inmediato', 'Fórmula clara', 'Cálculo local'],
    values: 'Datos',
    result: 'Resultado',
    insight: 'CONVIENE SABERLO',
    faq: 'En resumen',
    logic: '¿Qué lógica utiliza la calculadora?',
    example: '¿Un ejemplo?'
  },
  'pt-BR': {
    kicker: 'COMO É CALCULADO',
    facts: ['Resultado imediato', 'Fórmula clara', 'Cálculo local'],
    values: 'Dados',
    result: 'Resultado',
    insight: 'BOM SABER',
    faq: 'Em resumo',
    logic: 'Qual lógica a calculadora usa?',
    example: 'Um exemplo?'
  },
  de: {
    kicker: 'SO WIRD ES BERECHNET',
    facts: ['Sofortiges Ergebnis', 'Klare Formel', 'Lokale Berechnung'],
    values: 'Daten',
    result: 'Ergebnis',
    insight: 'GUT ZU WISSEN',
    faq: 'Kurz erklärt',
    logic: 'Welche Logik verwendet der Rechner?',
    example: 'Ein Beispiel?'
  },
  fr: {
    kicker: 'COMMENT LE CALCUL EST EFFECTUÉ',
    facts: ['Résultat immédiat', 'Formule claire', 'Calcul local'],
    values: 'Données',
    result: 'Résultat',
    insight: 'BON À SAVOIR',
    faq: 'En bref',
    logic: 'Quelle logique utilise le calculateur ?',
    example: 'Un exemple ?'
  }
} as const;

function build(locale: Locale, row: Row): ToolEditorial {
  const [title, intro, example, insightTitle, insightBody] = row[locale];
  const t = ui[locale];

  return {
    family: 'calculator',
    reviewed: false,
    kicker: t.kicker,
    title,
    intro,
    facts: [...t.facts],
    visual: {
      kind: 'flow',
      nodes: [t.values, row.formula, t.result],
      caption: example
    },
    insightLabel: t.insight,
    insightTitle,
    insightBody,
    faqTitle: t.faq,
    faq: [
      { question: t.logic, answer: row.formula },
      { question: t.example, answer: example }
    ],
    next: []
  };
}

function make(locale: Locale): Partial<Record<string, ToolEditorial>> {
  return Object.fromEntries(rows.map((row) => [row.id, build(locale, row)]));
}

export const calculatorPhotoEditorialEs = make('es');
export const calculatorPhotoEditorialPtBr = make('pt-BR');
export const calculatorPhotoEditorialDe = make('de');
export const calculatorPhotoEditorialFr = make('fr');
