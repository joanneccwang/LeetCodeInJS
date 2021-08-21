/**
 * Link: https://leetcode.com/problems/valid-parentheses/
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
  const stack = []
  const bracketMap = {
      '(': ')',
      '{': '}',
      '[': ']',
  }
  const open = Object.keys(bracketMap)
  
  for (let i = 0; i < s.length; i+=1) {
      let char = s[i];
      if (open.includes(char)) {
          stack.push(char)
      } else {
          if (bracketMap[stack.pop()] !== char) return false
      }
  }
  
  return (stack.length === 0)
};