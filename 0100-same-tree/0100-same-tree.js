/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    
    
    function helper(t1, t2) {
        if (!t1 && !t2) return true
        if (!t1 || !t2) return false
        
        const left = helper(t1.left, t2.left)
        const right = helper(t1.right, t2.right)
        
        return t1.val === t2.val && left && right
    }
    
    return helper(p, q)
};