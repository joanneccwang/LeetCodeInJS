/** Link: https://leetcode.com/problems/house-robber/ */
/**
 * @param {number[]} nums
 * @return {number}
 */
// rob Max(rob(n-2) + nums[n], rob(n-1))
var rob = function(nums, robbed = []) {
  let houses = nums.length;
  if (robbed[houses] !== undefined) return robbed[houses];
  
  if (nums.length === 1) {
    robbed[1] = nums[0];
    return nums[0];
  }
  if (nums.length === 2) {
    robbed[2] = Math.max(nums[0], nums[1]);
    return Math.max(nums[0], nums[1]);
  }
  
  let result = Math.max(
    rob(nums.slice(0, houses - 2), robbed) + nums[houses - 1],
    rob(nums.slice(0, houses - 1), robbed)
  );
  robbed[houses] = result;
  return result;
};