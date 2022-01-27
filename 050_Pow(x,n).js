/** Link: https://leetcode.com/problems/powx-n/ */
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) { // 2^10
  if (n === 0) return 1;
  
  let pow = Math.abs(n);
  if (pow % 2 === 0) {
    // 2^10 =  2^5 * 2^5
    let halfResult =  myPow(x, pow / 2);
    powResult =  halfResult * halfResult;
  } else {
    // 2^11 = 2^5 * 2^5 * 2
    let halfResult =  myPow(x, (pow-1) / 2);
    powResult = halfResult * halfResult * x;
  }
  
  return (n > 0) ? powResult : (1 / powResult);
};