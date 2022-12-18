import { LANGUAGES } from "../constants/languages";

export const getLanguage = (language: string): string => {
  const languageCode = language.split("-")[0];
  return languageCode;
};

export const getListOfLanguages = (): string[] => {
  return Object.values(LANGUAGES);
};
