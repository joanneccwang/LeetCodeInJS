/**
 * Link:　https://leetcode.com/problems/reverse-string/
 */

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  function helper(leftIdx, rightIdx) {
    if (leftIdx >= rightIdx) return
    // swap
    let tmp = s[leftIdx];
    s[leftIdx] = s[rightIdx];
    s[rightIdx] = tmp;

    helper(leftIdx + 1, rightIdx -1);
  }
  
  helper(0, s.length - 1)
  console.log(s);
};

reverseString(['h', 'e', 'l', 'l', 'o'])