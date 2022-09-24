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
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    const answer = []
    
    function dfs(node, sum, path) {
        if (!node) return
        
        sum += node.val
        
        if (!node.left && !node.right && sum === targetSum) {
            return answer.push([...path, node.val])
        } else {
            dfs(node.left, sum, [...path, node.val])
            dfs(node.right, sum, [...path, node.val])
        }
        
        
        
    }
    dfs(root, 0, [])
    
    return answer
    
};