/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if (!root) return root
    
    let q = [root]
    while(q.length) {
        const temp = []
        q.forEach(node => {
            if (node.left) temp.push(node.left)
            if (node.right) temp.push(node.right)
        })
        q = temp
        
        q.forEach((node, index) => {
            node.next = q[index+1] !== undefined ? q[index+1] : null
        })
    }
    
    return root 
};