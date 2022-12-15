"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.upperCasedStringToFirstLetterUppercased = void 0;
const upperCasedStringToFirstLetterUppercased = (string) => {
    let newString = "";
    for (let i = 0; i < string.length; i++) {
        if (i === 0) {
            newString += string[i].toUpperCase();
        }
        else {
            newString += string[i];
        }
    }
    return newString;
};
exports.upperCasedStringToFirstLetterUppercased = upperCasedStringToFirstLetterUppercased;
