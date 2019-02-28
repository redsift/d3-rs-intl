var version = "0.1.0";

var isoLangsNames = {
    "ab": {
        "name": "Abkhaz",
        "nativeName": "аҧсуа"
    },
    "aa": {
        "name": "Afar",
        "nativeName": "Afaraf"
    },
    "af": {
        "name": "Afrikaans",
        "nativeName": "Afrikaans"
    },
    "ak": {
        "name": "Akan",
        "nativeName": "Akan"
    },
    "sq": {
        "name": "Albanian",
        "nativeName": "Shqip"
    },
    "am": {
        "name": "Amharic",
        "nativeName": "አማርኛ"
    },
    "ar": {
        "name": "Arabic",
        "nativeName": "العربية"
    },
    "an": {
        "name": "Aragonese",
        "nativeName": "Aragonés"
    },
    "hy": {
        "name": "Armenian",
        "nativeName": "Հայերեն"
    },
    "as": {
        "name": "Assamese",
        "nativeName": "অসমীয়া"
    },
    "av": {
        "name": "Avaric",
        "nativeName": "авар мацӀ, магӀарул мацӀ"
    },
    "ae": {
        "name": "Avestan",
        "nativeName": "avesta"
    },
    "ay": {
        "name": "Aymara",
        "nativeName": "aymar aru"
    },
    "az": {
        "name": "Azerbaijani",
        "nativeName": "azərbaycan dili"
    },
    "bm": {
        "name": "Bambara",
        "nativeName": "bamanankan"
    },
    "ba": {
        "name": "Bashkir",
        "nativeName": "башҡорт теле"
    },
    "eu": {
        "name": "Basque",
        "nativeName": "euskara, euskera"
    },
    "be": {
        "name": "Belarusian",
        "nativeName": "Беларуская"
    },
    "bn": {
        "name": "Bengali",
        "nativeName": "বাংলা"
    },
    "bh": {
        "name": "Bihari",
        "nativeName": "भोजपुरी"
    },
    "bi": {
        "name": "Bislama",
        "nativeName": "Bislama"
    },
    "bs": {
        "name": "Bosnian",
        "nativeName": "bosanski jezik"
    },
    "br": {
        "name": "Breton",
        "nativeName": "brezhoneg"
    },
    "bg": {
        "name": "Bulgarian",
        "nativeName": "български език"
    },
    "my": {
        "name": "Burmese",
        "nativeName": "ဗမာစာ"
    },
    "ca": {
        "name": "Catalan; Valencian",
        "nativeName": "Català"
    },
    "ch": {
        "name": "Chamorro",
        "nativeName": "Chamoru"
    },
    "ce": {
        "name": "Chechen",
        "nativeName": "нохчийн мотт"
    },
    "ny": {
        "name": "Chichewa; Chewa; Nyanja",
        "nativeName": "chiCheŵa, chinyanja"
    },
    "zh": {
        "name": "Chinese",
        "nativeName": "中文 (Zhōngwén), 汉语, 漢語"
    },
    "cv": {
        "name": "Chuvash",
        "nativeName": "чӑваш чӗлхи"
    },
    "kw": {
        "name": "Cornish",
        "nativeName": "Kernewek"
    },
    "co": {
        "name": "Corsican",
        "nativeName": "corsu, lingua corsa"
    },
    "cr": {
        "name": "Cree",
        "nativeName": "ᓀᐦᐃᔭᐍᐏᐣ"
    },
    "hr": {
        "name": "Croatian",
        "nativeName": "hrvatski"
    },
    "cs": {
        "name": "Czech",
        "nativeName": "česky, čeština"
    },
    "da": {
        "name": "Danish",
        "nativeName": "dansk"
    },
    "dv": {
        "name": "Divehi; Dhivehi; Maldivian;",
        "nativeName": "ދިވެހި"
    },
    "nl": {
        "name": "Dutch",
        "nativeName": "Nederlands, Vlaams"
    },
    "en": {
        "name": "English",
        "nativeName": "English"
    },
    "eo": {
        "name": "Esperanto",
        "nativeName": "Esperanto"
    },
    "et": {
        "name": "Estonian",
        "nativeName": "eesti, eesti keel"
    },
    "ee": {
        "name": "Ewe",
        "nativeName": "Eʋegbe"
    },
    "fo": {
        "name": "Faroese",
        "nativeName": "føroyskt"
    },
    "fj": {
        "name": "Fijian",
        "nativeName": "vosa Vakaviti"
    },
    "fi": {
        "name": "Finnish",
        "nativeName": "suomi, suomen kieli"
    },
    "fr": {
        "name": "French",
        "nativeName": "français, langue française"
    },
    "ff": {
        "name": "Fula; Fulah; Pulaar; Pular",
        "nativeName": "Fulfulde, Pulaar, Pular"
    },
    "gl": {
        "name": "Galician",
        "nativeName": "Galego"
    },
    "ka": {
        "name": "Georgian",
        "nativeName": "ქართული"
    },
    "de": {
        "name": "German",
        "nativeName": "Deutsch"
    },
    "el": {
        "name": "Greek, Modern",
        "nativeName": "Ελληνικά"
    },
    "gn": {
        "name": "Guaraní",
        "nativeName": "Avañeẽ"
    },
    "gu": {
        "name": "Gujarati",
        "nativeName": "ગુજરાતી"
    },
    "ht": {
        "name": "Haitian; Haitian Creole",
        "nativeName": "Kreyòl ayisyen"
    },
    "ha": {
        "name": "Hausa",
        "nativeName": "Hausa, هَوُسَ"
    },
    "he": {
        "name": "Hebrew (modern)",
        "nativeName": "עברית"
    },
    "hz": {
        "name": "Herero",
        "nativeName": "Otjiherero"
    },
    "hi": {
        "name": "Hindi",
        "nativeName": "हिन्दी, हिंदी"
    },
    "ho": {
        "name": "Hiri Motu",
        "nativeName": "Hiri Motu"
    },
    "hu": {
        "name": "Hungarian",
        "nativeName": "Magyar"
    },
    "ia": {
        "name": "Interlingua",
        "nativeName": "Interlingua"
    },
    "id": {
        "name": "Indonesian",
        "nativeName": "Bahasa Indonesia"
    },
    "ie": {
        "name": "Interlingue",
        "nativeName": "Originally called Occidental; then Interlingue after WWII"
    },
    "ga": {
        "name": "Irish",
        "nativeName": "Gaeilge"
    },
    "ig": {
        "name": "Igbo",
        "nativeName": "Asụsụ Igbo"
    },
    "ik": {
        "name": "Inupiaq",
        "nativeName": "Iñupiaq, Iñupiatun"
    },
    "io": {
        "name": "Ido",
        "nativeName": "Ido"
    },
    "is": {
        "name": "Icelandic",
        "nativeName": "Íslenska"
    },
    "it": {
        "name": "Italian",
        "nativeName": "Italiano"
    },
    "iu": {
        "name": "Inuktitut",
        "nativeName": "ᐃᓄᒃᑎᑐᑦ"
    },
    "ja": {
        "name": "Japanese",
        "nativeName": "日本語 (にほんご／にっぽんご)"
    },
    "jv": {
        "name": "Javanese",
        "nativeName": "basa Jawa"
    },
    "kl": {
        "name": "Kalaallisut, Greenlandic",
        "nativeName": "kalaallisut, kalaallit oqaasii"
    },
    "kn": {
        "name": "Kannada",
        "nativeName": "ಕನ್ನಡ"
    },
    "kr": {
        "name": "Kanuri",
        "nativeName": "Kanuri"
    },
    "ks": {
        "name": "Kashmiri",
        "nativeName": "कश्मीरी, كشميري‎"
    },
    "kk": {
        "name": "Kazakh",
        "nativeName": "Қазақ тілі"
    },
    "km": {
        "name": "Khmer",
        "nativeName": "ភាសាខ្មែរ"
    },
    "ki": {
        "name": "Kikuyu, Gikuyu",
        "nativeName": "Gĩkũyũ"
    },
    "rw": {
        "name": "Kinyarwanda",
        "nativeName": "Ikinyarwanda"
    },
    "ky": {
        "name": "Kirghiz, Kyrgyz",
        "nativeName": "кыргыз тили"
    },
    "kv": {
        "name": "Komi",
        "nativeName": "коми кыв"
    },
    "kg": {
        "name": "Kongo",
        "nativeName": "KiKongo"
    },
    "ko": {
        "name": "Korean",
        "nativeName": "한국어 (韓國語), 조선말 (朝鮮語)"
    },
    "ku": {
        "name": "Kurdish",
        "nativeName": "Kurdî, كوردی‎"
    },
    "kj": {
        "name": "Kwanyama, Kuanyama",
        "nativeName": "Kuanyama"
    },
    "la": {
        "name": "Latin",
        "nativeName": "latine, lingua latina"
    },
    "lb": {
        "name": "Luxembourgish, Letzeburgesch",
        "nativeName": "Lëtzebuergesch"
    },
    "lg": {
        "name": "Luganda",
        "nativeName": "Luganda"
    },
    "li": {
        "name": "Limburgish, Limburgan, Limburger",
        "nativeName": "Limburgs"
    },
    "ln": {
        "name": "Lingala",
        "nativeName": "Lingála"
    },
    "lo": {
        "name": "Lao",
        "nativeName": "ພາສາລາວ"
    },
    "lt": {
        "name": "Lithuanian",
        "nativeName": "lietuvių kalba"
    },
    "lu": {
        "name": "Luba-Katanga",
        "nativeName": ""
    },
    "lv": {
        "name": "Latvian",
        "nativeName": "latviešu valoda"
    },
    "gv": {
        "name": "Manx",
        "nativeName": "Gaelg, Gailck"
    },
    "mk": {
        "name": "Macedonian",
        "nativeName": "македонски јазик"
    },
    "mg": {
        "name": "Malagasy",
        "nativeName": "Malagasy fiteny"
    },
    "ms": {
        "name": "Malay",
        "nativeName": "bahasa Melayu, بهاس ملايو‎"
    },
    "ml": {
        "name": "Malayalam",
        "nativeName": "മലയാളം"
    },
    "mt": {
        "name": "Maltese",
        "nativeName": "Malti"
    },
    "mi": {
        "name": "Māori",
        "nativeName": "te reo Māori"
    },
    "mr": {
        "name": "Marathi (Marāṭhī)",
        "nativeName": "मराठी"
    },
    "mh": {
        "name": "Marshallese",
        "nativeName": "Kajin M̧ajeļ"
    },
    "mn": {
        "name": "Mongolian",
        "nativeName": "монгол"
    },
    "na": {
        "name": "Nauru",
        "nativeName": "Ekakairũ Naoero"
    },
    "nv": {
        "name": "Navajo, Navaho",
        "nativeName": "Diné bizaad, Dinékʼehǰí"
    },
    "nb": {
        "name": "Norwegian Bokmål",
        "nativeName": "Norsk bokmål"
    },
    "nd": {
        "name": "North Ndebele",
        "nativeName": "isiNdebele"
    },
    "ne": {
        "name": "Nepali",
        "nativeName": "नेपाली"
    },
    "ng": {
        "name": "Ndonga",
        "nativeName": "Owambo"
    },
    "nn": {
        "name": "Norwegian Nynorsk",
        "nativeName": "Norsk nynorsk"
    },
    "no": {
        "name": "Norwegian",
        "nativeName": "Norsk"
    },
    "ii": {
        "name": "Nuosu",
        "nativeName": "ꆈꌠ꒿ Nuosuhxop"
    },
    "nr": {
        "name": "South Ndebele",
        "nativeName": "isiNdebele"
    },
    "oc": {
        "name": "Occitan",
        "nativeName": "Occitan"
    },
    "oj": {
        "name": "Ojibwe, Ojibwa",
        "nativeName": "ᐊᓂᔑᓈᐯᒧᐎᓐ"
    },
    "cu": {
        "name": "Old Church Slavonic, Church Slavic, Church Slavonic, Old Bulgarian, Old Slavonic",
        "nativeName": "ѩзыкъ словѣньскъ"
    },
    "om": {
        "name": "Oromo",
        "nativeName": "Afaan Oromoo"
    },
    "or": {
        "name": "Oriya",
        "nativeName": "ଓଡ଼ିଆ"
    },
    "os": {
        "name": "Ossetian, Ossetic",
        "nativeName": "ирон æвзаг"
    },
    "pa": {
        "name": "Panjabi, Punjabi",
        "nativeName": "ਪੰਜਾਬੀ, پنجابی‎"
    },
    "pi": {
        "name": "Pāli",
        "nativeName": "पाऴि"
    },
    "fa": {
        "name": "Persian",
        "nativeName": "فارسی"
    },
    "pl": {
        "name": "Polish",
        "nativeName": "polski"
    },
    "ps": {
        "name": "Pashto, Pushto",
        "nativeName": "پښتو"
    },
    "pt": {
        "name": "Portuguese",
        "nativeName": "Português"
    },
    "qu": {
        "name": "Quechua",
        "nativeName": "Runa Simi, Kichwa"
    },
    "rm": {
        "name": "Romansh",
        "nativeName": "rumantsch grischun"
    },
    "rn": {
        "name": "Kirundi",
        "nativeName": "kiRundi"
    },
    "ro": {
        "name": "Romanian, Moldavian, Moldovan",
        "nativeName": "română"
    },
    "ru": {
        "name": "Russian",
        "nativeName": "русский язык"
    },
    "sa": {
        "name": "Sanskrit (Saṁskṛta)",
        "nativeName": "संस्कृतम्"
    },
    "sc": {
        "name": "Sardinian",
        "nativeName": "sardu"
    },
    "sd": {
        "name": "Sindhi",
        "nativeName": "सिन्धी, سنڌي، سندھی‎"
    },
    "se": {
        "name": "Northern Sami",
        "nativeName": "Davvisámegiella"
    },
    "sm": {
        "name": "Samoan",
        "nativeName": "gagana faa Samoa"
    },
    "sg": {
        "name": "Sango",
        "nativeName": "yângâ tî sängö"
    },
    "sr": {
        "name": "Serbian",
        "nativeName": "српски језик"
    },
    "gd": {
        "name": "Scottish Gaelic; Gaelic",
        "nativeName": "Gàidhlig"
    },
    "sn": {
        "name": "Shona",
        "nativeName": "chiShona"
    },
    "si": {
        "name": "Sinhala, Sinhalese",
        "nativeName": "සිංහල"
    },
    "sk": {
        "name": "Slovak",
        "nativeName": "slovenčina"
    },
    "sl": {
        "name": "Slovene",
        "nativeName": "slovenščina"
    },
    "so": {
        "name": "Somali",
        "nativeName": "Soomaaliga, af Soomaali"
    },
    "st": {
        "name": "Southern Sotho",
        "nativeName": "Sesotho"
    },
    "es": {
        "name": "Spanish; Castilian",
        "nativeName": "español, castellano"
    },
    "su": {
        "name": "Sundanese",
        "nativeName": "Basa Sunda"
    },
    "sw": {
        "name": "Swahili",
        "nativeName": "Kiswahili"
    },
    "ss": {
        "name": "Swati",
        "nativeName": "SiSwati"
    },
    "sv": {
        "name": "Swedish",
        "nativeName": "svenska"
    },
    "ta": {
        "name": "Tamil",
        "nativeName": "தமிழ்"
    },
    "te": {
        "name": "Telugu",
        "nativeName": "తెలుగు"
    },
    "tg": {
        "name": "Tajik",
        "nativeName": "тоҷикӣ, toğikī, تاجیکی‎"
    },
    "th": {
        "name": "Thai",
        "nativeName": "ไทย"
    },
    "ti": {
        "name": "Tigrinya",
        "nativeName": "ትግርኛ"
    },
    "bo": {
        "name": "Tibetan Standard, Tibetan, Central",
        "nativeName": "བོད་ཡིག"
    },
    "tk": {
        "name": "Turkmen",
        "nativeName": "Türkmen, Түркмен"
    },
    "tl": {
        "name": "Tagalog",
        "nativeName": "Wikang Tagalog, ᜏᜒᜃᜅ᜔ ᜆᜄᜎᜓᜄ᜔"
    },
    "tn": {
        "name": "Tswana",
        "nativeName": "Setswana"
    },
    "to": {
        "name": "Tonga (Tonga Islands)",
        "nativeName": "faka Tonga"
    },
    "tr": {
        "name": "Turkish",
        "nativeName": "Türkçe"
    },
    "ts": {
        "name": "Tsonga",
        "nativeName": "Xitsonga"
    },
    "tt": {
        "name": "Tatar",
        "nativeName": "татарча, tatarça, تاتارچا‎"
    },
    "tw": {
        "name": "Twi",
        "nativeName": "Twi"
    },
    "ty": {
        "name": "Tahitian",
        "nativeName": "Reo Tahiti"
    },
    "ug": {
        "name": "Uighur, Uyghur",
        "nativeName": "Uyƣurqə, ئۇيغۇرچە‎"
    },
    "uk": {
        "name": "Ukrainian",
        "nativeName": "українська"
    },
    "ur": {
        "name": "Urdu",
        "nativeName": "اردو"
    },
    "uz": {
        "name": "Uzbek",
        "nativeName": "zbek, Ўзбек, أۇزبېك‎"
    },
    "ve": {
        "name": "Venda",
        "nativeName": "Tshivenḓa"
    },
    "vi": {
        "name": "Vietnamese",
        "nativeName": "Tiếng Việt"
    },
    "vo": {
        "name": "Volapük",
        "nativeName": "Volapük"
    },
    "wa": {
        "name": "Walloon",
        "nativeName": "Walon"
    },
    "cy": {
        "name": "Welsh",
        "nativeName": "Cymraeg"
    },
    "wo": {
        "name": "Wolof",
        "nativeName": "Wollof"
    },
    "fy": {
        "name": "Western Frisian",
        "nativeName": "Frysk"
    },
    "xh": {
        "name": "Xhosa",
        "nativeName": "isiXhosa"
    },
    "yi": {
        "name": "Yiddish",
        "nativeName": "ייִדיש"
    },
    "yo": {
        "name": "Yoruba",
        "nativeName": "Yorùbá"
    },
    "za": {
        "name": "Zhuang, Chuang",
        "nativeName": "Saɯ cueŋƅ, Saw cuengh"
    }
};
var search = Object.keys(isoLangsNames).map(function (k) {
    return [k, isoLangsNames[k].name.toLowerCase()];
});
var fallbacks = {
    ca: 'ca_ES',
    cs: 'cs_CZ',
    en: 'en_US',
    he: 'he_IL',
    ja: 'ja_JP',
    ko: 'ko_KR',
    pt: 'pt_BR',
    sv: 'sv_SE',
    zh: 'zh_CN'
};
function lookup(name) {
    var test = name.toLowerCase();
    var res = search.find(function (e) {
        return e[1].indexOf(test) > -1;
    });
    return res[0];
}
function name$1(iso) {
    if (iso == null || iso.length < 2) return null;
    var key = iso.slice(0, 2);
    return isoLangsNames[key];
}
function fill(config) {
    var result = {};
    Object.keys(config).forEach(function (k) {
        var lalo = k.split('_');
        if (lalo[0] === lalo[1].toLowerCase()) {
            result[lalo[0]] = config[k];
        }
        result[k] = config[k];
    });
    Object.keys(fallbacks).forEach(function (k) {
        result[k] = config[fallbacks[k]];
    });
    return result;
}
function languages(iso) {
    var lang = iso;
    if (lang == null) {
        if (typeof navigator !== 'undefined') {
            lang = navigator.languages;
            if (lang == null) {
                lang = [navigator.userLanguage || navigator.language];
            }
        } else {
            lang = ['en'];
        }
    } else if (!Array.isArray(lang)) {
        lang = [lang];
    }
    return lang.map(function (s) {
        return s.replace('-', '_');
    });
}

