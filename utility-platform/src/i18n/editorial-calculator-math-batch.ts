import type { LocaleId } from "../core/types.ts";
import type { ToolEditorial } from "./tool-editorial.ts";
import {
  bi,
  calculatorEditorial,
  type CalculatorEditorialDefinition
} from "./editorial-factories.ts";

const defs: CalculatorEditorialDefinition[] = [

  {
    id: "percentage-increase-calculator",
    title: bi("Measure how much a value increased", "Misura di quanto è aumentato un valore"),
    intro: bi("Compare an original value with a larger new value and express the change as a percentage of the original.", "Confronta un valore iniziale con uno nuovo più alto ed esprime la variazione come percentuale del valore iniziale."),
    formula: "(new − original) ÷ original × 100",
    example: bi("100 → 120 = 20% increase", "100 → 120 = aumento del 20%"),
    insightTitle: bi("The original value is the reference", "Il valore iniziale è il riferimento"),
    insightBody: bi("Percentage increase is measured relative to where you started, not relative to the final value.", "L’aumento percentuale viene misurato rispetto al valore iniziale, non rispetto al valore finale.")
  },

  {
    id: "percentage-decrease-calculator",
    title: bi("Measure how much a value decreased", "Misura di quanto è diminuito un valore"),
    intro: bi("Compare an original value with a lower new value and calculate the decrease relative to the original.", "Confronta un valore iniziale con uno nuovo più basso e calcola la diminuzione rispetto al valore iniziale."),
    formula: "(original − new) ÷ original × 100",
    example: bi("100 → 80 = 20% decrease", "100 → 80 = diminuzione del 20%"),
    insightTitle: bi("A 20% decrease does not undo a 20% increase", "Una diminuzione del 20% non annulla un aumento del 20%"),
    insightBody: bi("The reference value changes after the first percentage operation, so equal percentage changes in opposite directions are not symmetric.", "Dopo la prima variazione cambia il valore di riferimento, quindi variazioni percentuali uguali in direzioni opposte non sono simmetriche.")
  },

  {
    id: "percentage-difference-calculator",
    title: bi("Compare two values without choosing a baseline", "Confronta due valori senza scegliere un riferimento"),
    intro: bi("Percentage difference uses the average magnitude of two values as a symmetric reference.", "La differenza percentuale usa la grandezza media dei due valori come riferimento simmetrico."),
    formula: "|A − B| ÷ ((|A| + |B|) ÷ 2) × 100",
    example: bi("100 and 120 differ by about 18.18%", "100 e 120 differiscono di circa il 18,18%"),
    insightTitle: bi("Difference and percentage change are not the same", "Differenza percentuale e variazione percentuale non sono la stessa cosa"),
    insightBody: bi("Percentage difference treats both values symmetrically, while percentage change needs a starting value.", "La differenza percentuale tratta entrambi i valori simmetricamente, mentre la variazione percentuale richiede un valore iniziale.")
  },

  {
    id: "reverse-percentage-calculator",
    title: bi("Recover the whole from a known percentage", "Ricava il totale da una percentuale conosciuta"),
    intro: bi("If you know that a value represents a certain percentage of a total, this calculator reconstructs the whole.", "Se sai che un valore rappresenta una certa percentuale del totale, questo calcolatore ricostruisce il valore completo."),
    formula: "part ÷ (percentage ÷ 100)",
    example: bi("25 is 20% of 125", "25 è il 20% di 125"),
    insightTitle: bi("This reverses the ordinary percentage formula", "Questa formula inverte il normale calcolo percentuale"),
    insightBody: bi("Instead of finding a part from the whole, the known part is divided by its decimal percentage.", "Invece di ricavare una parte dal totale, la parte conosciuta viene divisa per la percentuale espressa in forma decimale.")
  },

  {
    id: "fraction-calculator",
    title: bi("Calculate with two fractions", "Calcola con due frazioni"),
    intro: bi("Add, subtract, multiply or divide two fractions and automatically reduce the result.", "Somma, sottrae, moltiplica o divide due frazioni e riduce automaticamente il risultato."),
    formula: "fraction operation → reduce by GCD",
    example: bi("1/2 + 1/3 = 5/6", "1/2 + 1/3 = 5/6"),
    insightTitle: bi("Equivalent fractions share the same value", "Frazioni equivalenti rappresentano lo stesso valore"),
    insightBody: bi("Reducing a fraction changes its numerator and denominator but not the value represented.", "Ridurre una frazione modifica numeratore e denominatore ma non il valore rappresentato.")
  },

  {
    id: "fraction-to-decimal",
    title: bi("Convert a fraction into a decimal", "Converti una frazione in numero decimale"),
    intro: bi("Divide the numerator by the denominator to obtain the decimal representation.", "Divide il numeratore per il denominatore per ottenere la rappresentazione decimale."),
    formula: "numerator ÷ denominator",
    example: bi("1 ÷ 4 = 0.25", "1 ÷ 4 = 0,25"),
    insightTitle: bi("Some fractions produce repeating decimals", "Alcune frazioni producono decimali periodici"),
    insightBody: bi("Fractions such as 1/3 cannot be represented by a finite decimal expansion.", "Frazioni come 1/3 non possono essere rappresentate con un numero decimale finito.")
  },

  {
    id: "decimal-to-fraction",
    title: bi("Convert a decimal into a reduced fraction", "Converti un decimale in una frazione ridotta"),
    intro: bi("UtilityLake converts the decimal value into an integer ratio and reduces it to lowest terms.", "UtilityLake trasforma il valore decimale in un rapporto tra interi e lo riduce ai minimi termini."),
    formula: "decimal → integer ratio → reduce",
    example: bi("0.75 = 3/4", "0,75 = 3/4"),
    insightTitle: bi("Finite decimals always have a fractional form", "I decimali finiti hanno sempre una forma frazionaria"),
    insightBody: bi("A finite decimal can be written over a power of ten and then simplified.", "Un decimale finito può essere scritto su una potenza di dieci e poi semplificato.")
  },

  {
    id: "ratio-calculator",
    title: bi("Reduce a ratio to its simplest form", "Riduci un rapporto alla forma più semplice"),
    intro: bi("Both parts of the ratio are divided by their greatest common divisor.", "Entrambe le parti del rapporto vengono divise per il loro massimo comune divisore."),
    formula: "A:B ÷ GCD(A,B)",
    example: bi("12:18 → 2:3", "12:18 → 2:3"),
    insightTitle: bi("Reducing a ratio preserves the proportion", "Ridurre un rapporto mantiene la proporzione"),
    insightBody: bi("2:3 and 12:18 describe the same relative relationship.", "2:3 e 12:18 descrivono la stessa relazione proporzionale.")
  },

  {
    id: "proportion-calculator",
    title: bi("Solve a missing value in a proportion", "Trova il valore mancante in una proporzione"),
    intro: bi("Solve equations in the form a/b = c/x using cross multiplication.", "Risolve equazioni nella forma a/b = c/x usando il prodotto incrociato."),
    formula: "x = b × c ÷ a",
    example: bi("2/3 = 4/x → x = 6", "2/3 = 4/x → x = 6"),
    insightTitle: bi("Cross multiplication removes the denominators", "Il prodotto incrociato elimina i denominatori"),
    insightBody: bi("From a/b = c/x you can derive a × x = b × c.", "Da a/b = c/x si può ricavare a × x = b × c.")
  },

  {
    id: "average-calculator",
    title: bi("Calculate the arithmetic mean", "Calcola la media aritmetica"),
    intro: bi("Add all values and divide their total by the number of values.", "Somma tutti i valori e divide il totale per il numero di valori."),
    formula: "sum(values) ÷ count(values)",
    example: bi("10, 20, 30 → average 20", "10, 20, 30 → media 20"),
    insightTitle: bi("The mean is sensitive to extreme values", "La media è sensibile ai valori estremi"),
    insightBody: bi("A single unusually high or low number can noticeably shift the arithmetic mean.", "Un singolo valore molto alto o molto basso può spostare sensibilmente la media aritmetica.")
  },

  {
    id: "weighted-average-calculator",
    title: bi("Give different values different importance", "Assegna pesi diversi ai valori"),
    intro: bi("Each value is multiplied by its weight before the weighted total is divided by the sum of the weights.", "Ogni valore viene moltiplicato per il proprio peso prima di dividere il totale ponderato per la somma dei pesi."),
    formula: "Σ(value × weight) ÷ Σ(weights)",
    example: bi("80,90,100 with weights 1,2,1 → 90", "80,90,100 con pesi 1,2,1 → 90"),
    insightTitle: bi("Larger weights have more influence", "I pesi maggiori hanno più influenza"),
    insightBody: bi("A value with weight 2 contributes twice as much as the same value with weight 1.", "Un valore con peso 2 contribuisce il doppio rispetto allo stesso valore con peso 1.")
  },

  {
    id: "median-calculator",
    title: bi("Find the middle value of a dataset", "Trova il valore centrale di un insieme di dati"),
    intro: bi("Values are sorted and the middle position is selected, or the two middle values are averaged.", "I valori vengono ordinati e viene scelto quello centrale, oppure viene calcolata la media dei due valori centrali."),
    formula: "middle of sorted values",
    example: bi("1,2,3,4,5 → median 3", "1,2,3,4,5 → mediana 3"),
    insightTitle: bi("Median is resistant to extreme values", "La mediana resiste meglio ai valori estremi"),
    insightBody: bi("Unlike the mean, a very large outlier may have little effect on the median.", "A differenza della media, un valore estremo molto grande può avere poco effetto sulla mediana.")
  },

  {
    id: "mode-calculator",
    title: bi("Find the most frequent value", "Trova il valore più frequente"),
    intro: bi("UtilityLake counts occurrences and returns the value or values with the highest frequency.", "UtilityLake conta le occorrenze e restituisce il valore o i valori con frequenza maggiore."),
    formula: "value with maximum frequency",
    example: bi("1,2,2,3 → mode 2", "1,2,2,3 → moda 2"),
    insightTitle: bi("A dataset can have more than one mode", "Un insieme può avere più di una moda"),
    insightBody: bi("Multiple values can share the same highest frequency.", "Più valori possono avere la stessa frequenza massima.")
  },

  {
    id: "standard-deviation-calculator",
    title: bi("Measure how spread out values are", "Misura quanto sono dispersi i valori"),
    intro: bi("Calculate population or sample standard deviation from the deviations around the mean.", "Calcola la deviazione standard della popolazione o del campione a partire dagli scarti rispetto alla media."),
    formula: "√(Σ(x − mean)² ÷ N)",
    example: bi("Lower deviation means values cluster closer to the mean.", "Una deviazione più bassa indica valori più vicini alla media."),
    insightTitle: bi("Sample and population formulas use different divisors", "Campione e popolazione usano divisori diversi"),
    insightBody: bi("Population standard deviation divides by N, while the sample version divides by N − 1.", "La deviazione standard della popolazione divide per N, mentre quella campionaria divide per N − 1.")
  },

  {
    id: "rule-of-three-calculator",
    title: bi("Solve a proportional rule of three", "Risolvi una proporzione con la regola del tre"),
    intro: bi("Given a:b = c:x, UtilityLake calculates the missing fourth value.", "Dato a:b = c:x, UtilityLake calcola il quarto valore mancante."),
    formula: "x = b × c ÷ a",
    example: bi("2:4 = 3:x → x = 6", "2:4 = 3:x → x = 6"),
    insightTitle: bi("The rule of three is simply a proportion", "La regola del tre è una proporzione"),
    insightBody: bi("Its familiar shortcut comes directly from cross multiplication.", "La scorciatoia comunemente usata deriva direttamente dal prodotto incrociato.")
  },

  {
    id: "scientific-notation-converter",
    title: bi("Write numbers in scientific notation", "Scrivi numeri in notazione scientifica"),
    intro: bi("Convert a number into a coefficient multiplied by a power of ten.", "Converte un numero in un coefficiente moltiplicato per una potenza di dieci."),
    formula: "a × 10ⁿ",
    example: bi("123456 → 1.23456 × 10⁵", "123456 → 1,23456 × 10⁵"),
    insightTitle: bi("Scientific notation makes scale easier to see", "La notazione scientifica rende più evidente l’ordine di grandezza"),
    insightBody: bi("Very large and very small numbers become easier to compare when expressed as powers of ten.", "Numeri molto grandi o molto piccoli sono più semplici da confrontare quando vengono espressi come potenze di dieci.")
  },

  {
    id: "square-root-calculator",
    title: bi("Calculate the principal square root", "Calcola la radice quadrata principale"),
    intro: bi("Find the non-negative value whose square equals the input number.", "Trova il valore non negativo il cui quadrato corrisponde al numero inserito."),
    formula: "√x",
    example: bi("√144 = 12", "√144 = 12"),
    insightTitle: bi("The principal square root is non-negative", "La radice quadrata principale è non negativa"),
    insightBody: bi("Although both 12 and −12 square to 144, √144 conventionally means 12.", "Anche se sia 12 sia −12 elevati al quadrato danno 144, √144 indica convenzionalmente 12.")
  },

  {
    id: "exponent-calculator",
    title: bi("Raise a number to a power", "Eleva un numero a potenza"),
    intro: bi("UtilityLake calculates a base raised to the selected exponent.", "UtilityLake calcola una base elevata all’esponente selezionato."),
    formula: "base^exponent",
    example: bi("2¹⁰ = 1024", "2¹⁰ = 1024"),
    insightTitle: bi("Negative exponents represent reciprocals", "Gli esponenti negativi rappresentano reciproci"),
    insightBody: bi("For a non-zero base, a⁻ⁿ equals 1/aⁿ.", "Per una base diversa da zero, a⁻ⁿ equivale a 1/aⁿ.")
  },

  {
    id: "logarithm-calculator",
    title: bi("Calculate logarithms in any valid base", "Calcola logaritmi in qualsiasi base valida"),
    intro: bi("Find the exponent to which the base must be raised to obtain the selected number.", "Trova l’esponente a cui elevare la base per ottenere il numero selezionato."),
    formula: "log_b(x) = ln(x) ÷ ln(b)",
    example: bi("log₁₀(100) = 2", "log₁₀(100) = 2"),
    insightTitle: bi("A logarithm is the inverse of exponentiation", "Il logaritmo è l’operazione inversa dell’elevamento a potenza"),
    insightBody: bi("If b² = x, then log base b of x equals 2.", "Se b² = x, allora il logaritmo in base b di x vale 2.")
  },

  {
    id: "factorial-calculator",
    title: bi("Calculate the factorial of an integer", "Calcola il fattoriale di un intero"),
    intro: bi("Multiply every positive integer from 1 through n.", "Moltiplica tutti gli interi positivi da 1 fino a n."),
    formula: "n! = 1 × 2 × ... × n",
    example: bi("5! = 120", "5! = 120"),
    insightTitle: bi("Factorials grow extremely quickly", "I fattoriali crescono estremamente velocemente"),
    insightBody: bi("Even relatively small values of n produce very large results.", "Anche valori relativamente piccoli di n producono risultati molto grandi.")
  },

  {
    id: "gcd-calculator",
    title: bi("Find the greatest common divisor", "Trova il massimo comune divisore"),
    intro: bi("Find the largest integer that divides both input values without a remainder.", "Trova il più grande intero che divide entrambi i valori senza resto."),
    formula: "GCD(a,b)",
    example: bi("GCD(48,18) = 6", "MCD(48,18) = 6"),
    insightTitle: bi("GCD is useful for simplifying ratios and fractions", "Il MCD è utile per semplificare rapporti e frazioni"),
    insightBody: bi("Dividing numerator and denominator by their GCD reduces a fraction to lowest terms.", "Dividere numeratore e denominatore per il loro MCD riduce una frazione ai minimi termini.")
  },

  {
    id: "lcm-calculator",
    title: bi("Find the least common multiple", "Trova il minimo comune multiplo"),
    intro: bi("Find the smallest positive number that is a multiple of both input integers.", "Trova il più piccolo numero positivo multiplo di entrambi gli interi inseriti."),
    formula: "|a × b| ÷ GCD(a,b)",
    example: bi("LCM(12,18) = 36", "mcm(12,18) = 36"),
    insightTitle: bi("GCD and LCM are closely connected", "MCD e mcm sono strettamente collegati"),
    insightBody: bi("For non-zero integers, their product relates directly to the product of their GCD and LCM.", "Per interi non nulli, il loro prodotto è direttamente collegato al prodotto tra MCD e mcm.")
  },

  {
    id: "prime-number-checker",
    title: bi("Check whether an integer is prime", "Controlla se un intero è primo"),
    intro: bi("UtilityLake checks whether the integer has any divisor other than 1 and itself.", "UtilityLake controlla se l’intero possiede divisori diversi da 1 e da se stesso."),
    formula: "test divisors up to √n",
    example: bi("97 → prime", "97 → numero primo"),
    insightTitle: bi("You only need to test divisors up to the square root", "Basta controllare i divisori fino alla radice quadrata"),
    insightBody: bi("If a larger divisor exists, it must be paired with a smaller divisor that would already have been found.", "Se esiste un divisore maggiore, deve essere associato a un divisore minore che sarebbe già stato trovato.")
  },

  {
    id: "prime-factorization-calculator",
    title: bi("Break an integer into prime factors", "Scomponi un intero in fattori primi"),
    intro: bi("Repeatedly divide the number by prime factors until the full factorization is obtained.", "Divide ripetutamente il numero per fattori primi fino a ottenere la scomposizione completa."),
    formula: "n = p₁ × p₂ × ...",
    example: bi("360 = 2 × 2 × 2 × 3 × 3 × 5", "360 = 2 × 2 × 2 × 3 × 3 × 5"),
    insightTitle: bi("Prime factorization is unique", "La scomposizione in fattori primi è unica"),
    insightBody: bi("Apart from the order of factors, every integer greater than 1 has one unique prime factorization.", "A parte l’ordine dei fattori, ogni intero maggiore di 1 possiede un’unica scomposizione in fattori primi.")
  },

  {
    id: "rounding-calculator",
    title: bi("Round a number to decimal places", "Arrotonda un numero a un certo numero di decimali"),
    intro: bi("Choose how many digits should remain after the decimal point.", "Scegli quante cifre mantenere dopo la virgola."),
    formula: "round(value × 10ⁿ) ÷ 10ⁿ",
    example: bi("12.34567 → 12.35 at 2 decimals", "12,34567 → 12,35 con 2 decimali"),
    insightTitle: bi("Decimal places and significant figures are different", "Cifre decimali e cifre significative sono diverse"),
    insightBody: bi("Decimal places count digits after the decimal separator, while significant figures count meaningful digits from the first non-zero digit.", "Le cifre decimali contano le cifre dopo la virgola, mentre le cifre significative partono dalla prima cifra non nulla.")
  },

  {
    id: "significant-figures-calculator",
    title: bi("Round a number to significant figures", "Arrotonda un numero alle cifre significative"),
    intro: bi("Keep a selected number of meaningful digits regardless of decimal position.", "Mantiene un numero selezionato di cifre significative indipendentemente dalla posizione della virgola."),
    formula: "round to n significant digits",
    example: bi("12345.678 → 12350 at 4 significant figures", "12345,678 → 12350 con 4 cifre significative"),
    insightTitle: bi("Leading zeros are not significant", "Gli zeri iniziali non sono significativi"),
    insightBody: bi("In 0.0042, the meaningful digits are 4 and 2.", "In 0,0042 le cifre significative sono 4 e 2.")
  },

  {
    id: "percentage-error-calculator",
    title: bi("Measure error relative to an accepted value", "Misura l’errore rispetto a un valore accettato"),
    intro: bi("Compare a measured value with an accepted reference and express the absolute error as a percentage.", "Confronta un valore misurato con un riferimento accettato ed esprime l’errore assoluto in percentuale."),
    formula: "|measured − accepted| ÷ |accepted| × 100",
    example: bi("98 vs 100 → 2% error", "98 rispetto a 100 → errore del 2%"),
    insightTitle: bi("The accepted value is the denominator", "Il valore accettato è il denominatore"),
    insightBody: bi("Percentage error expresses the discrepancy relative to the reference considered correct.", "L’errore percentuale esprime lo scostamento rispetto al riferimento considerato corretto.")
  },

  {
    id: "absolute-difference-calculator",
    title: bi("Find the distance between two values", "Trova la distanza tra due valori"),
    intro: bi("Subtract the values and ignore the sign of the difference.", "Sottrae i valori e ignora il segno della differenza."),
    formula: "|A − B|",
    example: bi("|10 − 7| = 3", "|10 − 7| = 3"),
    insightTitle: bi("Absolute difference has no direction", "La differenza assoluta non ha direzione"),
    insightBody: bi("The result tells you how far apart the numbers are, not which one is larger.", "Il risultato indica quanto sono distanti i numeri, non quale dei due è maggiore.")
  },

  {
    id: "range-calculator",
    title: bi("Find minimum, maximum and range", "Trova minimo, massimo e intervallo"),
    intro: bi("UtilityLake identifies the smallest and largest values and subtracts them to calculate the range.", "UtilityLake identifica il valore minimo e massimo e li sottrae per calcolare l’intervallo."),
    formula: "range = max − min",
    example: bi("2,3,5,7,12 → range 10", "2,3,5,7,12 → intervallo 10"),
    insightTitle: bi("Range only uses the two extremes", "L’intervallo usa soltanto i due estremi"),
    insightBody: bi("Values between the minimum and maximum do not affect the range.", "I valori compresi tra minimo e massimo non influenzano l’intervallo.")
  }

];

export const calculatorMathEditorialBatch:
  Partial<Record<string, Partial<Record<LocaleId, ToolEditorial>>>> =
  Object.fromEntries(
    defs.map((def) => [def.id, calculatorEditorial(def)])
  );
