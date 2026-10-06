import type { LocaleId } from "../core/types.ts";
import type { ToolEditorial } from "./tool-editorial.ts";
import {
  bi,
  simpleEditorial,
  calculatorEditorial,
  type SimpleEditorialDefinition,
  type CalculatorEditorialDefinition
} from "./editorial-factories.ts";

const calculatorDefs: CalculatorEditorialDefinition[] = [];

const calc = (
  id:string,
  enTitle:string,
  itTitle:string,
  enIntro:string,
  itIntro:string,
  formula:string,
  enExample:string,
  itExample:string,
  enInsight:string,
  itInsight:string,
  enBody:string,
  itBody:string
) => calculatorDefs.push({
  id,
  title:bi(enTitle,itTitle),
  intro:bi(enIntro,itIntro),
  formula,
  example:bi(enExample,itExample),
  insightTitle:bi(enInsight,itInsight),
  insightBody:bi(enBody,itBody)
});

calc(
  "filament-length-calculator",
  "Estimate filament length from weight",
  "Stima la lunghezza del filamento dal peso",
  "Use filament weight, material density and diameter to estimate available length.",
  "Usa peso del filamento, densità del materiale e diametro per stimarne la lunghezza.",
  "volume = weight ÷ density; length = volume ÷ cross-sectional area",
  "1.75 mm filament uses a circular cross-section in the calculation.",
  "Il filamento da 1,75 mm viene trattato con una sezione circolare.",
  "Density matters directly",
  "La densità influisce direttamente",
  "The same filament weight corresponds to a different length when material density changes.",
  "Lo stesso peso corrisponde a una lunghezza diversa quando cambia la densità del materiale."
);

calc(
  "filament-weight-calculator",
  "Estimate filament weight from length",
  "Stima il peso del filamento dalla lunghezza",
  "Use filament length, density and diameter to calculate approximate mass.",
  "Usa lunghezza, densità e diametro del filamento per calcolarne la massa.",
  "weight = cross-sectional area × length × density",
  "Longer or thicker filament produces proportionally more material volume.",
  "Filamento più lungo o più spesso produce più volume di materiale.",
  "Diameter has a squared effect",
  "Il diametro ha un effetto quadratico",
  "Cross-sectional area depends on radius squared, so small diameter changes affect material volume more than linearly.",
  "L'area della sezione dipende dal quadrato del raggio, quindi piccole variazioni di diametro influenzano il volume più che linearmente."
);

calc(
  "filament-cost-calculator",
  "Estimate filament material cost",
  "Stima il costo del filamento",
  "Calculate the portion of a kilogram spool price represented by the used filament mass.",
  "Calcola la quota del prezzo al chilogrammo rappresentata dal filamento utilizzato.",
  "cost = weight(g) ÷ 1000 × price/kg",
  "120 g from a €25/kg spool corresponds to €3 of material.",
  "120 g da una bobina da 25 €/kg corrispondono a 3 € di materiale.",
  "This is material cost only",
  "È soltanto il costo del materiale",
  "Printer time, electricity, failed prints and labor are outside this calculation.",
  "Tempo macchina, elettricità, stampe fallite e lavoro non rientrano nel calcolo."
);

calc(
  "3d-print-cost-calculator",
  "Estimate total 3D print cost",
  "Stima il costo totale di una stampa 3D",
  "Combine filament, electrical energy and optional machine-time cost.",
  "Combina costo del filamento, energia elettrica e costo macchina opzionale.",
  "total = material + (power/1000 × hours × electricity price) + hours × machine rate",
  "The calculator returns material, electricity, machine time and total separately.",
  "Il calcolatore restituisce separatamente materiale, elettricità, tempo macchina e totale.",
  "Electricity is often only one part of total cost",
  "L'elettricità è spesso soltanto una parte del costo",
  "Machine depreciation and operator time can exceed the raw electricity cost on many prints.",
  "Ammortamento macchina e tempo dell'operatore possono superare il semplice costo elettrico."
);

calc(
  "print-time-cost-calculator",
  "Calculate machine-time cost",
  "Calcola il costo del tempo macchina",
  "Multiply print duration by an hourly machine rate.",
  "Moltiplica la durata della stampa per una tariffa oraria della macchina.",
  "cost = hours × hourly rate",
  "8 hours × 2.5/hour = 20.",
  "8 ore × 2,5/ora = 20.",
  "Hourly rate can include more than depreciation",
  "La tariffa oraria può includere più dell'ammortamento",
  "A chosen rate can represent wear, maintenance, overhead or desired margin depending on the workflow.",
  "La tariffa scelta può rappresentare usura, manutenzione, costi indiretti o margine desiderato."
);

