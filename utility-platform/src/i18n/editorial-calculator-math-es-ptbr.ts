import type { ToolEditorial } from './tool-editorial.ts';

const rows = [
["percentage-increase-calculator","(new − original) ÷ original × 100",
"Medir cuánto ha aumentado un valor","Compara un valor original con un nuevo valor mayor y expresa el cambio como porcentaje del original.","100 → 120 = aumento del 20%","El valor original es la referencia","El aumento porcentual se mide respecto al punto de partida, no respecto al valor final.",
"Medir quanto um valor aumentou","Compare um valor original com um novo valor maior e expresse a mudança como porcentagem do valor original.","100 → 120 = aumento de 20%","O valor original é a referência","O aumento percentual é medido em relação ao valor inicial, e não ao valor final."],

["percentage-decrease-calculator","(original − new) ÷ original × 100",
"Medir cuánto ha disminuido un valor","Compara un valor original con un nuevo valor menor y calcula la disminución respecto al original.","100 → 80 = disminución del 20%","Una disminución del 20% no deshace un aumento del 20%","El valor de referencia cambia después de la primera operación porcentual, por lo que cambios porcentuales iguales en direcciones opuestas no son simétricos.",
"Medir quanto um valor diminuiu","Compare um valor original com um novo valor menor e calcule a redução em relação ao original.","100 → 80 = redução de 20%","Uma redução de 20% não desfaz um aumento de 20%","O valor de referência muda após a primeira operação percentual, portanto variações iguais em direções opostas não são simétricas."],

["percentage-difference-calculator","|A − B| ÷ ((|A| + |B|) ÷ 2) × 100",
"Comparar dos valores sin elegir una referencia","La diferencia porcentual utiliza la magnitud media de dos valores como referencia simétrica.","100 y 120 difieren aproximadamente un 18,18%","Diferencia porcentual y cambio porcentual no son lo mismo","La diferencia porcentual trata ambos valores de forma simétrica, mientras que el cambio porcentual necesita un valor inicial.",
"Comparar dois valores sem escolher uma referência","A diferença percentual usa a magnitude média dos dois valores como referência simétrica.","100 e 120 diferem aproximadamente 18,18%","Diferença percentual e variação percentual não são a mesma coisa","A diferença percentual trata os dois valores de forma simétrica, enquanto a variação percentual exige um valor inicial."],

["reverse-percentage-calculator","part ÷ (percentage ÷ 100)",
"Recuperar el total a partir de un porcentaje conocido","Si sabes que un valor representa un determinado porcentaje de un total, esta calculadora reconstruye el total.","25 es el 20% de 125","Invierte la fórmula porcentual habitual","En lugar de calcular una parte a partir del total, la parte conocida se divide por el porcentaje expresado en forma decimal.",
"Encontrar o total a partir de uma porcentagem conhecida","Se você sabe que um valor representa determinada porcentagem de um total, esta calculadora reconstrói o valor completo.","25 é 20% de 125","Esta operação inverte a fórmula percentual comum","Em vez de encontrar uma parte a partir do total, a parte conhecida é dividida pela porcentagem em forma decimal."],

["fraction-calculator","fraction operation → reduce by GCD",
"Calcular con dos fracciones","Suma, resta, multiplica o divide dos fracciones y reduce automáticamente el resultado.","1/2 + 1/3 = 5/6","Las fracciones equivalentes representan el mismo valor","Reducir una fracción cambia su numerador y denominador, pero no el valor que representa.",
"Calcular com duas frações","Some, subtraia, multiplique ou divida duas frações e reduza automaticamente o resultado.","1/2 + 1/3 = 5/6","Frações equivalentes representam o mesmo valor","Simplificar uma fração altera numerador e denominador, mas não o valor representado."],

["fraction-to-decimal","numerator ÷ denominator",
"Convertir una fracción en decimal","Divide el numerador entre el denominador para obtener su representación decimal.","1 ÷ 4 = 0,25","Algunas fracciones producen decimales periódicos","Fracciones como 1/3 no pueden representarse mediante una expansión decimal finita.",
"Converter uma fração em decimal","Divida o numerador pelo denominador para obter a representação decimal.","1 ÷ 4 = 0,25","Algumas frações produzem decimais periódicos","Frações como 1/3 não podem ser representadas por uma expansão decimal finita."],

["decimal-to-fraction","decimal → integer ratio → reduce",
"Convertir un decimal en una fracción simplificada","UtilityLake convierte el valor decimal en una razón de enteros y la reduce a su forma más simple.","0,75 = 3/4","Los decimales finitos siempre tienen una forma fraccionaria","Un decimal finito puede escribirse sobre una potencia de diez y después simplificarse.",
"Converter um decimal em uma fração simplificada","A UtilityLake converte o valor decimal em uma razão de inteiros e a reduz à forma mais simples.","0,75 = 3/4","Decimais finitos sempre possuem uma forma fracionária","Um decimal finito pode ser escrito sobre uma potência de dez e depois simplificado."],

["ratio-calculator","A:B ÷ GCD(A,B)",
"Reducir una razón a su forma más simple","Ambas partes de la razón se dividen por su máximo común divisor.","12:18 → 2:3","Simplificar una razón conserva la proporción","2:3 y 12:18 describen la misma relación proporcional.",
"Reduzir uma razão à forma mais simples","As duas partes da razão são divididas pelo máximo divisor comum.","12:18 → 2:3","Simplificar uma razão preserva a proporção","2:3 e 12:18 descrevem a mesma relação proporcional."],

["proportion-calculator","x = b × c ÷ a",
"Encontrar el valor desconocido de una proporción","Resuelve ecuaciones de la forma a/b = c/x mediante multiplicación cruzada.","2/3 = 4/x → x = 6","La multiplicación cruzada elimina los denominadores","De a/b = c/x se puede obtener a × x = b × c.",
"Encontrar o valor desconhecido em uma proporção","Resolva equações da forma a/b = c/x usando multiplicação cruzada.","2/3 = 4/x → x = 6","A multiplicação cruzada elimina os denominadores","De a/b = c/x podemos obter a × x = b × c."],

["average-calculator","sum(values) ÷ count(values)",
"Calcular la media aritmética","Suma todos los valores y divide el total entre la cantidad de valores.","10, 20, 30 → media 20","La media es sensible a los valores extremos","Un único valor excepcionalmente alto o bajo puede desplazar notablemente la media aritmética.",
"Calcular a média aritmética","Some todos os valores e divida o total pela quantidade de valores.","10, 20, 30 → média 20","A média é sensível a valores extremos","Um único valor muito alto ou muito baixo pode alterar significativamente a média aritmética."],

["weighted-average-calculator","Σ(value × weight) ÷ Σ(weights)",
"Asignar distinta importancia a diferentes valores","Cada valor se multiplica por su peso antes de dividir el total ponderado entre la suma de los pesos.","80,90,100 con pesos 1,2,1 → 90","Los pesos mayores tienen más influencia","Un valor con peso 2 contribuye el doble que el mismo valor con peso 1.",
"Atribuir importâncias diferentes aos valores","Cada valor é multiplicado por seu peso antes de dividir o total ponderado pela soma dos pesos.","80,90,100 com pesos 1,2,1 → 90","Pesos maiores exercem mais influência","Um valor com peso 2 contribui duas vezes mais que o mesmo valor com peso 1."],

["median-calculator","middle of sorted values",
"Encontrar el valor central de un conjunto de datos","Los valores se ordenan y se selecciona la posición central, o se calcula la media de los dos valores centrales.","1,2,3,4,5 → mediana 3","La mediana es resistente a los valores extremos","A diferencia de la media, un valor atípico muy grande puede tener poco efecto sobre la mediana.",
"Encontrar o valor central de um conjunto de dados","Os valores são ordenados e a posição central é selecionada, ou é calculada a média dos dois valores centrais.","1,2,3,4,5 → mediana 3","A mediana é resistente a valores extremos","Ao contrário da média, um valor atípico muito alto pode ter pouco efeito sobre a mediana."],

["mode-calculator","value with maximum frequency",
"Encontrar el valor más frecuente","UtilityLake cuenta las apariciones y devuelve el valor o los valores con mayor frecuencia.","1,2,2,3 → moda 2","Un conjunto de datos puede tener más de una moda","Varios valores pueden compartir la misma frecuencia máxima.",
"Encontrar o valor mais frequente","A UtilityLake conta as ocorrências e retorna o valor ou os valores com maior frequência.","1,2,2,3 → moda 2","Um conjunto de dados pode ter mais de uma moda","Vários valores podem compartilhar a mesma frequência máxima."],

["standard-deviation-calculator","√(Σ(x − mean)² ÷ N)",
"Medir la dispersión de los valores","Calcula la desviación estándar de población o muestra a partir de las diferencias respecto a la media.","Una desviación menor indica valores más próximos a la media.","Las fórmulas de muestra y población utilizan divisores diferentes","La desviación estándar poblacional divide entre N, mientras que la muestral divide entre N − 1.",
"Medir a dispersão dos valores","Calcule o desvio padrão da população ou da amostra a partir dos desvios em relação à média.","Um desvio menor indica valores mais próximos da média.","As fórmulas de amostra e população usam divisores diferentes","O desvio padrão populacional divide por N, enquanto o amostral divide por N − 1."],

["rule-of-three-calculator","x = b × c ÷ a",
"Resolver una regla de tres proporcional","Dado a:b = c:x, UtilityLake calcula el cuarto valor desconocido.","2:4 = 3:x → x = 6","La regla de tres es simplemente una proporción","Su conocido procedimiento se deriva directamente de la multiplicación cruzada.",
"Resolver uma regra de três proporcional","Dado a:b = c:x, a UtilityLake calcula o quarto valor desconhecido.","2:4 = 3:x → x = 6","A regra de três é simplesmente uma proporção","Seu procedimento comum deriva diretamente da multiplicação cruzada."],

["scientific-notation-converter","a × 10ⁿ",
"Escribir números en notación científica","Convierte un número en un coeficiente multiplicado por una potencia de diez.","123456 → 1,23456 × 10⁵","La notación científica facilita ver la escala","Los números muy grandes y muy pequeños son más fáciles de comparar cuando se expresan como potencias de diez.",
"Escrever números em notação científica","Converta um número em um coeficiente multiplicado por uma potência de dez.","123456 → 1,23456 × 10⁵","A notação científica facilita visualizar a ordem de grandeza","Números muito grandes ou muito pequenos ficam mais fáceis de comparar quando expressos como potências de dez."],

["square-root-calculator","√x",
"Calcular la raíz cuadrada principal","Encuentra el valor no negativo cuyo cuadrado es igual al número introducido.","√144 = 12","La raíz cuadrada principal no es negativa","Aunque tanto 12 como −12 elevados al cuadrado dan 144, √144 significa convencionalmente 12.",
"Calcular a raiz quadrada principal","Encontre o valor não negativo cujo quadrado é igual ao número informado.","√144 = 12","A raiz quadrada principal não é negativa","Embora 12 e −12 elevados ao quadrado resultem em 144, √144 convencionalmente significa 12."],

["exponent-calculator","base^exponent",
"Elevar un número a una potencia","UtilityLake calcula una base elevada al exponente seleccionado.","2¹⁰ = 1024","Los exponentes negativos representan recíprocos","Para una base distinta de cero, a⁻ⁿ equivale a 1/aⁿ.",
"Elevar um número a uma potência","A UtilityLake calcula uma base elevada ao expoente selecionado.","2¹⁰ = 1024","Expoentes negativos representam recíprocos","Para uma base diferente de zero, a⁻ⁿ equivale a 1/aⁿ."],

["logarithm-calculator","log_b(x) = ln(x) ÷ ln(b)",
"Calcular logaritmos en cualquier base válida","Encuentra el exponente al que debe elevarse la base para obtener el número seleccionado.","log₁₀(100) = 2","Un logaritmo es la operación inversa de la potenciación","Si b² = x, entonces el logaritmo en base b de x es igual a 2.",
"Calcular logaritmos em qualquer base válida","Encontre o expoente ao qual a base deve ser elevada para obter o número selecionado.","log₁₀(100) = 2","Um logaritmo é a operação inversa da potenciação","Se b² = x, então o logaritmo de x na base b é igual a 2."],

["factorial-calculator","n! = 1 × 2 × ... × n",
"Calcular el factorial de un entero","Multiplica todos los enteros positivos desde 1 hasta n.","5! = 120","Los factoriales crecen extremadamente rápido","Incluso valores relativamente pequeños de n producen resultados muy grandes.",
"Calcular o fatorial de um inteiro","Multiplique todos os inteiros positivos de 1 até n.","5! = 120","Fatoriais crescem extremamente rápido","Mesmo valores relativamente pequenos de n produzem resultados muito grandes."],

["gcd-calculator","GCD(a,b)",
"Encontrar el máximo común divisor","Encuentra el mayor entero que divide ambos valores sin dejar resto.","MCD(48,18) = 6","El MCD es útil para simplificar razones y fracciones","Dividir numerador y denominador por su MCD reduce una fracción a su forma más simple.",
"Encontrar o máximo divisor comum","Encontre o maior inteiro que divide os dois valores sem deixar resto.","MDC(48,18) = 6","O MDC é útil para simplificar razões e frações","Dividir numerador e denominador pelo MDC reduz uma fração à forma mais simples."],

["lcm-calculator","|a × b| ÷ GCD(a,b)",
"Encontrar el mínimo común múltiplo","Encuentra el menor número positivo que es múltiplo de ambos enteros introducidos.","mcm(12,18) = 36","El MCD y el mcm están estrechamente relacionados","Para enteros distintos de cero, su producto está directamente relacionado con el producto de su MCD y su mcm.",
"Encontrar o mínimo múltiplo comum","Encontre o menor número positivo que é múltiplo dos dois inteiros informados.","MMC(12,18) = 36","MDC e MMC estão diretamente relacionados","Para inteiros diferentes de zero, seu produto está diretamente relacionado ao produto entre MDC e MMC."],

["prime-number-checker","test divisors up to √n",
"Comprobar si un entero es primo","UtilityLake comprueba si el entero tiene algún divisor distinto de 1 y de sí mismo.","97 → número primo","Solo es necesario probar divisores hasta la raíz cuadrada","Si existe un divisor mayor, debe estar emparejado con un divisor menor que ya habría sido encontrado.",
"Verificar se um inteiro é primo","A UtilityLake verifica se o inteiro possui algum divisor além de 1 e dele mesmo.","97 → número primo","Só é necessário testar divisores até a raiz quadrada","Se existir um divisor maior, ele deverá estar associado a um divisor menor que já teria sido encontrado."],

["prime-factorization-calculator","n = p₁ × p₂ × ...",
"Descomponer un entero en factores primos","Divide repetidamente el número por factores primos hasta obtener su factorización completa.","360 = 2 × 2 × 2 × 3 × 3 × 5","La factorización prima es única","Salvo por el orden de los factores, todo entero mayor que 1 tiene una única factorización prima.",
"Decompor um inteiro em fatores primos","Divida repetidamente o número por fatores primos até obter a fatoração completa.","360 = 2 × 2 × 2 × 3 × 3 × 5","A fatoração em números primos é única","Exceto pela ordem dos fatores, todo inteiro maior que 1 possui uma única fatoração prima."],

["rounding-calculator","round(value × 10ⁿ) ÷ 10ⁿ",
"Redondear un número a una cantidad de decimales","Elige cuántos dígitos deben conservarse después del separador decimal.","12,34567 → 12,35 con 2 decimales","Los decimales y las cifras significativas son conceptos diferentes","Los decimales cuentan los dígitos después del separador decimal; las cifras significativas cuentan los dígitos relevantes desde el primer dígito distinto de cero.",
"Arredondar um número para uma quantidade de casas decimais","Escolha quantos dígitos devem permanecer depois do separador decimal.","12,34567 → 12,35 com 2 casas decimais","Casas decimais e algarismos significativos são conceitos diferentes","Casas decimais contam os dígitos após o separador decimal; algarismos significativos contam os dígitos relevantes a partir do primeiro dígito diferente de zero."],

["significant-figures-calculator","round to n significant digits",
"Redondear un número a cifras significativas","Conserva un número seleccionado de dígitos relevantes independientemente de la posición decimal.","12345,678 → 12350 con 4 cifras significativas","Los ceros iniciales no son significativos","En 0,0042, los dígitos significativos son 4 y 2.",
"Arredondar um número para algarismos significativos","Mantenha uma quantidade selecionada de dígitos relevantes independentemente da posição decimal.","12345,678 → 12350 com 4 algarismos significativos","Zeros à esquerda não são significativos","Em 0,0042, os algarismos significativos são 4 e 2."],

["percentage-error-calculator","|measured − accepted| ÷ |accepted| × 100",
"Medir el error respecto a un valor aceptado","Compara un valor medido con una referencia aceptada y expresa el error absoluto como porcentaje.","98 frente a 100 → error del 2%","El valor aceptado es el denominador","El error porcentual expresa la discrepancia respecto a la referencia considerada correcta.",
"Medir o erro em relação a um valor aceito","Compare um valor medido com uma referência aceita e expresse o erro absoluto como porcentagem.","98 em relação a 100 → erro de 2%","O valor aceito é o denominador","O erro percentual expressa a diferença em relação à referência considerada correta."],

["absolute-difference-calculator","|A − B|",
"Encontrar la distancia entre dos valores","Resta los valores e ignora el signo de la diferencia.","|10 − 7| = 3","La diferencia absoluta no tiene dirección","El resultado indica a qué distancia están los números, no cuál es mayor.",
"Encontrar a distância entre dois valores","Subtraia os valores e ignore o sinal da diferença.","|10 − 7| = 3","A diferença absoluta não possui direção","O resultado informa a distância entre os números, e não qual deles é maior."],

["range-calculator","range = max − min",
"Encontrar mínimo, máximo y rango","UtilityLake identifica los valores mínimo y máximo y los resta para calcular el rango.","2,3,5,7,12 → rango 10","El rango utiliza solamente los dos extremos","Los valores situados entre el mínimo y el máximo no afectan al rango.",
"Encontrar mínimo, máximo e amplitude","A UtilityLake identifica os menores e maiores valores e os subtrai para calcular a amplitude.","2,3,5,7,12 → amplitude 10","A amplitude usa apenas os dois extremos","Os valores entre o mínimo e o máximo não afetam a amplitude."]
];

