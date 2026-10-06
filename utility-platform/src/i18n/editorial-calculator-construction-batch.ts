import type { LocaleId } from "../core/types.ts";
import type { ToolEditorial } from "./tool-editorial.ts";
import {
  bi,
  calculatorEditorial,
  type CalculatorEditorialDefinition
} from "./editorial-factories.ts";

const defs: CalculatorEditorialDefinition[] = [];

const add = (def: CalculatorEditorialDefinition) => defs.push(def);

const areaWaste = (
  id: string,
  enName: string,
  itName: string
) => add({
  id,
  title: bi(
    `Estimate ${enName} area including waste`,
    `Stima la superficie di ${itName} includendo lo sfrido`
  ),
  intro: bi(
    "Calculate rectangular area and add a percentage allowance for cuts, waste or spare material.",
    "Calcola l’area rettangolare e aggiunge una percentuale per tagli, scarti o materiale di riserva."
  ),
  formula: "length × width × (1 + waste ÷ 100)",
  example: bi(
    "5 m × 4 m with 10% waste → 22 m²",
    "5 m × 4 m con 10% di sfrido → 22 m²"
  ),
  insightTitle: bi(
    "Waste allowance is added after calculating the base area",
    "Lo sfrido viene aggiunto dopo aver calcolato l’area base"
  ),
  insightBody: bi(
    "The extra percentage helps account for cuts and unusable pieces but does not change the actual room area.",
    "La percentuale aggiuntiva aiuta a considerare tagli e pezzi inutilizzabili, ma non modifica l’area reale."
  )
});

const volumeMass = (
  id: string,
  enName: string,
  itName: string
) => add({
  id,
  title: bi(
    `Estimate ${enName} volume and mass`,
    `Stima volume e massa di ${itName}`
  ),
  intro: bi(
    "Calculate material volume from dimensions and estimate mass using the selected density.",
    "Calcola il volume dalle dimensioni e stima la massa usando la densità selezionata."
  ),
  formula: "volume = L × W × D; mass = volume × density",
  example: bi(
    "Mass changes directly with the density assumption.",
    "La massa varia direttamente in base alla densità utilizzata."
  ),
  insightTitle: bi(
    "Density is an estimate",
    "La densità è una stima"
  ),
  insightBody: bi(
    "Real material density can vary with composition, moisture and compaction.",
    "La densità reale può variare in base a composizione, umidità e compattazione."
  )
});

const masonry = (
  id: string,
  enName: string,
  itName: string
) => add({
  id,
  title: bi(
    `Estimate the number of ${enName} units for a wall`,
    `Stima il numero di ${itName} necessari per una parete`
  ),
  intro: bi(
    "Compare wall area with the face area of each unit and include a waste allowance.",
    "Confronta l’area della parete con l’area frontale di ogni elemento e aggiunge lo sfrido."
  ),
  formula: "wall area ÷ unit face area × (1 + waste)",
  example: bi(
    "The final quantity is rounded up to a whole unit.",
    "La quantità finale viene arrotondata all’unità intera superiore."
  ),
  insightTitle: bi(
    "The estimate uses face area",
    "La stima utilizza l’area frontale"
  ),
  insightBody: bi(
    "Mortar joints, openings and real installation patterns can change the quantity required on site.",
    "Giunti di malta, aperture e posa reale possono modificare la quantità necessaria."
  )
});

add({
  id:"concrete-calculator",
  title:bi("Estimate concrete for a rectangular pour","Stima il calcestruzzo per un getto rettangolare"),
  intro:bi("Calculate concrete volume from length, width and thickness, then add a waste allowance.","Calcola il volume da lunghezza, larghezza e spessore e aggiunge una percentuale di margine."),
  formula:"length × width × depth × (1 + waste)",
  example:bi("5 × 3 × 0.15 m = 2.25 m³ before waste","5 × 3 × 0,15 m = 2,25 m³ prima del margine"),
  insightTitle:bi("Small thickness changes can strongly affect volume","Piccole variazioni di spessore incidono molto sul volume"),
  insightBody:bi("Thickness is multiplied across the entire surface, so even a few extra centimeters can require substantially more concrete.","Lo spessore viene moltiplicato per tutta la superficie, quindi pochi centimetri in più possono richiedere molto più calcestruzzo.")
});