var dateTime = "%A, %e de %B de %Y, %X";
var date = "%d/%m/%Y";
var time = "%H:%M:%S";
var periods = ["AM","PM"];
var days = ["diumenge","dilluns","dimarts","dimecres","dijous","divendres","dissabte"];
var shortDays = ["dg.","dl.","dt.","dc.","dj.","dv.","ds."];
var months = ["gener","febrer","març","abril","maig","juny","juliol","agost","setembre","octubre","novembre","desembre"];
var shortMonths = ["gen.","febr.","març","abr.","maig","juny","jul.","ag.","set.","oct.","nov.","des."];
var caES = {
    dateTime: dateTime,
    date: date,
    time: time,
    periods: periods,
    days: days,
    shortDays: shortDays,
    months: months,
    shortMonths: shortMonths
};

var ca_ES = Object.freeze({
	dateTime: dateTime,
	date: date,
	time: time,
	periods: periods,
	days: days,
	shortDays: shortDays,
	months: months,
	shortMonths: shortMonths,
	default: caES
});

var dateTime$1 = "%A,%e.%B %Y, %X";
var date$1 = "%-d.%-m.%Y";
var time$1 = "%H:%M:%S";
var periods$1 = ["AM","PM"];
var days$1 = ["neděle","pondělí","úterý","středa","čvrtek","pátek","sobota"];
var shortDays$1 = ["ne.","po.","út.","st.","čt.","pá.","so."];
var months$1 = ["leden","únor","březen","duben","květen","červen","červenec","srpen","září","říjen","listopad","prosinec"];
var shortMonths$1 = ["led","úno","břez","dub","kvě","čer","červ","srp","zář","říj","list","pros"];
var csCZ = {
    dateTime: dateTime$1,
    date: date$1,
    time: time$1,
    periods: periods$1,
    days: days$1,
    shortDays: shortDays$1,
    months: months$1,
    shortMonths: shortMonths$1
};

