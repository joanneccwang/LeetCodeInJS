/**
 * Link:　https://leetcode.com/problems/intersection-of-two-arrays-ii/
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
var intersect = function(nums1, nums2) {
  const map = {};
  nums1.forEach(num => {
    if (!map[num]) map[num] = 1;
    else map[num] += 1;
  })

  const result = [];
  nums2.forEach(num => {
    if (map[num] && map[num] !== 0) {
      result.push(num);
      map[num] -= 1;
    }
  })

  return result;
};

console.log(intersect([1,2,2,1], [2,2])); // [2,2]
console.log(intersect([4,9,5], [9,4,9,8,4])); // [4,9]