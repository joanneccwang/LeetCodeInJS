/**
 * Link: https://leetcode.com/problems/merge-two-sorted-lists/
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  if (!l1 && !l2) return l1;
  if (!l1) return l2;
  if (!l2) return l1;
  
  let left = l1;
  let right = l2;
  let head;
  let node;
  let curr;
  
  while(left && right) {
    if (left.val <= right.val) {
      curr = left;
      left = left.next;
    } else {
      curr = right;
      right = right.next;
    }
    
    if (!head) head = curr;
    if (!node) {
      node = curr;
    } else {
      node.next = curr;
      node = curr;
    }
  }
  
  if (left) {
    node.next = left;
  }
  if (right) {
    node.next = right;
  }
  
  return head;
};