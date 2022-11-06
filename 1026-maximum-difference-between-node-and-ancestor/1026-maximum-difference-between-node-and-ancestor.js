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
var maxAncestorDiff = function(root) {

    function helper(node, min, max) {
        if (!node) return max - min
        
        const left = helper(node.left, Math.min(min, node.val), Math.max(max, node.val))
        const right = helper(node.right, Math.min(min, node.val), Math.max(max, node.val))
        return Math.max(left, right)
    }
    
    return helper(root, root.val, root.val)

};