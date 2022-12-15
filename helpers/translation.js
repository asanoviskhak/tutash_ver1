"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getListOfLanguages = exports.getLanguage = void 0;
const languages_1 = require("../constants/languages");
const getLanguage = (language) => {
    const languageCode = language.split("-")[0];
    return languageCode;
};
exports.getLanguage = getLanguage;
const getListOfLanguages = () => {
    return Object.values(languages_1.LANGUAGES);
};
exports.getListOfLanguages = getListOfLanguages;
