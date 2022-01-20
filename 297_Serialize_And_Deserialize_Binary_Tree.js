/** Link: https://leetcode.com/problems/serialize-and-deserialize-binary-tree/ */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  let encode = [];
  function traverse(node) {
    if(!node) return;
    encode.push(node.val);
    if (node.left) {
      traverse(node.left);
    } else {
      encode.push('N');
    }
    
    if (node.right) {
      traverse(node.right);
    } else {
      encode.push('N');
    }
  }
  traverse(root);
  return encode.join(' ');
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  const encode = data.split(' ').reverse();
  let root = null;
  
  function decode(encode, parent, link) {
    const curVal = encode.pop();
    if (curVal === '') return;  // empty tree
    if (curVal === 'N') return; // leaf
      
    let node = new TreeNode(parseInt(curVal));
    if (!parent) {
      root = node;
    } else {
      if (link === 'L') {
        parent.left = node;
      }
      if (link === 'R') {
        parent.right = node;
      }
    }
      
    decode(encode, node, 'L');
    decode(encode, node, 'R');
  }
  
  decode(encode);
  return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */