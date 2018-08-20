import moment from 'moment';
import {
  formatDateTimeByString,
  getDateFromString,
} from '../dateHelper';
describe('dateHelper', () => {
  test('formatDateTimeByString', () => {
    // success case
    expect(formatDateTimeByString(
      new Date('2018-01-20').toUTCString(),
      'Y',
    )).toBe('2018');
    // test fail case
    expect(formatDateTimeByString('', '')).toBe('');
  });
  test('getDateFromString', () => {
    // success case
    expect(getDateFromString('2018-07-24T00:00:00')).toBe(moment(new Date()));
  });
});