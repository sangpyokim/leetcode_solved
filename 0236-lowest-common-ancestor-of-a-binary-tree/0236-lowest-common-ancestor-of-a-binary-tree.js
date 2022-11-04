/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    
    
    return helper(root, p, q)
};
function helper(node, p, q) {
    if (!node || node.val === p.val || node.val === q.val) return node
    
    const left = helper(node.left, p, q)
    const right = helper(node.right, p ,q)
    
    return (left && right) ? node : (left || right) 
}
