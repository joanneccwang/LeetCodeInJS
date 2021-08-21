/**
 * Link: https://leetcode.com/problems/n-ary-tree-level-order-traversal/
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  const traversal = [];
  const helper = (node, level) => {
    if (!node) return;
          
    if (!traversal[level]) traversal[level] = [node.val];
    else traversal[level].push(node.val);

    if (node.children) {
      node.children.forEach(child => {
        helper(child, level + 1);
      })
    }
  }
  
  helper(root, 0);

  return traversal;
};