calc(
  "resin-volume-calculator",
  "Add waste allowance to resin volume",
  "Aggiungi un margine al volume di resina",
  "Increase model resin volume by a selected percentage allowance.",
  "Aumenta il volume di resina del modello della percentuale di margine scelta.",
  "required = model volume × (1 + waste/100)",
  "85 mL with 10% allowance = 93.5 mL.",
  "85 mL con margine 10% = 93,5 mL.",
  "Waste is applied proportionally",
  "Il margine viene applicato proporzionalmente",
  "The allowance grows with model volume rather than adding a fixed quantity.",
  "Il margine cresce con il volume del modello invece di aggiungere una quantità fissa."
);

calc(
  "resin-cost-calculator",
  "Estimate resin material cost",
  "Stima il costo della resina",
  "Convert the consumed milliliters to liters and multiply by price per liter.",
  "Converte i millilitri utilizzati in litri e moltiplica per il prezzo al litro.",
  "cost = volume(mL) ÷ 1000 × price/L",
  "100 mL at 35 per liter = 3.5.",
  "100 mL a 35 per litro = 3,5.",
  "This excludes unused vat resin and other consumables",
  "Non include resina residua nella vaschetta e altri consumabili",
  "The formula prices only the entered consumed resin volume.",
  "La formula considera soltanto il volume di resina utilizzato inserito."
);

calc(
  "layer-height-calculator",
  "Estimate layer height from nozzle diameter",
  "Stima l'altezza layer dal diametro ugello",
  "Apply a selected layer-height percentage to nozzle diameter.",
  "Applica una percentuale scelta al diametro dell'ugello.",
  "layer height = nozzle diameter × ratio/100",
  "0.4 mm nozzle at 50% → 0.2 mm layer height.",
  "Ugello 0,4 mm al 50% → layer da 0,2 mm.",
  "This is a geometric ratio, not a printer guarantee",
  "È un rapporto geometrico, non una garanzia della stampante",
  "Practical layer-height limits also depend on hotend, extrusion consistency and printer settings.",
  "I limiti pratici dipendono anche da hotend, estrusione e impostazioni della stampante."
);

calc(
  "steps-per-mm-calculator",
  "Calculate belt-axis steps per millimeter",
  "Calcola gli step per millimetro di un asse a cinghia",
  "Combine motor steps, microstepping, pulley teeth and belt pitch.",
  "Combina step del motore, microstepping, denti della puleggia e passo della cinghia.",
  "steps/mm = motor steps × microsteps ÷ (pulley teeth × belt pitch)",
  "200 steps, 16× microstepping, 20 teeth and 2 mm pitch → 80 steps/mm.",
  "200 step, microstepping 16×, 20 denti e passo 2 mm → 80 step/mm.",
  "Pulley circumference determines travel per revolution",
  "La puleggia determina lo spostamento per giro",
  "More pulley teeth increase linear travel per revolution and therefore reduce required steps per millimeter.",
  "Più denti aumentano lo spostamento lineare per giro e quindi riducono gli step per millimetro necessari."
);

calc(
  "flow-rate-calculator",
  "Calculate extrusion volumetric flow",
  "Calcola la portata volumetrica di estrusione",
  "Multiply line width, layer height and print speed.",
  "Moltiplica larghezza linea, altezza layer e velocità di stampa.",
  "flow = line width × layer height × speed",
  "0.45 × 0.2 × 60 = 5.4 mm³/s.",
  "0,45 × 0,2 × 60 = 5,4 mm³/s.",
  "Speed alone does not determine hotend demand",
  "La sola velocità non determina la richiesta all'hotend",
  "A wider line or thicker layer increases required volumetric flow even when print speed is unchanged.",
  "Una linea più larga o un layer più spesso aumentano la portata richiesta anche a velocità invariata."
);

calc(
  "extrusion-multiplier-calculator",
  "Calibrate extrusion multiplier",
  "Calibra il moltiplicatore di estrusione",
  "Correct the current multiplier using expected and measured wall thickness.",
  "Corregge il moltiplicatore attuale usando spessore atteso e misurato.",
  "new multiplier = current × expected ÷ measured",
  "If measured walls are thicker than expected, the calculated multiplier decreases.",
  "Se le pareti misurate sono più spesse del previsto, il moltiplicatore calcolato diminuisce.",
  "The correction is proportional",
  "La correzione è proporzionale",
  "The formula assumes measured wall thickness is a useful indicator of extrusion amount.",
  "La formula assume che lo spessore misurato sia un indicatore utile della quantità estrusa."
);

