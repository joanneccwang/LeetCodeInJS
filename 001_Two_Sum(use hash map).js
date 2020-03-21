/**
 * Link:　https://leetcode.com/problems/two-sum/
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
var twoSum = function(nums, target) {
  const n = nums.length;
  const complementMap = {};
  for (let i = 0; i < n; i++) {
    if (complementMap[nums[i]] !== undefined) {
      // If current number is someone's complement
      return [complementMap[nums[i]], i];
    } else {
      // Store current number's complement
      complement = target - nums[i];
      complementMap[complement] = i;
    }
  }
};