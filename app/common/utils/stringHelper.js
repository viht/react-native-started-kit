/* eslint no-useless-escape: 0 */

export const isSpecialCharacter = str => (
  /[~`!#$%@\^&*+=\-\[\]\\';,/{}()|\\":<>\?]/g.test(str)
);

export const isNumericAndLetterCharacter = str => (
  str === '' || /^[0-9a-zA-Z]+$/g.test(str)
);

export const convertStringToCamelize = str => (
  str.replace(/(?:^\w|[A-Z]|\b\w)/g, (letter, index) => (index !== 0 ? letter.toLowerCase() : letter.toUpperCase())).replace(/\s+/g, '')
);

const guid = () => (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
export const getGUID = () => `${guid()}${guid()}-${guid()}-4${guid().substr(0, 3)}-${guid()}-${guid()}${guid()}${guid()}`.toLowerCase();

export default {
  isSpecialCharacter,
  isNumericAndLetterCharacter,
  convertStringToCamelize,
};
