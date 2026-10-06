
import type { LocaleId } from "../core/types.ts";
import type { ToolEditorial } from "./tool-editorial.ts";
import {
  bi,
  simpleEditorial,
  type SimpleEditorialDefinition
} from "./editorial-factories.ts";

const d = (
  id:string,
  enTitle:string,itTitle:string,
  enIntro:string,itIntro:string,
  enInput:string,itInput:string,
  enProcess:string,itProcess:string,
  enOutput:string,itOutput:string,
  enExample:string,itExample:string,
  enInsight:string,itInsight:string,
  enBody:string,itBody:string
):SimpleEditorialDefinition => ({
  id,
  family:"generator",
  title:bi(enTitle,itTitle),
  intro:bi(enIntro,itIntro),
  input:bi(enInput,itInput),
  process:bi(enProcess,itProcess),
  output:bi(enOutput,itOutput),
  example:bi(enExample,itExample),
  insightTitle:bi(enInsight,itInsight),
  insightBody:bi(enBody,itBody)
});

const picker = (
  id:string,
  enTitle:string,
  itTitle:string
):SimpleEditorialDefinition => d(
  id,enTitle,itTitle,
  "Pick one entry from a list using randomness provided by the browser cryptography API.",
  "Seleziona un elemento da una lista usando la casualità fornita dall’API crittografica del browser.",
  "Non-empty list","Lista non vuota",
  "Random list index","Indice casuale",
  "One selected item","Un elemento selezionato",
  "Every non-empty line is one selectable entry.",
  "Ogni riga non vuota rappresenta un elemento selezionabile.",
  "Entries are not weighted",
  "Gli elementi non hanno pesi diversi",
  "Each list position is treated as one candidate; entering the same value multiple times effectively gives that value more positions.",
  "Ogni posizione della lista è un candidato; inserire più volte lo stesso valore gli assegna di fatto più posizioni."
);