add({
  id:"cement-calculator",
  title:bi("Estimate cement mass and number of bags","Stima massa del cemento e numero di sacchi"),
  intro:bi("Convert concrete volume into cement mass using a kg/m³ assumption, then divide by bag size.","Converte il volume del calcestruzzo in massa di cemento usando un valore kg/m³ e divide per il peso del sacco."),
  formula:"volume × kg/m³ ÷ bag size",
  example:bi("1 m³ × 300 kg/m³ with 25 kg bags → 12 bags","1 m³ × 300 kg/m³ con sacchi da 25 kg → 12 sacchi"),
  insightTitle:bi("Cement is only one component of concrete","Il cemento è solo un componente del calcestruzzo"),
  insightBody:bi("The kg/m³ assumption depends on the intended concrete mix and should not be confused with total concrete mass.","Il valore kg/m³ dipende dalla miscela prevista e non coincide con la massa totale del calcestruzzo.")
});

masonry("brick-calculator","brick","mattoni");
masonry("concrete-block-calculator","concrete block","blocchi di calcestruzzo");

add({
  id:"tile-calculator",
  title:bi("Estimate the number of tiles needed","Stima il numero di piastrelle necessarie"),
  intro:bi("Compare surface area with tile area and add a waste allowance before rounding up.","Confronta l’area della superficie con quella della piastrella e aggiunge lo sfrido prima di arrotondare."),
  formula:"surface area ÷ tile area × (1 + waste)",
  example:bi("The result is rounded up because partial tiles still require purchasing whole tiles.","Il risultato viene arrotondato perché anche i tagli richiedono l’acquisto di piastrelle intere."),
  insightTitle:bi("Tile dimensions must be converted to the same unit","Le dimensioni devono usare unità coerenti"),
  insightBody:bi("The calculator converts tile dimensions from centimeters to meters before comparing areas.","Il calcolatore converte le dimensioni delle piastrelle da centimetri a metri prima di confrontare le aree.")
});

areaWaste("flooring-calculator","flooring","pavimentazione");
areaWaste("hardwood-calculator","hardwood flooring","parquet");
areaWaste("laminate-calculator","laminate flooring","laminato");
areaWaste("carpet-calculator","carpet","moquette");

add({
  id:"paint-calculator",
  title:bi("Estimate paint for four room walls","Stima la pittura per le quattro pareti di una stanza"),
  intro:bi("Calculate wall area from room perimeter and height, then account for coats and paint coverage.","Calcola l’area delle pareti da perimetro e altezza e considera mani di pittura e resa."),
  formula:"2 × (L + W) × H × coats ÷ coverage",
  example:bi("More coats increase paint requirement proportionally.","Più mani aumentano proporzionalmente la quantità di pittura necessaria."),
  insightTitle:bi("Doors and windows are not subtracted","Porte e finestre non vengono sottratte"),
  insightBody:bi("The current estimate uses the full four-wall area, so large openings can make the result conservative.","La stima attuale usa l’intera superficie delle quattro pareti, quindi aperture grandi possono rendere la stima abbondante.")
});

add({
  id:"wallpaper-calculator",
  title:bi("Estimate wallpaper rolls","Stima i rotoli di carta da parati"),
  intro:bi("Calculate total wall area, add waste and divide by the coverage provided by each roll.","Calcola l’area totale delle pareti, aggiunge lo sfrido e divide per la copertura di ogni rotolo."),
  formula:"wall area × (1 + waste) ÷ roll coverage",
  example:bi("The number of rolls is always rounded up.","Il numero di rotoli viene sempre arrotondato per eccesso."),
  insightTitle:bi("Pattern matching can require extra material","I motivi da allineare possono richiedere più materiale"),
  insightBody:bi("A simple area estimate cannot fully model pattern repeats or complex cutting layouts.","Una semplice stima per area non può rappresentare completamente ripetizioni del motivo o tagli complessi.")
});

