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
 * @return {number}
 */
var findBottomLeftValue = function(root) {
    let res = root.val
    
    const q = [root]
    while(q.length) {
        const len = q.length
        res = q[0].val
        for (let i = 0; i < len; i++) {
            const cur = q.shift()
            
            if (cur.left) q.push(cur.left)
            if (cur.right) q.push(cur.right)
        }
        
        
    }
    return res
};