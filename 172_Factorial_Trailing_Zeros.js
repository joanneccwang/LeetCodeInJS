/**
 * Link: https://leetcode.com/problems/factorial-trailing-zeroes/
 */

/**
 * @param {number} n
 * @return {number}
 */
/**
 * Time Complexity: O(n)?
 * Every (2, 5) factor pair gains one more trailing zero.
 * factor 5 appears less than 2, so counts of factor 5 is the result
 */
var trailingZeroes = function(n) {
  if (n === 0) return 0;

  function getCountsOfFive(num) {
    let count = 0;
    while(num % 5 === 0) {
      count += 1;
      num = num / 5;
    }
    return count;
  }
  
  let result = 0;
  for (let i = 1; i <= n; i += 1) {
    result += getCountsOfFive(i);
  }
  return result;
};

console.log(trailingZeroes(3)); // 0
console.log(trailingZeroes(5)); // 1
console.log(trailingZeroes(0)); // 0
console.log(trailingZeroes(10)); // 2