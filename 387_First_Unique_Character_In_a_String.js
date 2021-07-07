/**
 * Link: https://leetcode.com/problems/first-unique-character-in-a-string/
 */

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  const map = {};
  let candidates = [];
  let first = undefined;
  s.split('').forEach((char, index) => {
    if (map[char] === undefined){
      map[char] = index;
      candidates.push(char);
      if (!first) first = char;
    } else {
      let toSplice = candidates.findIndex(ch => ch === char);
      if (toSplice > -1) {
        candidates.splice(toSplice, 1);
      }
      if (first === char) {
        first = candidates[0];
      }
    }
  }) 
  
  return map[first] === undefined ? -1 : map[first];
};