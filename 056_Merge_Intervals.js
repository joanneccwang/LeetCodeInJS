/**
 * Link: https://leetcode.com/problems/merge-intervals/
 */

var merge = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let start;
  let end;
  const results = [];
  intervals.forEach((interval, idx) => {
    if (idx === 0) {
      start = interval[0];
      end = interval[1];
    }
    if (idx === intervals.length - 1) {
      end = Math.max(end, interval[1]);
      results.push([start, end]);
    } else {
      let next = intervals[idx + 1];
      if (end >= next[0]) {
        end = Math.max(end, next[1]);
      } else {
        results.push([start, end]);
        start = next[0];
        end = next[1];
      }
    }
  });

  return results;
};

// 先排序讓 start 由小到大，可 merge 的會連在一起
// keep end ，若 max end 大於下個 interval 的 start ，則兩者可 merge ，取新的 max end
// 否則一個 interval 完成

console.log(merge([[1,3],[2,6],[8,10],[15,18]])); // [[1,6],[8,10],[15,18]]
console.log(merge([[1,4],[2,3]])); // [[1,4]]
console.log(merge([[2,3],[4,5],[6,7],[8,9],[1,10]])) // [1, 10]
console.log(merge([[1,3],[2,6],[8,10],[15,18]])) // [1,6] [8, 10] [15, 18]