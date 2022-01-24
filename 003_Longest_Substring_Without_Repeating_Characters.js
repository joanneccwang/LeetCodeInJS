/** Link: https://leetcode.com/problems/longest-substring-without-repeating-characters/ */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let found = false;
  const charSet = new Set(s.split(''));
  let maxLength = charSet.size;
  
  while(maxLength > 1) {
    for(let i = 0; i < s.length - maxLength + 1; i++) {
      const substring = s.substring(i, i + maxLength);
      const set = new Set(substring.split(''))
      if (set.size === maxLength) found = true;
    }
    if(!found) maxLength -= 1;
    else break;
  }
  return maxLength;
};