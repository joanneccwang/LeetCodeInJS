/**
 * Link: https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    
  function buildBST(nums) {
      if (nums.length === 0) return undefined
      
      const rootIndex = Math.floor(nums.length / 2);
      const root = new TreeNode(nums[rootIndex], buildBST(nums.slice(0, rootIndex)), buildBST(nums.slice(rootIndex + 1, nums.length)))
      return root
  }
  
  return buildBST(nums)
};