import type { LocaleId } from "../core/types.ts";
import type { ToolEditorial } from "./tool-editorial.ts";
import {
  bi,
  simpleEditorial,
  type SimpleEditorialDefinition
} from "./editorial-factories.ts";

const defs: SimpleEditorialDefinition[] = [];

const add = (
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
  itBody: string,
  inputEn = "Media file",
  inputIt = "File multimediale",
  outputEn = "Processed media",
  outputIt = "File elaborato"
) => defs.push({
  id,
  family: "converter",
  title: bi(enTitle, itTitle),
  intro: bi(enIntro, itIntro),
  input: bi(inputEn, inputIt),
  process: bi(enProcess, itProcess),
  output: bi(outputEn, outputIt),
  example: bi(enExample, itExample),
  insightTitle: bi(enInsight, itInsight),
  insightBody: bi(enBody, itBody)
});

const audioToMp3 = (
  id: string,
  source: string
) => add(
  id,
  `Convert ${source} audio to MP3`,
  `Converti audio ${source} in MP3`,
  `Decode ${source} audio locally and re-encode it with the MP3 encoder.`,
  `Decodifica localmente l'audio ${source} e lo ricodifica con l'encoder MP3.`,
  "FFmpeg decode → libmp3lame",
  "Decodifica FFmpeg → libmp3lame",
  "The generated file uses MP3 audio encoding.",
  "Il file generato utilizza codifica audio MP3.",
  "The audio is transcoded, not simply renamed",
  "L'audio viene transcodificato, non semplicemente rinominato",
  "Changing the extension alone would not convert the codec; UtilityLake actually decodes and re-encodes the media.",
  "Cambiare soltanto l'estensione non converte il codec: UtilityLake decodifica e ricodifica realmente il contenuto."
);

add(
  "mp3-to-wav",
  "Convert MP3 to WAV",
  "Converti MP3 in WAV",
  "Decode MP3 and export uncompressed 16-bit PCM WAV audio.",
  "Decodifica MP3 ed esporta audio WAV PCM non compresso a 16 bit.",
  "MP3 → PCM s16le WAV",
  "MP3 → WAV PCM s16le",
  "WAV output is generally much larger than the MP3 source.",
  "L'output WAV è generalmente molto più grande del file MP3.",
  "PCM removes lossy compression but cannot restore discarded detail",
  "PCM elimina la compressione con perdita ma non recupera dettagli già persi",
  "Converting an MP3 to WAV avoids another compressed storage format, but information previously removed by MP3 compression does not reappear.",
  "Convertire un MP3 in WAV evita un ulteriore formato compresso, ma le informazioni già eliminate dalla compressione MP3 non ricompaiono."
);

add(
  "wav-to-mp3",
  "Convert WAV to MP3",
  "Converti WAV in MP3",
  "Encode WAV audio as MP3 using FFmpeg and libmp3lame.",
  "Codifica audio WAV in MP3 usando FFmpeg e libmp3lame.",
  "WAV decode → MP3 encode",
  "Decodifica WAV → codifica MP3",
  "The MP3 encoder uses quality-based encoding.",
  "L'encoder MP3 utilizza una modalità basata sulla qualità.",
  "MP3 is normally much smaller than PCM WAV",
  "MP3 è normalmente molto più piccolo del WAV PCM",
  "The size reduction comes from lossy audio compression rather than simply changing the container.",
  "La riduzione di dimensione deriva dalla compressione audio con perdita e non dal semplice cambio di contenitore."
);

audioToMp3("m4a-to-mp3", "M4A");
audioToMp3("ogg-to-mp3", "OGG");
audioToMp3("aac-to-mp3", "AAC");

