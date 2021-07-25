/**
 * Link: https://leetcode.com/problems/reverse-linked-list/
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  
  if (!head || !head.next) return head;
  
  let prev = null;
  let node = head;
  
  while (node) {
    let next = node.next;
    node.next = prev;
    prev = node;
    node = next;
  }
  return prev;
};