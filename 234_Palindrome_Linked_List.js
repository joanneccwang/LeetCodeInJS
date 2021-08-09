/**
 * Link: https://leetcode.com/problems/palindrome-linked-list/
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
 * @return {boolean}
 */

var isPalindrome = function(head) {
  let string = '';
  let reverse = '';
  let curNode = head;
  while(curNode) {
      string = `${string}${curNode.val}`;
      reverse = `${curNode.val}${reverse}`;
      
      curNode = curNode.next;
  }
  return string == reverse
};