for (const id of ["audio-trimmer", "audio-cutter"]) {
  add(
    id,
    id === "audio-trimmer" ? "Trim an audio file" : "Cut a section from audio",
    id === "audio-trimmer" ? "Ritaglia un file audio" : "Taglia una sezione audio",
    "Select a start time and duration, then export that time range as MP3.",
    "Seleziona tempo iniziale e durata, quindi esporta quell'intervallo come MP3.",
    "Seek → select duration → MP3 encode",
    "Posiziona → seleziona durata → codifica MP3",
    "Start 30 s with duration 10 s exports roughly seconds 30–40.",
    "Inizio 30 s con durata 10 s esporta circa i secondi 30–40.",
    "Duration is measured from the selected start point",
    "La durata viene misurata dal punto iniziale scelto",
    "The second field is a duration, not an absolute ending timestamp.",
    "Il secondo campo rappresenta una durata e non un timestamp finale assoluto."
  );
}

add(
  "audio-joiner",
  "Join multiple audio files",
  "Unisci più file audio",
  "Combine at least two audio files into one WAV output using browser-side FFmpeg.",
  "Combina almeno due file audio in un unico WAV usando FFmpeg nel browser.",
  "Multiple inputs → concatenate → PCM WAV",
  "Più input → concatena → WAV PCM",
  "The final file is exported as joined.wav.",
  "Il file finale viene esportato come joined.wav.",
  "The output is normalized into a WAV container",
  "L'output viene prodotto in formato WAV",
  "UtilityLake first attempts FFmpeg concatenation and can fall back to the concat audio filter when required.",
  "UtilityLake prova prima la concatenazione FFmpeg e può usare il filtro concat come fallback quando necessario.",
  "Audio files","File audio","Joined WAV","WAV unito"
);

add(
  "change-audio-volume",
  "Change audio volume",
  "Modifica il volume audio",
  "Apply an FFmpeg volume multiplier and export the result as MP3.",
  "Applica un moltiplicatore di volume FFmpeg ed esporta il risultato come MP3.",
  "volume = samples × multiplier",
  "volume = campioni × moltiplicatore",
  "A multiplier of 0 mutes the audio; 1 keeps nominal volume.",
  "Un moltiplicatore 0 silenzia l'audio; 1 mantiene il volume nominale.",
  "Increasing digital gain can cause clipping",
  "Aumentare il guadagno digitale può causare clipping",
  "A multiplier above one can push peaks beyond the available signal range if the source is already loud.",
  "Un moltiplicatore superiore a uno può spingere i picchi oltre l'intervallo disponibile se la sorgente è già molto forte."
);

add(
  "stereo-to-mono",
  "Convert stereo audio to mono",
  "Converti audio stereo in mono",
  "Mix the input down to one audio channel and export MP3.",
  "Riduce l'input a un singolo canale audio ed esporta MP3.",
  "FFmpeg -ac 1",
  "FFmpeg -ac 1",
  "The output contains one channel instead of two.",
  "L'output contiene un canale invece di due.",
  "Mono removes channel separation",
  "Il mono elimina la separazione tra canali",
  "Left and right information is combined rather than preserved as independent stereo channels.",
  "Le informazioni sinistra e destra vengono combinate invece di essere mantenute come canali stereo indipendenti."
);

add(
  "extract-audio-from-video",
  "Extract audio from a video",
  "Estrai audio da un video",
  "Ignore the video stream and encode the audio track as MP3.",
  "Ignora il flusso video e codifica la traccia audio in MP3.",
  "Video input → remove video → MP3",
  "Video input → rimuove video → MP3",
  "Only the audio content is written to the downloaded file.",
  "Nel file scaricato viene scritto soltanto il contenuto audio.",
  "The original video frames are not included",
  "I fotogrammi video originali non vengono inclusi",
  "FFmpeg is instructed with -vn so the video stream is discarded.",
  "FFmpeg utilizza -vn, quindi il flusso video viene escluso."
);

