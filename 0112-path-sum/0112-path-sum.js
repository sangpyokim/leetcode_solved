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

    return helper(node, 0, targetSum)
};

function helper(node, sum, target) {
    if (!node) return false
    
    if (!node.left && !node.right && sum + node.val === target) return true
    
    return helper(node.left, sum + node.val, target) || helper(node.right, sum + node.val, target) 
}
