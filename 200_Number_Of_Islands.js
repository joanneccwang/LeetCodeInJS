/** Link: https://leetcode.com/problems/number-of-islands/ */
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  const m = grid.length;
  const n = grid[0].length;
  const VISITED = 'v';
  const LAND = '1';
  const WATER = '0';
  
  let result = 0;
  
  for (let i = 0; i < m; i += 1) {
    for (let j = 0; j < n; j += 1) {
      if (grid[i][j] === LAND) {
        result += 1;
        traverse(i, j);
      }
    }
  }
  
  function traverse(i, j) {
    if (i < 0 || i === m || j < 0 || j === n) return;
    if (grid[i][j] === WATER || grid[i][j] === VISITED) return;
    if (grid[i][j] === LAND) {
      grid[i][j] = VISITED;
      traverse(i+1, j);
      traverse(i-1, j);
      traverse(i, j-1);
      traverse(i, j+1);
    }
  }
  
  return result;
    
};