add(
  "mp4-to-mp3",
  "Convert MP4 video to MP3 audio",
  "Converti video MP4 in audio MP3",
  "Extract the audio stream from an MP4 source and encode it as MP3.",
  "Estrae il flusso audio da un MP4 e lo codifica come MP3.",
  "MP4 → audio decode → MP3",
  "MP4 → decodifica audio → MP3",
  "The visual part of the MP4 is omitted.",
  "La parte visiva dell'MP4 viene esclusa.",
  "MP4 is a container, not an audio codec",
  "MP4 è un contenitore, non un codec audio",
  "The source audio may use a codec such as AAC and therefore has to be encoded into MP3.",
  "L'audio sorgente può usare un codec come AAC e deve quindi essere codificato in MP3."
);

add(
  "video-trimmer",
  "Trim a video by time",
  "Ritaglia un video nel tempo",
  "Select a starting point and duration, then encode the selected interval as MP4.",
  "Seleziona punto iniziale e durata, quindi codifica l'intervallo scelto come MP4.",
  "Seek → duration → H.264 + AAC",
  "Posiziona → durata → H.264 + AAC",
  "The MP4 is written with fast-start metadata for web playback.",
  "L'MP4 viene scritto con fast-start per facilitare la riproduzione web.",
  "The selected section is re-encoded",
  "La sezione selezionata viene ricodificata",
  "The current implementation uses H.264 video and AAC audio rather than losslessly copying the selected stream.",
  "L'implementazione usa video H.264 e audio AAC invece di copiare senza ricodifica il flusso selezionato."
);

add(
  "video-cropper",
  "Crop a video to a pixel rectangle",
  "Ritaglia un video a un rettangolo in pixel",
  "Apply FFmpeg's crop filter using width, height and X/Y coordinates.",
  "Applica il filtro crop di FFmpeg usando larghezza, altezza e coordinate X/Y.",
  "crop=width:height:x:y",
  "crop=larghezza:altezza:x:y",
  "The cropped video is encoded as H.264 video with AAC audio.",
  "Il video ritagliato viene codificato H.264 con audio AAC.",
  "Video cropping changes the frame dimensions",
  "Il ritaglio video cambia le dimensioni del frame",
  "Unlike resizing, cropping removes pixels outside the selected rectangle.",
  "A differenza del ridimensionamento, il ritaglio elimina i pixel fuori dal rettangolo selezionato."
);

add(
  "video-rotator",
  "Rotate a video",
  "Ruota un video",
  "Rotate video by 90°, 180° or 270° using FFmpeg video filters.",
  "Ruota il video di 90°, 180° o 270° usando filtri FFmpeg.",
  "transpose / horizontal + vertical flip",
  "transpose / flip orizzontale + verticale",
  "90° and 270° use transpose filters; 180° combines horizontal and vertical flips.",
  "90° e 270° usano filtri transpose; 180° combina flip orizzontale e verticale.",
  "Rotation is implemented as a video transform",
  "La rotazione viene applicata come trasformazione video",
  "The output is encoded as H.264 with AAC audio.",
  "L'output viene codificato H.264 con audio AAC."
);

add(
  "mute-video",
  "Remove audio from a video",
  "Rimuovi l'audio da un video",
  "Copy the video stream while excluding all audio streams.",
  "Copia il flusso video escludendo le tracce audio.",
  "Video stream copy + -an",
  "Copia video + -an",
  "The visual stream is copied rather than intentionally re-encoded.",
  "Il flusso video viene copiato invece di essere intenzionalmente ricodificato.",
  "Muting can be faster than other video transformations",
  "La rimozione dell'audio può essere più rapida di altre trasformazioni",
  "The current FFmpeg command copies the existing video stream and simply removes audio.",
  "Il comando FFmpeg attuale copia il flusso video esistente e rimuove soltanto l'audio."
);

