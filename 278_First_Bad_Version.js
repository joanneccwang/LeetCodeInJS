/**
 * Link:　https://leetcode.com/problems/first-bad-version/
 */

/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
  function searchFirstBadVersion(start, end) {
    if (start === end) return start;
    
    var mid = Math.floor((start + end) / 2)
    const isBad = isBadVersion(mid);
    if (!isBad) {
      return searchFirstBadVersion(mid + 1, end)
    }
    if (isBad) {
      if (mid === 1) return 1;
      const isBadPrev = isBadVersion(mid - 1);
      // First bad version is ahead
      if (isBadPrev) {
        return searchFirstBadVersion(start, mid)
      }
      // First bad version found
      return mid
    }
  }  
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
    return searchFirstBadVersion(1, n);
  };
};