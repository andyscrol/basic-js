const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // Filter out -1 values and sort the remaining values in ascending order
  let sortedHeights = arr.filter(x => x !== -1).sort((a, b) => a - b);
  // Use map to create a new array where -1 values are preserved
  // and other values are replaced with the first value from the sortedHeights array
  return arr.map(x => x === -1 ? -1 : sortedHeights.shift());
}

module.exports = {
  sortByHeight
};
