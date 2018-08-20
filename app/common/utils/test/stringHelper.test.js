import {
  isSpecialCharacter,
  isNumericAndLetterCharacter,
  convertStringToCamelize,
} from '../stringHelper';

describe('stringHelper', () => {
  test('isSpecialCharacter', () => {
    expect(isSpecialCharacter('12345qwer')).toBe(false);
    expect(isSpecialCharacter('#$@', '')).toBe(true);
  });

  test('isNumericAndLetterCharacter', () => {
    expect(isNumericAndLetterCharacter('!234354545')).toBe(false);
    expect(isNumericAndLetterCharacter('asdasf1212')).toBe(true);
  });

  test('convertStringToCamelize', () => {
    expect(convertStringToCamelize('KIOSK')).toBe('Kiosk');
  });
});
