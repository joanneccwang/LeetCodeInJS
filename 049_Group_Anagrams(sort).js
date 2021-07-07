/**
 * Link: https://leetcode.com/problems/group-anagrams/
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const hash = {};
  strs.forEach(str => {
    let sorted = str.split('').sort().join('');
    if (hash[sorted]) hash[sorted].push(str);
    else hash[sorted] = [str];
  });

  return Object.values(hash);
}

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"])) //  [["bat"],["nat","tan"],["ate","eat","tea"]]
console.log(groupAnagrams(
  ["hhhhu","tttti","tttit","hhhuh","hhuhh","tittt"])) // [["tittt","tttit","tttti"],["hhhhu","hhhuh","hhuhh"]]