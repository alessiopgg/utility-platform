import type { ToolEditorial } from './tool-editorial.ts';

type Locale = 'de' | 'fr';

type MathDef = {
  formula: string;
  title: string;
  intro: string;
  example: string;
  insightTitle: string;
  insightBody: string;
};

function build(locale: Locale, def: MathDef): ToolEditorial {
  const de = locale === 'de';

  return {
    family: 'calculator',
    reviewed: false,

    kicker: de ? 'SO WIRD ES BERECHNET' : 'COMMENT LE CALCUL EST EFFECTUÉ',

    title: def.title,
    intro: def.intro,

    facts: de
      ? ['Sofortiges Ergebnis', 'Klare Formel', 'Lokale Berechnung']
      : ['Résultat immédiat', 'Formule claire', 'Calcul local'],

    visual: {
      kind: 'flow',
      nodes: [
        de ? 'Werte' : 'Valeurs',
        def.formula,
        de ? 'Ergebnis' : 'Résultat'
      ],
      caption: def.example
    },

    insightLabel: de ? 'GUT ZU WISSEN' : 'BON À SAVOIR',
    insightTitle: def.insightTitle,
    insightBody: def.insightBody,

    faqTitle: de ? 'Kurz erklärt' : 'En bref',

    faq: [
      {
        question: de
          ? 'Welche Logik verwendet der Rechner?'
          : 'Quelle logique utilise le calculateur ?',
        answer: def.formula
      },
      {
        question: de ? 'Ein Beispiel?' : 'Un exemple ?',
        answer: def.example
      }
    ],

    next: []
  };
}

