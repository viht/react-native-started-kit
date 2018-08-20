/* eslint no-useless-escape: 0 */

export const isEmpty = str => (!str || str.length === 0 || /^\s*$/.test(str) || !str.trim());

export default {
  isEmpty,
};
