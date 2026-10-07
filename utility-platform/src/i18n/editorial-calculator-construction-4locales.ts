import type { ToolEditorial } from './tool-editorial.ts';

type Locale = 'es' | 'pt-BR' | 'de' | 'fr';
type L = Record<Locale, string>;

const l = (es: string, pt: string, de: string, fr: string): L => ({
  es,
  'pt-BR': pt,
  de,
  fr
});

const ui = {
  es: {
    kicker: 'CÓMO SE CALCULA',
    facts: ['Resultado inmediato', 'Fórmula clara', 'Cálculo local'],
    values: 'Medidas',
    result: 'Resultado',
    insight: 'CONVIENE SABERLO',
    faq: 'En resumen',
    logic: '¿Qué lógica utiliza la calculadora?',
    example: '¿Un ejemplo?'
  },
  'pt-BR': {
    kicker: 'COMO É CALCULADO',
    facts: ['Resultado imediato', 'Fórmula clara', 'Cálculo local'],
    values: 'Medidas',
    result: 'Resultado',
    insight: 'BOM SABER',
    faq: 'Em resumo',
    logic: 'Qual lógica a calculadora usa?',
    example: 'Um exemplo?'
  },
  de: {
    kicker: 'SO WIRD ES BERECHNET',
    facts: ['Sofortiges Ergebnis', 'Klare Formel', 'Lokale Berechnung'],
    values: 'Maße',
    result: 'Ergebnis',
    insight: 'GUT ZU WISSEN',
    faq: 'Kurz erklärt',
    logic: 'Welche Logik verwendet der Rechner?',
    example: 'Ein Beispiel?'
  },
  fr: {
    kicker: 'COMMENT LE CALCUL EST EFFECTUÉ',
    facts: ['Résultat immédiat', 'Formule claire', 'Calcul local'],
    values: 'Mesures',
    result: 'Résultat',
    insight: 'BON À SAVOIR',
    faq: 'En bref',
    logic: 'Quelle logique utilise le calculateur ?',
    example: 'Un exemple ?'
  }
} as const;

type Def = {
  id: string;
  formula: string;
  title: L;
  intro: L;
  example: L;
  insightTitle: L;
  insightBody: L;
};

const defs: Def[] = [];

function add(def: Def) {
  defs.push(def);
}

function areaWaste(id: string, name: L) {
  add({
    id,
    formula: 'length × width × (1 + waste ÷ 100)',
    title: l(
      `Estimar la superficie de ${name.es} incluyendo desperdicio`,
      `Estimar a área de ${name['pt-BR']} incluindo perdas`,
      `Fläche für ${name.de} einschließlich Verschnitt schätzen`,
      `Estimer la surface de ${name.fr} en incluant les pertes`
    ),
    intro: l(
      'Calcula el área rectangular y añade un porcentaje para cortes, desperdicio o material de reserva.',
      'Calcule a área retangular e adicione uma porcentagem para cortes, perdas ou material de reserva.',
      'Berechne die rechteckige Fläche und addiere einen Zuschlag für Zuschnitte, Verschnitt oder Reservematerial.',
      'Calculez la surface rectangulaire et ajoutez un pourcentage pour les coupes, les pertes ou le matériau de réserve.'
    ),
    example: l(
      '5 m × 4 m con 10% de desperdicio → 22 m²',
      '5 m × 4 m com 10% de perdas → 22 m²',
      '5 m × 4 m mit 10 % Verschnitt → 22 m²',
      '5 m × 4 m avec 10 % de pertes → 22 m²'
    ),
    insightTitle: l(
      'El margen se añade después de calcular el área base',
      'A margem de perdas é adicionada após calcular a área base',
      'Der Verschnitt wird nach der Grundfläche addiert',
      'La marge de perte est ajoutée après le calcul de la surface de base'
    ),
    insightBody: l(
      'El porcentaje extra ayuda a cubrir cortes y piezas inutilizables, pero no cambia el área real.',
      'A porcentagem extra ajuda a considerar cortes e peças inutilizáveis, mas não altera a área real.',
      'Der zusätzliche Prozentsatz berücksichtigt Zuschnitte und unbrauchbare Stücke, verändert aber nicht die tatsächliche Fläche.',
      'Le pourcentage supplémentaire tient compte des coupes et des chutes inutilisables, sans modifier la surface réelle.'
    )
  });
}

function volumeMass(id: string, name: L) {
  add({
    id,
    formula: 'volume = L × W × D; mass = volume × density',
    title: l(
      `Estimar volumen y masa de ${name.es}`,
      `Estimar volume e massa de ${name['pt-BR']}`,
      `Volumen und Masse von ${name.de} schätzen`,
      `Estimer le volume et la masse de ${name.fr}`
    ),
    intro: l(
      'Calcula el volumen del material a partir de las dimensiones y estima la masa usando la densidad seleccionada.',
      'Calcule o volume do material pelas dimensões e estime a massa usando a densidade selecionada.',
      'Berechne das Materialvolumen aus den Abmessungen und schätze die Masse mit der gewählten Dichte.',
      'Calculez le volume du matériau à partir des dimensions et estimez la masse avec la densité choisie.'
    ),
    example: l(
      'La masa cambia directamente con la densidad utilizada.',
      'A massa varia diretamente com a densidade utilizada.',
      'Die Masse ändert sich direkt mit der angenommenen Dichte.',
      'La masse varie directement avec la densité retenue.'
    ),
    insightTitle: l(
      'La densidad es una estimación',
      'A densidade é uma estimativa',
      'Die Dichte ist eine Annahme',
      'La densité est une estimation'
    ),
    insightBody: l(
      'La densidad real puede variar según composición, humedad y compactación.',
      'A densidade real pode variar com composição, umidade e compactação.',
      'Die tatsächliche Materialdichte kann je nach Zusammensetzung, Feuchtigkeit und Verdichtung variieren.',
      'La densité réelle peut varier selon la composition, l’humidité et le compactage.'
    )
  });
}

