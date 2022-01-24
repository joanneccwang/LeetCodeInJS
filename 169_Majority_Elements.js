/** Link: https://leetcode.com/problems/majority-element/ */
/** Use hash: O(n) Space, O(n) Time */
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const map = {};
  const length = nums.length;
  let result;
  for(let i = 0; i < nums.length; i+=1) {
    if (!map[nums[i]]) map[nums[i]] = 1;
    else {
      map[nums[i]] += 1;
    }
    if (map[nums[i]] > (length/2)) {
      result = nums[i];
      break;
    }
  }
  return result;
};