import type { LocaleId } from "../core/types.ts";
import type { ToolEditorial } from "./tool-editorial.ts";
import {
  bi,
  calculatorEditorial,
  type CalculatorEditorialDefinition
} from "./editorial-factories.ts";

const rows = [
  ["dpi-calculator","Calculate DPI from pixels and print size","Calcola i DPI da pixel e dimensione di stampa","pixels ÷ inches","3000 px over 10 in = 300 DPI","DPI depends on physical output size","I DPI dipendono dalla dimensione fisica","The same image has a different effective DPI when printed at a different size.","La stessa immagine ha DPI effettivi diversi se viene stampata a dimensioni differenti."],
  ["ppi-calculator","Calculate pixels per inch","Calcola i pixel per pollice","pixels ÷ inches","3840 px over 15.6 in ≈ 246 PPI","PPI describes pixel density","Il PPI descrive la densità di pixel","More pixels in the same physical width produce a higher pixel density.","Più pixel nella stessa larghezza fisica producono una densità maggiore."],
  ["print-size-calculator","Calculate print size from pixels and DPI","Calcola la dimensione di stampa da pixel e DPI","pixels ÷ DPI","6000 px at 300 DPI = 20 inches","Higher DPI means a smaller print at the same pixel count","Più DPI significano una stampa più piccola a parità di pixel","Pixel dimensions are fixed while the chosen print density determines physical size.","Le dimensioni in pixel restano fisse mentre la densità scelta determina la dimensione fisica."],
  ["megapixel-calculator","Calculate image megapixels","Calcola i megapixel di un’immagine","width × height ÷ 1,000,000","6000 × 4000 = 24 MP","Megapixels measure total pixel count","I megapixel misurano il numero totale di pixel","Megapixels alone do not describe lens quality, noise or dynamic range.","I megapixel da soli non descrivono qualità dell’obiettivo, rumore o gamma dinamica."],
  ["sensor-crop-factor-calculator","Calculate crop factor from sensor size","Calcola il crop factor dalle dimensioni del sensore","43.2666 ÷ sensor diagonal","Smaller sensors produce a larger crop factor","Sensori più piccoli producono un crop factor maggiore","Crop factor compares sensor diagonal with 35 mm full frame","Il crop factor confronta la diagonale del sensore con il full frame 35 mm","The calculation uses diagonal size rather than sensor width alone.","Il calcolo usa la diagonale e non soltanto la larghezza del sensore."],
  ["equivalent-focal-length-calculator","Calculate full-frame-equivalent focal length","Calcola la focale equivalente full frame","focal length × crop factor","35 mm × 1.5 = 52.5 mm equivalent","Equivalent focal length describes framing","La focale equivalente descrive l’inquadratura","It does not physically change the focal length printed on the lens.","Non modifica fisicamente la lunghezza focale indicata sull’obiettivo."],
  ["depth-of-field-calculator","Estimate depth of field","Stima la profondità di campo","hyperfocal geometry → near/far limits","Aperture, focal length and focus distance all affect DOF","Diaframma, focale e distanza influenzano la PDC","Depth of field is based on an acceptable circle of confusion","La profondità di campo dipende dal circolo di confusione","It is a perceptual sharpness criterion rather than a hard physical boundary.","È un criterio percettivo di nitidezza e non un confine fisico netto."],
  ["hyperfocal-distance-calculator","Calculate hyperfocal distance","Calcola la distanza iperfocale","f² ÷ (N × CoC) + f","Shorter focal lengths and smaller apertures reduce hyperfocal distance","Focali più corte e diaframmi più chiusi riducono l’iperfocale","Focusing at hyperfocal maximizes far depth of field","Mettere a fuoco all’iperfocale massimizza la profondità verso infinito","The result depends on the chosen circle of confusion.","Il risultato dipende dal circolo di confusione scelto."],
  ["exposure-calculator","Calculate EV100","Calcola EV100","log₂(N²/t) − log₂(ISO/100)","Aperture, shutter and ISO combine into exposure value","Diaframma, tempo e ISO determinano il valore di esposizione","One stop represents a doubling or halving of light","Uno stop rappresenta un raddoppio o dimezzamento della luce","Equivalent exposure settings can trade aperture and shutter while preserving exposure.","Impostazioni equivalenti possono scambiare diaframma e tempo mantenendo l’esposizione."],
  ["shutter-speed-calculator","Estimate a hand-holdable shutter speed","Stima un tempo di scatto a mano libera","1 ÷ (focal length × crop factor)","50 mm on full frame → about 1/50 s","The reciprocal rule is only a guideline","La regola del reciproco è solo una linea guida","Stabilization, technique and subject motion can require faster or allow slower shutter speeds.","Stabilizzazione, tecnica e movimento del soggetto possono richiedere tempi diversi."],
  ["long-exposure-calculator","Calculate exposure time with an ND filter","Calcola il tempo di esposizione con un filtro ND","base shutter × 2^stops","10 stops multiply exposure time by 1024","Each ND stop doubles required exposure time","Ogni stop ND raddoppia il tempo necessario","This exponential relationship makes strong ND filters produce very long exposures.","La relazione esponenziale fa sì che filtri ND forti producano esposizioni molto lunghe."],
  ["nd-filter-calculator","Calculate ND filter strength","Calcola la forza di un filtro ND","log₂(target shutter ÷ base shutter)","0.008 s → 8 s is about 10 stops","ND strength is logarithmic","La forza ND è logaritmica","Doubling exposure time corresponds to one additional stop.","Raddoppiare il tempo di esposizione corrisponde a uno stop aggiuntivo."],
  ["field-of-view-calculator","Calculate angular field of view","Calcola l’angolo di campo","2 × atan(sensor ÷ (2 × focal))","Larger sensors or shorter focal lengths give wider FOV","Sensori più grandi o focali più corte danno un campo più ampio","Field of view depends on the sensor dimension being measured","L’angolo di campo dipende dalla dimensione del sensore considerata","Horizontal, vertical and diagonal FOV use different sensor dimensions.","Campo orizzontale, verticale e diagonale usano dimensioni diverse del sensore."],
  ["image-resolution-calculator","Calculate pixels and megapixels","Calcola pixel e megapixel","width × height","3840 × 2160 = 8,294,400 pixels","Resolution is two-dimensional","La risoluzione è bidimensionale","Doubling both width and height quadruples total pixel count.","Raddoppiare larghezza e altezza quadruplica il numero totale di pixel."],
  ["print-resolution-checker","Check effective print resolution","Controlla la risoluzione effettiva di stampa","pixels ÷ print inches","6000 px over 20 in = 300 DPI","Horizontal and vertical DPI can differ","DPI orizzontali e verticali possono differire","A mismatch can indicate that image and print aspect ratios do not perfectly match.","Una differenza può indicare che i rapporti d’aspetto di immagine e stampa non coincidono."],
  ["aspect-ratio-calculator","Reduce dimensions to an aspect ratio","Riduci le dimensioni a un rapporto d’aspetto","width:GCD : height:GCD","1920 × 1080 → 16:9","Aspect ratio ignores absolute size","Il rapporto d’aspetto ignora la dimensione assoluta","1920×1080 and 1280×720 share the same 16:9 shape.","1920×1080 e 1280×720 hanno entrambi forma 16:9."],
  ["aspect-ratio-converter","Resize while preserving aspect ratio","Ridimensiona mantenendo il rapporto d’aspetto","new height = new width × old height ÷ old width","1920×1080 → width 1280 gives height 720","Changing one dimension determines the other","Cambiare una dimensione determina l’altra","Preserving the ratio avoids stretching the image.","Mantenere il rapporto evita di deformare l’immagine."],
  ["video-bitrate-calculator","Estimate average video bitrate","Stima il bitrate medio di un video","file size(MB) × 8 ÷ duration(s)","1000 MB over 600 s ≈ 13.33 Mbps","Bitrate is an average data rate","Il bitrate è una velocità media dei dati","Variable-bitrate video can use substantially different rates from moment to moment.","Un video a bitrate variabile può usare velocità molto diverse nei singoli momenti."],
  ["video-file-size-calculator","Estimate video file size","Stima la dimensione di un file video","bitrate × duration ÷ 8","8 Mbps for 600 s ≈ 600 MB","Duration and bitrate affect size linearly","Durata e bitrate influenzano linearmente il peso","Doubling either average bitrate or duration approximately doubles file size.","Raddoppiare bitrate medio o durata raddoppia circa la dimensione del file."],
  ["audio-file-size-calculator","Estimate audio file size","Stima la dimensione di un file audio","kbps × duration ÷ 8 ÷ 1000","320 kbps for 300 s ≈ 12 MB","Bitrate represents data per second","Il bitrate rappresenta dati per secondo","Higher bitrate requires proportionally more storage at the same duration.","Un bitrate maggiore richiede proporzionalmente più spazio a parità di durata."],
  ["timelapse-storage-calculator","Estimate timelapse storage","Stima lo spazio necessario per un timelapse","frames × average image size","3000 × 25 MB = 75 GB","RAW timelapses can grow quickly","I timelapse RAW possono occupare molto spazio","Thousands of individual source frames often require much more storage than the final rendered video.","Migliaia di fotogrammi sorgente possono richiedere molto più spazio del video finale."],
  ["timelapse-interval-calculator","Calculate timelapse capture interval","Calcola l’intervallo di scatto di un timelapse","real duration ÷ (video duration × fps)","20 s at 30 fps requires 600 frames","Final duration and FPS determine frame count","Durata finale e FPS determinano il numero di fotogrammi","The capture interval then spreads those frames across the real-world event duration.","L’intervallo distribuisce quei fotogrammi lungo la durata reale dell’evento."],
  ["storage-capacity-calculator","Estimate how many files fit in storage","Stima quanti file entrano in uno spazio di archiviazione","storage(GB) × 1000 ÷ file size(MB)","128 GB with 25 MB files ≈ 5120 files","This is an approximate decimal-storage estimate","È una stima basata su unità decimali","Actual usable capacity can be lower because formatted devices and file systems consume space.","La capacità realmente utilizzabile può essere inferiore a causa della formattazione e del file system."],
  ["raw-storage-calculator","Estimate storage for RAW photographs","Stima lo spazio per fotografie RAW","photos × average RAW size ÷ 1000","1000 × 45 MB ≈ 45 GB","RAW file size varies by camera and scene","La dimensione RAW varia con fotocamera e scena","Resolution, bit depth, compression and image content can all change real RAW size.","Risoluzione, profondità colore, compressione e contenuto possono cambiare la dimensione reale dei RAW."]
];

