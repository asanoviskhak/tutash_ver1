import { LANGUAGES } from "../constants/languages";

export const getLanguage = (language) => {
  const languageCode = language.split("-")[0];
  return languageCode;
};

export const getListOfLanguages = () => {
  return Object.values(LANGUAGES);
};
