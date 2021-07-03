/**
 * Link:　https://leetcode.com/problems/contains-duplicate/
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */

/**
 * Two Pointer
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
var containsDuplicate = function(nums) {
  const appeared = {};
  let containsDuplicate = false;
  nums.forEach(num => {
    if (!appeared[num]) appeared[num] = 1;
    else containsDuplicate = true;
  });
  return containsDuplicate;
};