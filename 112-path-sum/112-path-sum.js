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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(node, targetSum) {
    if (!node) return false
    
    let answer = false
    function dfs(n, s) {
        if (!n) return
        
        if (!n.left && !n.right && s+n.val === targetSum) answer = true
        
        if (n.left) dfs(n.left, s+n.val)
        if (n.right) dfs(n.right, s+ n.val)
        
        
        
    }
    dfs(node, 0)
    
    return answer
};