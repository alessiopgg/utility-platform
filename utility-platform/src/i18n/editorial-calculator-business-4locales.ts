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
    "id": "margin-calculator",
    "formula": "(revenue − cost) ÷ revenue × 100",
    "es": [
      "Calcular el margen bruto a partir de ingresos y costes",
      "Mide qué parte de los ingresos queda después de restar los costes.",
      "Ingresos 1000, coste 600 → margen 40%",
      "El margen utiliza los ingresos como referencia",
      "Por eso margen y markup pueden producir porcentajes distintos a partir del mismo precio y coste."
    ],
    "pt-BR": [
      "Calcular a margem bruta a partir de receita e custo",
      "Meça qual parcela da receita permanece depois de subtrair o custo.",
      "Receita 1000, custo 600 → margem 40%",
      "A margem usa a receita como referência",
      "Por isso margem e markup podem produzir percentuais diferentes a partir do mesmo preço e custo."
    ],
    "de": [
      "Bruttomarge aus Umsatz und Kosten berechnen",
      "Bestimme, welcher Anteil des Umsatzes nach Abzug der Kosten übrig bleibt.",
      "Umsatz 1000, Kosten 600 → Marge 40 %",
      "Die Marge verwendet den Umsatz als Bezugsgröße",
      "Darum können Marge und Aufschlag bei gleichem Preis und gleichen Kosten unterschiedliche Prozentsätze ergeben."
    ],
    "fr": [
      "Calculer la marge brute à partir du chiffre d’affaires et des coûts",
      "Mesurez la part du chiffre d’affaires restante après soustraction des coûts.",
      "Chiffre d’affaires 1000, coût 600 → marge 40 %",
      "La marge utilise le chiffre d’affaires comme référence",
      "C’est pourquoi marge et majoration peuvent donner des pourcentages différents à partir du même prix et du même coût."
    ]
  },
  {
    "id": "markup-calculator",
    "formula": "(price − cost) ÷ cost × 100",
    "es": [
      "Calcular el markup sobre el coste",
      "Mide cuánto supera el precio de venta al coste en relación con ese mismo coste.",
      "Precio 100, coste 60 → markup 66,67%",
      "Markup y margen utilizan denominadores diferentes",
      "El markup divide el beneficio entre el coste; el margen divide el beneficio entre los ingresos."
    ],
    "pt-BR": [
      "Calcular o markup sobre o custo",
      "Meça quanto o preço de venda excede o custo em relação ao próprio custo.",
      "Preço 100, custo 60 → markup 66,67%",
      "Markup e margem usam denominadores diferentes",
      "O markup divide o lucro pelo custo; a margem divide o lucro pela receita."
    ],
    "de": [
      "Aufschlag auf die Kosten berechnen",
      "Bestimme, wie stark der Verkaufspreis die Kosten relativ zu diesen Kosten übersteigt.",
      "Preis 100, Kosten 60 → Aufschlag 66,67 %",
      "Aufschlag und Marge verwenden unterschiedliche Nenner",
      "Der Aufschlag teilt den Gewinn durch die Kosten; die Marge teilt den Gewinn durch den Umsatz."
    ],
    "fr": [
      "Calculer la majoration sur le coût",
      "Mesurez de combien le prix de vente dépasse le coût par rapport à ce coût.",
      "Prix 100, coût 60 → majoration 66,67 %",
      "Majoration et marge utilisent des dénominateurs différents",
      "La majoration divise le bénéfice par le coût ; la marge divise le bénéfice par le chiffre d’affaires."
    ]
  },
  {
    "id": "profit-calculator",
    "formula": "profit = revenue − cost",
    "es": [
      "Calcular el beneficio a partir de ingresos y costes",
      "Resta el coste total de los ingresos para obtener el beneficio restante.",
      "1000 − 700 = 300 de beneficio",
      "El beneficio es una cantidad; el margen es un porcentaje",
      "Dos negocios pueden tener el mismo beneficio y márgenes muy distintos."
    ],
    "pt-BR": [
      "Calcular o lucro a partir da receita e do custo",
      "Subtraia o custo total da receita para obter o lucro restante.",
      "1000 − 700 = 300 de lucro",
      "Lucro é um valor; margem é uma porcentagem",
      "Duas empresas podem ter o mesmo lucro e margens muito diferentes."
    ],
    "de": [
      "Gewinn aus Umsatz und Kosten berechnen",
      "Ziehe die Gesamtkosten vom Umsatz ab, um den verbleibenden Gewinn zu erhalten.",
      "1000 − 700 = 300 Gewinn",
      "Gewinn ist ein Betrag, Marge ein Prozentsatz",
      "Zwei Unternehmen können denselben Gewinn, aber sehr unterschiedliche Margen haben."
    ],
    "fr": [
      "Calculer le bénéfice à partir du chiffre d’affaires et des coûts",
      "Soustrayez le coût total du chiffre d’affaires pour obtenir le bénéfice restant.",
      "1000 − 700 = 300 de bénéfice",
      "Le bénéfice est un montant, la marge est un pourcentage",
      "Deux entreprises peuvent avoir le même bénéfice mais des marges très différentes."
    ]
  },
  {
    "id": "break-even-calculator",
    "formula": "fixed costs ÷ (price − variable cost)",
    "es": [
      "Estimar cuántas unidades cubren los costes fijos",
      "Divide los costes fijos entre la contribución generada por cada unidad.",
      "10000 ÷ (50 − 30) = 500 unidades",
      "Solo la contribución por unidad cubre los costes fijos",
      "Los ingresos por unidad no bastan por sí solos porque primero hay que cubrir el coste variable."
    ],
    "pt-BR": [
      "Estimar quantas unidades cobrem os custos fixos",
      "Divida os custos fixos pela contribuição gerada por cada unidade.",
      "10000 ÷ (50 − 30) = 500 unidades",
      "Somente a contribuição por unidade cobre os custos fixos",
      "A receita por unidade não basta, pois primeiro é necessário pagar o custo variável."
    ],
    "de": [
      "Schätzen, wie viele Einheiten die Fixkosten decken",
      "Teile die Fixkosten durch den Deckungsbeitrag pro Einheit.",
      "10000 ÷ (50 − 30) = 500 Einheiten",
      "Nur der Deckungsbeitrag pro Einheit deckt Fixkosten",
      "Der Umsatz pro Einheit allein reicht nicht, weil zunächst die variablen Kosten bezahlt werden müssen."
    ],
    "fr": [
      "Estimer combien d’unités couvrent les coûts fixes",
      "Divisez les coûts fixes par la contribution générée par chaque unité.",
      "10000 ÷ (50 − 30) = 500 unités",
      "Seule la contribution par unité couvre les coûts fixes",
      "Le revenu par unité ne suffit pas, car le coût variable doit d’abord être payé."
    ]
  },
  {
    "id": "roi-calculator",
    "formula": "(gain − cost) ÷ cost × 100",
    "es": [
      "Calcular el retorno de la inversión",
      "Compara la ganancia por encima de la inversión inicial con el coste de la inversión.",
      "1300 obtenidos sobre 1000 invertidos → ROI 30%",
      "El ROI expresa el rendimiento respecto al capital invertido",
      "Una ganancia absoluta por sí sola no indica cuánto representa respecto a la inversión inicial."
    ],
    "pt-BR": [
      "Calcular o retorno sobre o investimento",
      "Compare o ganho acima do investimento original com o custo do investimento.",
      "1300 obtidos sobre 1000 investidos → ROI 30%",
      "O ROI expressa o retorno em relação ao capital investido",
      "Um ganho absoluto isolado não mostra o tamanho do retorno em relação ao investimento inicial."
    ],
    "de": [
      "Kapitalrendite berechnen",
      "Vergleiche den Gewinn oberhalb der ursprünglichen Investition mit den Investitionskosten.",
      "1300 aus 1000 investiert → ROI 30 %",
      "Der ROI setzt die Rendite ins Verhältnis zum investierten Kapital",
      "Ein absoluter Gewinn allein zeigt nicht, wie groß die Rendite relativ zur ursprünglichen Investition war."
    ],
    "fr": [
      "Calculer le retour sur investissement",
      "Comparez le gain au-delà de l’investissement initial avec le coût de cet investissement.",
      "1300 obtenus pour 1000 investis → ROI 30 %",
      "Le ROI exprime le rendement par rapport au capital investi",
      "Un gain absolu seul n’indique pas l’importance du rendement par rapport à l’investissement initial."
    ]
  },
  {
    "id": "roas-calculator",
    "formula": "attributed revenue ÷ ad spend",
    "es": [
      "Calcular el retorno de la inversión publicitaria",
      "Compara los ingresos atribuidos con el importe gastado en publicidad.",
      "5000 de ingresos ÷ 1000 de gasto = ROAS 5×",
      "El ROAS mide ingresos, no beneficio",
      "Un ROAS alto no significa automáticamente que una campaña sea rentable después de costes de producto y operación."
    ],
    "pt-BR": [
      "Calcular o retorno sobre o gasto com anúncios",
      "Compare a receita atribuída com o valor gasto em publicidade.",
      "5000 de receita ÷ 1000 de gasto = ROAS 5×",
      "O ROAS mede receita, não lucro",
      "Um ROAS alto não significa automaticamente que a campanha seja lucrativa após custos de produto e operação."
    ],
    "de": [
      "Return on Ad Spend berechnen",
      "Vergleiche den zugeordneten Umsatz mit den Werbeausgaben.",
      "5000 Umsatz ÷ 1000 Werbekosten = ROAS 5×",
      "ROAS misst Umsatz, nicht Gewinn",
      "Ein hoher ROAS bedeutet nicht automatisch, dass eine Kampagne nach Produkt- und Betriebskosten profitabel ist."
    ],
    "fr": [
      "Calculer le retour sur dépenses publicitaires",
      "Comparez le chiffre d’affaires attribué au montant dépensé en publicité.",
      "5000 de chiffre d’affaires ÷ 1000 de dépenses = ROAS 5×",
      "Le ROAS mesure le chiffre d’affaires, pas le bénéfice",
      "Un ROAS élevé ne signifie pas automatiquement qu’une campagne est rentable après les coûts de produit et d’exploitation."
    ]
  },
  {
    "id": "cac-calculator",
    "formula": "(marketing + sales costs) ÷ new customers",
    "es": [
      "Calcular el coste de adquisición de clientes",
      "Reparte los costes de marketing y ventas entre los nuevos clientes adquiridos.",
      "5000 + 3000 entre 100 clientes → CAC 80",
      "El CAC es más útil cuando se compara con el LTV",
      "El coste de adquisición por sí solo no indica si los clientes generan suficiente valor durante su relación."
    ],
    "pt-BR": [
      "Calcular o custo de aquisição de clientes",
      "Distribua os custos de marketing e vendas entre os novos clientes adquiridos.",
      "5000 + 3000 para 100 clientes → CAC 80",
      "O CAC é mais útil quando comparado ao LTV",
      "O custo de aquisição isolado não mostra se os clientes geram valor suficiente ao longo do relacionamento."
    ],
    "de": [
      "Kundenakquisitionskosten berechnen",
      "Verteile Marketing- und Vertriebskosten auf die neu gewonnenen Kunden.",
      "5000 + 3000 auf 100 Kunden → CAC 80",
      "CAC wird im Vergleich mit LTV aussagekräftiger",
      "Die Akquisitionskosten allein zeigen nicht, ob Kunden über ihre Lebensdauer genügend Wert erzeugen."
    ],
    "fr": [
      "Calculer le coût d’acquisition client",
      "Répartissez les coûts marketing et commerciaux sur les nouveaux clients acquis.",
      "5000 + 3000 pour 100 clients → CAC 80",
      "Le CAC devient plus utile lorsqu’il est comparé au LTV",
      "Le coût d’acquisition seul n’indique pas si les clients génèrent suffisamment de valeur sur leur durée de vie."
    ]
  },
  {
    "id": "ltv-calculator",
    "formula": "purchase × frequency × margin × years",
    "es": [
      "Estimar el valor de vida del cliente",
      "Estima el valor del cliente usando importe de compra, frecuencia, margen bruto y duración de la relación.",
      "50 × 6 × 60% × 3 = LTV estimado 540",
      "El LTV es una estimación basada en supuestos",
      "Cambios en retención, margen o frecuencia de compra pueden modificar mucho el resultado."
    ],
    "pt-BR": [
      "Estimar o valor do cliente ao longo do tempo",
      "Estime o valor do cliente usando valor de compra, frequência, margem bruta e duração do relacionamento.",
      "50 × 6 × 60% × 3 = LTV estimado 540",
      "O LTV é uma estimativa baseada em premissas",
      "Mudanças em retenção, margem ou frequência de compra podem alterar bastante o resultado."
    ],
    "de": [
      "Customer Lifetime Value schätzen",
      "Schätze den Kundenwert anhand von Kaufbetrag, Kaufhäufigkeit, Bruttomarge und Beziehungsdauer.",
      "50 × 6 × 60 % × 3 = geschätzter LTV 540",
      "LTV ist eine Schätzung auf Basis von Annahmen",
      "Änderungen bei Bindung, Marge oder Kaufhäufigkeit können das Ergebnis deutlich verändern."
    ],
    "fr": [
      "Estimer la valeur vie client",
      "Estimez la valeur client à partir du montant d’achat, de la fréquence, de la marge brute et de la durée de relation.",
      "50 × 6 × 60 % × 3 = LTV estimé 540",
      "Le LTV est une estimation fondée sur des hypothèses",
      "Des changements de rétention, de marge ou de fréquence d’achat peuvent fortement modifier le résultat."
    ]
  },
  {
    "id": "conversion-rate-calculator",
    "formula": "conversions ÷ visitors × 100",
    "es": [
      "Calcular la tasa de conversión",
      "Mide qué porcentaje de visitantes completó la conversión deseada.",
      "50 conversiones de 1000 visitantes = 5%",
      "El denominador define el significado de la tasa",
      "Visitantes, sesiones y clics son poblaciones distintas y pueden producir tasas de conversión diferentes."
    ],
    "pt-BR": [
      "Calcular a taxa de conversão",
      "Meça qual porcentagem dos visitantes concluiu a conversão desejada.",
      "50 conversões em 1000 visitantes = 5%",
      "O denominador define o significado da taxa",
      "Visitantes, sessões e cliques são populações diferentes e podem produzir taxas de conversão distintas."
    ],
    "de": [
      "Conversion Rate berechnen",
      "Bestimme, welcher Prozentsatz der Besucher die gewünschte Conversion abgeschlossen hat.",
      "50 Conversions bei 1000 Besuchern = 5 %",
      "Der Nenner bestimmt die Bedeutung der Rate",
      "Besucher, Sitzungen und Klicks sind unterschiedliche Grundgesamtheiten und können verschiedene Conversion Rates ergeben."
    ],
    "fr": [
      "Calculer le taux de conversion",
      "Mesurez le pourcentage de visiteurs ayant effectué la conversion souhaitée.",
      "50 conversions sur 1000 visiteurs = 5 %",
      "Le dénominateur définit la signification du taux",
      "Visiteurs, sessions et clics sont des populations différentes et peuvent produire des taux de conversion différents."
    ]
  },
  {
    "id": "churn-rate-calculator",
    "formula": "customers lost ÷ customers at start × 100",
    "es": [
      "Calcular la tasa de abandono de clientes",
      "Mide la proporción de clientes iniciales perdidos durante un periodo.",
      "50 perdidos de 1000 clientes iniciales = 5%",
      "El churn depende del periodo de medición",
      "Las tasas mensuales y anuales no deben compararse como si representaran el mismo intervalo."
    ],
    "pt-BR": [
      "Calcular a taxa de churn de clientes",
      "Meça a parcela dos clientes iniciais perdida durante um período.",
      "50 perdidos em 1000 clientes iniciais = 5%",
      "O churn depende do período de medição",
      "Taxas mensais e anuais não devem ser comparadas como se representassem o mesmo intervalo."
    ],
    "de": [
      "Kundenabwanderungsrate berechnen",
      "Bestimme den Anteil der zu Periodenbeginn vorhandenen Kunden, die während der Periode verloren gingen.",
      "50 von 1000 Startkunden verloren = 5 %",
      "Churn hängt vom Messzeitraum ab",
      "Monatliche und jährliche Churn-Raten sollten nicht so verglichen werden, als würden sie denselben Zeitraum abbilden."
    ],
    "fr": [
      "Calculer le taux d’attrition client",
      "Mesurez la part des clients présents au début qui ont été perdus pendant une période.",
      "50 perdus sur 1000 clients initiaux = 5 %",
      "Le churn dépend de la période de mesure",
      "Les taux mensuels et annuels ne doivent pas être comparés comme s’ils représentaient le même intervalle."
    ]
  },
  {
    "id": "growth-rate-calculator",
    "formula": "(end − start) ÷ |start| × 100",
    "es": [
      "Calcular el crecimiento porcentual",
      "Compara un valor final con su valor inicial.",
      "100 → 125 = crecimiento del 25%",
      "La tasa de crecimiento usa el valor inicial como base",
      "El mismo aumento absoluto produce un porcentaje distinto según el valor de partida."
    ],
    "pt-BR": [
      "Calcular o crescimento percentual",
      "Compare um valor final com seu valor inicial.",
      "100 → 125 = crescimento de 25%",
      "A taxa de crescimento usa o valor inicial como base",
      "O mesmo aumento absoluto produz uma porcentagem diferente dependendo do valor de partida."
    ],
    "de": [
      "Prozentuales Wachstum berechnen",
      "Vergleiche einen Endwert mit seinem Ausgangswert.",
      "100 → 125 = 25 % Wachstum",
      "Die Wachstumsrate verwendet den Ausgangswert als Basis",
      "Derselbe absolute Anstieg ergibt je nach Ausgangswert einen anderen Prozentsatz."
    ],
    "fr": [
      "Calculer la croissance en pourcentage",
      "Comparez une valeur finale à sa valeur initiale.",
      "100 → 125 = croissance de 25 %",
      "Le taux de croissance utilise la valeur initiale comme base",
      "La même hausse absolue produit un pourcentage différent selon le point de départ."
    ]
  },
  {
    "id": "cagr-calculator",
    "formula": "(end ÷ start)^(1 ÷ years) − 1",
    "es": [
      "Calcular la tasa de crecimiento anual compuesta",
      "Encuentra la tasa anual constante que conectaría un valor inicial con uno final durante varios años.",
      "1000 → 1500 en 5 años ≈ CAGR 8,45%",
      "El CAGR suaviza el recorrido entre inicio y final",
      "No muestra la volatilidad año a año; representa una tasa anual constante equivalente."
    ],
    "pt-BR": [
      "Calcular a taxa composta de crescimento anual",
      "Encontre a taxa anual constante que ligaria um valor inicial a um valor final ao longo de vários anos.",
      "1000 → 1500 em 5 anos ≈ CAGR 8,45%",
      "O CAGR suaviza o caminho entre início e fim",
      "Ele não mostra a volatilidade ano a ano; representa uma taxa anual constante equivalente."
    ],
    "de": [
      "Durchschnittliche jährliche Wachstumsrate berechnen",
      "Bestimme die konstante jährliche Rate, die einen Anfangs- mit einem Endwert über mehrere Jahre verbinden würde.",
      "1000 → 1500 in 5 Jahren ≈ CAGR 8,45 %",
      "CAGR glättet den Verlauf zwischen Start und Ende",
      "Die jährliche Schwankung wird nicht gezeigt; dargestellt wird eine äquivalente konstante Jahresrate."
    ],
    "fr": [
      "Calculer le taux de croissance annuel composé",
      "Trouvez le taux annuel constant qui relierait une valeur initiale à une valeur finale sur plusieurs années.",
      "1000 → 1500 en 5 ans ≈ CAGR 8,45 %",
      "Le CAGR lisse le parcours entre début et fin",
      "Il ne montre pas la volatilité année par année ; il représente un taux annuel constant équivalent."
    ]
  },
  {
    "id": "simple-interest-calculator",
    "formula": "principal × rate × years",
    "es": [
      "Calcular el interés simple",
      "El interés se calcula únicamente sobre el capital inicial durante toda la duración.",
      "10000 al 5% durante 3 años → 1500 de interés",
      "El interés simple no capitaliza",
      "Los intereses ya generados no producen intereses adicionales."
    ],
    "pt-BR": [
      "Calcular juros simples",
      "Os juros são calculados apenas sobre o capital inicial durante todo o período.",
      "10000 a 5% por 3 anos → 1500 de juros",
      "Juros simples não capitalizam",
      "Os juros já obtidos não geram novos juros."
    ],
    "de": [
      "Einfache Zinsen berechnen",
      "Die Zinsen werden über die gesamte Laufzeit nur auf das ursprüngliche Kapital berechnet.",
      "10000 zu 5 % für 3 Jahre → 1500 Zinsen",
      "Einfache Zinsen verzinsen sich nicht weiter",
      "Bereits verdiente Zinsen erzeugen selbst keine zusätzlichen Zinsen."
    ],
    "fr": [
      "Calculer des intérêts simples",
      "Les intérêts sont calculés uniquement sur le capital initial pendant toute la durée.",
      "10000 à 5 % pendant 3 ans → 1500 d’intérêts",
      "Les intérêts simples ne se capitalisent pas",
      "Les intérêts déjà gagnés ne génèrent pas eux-mêmes de nouveaux intérêts."
    ]
  },
  {
    "id": "compound-interest-calculator",
    "formula": "P × (1 + r/m)^(m×t)",
    "es": [
      "Calcular el interés compuesto",
      "Los intereses se añaden periódicamente al saldo para que los intereses posteriores también se apliquen a los anteriores.",
      "La frecuencia de capitalización afecta al importe final.",
      "La capitalización genera crecimiento sobre crecimiento previo",
      "Esa es la diferencia matemática clave frente al interés simple."
    ],
    "pt-BR": [
      "Calcular juros compostos",
      "Os juros são adicionados periodicamente ao saldo, fazendo com que juros posteriores incidam também sobre juros anteriores.",
      "A frequência de capitalização afeta o valor final.",
      "A capitalização gera crescimento sobre crescimento anterior",
      "Essa é a principal diferença matemática em relação aos juros simples."
    ],
    "de": [
      "Zinseszinsen berechnen",
      "Zinsen werden regelmäßig dem Saldo zugeschlagen, sodass spätere Zinsen auch auf frühere Zinsen anfallen.",
      "Die Häufigkeit der Verzinsung beeinflusst den Endbetrag.",
      "Zinseszins erzeugt Wachstum auf vorherigem Wachstum",
      "Das ist der entscheidende mathematische Unterschied zu einfachen Zinsen."
    ],
    "fr": [
      "Calculer des intérêts composés",
      "Les intérêts sont ajoutés périodiquement au solde, de sorte que les intérêts futurs s’appliquent aussi aux intérêts déjà acquis.",
      "La fréquence de capitalisation influence le montant final.",
      "La capitalisation produit de la croissance sur la croissance passée",
      "C’est la principale différence mathématique avec les intérêts simples."
    ]
  },
  {
    "id": "loan-payment-calculator",
    "formula": "P × r × (1+r)^n ÷ ((1+r)^n − 1)",
    "es": [
      "Estimar una cuota mensual fija de préstamo",
      "Calcula la cuota fija de un préstamo amortizable usando capital, tasa anual y plazo.",
      "La tasa se convierte en mensual y el plazo en meses.",
      "Un plazo mayor reduce las cuotas pero puede aumentar el interés total",
      "Cuotas más bajas reparten el pago entre más periodos sujetos a intereses."
    ],
    "pt-BR": [
      "Estimar uma parcela mensal fixa de empréstimo",
      "Calcule a parcela fixa de um empréstimo amortizável usando principal, taxa anual e prazo.",
      "A taxa é convertida para mensal e o prazo para meses.",
      "Um prazo maior reduz as parcelas, mas pode aumentar o total de juros",
      "Parcelas menores distribuem o pagamento por mais períodos com incidência de juros."
    ],
    "de": [
      "Feste monatliche Kreditrate schätzen",
      "Berechne die feste Rate eines Tilgungsdarlehens aus Kapital, Jahreszins und Laufzeit.",
      "Der Zinssatz wird auf monatlich und die Laufzeit auf Monate umgerechnet.",
      "Eine längere Laufzeit senkt die Rate, kann aber die Gesamtzinsen erhöhen",
      "Niedrigere Monatsraten verteilen die Rückzahlung auf mehr verzinste Perioden."
    ],
    "fr": [
      "Estimer une mensualité fixe de prêt",
      "Calculez la mensualité fixe d’un prêt amortissable à partir du capital, du taux annuel et de la durée.",
      "Le taux est converti en taux mensuel et la durée en mois.",
      "Une durée plus longue réduit les mensualités mais peut augmenter le total des intérêts",
      "Des mensualités plus faibles étalent le remboursement sur davantage de périodes portant intérêt."
    ]
  },
  {
    "id": "amortization-calculator",
    "formula": "fixed payment over n monthly periods",
    "es": [
      "Estimar la cuota y el interés total de un préstamo",
      "Calcula la cuota mensual, el importe total devuelto y los intereses totales de un préstamo amortizable.",
      "Interés total = total pagado − capital",
      "Las primeras cuotas contienen más intereses",
      "En una amortización ordinaria, la parte de intereses disminuye a medida que baja el saldo pendiente."
    ],
    "pt-BR": [
      "Estimar a parcela e os juros totais de um empréstimo",
      "Calcule a parcela mensal, o total pago e os juros totais de um empréstimo amortizável.",
      "Juros totais = total pago − principal",
      "As primeiras parcelas contêm mais juros",
      "Em uma amortização comum, a parcela de juros diminui à medida que o saldo devedor cai."
    ],
    "de": [
      "Rate und Gesamtzinsen eines Kredits schätzen",
      "Berechne Monatsrate, insgesamt zurückgezahlten Betrag und Gesamtzinsen eines Tilgungsdarlehens.",
      "Gesamtzinsen = Gesamtzahlung − Kapital",
      "Frühe Raten enthalten einen höheren Zinsanteil",
      "Bei normaler Tilgung sinkt der Zinsanteil, wenn die Restschuld abnimmt."
    ],
    "fr": [
      "Estimer la mensualité et le total des intérêts d’un prêt",
      "Calculez la mensualité, le montant total remboursé et le total des intérêts d’un prêt amortissable.",
      "Intérêts totaux = total payé − capital",
      "Les premières mensualités contiennent davantage d’intérêts",
      "Dans un amortissement classique, la part d’intérêts diminue à mesure que le capital restant baisse."
    ]
  },
  {
    "id": "savings-goal-calculator",
    "formula": "future-value annuity calculation",
    "es": [
      "Estimar el ahorro mensual necesario para un objetivo",
      "Combina ahorro actual, objetivo, rendimiento esperado y horizonte temporal para estimar una aportación mensual.",
      "Un rendimiento mayor o más tiempo suelen reducir la aportación mensual necesaria.",
      "El rendimiento esperado es una hipótesis, no una garantía",
      "Los rendimientos reales pueden variar, por lo que el resultado debe tratarse como una estimación."
    ],
    "pt-BR": [
      "Estimar a economia mensal necessária para uma meta",
      "Combine poupança atual, valor-alvo, retorno esperado e horizonte de tempo para estimar uma contribuição mensal.",
      "Maior retorno ou mais tempo geralmente reduzem a contribuição mensal necessária.",
      "O retorno esperado é uma hipótese, não uma garantia",
      "Os retornos reais podem variar, portanto o resultado deve ser tratado como estimativa."
    ],
    "de": [
      "Monatliche Sparrate für ein Ziel schätzen",
      "Kombiniere vorhandenes Erspartes, Zielbetrag, erwartete Rendite und Zeithorizont, um eine monatliche Einzahlung zu schätzen.",
      "Höhere Rendite oder mehr Zeit senken in der Regel die nötige Monatsrate.",
      "Die erwartete Rendite ist eine Annahme, keine Garantie",
      "Tatsächliche Anlagerenditen können schwanken; das Ergebnis ist daher als Schätzung zu verstehen."
    ],
    "fr": [
      "Estimer l’épargne mensuelle nécessaire pour un objectif",
      "Combinez l’épargne actuelle, le montant cible, le rendement attendu et l’horizon pour estimer une contribution mensuelle.",
      "Un rendement plus élevé ou davantage de temps réduit généralement la contribution mensuelle nécessaire.",
      "Le rendement attendu est une hypothèse, pas une garantie",
      "Les rendements réels peuvent varier ; le résultat doit donc être considéré comme une estimation."
    ]
  },
  {
    "id": "discount-calculator",
    "formula": "discount = price × rate; final = price − discount",
    "es": [
      "Calcular un descuento y el precio final",
      "Calcula el importe descontado del precio original y el precio restante después del descuento.",
      "100 con 20% de descuento → descuento 20, precio final 80",
      "Los descuentos sucesivos no se suman simplemente",
      "Un segundo descuento porcentual se aplica al precio ya reducido."
    ],
    "pt-BR": [
      "Calcular desconto e preço final",
      "Encontre o valor retirado do preço original e o preço restante após o desconto.",
      "100 com 20% de desconto → desconto 20, preço final 80",
      "Descontos sucessivos não são simplesmente somados",
      "Um segundo desconto percentual é aplicado sobre o preço já reduzido."
    ],
    "de": [
      "Rabatt und Endpreis berechnen",
      "Bestimme den vom ursprünglichen Preis abgezogenen Betrag und den Preis nach dem Rabatt.",
      "100 mit 20 % Rabatt → Rabatt 20, Endpreis 80",
      "Aufeinanderfolgende Rabatte werden nicht einfach addiert",
      "Ein zweiter prozentualer Rabatt wird auf den bereits reduzierten Preis angewendet."
    ],
    "fr": [
      "Calculer une remise et le prix final",
      "Trouvez le montant retiré du prix initial et le prix restant après la remise.",
      "100 avec 20 % de remise → remise 20, prix final 80",
      "Les remises successives ne s’additionnent pas simplement",
      "Une deuxième remise en pourcentage s’applique au prix déjà réduit."
    ]
  },
  {
    "id": "sale-price-calculator",
    "formula": "price × (1 − discount ÷ 100)",
    "es": [
      "Calcular el precio después de un descuento porcentual",
      "Multiplica el precio original por la proporción que queda después del descuento.",
      "80 con 15% de descuento → 68",
      "Un descuento del 15% significa pagar el 85%",
      "Trabajar con el porcentaje restante suele ser la forma más rápida de calcular un precio rebajado."
    ],
    "pt-BR": [
      "Calcular o preço após um desconto percentual",
      "Multiplique o preço original pela parcela que permanece após o desconto.",
      "80 com 15% de desconto → 68",
      "Um desconto de 15% significa pagar 85%",
      "Trabalhar com a porcentagem restante costuma ser a forma mais rápida de calcular um preço promocional."
    ],
    "de": [
      "Preis nach einem prozentualen Rabatt berechnen",
      "Multipliziere den ursprünglichen Preis mit dem Anteil, der nach dem Rabatt übrig bleibt.",
      "80 mit 15 % Rabatt → 68",
      "15 % Rabatt bedeutet, 85 % zu bezahlen",
      "Mit dem verbleibenden Prozentsatz zu rechnen ist oft der schnellste Weg zum Angebotspreis."
    ],
    "fr": [
      "Calculer le prix après une remise en pourcentage",
      "Multipliez le prix initial par la part restante après la remise.",
      "80 avec 15 % de remise → 68",
      "Une remise de 15 % signifie payer 85 %",
      "Travailler avec le pourcentage restant est souvent la façon la plus rapide de calculer un prix soldé."
    ]
  },
  {
    "id": "price-per-unit-calculator",
    "formula": "total price ÷ quantity",
    "es": [
      "Comparar productos por precio unitario",
      "Divide el precio total entre la cantidad para normalizar envases de tamaños diferentes.",
      "12,99 ÷ 6 ≈ 2,17 por unidad",
      "El precio unitario hace comparables tamaños distintos",
      "Un envase más barato no es necesariamente más barato por unidad."
    ],
    "pt-BR": [
      "Comparar produtos pelo preço por unidade",
      "Divida o preço total pela quantidade para normalizar embalagens de tamanhos diferentes.",
      "12,99 ÷ 6 ≈ 2,17 por unidade",
      "O preço unitário torna tamanhos diferentes comparáveis",
      "Uma embalagem mais barata no total não é necessariamente mais barata por unidade."
    ],
    "de": [
      "Produkte nach Stückpreis vergleichen",
      "Teile den Gesamtpreis durch die Menge, um unterschiedliche Packungsgrößen vergleichbar zu machen.",
      "12,99 ÷ 6 ≈ 2,17 pro Einheit",
      "Der Stückpreis macht unterschiedliche Packungsgrößen vergleichbar",
      "Eine insgesamt billigere Packung ist nicht zwingend pro Einheit günstiger."
    ],
    "fr": [
      "Comparer des produits par prix unitaire",
      "Divisez le prix total par la quantité pour normaliser des conditionnements de tailles différentes.",
      "12,99 ÷ 6 ≈ 2,17 par unité",
      "Le prix unitaire rend les formats différents comparables",
      "Un emballage moins cher au total n’est pas nécessairement moins cher par unité."
    ]
  },
  {
    "id": "cpm-calculator",
    "formula": "cost ÷ impressions × 1000",
    "es": [
      "Calcular el coste por mil impresiones",
      "Normaliza el coste de la campaña por cada mil impresiones publicitarias.",
      "500 sobre 100000 impresiones → CPM 5",
      "El CPM mide el coste de exposición, no la interacción",
      "Puede haber impresiones sin clics ni conversiones."
    ],
    "pt-BR": [
      "Calcular o custo por mil impressões",
      "Normalize o custo da campanha a cada mil impressões de anúncio.",
      "500 em 100000 impressões → CPM 5",
      "O CPM mede o custo de exposição, não o engajamento",
      "Impressões podem ocorrer sem cliques ou conversões."
    ],
    "de": [
      "Kosten pro tausend Impressionen berechnen",
      "Normiere die Kampagnenkosten auf jeweils tausend Anzeigenimpressionen.",
      "500 bei 100000 Impressionen → CPM 5",
      "CPM misst die Kosten der Sichtbarkeit, nicht die Interaktion",
      "Impressionen können ohne Klicks oder Conversions auftreten."
    ],
    "fr": [
      "Calculer le coût pour mille impressions",
      "Normalisez le coût de campagne pour mille impressions publicitaires.",
      "500 pour 100000 impressions → CPM 5",
      "Le CPM mesure le coût d’exposition, pas l’engagement",
      "Des impressions peuvent avoir lieu sans clics ni conversions."
    ]
  },
  {
    "id": "cpc-calculator",
    "formula": "campaign cost ÷ clicks",
    "es": [
      "Calcular el coste por clic",
      "Divide el coste de la campaña entre el número de clics generados.",
      "500 de coste ÷ 1000 clics = CPC 0,50",
      "Un CPC bajo no significa automáticamente buen rendimiento",
      "Los clics baratos todavía deben generar acciones útiles o ingresos."
    ],
    "pt-BR": [
      "Calcular o custo por clique",
      "Divida o custo da campanha pelo número de cliques gerados.",
      "500 de custo ÷ 1000 cliques = CPC 0,50",
      "CPC baixo não significa automaticamente alto desempenho",
      "Cliques baratos ainda precisam gerar ações úteis ou receita."
    ],
    "de": [
      "Kosten pro Klick berechnen",
      "Teile die Kampagnenkosten durch die Anzahl der erzeugten Klicks.",
      "500 Kosten ÷ 1000 Klicks = CPC 0,50",
      "Ein niedriger CPC bedeutet nicht automatisch hohe Leistung",
      "Günstige Klicks müssen trotzdem nützliche Aktionen oder Umsatz erzeugen."
    ],
    "fr": [
      "Calculer le coût par clic",
      "Divisez le coût de campagne par le nombre de clics générés.",
      "500 de coût ÷ 1000 clics = CPC 0,50",
      "Un CPC faible ne signifie pas automatiquement de bonnes performances",
      "Des clics peu coûteux doivent tout de même générer des actions utiles ou du chiffre d’affaires."
    ]
  },
  {
    "id": "ctr-calculator",
    "formula": "clicks ÷ impressions × 100",
    "es": [
      "Calcular la tasa de clics",
      "Mide qué porcentaje de impresiones generó un clic.",
      "1000 clics de 100000 impresiones = CTR 1%",
      "El CTR mide clics respecto a exposición",
      "No mide directamente ventas, leads ni rentabilidad."
    ],
    "pt-BR": [
      "Calcular a taxa de cliques",
      "Meça qual porcentagem das impressões gerou um clique.",
      "1000 cliques em 100000 impressões = CTR 1%",
      "O CTR mede cliques em relação à exposição",
      "Ele não mede diretamente vendas, leads ou lucratividade."
    ],
    "de": [
      "Click-Through-Rate berechnen",
      "Bestimme, welcher Prozentsatz der Impressionen einen Klick erzeugt hat.",
      "1000 Klicks aus 100000 Impressionen = CTR 1 %",
      "CTR misst Klicks relativ zur Sichtbarkeit",
      "Sie misst nicht direkt Verkäufe, Leads oder Profitabilität."
    ],
    "fr": [
      "Calculer le taux de clics",
      "Mesurez le pourcentage d’impressions ayant généré un clic.",
      "1000 clics sur 100000 impressions = CTR 1 %",
      "Le CTR mesure les clics par rapport à l’exposition",
      "Il ne mesure pas directement les ventes, les prospects ou la rentabilité."
    ]
  },
  {
    "id": "revenue-calculator",
    "formula": "price per unit × quantity",
    "es": [
      "Calcular ingresos a partir de precio y cantidad",
      "Multiplica el precio de venta por unidad por el número de unidades vendidas.",
      "25 × 100 = 2500 de ingresos",
      "Ingresos y beneficio no son lo mismo",
      "Todavía hay que restar los costes antes de determinar el beneficio."
    ],
    "pt-BR": [
      "Calcular receita a partir de preço e quantidade",
      "Multiplique o preço de venda por unidade pelo número de unidades vendidas.",
      "25 × 100 = 2500 de receita",
      "Receita não é o mesmo que lucro",
      "Ainda é necessário subtrair os custos antes de determinar o lucro."
    ],
    "de": [
      "Umsatz aus Preis und Menge berechnen",
      "Multipliziere den Verkaufspreis je Einheit mit der Anzahl verkaufter Einheiten.",
      "25 × 100 = 2500 Umsatz",
      "Umsatz ist nicht dasselbe wie Gewinn",
      "Vor der Gewinnermittlung müssen die Kosten noch abgezogen werden."
    ],
    "fr": [
      "Calculer le chiffre d’affaires à partir du prix et de la quantité",
      "Multipliez le prix de vente unitaire par le nombre d’unités vendues.",
      "25 × 100 = 2500 de chiffre d’affaires",
      "Le chiffre d’affaires n’est pas le bénéfice",
      "Les coûts doivent encore être soustraits avant de déterminer le bénéfice."
    ]
  },
  {
    "id": "profit-margin-calculator",
    "formula": "profit = revenue − cost; margin = profit ÷ revenue × 100",
    "es": [
      "Calcular beneficio y margen de beneficio juntos",
      "Resta los costes de los ingresos y expresa el beneficio resultante como porcentaje de los ingresos.",
      "1000 de ingresos, 700 de costes → beneficio 300, margen 30%",
      "Beneficio y margen responden a preguntas diferentes",
      "El beneficio mide el importe ganado; el margen mide qué parte de cada unidad de ingreso queda como beneficio."
    ],
    "pt-BR": [
      "Calcular lucro e margem de lucro juntos",
      "Subtraia os custos da receita e expresse o lucro resultante como porcentagem da receita.",
      "1000 de receita, 700 de custos → lucro 300, margem 30%",
      "Lucro e margem respondem a perguntas diferentes",
      "O lucro mede o valor ganho; a margem mede quanto de cada unidade de receita permanece como lucro."
    ],
    "de": [
      "Gewinn und Gewinnmarge gemeinsam berechnen",
      "Ziehe die Kosten vom Umsatz ab und drücke den resultierenden Gewinn als Prozentsatz des Umsatzes aus.",
      "1000 Umsatz, 700 Kosten → Gewinn 300, Marge 30 %",
      "Gewinn und Marge beantworten unterschiedliche Fragen",
      "Der Gewinn misst den verdienten Betrag; die Marge misst, welcher Anteil jeder Umsatzeinheit als Gewinn verbleibt."
    ],
    "fr": [
      "Calculer ensemble bénéfice et marge bénéficiaire",
      "Soustrayez les coûts du chiffre d’affaires et exprimez le bénéfice obtenu en pourcentage du chiffre d’affaires.",
      "1000 de chiffre d’affaires, 700 de coûts → bénéfice 300, marge 30 %",
      "Bénéfice et marge répondent à des questions différentes",
      "Le bénéfice mesure le montant gagné ; la marge mesure la part de chaque unité de chiffre d’affaires qui reste en bénéfice."
    ]
  },
  {
    "id": "inventory-turnover-calculator",
    "formula": "COGS ÷ average inventory",
    "es": [
      "Calcular la rotación de inventario",
      "Compara el coste de los bienes vendidos con el inventario medio.",
      "500000 ÷ 100000 = rotación 5×",
      "La rotación es una relación de frecuencia",
      "Un valor de 5 significa que un volumen equivalente al inventario medio se renovó unas cinco veces durante el periodo medido."
    ],
    "pt-BR": [
      "Calcular o giro de estoque",
      "Compare o custo dos produtos vendidos com o estoque médio.",
      "500000 ÷ 100000 = giro 5×",
      "O giro é uma razão de frequência",
      "Um valor de 5 significa que um volume equivalente ao estoque médio foi renovado aproximadamente cinco vezes no período medido."
    ],
    "de": [
      "Lagerumschlag berechnen",
      "Vergleiche die Herstellungskosten der verkauften Waren mit dem durchschnittlichen Lagerbestand.",
      "500000 ÷ 100000 = Umschlag 5×",
      "Der Lagerumschlag ist ein Häufigkeitsverhältnis",
      "Ein Wert von 5 bedeutet, dass ein Volumen in Höhe des durchschnittlichen Bestands im Messzeitraum ungefähr fünfmal umgesetzt wurde."
    ],
    "fr": [
      "Calculer la rotation des stocks",
      "Comparez le coût des marchandises vendues au stock moyen.",
      "500000 ÷ 100000 = rotation 5×",
      "La rotation est un ratio de fréquence",
      "Une valeur de 5 signifie qu’un volume équivalent au stock moyen a été renouvelé environ cinq fois sur la période mesurée."
    ]
  },
  {
    "id": "burn-rate-calculator",
    "formula": "(starting cash − ending cash) ÷ months",
    "es": [
      "Calcular el consumo medio mensual de caja",
      "Mide cuánto efectivo se consumió por mes durante un periodo seleccionado.",
      "500000 → 350000 en 3 meses = 50000/mes",
      "El burn rate es una media",
      "El gasto mensual real puede variar aunque la media calculada permanezca constante."
    ],
    "pt-BR": [
      "Calcular o consumo médio mensal de caixa",
      "Meça quanto caixa foi consumido por mês durante um período selecionado.",
      "500000 → 350000 em 3 meses = 50000/mês",
      "O burn rate é uma média",
      "O gasto mensal real pode variar mesmo quando a média calculada permanece constante."
    ],
    "de": [
      "Durchschnittlichen monatlichen Cash Burn berechnen",
      "Bestimme, wie viel Liquidität pro Monat über einen gewählten Zeitraum verbraucht wurde.",
      "500000 → 350000 über 3 Monate = 50000/Monat",
      "Die Burn Rate ist ein Durchschnitt",
      "Die tatsächlichen monatlichen Ausgaben können schwanken, auch wenn der berechnete Durchschnitt gleich bleibt."
    ],
    "fr": [
      "Calculer la consommation moyenne mensuelle de trésorerie",
      "Mesurez la quantité de trésorerie consommée par mois sur une période choisie.",
      "500000 → 350000 sur 3 mois = 50000/mois",
      "Le burn rate est une moyenne",
      "Les dépenses mensuelles réelles peuvent varier même si la moyenne calculée reste constante."
    ]
  },
  {
    "id": "runway-calculator",
    "formula": "cash available ÷ monthly burn",
    "es": [
      "Estimar cuántos meses durará la caja",
      "Divide el efectivo disponible entre el consumo medio mensual.",
      "250000 ÷ 50000 = 5 meses de runway",
      "El runway supone un burn rate similar en el tiempo",
      "Si los gastos o ingresos cambian de forma importante, el runway real también cambiará."
    ],
    "pt-BR": [
      "Estimar por quantos meses o caixa vai durar",
      "Divida o caixa disponível pelo burn mensal médio.",
      "250000 ÷ 50000 = 5 meses de runway",
      "O runway pressupõe burn semelhante ao longo do tempo",
      "Se gastos ou receitas mudarem significativamente, o runway real também mudará."
    ],
    "de": [
      "Schätzen, wie viele Monate die Liquidität reicht",
      "Teile die verfügbare Liquidität durch den durchschnittlichen monatlichen Cash Burn.",
      "250000 ÷ 50000 = 5 Monate Runway",
      "Runway setzt eine ähnliche Burn Rate im Zeitverlauf voraus",
      "Wenn sich Ausgaben oder Einnahmen deutlich ändern, verändert sich auch der tatsächliche Runway."
    ],
    "fr": [
      "Estimer combien de mois la trésorerie durera",
      "Divisez la trésorerie disponible par la consommation mensuelle moyenne.",
      "250000 ÷ 50000 = 5 mois de runway",
      "Le runway suppose un burn rate relativement stable",
      "Si les dépenses ou les revenus changent fortement, le runway réel changera également."
    ]
  },
  {
    "id": "commission-calculator",
    "formula": "sales × commission rate ÷ 100",
    "es": [
      "Calcular la comisión sobre ventas",
      "Aplica un porcentaje de comisión al importe de las ventas.",
      "10000 al 5% = 500 de comisión",
      "La tasa de comisión y la compensación total son diferentes",
      "Salario base, tramos y bonus no se incluyen salvo que se añadan por separado al cálculo."
    ],
    "pt-BR": [
      "Calcular comissão sobre vendas",
      "Aplique uma porcentagem de comissão ao valor das vendas.",
      "10000 a 5% = 500 de comissão",
      "Taxa de comissão e remuneração total são diferentes",
      "Salário-base, faixas e bônus não são incluídos a menos que sejam adicionados separadamente ao cálculo."
    ],
    "de": [
      "Provision aus Verkäufen berechnen",
      "Wende einen Provisionssatz auf den Verkaufsbetrag an.",
      "10000 zu 5 % = 500 Provision",
      "Provisionssatz und Gesamtvergütung sind unterschiedlich",
      "Grundgehalt, Stufen und Boni sind nicht enthalten, sofern sie nicht separat in die Berechnung einfließen."
    ],
    "fr": [
      "Calculer une commission sur les ventes",
      "Appliquez un taux de commission au montant des ventes.",
      "10000 à 5 % = 500 de commission",
      "Taux de commission et rémunération totale sont différents",
      "Salaire de base, paliers et bonus ne sont pas inclus sauf s’ils sont ajoutés séparément au calcul."
    ]
  },
  {
    "id": "unit-economics-calculator",
    "formula": "revenue/unit − variable cost/unit",
    "es": [
      "Analizar ingresos y contribución por unidad",
      "Normaliza los ingresos totales y los costes variables por unidad o cliente.",
      "100000 de ingresos y 60000 de coste variable sobre 1000 unidades → contribución 40/unidad",
      "Una contribución positiva no equivale a beneficio total",
      "Los costes fijos todavía deben cubrirse después de calcular la contribución por unidad."
    ],
    "pt-BR": [
      "Analisar receita e contribuição por unidade",
      "Normalize a receita total e os custos variáveis por unidade ou cliente.",
      "100000 de receita e 60000 de custo variável em 1000 unidades → contribuição 40/unidade",
      "Contribuição positiva não é o mesmo que lucro total",
      "Os custos fixos ainda precisam ser cobertos após calcular a contribuição por unidade."
    ],
    "de": [
      "Umsatz und Deckungsbeitrag pro Einheit analysieren",
      "Normiere Gesamtumsatz und variable Kosten auf Einheiten oder Kunden.",
      "100000 Umsatz und 60000 variable Kosten bei 1000 Einheiten → Deckungsbeitrag 40/Einheit",
      "Ein positiver Deckungsbeitrag ist nicht dasselbe wie Gesamtgewinn",
      "Fixkosten müssen nach der Berechnung des Deckungsbeitrags pro Einheit weiterhin gedeckt werden."
    ],
    "fr": [
      "Analyser le chiffre d’affaires et la contribution par unité",
      "Normalisez le chiffre d’affaires total et les coûts variables par unité ou client.",
      "100000 de chiffre d’affaires et 60000 de coûts variables sur 1000 unités → contribution 40/unité",
      "Une contribution positive n’est pas équivalente au bénéfice global",
      "Les coûts fixes doivent encore être couverts après le calcul de la contribution par unité."
    ]
  }
];