add({
  id:"drywall-calculator",
  title:bi("Estimate drywall sheet count","Stima il numero di pannelli in cartongesso"),
  intro:bi("Calculate wall area including waste and divide by the coverage of each sheet.","Calcola l’area della parete includendo lo sfrido e divide per la superficie di ogni pannello."),
  formula:"wall area × (1 + waste) ÷ sheet area",
  example:bi("The sheet count is rounded up to a whole panel.","Il numero di pannelli viene arrotondato per eccesso."),
  insightTitle:bi("Layout can affect real sheet usage","La disposizione può influenzare il consumo reale"),
  insightBody:bi("Offcuts, openings and stud layout can change how efficiently full sheets are used.","Ritagli, aperture e disposizione dei montanti possono cambiare l’efficienza con cui vengono usati i pannelli.")
});

add({
  id:"plaster-calculator",
  title:bi("Estimate wet plaster volume","Stima il volume di intonaco"),
  intro:bi("Multiply surface area by plaster thickness after converting millimeters to meters.","Moltiplica l’area per lo spessore dell’intonaco dopo aver convertito i millimetri in metri."),
  formula:"area × thickness(mm) ÷ 1000",
  example:bi("30 m² × 10 mm = 0.30 m³","30 m² × 10 mm = 0,30 m³"),
  insightTitle:bi("Thickness has a direct linear effect","Lo spessore ha un effetto lineare diretto"),
  insightBody:bi("Doubling plaster thickness doubles the estimated wet volume.","Raddoppiare lo spessore raddoppia il volume stimato.")
});

volumeMass("gravel-calculator","gravel","ghiaia");
volumeMass("sand-calculator","sand","sabbia");
volumeMass("asphalt-calculator","asphalt","asfalto");
volumeMass("stone-calculator","stone","pietra");
volumeMass("driveway-material-calculator","driveway material","materiale per vialetto");

for (const [id,en,it] of [
  ["mulch-calculator","mulch","pacciamatura"],
  ["soil-calculator","soil","terreno"]
] as const) {
  add({
    id,
    title:bi(`Estimate ${en} volume`,`Stima il volume di ${it}`),
    intro:bi("Calculate volume from length, width and depth.","Calcola il volume da lunghezza, larghezza e profondità."),
    formula:"length × width × depth",
    example:bi("Depth entered in centimeters is converted to meters.","La profondità inserita in centimetri viene convertita in metri."),
    insightTitle:bi("Depth is easy to underestimate","La profondità è facile da sottostimare"),
    insightBody:bi("Because depth affects the whole area, a small increase can add substantial volume.","Poiché la profondità interessa l’intera superficie, un piccolo aumento può aggiungere molto volume.")
  });
}

add({
  id:"paver-calculator",
  title:bi("Estimate the number of pavers","Stima il numero di masselli"),
  intro:bi("Compare total area with the face area of one paver and include waste.","Confronta l’area totale con quella di un massello e include lo sfrido."),
  formula:"area ÷ paver area × (1 + waste)",
  example:bi("The quantity is rounded up to whole pavers.","La quantità viene arrotondata a masselli interi."),
  insightTitle:bi("Cuts and laying pattern matter","Tagli e schema di posa contano"),
  insightBody:bi("Diagonal or complex patterns may require more waste than a simple rectangular layout.","Schemi diagonali o complessi possono richiedere più sfrido rispetto a una posa rettangolare semplice.")
});

add({
  id:"roof-pitch-calculator",
  title:bi("Calculate roof pitch from rise and run","Calcola la pendenza del tetto da rise e run"),
  intro:bi("Convert rise divided by horizontal run into angle, slope percentage and rise-per-12.","Converte il rapporto tra dislivello e sviluppo orizzontale in angolo, percentuale e rise-per-12."),
  formula:"pitch = atan(rise ÷ run)",
  example:bi("4 rise over 12 run ≈ 18.43°","4 di rise su 12 di run ≈ 18,43°"),
  insightTitle:bi("Degrees and percent slope describe the same geometry differently","Gradi e pendenza percentuale descrivono la stessa geometria in modi diversi"),
  insightBody:bi("They should not be treated as numerically interchangeable values.","Non devono essere considerati valori numericamente intercambiabili.")
});

