export const upperCasedStringToFirstLetterUppercased = (
  string: string
): string => {
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    if (i === 0) {
      newString += string[i].toUpperCase();
    } else {
      newString += string[i];
    }
  }
  return newString;
};
