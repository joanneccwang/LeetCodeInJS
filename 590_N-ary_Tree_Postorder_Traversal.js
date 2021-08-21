/**
 * Link: https://leetcode.com/problems/n-ary-tree-postorder-traversal/
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
 * @return {number[]}
 */
var postorder = function(root) {
  const traverse = [];
  const helper = (node) => {
    if (!node) return
    if (node.children) {
      node.children.forEach(child => {
        helper(child)
      })
    }
    traverse.push(node.val);
  }
  helper(root);
  
  return traverse;
};