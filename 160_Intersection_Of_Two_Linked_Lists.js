/** Link: https://leetcode.com/problems/intersection-of-two-linked-lists/ */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  let nodeA = headA;
  while(nodeA) {
    nodeA.visited = true;
    nodeA = nodeA.next;
  }  
  
  let nodeB = headB;
  while(nodeB) {
    if (nodeB.visited) return nodeB;
    nodeB = nodeB.next;
  }
  return null;
};