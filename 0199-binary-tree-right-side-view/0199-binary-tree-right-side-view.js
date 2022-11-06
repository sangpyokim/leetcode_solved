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
 * @return {number[]}
 */
var rightSideView = function(root) {
    if (!root) return []
    let res = []
    
    const q = [root]
    
    while(q.length) {
        const len = q.length
        res.push(q.at(-1).val)
        for (let i = 0; i < len; i++) {
            const cur = q.shift()
            
            if (cur.left) q.push(cur.left)
            if (cur.right) q.push(cur.right)
        }
        
        
    }
    return res
};