/** Link: https://leetcode.com/problems/combination-sum/ */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

var combinationSum = function(candidates, target) {
  // 跑一次 candidate => 大於target 跳過 , 小於 target recursive, 等於 target return
  function findCombinationSum(candidates, target, lastNum = undefined) {
    const results = [];
    candidates.forEach(candidate => {
      // 只取大於等於上一步拿的數字，避免 [2, 2, 3], [2, 3, 2] 這種重複結果
      if (lastNum === undefined || candidate >= lastNum) {
        if (candidate === target) results.push([candidate]);
        else if (candidate < target) {
          findCombinationSum(candidates, target - candidate, candidate)
            .forEach(result => {
              results.push([candidate, ...result]);
            })
        }
      }
    });
    return results;
  }
    
  return findCombinationSum(candidates, target);
};