function masonry(id: string, name: L) {
  add({
    id,
    formula: 'wall area ÷ unit face area × (1 + waste)',
    title: l(
      `Estimar cuántas unidades de ${name.es} necesita una pared`,
      `Estimar quantas unidades de ${name['pt-BR']} uma parede precisa`,
      `Benötigte ${name.de} für eine Wand schätzen`,
      `Estimer le nombre d’unités de ${name.fr} nécessaires pour un mur`
    ),
    intro: l(
      'Compara el área de la pared con el área frontal de cada unidad e incluye un margen de desperdicio.',
      'Compare a área da parede com a área frontal de cada unidade e inclua uma margem de perdas.',
      'Vergleiche die Wandfläche mit der sichtbaren Fläche einer Einheit und berücksichtige Verschnitt.',
      'Comparez la surface du mur à la surface de face de chaque unité et ajoutez une marge de perte.'
    ),
    example: l(
      'La cantidad final se redondea hacia arriba a unidades completas.',
      'A quantidade final é arredondada para cima em unidades inteiras.',
      'Die Endmenge wird auf ganze Einheiten aufgerundet.',
      'La quantité finale est arrondie à l’unité entière supérieure.'
    ),
    insightTitle: l(
      'La estimación utiliza el área frontal',
      'A estimativa usa a área frontal',
      'Die Schätzung verwendet die sichtbare Fläche',
      'L’estimation utilise la surface de face'
    ),
    insightBody: l(
      'Las juntas, aberturas y patrones reales de colocación pueden cambiar la cantidad necesaria.',
      'Juntas, aberturas e padrões reais de instalação podem alterar a quantidade necessária.',
      'Mörtelfugen, Öffnungen und reale Verlegemuster können die benötigte Menge verändern.',
      'Les joints, ouvertures et schémas de pose réels peuvent modifier la quantité nécessaire.'
    )
  });
}

add({
  id: 'concrete-calculator',
  formula: 'length × width × depth × (1 + waste)',
  title: l('Estimar hormigón para un vertido rectangular','Estimar concreto para uma concretagem retangular','Betonmenge für einen rechteckigen Guss schätzen','Estimer le béton pour un coulage rectangulaire'),
  intro: l('Calcula el volumen a partir de longitud, anchura y espesor, y añade un margen de desperdicio.','Calcule o volume por comprimento, largura e espessura e adicione uma margem de perdas.','Berechne das Volumen aus Länge, Breite und Dicke und addiere einen Verschnittzuschlag.','Calculez le volume à partir de la longueur, de la largeur et de l’épaisseur, puis ajoutez une marge de perte.'),
  example: l('5 × 3 × 0,15 m = 2,25 m³ antes del margen','5 × 3 × 0,15 m = 2,25 m³ antes da margem','5 × 3 × 0,15 m = 2,25 m³ vor Zuschlag','5 × 3 × 0,15 m = 2,25 m³ avant la marge'),
  insightTitle: l('Pequeños cambios de espesor afectan mucho al volumen','Pequenas mudanças de espessura afetam bastante o volume','Kleine Änderungen der Dicke beeinflussen das Volumen stark','De petites variations d’épaisseur peuvent fortement changer le volume'),
  insightBody: l('El espesor se aplica a toda la superficie, por lo que unos centímetros extra pueden requerir mucho más hormigón.','A espessura é aplicada a toda a área, então poucos centímetros extras podem exigir muito mais concreto.','Die Dicke wirkt über die gesamte Fläche, daher können wenige zusätzliche Zentimeter deutlich mehr Beton erfordern.','L’épaisseur s’applique à toute la surface ; quelques centimètres supplémentaires peuvent donc demander beaucoup plus de béton.')
});

add({
  id: 'cement-calculator',
  formula: 'volume × kg/m³ ÷ bag size',
  title: l('Estimar masa de cemento y número de sacos','Estimar massa de cimento e número de sacos','Zementmasse und Sackanzahl schätzen','Estimer la masse de ciment et le nombre de sacs'),
  intro: l('Convierte el volumen de hormigón en masa de cemento mediante una relación kg/m³ y divide por el tamaño del saco.','Converta o volume de concreto em massa de cimento usando uma relação kg/m³ e divida pelo tamanho do saco.','Wandle Betonvolumen mit einem kg/m³-Wert in Zementmasse um und teile durch die Sackgröße.','Convertissez le volume de béton en masse de ciment avec une valeur en kg/m³, puis divisez par la taille du sac.'),
  example: l('1 m³ × 300 kg/m³ con sacos de 25 kg → 12 sacos','1 m³ × 300 kg/m³ com sacos de 25 kg → 12 sacos','1 m³ × 300 kg/m³ mit 25-kg-Säcken → 12 Säcke','1 m³ × 300 kg/m³ avec sacs de 25 kg → 12 sacs'),
  insightTitle: l('El cemento es solo un componente del hormigón','O cimento é apenas um componente do concreto','Zement ist nur ein Bestandteil von Beton','Le ciment n’est qu’un composant du béton'),
  insightBody: l('La relación kg/m³ depende de la mezcla prevista y no equivale a la masa total del hormigón.','A relação kg/m³ depende do traço e não corresponde à massa total do concreto.','Der kg/m³-Wert hängt von der vorgesehenen Mischung ab und entspricht nicht der Gesamtmasse des Betons.','La valeur kg/m³ dépend du mélange prévu et ne correspond pas à la masse totale du béton.')
});

masonry('brick-calculator', l('ladrillos','tijolos','Ziegel','briques'));
masonry('concrete-block-calculator', l('bloques de hormigón','blocos de concreto','Betonblöcke','blocs de béton'));

