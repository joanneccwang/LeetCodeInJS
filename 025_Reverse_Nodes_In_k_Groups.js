/** Link: https://leetcode.com/problems/reverse-nodes-in-k-group/ */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  function reverse(start, end) {
    let prevNode = null;
    let curNode = start;
    
    while (prevNode !== end) {
      let nextNode = curNode.next;
      curNode.next = prevNode;
      prevNode = curNode;
      curNode = nextNode;
    }
    
    return curNode;
  }
  let returnHead = null;
  
  let startNode = head;
  let endNode;
  
  let lastReverseEnd = null;
  
  while(startNode) {
    let iteration = k - 1;
    endNode = startNode;
    
    // 找到 k 個 reverse node
    while(iteration > 0) {
      if (endNode === null) break;
      endNode = endNode.next;
      iteration -= 1;
    }
    
    if (endNode !== null) {  // 有 k 個可以 reverse
      // 接上兩段 Reverse list
      if (lastReverseEnd) lastReverseEnd.next = endNode;
      // reverse 目前的 k 個
      let nextNode = reverse(startNode, endNode);
      // assign return 值
      if (!returnHead) returnHead = endNode;
      // 記住未接上的 reverse list 
      lastReverseEnd = startNode;
      
      startNode = nextNode;
    } else { // 不夠 k 個，結束
      // 把剩下的接上
      if (lastReverseEnd) lastReverseEnd.next = startNode;
      break;
    }
  }
  
  return returnHead;
};