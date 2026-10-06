
import type { LocaleId } from "../core/types.ts";
import type { ToolEditorial } from "./tool-editorial.ts";
import {
  bi,
  simpleEditorial,
  type SimpleEditorialDefinition
} from "./editorial-factories.ts";

const d = (
  id:string,
  family:SimpleEditorialDefinition["family"],
  enTitle:string,itTitle:string,
  enIntro:string,itIntro:string,
  enInput:string,itInput:string,
  enProcess:string,itProcess:string,
  enOutput:string,itOutput:string,
  enExample:string,itExample:string,
  enInsight:string,itInsight:string,
  enBody:string,itBody:string
):SimpleEditorialDefinition => ({
  id,family,
  title:bi(enTitle,itTitle),
  intro:bi(enIntro,itIntro),
  input:bi(enInput,itInput),
  process:bi(enProcess,itProcess),
  output:bi(enOutput,itOutput),
  example:bi(enExample,itExample),
  insightTitle:bi(enInsight,itInsight),
  insightBody:bi(enBody,itBody)
});

const defs:SimpleEditorialDefinition[] = [

  d("color-picker","converter",
    "Inspect a color in HEX, RGB and HSL","Analizza un colore in HEX, RGB e HSL",
    "Convert one browser color value into three common representations.","Converte un colore del browser in tre rappresentazioni comuni.",
    "Color","Colore","HEX → RGB → HSL","HEX → RGB → HSL","HEX + RGB + HSL","HEX + RGB + HSL",
    "#3366FF → RGB 51,102,255"," #3366FF → RGB 51,102,255",
    "Different formats can represent the same color","Formati diversi possono rappresentare lo stesso colore",
    "HEX, RGB and HSL describe the same displayed color using different coordinate systems.","HEX, RGB e HSL descrivono lo stesso colore usando sistemi differenti."
  ),

  d("color-palette-generator","generator",
    "Generate a hue-based color palette","Genera una palette basata sulla tonalità",
    "Create five colors by rotating the base HSL hue while preserving saturation and lightness.","Crea cinque colori ruotando la tonalità HSL di base e mantenendo saturazione e luminosità.",
    "Base color","Colore base","Hue −60°, −30°, 0°, +30°, +60°","Tonalità −60°, −30°, 0°, +30°, +60°","Five-color palette","Palette di cinque colori",
    "The center color is the original base color.","Il colore centrale è quello originale.",
    "Only hue is intentionally rotated","Viene modificata intenzionalmente solo la tonalità",
    "Keeping saturation and lightness stable helps the generated colors feel related.","Mantenere saturazione e luminosità aiuta i colori generati a risultare coerenti."
  ),

  d("palette-from-image","generator",
    "Extract dominant colors from an image","Estrai i colori dominanti da un’immagine",
    "Sample uploaded image pixels locally and group similar RGB values into coarse color bins.","Campiona localmente i pixel dell’immagine e raggruppa colori RGB simili in fasce.",
    "Image","Immagine","Downsample → sample pixels → rank RGB bins","Ridimensiona → campiona pixel → ordina gruppi RGB","Color palette","Palette colori",
    "Choose between 2 and 12 extracted colors.","Puoi estrarre da 2 a 12 colori.",
    "The image is reduced before analysis","L’immagine viene ridotta prima dell’analisi",
    "The current implementation analyzes a compact pixel representation rather than every full-resolution pixel, making extraction much faster in-browser.","L’implementazione analizza una rappresentazione compatta dei pixel invece di ogni pixel a piena risoluzione, rendendo l’estrazione più rapida."
  ),

  d("random-color-generator","generator",
    "Generate a random HEX color","Genera un colore HEX casuale",
    "Generate three random bytes for red, green and blue using browser cryptographic randomness.","Genera tre byte casuali per rosso, verde e blu usando la casualità crittografica del browser.",
    "Browser randomness","Casualità browser","3 random RGB bytes","3 byte RGB casuali","HEX color","Colore HEX",
    "Three bytes define 24 bits of RGB color.","Tre byte definiscono 24 bit di colore RGB.",
    "There are 16,777,216 possible RGB combinations","Esistono 16.777.216 combinazioni RGB",
    "Each of the red, green and blue channels can independently take 256 values.","Ciascuno dei canali rosso, verde e blu può assumere 256 valori."
  ),

  ...["gradient-generator","css-gradient-generator"].map(id => d(
    id,"generator",
    id === "gradient-generator" ? "Generate a CSS linear gradient" : "Generate CSS linear-gradient code",
    id === "gradient-generator" ? "Genera un gradiente lineare CSS" : "Genera codice CSS linear-gradient",
    "Combine two colors and an angle into a CSS linear-gradient expression.",
    "Combina due colori e un angolo in un’espressione CSS linear-gradient.",
    "Two colors + angle","Due colori + angolo",
    "Build linear-gradient()","Crea linear-gradient()",
    "CSS gradient","Gradiente CSS",
    "135° changes the direction without changing the endpoint colors.",
    "135° modifica la direzione senza cambiare i colori estremi.",
    "The angle controls gradient direction",
    "L’angolo controlla la direzione",
    "The two selected colors remain the gradient stops while the angle rotates the gradient axis.",
    "I due colori restano gli estremi del gradiente mentre l’angolo ruota il suo asse."
  )),

  d("hex-to-rgb","converter",
    "Convert HEX to RGB","Converti HEX in RGB",
    "Decode the three hexadecimal color channels into decimal values from 0 to 255.","Decodifica i tre canali esadecimali in valori decimali da 0 a 255.",
    "HEX color","Colore HEX","Decode R,G,B bytes","Decodifica byte R,G,B","RGB","RGB",
    "#3366FF → rgb(51, 102, 255)","#3366FF → rgb(51, 102, 255)",
    "Two hexadecimal digits encode each channel","Due cifre esadecimali codificano ogni canale",
    "A six-digit HEX color contains one byte each for red, green and blue.","Un colore HEX a sei cifre contiene un byte per rosso, verde e blu."
  ),

  d("rgb-to-hex","converter",
    "Convert RGB to HEX","Converti RGB in HEX",
    "Round and clamp RGB channel values, then encode each channel using two hexadecimal digits.","Arrotonda e limita i canali RGB, poi codifica ogni canale con due cifre esadecimali.",
    "RGB","RGB","Channels → hexadecimal bytes","Canali → byte esadecimali","HEX","HEX",
    "51,102,255 → #3366FF","51,102,255 → #3366FF",
    "HEX is simply another representation of RGB bytes","HEX è semplicemente un’altra rappresentazione dei byte RGB",
    "The visible color does not change when converting between equivalent RGB and HEX values.","Il colore visibile non cambia passando tra valori RGB e HEX equivalenti."
  ),

  d("hex-to-hsl","converter",
    "Convert HEX to HSL","Converti HEX in HSL",
    "Decode HEX to RGB and derive hue, saturation and lightness.","Decodifica HEX in RGB e ricava tonalità, saturazione e luminosità.",
    "HEX","HEX","HEX → RGB → HSL","HEX → RGB → HSL","HSL","HSL",
    "#3366FF becomes an HSL representation of the same color.","#3366FF viene espresso in HSL mantenendo lo stesso colore.",
    "HSL separates hue from lightness","HSL separa tonalità e luminosità",
    "This often makes manual palette adjustments easier than working directly with RGB channels.","Questo può rendere più semplici le modifiche manuali di una palette rispetto ai canali RGB."
  ),

  d("hsl-to-hex","converter",
    "Convert HSL to HEX","Converti HSL in HEX",
    "Convert hue, saturation and lightness into RGB channels and then HEX.","Converte tonalità, saturazione e luminosità in canali RGB e poi HEX.",
    "HSL","HSL","HSL → RGB → HEX","HSL → RGB → HEX","HEX","HEX",
    "Hue wraps around the 0–360° color wheel.","La tonalità ruota sulla scala 0–360°.",
    "Hue is circular","La tonalità è circolare",
    "Angles outside one full turn can be normalized back onto the same color wheel.","Gli angoli oltre un giro completo possono essere normalizzati sulla stessa ruota cromatica."
  ),

  d("rgb-to-hsl","converter",
    "Convert RGB to HSL","Converti RGB in HSL",
    "Normalize RGB channels and derive hue, saturation and lightness mathematically.","Normalizza i canali RGB e ricava matematicamente tonalità, saturazione e luminosità.",
    "RGB","RGB","RGB → HSL","RGB → HSL","HSL","HSL",
    "Equal RGB channels produce zero saturation.","Canali RGB uguali producono saturazione zero.",
    "Gray colors have no meaningful hue","I grigi non hanno una tonalità significativa",
    "When red, green and blue are equal, the color contains no chromatic saturation.","Quando rosso, verde e blu sono uguali, il colore non contiene saturazione cromatica."
  ),

  d("cmyk-to-rgb","converter",
    "Convert CMYK percentages to RGB","Converti percentuali CMYK in RGB",
    "Apply cyan, magenta, yellow and black percentages to calculate RGB channels.","Applica le percentuali di ciano, magenta, giallo e nero per calcolare i canali RGB.",
    "CMYK percentages","Percentuali CMYK","CMYK formula","Formula CMYK","RGB + HEX","RGB + HEX",
    "0%,0%,0%,0% produces white RGB.","0%,0%,0%,0% produce RGB bianco.",
    "This is a mathematical conversion, not a printer profile","È una conversione matematica, non un profilo di stampa",
    "Real print color depends on inks, paper and ICC profiles beyond the simple CMYK formula.","Il colore di stampa reale dipende da inchiostri, carta e profili ICC oltre alla semplice formula CMYK."
  ),

  d("rgb-to-cmyk","converter",
    "Convert RGB to CMYK percentages","Converti RGB in percentuali CMYK",
    "Normalize RGB channels, derive black and calculate the remaining cyan, magenta and yellow components.","Normalizza i canali RGB, ricava il nero e calcola le componenti ciano, magenta e giallo.",
    "RGB","RGB","RGB → CMYK","RGB → CMYK","CMYK percentages","Percentuali CMYK",
    "RGB 0,0,0 becomes 0%,0%,0%,100% black.","RGB 0,0,0 diventa 0%,0%,0%,100% nero.",
    "Screen-to-print conversion is device-dependent in practice","La conversione schermo-stampa dipende dal dispositivo nella pratica",
    "The calculated percentages are useful numerically but do not replace color-managed print workflows.","Le percentuali calcolate sono utili numericamente ma non sostituiscono un flusso di stampa con gestione colore."
  ),

  ...["color-contrast-checker","wcag-contrast-calculator"].map(id => d(
    id,"converter",
    id === "color-contrast-checker" ? "Check contrast between two colors" : "Calculate WCAG contrast ratio",
    id === "color-contrast-checker" ? "Controlla il contrasto tra due colori" : "Calcola il contrasto WCAG",
    "Calculate relative luminance for foreground and background and compare their contrast ratio.",
    "Calcola la luminanza relativa di primo piano e sfondo e confronta il loro rapporto.",
    "Foreground + background","Primo piano + sfondo",
    "Relative luminance → contrast ratio","Luminanza relativa → rapporto di contrasto",
    "Ratio + AA/AAA result","Rapporto + risultato AA/AAA",
    "Normal-text thresholds checked are 4.5:1 for AA and 7:1 for AAA.",
    "Le soglie controllate per testo normale sono 4,5:1 per AA e 7:1 per AAA.",
    "The current pass/fail result is for normal text",
    "Il risultato attuale riguarda il testo normale",
    "Large-text and non-text accessibility criteria can use different WCAG requirements.",
    "Testo grande e componenti non testuali possono avere requisiti WCAG differenti."
  )),

  d("complementary-color-generator","generator",
    "Generate a complementary color","Genera un colore complementare",
    "Rotate the base HSL hue by 180 degrees.","Ruota di 180 gradi la tonalità HSL del colore base.",
    "Base color","Colore base","Hue +180°","Tonalità +180°","Complementary color","Colore complementare",
    "The complementary hue lies opposite on the color wheel.","La tonalità complementare si trova sul lato opposto della ruota cromatica.",
    "Saturation and lightness are preserved","Saturazione e luminosità vengono preservate",
    "Only the hue angle is rotated by the generator.","Il generatore ruota soltanto l’angolo della tonalità."
  ),

  d("analogous-color-generator","generator",
    "Generate analogous colors","Genera colori analoghi",
    "Create colors at −30°, 0° and +30° around the base hue.","Crea colori a −30°, 0° e +30° attorno alla tonalità base.",
    "Base color","Colore base","Hue ±30°","Tonalità ±30°","Three analogous colors","Tre colori analoghi",
    "The original color remains the center of the scheme.","Il colore originale rimane al centro dello schema.",
    "Analogous hues sit close together on the wheel","Le tonalità analoghe sono vicine sulla ruota",
    "Their relatively small angular separation usually gives a visually related palette.","La piccola distanza angolare tende a produrre una palette visivamente coerente."
  ),

  d("triadic-color-generator","generator",
    "Generate a triadic color scheme","Genera uno schema triadico",
    "Create three HSL hues separated by 120 degrees.","Crea tre tonalità HSL separate da 120 gradi.",
    "Base color","Colore base","Hue 0° / 120° / 240°","Tonalità 0° / 120° / 240°","Triadic palette","Palette triadica",
    "Three hues divide the 360° wheel into equal thirds.","Tre tonalità dividono la ruota da 360° in tre parti uguali.",
    "Triadic spacing is mathematically even","La distanza triadica è matematicamente uniforme",
    "Each generated hue is one third of a full turn from the next.","Ogni tonalità generata dista un terzo di giro dalla successiva."
  ),

  d("color-shades-generator","generator",
    "Generate darker shades","Genera tonalità più scure",
    "Mix the base RGB color toward black at several fixed amounts.","Mescola il colore RGB di base verso il nero con diverse percentuali fisse.",
    "Base color","Colore base","Mix with black","Mescola con nero","Five shades","Cinque tonalità scure",
    "Higher mix amounts produce progressively darker colors.","Percentuali maggiori producono colori progressivamente più scuri.",
    "The mixing happens directly in RGB","La miscelazione avviene direttamente in RGB",
    "This is a numeric channel interpolation rather than a perceptually uniform lightness model.","È un’interpolazione numerica dei canali e non un modello di luminosità percettivamente uniforme."
  ),

  d("color-tints-generator","generator",
    "Generate lighter tints","Genera tinte più chiare",
    "Mix the base RGB color toward white at several fixed amounts.","Mescola il colore RGB di base verso il bianco con diverse percentuali fisse.",
    "Base color","Colore base","Mix with white","Mescola con bianco","Five tints","Cinque tinte",
    "Higher amounts move progressively closer to white.","Percentuali maggiori avvicinano progressivamente il colore al bianco.",
    "Tints preserve the base through interpolation","Le tinte derivano dalla base tramite interpolazione",
    "Each RGB channel is moved toward 255 rather than replacing the hue outright.","Ogni canale RGB viene spostato verso 255 senza sostituire direttamente la tonalità."
  ),

  d("color-mixer","generator",
    "Mix two RGB colors","Mescola due colori RGB",
    "Linearly interpolate each RGB channel using the selected amount of Color B.","Interpola linearmente ogni canale RGB usando la percentuale scelta del Colore B.",
    "Color A + Color B + amount","Colore A + Colore B + percentuale",
    "RGB interpolation","Interpolazione RGB","Mixed color","Colore miscelato",
    "50% uses the midpoint of each RGB channel.","50% usa il punto medio di ciascun canale RGB.",
    "RGB mixing is not the same as physical paint mixing","La miscela RGB non equivale alla miscela di vernici",
    "The calculation combines emitted-light channel values, not pigment behavior.","Il calcolo combina valori di luce RGB e non il comportamento fisico dei pigmenti."
  ),

  d("brand-palette-generator","generator",
    "Generate practical brand tones","Genera tonalità per una brand palette",
    "Create lighter and darker RGB variants around a selected brand color.","Crea varianti RGB più chiare e più scure attorno al colore del brand.",
    "Brand color","Colore brand","Mix toward white and black","Mescola verso bianco e nero","50–900 palette","Palette 50–900",
    "The base color is retained as the 500 tone.","Il colore base viene mantenuto come tonalità 500.",
    "The scale uses fixed mixing steps","La scala usa percentuali di miscelazione fisse",
    "Labels such as 50, 500 and 900 are practical palette names rather than measurements of perceptual lightness.","Etichette come 50, 500 e 900 sono nomi pratici della palette e non misure di luminosità percettiva."
  ),

  d("css-color-generator","formatter",
    "Generate CSS color representations","Genera rappresentazioni colore CSS",
    "Return equivalent HEX, modern RGB and HSL syntax for a selected color.","Restituisce sintassi equivalenti HEX, RGB moderno e HSL per un colore selezionato.",
    "Color","Colore","Convert representations","Converte rappresentazioni","CSS color values","Valori colore CSS",
    "One color can be copied as HEX, rgb() or hsl().","Uno stesso colore può essere copiato come HEX, rgb() o hsl().",
    "The formats are interchangeable for the displayed color","I formati sono intercambiabili per il colore visualizzato",
    "Choosing a representation is usually about readability or workflow rather than changing appearance.","La scelta del formato riguarda generalmente leggibilità o workflow, non l’aspetto."
  ),

  d("image-average-color","converter",
    "Calculate the average visible image color","Calcola il colore medio visibile di un’immagine",
    "Downsample the image and calculate an alpha-weighted average of visible RGB pixels.","Ridimensiona l’immagine e calcola una media RGB pesata per l’alpha dei pixel visibili.",
    "Image","Immagine","Downsample → alpha-weighted RGB average","Ridimensiona → media RGB pesata per alpha","Average HEX + RGB","HEX + RGB medi",
    "Transparent pixels contribute little or nothing to the average.","I pixel trasparenti contribuiscono poco o per niente alla media.",
    "The average color is not necessarily a dominant color","Il colore medio non è necessariamente il colore dominante",
    "Averaging every visible pixel can produce a color that is not itself common in the original image.","La media di tutti i pixel visibili può produrre un colore che non compare frequentemente nell’immagine originale."
  ),

  d("color-blindness-preview","generator",
    "Preview color-vision-deficiency simulations","Simula diverse forme di deficit della visione dei colori",
    "Apply an approximate RGB transformation matrix to an uploaded image.","Applica una matrice RGB approssimata a un’immagine caricata.",
    "Image + simulation mode","Immagine + modalità",
    "RGB matrix transform","Trasformazione con matrice RGB","PNG preview","Anteprima PNG",
    "Modes include deuteranopia, protanopia and tritanopia.","Le modalità includono deuteranopia, protanopia e tritanopia.",
    "The simulation is approximate",
    "La simulazione è approssimativa",
    "It is useful as a visual preview but should not be treated as a medical model or a complete accessibility test.","È utile come anteprima visiva ma non va considerata un modello medico né un test completo di accessibilità."
  )

];

export const colorEditorialBatch:
  Partial<Record<string, Partial<Record<LocaleId, ToolEditorial>>>> =
  Object.fromEntries(defs.map(def => [def.id, simpleEditorial(def)]));