add({
  id: 'tile-calculator',
  formula: 'surface area ÷ tile area × (1 + waste)',
  title: l('Estimar el número de baldosas necesarias','Estimar o número de revestimentos necessários','Benötigte Fliesenanzahl schätzen','Estimer le nombre de carreaux nécessaires'),
  intro: l('Compara el área de la superficie con la de una baldosa y añade desperdicio antes de redondear.','Compare a área da superfície com a área de uma peça e adicione perdas antes de arredondar.','Vergleiche die Fläche mit der Fläche einer Fliese und berücksichtige Verschnitt vor dem Aufrunden.','Comparez la surface totale à celle d’un carreau et ajoutez les pertes avant d’arrondir.'),
  example: l('El resultado se redondea porque los recortes también requieren comprar piezas enteras.','O resultado é arredondado porque recortes também exigem a compra de peças inteiras.','Das Ergebnis wird aufgerundet, da auch Zuschnitte den Kauf ganzer Fliesen erfordern.','Le résultat est arrondi car les découpes nécessitent aussi l’achat de carreaux entiers.'),
  insightTitle: l('Las dimensiones deben usar unidades coherentes','As dimensões devem usar unidades coerentes','Die Abmessungen müssen in kompatiblen Einheiten vorliegen','Les dimensions doivent utiliser des unités cohérentes'),
  insightBody: l('El cálculo convierte las dimensiones de la baldosa antes de comparar áreas.','O cálculo converte as dimensões da peça antes de comparar as áreas.','Der Rechner konvertiert die Fliesenmaße vor dem Flächenvergleich.','Le calcul convertit les dimensions du carreau avant de comparer les surfaces.')
});

areaWaste('flooring-calculator', l('pavimento','piso','Bodenbelag','revêtement de sol'));
areaWaste('hardwood-calculator', l('parqué','piso de madeira','Parkett','parquet'));
areaWaste('laminate-calculator', l('suelo laminado','piso laminado','Laminat','sol stratifié'));
areaWaste('carpet-calculator', l('moqueta','carpete','Teppich','moquette'));

add({
  id: 'paint-calculator',
  formula: '2 × (L + W) × H × coats ÷ coverage',
  title: l('Estimar pintura para las cuatro paredes de una habitación','Estimar tinta para as quatro paredes de um cômodo','Farbmenge für vier Raumwände schätzen','Estimer la peinture pour les quatre murs d’une pièce'),
  intro: l('Calcula el área de las paredes a partir del perímetro y la altura, considerando manos y rendimiento.','Calcule a área das paredes pelo perímetro e altura, considerando demãos e rendimento.','Berechne die Wandfläche aus Raumumfang und Höhe und berücksichtige Anstriche und Ergiebigkeit.','Calculez la surface des murs à partir du périmètre et de la hauteur, puis tenez compte des couches et du rendement.'),
  example: l('Más manos aumentan proporcionalmente la cantidad necesaria.','Mais demãos aumentam proporcionalmente a quantidade necessária.','Mehr Anstriche erhöhen den Farbbedarf proportional.','Davantage de couches augmente proportionnellement la quantité nécessaire.'),
  insightTitle: l('Puertas y ventanas no se restan','Portas e janelas não são subtraídas','Türen und Fenster werden nicht abgezogen','Les portes et fenêtres ne sont pas soustraites'),
  insightBody: l('La estimación usa toda la superficie de las cuatro paredes, por lo que grandes aberturas pueden hacerla conservadora.','A estimativa usa toda a superfície das quatro paredes; grandes aberturas podem torná-la conservadora.','Die Schätzung nutzt die volle Fläche aller vier Wände, daher können große Öffnungen das Ergebnis eher großzügig machen.','L’estimation utilise toute la surface des quatre murs ; de grandes ouvertures peuvent donc rendre le résultat prudent.')
});

add({
  id: 'wallpaper-calculator',
  formula: 'wall area × (1 + waste) ÷ roll coverage',
  title: l('Estimar rollos de papel pintado','Estimar rolos de papel de parede','Tapetenrollen schätzen','Estimer le nombre de rouleaux de papier peint'),
  intro: l('Calcula el área total de pared, añade desperdicio y divide por la cobertura de cada rollo.','Calcule a área total da parede, adicione perdas e divida pela cobertura de cada rolo.','Berechne die gesamte Wandfläche, addiere Verschnitt und teile durch die Abdeckung je Rolle.','Calculez la surface totale des murs, ajoutez les pertes et divisez par la couverture de chaque rouleau.'),
  example: l('El número de rollos siempre se redondea hacia arriba.','O número de rolos é sempre arredondado para cima.','Die Rollenzahl wird immer aufgerundet.','Le nombre de rouleaux est toujours arrondi vers le haut.'),
  insightTitle: l('Los patrones pueden requerir material extra','O alinhamento de padrões pode exigir material extra','Musterabgleich kann zusätzliches Material erfordern','Le raccord des motifs peut demander du matériau supplémentaire'),
  insightBody: l('Una estimación por área no representa por completo repeticiones del patrón o cortes complejos.','Uma estimativa por área não representa totalmente repetições de padrão ou cortes complexos.','Eine reine Flächenschätzung kann Musterrapporte und komplexe Zuschnitte nicht vollständig abbilden.','Une simple estimation par surface ne modélise pas complètement les raccords de motifs ni les découpes complexes.')
});

add({
  id: 'drywall-calculator',
  formula: 'wall area × (1 + waste) ÷ sheet area',
  title: l('Estimar el número de placas de yeso','Estimar o número de placas de drywall','Anzahl Gipskartonplatten schätzen','Estimer le nombre de plaques de plâtre'),
  intro: l('Calcula el área de pared con desperdicio y divide por la cobertura de cada placa.','Calcule a área da parede com perdas e divida pela área coberta por cada placa.','Berechne die Wandfläche einschließlich Verschnitt und teile durch die Fläche einer Platte.','Calculez la surface du mur avec les pertes puis divisez par la surface d’une plaque.'),
  example: l('El número de placas se redondea hacia arriba.','O número de placas é arredondado para cima.','Die Plattenzahl wird aufgerundet.','Le nombre de plaques est arrondi vers le haut.'),
  insightTitle: l('La disposición afecta al consumo real','O layout afeta o uso real das placas','Die Verlegung beeinflusst den tatsächlichen Plattenverbrauch','La disposition influence la consommation réelle de plaques'),
  insightBody: l('Recortes, aberturas y estructura pueden cambiar la eficiencia de uso.','Recortes, aberturas e estrutura podem alterar a eficiência de uso.','Verschnitt, Öffnungen und Ständerwerk können die Nutzung ganzer Platten beeinflussen.','Chutes, ouvertures et ossature peuvent modifier l’efficacité d’utilisation des plaques.')
});