var cs_CZ = Object.freeze({
	dateTime: dateTime$1,
	date: date$1,
	time: time$1,
	periods: periods$1,
	days: days$1,
	shortDays: shortDays$1,
	months: months$1,
	shortMonths: shortMonths$1,
	default: csCZ
});

var dateTime$2 = "%A den %d %B %Y %X";
var date$2 = "%d-%m-%Y";
var time$2 = "%H:%M:%S";
var periods$2 = ["AM","PM"];
var days$2 = ["søndag","mandag","tirsdag","onsdag","torsdag","fredag","lørdag"];
var shortDays$2 = ["søn","man","tir","ons","tor","fre","lør"];
var months$2 = ["januar","februar","marts","april","maj","juni","juli","august","september","oktober","november","december"];
var shortMonths$2 = ["jan","feb","mar","apr","maj","jun","jul","aug","sep","okt","nov","dec"];
var daDK = {
    dateTime: dateTime$2,
    date: date$2,
    time: time$2,
    periods: periods$2,
    days: days$2,
    shortDays: shortDays$2,
    months: months$2,
    shortMonths: shortMonths$2
};

var da_DK = Object.freeze({
	dateTime: dateTime$2,
	date: date$2,
	time: time$2,
	periods: periods$2,
	days: days$2,
	shortDays: shortDays$2,
	months: months$2,
	shortMonths: shortMonths$2,
	default: daDK
});

var dateTime$3 = "%A, der %e. %B %Y, %X";
var date$3 = "%d.%m.%Y";
var time$3 = "%H:%M:%S";
var periods$3 = ["AM","PM"];
var days$3 = ["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"];
var shortDays$3 = ["So","Mo","Di","Mi","Do","Fr","Sa"];
var months$3 = ["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"];
var shortMonths$3 = ["Jan","Feb","Mrz","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"];
var deCH = {
    dateTime: dateTime$3,
    date: date$3,
    time: time$3,
    periods: periods$3,
    days: days$3,
    shortDays: shortDays$3,
    months: months$3,
    shortMonths: shortMonths$3
};

var de_CH = Object.freeze({
	dateTime: dateTime$3,
	date: date$3,
	time: time$3,
	periods: periods$3,
	days: days$3,
	shortDays: shortDays$3,
	months: months$3,
	shortMonths: shortMonths$3,
	default: deCH
});

var dateTime$4 = "%A, der %e. %B %Y, %X";
var date$4 = "%d.%m.%Y";
var time$4 = "%H:%M:%S";
var periods$4 = ["AM","PM"];
var days$4 = ["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"];
var shortDays$4 = ["So","Mo","Di","Mi","Do","Fr","Sa"];
var months$4 = ["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"];
var shortMonths$4 = ["Jan","Feb","Mrz","Apr","Mai","Jun","Jul","Aug","Sep","Okt","Nov","Dez"];
var deDE = {
    dateTime: dateTime$4,
    date: date$4,
    time: time$4,
    periods: periods$4,
    days: days$4,
    shortDays: shortDays$4,
    months: months$4,
    shortMonths: shortMonths$4
};

var de_DE = Object.freeze({
	dateTime: dateTime$4,
	date: date$4,
	time: time$4,
	periods: periods$4,
	days: days$4,
	shortDays: shortDays$4,
	months: months$4,
	shortMonths: shortMonths$4,
	default: deDE
});

var dateTime$5 = "%a %b %e %X %Y";
var date$5 = "%Y-%m-%d";
var time$5 = "%H:%M:%S";
var periods$5 = ["AM","PM"];
var days$5 = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var shortDays$5 = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
var months$5 = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var shortMonths$5 = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
var enCA = {
    dateTime: dateTime$5,
    date: date$5,
    time: time$5,
    periods: periods$5,
    days: days$5,
    shortDays: shortDays$5,
    months: months$5,
    shortMonths: shortMonths$5
};

var en_CA = Object.freeze({
	dateTime: dateTime$5,
	date: date$5,
	time: time$5,
	periods: periods$5,
	days: days$5,
	shortDays: shortDays$5,
	months: months$5,
	shortMonths: shortMonths$5,
	default: enCA
});

var dateTime$6 = "%a %e %b %X %Y";
var date$6 = "%d/%m/%Y";
var time$6 = "%H:%M:%S";
var periods$6 = ["AM","PM"];
var days$6 = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var shortDays$6 = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
var months$6 = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var shortMonths$6 = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
var enGB = {
    dateTime: dateTime$6,
    date: date$6,
    time: time$6,
    periods: periods$6,
    days: days$6,
    shortDays: shortDays$6,
    months: months$6,
    shortMonths: shortMonths$6
};

var en_GB = Object.freeze({
	dateTime: dateTime$6,
	date: date$6,
	time: time$6,
	periods: periods$6,
	days: days$6,
	shortDays: shortDays$6,
	months: months$6,
	shortMonths: shortMonths$6,
	default: enGB
});

var dateTime$7 = "%x, %X";
var date$7 = "%-m/%-d/%Y";
var time$7 = "%-I:%M:%S %p";
var periods$7 = ["AM","PM"];
var days$7 = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var shortDays$7 = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
var months$7 = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var shortMonths$7 = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
var enUS = {
    dateTime: dateTime$7,
    date: date$7,
    time: time$7,
    periods: periods$7,
    days: days$7,
    shortDays: shortDays$7,
    months: months$7,
    shortMonths: shortMonths$7
};

var en_US = Object.freeze({
	dateTime: dateTime$7,
	date: date$7,
	time: time$7,
	periods: periods$7,
	days: days$7,
	shortDays: shortDays$7,
	months: months$7,
	shortMonths: shortMonths$7,
	default: enUS
});

var dateTime$8 = "%A, %e de %B de %Y, %X";
var date$8 = "%d/%m/%Y";
var time$8 = "%H:%M:%S";
var periods$8 = ["AM","PM"];
var days$8 = ["domingo","lunes","martes","miércoles","jueves","viernes","sábado"];
var shortDays$8 = ["dom","lun","mar","mié","jue","vie","sáb"];
var months$8 = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
var shortMonths$8 = ["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"];
var esES = {
    dateTime: dateTime$8,
    date: date$8,
    time: time$8,
    periods: periods$8,
    days: days$8,
    shortDays: shortDays$8,
    months: months$8,
    shortMonths: shortMonths$8
};

var es_ES = Object.freeze({
	dateTime: dateTime$8,
	date: date$8,
	time: time$8,
	periods: periods$8,
	days: days$8,
	shortDays: shortDays$8,
	months: months$8,
	shortMonths: shortMonths$8,
	default: esES
});

var dateTime$9 = "%x, %X";
var date$9 = "%d/%m/%Y";
var time$9 = "%-I:%M:%S %p";
var periods$9 = ["AM","PM"];
var days$9 = ["domingo","lunes","martes","miércoles","jueves","viernes","sábado"];
var shortDays$9 = ["dom","lun","mar","mié","jue","vie","sáb"];
var months$9 = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
var shortMonths$9 = ["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"];
var esMX = {
    dateTime: dateTime$9,
    date: date$9,
    time: time$9,
    periods: periods$9,
    days: days$9,
    shortDays: shortDays$9,
    months: months$9,
    shortMonths: shortMonths$9
};

var es_MX = Object.freeze({
	dateTime: dateTime$9,
	date: date$9,
	time: time$9,
	periods: periods$9,
	days: days$9,
	shortDays: shortDays$9,
	months: months$9,
	shortMonths: shortMonths$9,
	default: esMX
});

