/**
 * Link:　https://leetcode.com/problems/3sum/
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  if (nums.length < 3) return [];

  // 先排序，後面就不用擔心去重
  nums.sort((a, b) => a - b);
  console.log({nums});

  // 從前面開始把數字當成要用的，從剩下的數字找 TWO SUM
  let result = [];
  const appeared = {};  // 已經當過第一個數字的就不再看
  for (let i = 0; i < nums.length - 2; i += 1) {
    let num = nums[i];
    if (appeared[num] !== undefined) continue;
    else appeared[num] = true;

    let target = 0 - num;
    let pairs = twoSum(nums.slice(i + 1), target);
    result = [...result, ...pairs.map(p => [num, ...p])];
  }

  function twoSum(nums, target) {
    const complementMap = {};
    const twoSumPairs = [];
    nums.forEach(num => {
      if (complementMap[num] !== undefined) {
        if (!complementMap[num].isUsed) {
          twoSumPairs.push([complementMap[num].num, num]);
          complementMap[num].isUsed = true;
        }
      } else {
        let complement = target - num;
        complementMap[complement] = {num, isUsed: false};
      }
    });
    return twoSumPairs;
  }

  return result;
};

console.log(threeSum([-1,0,1,2,-1,-4]))  // Output: [[-1,-1,2],[-1,0,1]]
console.log(threeSum([0, 0, 0, 0]))  // Output: [[0, 0, 0]]
console.log(threeSum([0,2,2,3,0,1,2,3,-1,-4,2]))