add(
  "gif-to-mp4",
  "Convert animated GIF to MP4",
  "Converti GIF animata in MP4",
  "Decode the GIF frames and encode an H.264 MP4 with YUV420p pixel format.",
  "Decodifica i frame GIF e codifica un MP4 H.264 con formato pixel YUV420p.",
  "GIF frames → even dimensions → H.264",
  "Frame GIF → dimensioni pari → H.264",
  "Odd source dimensions are adjusted to even values for video encoding.",
  "Le dimensioni dispari vengono adattate a valori pari per la codifica video.",
  "MP4 can be much more efficient for photographic animation",
  "MP4 può essere molto più efficiente per animazioni fotografiche",
  "GIF and modern video compression work very differently, so equivalent-looking output can have very different file sizes.",
  "GIF e compressione video moderna funzionano in modo molto diverso, quindi output visivamente simili possono avere dimensioni molto differenti."
);

add(
  "mp4-to-gif",
  "Convert MP4 to animated GIF",
  "Converti MP4 in GIF animata",
  "Sample video frames at a selected FPS and resize them to the chosen width before GIF encoding.",
  "Campiona i frame video agli FPS scelti e li ridimensiona alla larghezza selezionata prima della codifica GIF.",
  "MP4 → FPS sampling → Lanczos resize → GIF",
  "MP4 → campionamento FPS → resize Lanczos → GIF",
  "The default is 12 FPS at 640 px width.",
  "Il valore predefinito è 12 FPS con larghezza 640 px.",
  "GIF size grows quickly with resolution and frame rate",
  "La dimensione GIF cresce rapidamente con risoluzione e frame rate",
  "More frames and larger frames both increase the amount of image data stored in the animation.",
  "Più frame e frame più grandi aumentano entrambi la quantità di dati nell'animazione."
);

add(
  "video-speed-changer",
  "Change video playback speed",
  "Modifica la velocità di un video",
  "Adjust video timestamps and audio tempo together for speeds from 0.5× to 2×.",
  "Modifica insieme timestamp video e tempo audio per velocità da 0,5× a 2×.",
  "setpts 1/speed + atempo speed",
  "setpts 1/velocità + atempo velocità",
  "2× halves the approximate duration; 0.5× doubles it.",
  "2× dimezza circa la durata; 0,5× la raddoppia.",
  "Video and audio need different timing filters",
  "Video e audio richiedono filtri temporali diversi",
  "FFmpeg changes video presentation timestamps with setpts while audio uses the atempo filter.",
  "FFmpeg modifica i timestamp video con setpts mentre per l'audio usa il filtro atempo."
);

add(
  "audio-bitrate-converter",
  "Re-encode audio at a selected bitrate",
  "Ricodifica audio a un bitrate selezionato",
  "Encode the source as MP3 using a bitrate from 32 to 320 kbps.",
  "Codifica la sorgente come MP3 usando un bitrate da 32 a 320 kbps.",
  "Audio decode → MP3 at selected kbps",
  "Decodifica audio → MP3 ai kbps scelti",
  "192 kbps means roughly 192 kilobits of encoded audio data per second.",
  "192 kbps significa circa 192 kilobit di dati audio codificati al secondo.",
  "Higher bitrate generally means larger output",
  "Un bitrate maggiore generalmente produce file più grandi",
  "For the same duration, increasing the target bitrate increases the expected amount of encoded data.",
  "A parità di durata, aumentare il bitrate aumenta la quantità attesa di dati codificati."
);

add(
  "video-bitrate-converter",
  "Re-encode video at a selected bitrate",
  "Ricodifica video a un bitrate selezionato",
  "Encode video as H.264 at the chosen bitrate while encoding audio as AAC at 128 kbps.",
  "Codifica video H.264 al bitrate scelto e audio AAC a 128 kbps.",
  "H.264 selected kbps + AAC 128k",
  "H.264 ai kbps scelti + AAC 128k",
  "Video bitrate can be selected from 200 to 20,000 kbps.",
  "Il bitrate video può essere scelto da 200 a 20.000 kbps.",
  "The selected bitrate applies to video, not the complete file",
  "Il bitrate scelto si applica al video, non all'intero file",
  "Audio uses its own fixed 128 kbps target, and container overhead also contributes to final size.",
  "L'audio usa un target separato di 128 kbps e anche il contenitore contribuisce alla dimensione finale."
);

