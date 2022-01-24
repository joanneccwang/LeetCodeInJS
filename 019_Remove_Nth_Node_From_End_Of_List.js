/** Link: https://leetcode.com/problems/remove-nth-node-from-end-of-list/ */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let targetPrev;
  let target = head;
  let end = head;
  
  // Find the first posible end
  while(n - 1 > 0) {
    end = end.next;
    n -= 1;
  }
  
  while(end.next) {
    if (!targetPrev) targetPrev = target;
    else targetPrev = targetPrev.next;
    
    target = target.next;
    end = end.next;
  }

  if (!targetPrev) return head = head.next;  // head is the target
  else targetPrev.next = target.next;
  
  return head;
};