var dateTime$10 = "%A, %-d. %Bta %Y klo %X";
var date$10 = "%-d.%-m.%Y";
var time$10 = "%H:%M:%S";
var periods$10 = ["a.m.","p.m."];
var days$10 = ["sunnuntai","maanantai","tiistai","keskiviikko","torstai","perjantai","lauantai"];
var shortDays$10 = ["Su","Ma","Ti","Ke","To","Pe","La"];
var months$10 = ["tammikuu","helmikuu","maaliskuu","huhtikuu","toukokuu","kesäkuu","heinäkuu","elokuu","syyskuu","lokakuu","marraskuu","joulukuu"];
var shortMonths$10 = ["Tammi","Helmi","Maalis","Huhti","Touko","Kesä","Heinä","Elo","Syys","Loka","Marras","Joulu"];
var fiFI = {
    dateTime: dateTime$10,
    date: date$10,
    time: time$10,
    periods: periods$10,
    days: days$10,
    shortDays: shortDays$10,
    months: months$10,
    shortMonths: shortMonths$10
};

var fi_FI = Object.freeze({
	dateTime: dateTime$10,
	date: date$10,
	time: time$10,
	periods: periods$10,
	days: days$10,
	shortDays: shortDays$10,
	months: months$10,
	shortMonths: shortMonths$10,
	default: fiFI
});

var dateTime$11 = "%a %e %b %Y %X";
var date$11 = "%Y-%m-%d";
var time$11 = "%H:%M:%S";
var periods$11 = ["",""];
var days$11 = ["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"];
var shortDays$11 = ["dim","lun","mar","mer","jeu","ven","sam"];
var months$11 = ["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"];
var shortMonths$11 = ["jan","fév","mar","avr","mai","jui","jul","aoû","sep","oct","nov","déc"];
var frCA = {
    dateTime: dateTime$11,
    date: date$11,
    time: time$11,
    periods: periods$11,
    days: days$11,
    shortDays: shortDays$11,
    months: months$11,
    shortMonths: shortMonths$11
};

var fr_CA = Object.freeze({
	dateTime: dateTime$11,
	date: date$11,
	time: time$11,
	periods: periods$11,
	days: days$11,
	shortDays: shortDays$11,
	months: months$11,
	shortMonths: shortMonths$11,
	default: frCA
});

var dateTime$12 = "%A, le %e %B %Y, %X";
var date$12 = "%d/%m/%Y";
var time$12 = "%H:%M:%S";
var periods$12 = ["AM","PM"];
var days$12 = ["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"];
var shortDays$12 = ["dim.","lun.","mar.","mer.","jeu.","ven.","sam."];
var months$12 = ["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"];
var shortMonths$12 = ["janv.","févr.","mars","avr.","mai","juin","juil.","août","sept.","oct.","nov.","déc."];
var frFR = {
    dateTime: dateTime$12,
    date: date$12,
    time: time$12,
    periods: periods$12,
    days: days$12,
    shortDays: shortDays$12,
    months: months$12,
    shortMonths: shortMonths$12
};

var fr_FR = Object.freeze({
	dateTime: dateTime$12,
	date: date$12,
	time: time$12,
	periods: periods$12,
	days: days$12,
	shortDays: shortDays$12,
	months: months$12,
	shortMonths: shortMonths$12,
	default: frFR
});

var dateTime$13 = "%A, %e ב%B %Y %X";
var date$13 = "%d.%m.%Y";
var time$13 = "%H:%M:%S";
var periods$13 = ["AM","PM"];
var days$13 = ["ראשון","שני","שלישי","רביעי","חמישי","שישי","שבת"];
var shortDays$13 = ["א׳","ב׳","ג׳","ד׳","ה׳","ו׳","ש׳"];
var months$13 = ["ינואר","פברואר","מרץ","אפריל","מאי","יוני","יולי","אוגוסט","ספטמבר","אוקטובר","נובמבר","דצמבר"];
var shortMonths$13 = ["ינו׳","פבר׳","מרץ","אפר׳","מאי","יוני","יולי","אוג׳","ספט׳","אוק׳","נוב׳","דצמ׳"];
var heIL = {
    dateTime: dateTime$13,
    date: date$13,
    time: time$13,
    periods: periods$13,
    days: days$13,
    shortDays: shortDays$13,
    months: months$13,
    shortMonths: shortMonths$13
};

var he_IL = Object.freeze({
	dateTime: dateTime$13,
	date: date$13,
	time: time$13,
	periods: periods$13,
	days: days$13,
	shortDays: shortDays$13,
	months: months$13,
	shortMonths: shortMonths$13,
	default: heIL
});

var dateTime$14 = "%Y. %B %-e., %A %X";
var date$14 = "%Y. %m. %d.";
var time$14 = "%H:%M:%S";
var periods$14 = ["de.","du."];
var days$14 = ["vasárnap","hétfő","kedd","szerda","csütörtök","péntek","szombat"];
var shortDays$14 = ["V","H","K","Sze","Cs","P","Szo"];
var months$14 = ["január","február","március","április","május","június","július","augusztus","szeptember","október","november","december"];
var shortMonths$14 = ["jan.","feb.","már.","ápr.","máj.","jún.","júl.","aug.","szept.","okt.","nov.","dec."];
var huHU = {
    dateTime: dateTime$14,
    date: date$14,
    time: time$14,
    periods: periods$14,
    days: days$14,
    shortDays: shortDays$14,
    months: months$14,
    shortMonths: shortMonths$14
};

var hu_HU = Object.freeze({
	dateTime: dateTime$14,
	date: date$14,
	time: time$14,
	periods: periods$14,
	days: days$14,
	shortDays: shortDays$14,
	months: months$14,
	shortMonths: shortMonths$14,
	default: huHU
});

var dateTime$15 = "%A %e %B %Y, %X";
var date$15 = "%d/%m/%Y";
var time$15 = "%H:%M:%S";
var periods$15 = ["AM","PM"];
var days$15 = ["Domenica","Lunedì","Martedì","Mercoledì","Giovedì","Venerdì","Sabato"];
var shortDays$15 = ["Dom","Lun","Mar","Mer","Gio","Ven","Sab"];
var months$15 = ["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"];
var shortMonths$15 = ["Gen","Feb","Mar","Apr","Mag","Giu","Lug","Ago","Set","Ott","Nov","Dic"];
var itIT = {
    dateTime: dateTime$15,
    date: date$15,
    time: time$15,
    periods: periods$15,
    days: days$15,
    shortDays: shortDays$15,
    months: months$15,
    shortMonths: shortMonths$15
};

var it_IT = Object.freeze({
	dateTime: dateTime$15,
	date: date$15,
	time: time$15,
	periods: periods$15,
	days: days$15,
	shortDays: shortDays$15,
	months: months$15,
	shortMonths: shortMonths$15,
	default: itIT
});

var dateTime$16 = "%Y %b %e %a %X";
var date$16 = "%Y/%m/%d";
var time$16 = "%H:%M:%S";
var periods$16 = ["AM","PM"];
var days$16 = ["日曜日","月曜日","火曜日","水曜日","木曜日","金曜日","土曜日"];
var shortDays$16 = ["日","月","火","水","木","金","土"];
var months$16 = ["睦月","如月","弥生","卯月","皐月","水無月","文月","葉月","長月","神無月","霜月","師走"];
var shortMonths$16 = ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"];
var jaJP = {
    dateTime: dateTime$16,
    date: date$16,
    time: time$16,
    periods: periods$16,
    days: days$16,
    shortDays: shortDays$16,
    months: months$16,
    shortMonths: shortMonths$16
};

var ja_JP = Object.freeze({
	dateTime: dateTime$16,
	date: date$16,
	time: time$16,
	periods: periods$16,
	days: days$16,
	shortDays: shortDays$16,
	months: months$16,
	shortMonths: shortMonths$16,
	default: jaJP
});

var dateTime$17 = "%Y/%m/%d %a %X";
var date$17 = "%Y/%m/%d";
var time$17 = "%H:%M:%S";
var periods$17 = ["오전","오후"];
var days$17 = ["일요일","월요일","화요일","수요일","목요일","금요일","토요일"];
var shortDays$17 = ["일","월","화","수","목","금","토"];
var months$17 = ["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"];
var shortMonths$17 = ["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"];
var koKR = {
    dateTime: dateTime$17,
    date: date$17,
    time: time$17,
    periods: periods$17,
    days: days$17,
    shortDays: shortDays$17,
    months: months$17,
    shortMonths: shortMonths$17
};

var ko_KR = Object.freeze({
	dateTime: dateTime$17,
	date: date$17,
	time: time$17,
	periods: periods$17,
	days: days$17,
	shortDays: shortDays$17,
	months: months$17,
	shortMonths: shortMonths$17,
	default: koKR
});

var dateTime$18 = "%A, %e %B %Y г. %X";
var date$18 = "%d.%m.%Y";
var time$18 = "%H:%M:%S";
var periods$18 = ["AM","PM"];
var days$18 = ["недела","понеделник","вторник","среда","четврток","петок","сабота"];
var shortDays$18 = ["нед","пон","вто","сре","чет","пет","саб"];
var months$18 = ["јануари","февруари","март","април","мај","јуни","јули","август","септември","октомври","ноември","декември"];
var shortMonths$18 = ["јан","фев","мар","апр","мај","јун","јул","авг","сеп","окт","ное","дек"];
var mkMK = {
    dateTime: dateTime$18,
    date: date$18,
    time: time$18,
    periods: periods$18,
    days: days$18,
    shortDays: shortDays$18,
    months: months$18,
    shortMonths: shortMonths$18
};

var mk_MK = Object.freeze({
	dateTime: dateTime$18,
	date: date$18,
	time: time$18,
	periods: periods$18,
	days: days$18,
	shortDays: shortDays$18,
	months: months$18,
	shortMonths: shortMonths$18,
	default: mkMK
});

