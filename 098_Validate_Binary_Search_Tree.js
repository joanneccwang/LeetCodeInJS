/** Link: https://leetcode.com/problems/validate-binary-search-tree/ */
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
var isValidBST = function(root) {
  let result = true;
  
  function traverse(node) {
    let leftMin = node.val;
    let rightMax = node.val;
    // 左邊最大要小於 root
    if (node.left) {
      let { min, max } = traverse(node.left);
      leftMin = min;
      if (max && max >= node.val) result = false;
    }
    // 右邊最小要大於 root
    if (node.right) {
      let { min, max } = traverse(node.right);
      rightMax = max;
      if (min && min <= node.val) result = false;
    }
    
    return {min: leftMin, max: rightMax};
  }
  
  traverse(root);
  
  return result;
};