/**
 * Link: https://leetcode.com/problems/count-and-say/
 */

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  if (n === 1) return '1';  // bad case

  return countDigits(countAndSay(n - 1));
};

var countDigits = function(str) {
  var curDigit;
  var count = 0;
  var result = '';

  function resetDigit(char) {
    curDigit = char;
    count = 1;
  }
  for(var i = 0; i < str.length; i++) {
    var char = str[i];
    if (!curDigit){
      resetDigit(char);
      continue;
    }

    if (curDigit === str[i]) {
      count += 1;
    } else {
      result = `${result}${count}${curDigit}`;
      resetDigit(char);
    }
  }

  result = `${result}${count}${curDigit}`; // append last digit count
  return result;
}


console.log(countAndSay(1));  // '1'
console.log(countAndSay(2));  // '11'
console.log(countAndSay(3));  // '21'
console.log(countAndSay(4));  // '1211'