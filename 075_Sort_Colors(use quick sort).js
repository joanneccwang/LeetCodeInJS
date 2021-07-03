/**
 * Link: https://leetcode.com/problems/sort-colors/
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
/**
 * Time Complexity: O(nlogn)
 */
var sortColors = function(nums) {
  
  function swap(nums, idx1, idx2) {
    let temp = nums[idx1];
    nums[idx1] = nums[idx2];
    nums[idx2] = temp;
  }
  function pivotHelper(nums, start, end) {
    const target = nums[start];
    let swapIdx = start;
    for (let i = start + 1; i <= end; i++) {
      if (nums[i] <= target) {
        swapIdx += 1;
        swap(nums, swapIdx, i);
      }
    }
    // swap start with swapIdx
    swap(nums, start, swapIdx);
    return swapIdx; 
  }

  
  function quickSort(nums, start, end) {
    if (start >= end) return;
    const sortedIdx = pivotHelper(nums, start, end);
    quickSort(nums, start, sortedIdx - 1);
    quickSort(nums, sortedIdx + 1, end);
  }

  quickSort(nums, 0, nums.length - 1);
  console.log(nums);
};

sortColors([0, 2, 2, 1, 0, 1]); // [0,0,1,1,2,2]
sortColors([2,0,1]); // [0,1,2]
sortColors([0]) // [0]