add({
  id:"roof-area-calculator",
  title:bi("Estimate gable roof surface area","Stima la superficie di un tetto a due falde"),
  intro:bi("Correct the building footprint area using the cosine of the roof pitch.","Corregge l’area in pianta dell’edificio usando il coseno della pendenza."),
  formula:"footprint area ÷ cos(pitch)",
  example:bi("A steeper roof has more surface area than its horizontal footprint.","Un tetto più inclinato ha più superficie rispetto alla sua proiezione orizzontale."),
  insightTitle:bi("Pitch increases actual surface area","La pendenza aumenta la superficie reale"),
  insightBody:bi("The horizontal footprint understates the material area once the roof is inclined.","La proiezione orizzontale sottostima la superficie necessaria quando il tetto è inclinato.")
});

add({
  id:"rafter-length-calculator",
  title:bi("Calculate rafter length","Calcola la lunghezza di un travetto"),
  intro:bi("Use horizontal run and rise as the two perpendicular sides of a right triangle.","Usa run orizzontale e rise come cateti di un triangolo rettangolo."),
  formula:"√(run² + rise²)",
  example:bi("4 m run and 2 m rise → about 4.47 m","4 m di run e 2 m di rise → circa 4,47 m"),
  insightTitle:bi("This is the Pythagorean theorem","È il teorema di Pitagora"),
  insightBody:bi("The rafter is the hypotenuse formed by horizontal run and vertical rise.","Il travetto rappresenta l’ipotenusa formata da sviluppo orizzontale e dislivello.")
});

add({
  id:"stair-calculator",
  title:bi("Estimate stair risers and horizontal run","Stima alzate e sviluppo orizzontale di una scala"),
  intro:bi("Estimate a practical riser count from total rise, then calculate actual riser height and approximate run.","Stima il numero di alzate dal dislivello totale e calcola altezza reale e sviluppo approssimativo."),
  formula:"risers ≈ total rise ÷ desired riser",
  example:bi("The riser count is rounded to a whole number before actual height is recalculated.","Il numero di alzate viene arrotondato prima di ricalcolare l’altezza reale."),
  insightTitle:bi("Small changes in riser count change every step","Piccole variazioni nel numero di alzate cambiano ogni gradino"),
  insightBody:bi("Once the count changes, actual riser height is redistributed across the entire staircase.","Quando cambia il numero, l’altezza reale viene redistribuita su tutta la scala.")
});

add({
  id:"deck-board-calculator",
  title:bi("Estimate deck boards across a deck width","Stima le tavole necessarie sulla larghezza di un deck"),
  intro:bi("Combine board width and gap to determine how many board modules fit across the deck.","Combina larghezza della tavola e fuga per determinare quante tavole servono."),
  formula:"deck width ÷ (board width + gap)",
  example:bi("The result is rounded up to a whole board.","Il risultato viene arrotondato alla tavola intera superiore."),
  insightTitle:bi("The gap contributes to total coverage","La fuga contribuisce alla copertura totale"),
  insightBody:bi("Ignoring spacing can noticeably overestimate the number of boards required.","Ignorare la fuga può sovrastimare sensibilmente il numero di tavole.")
});

add({
  id:"deck-material-calculator",
  title:bi("Estimate decking boards by area","Stima le tavole del deck tramite l’area"),
  intro:bi("Calculate deck area including waste and divide by the area covered by one board.","Calcola l’area del deck includendo lo sfrido e divide per l’area coperta da una tavola."),
  formula:"deck area × (1 + waste) ÷ board area",
  example:bi("Board count is rounded up.","Il numero di tavole viene arrotondato per eccesso."),
  insightTitle:bi("Area estimates ignore detailed board layout","Le stime per area ignorano il layout dettagliato"),
  insightBody:bi("Real cutting patterns and board direction can change material efficiency.","Tagli reali e direzione delle tavole possono modificare l’efficienza del materiale.")
});

