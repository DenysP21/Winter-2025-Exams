'use strict';

const removedKeys = (dictionary, ...excludedKeys) => {
  const objectKeys = Object.keys(dictionary);
  objectKeys.forEach((key) => {
    if (excludedKeys.includes(key)) delete dictionary[key];
  });
  return dictionary;
};

module.exports = removedKeys;
