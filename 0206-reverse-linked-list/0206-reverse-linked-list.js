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
var reverseList = function(head) {
    
    let node = head
    const stack = []
    function recursion(root) {
        if (!root) return
        stack.push(root.val)
        root = root.next
    
        recursion(root)
    }
    
    recursion(node)
    
    let t = head
    function temp(root) {
        if (!root) return
        
        root.val = stack.pop()
        root = root.next
        temp(root)
    }
    temp(t)
    return head
};