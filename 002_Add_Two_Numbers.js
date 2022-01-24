/** Link: https://leetcode.com/problems/add-two-numbers/ */
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
var addTwoNumbers = function(l1, l2) {
  
  let startNode;
  let prevNode;
  let node1 = l1;
  let node2 = l2;
  let curry = 0;
  
  while(node1 || node2) {
    let node1Val = node1 ? node1.val : 0;
    let node2Val = node2 ? node2.val : 0;
    let val = (node1Val + node2Val + curry) % 10;
    curry = Math.floor((node1Val + node2Val + curry) / 10);
    let curNode = new ListNode(val);
    if (!startNode) startNode = curNode;
    if (prevNode) prevNode.next = curNode;
    prevNode = curNode;
    
    node1 = node1 ? node1.next : null;
    node2 = node2 ? node2.next : null;
  }
  
  if (curry > 0) {
    let curNode = new ListNode(curry);
    prevNode.next = curNode;
  }
  return startNode;
};