/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    if (!root) return []
    const stack = []
    const q = []
    const res = []
    
    q.push(root)
    while(q.length) {
        const len = q.length
        const temp = []
        for (let i = 0; i < len; i++) {
            const cur = q.shift()
            temp.push(cur.val)
            
            if (cur.left) q.push(cur.left)
            if (cur.right) q.push(cur.right)
        }
        stack.push(temp)
    }
    
    while(stack.length) {
        const cur = stack.pop()
        res.push(cur)
    }
    return res
};