add({
  id: 'plaster-calculator',
  formula: 'area × thickness(mm) ÷ 1000',
  title: l('Estimar volumen de yeso húmedo','Estimar volume de reboco','Nassputzvolumen schätzen','Estimer le volume d’enduit humide'),
  intro: l('Multiplica el área por el espesor después de convertir milímetros a metros.','Multiplique a área pela espessura depois de converter milímetros para metros.','Multipliziere die Fläche mit der Putzdicke nach Umrechnung von Millimetern in Meter.','Multipliez la surface par l’épaisseur après conversion des millimètres en mètres.'),
  example: l('30 m² × 10 mm = 0,30 m³','30 m² × 10 mm = 0,30 m³','30 m² × 10 mm = 0,30 m³','30 m² × 10 mm = 0,30 m³'),
  insightTitle: l('El espesor tiene un efecto lineal directo','A espessura tem efeito linear direto','Die Dicke wirkt direkt linear','L’épaisseur a un effet linéaire direct'),
  insightBody: l('Duplicar el espesor duplica el volumen estimado.','Dobrar a espessura dobra o volume estimado.','Eine Verdopplung der Dicke verdoppelt das geschätzte Volumen.','Doubler l’épaisseur double le volume estimé.')
});

volumeMass('gravel-calculator', l('grava','cascalho','Kies','gravier'));
volumeMass('sand-calculator', l('arena','areia','Sand','sable'));
volumeMass('asphalt-calculator', l('asfalto','asfalto','Asphalt','asphalte'));
volumeMass('stone-calculator', l('piedra','pedra','Stein','pierre'));
volumeMass('driveway-material-calculator', l('material para entrada','material para acesso','Einfahrtsmaterial','matériau pour allée'));

for (const [id, name] of [
  ['mulch-calculator', l('mantillo','cobertura morta','Mulch','paillis')],
  ['soil-calculator', l('tierra','solo','Erde','terre')]
] as const) {
  add({
    id,
    formula: 'length × width × depth',
    title: l(`Estimar volumen de ${name.es}`,`Estimar volume de ${name['pt-BR']}`,`Volumen von ${name.de} schätzen`,`Estimer le volume de ${name.fr}`),
    intro: l('Calcula el volumen a partir de longitud, anchura y profundidad.','Calcule o volume por comprimento, largura e profundidade.','Berechne das Volumen aus Länge, Breite und Tiefe.','Calculez le volume à partir de la longueur, de la largeur et de la profondeur.'),
    example: l('La profundidad introducida en centímetros se convierte a metros.','A profundidade inserida em centímetros é convertida para metros.','Eine in Zentimetern eingegebene Tiefe wird in Meter umgerechnet.','La profondeur saisie en centimètres est convertie en mètres.'),
    insightTitle: l('Es fácil subestimar la profundidad','É fácil subestimar a profundidade','Die Tiefe wird leicht unterschätzt','La profondeur est facile à sous-estimer'),
    insightBody: l('Como afecta a toda el área, un pequeño aumento puede añadir mucho volumen.','Como afeta toda a área, um pequeno aumento pode adicionar bastante volume.','Da die Tiefe über die ganze Fläche wirkt, kann eine kleine Erhöhung viel zusätzliches Volumen bedeuten.','Comme la profondeur s’applique à toute la surface, une petite hausse peut ajouter beaucoup de volume.')
  });
}

add({
  id: 'paver-calculator',
  formula: 'area ÷ paver area × (1 + waste)',
  title: l('Estimar el número de adoquines','Estimar o número de pavers','Anzahl Pflastersteine schätzen','Estimer le nombre de pavés'),
  intro: l('Compara el área total con la cara de un adoquín e incluye desperdicio.','Compare a área total com a área de um paver e inclua perdas.','Vergleiche die Gesamtfläche mit der Fläche eines Pflastersteins und berücksichtige Verschnitt.','Comparez la surface totale à celle d’un pavé et incluez les pertes.'),
  example: l('La cantidad se redondea a adoquines enteros.','A quantidade é arredondada para pavers inteiros.','Die Menge wird auf ganze Pflastersteine aufgerundet.','La quantité est arrondie à des pavés entiers.'),
  insightTitle: l('Los cortes y el patrón de colocación importan','Cortes e padrão de assentamento importam','Zuschnitte und Verlegemuster spielen eine Rolle','Les découpes et le motif de pose comptent'),
  insightBody: l('Patrones diagonales o complejos pueden exigir más desperdicio que una colocación rectangular simple.','Padrões diagonais ou complexos podem exigir mais perdas que uma instalação retangular simples.','Diagonale oder komplexe Muster können mehr Verschnitt erfordern als eine einfache rechteckige Verlegung.','Des motifs diagonaux ou complexes peuvent nécessiter davantage de pertes qu’une pose rectangulaire simple.')
});

add({
  id: 'roof-pitch-calculator',
  formula: 'pitch = atan(rise ÷ run)',
  title: l('Calcular la pendiente del tejado a partir de elevación y recorrido','Calcular a inclinação do telhado por elevação e avanço','Dachneigung aus Höhe und Lauf berechnen','Calculer la pente du toit à partir de la montée et de la portée'),
  intro: l('Convierte elevación entre recorrido horizontal en ángulo, porcentaje y elevación por 12.','Converta a elevação dividida pelo avanço horizontal em ângulo, porcentagem e elevação por 12.','Wandle Höhe geteilt durch horizontalen Lauf in Winkel, Prozentsteigung und Rise-per-12 um.','Convertissez la montée divisée par la portée horizontale en angle, pourcentage et montée pour 12.'),
  example: l('4 de elevación sobre 12 de recorrido ≈ 18,43°','4 de elevação sobre 12 de avanço ≈ 18,43°','4 Rise auf 12 Run ≈ 18,43°','4 de montée sur 12 de portée ≈ 18,43°'),
  insightTitle: l('Grados y porcentaje describen la misma geometría de forma distinta','Graus e porcentagem descrevem a mesma geometria de formas diferentes','Grad und Prozentsteigung beschreiben dieselbe Geometrie unterschiedlich','Les degrés et le pourcentage décrivent la même géométrie différemment'),
  insightBody: l('No deben tratarse como valores numéricamente intercambiables.','Não devem ser tratados como valores numericamente intercambiáveis.','Sie sind numerisch nicht direkt austauschbar.','Ils ne doivent pas être considérés comme numériquement interchangeables.')
});

