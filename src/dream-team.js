const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) return false; // Check if members is an array, if not return false
  return members
    .filter(member => typeof member === 'string') // Filter out non-string members
    .map(member => member.trim()[0].toUpperCase()) // Map to first character of each member name in upper case
    .sort() // Sort alphabetically
    .join(''); // Join into a string
}

module.exports = {
  createDreamTeam
};
