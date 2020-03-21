/**
 * Link: https://leetcode.com/problems/rotate-array/
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var rotate = function(nums, k) {
  function reverse(nums, start, end) {
    for (let i = 0; i < (end - start)/2; i++) {
      let temp = nums[start + i];
      nums[start + i] = nums[end - i];
      nums[end - i] = temp;
    }
  }
  k = k % nums.length;   // prevent full rotate
  nums.reverse();
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
};