add({
  id: 'roof-area-calculator',
  formula: 'footprint area ÷ cos(pitch)',
  title: l('Estimar la superficie de un tejado a dos aguas','Estimar a área de um telhado de duas águas','Fläche eines Satteldachs schätzen','Estimer la surface d’un toit à deux pans'),
  intro: l('Corrige el área en planta usando el coseno de la pendiente.','Corrija a área em planta usando o cosseno da inclinação.','Korrigiere die Grundrissfläche mit dem Kosinus der Dachneigung.','Corrigez la surface projetée à l’aide du cosinus de la pente.'),
  example: l('Un tejado más inclinado tiene más superficie que su proyección horizontal.','Um telhado mais inclinado tem área maior que sua projeção horizontal.','Ein steileres Dach hat mehr Oberfläche als seine horizontale Projektion.','Un toit plus pentu a une surface supérieure à sa projection horizontale.'),
  insightTitle: l('La pendiente aumenta la superficie real','A inclinação aumenta a área real','Die Neigung vergrößert die tatsächliche Fläche','La pente augmente la surface réelle'),
  insightBody: l('La proyección horizontal subestima el material necesario cuando el tejado está inclinado.','A projeção horizontal subestima o material necessário quando o telhado é inclinado.','Die horizontale Projektion unterschätzt die benötigte Materialfläche bei geneigtem Dach.','La projection horizontale sous-estime la surface de matériau nécessaire lorsque le toit est incliné.')
});

add({
  id: 'rafter-length-calculator',
  formula: '√(run² + rise²)',
  title: l('Calcular la longitud de un cabio','Calcular o comprimento de um caibro','Sparrenlänge berechnen','Calculer la longueur d’un chevron'),
  intro: l('Usa recorrido horizontal y elevación como catetos de un triángulo rectángulo.','Use avanço horizontal e elevação como os dois catetos de um triângulo retângulo.','Verwende horizontalen Lauf und Höhe als Katheten eines rechtwinkligen Dreiecks.','Utilisez la portée horizontale et la montée comme côtés perpendiculaires d’un triangle rectangle.'),
  example: l('4 m de recorrido y 2 m de elevación → unos 4,47 m','4 m de avanço e 2 m de elevação → cerca de 4,47 m','4 m Lauf und 2 m Höhe → etwa 4,47 m','4 m de portée et 2 m de montée → environ 4,47 m'),
  insightTitle: l('Es el teorema de Pitágoras','É o teorema de Pitágoras','Das ist der Satz des Pythagoras','C’est le théorème de Pythagore'),
  insightBody: l('El cabio es la hipotenusa formada por recorrido y elevación.','O caibro é a hipotenusa formada pelo avanço e pela elevação.','Der Sparren ist die Hypotenuse aus horizontalem Lauf und vertikaler Höhe.','Le chevron est l’hypoténuse formée par la portée horizontale et la montée verticale.')
});

add({
  id: 'stair-calculator',
  formula: 'risers ≈ total rise ÷ desired riser',
  title: l('Estimar contrahuellas y recorrido horizontal de una escalera','Estimar espelhos e avanço horizontal de uma escada','Steigungsanzahl und Treppenlauf schätzen','Estimer le nombre de contremarches et le giron horizontal'),
  intro: l('Estima un número práctico de contrahuellas a partir de la elevación total y recalcula altura real y recorrido aproximado.','Estime um número prático de espelhos a partir da elevação total e recalcule a altura real e o avanço aproximado.','Schätze aus der Gesamthöhe eine sinnvolle Anzahl Steigungen und berechne tatsächliche Steigungshöhe und ungefähren Lauf.','Estimez un nombre pratique de contremarches à partir de la hauteur totale, puis recalculez la hauteur réelle et la portée approximative.'),
  example: l('El número de contrahuellas se redondea antes de recalcular su altura real.','O número de espelhos é arredondado antes de recalcular a altura real.','Die Steigungsanzahl wird gerundet, bevor die tatsächliche Höhe neu berechnet wird.','Le nombre de contremarches est arrondi avant de recalculer leur hauteur réelle.'),
  insightTitle: l('Pequeños cambios en el número modifican cada escalón','Pequenas mudanças no número alteram cada degrau','Kleine Änderungen der Anzahl verändern jede Stufe','De petites variations du nombre modifient chaque marche'),
  insightBody: l('Cuando cambia el número, la altura total se redistribuye entre todos los escalones.','Quando o número muda, a altura total é redistribuída por toda a escada.','Ändert sich die Anzahl, wird die Gesamthöhe auf alle Stufen neu verteilt.','Lorsque le nombre change, la hauteur totale est redistribuée sur l’ensemble de l’escalier.')
});

add({
  id: 'deck-board-calculator',
  formula: 'deck width ÷ (board width + gap)',
  title: l('Estimar tablas a lo ancho de una terraza','Estimar tábuas ao longo da largura do deck','Terrassendielen über die Deckbreite schätzen','Estimer les lames sur la largeur d’une terrasse'),
  intro: l('Combina ancho de tabla y separación para saber cuántos módulos caben en el ancho.','Combine a largura da tábua e o espaçamento para determinar quantos módulos cabem na largura.','Kombiniere Dielenbreite und Fuge, um die Anzahl der Module über die Breite zu bestimmen.','Combinez la largeur de lame et l’espace entre lames pour déterminer combien de modules tiennent sur la largeur.'),
  example: l('El resultado se redondea a una tabla completa.','O resultado é arredondado para uma tábua inteira.','Das Ergebnis wird auf eine ganze Diele aufgerundet.','Le résultat est arrondi à une lame entière.'),
  insightTitle: l('La separación también contribuye a la cobertura','O espaçamento também contribui para a cobertura','Die Fuge trägt zur Gesamtbreite bei','L’espace entre les lames contribue aussi à la couverture'),
  insightBody: l('Ignorar la separación puede sobreestimar sensiblemente el número de tablas.','Ignorar o espaçamento pode superestimar bastante o número de tábuas.','Wer die Fuge ignoriert, kann die benötigte Dielenzahl deutlich überschätzen.','Ignorer l’espacement peut sensiblement surestimer le nombre de lames nécessaires.')
});

