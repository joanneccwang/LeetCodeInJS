/** Link: https://leetcode.com/problems/top-k-frequent-elements/ */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  const count = {};
  
  nums.forEach(num => {
    if (!count[num]) count[num] = 0;
    count[num] += 1;
  })
  
  const frequency = Object.entries(count).sort((a, b) => {
    const [aKey, aVal] = a;
    const [bKey, bVal] = b;
    return bVal - aVal;
  });

  return frequency.splice(0, k).map(([key, val]) => key);
};