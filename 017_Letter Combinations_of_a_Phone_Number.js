/**
 * Link: https://leetcode.com/problems/letter-combinations-of-a-phone-number/
 */

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) { // '23'
  const digitMap = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  };

  // something like [['a', 'b', 'c'], ['d', 'e', 'f']]
  const letterArray = digits.split('').map(digit => digitMap[digit]);

  // @return 1 dimention array
  function combination(letterArray) {
    // if only one digit, return digitMap
    if (letterArray.length === 0) return [];
    if (letterArray.length === 1) return letterArray[0];
    
    // Conquer
    if (letterArray.length === 2) {
      let result = [];
      letterArray[0].forEach(letterA => {
        letterArray[1].forEach(letterB => {
          result.push(`${letterA}${letterB}`);
        })
      })
      return result;
    }

    // Divide
    const mid = Math.floor(letterArray.length / 2);
    return combination([combination(letterArray.slice(0, mid)), combination(letterArray.slice(mid, letterArray.length))])
  }

  return combination(letterArray);
};

console.log(letterCombinations('23')) // ["ad","ae","af","bd","be","bf","cd","ce","cf"]
console.log(letterCombinations('')) // []
console.log(letterCombinations('2')) // ['a', 'b', 'c']