/**
 * Link: https://leetcode.com/problems/reverse-integer/
 */

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const isNegative = x < 0
  const numString = Math.abs(x).toString();
  const reverse = numString.split('').reverse();
  const reverseInt = parseInt(reverse.join(''), 10);
  if (reverseInt > Math.pow(2, 31)) return 0

  return isNegative ? -reverseInt : reverseInt;
};