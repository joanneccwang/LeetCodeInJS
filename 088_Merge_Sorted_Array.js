/**
 * Link: https://leetcode.com/problems/merge-sorted-array/
 */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  // 從後往前排，先排比較大的數字
  let i = m - 1;
  let j = n - 1;
  let endIdx = nums1.length - 1;
  while (i >= 0 && j >= 0) {
    if (nums1[i] >= nums2[j]) { 
      nums1[endIdx] = nums1[i];
      i -= 1;
    } else {
      nums1[endIdx] = nums2[j];
      j -= 1;
    }
    endIdx -= 1;
  }
  while (j >= 0) {
    nums1[endIdx] = nums2[j];
    j -= 1;
    endIdx -= 1;
  }
};


console.log(merge([0], 0, [1], 1));