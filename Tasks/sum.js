'use strict';

const sum = function (array) {
  const sum = [0];
  for (const element of array) {
    let t = typeof element;
    if (t === 'number') {
      if (sum.length > 0) {
        const result = sum[sum.length - 1] + element;
        sum.push(result);
      }
    }
  }
  return sum[sum.length - 1];
};

module.exports = sum;
