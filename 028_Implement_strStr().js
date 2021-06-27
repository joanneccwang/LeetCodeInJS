/**
 * Link:　https://leetcode.com/problems/implement-strstr/
 * Implement String.indexOf()
 */

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
/**
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 */
var strStr = function(haystack, needle) {
  if (needle.length === 0) return 0;
  if (needle.length > haystack.length) return -1;

  var result = -1;
  for (var hIdx = 0; hIdx <= (haystack.length - needle.length); hIdx++) {
    for (var nIdx = 0; nIdx < needle.length; nIdx ++) {
      result = hIdx;
      if (haystack[hIdx + nIdx] !== needle[nIdx]) {
        result = -1;
        break;
      }
    }
    if (result !== -1) {
      break;
    }
  }
  return result;
};

console.log(strStr('hello', 'll'));
console.log(strStr('aaaaa', 'bba'));
console.log(strStr('hello', ''));
console.log(strStr('aa', 'aaa'));
console.log(strStr('mississippi', 'issip'));