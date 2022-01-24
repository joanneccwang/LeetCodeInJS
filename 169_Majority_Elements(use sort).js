/** Link: https://leetcode.com/problems/majority-element/ */
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const midIdx = Math.floor(nums.length / 2);
  return nums.sort((a,b) => b - a)[midIdx];
};