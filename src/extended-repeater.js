const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  // Set default values for options
  const repeatTimes = options.repeatTimes || 1;
  const separator = options.separator || '+';
  const addition = (options.addition !== undefined) ? String(options.addition) : '';
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const additionSeparator = options.additionSeparator || '|';

  // Create the addition string by repeating the addition and joining with the additionSeparator
  const fullAddition = new Array(additionRepeatTimes).fill(addition).join(additionSeparator);

  // Create the final string by repeating the str with the fullAddition and joining with the separator
  return new Array(repeatTimes).fill(str + fullAddition).join(separator);
}

module.exports = {
  repeater
};