const ui = {
  es: {
    kicker: 'CÓMO SE CALCULA',
    facts: ['Resultado inmediato', 'Fórmula clara', 'Cálculo local'],
    values: 'Valores',
    result: 'Resultado',
    insight: 'CONVIENE SABERLO',
    faq: 'En resumen',
    logic: '¿Qué lógica utiliza la calculadora?',
    example: '¿Un ejemplo?'
  },
  'pt-BR': {
    kicker: 'COMO É CALCULADO',
    facts: ['Resultado imediato', 'Fórmula clara', 'Cálculo local'],
    values: 'Valores',
    result: 'Resultado',
    insight: 'BOM SABER',
    faq: 'Em resumo',
    logic: 'Qual lógica a calculadora usa?',
    example: 'Um exemplo?'
  },
  de: {
    kicker: 'SO WIRD ES BERECHNET',
    facts: ['Sofortiges Ergebnis', 'Klare Formel', 'Lokale Berechnung'],
    values: 'Werte',
    result: 'Ergebnis',
    insight: 'GUT ZU WISSEN',
    faq: 'Kurz erklärt',
    logic: 'Welche Logik verwendet der Rechner?',
    example: 'Ein Beispiel?'
  },
  fr: {
    kicker: 'COMMENT LE CALCUL EST EFFECTUÉ',
    facts: ['Résultat immédiat', 'Formule claire', 'Calcul local'],
    values: 'Valeurs',
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
  return Object.fromEntries(
    rows.map((row) => [row.id, build(locale, row)])
  );
}

export const calculatorBusinessEditorialEs = make('es');
export const calculatorBusinessEditorialPtBr = make('pt-BR');
export const calculatorBusinessEditorialDe = make('de');
export const calculatorBusinessEditorialFr = make('fr');
