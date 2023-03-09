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
    if(!head || !head.next || !head.next.next) return null;
    let fast = head.next.next;
    let slow = head.next;
    while(fast !== slow){
        if(!fast.next || !fast.next.next) return null;
        fast = fast.next.next;
        slow = slow.next;
    }
    let p1 = fast;
    let p2 = head;
    while(p1 !== p2){
        p1 = p1.next;
        p2 = p2.next;
    }
    return p1;
};