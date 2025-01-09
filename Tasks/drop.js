'use strict';

const removedKeys = (dictionary, ...listedKeys) => {
  const keys = Object.keys(dictionary);
  keys.forEach((x) => {
    if (listedKeys.includes(x)) delete dictionary[x];
  });
  return dictionary;
};

module.exports = removedKeys;
