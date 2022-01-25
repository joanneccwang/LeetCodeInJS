/** Link: https://leetcode.com/problems/merge-k-sorted-lists/ */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  
  function merge(lists) {
    const length = lists.length;
    if (length === 0) return null;
    if (length === 1) return lists;
    if (length === 2) {
      // merge 2 lists
      let leftNode = lists[0];
      let rightNode = lists[1];
      let startNode = null;
      let curNode = null;
      while (leftNode && rightNode) {
        let targetNode;
        if (leftNode.val <= rightNode.val) {
          targetNode = new ListNode(leftNode.val);
          leftNode = leftNode.next;
        } else {
          targetNode = new ListNode(rightNode.val);
          rightNode = rightNode.next;
        }
        
        if (!startNode) {
          startNode = targetNode;
          curNode = startNode;
        } else {
          curNode.next = targetNode;
          curNode = curNode.next;
        }
        // console.log({curNode});
      }
      
      // 一開始就有一邊是空的
      if (!startNode) {
        if (leftNode) startNode = leftNode;
        if (rightNode) startNode = rightNode;
      } else {
        // 把剩下的接上
        if (leftNode) curNode.next = leftNode;
        if (rightNode) curNode.next = rightNode;
      }
      return [startNode];
      
    }
    
    let midIdx = Math.floor(length / 2)
    //console.log(midIdx)
    const leftList = merge(lists.slice(0, midIdx));
    const rightList = merge(lists.slice(midIdx));
    //console.log({leftList, rightList});
    return merge([...leftList, ...rightList]);
  }
  
  const merged = merge(lists);
  // console.log({merged});
  return merged ? merged[0] : null;
};