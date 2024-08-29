// MARK: - Desktop Groups

const appearanceDesktopGroups_All = [
    {
     type: "select",
     name: {
         "ar": "الخط",
         "ca": "Font",
         "zh-CN": "字体",
         "zh-TW": "字體",
         "hr": "Font",
         "cs": "Písmo",
         "da": "Skrifttype",
         "nl": "Lettertype",
         "en": "Font",
         "fi": "Fontti",
         "fr": "Police de caractère",
         "de": "Schriftart",
         "el": "Γραμματοσειρά",
         "he": "גוֹפָן",
         "hi": "फ़ॉन्ट",
         "hu": "Betűtípus",
         "id": "Huruf",
         "it": "Font",
         "ja": "フォント",
         "ko": "폰트",
         "ms": "Fon",
         "no": "Font",
         "pl": "Czcionka",
         "pt": "Fonte",
         "ro": "Font",
         "ru": "Шрифт",
         "sk": "Písmo",
         "es": "Fuente",
         "sv": "Font",
         "th": "แบบอักษร",
         "tr": "Yazı tipi",
         "uk": "Шрифт",
         "vi": "Nét chữ"
       },
     id: "untrap_appearance_font",
     defaultValue: "default",
     selects: [
         {
             name: "Default",
             id: "default"
         },
         {
             name: "Alegreya",
             id: "Alegreya"
         },
         {
             name: "Alegreya Sans",
             id: "Alegreya Sans"
         },
         {
             name: "Comfortaa",
             id: "Comfortaa"
         },
         {
             name: "Cormorant",
             id: "Cormorant"
         },
         {
             name: "Eczar",
             id: "Eczar"
         },
         {
             name: "Fira Sans",
             id: "Fira Sans"
         },
         {
             name: "Fraunces",
             id: "Fraunces"
         },
         {
             name: "IBM Plex Sans",
             id: "IBM Plex Sans"
         },
         {
             name: "Inconsolata",
             id: "Inconsolata"
         },
         {
             name: "Inknut Antiqua",
             id: "Inknut Antiqua"
         },
         {
             name: "Inter",
             id: "Inter"
         },
         {
             name: "Libre Baskerville",
             id: "Libre Baskerville"
         },
         {
             name: "Manrope",
             id: "Manrope"
         },
         {
             name: "Merriweather",
             id: "Merriweather"
         },
         {
             name: "Montserrat",
             id: "Montserrat"
         },
         {
             name: "Neuton",
             id: "Neuton"
         },
         {
             name: "Open Sans",
             id: "Open Sans"
         },
         {
             name: "Oswald",
             id: "Oswald"
         },
         {
             name: "PT Serif",
             id: "PT Serif"
         },
         {
             name: "Raleway",
             id: "Raleway"
         },
         {
             name: "Roboto Condensed",
             id: "Roboto Condensed"
         },
         {
             name: "Roboto Mono",
             id: "Roboto Mono"
         },
         {
             name: "Roboto Slab",
             id: "Roboto Slab"
         },
         {
             name: "Rubik",
             id: "Rubik"
         },
         {
             name: "Source Sans Pro",
             id: "Source Sans Pro"
         },
         {
             name: "Source Serif Pro",
             id: "Source Serif Pro"
         },
         {
             name: "Spectral",
             id: "Spectral"
         }
     ]
    },
    {
     type: "color",
     name: {
         "ar": "اللون الأساسي",
         "ca": "Color base",
         "zh-CN": "基本颜色",
         "zh-TW": "基本顏色",
         "hr": "Osnovna boja",
         "cs": "Základní barva",
         "da": "Grundfarve",
         "nl": "Basis kleur",
         "en": "Base Color",
         "fi": "Perusväri",
         "fr": "Couleur de base",
         "de": "Grundfarbe",
         "el": "Χρώμα βάσης",
         "he": "צבע בסיסי",
         "hi": "आधारभूत रंग",
         "hu": "Alapszín",
         "id": "Warna Dasar",
         "it": "Colore di base",
         "ja": "ベースカラー",
         "ko": "기본 색상",
         "ms": "Warna Asas",
         "no": "Grunnfarge",
         "pl": "Kolor podstawowy",
         "pt": "Cor base",
         "ro": "Culoare de bază",
         "ru": "Базовый цвет",
         "sk": "Základná farba",
         "es": "Color de base",
         "sv": "Basfärg",
         "th": "สีฐาน",
         "tr": "Ana renk",
         "uk": "Базовий колір",
         "vi": "Màu cơ bản"
       },
     id: "untrap_appearance_color",
     defaultValue: "default"
    },
    {
     type: "color",
     name: {
         "ar": "لون الخلفية الأساسي",
         "ca": "Color de fons primari",
         "zh-CN": "主要背景颜色",
         "zh-TW": "主要背景顏色",
         "hr": "Primarna boja pozadine",
         "cs": "Primární barva pozadí",
         "da": "Primær baggrundsfarve",
         "nl": "Primaire achtergrondkleur",
         "en": "Primary Background Color",
         "fi": "Ensisijainen taustaväri",
         "fr": "Couleur d'arrière-plan principale",
         "de": "Primäre Hintergrundfarbe",
         "el": "Πρωτεύον χρώμα φόντου",
         "he": "צבע רקע ראשי",
         "hi": "प्राथमिक पृष्ठभूमि रंग",
         "hu": "Elsődleges háttérszín",
         "id": "Warna Latar Belakang Utama",
         "it": "Colore di sfondo primario",
         "ja": "主な背景色",
         "ko": "기본 배경색",
         "ms": "Warna Latar Belakang Utama",
         "no": "Primær bakgrunnsfarge",
         "pl": "Podstawowy kolor tła",
         "pt": "Cor de fundo primária",
         "ro": "Culoare primară de fundal",
         "ru": "Основной цвет фона",
         "sk": "Primárna farba pozadia",
         "es": "Color de fondo primario",
         "sv": "Primär bakgrundsfärg",
         "th": "สีพื้นหลังหลัก",
         "tr": "Birincil Arka Plan Rengi",
         "uk": "Основний колір фону",
         "vi": "Màu nền chính"
       },
     id: "untrap_appearance_primary_bg_color",
     defaultValue: "default"
    }
];

