'use strict';

const removedKeys = (dictionary, ...excludedKeys) => {
  const result = {};
  const keys = Object.keys(dictionary);
  for (const key of keys) {
    const value = dictionary[key];
    if (!excludedKeys.includes(key)) {
      result[key] = value;
    }
  }
  return result;
};

module.exports = removedKeys;