add({
  id: 'deck-material-calculator',
  formula: 'deck area × (1 + waste) ÷ board area',
  title: l('Estimar tablas de terraza por superficie','Estimar tábuas de deck pela área','Terrassendielen über die Fläche schätzen','Estimer les lames de terrasse par surface'),
  intro: l('Calcula el área incluyendo desperdicio y divide por el área cubierta por una tabla.','Calcule a área incluindo perdas e divida pela área coberta por uma tábua.','Berechne die Deckfläche einschließlich Verschnitt und teile durch die Fläche einer Diele.','Calculez la surface de la terrasse avec les pertes puis divisez par la surface couverte par une lame.'),
  example: l('El número de tablas se redondea hacia arriba.','O número de tábuas é arredondado para cima.','Die Dielenzahl wird aufgerundet.','Le nombre de lames est arrondi vers le haut.'),
  insightTitle: l('Las estimaciones por área ignoran el diseño detallado','Estimativas por área ignoram o layout detalhado','Flächenschätzungen ignorieren das detaillierte Verlegemuster','Les estimations par surface ignorent le plan de pose détaillé'),
  insightBody: l('Los cortes y la dirección de las tablas pueden cambiar la eficiencia real.','Cortes e direção das tábuas podem alterar a eficiência real.','Reale Zuschnitte und Dielenrichtung können die Materialeffizienz verändern.','Les découpes réelles et le sens des lames peuvent modifier l’efficacité du matériau.')
});

add({
  id: 'fence-calculator',
  formula: 'panels = ceil(length ÷ panel width); posts = panels + 1',
  title: l('Estimar paneles y postes de una valla','Estimar painéis e postes de uma cerca','Zaunfelder und Pfosten schätzen','Estimer les panneaux et poteaux d’une clôture'),
  intro: l('Divide la longitud total por el ancho del panel, redondea y añade un poste.','Divida o comprimento total pela largura do painel, arredonde e adicione um poste.','Teile die Gesamtlänge durch die Feldbreite, runde auf und addiere einen Pfosten.','Divisez la longueur totale par la largeur d’un panneau, arrondissez puis ajoutez un poteau.'),
  example: l('30 m con paneles de 2 m → 15 paneles y 16 postes','30 m com painéis de 2 m → 15 painéis e 16 postes','30 m mit 2-m-Feldern → 15 Felder und 16 Pfosten','30 m avec panneaux de 2 m → 15 panneaux et 16 poteaux'),
  insightTitle: l('En un tramo recto hay un poste más que paneles','Em um trecho reto há um poste a mais que painéis','Bei einer geraden Strecke gibt es einen Pfosten mehr als Felder','Sur une ligne droite, il y a un poteau de plus que de panneaux'),
  insightBody: l('Cada par de postes adyacentes sostiene un panel.','Cada par de postes adjacentes sustenta um painel.','Jedes benachbarte Pfostenpaar trägt ein Zaunfeld.','Chaque paire de poteaux adjacents supporte un panneau.')
});

add({
  id: 'post-spacing-calculator',
  formula: 'length ÷ (posts − 1)',
  title: l('Calcular separación uniforme entre postes','Calcular espaçamento uniforme entre postes','Gleichmäßigen Pfostenabstand berechnen','Calculer un espacement uniforme entre poteaux'),
  intro: l('Divide la longitud total entre el número de espacios entre postes.','Divida o comprimento total pelo número de espaços entre os postes.','Teile die Gesamtlänge durch die Anzahl der Zwischenräume zwischen den Pfosten.','Divisez la longueur totale par le nombre d’espaces entre les poteaux.'),
  example: l('6 postes crean 5 espacios, no 6.','6 postes criam 5 espaços, não 6.','6 Pfosten erzeugen 5 Abstände, nicht 6.','6 poteaux créent 5 intervalles, pas 6.'),
  insightTitle: l('Se cuentan espacios, no postes','O espaçamento conta vãos, não postes','Gezählt werden Abstände, nicht Pfosten','L’espacement compte les intervalles, pas les poteaux'),
  insightBody: l('Por eso se resta uno al número de postes.','Por isso se subtrai um do número de postes.','Deshalb wird von der Pfostenanzahl eins abgezogen.','C’est pourquoi on soustrait un au nombre de poteaux.')
});

add({
  id: 'stud-calculator',
  formula: 'ceil(wall length ÷ spacing) + 1',
  title: l('Estimar montantes de pared según separación','Estimar montantes de parede pelo espaçamento','Wandständer aus dem Abstand schätzen','Estimer les montants d’un mur selon l’espacement'),
  intro: l('Divide la longitud de pared por la separación e incluye un montante final.','Divida o comprimento da parede pelo espaçamento e inclua um montante final.','Teile die Wandlänge durch den Ständerabstand und berücksichtige einen zusätzlichen Endständer.','Divisez la longueur du mur par l’espacement des montants et ajoutez un montant d’extrémité.'),
  example: l('Una separación menor requiere más montantes.','Menor espaçamento exige mais montantes.','Ein kleinerer Abstand erfordert mehr Ständer.','Un espacement plus faible nécessite davantage de montants.'),
  insightTitle: l('Es una estimación básica por separación','É uma estimativa básica por espaçamento','Dies ist eine einfache Abstandsschätzung','Il s’agit d’une estimation de base par espacement'),
  insightBody: l('Esquinas, aberturas y requisitos estructurales pueden exigir montantes adicionales.','Cantos, aberturas e requisitos estruturais podem exigir montantes adicionais.','Ecken, Öffnungen und statische Anforderungen können zusätzliche Ständer nötig machen.','Angles, ouvertures et exigences structurelles peuvent nécessiter des montants supplémentaires.')
});

