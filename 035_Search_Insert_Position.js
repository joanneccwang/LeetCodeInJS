/**
 * Link:　https://leetcode.com/problems/two-sum/
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
/**
 * Time Complexity: O(logn)
 * Space Complexity: O(1)
 */
var searchInsert = function(nums, target) {
  let start = 0;
  let end = nums.length - 1;
  
  while(start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] > target) {
      end = mid - 1;
    } else if (nums[mid] < target) {
      start = mid + 1;
    } else if (nums[mid] === target) {
      return mid;
    }
  }

  // If not exist in nums, return the insert position
  return start;
}

const nums = [1, 3, 5, 6];
console.log(searchInsert(nums, 5)) // 2
console.log(searchInsert(nums, 2)) // 1
console.log(searchInsert(nums, 7)) // 4
console.log(searchInsert(nums, 0)) // 0
console.log(searchInsert([1], 0)) // 0