var dateTime$19 = "%a %e %B %Y %T";
var date$19 = "%d-%m-%Y";
var time$19 = "%H:%M:%S";
var periods$19 = ["AM","PM"];
var days$19 = ["zondag","maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag"];
var shortDays$19 = ["zo","ma","di","wo","do","vr","za"];
var months$19 = ["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"];
var shortMonths$19 = ["jan","feb","mrt","apr","mei","jun","jul","aug","sep","okt","nov","dec"];
var nlNL = {
    dateTime: dateTime$19,
    date: date$19,
    time: time$19,
    periods: periods$19,
    days: days$19,
    shortDays: shortDays$19,
    months: months$19,
    shortMonths: shortMonths$19
};

var nl_NL = Object.freeze({
	dateTime: dateTime$19,
	date: date$19,
	time: time$19,
	periods: periods$19,
	days: days$19,
	shortDays: shortDays$19,
	months: months$19,
	shortMonths: shortMonths$19,
	default: nlNL
});

var dateTime$20 = "%A, %e %B %Y, %X";
var date$20 = "%d/%m/%Y";
var time$20 = "%H:%M:%S";
var periods$20 = ["AM","PM"];
var days$20 = ["Niedziela","Poniedziałek","Wtorek","Środa","Czwartek","Piątek","Sobota"];
var shortDays$20 = ["Niedz.","Pon.","Wt.","Śr.","Czw.","Pt.","Sob."];
var months$20 = ["Styczeń","Luty","Marzec","Kwiecień","Maj","Czerwiec","Lipiec","Sierpień","Wrzesień","Październik","Listopad","Grudzień"];
var shortMonths$20 = ["Stycz.","Luty","Marz.","Kwie.","Maj","Czerw.","Lipc.","Sierp.","Wrz.","Paźdz.","Listop.","Grudz."];
var plPL = {
    dateTime: dateTime$20,
    date: date$20,
    time: time$20,
    periods: periods$20,
    days: days$20,
    shortDays: shortDays$20,
    months: months$20,
    shortMonths: shortMonths$20
};

var pl_PL = Object.freeze({
	dateTime: dateTime$20,
	date: date$20,
	time: time$20,
	periods: periods$20,
	days: days$20,
	shortDays: shortDays$20,
	months: months$20,
	shortMonths: shortMonths$20,
	default: plPL
});

var dateTime$21 = "%A, %e de %B de %Y. %X";
var date$21 = "%d/%m/%Y";
var time$21 = "%H:%M:%S";
var periods$21 = ["AM","PM"];
var days$21 = ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"];
var shortDays$21 = ["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"];
var months$21 = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
var shortMonths$21 = ["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"];
var ptBR = {
    dateTime: dateTime$21,
    date: date$21,
    time: time$21,
    periods: periods$21,
    days: days$21,
    shortDays: shortDays$21,
    months: months$21,
    shortMonths: shortMonths$21
};

var pt_BR = Object.freeze({
	dateTime: dateTime$21,
	date: date$21,
	time: time$21,
	periods: periods$21,
	days: days$21,
	shortDays: shortDays$21,
	months: months$21,
	shortMonths: shortMonths$21,
	default: ptBR
});

var dateTime$22 = "%A, %e %B %Y г. %X";
var date$22 = "%d.%m.%Y";
var time$22 = "%H:%M:%S";
var periods$22 = ["AM","PM"];
var days$22 = ["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"];
var shortDays$22 = ["вс","пн","вт","ср","чт","пт","сб"];
var months$22 = ["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"];
var shortMonths$22 = ["янв","фев","мар","апр","май","июн","июл","авг","сен","окт","ноя","дек"];
var ruRU = {
    dateTime: dateTime$22,
    date: date$22,
    time: time$22,
    periods: periods$22,
    days: days$22,
    shortDays: shortDays$22,
    months: months$22,
    shortMonths: shortMonths$22
};

var ru_RU = Object.freeze({
	dateTime: dateTime$22,
	date: date$22,
	time: time$22,
	periods: periods$22,
	days: days$22,
	shortDays: shortDays$22,
	months: months$22,
	shortMonths: shortMonths$22,
	default: ruRU
});

var dateTime$23 = "%A den %d %B %Y %X";
var date$23 = "%Y-%m-%d";
var time$23 = "%H:%M:%S";
var periods$23 = ["fm","em"];
var days$23 = ["Söndag","Måndag","Tisdag","Onsdag","Torsdag","Fredag","Lördag"];
var shortDays$23 = ["Sön","Mån","Tis","Ons","Tor","Fre","Lör"];
var months$23 = ["Januari","Februari","Mars","April","Maj","Juni","Juli","Augusti","September","Oktober","November","December"];
var shortMonths$23 = ["Jan","Feb","Mar","Apr","Maj","Jun","Jul","Aug","Sep","Okt","Nov","Dec"];
var svSE = {
    dateTime: dateTime$23,
    date: date$23,
    time: time$23,
    periods: periods$23,
    days: days$23,
    shortDays: shortDays$23,
    months: months$23,
    shortMonths: shortMonths$23
};

var sv_SE = Object.freeze({
	dateTime: dateTime$23,
	date: date$23,
	time: time$23,
	periods: periods$23,
	days: days$23,
	shortDays: shortDays$23,
	months: months$23,
	shortMonths: shortMonths$23,
	default: svSE
});

var dateTime$24 = "%a %e %b %X %Y";
var date$24 = "%d/%m/%Y";
var time$24 = "%H:%M:%S";
var periods$24 = ["AM","PM"];
var days$24 = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
var shortDays$24 = ["Paz","Pzt","Sal","Çar","Per","Cum","Cmt"];
var months$24 = ["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"];
var shortMonths$24 = ["Oca","Şub","Mar","Nis","May","Haz","Tem","Ağu","Eyl","Eki","Kas","Ara"];
var trTR = {
    dateTime: dateTime$24,
    date: date$24,
    time: time$24,
    periods: periods$24,
    days: days$24,
    shortDays: shortDays$24,
    months: months$24,
    shortMonths: shortMonths$24
};

var tr_TR = Object.freeze({
	dateTime: dateTime$24,
	date: date$24,
	time: time$24,
	periods: periods$24,
	days: days$24,
	shortDays: shortDays$24,
	months: months$24,
	shortMonths: shortMonths$24,
	default: trTR
});

var dateTime$25 = "%A, %e %B %Y р. %X";
var date$25 = "%d.%m.%Y";
var time$25 = "%H:%M:%S";
var periods$25 = ["дп","пп"];
var days$25 = ["неділя","понеділок","вівторок","середа","четвер","п'ятниця","субота"];
var shortDays$25 = ["нд","пн","вт","ср","чт","пт","сб"];
var months$25 = ["січня","лютого","березня","квітня","травня","червня","липня","серпня","вересня","жовтня","листопада","грудня"];
var shortMonths$25 = ["січ.","лют.","бер.","квіт.","трав.","черв.","лип.","серп.","вер.","жовт.","лист.","груд."];
var ukUA = {
    dateTime: dateTime$25,
    date: date$25,
    time: time$25,
    periods: periods$25,
    days: days$25,
    shortDays: shortDays$25,
    months: months$25,
    shortMonths: shortMonths$25
};

var uk_UA = Object.freeze({
	dateTime: dateTime$25,
	date: date$25,
	time: time$25,
	periods: periods$25,
	days: days$25,
	shortDays: shortDays$25,
	months: months$25,
	shortMonths: shortMonths$25,
	default: ukUA
});

var dateTime$26 = "%x %A %X";
var date$26 = "%Y年%-m月%-d日";
var time$26 = "%H:%M:%S";
var periods$26 = ["上午","下午"];
var days$26 = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
var shortDays$26 = ["周日","周一","周二","周三","周四","周五","周六"];
var months$26 = ["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"];
var shortMonths$26 = ["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"];
var zhCN = {
    dateTime: dateTime$26,
    date: date$26,
    time: time$26,
    periods: periods$26,
    days: days$26,
    shortDays: shortDays$26,
    months: months$26,
    shortMonths: shortMonths$26
};

var zh_CN = Object.freeze({
	dateTime: dateTime$26,
	date: date$26,
	time: time$26,
	periods: periods$26,
	days: days$26,
	shortDays: shortDays$26,
	months: months$26,
	shortMonths: shortMonths$26,
	default: zhCN
});

var lookup$1 = {
	ca_ES: ca_ES,
	cs_CZ: cs_CZ,
	da_DK: da_DK,
	de_CH: de_CH,
	de_DE: de_DE,
	en_CA: en_CA,
	en_GB: en_GB,
	en_US: en_US,
	es_ES: es_ES,
	es_MX: es_MX,
	fi_FI: fi_FI,
	fr_CA: fr_CA,
	fr_FR: fr_FR,
	he_IL: he_IL,
	hu_HU: hu_HU,
	it_IT: it_IT,
	ja_JP: ja_JP,
	ko_KR: ko_KR,
	mk_MK: mk_MK,
	nl_NL: nl_NL,
	pl_PL: pl_PL,
	pt_BR: pt_BR,
	ru_RU: ru_RU,
	sv_SE: sv_SE,
	tr_TR: tr_TR,
	uk_UA: uk_UA,
	zh_CN: zh_CN
};

var lookupMapping = fill(lookup$1);


function time$27(iso) {
    var lang = languages(iso);
    for (var i = 0; i < lang.length; ++i) {
        var key = lang[i];
        var fmt = lookupMapping[key];
        if (fmt) return { d3: fmt, iso639: key.replace('_', '-') };
    }
    return { d3: lookup$1.en_US, iso639: 'en-US' };
}

var decimal = "٫";
var thousands = "٬";
var grouping = [3];
var currency = ["",""];
var numerals = ["٠","١","٢","٣","٤","٥","٦","٧","٨","٩"];
var ar001 = {
    decimal: decimal,
    thousands: thousands,
    grouping: grouping,
    currency: currency,
    numerals: numerals
};

var ar_001 = Object.freeze({
	decimal: decimal,
	thousands: thousands,
	grouping: grouping,
	currency: currency,
	numerals: numerals,
	default: ar001
});

