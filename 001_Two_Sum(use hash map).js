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
  const map = {};
  let result = [];
  nums.forEach((num, idx) => {
    if(map[num] !== undefined) {
      result = [idx, map[num]];
    }
    else map[target - num] = idx;
  })
  return result;
};