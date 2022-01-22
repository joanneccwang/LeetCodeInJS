/**
 *  Link: https://leetcode.com/problems/kth-largest-element-in-an-array/
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */s
var findKthLargest = function(nums, k) {
  const sorted = nums.sort((a, b) => {
    return b - a;
  });
  return sorted[k - 1];
};