/*
 * @lc app=leetcode id=142 lang=javascript
 *
 * [142] Linked List Cycle II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next;
    if (slow === fast) {
      break;
    }
  }

  if (!fast || !fast.next) return null;

  slow = head;

  while (fast !== slow) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
};

// @lc code=end

