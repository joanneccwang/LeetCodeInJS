/**
 * Link: https://leetcode.com/problems/move-zeroes/
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

/**
 * Time Complexity: possibly O(n^2), since splice takes O(n)
 */
var moveZeroes = function(nums) {
  const n = nums.length;
  for(i = n-1; i >= 0; i--) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
    }
  }
};