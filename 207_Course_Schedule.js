/** Link: https://leetcode.com/problems/course-schedule/ */
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  const STATE = {
    CHECKING: 1,
    VALID: 2,
    INVALID: 3,
  };
  let visited = {};

  // 建 Course Graph
  let courseMap = {};
  prerequisites.forEach(([pa, pb]) => {
    if (!courseMap[pa]) courseMap[pa] = [pb];
    else courseMap[pa].push(pb);
  })
  
  function checkCourseValid(course, preCourses) {
    if (visited[course] === STATE.VALID) return true;
    if (visited[course] === STATE.CHECKING || visited[course] === STATE.INVALID) return false;
    
    visited[course] = STATE.CHECKING;
    const preCoursesValid = preCourses.every(c => {
      if (courseMap[c]) return checkCourseValid(c, courseMap[c]);
      else return true;
    });
    if (preCoursesValid) {
      visited[course] = STATE.VALID;
      return true;
    } else {
      visited[course] = STATE.INVALID;
      return false;
    }
  }
  
  let courses = Object.entries(courseMap);
  const canComplete = courses.every(([course, preCourses]) => checkCourseValid(course, preCourses) === true);
  
  return canComplete;
};