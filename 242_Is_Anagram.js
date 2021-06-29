/**
 * Link: https://leetcode.com/problems/valid-anagram/
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
/**
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;

  const map = {};
  for(var i = 0; i < s.length; i++) {
    var char = s[i];
    if (!map[char]) map[char] = 1;
    else map[char] ++;
  }
  for(var j = 0; j < t.length; j++) {
    var char = t[j];
    if (!map[char] || map[char] === 0) return false;
    else map[char] -= 1;
  }

  return true;
};

console.log(isAnagram('anagram', 'nagaram')); // true
console.log(isAnagram('rat', 'car')); // false