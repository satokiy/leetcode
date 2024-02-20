/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 */
/*
2つのListNodeを渡されて和を求める。
list nodeのcurrent val同士を足し合わせた新たなlist nodeを返すのが良い
論点
1. 2つのlist nodeを同時に処理する、という方法をどうやって実現するか
ループとも違うのでとりあつかいがいまいちわからない...と思ったけどそれぞれnextすればいいからむしろ簡単？


2. 位上がりをどう実現するか
位上がりが起きたことを表現し、次のノードで取り入れる。取り入れたら一度位上がりフラグをオフにする。
このON・OFFを1つのノード操作のタイミングで意識できれば良さそう

recursiveの雰囲気は感じる
再帰というかwhileでnextがなくなるまで処理し続ける必要があるのだろうと思う。何を？
*/
// @lc code=start
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
    return iter(l1, l2)
};


function iter(n1, n2, carry = 0) {
  if (!n1 && !n2 && !carry) {
    return null;
  }
  const newVal = (n1?.val || 0) + (n2?.val || 0) + carry;
  const nextNode = iter(n1?.next, n2?.next, Math.floor(newVal / 10))
  return new ListNode(newVal % 10, nextNode)
}
// @lc code=end

