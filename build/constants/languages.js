"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ALLOWED_LANGUAGES_TO_FULL_LANGUAGE_NAMES = exports.ALLOWED_LANGUAGES_TO_FLAG = exports.ALLOWED_LANGUAGES = exports.FULL_LANGUAGE_NAMES = exports.LANGUAGES_TO_FLAG = exports.LANGUAGES = void 0;
require("../locales");
exports.LANGUAGES = {
    ENGLISH: "en",
    GERMAN: "de",
    FRENCH: "fr",
    SPANISH: "es",
    ITALIAN: "it",
    PORTUGUESE: "pt",
    RUSSIAN: "ru",
    JAPANESE: "ja",
    KOREAN: "ko",
    CHINESE: "zh",
    HINDI: "hi",
    ARABIC: "ar",
    TURKISH: "tr",
    POLISH: "pl",
    KYRGYZ: "ky",
    UZBEK: "uz",
    TAJIK: "tg",
    KAZAKH: "kz",
};
exports.LANGUAGES_TO_FLAG = {
    [exports.LANGUAGES.ENGLISH]: "🇬🇧",
    [exports.LANGUAGES.GERMAN]: "🇩🇪",
    [exports.LANGUAGES.FRENCH]: "🇫🇷",
    [exports.LANGUAGES.SPANISH]: "🇪🇸",
    [exports.LANGUAGES.ITALIAN]: "🇮🇹",
    [exports.LANGUAGES.PORTUGUESE]: "🇵🇹",
    [exports.LANGUAGES.RUSSIAN]: "🇷🇺",
    [exports.LANGUAGES.JAPANESE]: "🇯🇵",
    [exports.LANGUAGES.KOREAN]: "🇰🇷",
    [exports.LANGUAGES.CHINESE]: "🇨🇳",
    [exports.LANGUAGES.HINDI]: "🇮🇳",
    [exports.LANGUAGES.ARABIC]: "🇸🇦",
    [exports.LANGUAGES.TURKISH]: "🇹🇷",
    [exports.LANGUAGES.POLISH]: "🇵🇱",
    [exports.LANGUAGES.KYRGYZ]: "🇰🇬",
    [exports.LANGUAGES.UZBEK]: "🇺🇿",
    [exports.LANGUAGES.TAJIK]: "🇹🇯",
    [exports.LANGUAGES.KAZAKH]: "🇰🇿",
};
exports.FULL_LANGUAGE_NAMES = {
    [exports.LANGUAGES.ENGLISH]: "English",
    [exports.LANGUAGES.GERMAN]: "Deutsch",
    [exports.LANGUAGES.FRENCH]: "Français",
    [exports.LANGUAGES.SPANISH]: "Español",
    [exports.LANGUAGES.ITALIAN]: "Italiano",
    [exports.LANGUAGES.PORTUGUESE]: "Português",
    [exports.LANGUAGES.RUSSIAN]: "Русский",
    [exports.LANGUAGES.JAPANESE]: "日本語",
    [exports.LANGUAGES.KOREAN]: "한국어",
    [exports.LANGUAGES.CHINESE]: "中文",
    [exports.LANGUAGES.HINDI]: "हिन्दी",
    [exports.LANGUAGES.ARABIC]: "العربية",
    [exports.LANGUAGES.TURKISH]: "Türkçe",
    [exports.LANGUAGES.POLISH]: "Polski",
    [exports.LANGUAGES.KYRGYZ]: "Кыргызча",
    [exports.LANGUAGES.UZBEK]: "O'zbekcha",
    [exports.LANGUAGES.TAJIK]: "Тоҷикӣ",
    [exports.LANGUAGES.KAZAKH]: "Қазақша",
};
exports.ALLOWED_LANGUAGES = [
    exports.LANGUAGES.ENGLISH,
    exports.LANGUAGES.KYRGYZ,
    exports.LANGUAGES.UZBEK,
    exports.LANGUAGES.RUSSIAN,
];
exports.ALLOWED_LANGUAGES_TO_FLAG = exports.ALLOWED_LANGUAGES.reduce((acc, language) => {
    acc[language] = exports.LANGUAGES_TO_FLAG[language];
    return acc;
}, {});
exports.ALLOWED_LANGUAGES_TO_FULL_LANGUAGE_NAMES = exports.ALLOWED_LANGUAGES.reduce((acc, language) => {
    acc[language] = exports.FULL_LANGUAGE_NAMES[language];
    return acc;
}, {});
