/** Link: https://leetcode.com/problems/median-of-two-sorted-arrays/ */

/**
  nums1 = [1, 4, 5, 9]
            mIdx
  nums2 = [2, 3, 6, 7, 8] 
            nIdx
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const m = nums1.length;
  const n = nums2.length;
  const medianIdx = (m + n - 1) / 2;
  let median;
  
  let mIdx = -1;
  let nIdx = -1;
  for(let i = 0; i < medianIdx; i++) {
    // 其中一個 array 已做完
    if ((mIdx + 1) === m) {
      nIdx += 1;
    } else if ((nIdx + 1) === n) {
      mIdx += 1;
    } else {
      if (nums1[mIdx + 1] <= nums2[nIdx + 1]) {
        mIdx += 1;
      } else {
        nIdx += 1;
      }
    }
  }
  
  
  // medianIdx 整數
  if (Number.isInteger(medianIdx)) {
    if ((mIdx + 1) === m) {
      median = nums2[nIdx + 1];
    } else if ((nIdx +1) === n) {
      median = nums1[mIdx + 1];
    } else {
      median = (nums1[mIdx + 1] <= nums2[nIdx + 1]) ? nums1[mIdx + 1] : nums2[nIdx + 1];
    }
  } else {
    // medianIdx 非整數
    let firstMedian;
    if (mIdx === -1) {
      firstMedian = nums2[nIdx];
    } else if(nIdx === -1) {
      firstMedian = nums1[mIdx];
    } else {
      firstMedian = (nums1[mIdx] > nums2[nIdx]) ? nums1[mIdx] : nums2[nIdx];
    }
    let secondMedian;
    if ((mIdx + 1) === m) {
      secondMedian = nums2[nIdx + 1];
    } else if ((nIdx +1) === n) {
      secondMedian = nums1[mIdx + 1];
    } else {
      secondMedian = (nums1[mIdx + 1] <= nums2[nIdx + 1]) ? nums1[mIdx + 1] : nums2[nIdx + 1];
    }
    median = (firstMedian + secondMedian) / 2
  }
  
  return median;
};