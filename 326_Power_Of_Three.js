/**
 * Link:　https://leetcode.com/problems/power-of-three/
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
  if (n === 0) return false;
  if (n === 1) return true;
  if (Number.isInteger(n / 3)) {
    return isPowerOfThree(n / 3);
  } else {
    return false;
  }
};

console.log(isPowerOfThree(3));
console.log(isPowerOfThree(9));
console.log(isPowerOfThree(0));
console.log(isPowerOfThree(36));