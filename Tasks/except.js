'use strict';

const removedKeys = (dictionary, ...excludedKeys) => {
  const keys = Object.keys(dictionary);
  for (const key of keys) {
    if (excludedKeys.includes(key)) delete dictionary[key];
  };
  return dictionary;
};

module.exports = removedKeys;
