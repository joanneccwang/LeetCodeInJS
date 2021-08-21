/**
 * Link: https://leetcode.com/problems/n-ary-tree-preorder-traversal/
 */
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
  const traversal = [];
  const traverseList = [];
  let curNode = root;
  while (curNode) {
    traversal.push(curNode.val);
    if (curNode.children) {
      traverseList.push(...curNode.children.reverse());
    }
    curNode = traverseList.pop();
  }
  return traversal;
};