const de: Record<string, MathDef> = {
  'percentage-increase-calculator': {
    formula: '(new − original) ÷ original × 100',
    title: 'Messen, um wie viel ein Wert gestiegen ist',
    intro: 'Vergleiche einen Ausgangswert mit einem höheren neuen Wert und drücke die Änderung als Prozentsatz des Ausgangswerts aus.',
    example: '100 → 120 = 20 % Zunahme',
    insightTitle: 'Der Ausgangswert ist die Referenz',
    insightBody: 'Die prozentuale Zunahme wird relativ zum Ausgangswert gemessen und nicht relativ zum Endwert.'
  },

  'percentage-decrease-calculator': {
    formula: '(original − new) ÷ original × 100',
    title: 'Messen, um wie viel ein Wert gesunken ist',
    intro: 'Vergleiche einen Ausgangswert mit einem niedrigeren neuen Wert und berechne die Abnahme relativ zum Ausgangswert.',
    example: '100 → 80 = 20 % Abnahme',
    insightTitle: 'Eine Abnahme um 20 % macht eine Zunahme um 20 % nicht rückgängig',
    insightBody: 'Nach der ersten prozentualen Änderung ändert sich der Bezugswert. Gleiche Prozentsätze in entgegengesetzte Richtungen sind daher nicht symmetrisch.'
  },

  'percentage-difference-calculator': {
    formula: '|A − B| ÷ ((|A| + |B|) ÷ 2) × 100',
    title: 'Zwei Werte ohne festgelegten Ausgangswert vergleichen',
    intro: 'Die prozentuale Differenz verwendet den durchschnittlichen Betrag beider Werte als symmetrische Referenz.',
    example: '100 und 120 unterscheiden sich um etwa 18,18 %',
    insightTitle: 'Prozentuale Differenz und prozentuale Änderung sind nicht dasselbe',
    insightBody: 'Die prozentuale Differenz behandelt beide Werte symmetrisch, während eine prozentuale Änderung einen Ausgangswert benötigt.'
  },

  'reverse-percentage-calculator': {
    formula: 'part ÷ (percentage ÷ 100)',
    title: 'Den Gesamtwert aus einem bekannten Prozentsatz bestimmen',
    intro: 'Wenn ein Wert einen bestimmten Prozentsatz eines Gesamtwerts darstellt, rekonstruiert dieser Rechner den Gesamtwert.',
    example: '25 sind 20 % von 125',
    insightTitle: 'Diese Berechnung kehrt die normale Prozentformel um',
    insightBody: 'Statt einen Anteil aus dem Gesamtwert zu berechnen, wird der bekannte Anteil durch den Prozentsatz in Dezimalform geteilt.'
  },

  'fraction-calculator': {
    formula: 'fraction operation → reduce by GCD',
    title: 'Mit zwei Brüchen rechnen',
    intro: 'Addiere, subtrahiere, multipliziere oder dividiere zwei Brüche und kürze das Ergebnis automatisch.',
    example: '1/2 + 1/3 = 5/6',
    insightTitle: 'Gleichwertige Brüche stellen denselben Wert dar',
    insightBody: 'Beim Kürzen ändern sich Zähler und Nenner, nicht jedoch der dargestellte Wert.'
  },

  'fraction-to-decimal': {
    formula: 'numerator ÷ denominator',
    title: 'Einen Bruch in eine Dezimalzahl umwandeln',
    intro: 'Teile den Zähler durch den Nenner, um die Dezimaldarstellung zu erhalten.',
    example: '1 ÷ 4 = 0,25',
    insightTitle: 'Manche Brüche ergeben periodische Dezimalzahlen',
    insightBody: 'Brüche wie 1/3 können nicht durch eine endliche Dezimaldarstellung ausgedrückt werden.'
  },

  'decimal-to-fraction': {
    formula: 'decimal → integer ratio → reduce',
    title: 'Eine Dezimalzahl in einen gekürzten Bruch umwandeln',
    intro: 'UtilityLake wandelt die Dezimalzahl in ein Verhältnis ganzer Zahlen um und kürzt es vollständig.',
    example: '0,75 = 3/4',
    insightTitle: 'Endliche Dezimalzahlen können immer als Bruch dargestellt werden',
    insightBody: 'Eine endliche Dezimalzahl kann über eine Zehnerpotenz geschrieben und anschließend gekürzt werden.'
  },

  'ratio-calculator': {
    formula: 'A:B ÷ GCD(A,B)',
    title: 'Ein Verhältnis auf die einfachste Form reduzieren',
    intro: 'Beide Teile des Verhältnisses werden durch ihren größten gemeinsamen Teiler geteilt.',
    example: '12:18 → 2:3',
    insightTitle: 'Das Kürzen eines Verhältnisses erhält die Proportion',
    insightBody: '2:3 und 12:18 beschreiben dieselbe proportionale Beziehung.'
  },

  'proportion-calculator': {
    formula: 'x = b × c ÷ a',
    title: 'Den unbekannten Wert einer Proportion berechnen',
    intro: 'Löse Gleichungen der Form a/b = c/x mithilfe der Kreuzmultiplikation.',
    example: '2/3 = 4/x → x = 6',
    insightTitle: 'Die Kreuzmultiplikation beseitigt die Nenner',
    insightBody: 'Aus a/b = c/x lässt sich a × x = b × c ableiten.'
  },

  'average-calculator': {
    formula: 'sum(values) ÷ count(values)',
    title: 'Das arithmetische Mittel berechnen',
    intro: 'Addiere alle Werte und teile ihre Summe durch die Anzahl der Werte.',
    example: '10, 20, 30 → Mittelwert 20',
    insightTitle: 'Der Mittelwert reagiert empfindlich auf Extremwerte',
    insightBody: 'Ein einzelner ungewöhnlich hoher oder niedriger Wert kann das arithmetische Mittel deutlich verschieben.'
  },

  'weighted-average-calculator': {
    formula: 'Σ(value × weight) ÷ Σ(weights)',
    title: 'Werten unterschiedliche Bedeutung geben',
    intro: 'Jeder Wert wird mit seinem Gewicht multipliziert, bevor die gewichtete Summe durch die Summe der Gewichte geteilt wird.',
    example: '80, 90, 100 mit Gewichten 1, 2, 1 → 90',
    insightTitle: 'Größere Gewichte haben stärkeren Einfluss',
    insightBody: 'Ein Wert mit Gewicht 2 trägt doppelt so stark bei wie derselbe Wert mit Gewicht 1.'
  },

  'median-calculator': {
    formula: 'middle of sorted values',
    title: 'Den mittleren Wert eines Datensatzes bestimmen',
    intro: 'Die Werte werden sortiert und der mittlere Wert gewählt oder bei gerader Anzahl der Mittelwert der beiden mittleren Werte berechnet.',
    example: '1,2,3,4,5 → Median 3',
    insightTitle: 'Der Median ist robust gegenüber Extremwerten',
    insightBody: 'Im Gegensatz zum Mittelwert kann ein sehr großer Ausreißer nur geringen Einfluss auf den Median haben.'
  },

  'mode-calculator': {
    formula: 'value with maximum frequency',
    title: 'Den häufigsten Wert bestimmen',
    intro: 'UtilityLake zählt die Vorkommen und gibt den Wert oder die Werte mit der höchsten Häufigkeit zurück.',
    example: '1,2,2,3 → Modalwert 2',
    insightTitle: 'Ein Datensatz kann mehr als einen Modalwert haben',
    insightBody: 'Mehrere Werte können dieselbe maximale Häufigkeit besitzen.'
  },

  'standard-deviation-calculator': {
    formula: '√(Σ(x − mean)² ÷ N)',
    title: 'Messen, wie stark Werte gestreut sind',
    intro: 'Berechne die Standardabweichung einer Population oder Stichprobe anhand der Abweichungen vom Mittelwert.',
    example: 'Eine kleinere Standardabweichung bedeutet, dass die Werte näher am Mittelwert liegen.',
    insightTitle: 'Stichprobe und Population verwenden unterschiedliche Teiler',
    insightBody: 'Die Populationsstandardabweichung teilt durch N, während die Stichprobenvariante durch N − 1 teilt.'
  },

  'rule-of-three-calculator': {
    formula: 'x = b × c ÷ a',
    title: 'Einen proportionalen Dreisatz lösen',
    intro: 'Für a:b = c:x berechnet UtilityLake den fehlenden vierten Wert.',
    example: '2:4 = 3:x → x = 6',
    insightTitle: 'Der Dreisatz ist eine Proportion',
    insightBody: 'Die bekannte Rechenregel ergibt sich direkt aus der Kreuzmultiplikation.'
  }
,

  'scientific-notation-converter': {
    formula: 'a × 10ⁿ',
    title: 'Zahlen in wissenschaftlicher Schreibweise darstellen',
    intro: 'Wandle eine Zahl in einen Koeffizienten multipliziert mit einer Zehnerpotenz um.',
    example: '123456 → 1,23456 × 10⁵',
    insightTitle: 'Die wissenschaftliche Schreibweise macht Größenordnungen leichter erkennbar',
    insightBody: 'Sehr große und sehr kleine Zahlen lassen sich einfacher vergleichen, wenn sie als Potenzen von zehn dargestellt werden.'
  },

  'square-root-calculator': {
    formula: '√x',
    title: 'Die Hauptquadratwurzel berechnen',
    intro: 'Bestimme den nicht negativen Wert, dessen Quadrat der eingegebenen Zahl entspricht.',
    example: '√144 = 12',
    insightTitle: 'Die Hauptquadratwurzel ist nicht negativ',
    insightBody: 'Obwohl sowohl 12 als auch −12 quadriert 144 ergeben, bezeichnet √144 definitionsgemäß 12.'
  },

  'exponent-calculator': {
    formula: 'base^exponent',
    title: 'Eine Zahl potenzieren',
    intro: 'UtilityLake berechnet eine Basis, die mit dem gewählten Exponenten potenziert wird.',
    example: '2¹⁰ = 1024',
    insightTitle: 'Negative Exponenten stellen Kehrwerte dar',
    insightBody: 'Für eine Basis ungleich null gilt a⁻ⁿ = 1/aⁿ.'
  },

  'logarithm-calculator': {
    formula: 'log_b(x) = ln(x) ÷ ln(b)',
    title: 'Logarithmen zu einer beliebigen gültigen Basis berechnen',
    intro: 'Bestimme den Exponenten, mit dem die Basis potenziert werden muss, um die gewählte Zahl zu erhalten.',
    example: 'log₁₀(100) = 2',
    insightTitle: 'Der Logarithmus ist die Umkehroperation der Potenzierung',
    insightBody: 'Wenn b² = x gilt, dann ist der Logarithmus von x zur Basis b gleich 2.'
  },

  'factorial-calculator': {
    formula: 'n! = 1 × 2 × ... × n',
    title: 'Die Fakultät einer ganzen Zahl berechnen',
    intro: 'Multipliziere alle positiven ganzen Zahlen von 1 bis n miteinander.',
    example: '5! = 120',
    insightTitle: 'Fakultäten wachsen extrem schnell',
    insightBody: 'Schon relativ kleine Werte von n erzeugen sehr große Ergebnisse.'
  },

  'gcd-calculator': {
    formula: 'GCD(a,b)',
    title: 'Den größten gemeinsamen Teiler bestimmen',
    intro: 'Bestimme die größte ganze Zahl, die beide Eingabewerte ohne Rest teilt.',
    example: 'ggT(48,18) = 6',
    insightTitle: 'Der ggT hilft beim Kürzen von Brüchen und Verhältnissen',
    insightBody: 'Teilt man Zähler und Nenner durch ihren größten gemeinsamen Teiler, erhält man einen vollständig gekürzten Bruch.'
  },

  'lcm-calculator': {
    formula: '|a × b| ÷ GCD(a,b)',
    title: 'Das kleinste gemeinsame Vielfache bestimmen',
    intro: 'Bestimme die kleinste positive Zahl, die ein Vielfaches beider eingegebenen ganzen Zahlen ist.',
    example: 'kgV(12,18) = 36',
    insightTitle: 'ggT und kgV sind eng miteinander verbunden',
    insightBody: 'Für ganze Zahlen ungleich null steht ihr Produkt in direktem Zusammenhang mit dem Produkt aus ggT und kgV.'
  },

  'prime-number-checker': {
    formula: 'test divisors up to √n',
    title: 'Prüfen, ob eine ganze Zahl eine Primzahl ist',
    intro: 'UtilityLake prüft, ob die Zahl außer 1 und sich selbst weitere Teiler besitzt.',
    example: '97 → Primzahl',
    insightTitle: 'Teiler müssen nur bis zur Quadratwurzel geprüft werden',
    insightBody: 'Existiert ein größerer Teiler, muss er mit einem kleineren Teiler gepaart sein, der bereits gefunden worden wäre.'
  },

  'prime-factorization-calculator': {
    formula: 'n = p₁ × p₂ × ...',
    title: 'Eine ganze Zahl in Primfaktoren zerlegen',
    intro: 'Teile die Zahl wiederholt durch Primfaktoren, bis die vollständige Primfaktorzerlegung erreicht ist.',
    example: '360 = 2 × 2 × 2 × 3 × 3 × 5',
    insightTitle: 'Die Primfaktorzerlegung ist eindeutig',
    insightBody: 'Abgesehen von der Reihenfolge der Faktoren besitzt jede ganze Zahl größer als 1 genau eine Primfaktorzerlegung.'
  },

  'rounding-calculator': {
    formula: 'round(value × 10ⁿ) ÷ 10ⁿ',
    title: 'Eine Zahl auf Dezimalstellen runden',
    intro: 'Wähle, wie viele Stellen nach dem Dezimaltrennzeichen erhalten bleiben sollen.',
    example: '12,34567 → 12,35 bei 2 Dezimalstellen',
    insightTitle: 'Dezimalstellen und signifikante Stellen sind nicht dasselbe',
    insightBody: 'Dezimalstellen zählen die Ziffern nach dem Dezimaltrennzeichen, signifikante Stellen dagegen ab der ersten von null verschiedenen Ziffer.'
  },

  'significant-figures-calculator': {
    formula: 'round to n significant digits',
    title: 'Eine Zahl auf signifikante Stellen runden',
    intro: 'Behalte eine ausgewählte Anzahl aussagekräftiger Ziffern unabhängig von ihrer Dezimalposition.',
    example: '12345,678 → 12350 bei 4 signifikanten Stellen',
    insightTitle: 'Führende Nullen sind nicht signifikant',
    insightBody: 'In 0,0042 sind 4 und 2 die signifikanten Ziffern.'
  },

  'percentage-error-calculator': {
    formula: '|measured − accepted| ÷ |accepted| × 100',
    title: 'Den Fehler relativ zu einem Referenzwert messen',
    intro: 'Vergleiche einen Messwert mit einem akzeptierten Referenzwert und gib den absoluten Fehler als Prozentsatz an.',
    example: '98 gegenüber 100 → 2 % Fehler',
    insightTitle: 'Der akzeptierte Wert steht im Nenner',
    insightBody: 'Der prozentuale Fehler beschreibt die Abweichung relativ zu dem als korrekt angenommenen Referenzwert.'
  },

  'absolute-difference-calculator': {
    formula: '|A − B|',
    title: 'Den Abstand zwischen zwei Werten bestimmen',
    intro: 'Subtrahiere die Werte voneinander und ignoriere das Vorzeichen der Differenz.',
    example: '|10 − 7| = 3',
    insightTitle: 'Die absolute Differenz hat keine Richtung',
    insightBody: 'Das Ergebnis zeigt, wie weit die Zahlen auseinanderliegen, nicht welche von beiden größer ist.'
  },

  'range-calculator': {
    formula: 'range = max − min',
    title: 'Minimum, Maximum und Spannweite bestimmen',
    intro: 'UtilityLake ermittelt den kleinsten und größten Wert und berechnet aus ihrer Differenz die Spannweite.',
    example: '2,3,5,7,12 → Spannweite 10',
    insightTitle: 'Die Spannweite verwendet nur die beiden Extremwerte',
    insightBody: 'Werte zwischen Minimum und Maximum beeinflussen die Spannweite nicht.'
  }
};

