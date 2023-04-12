const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
   // Looping until n is a single digit
   while (n > 9) {
    // Convert n to a string and split it into an array of digits
    // Use reduce to add up the integer values of the digits
        n = n.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
    }
    return n;
}

module.exports = {
  getSumOfDigits
};
