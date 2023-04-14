const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  // Find the last occurrence of the '@' character in the email address
  const atIndex = email.lastIndexOf('@');
  // Return the substring after the '@' character itself
  return email.substring(atIndex + 1);
}

module.exports = {
  getEmailDomain
};