var decimal$1 = "٫";
var thousands$1 = "٬";
var grouping$1 = [3];
var currency$1 = [""," د.إ."];
var numerals$1 = ["٠","١","٢","٣","٤","٥","٦","٧","٨","٩"];
var arAE = {
    decimal: decimal$1,
    thousands: thousands$1,
    grouping: grouping$1,
    currency: currency$1,
    numerals: numerals$1
};

var ar_AE = Object.freeze({
	decimal: decimal$1,
	thousands: thousands$1,
	grouping: grouping$1,
	currency: currency$1,
	numerals: numerals$1,
	default: arAE
});

var decimal$2 = "٫";
var thousands$2 = "٬";
var grouping$2 = [3];
var currency$2 = [""," د.ب."];
var numerals$2 = ["٠","١","٢","٣","٤","٥","٦","٧","٨","٩"];
var arBH = {
    decimal: decimal$2,
    thousands: thousands$2,
    grouping: grouping$2,
    currency: currency$2,
    numerals: numerals$2
};

var ar_BH = Object.freeze({
	decimal: decimal$2,
	thousands: thousands$2,
	grouping: grouping$2,
	currency: currency$2,
	numerals: numerals$2,
	default: arBH
});

var decimal$3 = "٫";
var thousands$3 = "٬";
var grouping$3 = [3];
var currency$3 = ["‏Fdj ",""];
var numerals$3 = ["٠","١","٢","٣","٤","٥","٦","٧","٨","٩"];
var arDJ = {
    decimal: decimal$3,
    thousands: thousands$3,
    grouping: grouping$3,
    currency: currency$3,
    numerals: numerals$3
};

var ar_DJ = Object.freeze({
	decimal: decimal$3,
	thousands: thousands$3,
	grouping: grouping$3,
	currency: currency$3,
	numerals: numerals$3,
	default: arDJ
});

var decimal$4 = ",";
var thousands$4 = ".";
var grouping$4 = [3];
var currency$4 = ["د.ج. ",""];
var arDZ = {
    decimal: decimal$4,
    thousands: thousands$4,
    grouping: grouping$4,
    currency: currency$4
};

var ar_DZ = Object.freeze({
	decimal: decimal$4,
	thousands: thousands$4,
	grouping: grouping$4,
	currency: currency$4,
	default: arDZ
});

var decimal$5 = "٫";
var thousands$5 = "٬";
var grouping$5 = [3];
var currency$5 = [""," ج.م."];
var numerals$4 = ["٠","١","٢","٣","٤","٥","٦","٧","٨","٩"];
var arEG = {
    decimal: decimal$5,
    thousands: thousands$5,
    grouping: grouping$5,
    currency: currency$5,
    numerals: numerals$4
};

var ar_EG = Object.freeze({
	decimal: decimal$5,
	thousands: thousands$5,
	grouping: grouping$5,
	currency: currency$5,
	numerals: numerals$4,
	default: arEG
});

var decimal$6 = ".";
var thousands$6 = ",";
var grouping$6 = [3];
var currency$6 = ["د.م. ",""];
var arEH = {
    decimal: decimal$6,
    thousands: thousands$6,
    grouping: grouping$6,
    currency: currency$6
};

var ar_EH = Object.freeze({
	decimal: decimal$6,
	thousands: thousands$6,
	grouping: grouping$6,
	currency: currency$6,
	default: arEH
});

var decimal$7 = "٫";
var thousands$7 = "٬";
var grouping$7 = [3];
var currency$7 = ["Nfk ",""];
var numerals$5 = ["٠","١","٢","٣","٤","٥","٦","٧","٨","٩"];
var arER = {
    decimal: decimal$7,
    thousands: thousands$7,
    grouping: grouping$7,
    currency: currency$7,
    numerals: numerals$5
};

var ar_ER = Object.freeze({
	decimal: decimal$7,
	thousands: thousands$7,
	grouping: grouping$7,
	currency: currency$7,
	numerals: numerals$5,
	default: arER
});

var decimal$8 = "٫";
var thousands$8 = "٬";
var grouping$8 = [3];
var currency$8 = ["₪ ",""];
var numerals$6 = ["٠","١","٢","٣","٤","٥","٦","٧","٨","٩"];
var arIL = {
    decimal: decimal$8,
    thousands: thousands$8,
    grouping: grouping$8,
    currency: currency$8,
    numerals: numerals$6
};

var ar_IL = Object.freeze({
	decimal: decimal$8,
	thousands: thousands$8,
	grouping: grouping$8,
	currency: currency$8,
	numerals: numerals$6,
	default: arIL
});

var decimal$9 = "٫";
var thousands$9 = "٬";
var grouping$9 = [3];
var currency$9 = [""," د.ع."];
var numerals$7 = ["٠","١","٢","٣","٤","٥","٦","٧","٨","٩"];
var arIQ = {
    decimal: decimal$9,
    thousands: thousands$9,
    grouping: grouping$9,
    currency: currency$9,
    numerals: numerals$7
};

var ar_IQ = Object.freeze({
	decimal: decimal$9,
	thousands: thousands$9,
	grouping: grouping$9,
	currency: currency$9,
	numerals: numerals$7,
	default: arIQ
});

var decimal$10 = "٫";
var thousands$10 = "٬";
var grouping$10 = [3];
var currency$10 = [""," د.أ."];
var numerals$8 = ["٠","١","٢","٣","٤","٥","٦","٧","٨","٩"];
var arJO = {
    decimal: decimal$10,
    thousands: thousands$10,
    grouping: grouping$10,
    currency: currency$10,
    numerals: numerals$8
};

var ar_JO = Object.freeze({
	decimal: decimal$10,
	thousands: thousands$10,
	grouping: grouping$10,
	currency: currency$10,
	numerals: numerals$8,
	default: arJO
});

var decimal$11 = "٫";
var thousands$11 = "٬";
var grouping$11 = [3];
var currency$11 = [""," ف.ج.ق."];
var numerals$9 = ["٠","١","٢","٣","٤","٥","٦","٧","٨","٩"];
var arKM = {
    decimal: decimal$11,
    thousands: thousands$11,
    grouping: grouping$11,
    currency: currency$11,
    numerals: numerals$9
};

var ar_KM = Object.freeze({
	decimal: decimal$11,
	thousands: thousands$11,
	grouping: grouping$11,
	currency: currency$11,
	numerals: numerals$9,
	default: arKM
});

var decimal$12 = "٫";
var thousands$12 = "٬";
var grouping$12 = [3];
var currency$12 = [""," د.ك."];
var numerals$10 = ["٠","١","٢","٣","٤","٥","٦","٧","٨","٩"];
var arKW = {
    decimal: decimal$12,
    thousands: thousands$12,
    grouping: grouping$12,
    currency: currency$12,
    numerals: numerals$10
};

var ar_KW = Object.freeze({
	decimal: decimal$12,
	thousands: thousands$12,
	grouping: grouping$12,
	currency: currency$12,
	numerals: numerals$10,
	default: arKW
});

var decimal$13 = "٫";
var thousands$13 = "٬";
var grouping$13 = [3];
var currency$13 = [""," ل.ل."];
var numerals$11 = ["٠","١","٢","٣","٤","٥","٦","٧","٨","٩"];
var arLB = {
    decimal: decimal$13,
    thousands: thousands$13,
    grouping: grouping$13,
    currency: currency$13,
    numerals: numerals$11
};

var ar_LB = Object.freeze({
	decimal: decimal$13,
	thousands: thousands$13,
	grouping: grouping$13,
	currency: currency$13,
	numerals: numerals$11,
	default: arLB
});

var decimal$14 = ",";
var thousands$14 = ".";
var grouping$14 = [3];
var currency$14 = ["د.ل. ",""];
var arLY = {
    decimal: decimal$14,
    thousands: thousands$14,
    grouping: grouping$14,
    currency: currency$14
};

var ar_LY = Object.freeze({
	decimal: decimal$14,
	thousands: thousands$14,
	grouping: grouping$14,
	currency: currency$14,
	default: arLY
});

var decimal$15 = ",";
var thousands$15 = ".";
var grouping$15 = [3];
var currency$15 = ["د.م. ",""];
var arMA = {
    decimal: decimal$15,
    thousands: thousands$15,
    grouping: grouping$15,
    currency: currency$15
};

var ar_MA = Object.freeze({
	decimal: decimal$15,
	thousands: thousands$15,
	grouping: grouping$15,
	currency: currency$15,
	default: arMA
});

var decimal$16 = "٫";
var thousands$16 = "٬";
var grouping$16 = [3];
var currency$16 = [""," أ.م."];
var numerals$12 = ["٠","١","٢","٣","٤","٥","٦","٧","٨","٩"];
var arMR = {
    decimal: decimal$16,
    thousands: thousands$16,
    grouping: grouping$16,
    currency: currency$16,
    numerals: numerals$12
};

var ar_MR = Object.freeze({
	decimal: decimal$16,
	thousands: thousands$16,
	grouping: grouping$16,
	currency: currency$16,
	numerals: numerals$12,
	default: arMR
});

var decimal$17 = "٫";
var thousands$17 = "٬";
var grouping$17 = [3];
var currency$17 = [""," ر.ع."];
var numerals$13 = ["٠","١","٢","٣","٤","٥","٦","٧","٨","٩"];
var arOM = {
    decimal: decimal$17,
    thousands: thousands$17,
    grouping: grouping$17,
    currency: currency$17,
    numerals: numerals$13
};

var ar_OM = Object.freeze({
	decimal: decimal$17,
	thousands: thousands$17,
	grouping: grouping$17,
	currency: currency$17,
	numerals: numerals$13,
	default: arOM
});

var decimal$18 = "٫";
var thousands$18 = "٬";
var grouping$18 = [3];
var currency$18 = ["₪ ",""];
var numerals$14 = ["٠","١","٢","٣","٤","٥","٦","٧","٨","٩"];
var arPS = {
    decimal: decimal$18,
    thousands: thousands$18,
    grouping: grouping$18,
    currency: currency$18,
    numerals: numerals$14
};