const italianExampleFallback: Record<string, string> = {
  "storage-capacity-calculator": "128 GB con file da 25 MB ≈ 5120 file",
  "raw-storage-calculator": "1000 × 45 MB ≈ 45 GB"
};

const defs: CalculatorEditorialDefinition[] = rows.map((row) => {
  const values = row as string[];

  const id = values[0] ?? "";
  const enTitle = values[1] ?? id;
  const itTitle = values[2] ?? enTitle;
  const formula = values[3] ?? "";
  const enExample = values[4] ?? formula;

  /*
    Formato normale:
    id, enTitle, itTitle, formula,
    enExample, itExample,
    enInsight, itInsight,
    enBody, itBody

    Alcune righe compatte hanno invece 9 elementi
    e non contengono itExample.
  */
  const compact = values.length === 9;

  const itExample = compact
    ? (italianExampleFallback[id] ?? enExample)
    : (values[5] ?? enExample);

  const enInsight = values[compact ? 5 : 6] ?? enTitle;
  const itInsight = values[compact ? 6 : 7] ?? itTitle;

  const enBody =
    values[compact ? 7 : 8] ??
    "The calculation follows the formula shown above.";

  const itBody =
    values[compact ? 8 : 9] ??
    "Il calcolo segue la formula mostrata sopra.";

  return {
    id,
    title: bi(enTitle, itTitle),
    intro: bi(enExample, itExample),
    formula,
    example: bi(enExample, itExample),
    insightTitle: bi(enInsight, itInsight),
    insightBody: bi(enBody, itBody)
  };
});

export const calculatorPhotoEditorialBatch:
  Partial<Record<string, Partial<Record<LocaleId, ToolEditorial>>>> =
  Object.fromEntries(defs.map(def => [def.id, calculatorEditorial(def)]));
