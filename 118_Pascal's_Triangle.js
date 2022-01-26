/** Link: https://leetcode.com/problems/pascals-triangle/ */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  let pascal = [];
  for(let i = 0; i < numRows; i += 1) {
    let row = [];
    for (let j = 0; j <= i; j += 1) {
      if (j === 0 || j === i) row.push(1);
      else {
        row.push(pascal[i-1][j-1] + pascal[i-1][j]);
      }
    }
    pascal.push(row);
  }
  return pascal;
};