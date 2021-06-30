/**
 * Link: https://leetcode.com/problems/find-peak-element/solution/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
// TO IMPROVE: mid 不是 peak 的話，往上升趨勢的那邊找就好了
var findPeakElement = function(nums) {
  if (nums.length === 1) return 0;

  let left = 0;
  let right = nums.length - 1;
  function getPeakElement(nums, left, right) {
    if (left > right) return -1;  // can't find peak here

    // 檢查 mid 是不是 peak
    let mid = Math.floor((left + right) / 2);
    let prev = mid === 0 ? -Infinity : nums[mid - 1];
    let next = mid === (nums.length - 1) ? -Infinity : nums[mid + 1];
    
    if (prev < nums[mid] && nums[mid] > next) {
      return mid;
    }

    // 不是的話從左邊找 peak
    let peak = getPeakElement(nums, left, mid - 1);
    // 左邊沒有 peak, 從右邊找 peak
    if (peak === -1) {
      peak = getPeakElement(nums, mid + 1, right);
    }
    return peak;
  }

  return getPeakElement(nums, left, right);
};

console.log(findPeakElement([1,2,3,1])) // 2
console.log(findPeakElement([1,2,1,3,5,6,4])) // 1 or 5
console.log(findPeakElement([1])) // 0
console.log(findPeakElement([1, 2])) // 1