const defs:SimpleEditorialDefinition[] = [

  d(
    "random-number-generator",
    "Generate a random integer in a range",
    "Genera un intero casuale in un intervallo",
    "Generate one integer between the selected minimum and maximum, including both endpoints.",
    "Genera un intero tra minimo e massimo includendo entrambi gli estremi.",
    "Minimum + maximum","Minimo + massimo",
    "Browser random value → integer range","Valore casuale → intervallo intero",
    "Random integer","Intero casuale",
    "1 to 100 can return both 1 and 100.",
    "Da 1 a 100 possono essere estratti sia 1 sia 100.",
    "The range is inclusive",
    "L’intervallo è inclusivo",
    "The minimum and maximum themselves are valid outcomes.",
    "Minimo e massimo sono entrambi risultati possibili."
  ),

  picker("random-name-picker","Pick a random name","Estrai un nome casuale"),
  picker("random-list-picker","Pick a random list item","Estrai un elemento casuale"),
  picker("classroom-student-picker","Pick a random student","Estrai uno studente casuale"),
  picker("random-wheel","Choose a random wheel entry","Scegli una voce casuale dalla ruota"),
  picker("decision-wheel","Choose a random decision option","Scegli casualmente un’opzione"),

  d(
    "random-team-generator",
    "Split names into random teams",
    "Dividi nomi in squadre casuali",
    "Shuffle the names first, then distribute them across the requested number of teams.",
    "Mescola prima i nomi e poi li distribuisce nel numero di squadre richiesto.",
    "Names + team count","Nomi + numero squadre",
    "Shuffle → round-robin distribution","Mescola → distribuzione ciclica",
    "Random teams","Squadre casuali",
    "10 people across 3 teams produces group sizes differing by at most one.",
    "10 persone in 3 squadre produce gruppi con dimensioni che differiscono al massimo di uno.",
    "The distribution is balanced after shuffling",
    "La distribuzione viene bilanciata dopo il mescolamento",
    "Names are assigned cyclically to teams after the randomized order is created.",
    "I nomi vengono assegnati ciclicamente alle squadre dopo aver creato l’ordine casuale."
  ),

  d(
    "random-group-generator",
    "Split items into random groups",
    "Dividi elementi in gruppi casuali",
    "Shuffle all entries and distribute them cyclically among the chosen number of groups.",
    "Mescola tutti gli elementi e li distribuisce ciclicamente tra i gruppi scelti.",
    "Items + group count","Elementi + numero gruppi",
    "Shuffle → distribute","Mescola → distribuisce",
    "Random groups","Gruppi casuali",
    "Items are spread across groups as evenly as possible.",
    "Gli elementi vengono distribuiti nel modo più uniforme possibile.",
    "Randomness affects membership, not target balance",
    "La casualità influenza i membri, non il bilanciamento",
    "The round-robin assignment keeps group sizes close even though membership is shuffled.",
    "L’assegnazione ciclica mantiene simili le dimensioni dei gruppi anche se i membri sono mescolati."
  ),

  d(
    "random-letter-generator",
    "Generate random letters",
    "Genera lettere casuali",
    "Generate one or more uppercase letters from A through Z.",
    "Genera una o più lettere maiuscole dalla A alla Z.",
    "Letter count","Numero lettere",
    "Random A–Z selection","Selezione casuale A–Z",
    "Letters","Lettere",
    "A request for 5 produces five independently selected letters.",
    "Richiedendo 5 vengono generate cinque lettere indipendenti.",
    "Repeated letters are possible",
    "Le lettere possono ripetersi",
    "Each position is generated independently, so the same letter may appear more than once.",
    "Ogni posizione viene generata indipendentemente, quindi una lettera può comparire più volte."
  ),

  d(
    "random-word-generator",
    "Generate random words",
    "Genera parole casuali",
    "Select words from UtilityLake’s built-in neutral word list after shuffling it.",
    "Seleziona parole dalla lista neutra integrata in UtilityLake dopo averla mescolata.",
    "Requested count","Numero richiesto",
    "Shuffle built-in list","Mescola lista interna",
    "Random words","Parole casuali",
    "The built-in list currently contains 20 words.",
    "La lista integrata contiene attualmente 20 parole.",
    "Words are unique within one generated result",
    "Le parole sono uniche nello stesso risultato",
    "The implementation shuffles the list and slices it rather than repeatedly selecting with replacement.",
    "L’implementazione mescola la lista e ne prende una parte invece di estrarre ripetutamente con reinserimento."
  ),

  d(
    "coin-flip",
    "Flip a virtual coin",
    "Lancia una moneta virtuale",
    "Choose randomly between Heads and Tails.",
    "Sceglie casualmente tra Testa e Croce.",
    "No input","Nessun input",
    "Random choice of two outcomes","Scelta casuale tra due risultati",
    "Heads or Tails","Testa o Croce",
    "Each flip generates a new random choice.",
    "Ogni lancio genera una nuova scelta casuale.",
    "Previous flips do not affect the next one",
    "I lanci precedenti non influenzano il successivo",
    "Each result is generated independently.",
    "Ogni risultato viene generato indipendentemente."
  ),

  d(
    "dice-roller",
    "Roll configurable virtual dice",
    "Lancia dadi virtuali configurabili",
    "Choose the number of dice and the number of sides on each die.",
    "Scegli quanti dadi lanciare e quante facce deve avere ciascun dado.",
    "Dice + sides","Dadi + facce",
    "Random integer 1…sides per die","Intero casuale 1…facce per dado",
    "Individual rolls + total","Singoli risultati + totale",
    "2 six-sided dice produce two values from 1 to 6 and their sum.",
    "2 dadi a sei facce producono due valori da 1 a 6 e la loro somma.",
    "Up to 100 dice can be rolled at once",
    "Si possono lanciare fino a 100 dadi insieme",
    "Each die is generated separately before the total is calculated.",
    "Ogni dado viene generato separatamente prima di calcolare il totale."
  ),

  d(
    "yes-or-no-generator",
    "Generate a random Yes or No",
    "Genera casualmente Sì o No",
    "Choose randomly between two equally represented options.",
    "Sceglie casualmente tra due opzioni rappresentate allo stesso modo.",
    "No input","Nessun input",
    "Random binary choice","Scelta binaria casuale",
    "Yes or No","Sì o No",
    "Each run produces one of two possible answers.",
    "Ogni esecuzione produce uno dei due risultati possibili.",
    "It does not evaluate the decision itself",
    "Non valuta la decisione",
    "The answer is purely random and contains no reasoning about the question behind it.",
    "La risposta è puramente casuale e non contiene alcuna valutazione della decisione."
  ),

  d(
    "random-date-generator",
    "Generate a random date in a range",
    "Genera una data casuale in un intervallo",
    "Select a date between a valid start and end date.",
    "Seleziona una data compresa tra una data iniziale e una finale valide.",
    "Start + end dates","Data iniziale + finale",
    "Random timestamp in range","Timestamp casuale nell’intervallo",
    "Date","Data",
    "A 2026-01-01 to 2026-12-31 range returns one date inside 2026.",
    "Un intervallo 01/01/2026–31/12/2026 restituisce una data nel 2026.",
    "The endpoints define the available time interval",
    "Gli estremi definiscono l’intervallo disponibile",
    "The date is generated from a randomized timestamp between the two selected dates.",
    "La data viene generata da un timestamp casuale compreso tra i due estremi."
  ),

  d(
    "random-time-generator",
    "Generate a random time of day",
    "Genera un orario casuale",
    "Choose one minute from the 1,440 minutes in a 24-hour day.",
    "Sceglie un minuto tra i 1.440 minuti di una giornata di 24 ore.",
    "No input","Nessun input",
    "Random minute 0–1439","Minuto casuale 0–1439",
    "HH:MM time","Orario HH:MM",
    "00:00 through 23:59 are possible.",
    "Sono possibili orari da 00:00 a 23:59.",
    "Precision is one minute",
    "La precisione è di un minuto",
    "Seconds are not generated by the current implementation.",
    "L’implementazione attuale non genera i secondi."
  ),

  d(
    "random-password-generator",
    "Generate a random password locally",
    "Genera una password casuale in locale",
    "Build a password character by character using browser cryptographic randomness.",
    "Costruisce la password carattere per carattere usando la casualità crittografica del browser.",
    "Password length","Lunghezza password",
    "Secure random character selection","Selezione casuale crittografica",
    "Password","Password",
    "The default length is 20 characters.",
    "La lunghezza predefinita è 20 caratteri.",
    "Ambiguous characters are intentionally omitted",
    "I caratteri ambigui vengono intenzionalmente esclusi",
    "The character set avoids characters such as 0, 1, uppercase I/O and lowercase l that are easy to confuse visually.",
    "Il set evita caratteri come 0, 1, I/O maiuscole e l minuscola, facilmente confondibili visivamente."
  ),

  d(
    "random-uuid-generator",
    "Generate a random UUID v4",
    "Genera un UUID v4 casuale",
    "Use the browser crypto.randomUUID implementation to create a UUID v4.",
    "Usa crypto.randomUUID del browser per creare un UUID v4.",
    "Browser randomness","Casualità browser",
    "crypto.randomUUID","crypto.randomUUID",
    "UUID v4","UUID v4",
    "A new 36-character UUID string is returned on each run.",
    "A ogni esecuzione viene restituito un nuovo UUID di 36 caratteri.",
    "No central counter is required",
    "Non serve un contatore centrale",
    "UUID v4 identifiers are designed to make accidental collisions extremely unlikely through randomness.",
    "Gli UUID v4 sono progettati per rendere estremamente improbabili collisioni accidentali tramite casualità."
  ),

  d(
    "random-pair-generator",
    "Create random pairs",
    "Crea coppie casuali",
    "Shuffle all entries and pair adjacent items.",
    "Mescola tutti gli elementi e abbina quelli adiacenti.",
    "List of items","Lista elementi",
    "Shuffle → pair adjacent entries","Mescola → abbina elementi adiacenti",
    "Pairs","Coppie",
    "With an odd number of entries, one item remains unpaired.",
    "Con un numero dispari di elementi, uno rimane senza coppia.",
    "Odd-sized lists cannot form complete pairs",
    "Le liste dispari non possono formare solo coppie complete",
    "The last shuffled entry is explicitly marked as unpaired.",
    "L’ultimo elemento dopo il mescolamento viene indicato esplicitamente come senza coppia."
  ),

  d(
    "tournament-pairing-generator",
    "Generate random first-round pairings",
    "Genera accoppiamenti casuali per il primo turno",
    "Shuffle participants and pair adjacent names for a first tournament round.",
    "Mescola i partecipanti e abbina nomi adiacenti per un primo turno.",
    "Participants","Partecipanti",
    "Shuffle → pair","Mescola → abbina",
    "Matchups","Accoppiamenti",
    "An odd participant count produces one bye.",
    "Un numero dispari di partecipanti produce un bye.",
    "This generates one round, not a full bracket",
    "Genera un turno, non un intero tabellone",
    "Later-round tournament logic is not calculated by this tool.",
    "Lo strumento non calcola automaticamente i turni successivi."
  ),

  d(
    "secret-santa-generator",
    "Create Secret Santa assignments",
    "Crea abbinamenti Secret Santa",
    "Randomly assign each participant a recipient while preventing self-assignment.",
    "Assegna casualmente un destinatario a ogni partecipante evitando auto-abbinamenti.",
    "Participants","Partecipanti",
    "Shuffle recipients → remove self matches","Mescola destinatari → evita auto-abbinamenti",
    "Assignments","Abbinamenti",
    "At least two participants are required.",
    "Servono almeno due partecipanti.",
    "No participant is intentionally assigned to themselves",
    "Nessun partecipante viene intenzionalmente assegnato a se stesso",
    "The implementation checks the shuffled assignment and adjusts it when self-matches remain.",
    "L’implementazione controlla gli abbinamenti mescolati e li corregge quando rimangono auto-abbinamenti."
  ),

  d(
    "random-order-generator",
    "Shuffle a list into random order",
    "Mescola una lista in ordine casuale",
    "Randomize the complete order of all non-empty input lines.",
    "Mescola completamente l’ordine di tutte le righe non vuote.",
    "List","Lista",
    "Fisher-Yates-style shuffle","Mescolamento tipo Fisher-Yates",
    "Random order","Ordine casuale",
    "All original entries remain, only their order changes.",
    "Tutti gli elementi rimangono presenti: cambia soltanto l’ordine.",
    "This is a permutation, not random sampling",
    "È una permutazione, non un campionamento",
    "Every input item appears once in the shuffled result.",
    "Ogni elemento di input compare una volta nel risultato."
  ),

  d(
    "lottery-number-generator",
    "Generate unique lottery numbers",
    "Genera numeri casuali unici",
    "Draw unique integers from the chosen inclusive numeric range.",
    "Estrae interi unici dall’intervallo numerico inclusivo scelto.",
    "Count + range","Quantità + intervallo",
    "Random draws into a set","Estrazioni casuali in un insieme",
    "Sorted unique numbers","Numeri unici ordinati",
    "6 numbers from 1 to 49 cannot contain duplicates.",
    "6 numeri da 1 a 49 non possono contenere duplicati.",
    "The displayed result is sorted after drawing",
    "Il risultato viene ordinato dopo l’estrazione",
    "Sorting the final numbers does not change which numbers were randomly selected.",
    "Ordinare i numeri finali non modifica quali numeri sono stati estratti."
  ),

  d(
    "bingo-number-generator",
    "Generate a bingo number",
    "Genera un numero da bingo",
    "Generate one random integer from 1 through 75.",
    "Genera un intero casuale da 1 a 75.",
    "No input","Nessun input",
    "Random integer 1–75","Intero casuale 1–75",
    "Bingo number","Numero bingo",
    "Both 1 and 75 are valid outputs.",
    "Sia 1 sia 75 sono risultati validi.",
    "The tool does not track previous draws",
    "Lo strumento non memorizza le estrazioni precedenti",
    "Separate runs can therefore return the same bingo number again.",
    "Esecuzioni separate possono quindi restituire nuovamente lo stesso numero."
  ),

  d(
    "random-sequence-generator",
    "Shuffle an integer sequence",
    "Mescola una sequenza di interi",
    "Create every integer between start and end, then shuffle the complete sequence.",
    "Crea ogni intero tra inizio e fine e poi mescola l’intera sequenza.",
    "Start + end","Inizio + fine",
    "Build sequence → shuffle","Crea sequenza → mescola",
    "Random permutation","Permutazione casuale",
    "1 to 5 returns all five integers exactly once in random order.",
    "Da 1 a 5 restituisce tutti i cinque interi una sola volta in ordine casuale.",
    "The maximum supported range contains 10,001 values",
    "L’intervallo massimo supportato contiene 10.001 valori",
    "The implementation rejects larger sequences to keep browser-side work bounded.",
    "L’implementazione rifiuta sequenze più grandi per mantenere limitato il lavoro nel browser."
  )

];

export const randomEditorialBatch:
  Partial<Record<string, Partial<Record<LocaleId, ToolEditorial>>>> =
  Object.fromEntries(defs.map(def => [def.id, simpleEditorial(def)]));
