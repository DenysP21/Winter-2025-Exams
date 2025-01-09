'use strict';

const intersection = function intersection(object1, object2) {
  const firstKeys = Object.keys(object1);
  for (const key of firstKeys) {
    if (object1[key] === object2[key]) {
      object2[key] = object1[key];
    } else {
      delete object1[key];
    }
  }
  return object1;
};

module.exports = intersection;
