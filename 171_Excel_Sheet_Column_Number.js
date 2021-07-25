/**
 * Link: https://leetcode.com/problems/excel-sheet-column-number/
 */

/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
  return columnTitle.split('').reverse().reduce((sum, cur, idx) => {
    return sum + ((cur.charCodeAt() - 64) * Math.pow(26, idx)) // A --> charCode 65
  }, 0);
};