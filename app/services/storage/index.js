import { AsyncStorage } from 'react-native';


/**
 * Find an item from Storage by key
 * @param {String} key
 * @returns {Promise} return a Promise
 */
const get = async (key) => {
  try {
    const result = await AsyncStorage.getItem(key);
    if (!result) {
      return null;
    }
    return JSON.parse(result);
  } catch (error) {
    return null;
  }
};

/**
 * Save an item to Storage by key
 * @param {String} key
 * @param {any} data
 * @returns {Promise} return a Promise
 */
const save = (key, value) => AsyncStorage.setItem(key, JSON.stringify(value));

const update = (key, value) => get(key).then((item) => {
  // if current value is a string, then overwrite; else merge objects
  const v = (typeof value === 'string') ? value : Object.assign({}, item, value);
  return AsyncStorage.setItem(key, JSON.stringify(v));
});

const deleteItem = key => AsyncStorage.removeItem(key);

const LocalStorage = {
  get,
  save,
  update,
  delete: deleteItem,
};

export default LocalStorage;