// MARK: - Mobile Groups

const appearanceMobileGroups_All = [
    {
     type: "select",
     name: {
         "ar": "الخط",
         "ca": "Font",
         "zh-CN": "字体",
         "zh-TW": "字體",
         "hr": "Font",
         "cs": "Písmo",
         "da": "Skrifttype",
         "nl": "Lettertype",
         "en": "Font",
         "fi": "Fontti",
         "fr": "Police de caractère",
         "de": "Schriftart",
         "el": "Γραμματοσειρά",
         "he": "גוֹפָן",
         "hi": "फ़ॉन्ट",
         "hu": "Betűtípus",
         "id": "Huruf",
         "it": "Font",
         "ja": "フォント",
         "ko": "폰트",
         "ms": "Fon",
         "no": "Font",
         "pl": "Czcionka",
         "pt": "Fonte",
         "ro": "Font",
         "ru": "Шрифт",
         "sk": "Písmo",
         "es": "Fuente",
         "sv": "Font",
         "th": "แบบอักษร",
         "tr": "Yazı tipi",
         "uk": "Шрифт",
         "vi": "Nét chữ"
       },
     id: "untrap_appearance_font",
     defaultValue: "default",
     selects: [
         {
             name: "Default",
             id: "default"
         },
         {
             name: "Alegreya",
             id: "Alegreya"
         },
         {
             name: "Alegreya Sans",
             id: "Alegreya Sans"
         },
         {
             name: "Comfortaa",
             id: "Comfortaa"
         },
         {
             name: "Cormorant",
             id: "Cormorant"
         },
         {
             name: "Eczar",
             id: "Eczar"
         },
         {
             name: "Fira Sans",
             id: "Fira Sans"
         },
         {
             name: "Fraunces",
             id: "Fraunces"
         },
         {
             name: "IBM Plex Sans",
             id: "IBM Plex Sans"
         },
         {
             name: "Inconsolata",
             id: "Inconsolata"
         },
         {
             name: "Inknut Antiqua",
             id: "Inknut Antiqua"
         },
         {
             name: "Inter",
             id: "Inter"
         },
         {
             name: "Libre Baskerville",
             id: "Libre Baskerville"
         },
         {
             name: "Manrope",
             id: "Manrope"
         },
         {
             name: "Merriweather",
             id: "Merriweather"
         },
         {
             name: "Montserrat",
             id: "Montserrat"
         },
         {
             name: "Neuton",
             id: "Neuton"
         },
         {
             name: "Open Sans",
             id: "Open Sans"
         },
         {
             name: "Oswald",
             id: "Oswald"
         },
         {
             name: "PT Serif",
             id: "PT Serif"
         },
         {
             name: "Raleway",
             id: "Raleway"
         },
         {
             name: "Roboto Condensed",
             id: "Roboto Condensed"
         },
         {
             name: "Roboto Mono",
             id: "Roboto Mono"
         },
         {
             name: "Roboto Slab",
             id: "Roboto Slab"
         },
         {
             name: "Rubik",
             id: "Rubik"
         },
         {
             name: "Source Sans Pro",
             id: "Source Sans Pro"
         },
         {
             name: "Source Serif Pro",
             id: "Source Serif Pro"
         },
         {
             name: "Spectral",
             id: "Spectral"
         }
     ]
    },
    {
     type: "color",
     name: {
         "ar": "اللون الأساسي",
         "ca": "Color base",
         "zh-CN": "基本颜色",
         "zh-TW": "基本顏色",
         "hr": "Osnovna boja",
         "cs": "Základní barva",
         "da": "Grundfarve",
         "nl": "Basis kleur",
         "en": "Base Color",
         "fi": "Perusväri",
         "fr": "Couleur de base",
         "de": "Grundfarbe",
         "el": "Χρώμα βάσης",
         "he": "צבע בסיסי",
         "hi": "आधारभूत रंग",
         "hu": "Alapszín",
         "id": "Warna Dasar",
         "it": "Colore di base",
         "ja": "ベースカラー",
         "ko": "기본 색상",
         "ms": "Warna Asas",
         "no": "Grunnfarge",
         "pl": "Kolor podstawowy",
         "pt": "Cor base",
         "ro": "Culoare de bază",
         "ru": "Базовый цвет",
         "sk": "Základná farba",
         "es": "Color de base",
         "sv": "Basfärg",
         "th": "สีฐาน",
         "tr": "Ana renk",
         "uk": "Базовий колір",
         "vi": "Màu cơ bản"
       },
     id: "untrap_appearance_color",
     defaultValue: "default"
    },
    {
     type: "color",
     name: {
         "ar": "لون الخلفية الأساسي",
         "ca": "Color de fons primari",
         "zh-CN": "主要背景颜色",
         "zh-TW": "主要背景顏色",
         "hr": "Primarna boja pozadine",
         "cs": "Primární barva pozadí",
         "da": "Primær baggrundsfarve",
         "nl": "Primaire achtergrondkleur",
         "en": "Primary Background Color",
         "fi": "Ensisijainen taustaväri",
         "fr": "Couleur d'arrière-plan principale",
         "de": "Primäre Hintergrundfarbe",
         "el": "Πρωτεύον χρώμα φόντου",
         "he": "צבע רקע ראשי",
         "hi": "प्राथमिक पृष्ठभूमि रंग",
         "hu": "Elsődleges háttérszín",
         "id": "Warna Latar Belakang Utama",
         "it": "Colore di sfondo primario",
         "ja": "主な背景色",
         "ko": "기본 배경색",
         "ms": "Warna Latar Belakang Utama",
         "no": "Primær bakgrunnsfarge",
         "pl": "Podstawowy kolor tła",
         "pt": "Cor de fundo primária",
         "ro": "Culoare primară de fundal",
         "ru": "Основной цвет фона",
         "sk": "Primárna farba pozadia",
         "es": "Color de fondo primario",
         "sv": "Primär bakgrundsfärg",
         "th": "สีพื้นหลังหลัก",
         "tr": "Birincil Arka Plan Rengi",
         "uk": "Основний колір фону",
         "vi": "Màu nền chính"
       },
     id: "untrap_appearance_primary_bg_color",
     defaultValue: "default"
    }
];