add({
  id:"fence-calculator",
  title:bi("Estimate fence panels and posts","Stima pannelli e pali per una recinzione"),
  intro:bi("Divide total fence length by panel width, round up, then add one post.","Divide la lunghezza totale per la larghezza del pannello, arrotonda e aggiunge un palo."),
  formula:"panels = ceil(length ÷ panel width); posts = panels + 1",
  example:bi("30 m with 2 m panels → 15 panels and 16 posts","30 m con pannelli da 2 m → 15 pannelli e 16 pali"),
  insightTitle:bi("Posts are one more than panels in a straight run","In una tratta rettilinea i pali sono uno in più dei pannelli"),
  insightBody:bi("Each adjacent pair of posts supports one panel.","Ogni coppia di pali adiacenti sostiene un pannello.")
});

add({
  id:"post-spacing-calculator",
  title:bi("Calculate equal spacing between posts","Calcola una distanza uniforme tra i pali"),
  intro:bi("Divide the total length by the number of spaces between the posts.","Divide la lunghezza totale per il numero di spazi tra i pali."),
  formula:"length ÷ (posts − 1)",
  example:bi("6 posts create 5 spaces, not 6.","6 pali creano 5 intervalli, non 6."),
  insightTitle:bi("Spacing counts gaps, not posts","La spaziatura conta gli intervalli, non i pali"),
  insightBody:bi("This is why one is subtracted from the number of posts.","Per questo viene sottratto uno dal numero di pali.")
});

add({
  id:"stud-calculator",
  title:bi("Estimate wall studs from spacing","Stima i montanti di una parete dalla spaziatura"),
  intro:bi("Divide wall length by stud spacing and include an additional end stud.","Divide la lunghezza della parete per la distanza tra i montanti e include il montante finale."),
  formula:"ceil(wall length ÷ spacing) + 1",
  example:bi("Smaller spacing requires more studs.","Una distanza minore richiede più montanti."),
  insightTitle:bi("This is a basic spacing estimate","È una stima base basata sulla spaziatura"),
  insightBody:bi("Corners, openings and structural requirements can add extra studs in real construction.","Angoli, aperture e requisiti strutturali possono richiedere montanti aggiuntivi.")
});

for (const id of ["lumber-calculator","board-foot-calculator"] as const) {
  add({
    id,
    title:bi("Calculate lumber in board feet","Calcola il legname in board feet"),
    intro:bi("Combine piece count, thickness, width and length using the standard board-foot relationship.","Combina numero di pezzi, spessore, larghezza e lunghezza usando la formula dei board feet."),
    formula:"pieces × thickness(in) × width(in) × length(ft) ÷ 12",
    example:bi("1 × 1 in × 6 in × 8 ft = 4 board feet","1 × 1 in × 6 in × 8 ft = 4 board feet"),
    insightTitle:bi("Board foot measures volume, not length","Il board foot misura volume, non lunghezza"),
    insightBody:bi("Boards with the same length can represent very different board-foot volumes if width or thickness changes.","Tavole della stessa lunghezza possono avere volumi molto diversi se cambiano larghezza o spessore.")
  });
}

add({
  id:"insulation-calculator",
  title:bi("Estimate insulation packs","Stima le confezioni di isolamento"),
  intro:bi("Calculate wall area including waste and divide by the coverage provided by each pack.","Calcola l’area della parete includendo lo sfrido e divide per la copertura di ogni confezione."),
  formula:"wall area × (1 + waste) ÷ pack coverage",
  example:bi("Pack count is rounded up.","Il numero di confezioni viene arrotondato per eccesso."),
  insightTitle:bi("Coverage per pack is product-specific","La copertura per confezione dipende dal prodotto"),
  insightBody:bi("Different insulation thicknesses and formats may provide different coverage.","Spessori e formati diversi possono offrire coperture differenti.")
});

add({
  id:"gutter-calculator",
  title:bi("Estimate gutter sections","Stima le sezioni di grondaia"),
  intro:bi("Divide required gutter length by the length of each available section.","Divide la lunghezza necessaria della grondaia per la lunghezza di ogni sezione."),
  formula:"ceil(total length ÷ section length)",
  example:bi("24 m using 3 m sections → 8 sections","24 m con sezioni da 3 m → 8 sezioni"),
  insightTitle:bi("The result counts full sections","Il risultato conta sezioni intere"),
  insightBody:bi("Connections, corners and offcuts are not separately modeled by this basic length estimate.","Raccordi, angoli e ritagli non vengono modellati separatamente da questa stima.")
});

