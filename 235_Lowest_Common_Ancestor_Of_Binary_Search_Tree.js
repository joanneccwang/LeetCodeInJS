/**
 * Link: https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  function find(root, node) {
      const traversals = []
      let current = root
      let found = false
      while (current && !found) {
          traversals.push(current)
          if (current.val > node.val) {
              current = current.left
          } else if (current.val < node.val) {
              current = current.right
          } else {
              found = true
          }
      }
      return traversals
  }
  let traversalsP = find(root, p)
  let traversalsQ = find(root, q)
  
  
  let commonTraversals = traversalsP.filter(node => traversalsQ.includes(node));
  return commonTraversals.pop();
};