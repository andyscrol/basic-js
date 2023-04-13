const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // Initialize empty string for encoded output and a counter for repeated characters.
  let encoded = "";
  let count = 1;

  // Loop through each character in the input string.
  for (let i = 0; i < str.length; i++) {
    // If the current character is the same as the next character, increment the counter.
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      // If the current character is different from the next character, add the encoded version to the output string.
      // If the counter is greater than 1, add the count before the character, otherwise just add the character.
      encoded += (count > 1 ? count : "") + str[i];
      // Reset the counter to 1 for the next character.
      count = 1;
    }
  }

  return encoded;
}

module.exports = {
  encodeLine
};
