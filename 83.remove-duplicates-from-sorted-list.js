/*
 * @lc app=leetcode id=83 lang=javascript
 *
 * [83] Remove Duplicates from Sorted List
 */

// 配列をLoopで処理して、次の配列に格納をしていくイメージ
// 次の配列とvalueが同じなら、スキップ
// と思ったけれど、headが配列ではないらしい。list nodeってなんだよ

// @lc code=start
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
var deleteDuplicates = function(head) {
    let current = head;
    while (current !== null && current.next !== null) {
      if (current.val === current.next.val) {
        // 次のノードを、さらにその次のノードで置き換える
        current.next = current.next.next;
      } else {
        // 次のノードへ
        current = current.next
      }
    }
    return head;
};
// @lc code=end