add(
  "srt-to-vtt",
  "Convert SRT subtitles to WebVTT",
  "Converti sottotitoli SRT in WebVTT",
  "Parse SRT cues and rewrite their timestamps and structure as WebVTT.",
  "Analizza le cue SRT e riscrive timestamp e struttura come WebVTT.",
  "Parse SRT → write WEBVTT",
  "Parsing SRT → scrive WEBVTT",
  "SRT uses comma milliseconds; WebVTT output uses dots.",
  "SRT usa la virgola per i millisecondi; WebVTT usa il punto.",
  "The subtitle text itself is preserved",
  "Il testo dei sottotitoli viene preservato",
  "The main conversion concerns cue structure and timestamp formatting.",
  "La conversione riguarda principalmente struttura delle cue e formato dei timestamp.",
  "SRT text","Testo SRT","WebVTT text","Testo WebVTT"
);

add(
  "vtt-to-srt",
  "Convert WebVTT subtitles to SRT",
  "Converti sottotitoli WebVTT in SRT",
  "Remove the WEBVTT header, normalize timestamps and write numbered SRT cues.",
  "Rimuove l'header WEBVTT, normalizza i timestamp e scrive cue SRT numerate.",
  "Clean VTT → parse cues → write SRT",
  "Pulisce VTT → analizza cue → scrive SRT",
  "Cue numbers are regenerated in sequential order.",
  "I numeri delle cue vengono rigenerati in ordine sequenziale.",
  "This converter targets standard timestamp cues",
  "Il convertitore gestisce cue con timestamp standard",
  "Advanced WebVTT styling or metadata outside ordinary cue text is not preserved by this simplified conversion.",
  "Stili WebVTT avanzati o metadati fuori dalle normali cue non vengono preservati da questa conversione semplificata.",
  "WebVTT text","Testo WebVTT","SRT text","Testo SRT"
);

add(
  "subtitle-shift-tool",
  "Shift all subtitle timings",
  "Sposta tutti i tempi dei sottotitoli",
  "Add the selected number of seconds to every SRT cue start and end time.",
  "Aggiunge il numero di secondi scelto all'inizio e alla fine di ogni cue SRT.",
  "timestamp + delta",
  "timestamp + delta",
  "A shift of +1.5 seconds delays every cue by 1500 ms.",
  "Uno spostamento di +1,5 secondi ritarda ogni cue di 1500 ms.",
  "Negative resulting timestamps are clamped when written",
  "I timestamp negativi vengono limitati in scrittura",
  "The timestamp formatter prevents output times from going below zero.",
  "Il formatter dei timestamp impedisce che i tempi finali scendano sotto zero.",
  "SRT + seconds","SRT + secondi","Shifted SRT","SRT spostato"
);

add(
  "subtitle-merger",
  "Merge two SRT subtitle tracks",
  "Unisci due tracce SRT",
  "Parse both subtitle tracks, combine every cue and sort the result by starting time.",
  "Analizza entrambe le tracce, combina tutte le cue e ordina il risultato per tempo iniziale.",
  "Parse A + B → merge → sort",
  "Parsing A + B → unisce → ordina",
  "Cue numbers are regenerated after sorting.",
  "I numeri delle cue vengono rigenerati dopo l'ordinamento.",
  "Overlapping cues are not removed",
  "Le cue sovrapposte non vengono eliminate",
  "The merger orders cues by start time but does not automatically resolve overlapping subtitle intervals.",
  "Il merger ordina le cue per tempo iniziale ma non risolve automaticamente intervalli sovrapposti.",
  "Two SRT tracks","Due tracce SRT","Merged SRT","SRT unito"
);

export const mediaEditorialBatch:
  Partial<Record<string, Partial<Record<LocaleId, ToolEditorial>>>> =
  Object.fromEntries(defs.map(def => [def.id, simpleEditorial(def)]));
