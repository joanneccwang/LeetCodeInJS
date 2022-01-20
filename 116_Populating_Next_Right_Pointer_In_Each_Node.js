/** Link: https://leetcode.com/problems/populating-next-right-pointers-in-each-node/ */
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
  if (!root) return root;
  
  function linkNode(node) {
    if (!node.left || !node.right) return;
    
    node.left.next = node.right;
    node.right.next = node.next ? node.next.left : null;
    
    linkNode(node.left);
    linkNode(node.right);
  }
  
  linkNode(root);
  return root;
};