/** Link: https://leetcode.com/problems/valid-sudoku/ */
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  let row = {};
  let column = {};
  let box = {};
  for(let i = 0; i < 9; i+=1) {
    for(let j = 0; j < 9; j += 1) {
      if (board[i][j] === '.') continue;
      
      // hash row
      if (!row[i]) row[i] = new Set(board[i][j]);
      else {
        if (row[i].has(board[i][j])) return false;
        else row[i].add(board[i][j]);
      }
      // hash column
      if (!column[j]) column[j] = new Set(board[i][j]);
      else {
        if (column[j].has(board[i][j])) return false;
        else column[j].add(board[i][j]);
      }
      
      // hash box
      let boxI = Math.floor(i/3);
      let boxJ = Math.floor(j/3);
      if (!box[`${boxI}${boxJ}`]) box[`${boxI}${boxJ}`] = new Set(board[i][j]);
      else {
        if (box[`${boxI}${boxJ}`].has(board[i][j])) return false;
        else box[`${boxI}${boxJ}`].add(board[i][j]);
      }
    }
  }
  
  return true;
};