var ar_PS = Object.freeze({
	decimal: decimal$18,
	thousands: thousands$18,
	grouping: grouping$18,
	currency: currency$18,
	numerals: numerals$14,
	default: arPS
});

var decimal$19 = "٫";
var thousands$19 = "٬";
var grouping$19 = [3];
var currency$19 = [""," ر.ق."];
var numerals$15 = ["٠","١","٢","٣","٤","٥","٦","٧","٨","٩"];
var arQA = {
    decimal: decimal$19,
    thousands: thousands$19,
    grouping: grouping$19,
    currency: currency$19,
    numerals: numerals$15
};

var ar_QA = Object.freeze({
	decimal: decimal$19,
	thousands: thousands$19,
	grouping: grouping$19,
	currency: currency$19,
	numerals: numerals$15,
	default: arQA
});

var decimal$20 = "٫";
var thousands$20 = "٬";
var grouping$20 = [3];
var currency$20 = [""," ر.س."];
var numerals$16 = ["٠","١","٢","٣","٤","٥","٦","٧","٨","٩"];
var arSA = {
    decimal: decimal$20,
    thousands: thousands$20,
    grouping: grouping$20,
    currency: currency$20,
    numerals: numerals$16
};

var ar_SA = Object.freeze({
	decimal: decimal$20,
	thousands: thousands$20,
	grouping: grouping$20,
	currency: currency$20,
	numerals: numerals$16,
	default: arSA
});

var decimal$21 = "٫";
var thousands$21 = "٬";
var grouping$21 = [3];
var currency$21 = [""," ج.س."];
var numerals$17 = ["٠","١","٢","٣","٤","٥","٦","٧","٨","٩"];
var arSD = {
    decimal: decimal$21,
    thousands: thousands$21,
    grouping: grouping$21,
    currency: currency$21,
    numerals: numerals$17
};

var ar_SD = Object.freeze({
	decimal: decimal$21,
	thousands: thousands$21,
	grouping: grouping$21,
	currency: currency$21,
	numerals: numerals$17,
	default: arSD
});

var decimal$22 = "٫";
var thousands$22 = "٬";
var grouping$22 = [3];
var currency$22 = ["‏S ",""];
var numerals$18 = ["٠","١","٢","٣","٤","٥","٦","٧","٨","٩"];
var arSO = {
    decimal: decimal$22,
    thousands: thousands$22,
    grouping: grouping$22,
    currency: currency$22,
    numerals: numerals$18
};

var ar_SO = Object.freeze({
	decimal: decimal$22,
	thousands: thousands$22,
	grouping: grouping$22,
	currency: currency$22,
	numerals: numerals$18,
	default: arSO
});

var decimal$23 = "٫";
var thousands$23 = "٬";
var grouping$23 = [3];
var currency$23 = ["£ ",""];
var numerals$19 = ["٠","١","٢","٣","٤","٥","٦","٧","٨","٩"];
var arSS = {
    decimal: decimal$23,
    thousands: thousands$23,
    grouping: grouping$23,
    currency: currency$23,
    numerals: numerals$19
};

var ar_SS = Object.freeze({
	decimal: decimal$23,
	thousands: thousands$23,
	grouping: grouping$23,
	currency: currency$23,
	numerals: numerals$19,
	default: arSS
});

var decimal$24 = "٫";
var thousands$24 = "٬";
var grouping$24 = [3];
var currency$24 = [""," ل.س."];
var numerals$20 = ["٠","١","٢","٣","٤","٥","٦","٧","٨","٩"];
var arSY = {
    decimal: decimal$24,
    thousands: thousands$24,
    grouping: grouping$24,
    currency: currency$24,
    numerals: numerals$20
};

var ar_SY = Object.freeze({
	decimal: decimal$24,
	thousands: thousands$24,
	grouping: grouping$24,
	currency: currency$24,
	numerals: numerals$20,
	default: arSY
});

var decimal$25 = "٫";
var thousands$25 = "٬";
var grouping$25 = [3];
var currency$25 = ["‏FCFA ",""];
var numerals$21 = ["٠","١","٢","٣","٤","٥","٦","٧","٨","٩"];
var arTD = {
    decimal: decimal$25,
    thousands: thousands$25,
    grouping: grouping$25,
    currency: currency$25,
    numerals: numerals$21
};

var ar_TD = Object.freeze({
	decimal: decimal$25,
	thousands: thousands$25,
	grouping: grouping$25,
	currency: currency$25,
	numerals: numerals$21,
	default: arTD
});

var decimal$26 = ",";
var thousands$26 = ".";
var grouping$26 = [3];
var currency$26 = ["د.ت. ",""];
var arTN = {
    decimal: decimal$26,
    thousands: thousands$26,
    grouping: grouping$26,
    currency: currency$26
};

var ar_TN = Object.freeze({
	decimal: decimal$26,
	thousands: thousands$26,
	grouping: grouping$26,
	currency: currency$26,
	default: arTN
});

var decimal$27 = "٫";
var thousands$27 = "٬";
var grouping$27 = [3];
var currency$27 = [""," ر.ى."];
var numerals$22 = ["٠","١","٢","٣","٤","٥","٦","٧","٨","٩"];
var arYE = {
    decimal: decimal$27,
    thousands: thousands$27,
    grouping: grouping$27,
    currency: currency$27,
    numerals: numerals$22
};

var ar_YE = Object.freeze({
	decimal: decimal$27,
	thousands: thousands$27,
	grouping: grouping$27,
	currency: currency$27,
	numerals: numerals$22,
	default: arYE
});

var decimal$28 = ",";
var thousands$28 = ".";
var grouping$28 = [3];
var currency$28 = [""," €"];
var caES$1 = {
    decimal: decimal$28,
    thousands: thousands$28,
    grouping: grouping$28,
    currency: currency$28
};

var ca_ES$1 = Object.freeze({
	decimal: decimal$28,
	thousands: thousands$28,
	grouping: grouping$28,
	currency: currency$28,
	default: caES$1
});

var decimal$29 = ",";
var thousands$29 = " ";
var grouping$29 = [3];
var currency$29 = [""," Kč"];
var csCZ$1 = {
    decimal: decimal$29,
    thousands: thousands$29,
    grouping: grouping$29,
    currency: currency$29
};

var cs_CZ$1 = Object.freeze({
	decimal: decimal$29,
	thousands: thousands$29,
	grouping: grouping$29,
	currency: currency$29,
	default: csCZ$1
});

var decimal$30 = ",";
var thousands$30 = "'";
var grouping$30 = [3];
var currency$30 = [""," CHF"];
var deCH$1 = {
    decimal: decimal$30,
    thousands: thousands$30,
    grouping: grouping$30,
    currency: currency$30
};

var de_CH$1 = Object.freeze({
	decimal: decimal$30,
	thousands: thousands$30,
	grouping: grouping$30,
	currency: currency$30,
	default: deCH$1
});

var decimal$31 = ",";
var thousands$31 = ".";
var grouping$31 = [3];
var currency$31 = [""," €"];
var deDE$1 = {
    decimal: decimal$31,
    thousands: thousands$31,
    grouping: grouping$31,
    currency: currency$31
};

var de_DE$1 = Object.freeze({
	decimal: decimal$31,
	thousands: thousands$31,
	grouping: grouping$31,
	currency: currency$31,
	default: deDE$1
});

var decimal$32 = ".";
var thousands$32 = ",";
var grouping$32 = [3];
var currency$32 = ["$",""];
var enCA$1 = {
    decimal: decimal$32,
    thousands: thousands$32,
    grouping: grouping$32,
    currency: currency$32
};

var en_CA$1 = Object.freeze({
	decimal: decimal$32,
	thousands: thousands$32,
	grouping: grouping$32,
	currency: currency$32,
	default: enCA$1
});

var decimal$33 = ".";
var thousands$33 = ",";
var grouping$33 = [3];
var currency$33 = ["£",""];
var enGB$1 = {
    decimal: decimal$33,
    thousands: thousands$33,
    grouping: grouping$33,
    currency: currency$33
};

var en_GB$1 = Object.freeze({
	decimal: decimal$33,
	thousands: thousands$33,
	grouping: grouping$33,
	currency: currency$33,
	default: enGB$1
});

var decimal$34 = ".";
var thousands$34 = ",";
var grouping$34 = [3,2,2,2,2,2,2,2,2,2];
var currency$34 = ["₹",""];
var enIN = {
    decimal: decimal$34,
    thousands: thousands$34,
    grouping: grouping$34,
    currency: currency$34
};

var en_IN = Object.freeze({
	decimal: decimal$34,
	thousands: thousands$34,
	grouping: grouping$34,
	currency: currency$34,
	default: enIN
});

var decimal$35 = ".";
var thousands$35 = ",";
var grouping$35 = [3];
var currency$35 = ["$",""];
var enUS$1 = {
    decimal: decimal$35,
    thousands: thousands$35,
    grouping: grouping$35,
    currency: currency$35
};

var en_US$1 = Object.freeze({
	decimal: decimal$35,
	thousands: thousands$35,
	grouping: grouping$35,
	currency: currency$35,
	default: enUS$1
});

var decimal$36 = ",";
var thousands$36 = ".";
var grouping$36 = [3];
var currency$36 = [""," €"];
var esES$1 = {
    decimal: decimal$36,
    thousands: thousands$36,
    grouping: grouping$36,
    currency: currency$36
};

var es_ES$1 = Object.freeze({
	decimal: decimal$36,
	thousands: thousands$36,
	grouping: grouping$36,
	currency: currency$36,
	default: esES$1
});

var decimal$37 = ".";
var thousands$37 = ",";
var grouping$37 = [3];
var currency$37 = ["$",""];
var esMX$1 = {
    decimal: decimal$37,
    thousands: thousands$37,
    grouping: grouping$37,
    currency: currency$37
};

