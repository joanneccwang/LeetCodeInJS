/**
 * Link:　https://leetcode.com/problems/fizz-buzz/submissions/
 */

/**
 * @param {number} n
 * @return {string[]}
 */
/**
 * Time Complexity: O(n)
 * Space Complexity: O(1) -> 除了 return 以外不占其他空間
 */
var fizzBuzz = function(n) {
  const result = [];
  for(var i = 1; i <= n; i++) {
    if ((i % (3 * 5)) === 0) {
      result.push('FizzBuzz');
    } else if ((i % 5) === 0) {
      result.push('Buzz');
    } else if ((i % 3) === 0) {
      result.push('Fizz');
    } else {
      result.push(i.toString())
    }
  }
  return result;
};

console.log(fizzBuzz(5));