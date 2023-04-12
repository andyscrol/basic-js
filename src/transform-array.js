const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!"); // Check if arr is an array
  let result = []; // Initialize result array
  for (let i = 0; i < arr.length; i++) { // Loop through each element in arr
      if (arr[i] === '--discard-next') { // If current element is '--discard-next'
          i++; // Increment i to skip the next element
      } else if (arr[i] === '--discard-prev') { // If current element is '--discard-prev'
          if (result.length && arr[i - 2] !== '--discard-next') result.pop(); // Remove the previous element from result array if it exists and was not discarded by '--discard-next'
      } else if (arr[i] === '--double-next') { // If current element is '--double-next'
          if (i + 1 < arr.length) result.push(arr[i + 1]); // Add the next element to result array if it exists
      } else if (arr[i] === '--double-prev') { // If current element is '--double-prev'
          if (i - 1 >= 0 && arr[i - 2] !== '--discard-next') result.push(arr[i - 1]); // Add the previous element to result array if it exists and was not discarded by '--discard-next'
      } else { // If current element is not a control sequence
          result.push(arr[i]); // Add current element to result array
      }
  }
  return result;
}

module.exports = {
  transform
};