var es_MX$1 = Object.freeze({
	decimal: decimal$37,
	thousands: thousands$37,
	grouping: grouping$37,
	currency: currency$37,
	default: esMX$1
});

var decimal$38 = ",";
var thousands$38 = " ";
var grouping$38 = [3];
var currency$38 = [""," €"];
var fiFI$1 = {
    decimal: decimal$38,
    thousands: thousands$38,
    grouping: grouping$38,
    currency: currency$38
};

var fi_FI$1 = Object.freeze({
	decimal: decimal$38,
	thousands: thousands$38,
	grouping: grouping$38,
	currency: currency$38,
	default: fiFI$1
});

var decimal$39 = ",";
var thousands$39 = " ";
var grouping$39 = [3];
var currency$39 = ["","$"];
var frCA$1 = {
    decimal: decimal$39,
    thousands: thousands$39,
    grouping: grouping$39,
    currency: currency$39
};

var fr_CA$1 = Object.freeze({
	decimal: decimal$39,
	thousands: thousands$39,
	grouping: grouping$39,
	currency: currency$39,
	default: frCA$1
});

var decimal$40 = ",";
var thousands$40 = " ";
var grouping$40 = [3];
var currency$40 = [""," €"];
var percent = " %";
var frFR$1 = {
    decimal: decimal$40,
    thousands: thousands$40,
    grouping: grouping$40,
    currency: currency$40,
    percent: percent
};

var fr_FR$1 = Object.freeze({
	decimal: decimal$40,
	thousands: thousands$40,
	grouping: grouping$40,
	currency: currency$40,
	percent: percent,
	default: frFR$1
});

var decimal$41 = ".";
var thousands$41 = ",";
var grouping$41 = [3];
var currency$41 = ["₪",""];
var heIL$1 = {
    decimal: decimal$41,
    thousands: thousands$41,
    grouping: grouping$41,
    currency: currency$41
};

var he_IL$1 = Object.freeze({
	decimal: decimal$41,
	thousands: thousands$41,
	grouping: grouping$41,
	currency: currency$41,
	default: heIL$1
});

var decimal$42 = ",";
var thousands$42 = " ";
var grouping$42 = [3];
var currency$42 = [""," Ft"];
var huHU$1 = {
    decimal: decimal$42,
    thousands: thousands$42,
    grouping: grouping$42,
    currency: currency$42
};

var hu_HU$1 = Object.freeze({
	decimal: decimal$42,
	thousands: thousands$42,
	grouping: grouping$42,
	currency: currency$42,
	default: huHU$1
});

var decimal$43 = ",";
var thousands$43 = ".";
var grouping$43 = [3];
var currency$43 = ["€",""];
var itIT$1 = {
    decimal: decimal$43,
    thousands: thousands$43,
    grouping: grouping$43,
    currency: currency$43
};

var it_IT$1 = Object.freeze({
	decimal: decimal$43,
	thousands: thousands$43,
	grouping: grouping$43,
	currency: currency$43,
	default: itIT$1
});

var decimal$44 = ".";
var thousands$44 = ",";
var grouping$44 = [3];
var currency$44 = ["","円"];
var jaJP$1 = {
    decimal: decimal$44,
    thousands: thousands$44,
    grouping: grouping$44,
    currency: currency$44
};

var ja_JP$1 = Object.freeze({
	decimal: decimal$44,
	thousands: thousands$44,
	grouping: grouping$44,
	currency: currency$44,
	default: jaJP$1
});

var decimal$45 = ".";
var thousands$45 = ",";
var grouping$45 = [3];
var currency$45 = ["₩",""];
var koKR$1 = {
    decimal: decimal$45,
    thousands: thousands$45,
    grouping: grouping$45,
    currency: currency$45
};

var ko_KR$1 = Object.freeze({
	decimal: decimal$45,
	thousands: thousands$45,
	grouping: grouping$45,
	currency: currency$45,
	default: koKR$1
});

var decimal$46 = ",";
var thousands$46 = ".";
var grouping$46 = [3];
var currency$46 = [""," ден."];
var mkMK$1 = {
    decimal: decimal$46,
    thousands: thousands$46,
    grouping: grouping$46,
    currency: currency$46
};

var mk_MK$1 = Object.freeze({
	decimal: decimal$46,
	thousands: thousands$46,
	grouping: grouping$46,
	currency: currency$46,
	default: mkMK$1
});

var decimal$47 = ",";
var thousands$47 = ".";
var grouping$47 = [3];
var currency$47 = ["€ ",""];
var nlNL$1 = {
    decimal: decimal$47,
    thousands: thousands$47,
    grouping: grouping$47,
    currency: currency$47
};

var nl_NL$1 = Object.freeze({
	decimal: decimal$47,
	thousands: thousands$47,
	grouping: grouping$47,
	currency: currency$47,
	default: nlNL$1
});

var decimal$48 = ",";
var thousands$48 = ".";
var grouping$48 = [3];
var currency$48 = ["","zł"];
var plPL$1 = {
    decimal: decimal$48,
    thousands: thousands$48,
    grouping: grouping$48,
    currency: currency$48
};

var pl_PL$1 = Object.freeze({
	decimal: decimal$48,
	thousands: thousands$48,
	grouping: grouping$48,
	currency: currency$48,
	default: plPL$1
});

var decimal$49 = ",";
var thousands$49 = ".";
var grouping$49 = [3];
var currency$49 = ["R$",""];
var ptBR$1 = {
    decimal: decimal$49,
    thousands: thousands$49,
    grouping: grouping$49,
    currency: currency$49
};

var pt_BR$1 = Object.freeze({
	decimal: decimal$49,
	thousands: thousands$49,
	grouping: grouping$49,
	currency: currency$49,
	default: ptBR$1
});

var decimal$50 = ",";
var thousands$50 = " ";
var grouping$50 = [3];
var currency$50 = [""," руб."];
var ruRU$1 = {
    decimal: decimal$50,
    thousands: thousands$50,
    grouping: grouping$50,
    currency: currency$50
};

var ru_RU$1 = Object.freeze({
	decimal: decimal$50,
	thousands: thousands$50,
	grouping: grouping$50,
	currency: currency$50,
	default: ruRU$1
});

var decimal$51 = ",";
var thousands$51 = " ";
var grouping$51 = [3];
var currency$51 = ["","SEK"];
var svSE$1 = {
    decimal: decimal$51,
    thousands: thousands$51,
    grouping: grouping$51,
    currency: currency$51
};

var sv_SE$1 = Object.freeze({
	decimal: decimal$51,
	thousands: thousands$51,
	grouping: grouping$51,
	currency: currency$51,
	default: svSE$1
});

var decimal$52 = ",";
var thousands$52 = " ";
var grouping$52 = [3];
var currency$52 = [""," ₴."];
var ukUA$1 = {
    decimal: decimal$52,
    thousands: thousands$52,
    grouping: grouping$52,
    currency: currency$52
};

var uk_UA$1 = Object.freeze({
	decimal: decimal$52,
	thousands: thousands$52,
	grouping: grouping$52,
	currency: currency$52,
	default: ukUA$1
});

var decimal$53 = ".";
var thousands$53 = ",";
var grouping$53 = [3];
var currency$53 = ["¥",""];
var zhCN$1 = {
    decimal: decimal$53,
    thousands: thousands$53,
    grouping: grouping$53,
    currency: currency$53
};

var zh_CN$1 = Object.freeze({
	decimal: decimal$53,
	thousands: thousands$53,
	grouping: grouping$53,
	currency: currency$53,
	default: zhCN$1
});

var lookup$2 = {
	ar_001: ar_001,
	ar_AE: ar_AE,
	ar_BH: ar_BH,
	ar_DJ: ar_DJ,
	ar_DZ: ar_DZ,
	ar_EG: ar_EG,
	ar_EH: ar_EH,
	ar_ER: ar_ER,
	ar_IL: ar_IL,
	ar_IQ: ar_IQ,
	ar_JO: ar_JO,
	ar_KM: ar_KM,
	ar_KW: ar_KW,
	ar_LB: ar_LB,
	ar_LY: ar_LY,
	ar_MA: ar_MA,
	ar_MR: ar_MR,
	ar_OM: ar_OM,
	ar_PS: ar_PS,
	ar_QA: ar_QA,
	ar_SA: ar_SA,
	ar_SD: ar_SD,
	ar_SO: ar_SO,
	ar_SS: ar_SS,
	ar_SY: ar_SY,
	ar_TD: ar_TD,
	ar_TN: ar_TN,
	ar_YE: ar_YE,
	ca_ES: ca_ES$1,
	cs_CZ: cs_CZ$1,
	de_CH: de_CH$1,
	de_DE: de_DE$1,
	en_CA: en_CA$1,
	en_GB: en_GB$1,
	en_IN: en_IN,
	en_US: en_US$1,
	es_ES: es_ES$1,
	es_MX: es_MX$1,
	fi_FI: fi_FI$1,
	fr_CA: fr_CA$1,
	fr_FR: fr_FR$1,
	he_IL: he_IL$1,
	hu_HU: hu_HU$1,
	it_IT: it_IT$1,
	ja_JP: ja_JP$1,
	ko_KR: ko_KR$1,
	mk_MK: mk_MK$1,
	nl_NL: nl_NL$1,
	pl_PL: pl_PL$1,
	pt_BR: pt_BR$1,
	ru_RU: ru_RU$1,
	sv_SE: sv_SE$1,
	uk_UA: uk_UA$1,
	zh_CN: zh_CN$1
};

var lookupMapping$1 = fill(lookup$2);
function units(iso) {
    var lang = languages(iso);
    for (var i = 0; i < lang.length; ++i) {
        var key = lang[i];
        var fmt = lookupMapping$1[key];
        if (fmt) return { d3: fmt, iso639: key.replace('_', '-') };
    }
    return { d3: lookup$2.en_US, iso639: 'en-US' };
}

export { version, time$27 as time, units, languages, name$1 as lookupISO639, lookup };
