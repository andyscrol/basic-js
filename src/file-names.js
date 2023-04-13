const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const nameCounts = {}; // Create an empty object to store the count of each name

  const result = [];   // Create an empty array to store the result

  // Loop through each name in the input array
  names.forEach(name => {
    // Check if the name is already in the result array
    if (result.includes(name)) {
      // If it is, increment the count for that name and add the renamed version to the result array
      nameCounts[name] = (nameCounts[name] || 0) + 1;
      result.push(`${name}(${nameCounts[name]})`);
    } else {
      // Otherwise add the original name to the result array
      result.push(name);
    }
  });

  return result;
}

module.exports = {
  renameFiles
};
