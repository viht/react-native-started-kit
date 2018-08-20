import moment from 'moment';

/**
 * Format datetime
 * @param {String|Date} dateTime
 * @param {String} formatString
 * @returns {String} formatted datetime string. If got error, return an empty string.
 */
export const formatDateTimeByString = (dateTime, formatString) => {
  let result;
  try {
    result = moment(dateTime).format(formatString);
  } catch (error) {
    result = '';
  }
  return result === 'Invalid date' ? '' : result;
};

export const getDateFromString = (dateString) => {
  let result;
  try {
    result = moment(dateString);
  } catch (error) {
    console.log(error);
  }
  return result;
};

export const checkIsPassedDateTime = (dateString) => {
  let result;
  try {
    const current = moment(new Date());
    result = moment(dateString) < current;
  } catch (error) {
    console.log(error);
  }
  return result;
};

export default {
  formatDateTimeByString,
  getDateFromString,
};
