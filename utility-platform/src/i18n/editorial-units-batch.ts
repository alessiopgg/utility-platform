import type { LocaleId } from "../core/types.ts";
import type { ToolEditorial } from "./tool-editorial.ts";
import {
  bi,
  simpleEditorial,
  type SimpleEditorialDefinition
} from "./editorial-factories.ts";

const unit = (
  id: string,
  enTitle: string,
  itTitle: string,
  enIntro: string,
  itIntro: string,
  enProcess: string,
  itProcess: string,
  enExample: string,
  itExample: string,
  enInsight: string,
  itInsight: string,
  enBody: string,
  itBody: string
): SimpleEditorialDefinition => ({
  id,
  family: "converter",
  title: bi(enTitle,itTitle),
  intro: bi(enIntro,itIntro),
  input: bi("Value + source unit","Valore + unità iniziale"),
  process: bi(enProcess,itProcess),
  output: bi("Converted value","Valore convertito"),
  example: bi(enExample,itExample),
  insightTitle: bi(enInsight,itInsight),
  insightBody: bi(enBody,itBody),
  privacy: false
});

const defs: SimpleEditorialDefinition[] = [

  unit("length-converter","Convert length units","Converti unità di lunghezza",
    "Convert between metric and imperial length units through a common meter base.","Converte tra unità metriche e imperiali usando il metro come base comune.",
    "Convert through meters","Converte tramite metri",
    "1 inch = 0.0254 meters","1 pollice = 0,0254 metri",
    "The inch is defined exactly as 25.4 mm","Il pollice è definito esattamente come 25,4 mm",
    "This exact definition is what links common imperial lengths to the metric system.","Questa definizione esatta collega le comuni unità imperiali al sistema metrico."
  ),

  unit("area-converter","Convert area units","Converti unità di area",
    "Convert square meters, square feet, acres, hectares and other common area units.","Converte metri quadrati, piedi quadrati, acri, ettari e altre unità di area.",
    "Convert through m²","Converte tramite m²",
    "1 hectare = 10,000 m²","1 ettaro = 10.000 m²",
    "Area conversion factors are squared length relationships","I fattori di area derivano da relazioni di lunghezza al quadrato",
    "That is why converting meters to feet and square meters to square feet uses different numeric factors.","Per questo convertire metri in piedi e metri quadrati in piedi quadrati richiede fattori numerici diversi."
  ),

  unit("volume-converter","Convert volume units","Converti unità di volume",
    "Convert liters, milliliters, cubic meters and common US liquid units.","Converte litri, millilitri, metri cubi e comuni unità liquide statunitensi.",
    "Convert through liters","Converte tramite litri",
    "1 m³ = 1000 liters","1 m³ = 1000 litri",
    "US gallons and imperial gallons are different units","Galloni USA e galloni imperiali sono unità diverse",
    "This converter uses the US gallon definition for its gallon option.","Questo convertitore usa la definizione del gallone statunitense."
  ),

  unit("weight-converter","Convert mass and weight units","Converti unità di massa e peso",
    "Convert kilograms, grams, pounds, ounces and metric tonnes.","Converte chilogrammi, grammi, libbre, once e tonnellate metriche.",
    "Convert through kilograms","Converte tramite chilogrammi",
    "1 pound = 0.45359237 kg","1 libbra = 0,45359237 kg",
    "The pound-to-kilogram relationship is exact","La relazione libbra-chilogrammo è esatta",
    "The international avoirdupois pound is defined as exactly 0.45359237 kilograms.","La libbra avoirdupois internazionale è definita esattamente come 0,45359237 chilogrammi."
  ),

  unit("speed-converter","Convert speed units","Converti unità di velocità",
    "Convert meters per second, kilometers per hour, miles per hour and knots.","Converte metri al secondo, chilometri orari, miglia orarie e nodi.",
    "Convert through m/s","Converte tramite m/s",
    "1 m/s = 3.6 km/h","1 m/s = 3,6 km/h",
    "A knot is one nautical mile per hour","Un nodo equivale a un miglio nautico all’ora",
    "That makes knots especially common in marine and aviation contexts.","Per questo i nodi sono particolarmente comuni in ambito nautico e aeronautico."
  ),

  unit("pressure-converter","Convert pressure units","Converti unità di pressione",
    "Convert pascals, kilopascals, bar, PSI, atmospheres and mmHg.","Converte pascal, kilopascal, bar, PSI, atmosfere e mmHg.",
    "Convert through pascals","Converte tramite pascal",
    "1 atm = 101325 Pa","1 atm = 101325 Pa",
    "One standard atmosphere has a defined reference value","Un’atmosfera standard ha un valore di riferimento definito",
    "The converter uses 101325 pascals for one standard atmosphere.","Il convertitore usa 101325 pascal per un’atmosfera standard."
  ),

  unit("energy-converter","Convert energy units","Converti unità di energia",
    "Convert joules, calories, watt-hours, kilowatt-hours and BTU.","Converte joule, calorie, wattora, kilowattora e BTU.",
    "Convert through joules","Converte tramite joule",
    "1 kWh = 3.6 MJ","1 kWh = 3,6 MJ",
    "Power and energy are not the same quantity","Potenza ed energia non sono la stessa grandezza",
    "Watts describe a rate of energy use, while watt-hours represent accumulated energy.","I watt descrivono una velocità di utilizzo dell’energia, mentre i wattora rappresentano energia accumulata."
  ),

  unit("power-converter","Convert power units","Converti unità di potenza",
    "Convert watts, kilowatts, megawatts and horsepower.","Converte watt, kilowatt, megawatt e horsepower.",
    "Convert through watts","Converte tramite watt",
    "1 kW = 1000 W","1 kW = 1000 W",
    "Horsepower has multiple historical definitions","L’horsepower ha più definizioni storiche",
    "This converter uses approximately 745.699872 watts per horsepower.","Questo convertitore usa circa 745,699872 watt per horsepower."
  ),

  unit("torque-converter","Convert torque units","Converti unità di coppia",
    "Convert newton-meters, pound-feet and pound-inches.","Converte newton metro, pound-foot e pound-inch.",
    "Convert through N·m","Converte tramite N·m",
    "1 lb·ft ≈ 1.35582 N·m","1 lb·ft ≈ 1,35582 N·m",
    "Torque combines force and lever arm","La coppia combina forza e braccio",
    "A torque value depends on both the applied force and its perpendicular distance from the axis.","La coppia dipende sia dalla forza applicata sia dalla sua distanza perpendicolare dall’asse."
  ),

  unit("density-converter","Convert density units","Converti unità di densità",
    "Convert kilograms per cubic meter, grams per cubic centimeter and pounds per cubic foot.","Converte kg/m³, g/cm³ e lb/ft³.",
    "Convert through kg/m³","Converte tramite kg/m³",
    "1 g/cm³ = 1000 kg/m³","1 g/cm³ = 1000 kg/m³",
    "Density combines mass and volume units","La densità combina unità di massa e volume",
    "Changing either side of the mass-per-volume ratio changes the conversion factor.","Cambiare l’unità di massa o quella di volume modifica il fattore di conversione."
  ),

  unit("data-storage-converter","Convert data storage units","Converti unità di archiviazione dati",
    "Convert bytes using both decimal KB/MB/GB/TB and binary KiB/MiB/GiB units.","Converte byte usando sia unità decimali KB/MB/GB/TB sia unità binarie KiB/MiB/GiB.",
    "Convert through bytes","Converte tramite byte",
    "1 KB = 1000 B, while 1 KiB = 1024 B","1 KB = 1000 B, mentre 1 KiB = 1024 B",
    "KB and KiB are intentionally different","KB e KiB sono intenzionalmente diversi",
    "Decimal prefixes use powers of 1000 while binary prefixes use powers of 1024.","I prefissi decimali usano potenze di 1000 mentre quelli binari usano potenze di 1024."
  ),

  unit("data-transfer-rate-converter","Convert data transfer rates","Converti velocità di trasferimento dati",
    "Convert bit-per-second and byte-per-second based transfer rates.","Converte velocità basate su bit al secondo e byte al secondo.",
    "Convert through bit/s","Converte tramite bit/s",
    "1 Byte/s = 8 bit/s","1 Byte/s = 8 bit/s",
    "Bits and bytes differ by a factor of eight","Bit e byte differiscono di un fattore otto",
    "This distinction is why network Mbps and file-transfer MB/s should not be read as the same numeric unit.","Per questo Mbps di rete e MB/s di trasferimento file non sono la stessa unità numerica."
  ),

  unit("angle-converter","Convert angle units","Converti unità angolari",
    "Convert radians, degrees, gradians and turns.","Converte radianti, gradi, gradi centesimali e giri.",
    "Convert through radians","Converte tramite radianti",
    "180° = π radians","180° = π radianti",
    "A full turn is 2π radians","Un giro completo equivale a 2π radianti",
    "Degrees divide a turn into 360 parts while radians relate angle directly to circular arc geometry.","I gradi dividono il giro in 360 parti mentre i radianti collegano direttamente l’angolo alla geometria dell’arco."
  ),

  unit("time-converter","Convert time units","Converti unità di tempo",
    "Convert milliseconds, seconds, minutes, hours, days and weeks.","Converte millisecondi, secondi, minuti, ore, giorni e settimane.",
    "Convert through seconds","Converte tramite secondi",
    "1 day = 86400 seconds","1 giorno = 86400 secondi",
    "Calendar months are intentionally absent","I mesi di calendario sono intenzionalmente assenti",
    "Months and years do not have one fixed duration in seconds, unlike the units included here.","Mesi e anni non hanno una singola durata fissa in secondi, a differenza delle unità incluse."
  ),

  unit("frequency-converter","Convert frequency units","Converti unità di frequenza",
    "Convert hertz, kilohertz, megahertz and gigahertz.","Converte hertz, kilohertz, megahertz e gigahertz.",
    "Convert through hertz","Converte tramite hertz",
    "1 MHz = 1,000,000 Hz","1 MHz = 1.000.000 Hz",
    "One hertz means one cycle per second","Un hertz significa un ciclo al secondo",
    "Frequency therefore measures how often a repeating event occurs in each second.","La frequenza misura quindi quante volte un evento periodico si verifica in un secondo."
  ),

  unit("force-converter","Convert force units","Converti unità di forza",
    "Convert newtons, kilonewtons, pound-force and kilogram-force.","Converte newton, kilonewton, pound-force e kilogram-force.",
    "Convert through newtons","Converte tramite newton",
    "1 kgf = 9.80665 N","1 kgf = 9,80665 N",
    "Kilogram-force is not the same as kilogram mass","Il chilogrammo-forza non è la stessa cosa del chilogrammo massa",
    "Kilogram-force represents the force corresponding to standard gravity acting on one kilogram of mass.","Il chilogrammo-forza rappresenta la forza esercitata dalla gravità standard su una massa di un chilogrammo."
  ),

  unit("acceleration-converter","Convert acceleration units","Converti unità di accelerazione",
    "Convert meters per second squared, standard gravity and feet per second squared.","Converte m/s², gravità standard e ft/s².",
    "Convert through m/s²","Converte tramite m/s²",
    "1 g = 9.80665 m/s²","1 g = 9,80665 m/s²",
    "Standard g is a reference acceleration","g standard è un’accelerazione di riferimento",
    "It is a conventional value and local gravitational acceleration can vary slightly by location.","È un valore convenzionale e l’accelerazione gravitazionale locale può variare leggermente."
  ),

  unit("cooking-measurement-converter","Convert cooking volume measurements","Converti misure di volume da cucina",
    "Convert milliliters, liters, US teaspoons, tablespoons, cups and fluid ounces.","Converte millilitri, litri, cucchiaini, cucchiai, tazze e once liquide USA.",
    "Convert through milliliters","Converte tramite millilitri",
    "1 US cup ≈ 236.588 mL","1 tazza USA ≈ 236,588 mL",
    "Cup and spoon sizes vary between measurement systems","Tazze e cucchiai cambiano tra sistemi di misura",
    "The tool specifically uses US customary cooking-volume definitions.","Lo strumento usa specificamente le definizioni volumetriche da cucina statunitensi."
  ),

  unit("temperature-converter","Convert temperature scales","Converti scale di temperatura",
    "Convert between Celsius, Fahrenheit and Kelvin using scale-specific offset formulas.","Converte tra Celsius, Fahrenheit e Kelvin usando formule con offset specifici.",
    "Convert through Celsius","Converte tramite Celsius",
    "0 °C = 32 °F = 273.15 K","0 °C = 32 °F = 273,15 K",
    "Temperature conversion is not a simple multiplication","La temperatura non si converte con una semplice moltiplicazione",
    "Celsius and Fahrenheit have different zero points, so an offset must be applied as well as a scale factor.","Celsius e Fahrenheit hanno punti zero diversi, quindi serve anche un offset oltre al fattore di scala."
  ),

  unit("fuel-economy-converter","Convert fuel economy units","Converti unità di consumo carburante",
    "Convert L/100 km, US MPG, UK MPG and km/L using reciprocal relationships.","Converte L/100 km, MPG USA, MPG UK e km/L usando relazioni reciproche.",
    "Reciprocal conversion","Conversione reciproca",
    "Lower L/100 km means better economy, while higher MPG means better economy.","Un valore L/100 km più basso indica consumi migliori, mentre un MPG più alto indica consumi migliori.",
    "Fuel consumption and fuel economy move in opposite directions","Consumo ed economia di carburante si muovono in direzioni opposte",
    "L/100 km measures fuel used for distance, while MPG measures distance obtained from fuel, so their relationship is reciprocal rather than linear.","L/100 km misura il carburante usato per una distanza, mentre MPG misura la distanza ottenuta dal carburante: la relazione è reciproca e non lineare."
  )
];

export const unitsEditorialBatch:
  Partial<Record<string, Partial<Record<LocaleId, ToolEditorial>>>> =
  Object.fromEntries(defs.map(def => [def.id, simpleEditorial(def)]));
