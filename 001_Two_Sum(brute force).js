/**
 * Link:　https://leetcode.com/problems/two-sum/
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/**
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 */
var twoSum = function(nums, target) {
  const n = nums.length;
  for (let i = 0; i < (n-1); i++) {
    for (let j = (i+1); j < n; j++) {
      if ((nums[i] + nums[j]) === target){
        return [i, j];
      }
    }
  }
};