'use strict';

const removedKeys = (dictionary, ...listedKeys) => {
  const result = {};
  const keys = Object.keys(dictionary);
  for (const key of keys) {
    const value = dictionary[key];
    if (!listedKeys.includes(key)) {
      result[key] = value;
    }
  }
  return result;
};

module.exports = removedKeys;