// MARK: - Builder

// Desktop

const appearanceDesktopGroups = [
     {
        groupName: {
            "ar": "إعادة توجيه",
            "ca": "Redirigeix",
            "zh-CN": "重定向",
            "zh-TW": "重定向",
            "hr": "Preusmjeri",
            "cs": "Přesměrování",
            "da": "Omdirigere",
            "nl": "Omleiden",
            "en": "Redirect",
            "fi": "Uudelleenohjaus",
            "fr": "Réorienter",
            "de": "Umleiten",
            "el": "Διευθύνω πάλιν",
            "he": "הפניה מחדש",
            "hi": "पुनर्निर्देशन",
            "hu": "Átirányítás",
            "id": "Pengalihan",
            "it": "Reindirizzare",
            "ja": "リダイレクト",
            "ko": "리디렉션",
            "ms": "Ubah hala",
            "no": "Omdirigere",
            "pl": "Przeadresować",
            "pt": "Redirecionar",
            "ro": "Redirecţiona",
            "ru": "Перенаправление",
            "sk": "Presmerovať",
            "es": "Redirigir",
            "sv": "Dirigera om",
            "th": "เปลี่ยนเส้นทาง",
            "tr": "Yönlendir",
            "uk": "Перенаправлення",
            "vi": "Chuyển hướng"
          },
        groupId: "all",
        parentCategoryId: "appearance",
        options: appearanceDesktopGroups_All
     }
];

// Mobile

const appearanceMobileGroups = [
    {
       groupName: {
           "ar": "إعادة توجيه",
           "ca": "Redirigeix",
           "zh-CN": "重定向",
           "zh-TW": "重定向",
           "hr": "Preusmjeri",
           "cs": "Přesměrování",
           "da": "Omdirigere",
           "nl": "Omleiden",
           "en": "Redirect",
           "fi": "Uudelleenohjaus",
           "fr": "Réorienter",
           "de": "Umleiten",
           "el": "Διευθύνω πάλιν",
           "he": "הפניה מחדש",
           "hi": "पुनर्निर्देशन",
           "hu": "Átirányítás",
           "id": "Pengalihan",
           "it": "Reindirizzare",
           "ja": "リダイレクト",
           "ko": "리디렉션",
           "ms": "Ubah hala",
           "no": "Omdirigere",
           "pl": "Przeadresować",
           "pt": "Redirecionar",
           "ro": "Redirecţiona",
           "ru": "Перенаправление",
           "sk": "Presmerovať",
           "es": "Redirigir",
           "sv": "Dirigera om",
           "th": "เปลี่ยนเส้นทาง",
           "tr": "Yönlendir",
           "uk": "Перенаправлення",
           "vi": "Chuyển hướng"
         },
       groupId: "all",
       parentCategoryId: "appearance",
       options: appearanceMobileGroups_All
    }
];
