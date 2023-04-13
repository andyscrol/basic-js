const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = n.toString();  // Convert the input number to a string
  let max = 0;  // Initialize the max variable to store the maximum number

  // Loop through each character in the string
  for (let i = 0; i < str.length; i++) {
    // Create a new string by removing the current character
    const newStr = str.slice(0, i) + str.slice(i + 1);

    // Convert the new string to a number and update the max variable if it's greater than the current max
    max = Math.max(max, parseInt(newStr));
  }


  return max;
}

module.exports = {
  deleteDigit
};
