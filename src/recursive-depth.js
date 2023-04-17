const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    // Base case: if the array is empty, return 1
    if (arr.length === 0) {
      return 1;
    }

    // Recursive case: if the array contains arrays, calculate their depth
    let depth = 0;
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        depth = Math.max(depth, this.calculateDepth(arr[i]));
      }
    }

    // Return the maximum depth + 1
    return depth + 1;
  }
}

module.exports = {
  DepthCalculator
};