for (const id of ['lumber-calculator','board-foot-calculator'] as const) {
  add({
    id,
    formula: 'pieces × thickness(in) × width(in) × length(ft) ÷ 12',
    title: l('Calcular madera en board feet','Calcular madeira em board feet','Holzvolumen in Board Feet berechnen','Calculer le bois en board feet'),
    intro: l('Combina número de piezas, espesor, ancho y longitud con la relación estándar de board feet.','Combine número de peças, espessura, largura e comprimento usando a relação padrão de board feet.','Kombiniere Stückzahl, Dicke, Breite und Länge mit der Standardformel für Board Feet.','Combinez nombre de pièces, épaisseur, largeur et longueur avec la formule standard du board foot.'),
    example: l('1 × 1 in × 6 in × 8 ft = 4 board feet','1 × 1 in × 6 in × 8 ft = 4 board feet','1 × 1 in × 6 in × 8 ft = 4 Board Feet','1 × 1 in × 6 in × 8 ft = 4 board feet'),
    insightTitle: l('El board foot mide volumen, no longitud','Board foot mede volume, não comprimento','Board Foot misst Volumen, nicht Länge','Le board foot mesure un volume, pas une longueur'),
    insightBody: l('Tablas de igual longitud pueden tener volúmenes muy distintos si cambian ancho o espesor.','Tábuas de mesmo comprimento podem ter volumes muito diferentes se largura ou espessura mudarem.','Bretter gleicher Länge können bei anderer Breite oder Dicke sehr unterschiedliche Volumina haben.','Des planches de même longueur peuvent représenter des volumes très différents si largeur ou épaisseur changent.')
  });
}

add({
  id: 'insulation-calculator',
  formula: 'wall area × (1 + waste) ÷ pack coverage',
  title: l('Estimar paquetes de aislamiento','Estimar pacotes de isolamento','Dämmstoffpakete schätzen','Estimer le nombre de paquets d’isolation'),
  intro: l('Calcula el área de pared con desperdicio y divide por la cobertura de cada paquete.','Calcule a área da parede com perdas e divida pela cobertura de cada pacote.','Berechne die Wandfläche mit Verschnitt und teile durch die Abdeckung je Paket.','Calculez la surface du mur avec pertes puis divisez par la couverture de chaque paquet.'),
  example: l('El número de paquetes se redondea hacia arriba.','O número de pacotes é arredondado para cima.','Die Paketanzahl wird aufgerundet.','Le nombre de paquets est arrondi vers le haut.'),
  insightTitle: l('La cobertura por paquete depende del producto','A cobertura por pacote depende do produto','Die Abdeckung pro Paket ist produktspezifisch','La couverture par paquet dépend du produit'),
  insightBody: l('Distintos espesores y formatos pueden ofrecer coberturas diferentes.','Espessuras e formatos diferentes podem oferecer coberturas distintas.','Unterschiedliche Dämmstärken und Formate können verschiedene Abdeckungen bieten.','Différentes épaisseurs et formats peuvent offrir des couvertures différentes.')
});

add({
  id: 'gutter-calculator',
  formula: 'ceil(total length ÷ section length)',
  title: l('Estimar tramos de canalón','Estimar seções de calha','Dachrinnenabschnitte schätzen','Estimer les sections de gouttière'),
  intro: l('Divide la longitud necesaria entre la longitud de cada tramo disponible.','Divida o comprimento necessário pelo comprimento de cada seção disponível.','Teile die benötigte Rinnenlänge durch die Länge eines verfügbaren Abschnitts.','Divisez la longueur de gouttière nécessaire par la longueur de chaque section disponible.'),
  example: l('24 m usando tramos de 3 m → 8 tramos','24 m usando seções de 3 m → 8 seções','24 m mit 3-m-Abschnitten → 8 Abschnitte','24 m avec sections de 3 m → 8 sections'),
  insightTitle: l('El resultado cuenta tramos completos','O resultado conta seções inteiras','Das Ergebnis zählt ganze Abschnitte','Le résultat compte des sections entières'),
  insightBody: l('Conexiones, esquinas y recortes no se modelan por separado en esta estimación básica.','Conexões, cantos e recortes não são modelados separadamente nesta estimativa básica.','Verbinder, Ecken und Abschnitte werden in dieser einfachen Längenschätzung nicht separat modelliert.','Raccords, angles et chutes ne sont pas modélisés séparément dans cette estimation simple.')
});

for (const [id, name] of [
  ['concrete-slab-calculator', l('una losa','uma laje','eine Platte','une dalle')],
  ['concrete-footing-calculator', l('una zapata','uma fundação','ein Fundament','une semelle')]
] as const) {
  add({
    id,
    formula: 'length × width × depth × (1 + waste)',
    title: l(`Estimar hormigón para ${name.es}`,`Estimar concreto para ${name['pt-BR']}`,`Beton für ${name.de} schätzen`,`Estimer le béton pour ${name.fr}`),
    intro: l('Calcula el volumen rectangular e incluye un margen de desperdicio.','Calcule o volume retangular e inclua uma margem de perdas.','Berechne das rechteckige Betonvolumen und berücksichtige Verschnitt.','Calculez le volume rectangulaire de béton et ajoutez une marge de perte.'),
    example: l('Todas las dimensiones contribuyen directamente al volumen.','Todas as dimensões contribuem diretamente para o volume.','Alle Abmessungen tragen direkt zum Volumen bei.','Toutes les dimensions contribuent directement au volume.'),
    insightTitle: l('El volumen crece con cada dimensión','O volume cresce com cada dimensão','Das Volumen skaliert mit jeder Abmessung','Le volume augmente avec chaque dimension'),
    insightBody: l('Aumentar longitud, anchura o profundidad aumenta proporcionalmente el hormigón necesario.','Aumentar comprimento, largura ou profundidade aumenta proporcionalmente o concreto necessário.','Mehr Länge, Breite oder Tiefe erhöht die benötigte Betonmenge proportional.','Augmenter longueur, largeur ou profondeur augmente proportionnellement la quantité de béton nécessaire.')
  });
}

