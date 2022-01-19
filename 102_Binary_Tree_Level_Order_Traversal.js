/** Link: https://leetcode.com/problems/binary-tree-level-order-traversal/ */
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  const queue = [];
  const result = [];
  
  if (root) queue.push({node: root, level: 0});
  
  while (queue.length > 0) {
    const {node, level} = queue.shift();
    
    if (!result[level]) result[level] = [];
    result[level].push(node.val);
    if (node.left) queue.push({ node: node.left, level: level + 1 });
    if (node.right) queue.push({ node: node.right, level: level + 1 });
  }
  return result;
};