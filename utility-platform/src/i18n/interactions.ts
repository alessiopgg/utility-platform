import type { LocaleId } from '../core/types.ts';

type InteractionCopy = {
  close: string;
  noSearchResults: string;
  dropFiles: string;
  browseFiles: string;
  remove: string;
  moveUp: string;
  moveDown: string;
  processing: string;
  download: string;
  clear: string;
  unsupportedFileType: string;
};

const copy: Record<LocaleId, InteractionCopy> = {
  en:{close:'Close',noSearchResults:'No matching tools found.',dropFiles:'Drop files here or browse your device',browseFiles:'Browse files',remove:'Remove',moveUp:'Move up',moveDown:'Move down',processing:'Processing…',download:'Download',clear:'Clear',unsupportedFileType:'This file type is not supported.'},
  es:{close:'Cerrar',noSearchResults:'No se encontraron herramientas.',dropFiles:'Suelta archivos aquí o búscalos en tu dispositivo',browseFiles:'Elegir archivos',remove:'Eliminar',moveUp:'Subir',moveDown:'Bajar',processing:'Procesando…',download:'Descargar',clear:'Limpiar',unsupportedFileType:'Este tipo de archivo no es compatible.'},
  'pt-BR':{close:'Fechar',noSearchResults:'Nenhuma ferramenta encontrada.',dropFiles:'Solte arquivos aqui ou procure no dispositivo',browseFiles:'Selecionar arquivos',remove:'Remover',moveUp:'Mover para cima',moveDown:'Mover para baixo',processing:'Processando…',download:'Baixar',clear:'Limpar',unsupportedFileType:'Este tipo de arquivo não é compatível.'},
  de:{close:'Schließen',noSearchResults:'Keine passenden Tools gefunden.',dropFiles:'Dateien hier ablegen oder auf dem Gerät auswählen',browseFiles:'Dateien auswählen',remove:'Entfernen',moveUp:'Nach oben',moveDown:'Nach unten',processing:'Wird verarbeitet…',download:'Herunterladen',clear:'Leeren',unsupportedFileType:'Dieser Dateityp wird nicht unterstützt.'},
  fr:{close:'Fermer',noSearchResults:'Aucun outil correspondant.',dropFiles:'Déposez les fichiers ici ou parcourez votre appareil',browseFiles:'Choisir des fichiers',remove:'Supprimer',moveUp:'Monter',moveDown:'Descendre',processing:'Traitement…',download:'Télécharger',clear:'Effacer',unsupportedFileType:'Ce type de fichier n’est pas pris en charge.'},
  it:{close:'Chiudi',noSearchResults:'Nessuno strumento corrispondente trovato.',dropFiles:'Trascina qui i file oppure sceglili dal dispositivo',browseFiles:'Scegli file',remove:'Rimuovi',moveUp:'Sposta su',moveDown:'Sposta giù',processing:'Elaborazione…',download:'Scarica',clear:'Pulisci',unsupportedFileType:'Questo tipo di file non è supportato.'},
  ja:{close:'閉じる',noSearchResults:'一致するツールが見つかりません。',dropFiles:'ここにファイルをドロップするか端末から選択',browseFiles:'ファイルを選択',remove:'削除',moveUp:'上へ移動',moveDown:'下へ移動',processing:'処理中…',download:'ダウンロード',clear:'クリア',unsupportedFileType:'このファイル形式には対応していません。'},
  ar:{close:'إغلاق',noSearchResults:'لم يتم العثور على أدوات مطابقة.',dropFiles:'أفلت الملفات هنا أو اخترها من جهازك',browseFiles:'اختيار الملفات',remove:'إزالة',moveUp:'تحريك لأعلى',moveDown:'تحريك لأسفل',processing:'جارٍ المعالجة…',download:'تنزيل',clear:'مسح',unsupportedFileType:'نوع الملف هذا غير مدعوم.'},
  id:{close:'Tutup',noSearchResults:'Tidak ada alat yang cocok.',dropFiles:'Jatuhkan file di sini atau pilih dari perangkat',browseFiles:'Pilih file',remove:'Hapus',moveUp:'Pindah ke atas',moveDown:'Pindah ke bawah',processing:'Memproses…',download:'Unduh',clear:'Bersihkan',unsupportedFileType:'Jenis file ini tidak didukung.'},
  tr:{close:'Kapat',noSearchResults:'Eşleşen araç bulunamadı.',dropFiles:'Dosyaları buraya bırakın veya cihazınızdan seçin',browseFiles:'Dosya seç',remove:'Kaldır',moveUp:'Yukarı taşı',moveDown:'Aşağı taşı',processing:'İşleniyor…',download:'İndir',clear:'Temizle',unsupportedFileType:'Bu dosya türü desteklenmiyor.'},
  pl:{close:'Zamknij',noSearchResults:'Nie znaleziono pasujących narzędzi.',dropFiles:'Upuść pliki tutaj lub wybierz je z urządzenia',browseFiles:'Wybierz pliki',remove:'Usuń',moveUp:'Przenieś w górę',moveDown:'Przenieś w dół',processing:'Przetwarzanie…',download:'Pobierz',clear:'Wyczyść',unsupportedFileType:'Ten typ pliku nie jest obsługiwany.'},
  ko:{close:'닫기',noSearchResults:'일치하는 도구가 없습니다.',dropFiles:'여기에 파일을 놓거나 기기에서 선택하세요',browseFiles:'파일 선택',remove:'제거',moveUp:'위로 이동',moveDown:'아래로 이동',processing:'처리 중…',download:'다운로드',clear:'지우기',unsupportedFileType:'지원되지 않는 파일 형식입니다.'},
  nl:{close:'Sluiten',noSearchResults:'Geen overeenkomende tools gevonden.',dropFiles:'Sleep bestanden hierheen of kies ze op je apparaat',browseFiles:'Bestanden kiezen',remove:'Verwijderen',moveUp:'Omhoog',moveDown:'Omlaag',processing:'Bezig met verwerken…',download:'Downloaden',clear:'Wissen',unsupportedFileType:'Dit bestandstype wordt niet ondersteund.'},
  vi:{close:'Đóng',noSearchResults:'Không tìm thấy công cụ phù hợp.',dropFiles:'Thả tệp vào đây hoặc chọn từ thiết bị',browseFiles:'Chọn tệp',remove:'Xóa',moveUp:'Di chuyển lên',moveDown:'Di chuyển xuống',processing:'Đang xử lý…',download:'Tải xuống',clear:'Xóa',unsupportedFileType:'Loại tệp này không được hỗ trợ.'},
};

export function interactions(locale: LocaleId): InteractionCopy { return copy[locale]; }
