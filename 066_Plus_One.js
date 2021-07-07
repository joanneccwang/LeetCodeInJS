/**
 * Link: https://leetcode.com/problems/plus-one/
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */

var plusOne = function(digits) {
  let carry = true;

  function addOne(d) {
    d += 1;
    if (d >= 10) {
      d = d % 10;
      carry = true;
    }
    return d;
  }
    
  for (let i = digits.length - 1; i >= 0; i--) {
    if (carry) {
      carry = false;
      digits[i] = addOne(digits[i])    
    } else {
      break;
    }
  }
  
  if (carry) {
    digits.splice(0, 0, 1);
  }
    
  return digits;
};