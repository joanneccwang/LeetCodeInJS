/**
 * Link: https://leetcode.com/problems/group-anagrams/
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const result = [];
  const hash = {};  // 'eat': ['eat', 'ate', 'tea']
  strs.forEach(str => {
    let keys = Object.keys(hash);
    let anagram = keys.find(key => isAnagram(str, key));
    if (anagram !== undefined) {
      hash[anagram].push(str);
    } else {
      hash[str] = [str];
    }
  });

  return Object.values(hash);


  function isAnagram(s, t) {
    console.log({s, t});
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
  }
  return result;
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"])) //  [["bat"],["nat","tan"],["ate","eat","tea"]]
console.log(groupAnagrams(
  ["hhhhu","tttti","tttit","hhhuh","hhuhh","tittt"])) // [["tittt","tttit","tttti"],["hhhhu","hhhuh","hhuhh"]]