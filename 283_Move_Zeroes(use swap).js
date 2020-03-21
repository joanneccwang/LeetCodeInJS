/**
 * Link: https://leetcode.com/problems/move-zeroes/
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

/** 
 * Time Complexity: O(n)
 */
var moveZeroes = function(nums) {
  const n = nums.length;
  let firstZeroIdx = -1;

  for(i = 0; i < n; i++) {
    if (firstZeroIdx < 0 && nums[i] === 0) {
      // Encounter the first zero, store its index
      firstZeroIdx = i;
    } else if (firstZeroIdx >= 0 && nums[i] !== 0) {
      // Swap current number with first zero, and then update first zero's index
      let temp = nums[firstZeroIdx];
      nums[firstZeroIdx] = nums[i];
      nums[i] = temp;
      firstZeroIdx = firstZeroIdx + 1;
    }
  }
};