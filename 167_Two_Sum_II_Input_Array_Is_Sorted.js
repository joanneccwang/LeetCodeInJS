/**
 * Link: https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
 */

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
/**
 * Two Pointer
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
var twoSum = function(numbers, target) {
  let start = 0;
  let end = numbers.length - 1;

  while (start < end) {
    const sum = numbers[start] + numbers[end];
    if (sum === target) return [start + 1, end + 1];
    else if (sum < target) start += 1;
    else if (sum > target) end -= 1;
  }
};

console.log(twoSum([2, 7, 11, 15], 9)) // [1, 2]
console.log(twoSum([2, 3, 4], 6)) // [1, 3]