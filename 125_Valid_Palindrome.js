/**
 * Link:　https://leetcode.com/problems/valid-palindrome/
 */

/**
 * @param {string} s
 * @return {boolean}
 */
/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
var isPalindrome = function(s) {
  const parsedString = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  if (parsedString.length === 0) return true;

  let result = true;
  var i = 0;
  var j = parsedString.length - 1;
  while(i < j) {
    if (parsedString[i] !== parsedString[j]) {
      result = false;
      break;
    } else {
      i++;
      j--;
    }
  }

  return result; 
};

console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome('race a car'));