function build(locale: "es" | "pt-BR", r: (typeof rows)[number]) {
  const pt = locale === "pt-BR";
  const offset = pt ? 7 : 2;

  const [id, formula] = r;
  const title = r[offset];
  const intro = r[offset + 1];
  const example = r[offset + 2];
  const insightTitle = r[offset + 3];
  const insightBody = r[offset + 4];

  return {
    family: "calculator",
    reviewed: false,

    kicker: pt ? "COMO É CALCULADO" : "CÓMO SE CALCULA",

    title,
    intro,

    facts: pt
      ? ["Resultado imediato", "Fórmula clara", "Cálculo local"]
      : ["Resultado inmediato", "Fórmula clara", "Cálculo local"],

    visual: {
      kind: "flow",
      nodes: [
        "Valores",
        formula,
        pt ? "Resultado" : "Resultado"
      ],
      caption: example
    },

    insightLabel: pt ? "BOM SABER" : "CONVIENE SABERLO",
    insightTitle,
    insightBody,

    faqTitle: pt ? "Em resumo" : "En resumen",

    faq: [
      {
        question: pt
          ? "Qual lógica a calculadora usa?"
          : "¿Qué lógica utiliza la calculadora?",
        answer: formula
      },
      {
        question: pt ? "Um exemplo?" : "¿Un ejemplo?",
        answer: example
      }
    ],

    next: []
  };
}

export const calculatorMathEditorialEs = Object.fromEntries(
  rows.map((r) => [r[0], build("es", r)])
);

export const calculatorMathEditorialPtBr = Object.fromEntries(
  rows.map((r) => [r[0], build("pt-BR", r)])
);
