export const LANGUAGES = {
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

export const LANGUAGES_TO_FLAG = {
  [LANGUAGES.ENGLISH]: "🇬🇧",
  [LANGUAGES.GERMAN]: "🇩🇪",
  [LANGUAGES.FRENCH]: "🇫🇷",
  [LANGUAGES.SPANISH]: "🇪🇸",
  [LANGUAGES.ITALIAN]: "🇮🇹",
  [LANGUAGES.PORTUGUESE]: "🇵🇹",
  [LANGUAGES.RUSSIAN]: "🇷🇺",
  [LANGUAGES.JAPANESE]: "🇯🇵",
  [LANGUAGES.KOREAN]: "🇰🇷",
  [LANGUAGES.CHINESE]: "🇨🇳",
  [LANGUAGES.HINDI]: "🇮🇳",
  [LANGUAGES.ARABIC]: "🇸🇦",
  [LANGUAGES.TURKISH]: "🇹🇷",
  [LANGUAGES.POLISH]: "🇵🇱",
  [LANGUAGES.KYRGYZ]: "🇰🇬",
  [LANGUAGES.UZBEK]: "🇺🇿",
  [LANGUAGES.TAJIK]: "🇹🇯",
  [LANGUAGES.KAZAKH]: "🇰🇿",
};

export const FULL_LANGUAGE_NAMES = {
  [LANGUAGES.ENGLISH]: "English",
  [LANGUAGES.GERMAN]: "Deutsch",
  [LANGUAGES.FRENCH]: "Français",
  [LANGUAGES.SPANISH]: "Español",
  [LANGUAGES.ITALIAN]: "Italiano",
  [LANGUAGES.PORTUGUESE]: "Português",
  [LANGUAGES.RUSSIAN]: "Русский",
  [LANGUAGES.JAPANESE]: "日本語",
  [LANGUAGES.KOREAN]: "한국어",
  [LANGUAGES.CHINESE]: "中文",
  [LANGUAGES.HINDI]: "हिन्दी",
  [LANGUAGES.ARABIC]: "العربية",
  [LANGUAGES.TURKISH]: "Türkçe",
  [LANGUAGES.POLISH]: "Polski",
  [LANGUAGES.KYRGYZ]: "Кыргыз",
  [LANGUAGES.UZBEK]: "O'zbek",
  [LANGUAGES.TAJIK]: "Тоҷикӣ",
  [LANGUAGES.KAZAKH]: "Қазақша",
};

export const ALLOWED_LANGUAGES = [
  LANGUAGES.ENGLISH,
  LANGUAGES.KYRGYZ,
  LANGUAGES.RUSSIAN,
];

export const ALLOWED_LANGUAGES_TO_FLAG = ALLOWED_LANGUAGES.reduce(
  (acc, language) => {
    acc[language] = LANGUAGES_TO_FLAG[language];
    return acc;
  },
  {}
);

export const ALLOWED_LANGUAGES_TO_FULL_LANGUAGE_NAMES =
  ALLOWED_LANGUAGES.reduce((acc, language) => {
    acc[language] = FULL_LANGUAGE_NAMES[language];
    return acc;
  }, {});
