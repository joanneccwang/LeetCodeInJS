/** Link: https://leetcode.com/problems/missing-number/ */

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  const n = nums.length;
  let total = (1 + n) * n / 2;
  nums.forEach(num => {
    total -= num;
  });
  
  return total;
};