const fr: Record<string, MathDef> = {
  'percentage-increase-calculator': {
    formula: '(new − original) ÷ original × 100',
    title: 'Mesurer l’augmentation d’une valeur',
    intro: 'Comparez une valeur initiale à une nouvelle valeur plus élevée et exprimez la variation en pourcentage de la valeur initiale.',
    example: '100 → 120 = augmentation de 20 %',
    insightTitle: 'La valeur initiale sert de référence',
    insightBody: 'L’augmentation en pourcentage est mesurée par rapport au point de départ et non par rapport à la valeur finale.'
  },

  'percentage-decrease-calculator': {
    formula: '(original − new) ÷ original × 100',
    title: 'Mesurer la diminution d’une valeur',
    intro: 'Comparez une valeur initiale à une nouvelle valeur plus faible et calculez la diminution par rapport à la valeur initiale.',
    example: '100 → 80 = diminution de 20 %',
    insightTitle: 'Une baisse de 20 % n’annule pas une hausse de 20 %',
    insightBody: 'La valeur de référence change après la première variation. Des variations identiques dans des directions opposées ne sont donc pas symétriques.'
  },

  'percentage-difference-calculator': {
    formula: '|A − B| ÷ ((|A| + |B|) ÷ 2) × 100',
    title: 'Comparer deux valeurs sans choisir de référence',
    intro: 'La différence en pourcentage utilise la moyenne des amplitudes des deux valeurs comme référence symétrique.',
    example: '100 et 120 diffèrent d’environ 18,18 %',
    insightTitle: 'Différence en pourcentage et variation en pourcentage ne sont pas identiques',
    insightBody: 'La différence en pourcentage traite les deux valeurs de manière symétrique, tandis qu’une variation en pourcentage nécessite une valeur de départ.'
  },

  'reverse-percentage-calculator': {
    formula: 'part ÷ (percentage ÷ 100)',
    title: 'Retrouver le total à partir d’un pourcentage connu',
    intro: 'Si une valeur représente un certain pourcentage d’un total, ce calculateur reconstitue la valeur totale.',
    example: '25 représente 20 % de 125',
    insightTitle: 'Cette opération inverse la formule classique du pourcentage',
    insightBody: 'Au lieu de calculer une partie à partir du total, la partie connue est divisée par le pourcentage sous forme décimale.'
  },

  'fraction-calculator': {
    formula: 'fraction operation → reduce by GCD',
    title: 'Calculer avec deux fractions',
    intro: 'Additionnez, soustrayez, multipliez ou divisez deux fractions puis simplifiez automatiquement le résultat.',
    example: '1/2 + 1/3 = 5/6',
    insightTitle: 'Les fractions équivalentes représentent la même valeur',
    insightBody: 'Simplifier une fraction modifie son numérateur et son dénominateur, mais pas la valeur qu’elle représente.'
  },

  'fraction-to-decimal': {
    formula: 'numerator ÷ denominator',
    title: 'Convertir une fraction en nombre décimal',
    intro: 'Divisez le numérateur par le dénominateur pour obtenir la représentation décimale.',
    example: '1 ÷ 4 = 0,25',
    insightTitle: 'Certaines fractions donnent des décimales périodiques',
    insightBody: 'Des fractions comme 1/3 ne peuvent pas être représentées par une écriture décimale finie.'
  },

  'decimal-to-fraction': {
    formula: 'decimal → integer ratio → reduce',
    title: 'Convertir un nombre décimal en fraction simplifiée',
    intro: 'UtilityLake transforme la valeur décimale en rapport d’entiers puis la réduit à sa forme la plus simple.',
    example: '0,75 = 3/4',
    insightTitle: 'Les décimaux finis possèdent toujours une représentation fractionnaire',
    insightBody: 'Un nombre décimal fini peut être écrit sur une puissance de dix puis simplifié.'
  },

  'ratio-calculator': {
    formula: 'A:B ÷ GCD(A,B)',
    title: 'Réduire un rapport à sa forme la plus simple',
    intro: 'Les deux termes du rapport sont divisés par leur plus grand diviseur commun.',
    example: '12:18 → 2:3',
    insightTitle: 'Réduire un rapport conserve la proportion',
    insightBody: '2:3 et 12:18 décrivent la même relation proportionnelle.'
  },

  'proportion-calculator': {
    formula: 'x = b × c ÷ a',
    title: 'Trouver la valeur manquante dans une proportion',
    intro: 'Résolvez les équations de la forme a/b = c/x à l’aide du produit en croix.',
    example: '2/3 = 4/x → x = 6',
    insightTitle: 'Le produit en croix élimine les dénominateurs',
    insightBody: 'À partir de a/b = c/x, on peut obtenir a × x = b × c.'
  },

  'average-calculator': {
    formula: 'sum(values) ÷ count(values)',
    title: 'Calculer la moyenne arithmétique',
    intro: 'Additionnez toutes les valeurs puis divisez leur somme par le nombre de valeurs.',
    example: '10, 20, 30 → moyenne 20',
    insightTitle: 'La moyenne est sensible aux valeurs extrêmes',
    insightBody: 'Une seule valeur exceptionnellement élevée ou faible peut modifier sensiblement la moyenne arithmétique.'
  },

  'weighted-average-calculator': {
    formula: 'Σ(value × weight) ÷ Σ(weights)',
    title: 'Donner une importance différente aux valeurs',
    intro: 'Chaque valeur est multipliée par son poids avant que la somme pondérée soit divisée par la somme des poids.',
    example: '80, 90, 100 avec poids 1, 2, 1 → 90',
    insightTitle: 'Les poids élevés ont davantage d’influence',
    insightBody: 'Une valeur de poids 2 contribue deux fois plus que la même valeur avec un poids de 1.'
  },

  'median-calculator': {
    formula: 'middle of sorted values',
    title: 'Trouver la valeur centrale d’un ensemble de données',
    intro: 'Les valeurs sont triées puis la position centrale est choisie, ou les deux valeurs centrales sont moyennées.',
    example: '1,2,3,4,5 → médiane 3',
    insightTitle: 'La médiane résiste aux valeurs extrêmes',
    insightBody: 'Contrairement à la moyenne, une très grande valeur aberrante peut avoir peu d’effet sur la médiane.'
  },

  'mode-calculator': {
    formula: 'value with maximum frequency',
    title: 'Trouver la valeur la plus fréquente',
    intro: 'UtilityLake compte les occurrences et renvoie la ou les valeurs ayant la fréquence la plus élevée.',
    example: '1,2,2,3 → mode 2',
    insightTitle: 'Un ensemble de données peut avoir plusieurs modes',
    insightBody: 'Plusieurs valeurs peuvent partager la même fréquence maximale.'
  },

  'standard-deviation-calculator': {
    formula: '√(Σ(x − mean)² ÷ N)',
    title: 'Mesurer la dispersion des valeurs',
    intro: 'Calculez l’écart type d’une population ou d’un échantillon à partir des écarts autour de la moyenne.',
    example: 'Un écart type plus faible signifie que les valeurs sont davantage regroupées autour de la moyenne.',
    insightTitle: 'Les formules pour échantillon et population utilisent des diviseurs différents',
    insightBody: 'L’écart type de population divise par N, tandis que celui d’un échantillon divise par N − 1.'
  },

  'rule-of-three-calculator': {
    formula: 'x = b × c ÷ a',
    title: 'Résoudre une règle de trois proportionnelle',
    intro: 'Pour a:b = c:x, UtilityLake calcule la quatrième valeur manquante.',
    example: '2:4 = 3:x → x = 6',
    insightTitle: 'La règle de trois est simplement une proportion',
    insightBody: 'Sa méthode habituelle découle directement du produit en croix.'
  }
,

  'scientific-notation-converter': {
    formula: 'a × 10ⁿ',
    title: 'Écrire des nombres en notation scientifique',
    intro: 'Convertissez un nombre en un coefficient multiplié par une puissance de dix.',
    example: '123456 → 1,23456 × 10⁵',
    insightTitle: 'La notation scientifique facilite la lecture des ordres de grandeur',
    insightBody: 'Les nombres très grands ou très petits sont plus faciles à comparer lorsqu’ils sont exprimés comme puissances de dix.'
  },

  'square-root-calculator': {
    formula: '√x',
    title: 'Calculer la racine carrée principale',
    intro: 'Trouvez la valeur non négative dont le carré correspond au nombre saisi.',
    example: '√144 = 12',
    insightTitle: 'La racine carrée principale est non négative',
    insightBody: 'Même si 12 et −12 donnent tous les deux 144 lorsqu’ils sont élevés au carré, √144 désigne par convention 12.'
  },

  'exponent-calculator': {
    formula: 'base^exponent',
    title: 'Élever un nombre à une puissance',
    intro: 'UtilityLake calcule une base élevée à l’exposant sélectionné.',
    example: '2¹⁰ = 1024',
    insightTitle: 'Les exposants négatifs représentent des inverses',
    insightBody: 'Pour une base non nulle, a⁻ⁿ est égal à 1/aⁿ.'
  },

  'logarithm-calculator': {
    formula: 'log_b(x) = ln(x) ÷ ln(b)',
    title: 'Calculer un logarithme dans toute base valide',
    intro: 'Trouvez l’exposant auquel la base doit être élevée pour obtenir le nombre sélectionné.',
    example: 'log₁₀(100) = 2',
    insightTitle: 'Le logarithme est l’opération inverse de l’exponentiation',
    insightBody: 'Si b² = x, alors le logarithme de x en base b est égal à 2.'
  },

  'factorial-calculator': {
    formula: 'n! = 1 × 2 × ... × n',
    title: 'Calculer la factorielle d’un entier',
    intro: 'Multipliez tous les entiers positifs de 1 jusqu’à n.',
    example: '5! = 120',
    insightTitle: 'Les factorielles augmentent extrêmement vite',
    insightBody: 'Même des valeurs relativement faibles de n produisent des résultats très élevés.'
  },

  'gcd-calculator': {
    formula: 'GCD(a,b)',
    title: 'Trouver le plus grand commun diviseur',
    intro: 'Trouvez le plus grand entier qui divise les deux valeurs sans reste.',
    example: 'PGCD(48,18) = 6',
    insightTitle: 'Le PGCD permet de simplifier fractions et rapports',
    insightBody: 'Diviser le numérateur et le dénominateur par leur PGCD réduit une fraction à sa forme la plus simple.'
  },

  'lcm-calculator': {
    formula: '|a × b| ÷ GCD(a,b)',
    title: 'Trouver le plus petit commun multiple',
    intro: 'Trouvez le plus petit nombre positif qui est un multiple des deux entiers saisis.',
    example: 'PPCM(12,18) = 36',
    insightTitle: 'PGCD et PPCM sont étroitement liés',
    insightBody: 'Pour des entiers non nuls, leur produit est directement lié au produit de leur PGCD et de leur PPCM.'
  },

  'prime-number-checker': {
    formula: 'test divisors up to √n',
    title: 'Vérifier si un entier est premier',
    intro: 'UtilityLake vérifie si l’entier possède un diviseur autre que 1 et lui-même.',
    example: '97 → nombre premier',
    insightTitle: 'Il suffit de tester les diviseurs jusqu’à la racine carrée',
    insightBody: 'S’il existe un diviseur plus grand, il doit être associé à un diviseur plus petit qui aurait déjà été trouvé.'
  },

  'prime-factorization-calculator': {
    formula: 'n = p₁ × p₂ × ...',
    title: 'Décomposer un entier en facteurs premiers',
    intro: 'Divisez successivement le nombre par des facteurs premiers jusqu’à obtenir sa décomposition complète.',
    example: '360 = 2 × 2 × 2 × 3 × 3 × 5',
    insightTitle: 'La décomposition en facteurs premiers est unique',
    insightBody: 'À l’ordre des facteurs près, tout entier supérieur à 1 possède une seule décomposition en facteurs premiers.'
  },

  'rounding-calculator': {
    formula: 'round(value × 10ⁿ) ÷ 10ⁿ',
    title: 'Arrondir un nombre à un certain nombre de décimales',
    intro: 'Choisissez combien de chiffres doivent rester après le séparateur décimal.',
    example: '12,34567 → 12,35 à 2 décimales',
    insightTitle: 'Décimales et chiffres significatifs sont différents',
    insightBody: 'Les décimales comptent les chiffres après le séparateur décimal, tandis que les chiffres significatifs commencent au premier chiffre non nul.'
  },

  'significant-figures-calculator': {
    formula: 'round to n significant digits',
    title: 'Arrondir un nombre à un nombre donné de chiffres significatifs',
    intro: 'Conservez un nombre choisi de chiffres pertinents indépendamment de leur position décimale.',
    example: '12345,678 → 12350 à 4 chiffres significatifs',
    insightTitle: 'Les zéros initiaux ne sont pas significatifs',
    insightBody: 'Dans 0,0042, les chiffres significatifs sont 4 et 2.'
  },

  'percentage-error-calculator': {
    formula: '|measured − accepted| ÷ |accepted| × 100',
    title: 'Mesurer l’erreur par rapport à une valeur acceptée',
    intro: 'Comparez une valeur mesurée à une référence acceptée et exprimez l’erreur absolue en pourcentage.',
    example: '98 par rapport à 100 → erreur de 2 %',
    insightTitle: 'La valeur acceptée est utilisée au dénominateur',
    insightBody: 'L’erreur en pourcentage exprime l’écart par rapport à la référence considérée comme correcte.'
  },

  'absolute-difference-calculator': {
    formula: '|A − B|',
    title: 'Trouver la distance entre deux valeurs',
    intro: 'Soustrayez les valeurs et ignorez le signe de la différence.',
    example: '|10 − 7| = 3',
    insightTitle: 'La différence absolue n’a pas de direction',
    insightBody: 'Le résultat indique à quelle distance se trouvent les nombres et non lequel est le plus grand.'
  },

  'range-calculator': {
    formula: 'range = max − min',
    title: 'Trouver le minimum, le maximum et l’étendue',
    intro: 'UtilityLake identifie les valeurs minimale et maximale puis les soustrait pour calculer l’étendue.',
    example: '2,3,5,7,12 → étendue 10',
    insightTitle: 'L’étendue utilise uniquement les deux valeurs extrêmes',
    insightBody: 'Les valeurs situées entre le minimum et le maximum n’affectent pas l’étendue.'
  }
};

export const calculatorMathEditorialDe: Partial<Record<string, ToolEditorial>> =
  Object.fromEntries(
    Object.entries(de).map(([id, def]) => [id, build('de', def)])
  );

export const calculatorMathEditorialFr: Partial<Record<string, ToolEditorial>> =
  Object.fromEntries(
    Object.entries(fr).map(([id, def]) => [id, build('fr', def)])
  );
