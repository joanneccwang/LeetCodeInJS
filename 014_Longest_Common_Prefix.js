/**
 * Link:　https://leetcode.com/problems/longest-common-prefix/
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  // find the shortest string
  let shortestString = undefined;
  let minLength = Infinity;
  strs.forEach(str => {
    if (str.length < minLength) {
      shortestString = str;
      minLength = str.length;
    }
  })

  // find the longest prefix
  let end = shortestString.length;
  while(end > 0) {
    let isPrefix = strs.every(str =>
      str.substring(0, end) == shortestString.substring(0, end));
    if (isPrefix) break;
    end -= 1;
  }

  return shortestString.substring(0, end);
};

console.log(longestCommonPrefix(["flower","flow","flight"])) // 'fl'
console.log(longestCommonPrefix( ["dog","racecar","car"])) // ''