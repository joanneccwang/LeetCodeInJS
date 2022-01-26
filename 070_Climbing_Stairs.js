/** Link: https://leetcode.com/problems/climbing-stairs/ */
/**
 * @param {number} n
 * @return {number}
 */
const memo = {
  1: 1,
  2: 2,
};
var climbStairs = function(n) {
  if (memo[n] !== undefined) return memo[n];
  // climb to 1 step before + climb to 2 step before
  let result =  climbStairs(n-1) + climbStairs(n-2);
  memo[n] = result;
  return result;
};