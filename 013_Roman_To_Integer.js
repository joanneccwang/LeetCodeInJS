/**
 * Link: https://leetcode.com/problems/roman-to-integer/
 */

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const symbolMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,  
  };
  
  const symbols = s.split('').reverse();
  let total = 0;
  let prevSymbol;
  symbols.forEach(symbol => {
      
      if (symbol === 'I' && ['V', 'X'].includes(prevSymbol)) {
          total -= symbolMap[symbol];
      } else if (symbol === 'X' && ['L', 'C'].includes(prevSymbol)) {
          total -= symbolMap[symbol];       
      } else if (symbol === 'C' && ['D', 'M'].includes(prevSymbol)) {
          total -= symbolMap[symbol];       
      } else {
          total += symbolMap[symbol];
      }
      prevSymbol = symbol;
  })
  
  return total;
};