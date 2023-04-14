const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(inputString) {
  // Split the input string into groups using the hyphen as a separator
  const groups = inputString.split('-');
  // Check if there are exactly 6 groups
  if (groups.length !== 6) {
    return false;
  }
  // Define a string of valid hexadecimal digits
  const hexDigits = '0123456789ABCDEF';
  // Iterate over the groups
  for (const group of groups) {
    // Check if the group has exactly 2 characters
    if (group.length !== 2) {
      return false;
    }
    // Check if both characters are valid hexadecimal digits
    for (const char of group) {
      if (!hexDigits.includes(char)) {
        return false;
      }
    }
  }
  // If all checks passed, return true
  return true;
}
module.exports = {
  isMAC48Address
};
