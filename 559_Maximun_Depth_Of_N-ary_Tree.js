/**
 * Link: https://leetcode.com/problems/maximum-depth-of-n-ary-tree/
 */
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
  let depth = 0;
  
  const helper = (node, level) => {
    if (!node) return;
    
    if (node.children.length > 0) {
      node.children.forEach(child => {
        helper(child, level + 1)
      })
    } else {
      depth = Math.max(depth, level);
    }
  };
  
  helper(root, 1);
  
  return depth
};