calc(
  "e-steps-calculator",
  "Calibrate extruder E-steps",
  "Calibra gli E-step dell'estrusore",
  "Correct current E-steps using requested and actually extruded filament length.",
  "Corregge gli E-step attuali usando la lunghezza richiesta e quella realmente estrusa.",
  "new E-steps = current × requested ÷ actual",
  "If only 95 mm is extruded when 100 mm was requested, E-steps increase.",
  "Se vengono estrusi 95 mm quando ne erano richiesti 100, gli E-step aumentano.",
  "Accurate physical measurement is essential",
  "Una misura fisica accurata è essenziale",
  "Any error in the measured extrusion length directly affects the calculated calibration value.",
  "Qualsiasi errore nella lunghezza estrusa misurata influenza direttamente il valore di calibrazione."
);

calc(
  "nozzle-flow-calculator",
  "Estimate nozzle volumetric flow",
  "Stima la portata volumetrica dell'ugello",
  "Calculate required melt flow from extrusion geometry and speed.",
  "Calcola la portata richiesta dalla geometria di estrusione e dalla velocità.",
  "flow = line width × layer height × speed",
  "0.45 × 0.2 × 100 = 9 mm³/s.",
  "0,45 × 0,2 × 100 = 9 mm³/s.",
  "The formula matches volumetric extrusion demand",
  "La formula rappresenta la richiesta volumetrica",
  "It estimates how much molten material the hotend must supply each second.",
  "Stima quanto materiale fuso deve fornire l'hotend ogni secondo."
);

calc(
  "model-scale-calculator",
  "Calculate model scale percentage",
  "Calcola la percentuale di scala del modello",
  "Compare target dimension with original dimension.",
  "Confronta la dimensione finale desiderata con quella originale.",
  "scale % = target ÷ original × 100",
  "100 mm → 150 mm means 150% scale.",
  "100 mm → 150 mm significa scala 150%.",
  "Linear scale affects volume cubically",
  "La scala lineare influenza il volume al cubo",
  "Scaling every dimension to 150% makes the volume about 3.375 times larger, not merely 1.5 times.",
  "Portare ogni dimensione al 150% rende il volume circa 3,375 volte maggiore, non soltanto 1,5 volte."
);

calc(
  "support-angle-calculator",
  "Calculate an overhang angle",
  "Calcola un angolo di overhang",
  "Calculate the angle from horizontal using horizontal offset and vertical rise.",
  "Calcola l'angolo dall'orizzontale usando offset orizzontale e salita verticale.",
  "angle = atan2(vertical, horizontal) × 180/π",
  "10 mm horizontal and 10 mm vertical → 45°.",
  "10 mm orizzontali e 10 mm verticali → 45°.",
  "Angle convention matters",
  "La convenzione dell'angolo è importante",
  "This tool reports the angle from horizontal, which may differ from slicers that describe overhang from vertical.",
  "Lo strumento restituisce l'angolo dall'orizzontale, che può differire da slicer che descrivono l'overhang rispetto alla verticale."
);

calc(
  "infill-material-estimator",
  "Estimate printed material volume from infill",
  "Stima il volume stampato dall'infill",
  "Treat shell/top/bottom material as fully solid and apply infill percentage only to the remaining model volume.",
  "Considera shell/top/bottom come completamente solidi e applica l'infill soltanto al volume rimanente.",
  "printed volume = solid × [shell share + (1 − shell share) × infill]",
  "100 cm³, 25% shell and 20% infill → 40 cm³ estimated printed volume.",
  "100 cm³, shell 25% e infill 20% → circa 40 cm³ stampati.",
  "20% infill does not mean 20% of total model material",
  "Infill 20% non significa usare il 20% del materiale totale",
  "Shells, top and bottom layers are still treated as solid in this estimate.",
  "Perimetri, top e bottom vengono comunque considerati solidi nella stima."
);