add({
  id: 'retaining-wall-calculator',
  formula: 'wall area ÷ block face area × (1 + waste)',
  title: l('Estimar bloques para un muro de contención','Estimar blocos para um muro de contenção','Blöcke für eine Stützmauer schätzen','Estimer les blocs pour un mur de soutènement'),
  intro: l('Compara el área frontal del muro con la de un bloque y añade desperdicio.','Compare a área frontal do muro com a de um bloco e adicione perdas.','Vergleiche die sichtbare Wandfläche mit der Fläche eines Blocks und berücksichtige Verschnitt.','Comparez la surface de face du mur à celle d’un bloc et ajoutez les pertes.'),
  example: l('El resultado se redondea a bloques completos.','O resultado é arredondado para blocos inteiros.','Das Ergebnis wird auf ganze Blöcke aufgerundet.','Le résultat est arrondi à des blocs entiers.'),
  insightTitle: l('La estimación usa el área frontal visible','A estimativa usa a área frontal visível','Die Schätzung verwendet die sichtbare Frontfläche','L’estimation utilise la surface visible'),
  insightBody: l('Diseño estructural, hiladas enterradas y refuerzos quedan fuera de esta estimación geométrica.','Projeto estrutural, fiadas enterradas e reforços ficam fora desta estimativa geométrica.','Statik, eingegrabene Reihen und Bewehrung liegen außerhalb dieser geometrischen Schätzung.','Conception structurelle, rangées enterrées et renforts ne sont pas couverts par cette estimation géométrique.')
});

add({
  id: 'pool-volume-calculator',
  formula: 'length × width × average depth',
  title: l('Estimar el volumen de una piscina rectangular','Estimar o volume de uma piscina retangular','Volumen eines rechteckigen Pools schätzen','Estimer le volume d’une piscine rectangulaire'),
  intro: l('Multiplica longitud, anchura y profundidad media para estimar el volumen de agua.','Multiplique comprimento, largura e profundidade média para estimar o volume de água.','Multipliziere Länge, Breite und mittlere Tiefe, um das Wasservolumen zu schätzen.','Multipliez longueur, largeur et profondeur moyenne pour estimer le volume d’eau.'),
  example: l('1 m³ = 1000 litros','1 m³ = 1000 litros','1 m³ = 1000 Liter','1 m³ = 1000 litres'),
  insightTitle: l('La profundidad media importa en piscinas inclinadas','A profundidade média importa em piscinas inclinadas','Die mittlere Tiefe ist bei geneigtem Boden wichtig','La profondeur moyenne compte pour les piscines en pente'),
  insightBody: l('Usar solo el punto más profundo sobreestimaría una piscina con fondo inclinado.','Usar apenas o ponto mais profundo superestimaria uma piscina com fundo inclinado.','Nur die tiefste Stelle zu verwenden würde einen Pool mit geneigtem Boden überschätzen.','N’utiliser que le point le plus profond surestimerait une piscine à fond incliné.')
});

add({
  id: 'pond-volume-calculator',
  formula: 'length × width × π ÷ 4 × depth',
  title: l('Estimar el volumen de un estanque ovalado','Estimar o volume de um lago oval','Volumen eines ovalen Teichs schätzen','Estimer le volume d’un bassin ovale'),
  intro: l('Aproxima la planta como una elipse y multiplica su área por la profundidad media.','Aproxime a planta como uma elipse e multiplique sua área pela profundidade média.','Nähere die Grundfläche als Ellipse an und multipliziere ihre Fläche mit der mittleren Tiefe.','Approximez la surface par une ellipse puis multipliez par la profondeur moyenne.'),
  example: l('El factor de elipse π/4 es aproximadamente 0,785.','O fator de elipse π/4 é aproximadamente 0,785.','Der Ellipsenfaktor π/4 beträgt etwa 0,785.','Le facteur elliptique π/4 vaut environ 0,785.'),
  insightTitle: l('Los estanques irregulares solo se aproximan','Lagos irregulares são apenas aproximados','Unregelmäßige Teiche werden nur angenähert','Les bassins irréguliers ne sont qu’approximés'),
  insightBody: l('Formas naturales y profundidades variables pueden diferir del modelo oval ideal.','Formas naturais e profundidades variáveis podem diferir do modelo oval ideal.','Natürliche Formen und wechselnde Tiefen können vom idealisierten Oval abweichen.','Les formes naturelles et profondeurs variables peuvent différer du modèle ovale idéal.')
});

add({
  id: 'room-area-calculator',
  formula: 'length × width',
  title: l('Calcular el área de una habitación rectangular','Calcular a área de um cômodo retangular','Fläche eines rechteckigen Raums berechnen','Calculer la surface d’une pièce rectangulaire'),
  intro: l('Multiplica la longitud de la habitación por su anchura.','Multiplique o comprimento do cômodo pela largura.','Multipliziere Raumlänge mit Raumbreite.','Multipliez la longueur de la pièce par sa largeur.'),
  example: l('5 m × 4 m = 20 m²','5 m × 4 m = 20 m²','5 m × 4 m = 20 m²','5 m × 4 m = 20 m²'),
  insightTitle: l('Las habitaciones irregulares pueden dividirse en rectángulos','Cômodos irregulares podem ser divididos em retângulos','Unregelmäßige Räume lassen sich in Rechtecke teilen','Les pièces irrégulières peuvent être divisées en rectangles'),
  insightBody: l('Calcula cada sección rectangular por separado y suma las áreas.','Calcule cada seção retangular separadamente e some as áreas.','Berechne jeden rechteckigen Teil separat und addiere die Flächen.','Calculez chaque section rectangulaire séparément puis additionnez les surfaces.')
});

function build(locale: Locale, def: Def): ToolEditorial {
  const t = ui[locale];
  return {
    family: 'calculator',
    reviewed: false,
    kicker: t.kicker,
    title: def.title[locale],
    intro: def.intro[locale],
    facts: [...t.facts],
    visual: {
      kind: 'flow',
      nodes: [t.values, def.formula, t.result],
      caption: def.example[locale]
    },
    insightLabel: t.insight,
    insightTitle: def.insightTitle[locale],
    insightBody: def.insightBody[locale],
    faqTitle: t.faq,
    faq: [
      { question: t.logic, answer: def.formula },
      { question: t.example, answer: def.example[locale] }
    ],
    next: []
  };
}

function make(locale: Locale): Partial<Record<string, ToolEditorial>> {
  return Object.fromEntries(defs.map((def) => [def.id, build(locale, def)]));
}

export const calculatorConstructionEditorialEs = make('es');
export const calculatorConstructionEditorialPtBr = make('pt-BR');
export const calculatorConstructionEditorialDe = make('de');
export const calculatorConstructionEditorialFr = make('fr');
