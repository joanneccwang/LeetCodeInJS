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
  function reverse(prev, cur) {
    if (!cur) return cur;
    
    const next = cur.next;
    cur.next = prev;
    
    if (!next) return cur;
    return reverse(cur, next);
  }
  
  return reverse(null, head);
};