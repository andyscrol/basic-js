const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  // Create an empty object to store the DNS stats
  const stats = {};
  // Loop through each domain in the array
  for (let i = 0; i < domains.length; i++) {
    // Split the domain into its parts and reverse the order
    const domainParts = domains[i].split('.').reverse();
    // Create an empty string to build each subdomain
    let currentDomain = '';
    // Loop through each part of the domain
    for (let j = 0; j < domainParts.length; j++) {
      // Add the current part to the subdomain string
      currentDomain += `.${domainParts[j]}`;
      // Update the stats object with the count of the current subdomain
      stats[currentDomain] = (stats[currentDomain] || 0) + 1;
    }
  }
  // Return the stats object
  return stats;
}

module.exports = {
  getDNSStats
};
