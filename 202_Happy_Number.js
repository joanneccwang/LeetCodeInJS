/**
 * Link: https://leetcode.com/problems/happy-number/
 */

 /**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  var appeared = {};
  function isHappyHelper(n) {
    const digits = n.toString().split('');

    if (appeared[n]) return false;
    else appeared[n] = true;

    const sum =  digits.reduce((sum, next) => sum += (next * next), 0)
    if (sum === 1) return true;
    else return isHappyHelper(sum);
  }

  return isHappyHelper(n)
};

console.log(isHappy(19)); // true
console.log(isHappy(2));  // false