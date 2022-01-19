/**
 * Link:　https://leetcode.com/problems/symmetric-tree/
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
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  
  
  function checkSymmetric(p, q) {
    if (p === null && q === null) return true;
    if (p === null || q === null) return false;
    if (p.val !== q.val) return false;
    
    let checkLeft = checkSymmetric(p.left, q.right);
    let checkRight = checkSymmetric(p.right, q.left);
    
    return checkLeft && checkRight
  }
  
  return checkSymmetric(root.left, root.right);
};