for (const [id,label] of [
  ["concrete-slab-calculator","slab"],
  ["concrete-footing-calculator","footing"]
] as const) {
  add({
    id,
    title:bi(
      `Estimate concrete for a ${label}`,
      label === "slab" ? "Stima il calcestruzzo per una platea" : "Stima il calcestruzzo per una fondazione"
    ),
    intro:bi("Calculate rectangular concrete volume and include a waste allowance.","Calcola il volume rettangolare del calcestruzzo e include un margine."),
    formula:"length × width × depth × (1 + waste)",
    example:bi("All dimensions contribute directly to volume.","Tutte le dimensioni contribuiscono direttamente al volume."),
    insightTitle:bi("Concrete volume scales with every dimension","Il volume cresce con ogni dimensione"),
    insightBody:bi("Increasing length, width or depth increases required concrete proportionally.","Aumentare lunghezza, larghezza o profondità aumenta proporzionalmente il calcestruzzo necessario.")
  });
}

add({
  id:"retaining-wall-calculator",
  title:bi("Estimate retaining-wall blocks","Stima i blocchi per un muro di contenimento"),
  intro:bi("Compare wall face area with the face area of one block and add waste.","Confronta l’area frontale del muro con quella di un blocco e aggiunge lo sfrido."),
  formula:"wall area ÷ block face area × (1 + waste)",
  example:bi("The result is rounded up to whole blocks.","Il risultato viene arrotondato a blocchi interi."),
  insightTitle:bi("This estimates blocks by visible face area","La stima usa l’area frontale visibile"),
  insightBody:bi("Structural design, buried courses and reinforcement requirements are outside this geometric estimate.","Progettazione strutturale, corsi interrati e rinforzi non rientrano in questa stima geometrica.")
});

add({
  id:"pool-volume-calculator",
  title:bi("Estimate rectangular pool volume","Stima il volume di una piscina rettangolare"),
  intro:bi("Multiply length, width and average depth to estimate water volume.","Moltiplica lunghezza, larghezza e profondità media per stimare il volume d’acqua."),
  formula:"length × width × average depth",
  example:bi("1 m³ = 1000 liters","1 m³ = 1000 litri"),
  insightTitle:bi("Average depth matters for sloped pools","La profondità media è importante nelle piscine inclinate"),
  insightBody:bi("Using only the deepest point would overestimate a pool with a sloping floor.","Usare soltanto il punto più profondo sovrastimerebbe una piscina con fondo inclinato.")
});

add({
  id:"pond-volume-calculator",
  title:bi("Estimate oval pond volume","Stima il volume di un laghetto ovale"),
  intro:bi("Approximate the plan as an ellipse and multiply its area by average depth.","Approssima la superficie come un’ellisse e moltiplica l’area per la profondità media."),
  formula:"length × width × π ÷ 4 × depth",
  example:bi("The ellipse factor π/4 is about 0.785.","Il fattore π/4 dell’ellisse è circa 0,785."),
  insightTitle:bi("Irregular ponds are only approximated","I laghetti irregolari sono solo approssimati"),
  insightBody:bi("Natural shapes and varying depths can differ from the idealized oval model.","Forme naturali e profondità variabili possono differire dal modello ovale ideale.")
});

add({
  id:"room-area-calculator",
  title:bi("Calculate rectangular room area","Calcola l’area di una stanza rettangolare"),
  intro:bi("Multiply room length by room width.","Moltiplica la lunghezza della stanza per la larghezza."),
  formula:"length × width",
  example:bi("5 m × 4 m = 20 m²","5 m × 4 m = 20 m²"),
  insightTitle:bi("Irregular rooms can be split into rectangles","Le stanze irregolari possono essere divise in rettangoli"),
  insightBody:bi("Calculate each rectangular section separately and add the areas together.","Calcola separatamente ogni sezione rettangolare e somma le aree.")
});

export const calculatorConstructionEditorialBatch:
  Partial<Record<string, Partial<Record<LocaleId, ToolEditorial>>>> =
  Object.fromEntries(defs.map(def => [def.id, calculatorEditorial(def)]));
