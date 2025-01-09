'use strict';

const intersection = (object1, object2) => {
  const result = {};
  const firstKeys = Object.keys(object1);
  for (const key of firstKeys) {
    if (object1[key] === object2[key]) {
      result[key] = object1[key];
    }
  }
  return result;
};

module.exports = intersection;