calc(
  "filament-remaining-calculator",
  "Estimate filament remaining on a spool",
  "Stima il filamento rimasto sulla bobina",
  "Subtract empty spool mass, then convert remaining filament weight into approximate length.",
  "Sottrae il peso della bobina vuota e converte il peso del filamento residuo in lunghezza.",
  "filament weight = spool − empty; length = weight ÷ density ÷ cross-sectional area",
  "A 650 g spool with a 250 g empty spool contains about 400 g of filament.",
  "Una bobina da 650 g con bobina vuota da 250 g contiene circa 400 g di filamento.",
  "Knowing empty spool weight is important",
  "È importante conoscere il peso della bobina vuota",
  "Including the spool itself would otherwise overestimate remaining material.",
  "Includere il peso della bobina sovrastimerebbe il materiale residuo."
);

/* STL file tools */

const fileDefs: SimpleEditorialDefinition[] = [
  {
    id:"stl-dimensions-checker",
    family:"formatter",
    title:bi("Inspect STL dimensions","Analizza le dimensioni di un STL"),
    intro:bi(
      "Parse binary or ASCII STL triangles and calculate the model bounding box.",
      "Analizza triangoli STL binari o ASCII e calcola il bounding box del modello."
    ),
    input:bi("STL file","File STL"),
    process:bi("Parse triangles → min/max XYZ","Analizza triangoli → min/max XYZ"),
    output:bi("X/Y/Z dimensions + triangle count","Dimensioni X/Y/Z + numero triangoli"),
    example:bi(
      "Dimensions are reported in the coordinate units interpreted as millimeters.",
      "Le dimensioni vengono mostrate nelle unità delle coordinate interpretate come millimetri."
    ),
    insightTitle:bi(
      "STL does not intrinsically store a unit",
      "STL non memorizza intrinsecamente un'unità"
    ),
    insightBody:bi(
      "The file contains coordinates; treating them as millimeters is a convention used by many 3D-printing workflows.",
      "Il file contiene coordinate; interpretarle come millimetri è una convenzione comune nei workflow di stampa 3D."
    ),
    privacy:false
  },
  {
    id:"stl-volume-calculator",
    family:"formatter",
    title:bi("Calculate STL mesh volume","Calcola il volume di una mesh STL"),
    intro:bi(
      "Parse the triangular mesh and sum signed tetrahedron volumes.",
      "Analizza la mesh triangolare e somma i volumi firmati dei tetraedri."
    ),
    input:bi("STL triangles","Triangoli STL"),
    process:bi("Signed tetrahedral volume sum","Somma dei volumi tetraedrici firmati"),
    output:bi("mm³ + cm³","mm³ + cm³"),
    example:bi(
      "1000 mm³ is reported as 1 cm³.",
      "1000 mm³ vengono riportati come 1 cm³."
    ),
    insightTitle:bi(
      "Reliable volume assumes a properly enclosed mesh",
      "Un volume affidabile richiede una mesh correttamente chiusa"
    ),
    insightBody:bi(
      "Open, self-intersecting or inconsistently oriented meshes can produce misleading geometric volume results.",
      "Mesh aperte, auto-intersecanti o orientate in modo incoerente possono produrre volumi geometrici fuorvianti."
    ),
    privacy:false
  },
  {
    id:"stl-viewer",
    family:"formatter",
    title:bi("Preview an STL as a wireframe","Visualizza un STL come wireframe"),
    intro:bi(
      "Parse the STL locally and generate a lightweight isometric wireframe PNG preview.",
      "Analizza localmente l'STL e genera una leggera anteprima PNG wireframe isometrica."
    ),
    input:bi("STL file","File STL"),
    process:bi("Parse → isometric projection → canvas","Parsing → proiezione isometrica → canvas"),
    output:bi("PNG preview + triangle count","Anteprima PNG + numero triangoli"),
    example:bi(
      "The preview canvas is 900×650 pixels.",
      "Il canvas dell'anteprima è 900×650 pixel."
    ),
    insightTitle:bi(
      "The preview intentionally limits rendered triangles",
      "L'anteprima limita intenzionalmente i triangoli renderizzati"
    ),
    insightBody:bi(
      "For very large meshes the wireframe draws at most the first 30,000 triangles to keep browser rendering lightweight.",
      "Per mesh molto grandi il wireframe disegna al massimo i primi 30.000 triangoli per mantenere leggero il rendering nel browser."
    ),
    privacy:false
  }
];

const calcEntries = Object.fromEntries(
  calculatorDefs.map(def => [def.id, calculatorEditorial(def)])
);

const fileEntries = Object.fromEntries(
  fileDefs.map(def => [def.id, simpleEditorial(def)])
);

export const makerEditorialBatch:
  Partial<Record<string, Partial<Record<LocaleId, ToolEditorial>>>> = {
    ...calcEntries,
    ...fileEntries
  };

