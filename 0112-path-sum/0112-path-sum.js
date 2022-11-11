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
    function dfs(node, sum) {
        if (!node) return
        
        if (!node.left && !node.right && sum+node.val === targetSum) answer = true
        
        if (node.left) dfs(node.left, sum + node.val)
        if (node.right) dfs(node.right, sum + node.val)
        
    }
    dfs(node, 0)
    
    return answer
};