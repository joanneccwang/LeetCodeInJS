/**
 * Link:　https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
var removeDuplicates = function(nums) {
  var i = 0;
  nums.forEach((num, idx) => {
    if (nums[i] !== num) {
      i += 1;
      nums[i] = num;
    }
  })
  
  return i + 1;
};

const result = removeDuplicates([1, 1, 2]);
console.log(result);