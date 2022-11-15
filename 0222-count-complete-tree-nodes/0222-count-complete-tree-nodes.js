var countNodes = function(root) {
    
    function leftDepth(node) {
        if(!node) return 0;
        return leftDepth(node.left) + 1;
    }
    
    function rightDepth(node) {
        if(!node) return 0;
        return rightDepth(node.right) + 1;
    }
    
    function traverse(node) {
        const leftLen = leftDepth(node);
        const rightLen = rightDepth(node);
        
        if(leftLen === rightLen) return Math.pow(2, leftLen) - 1;
        return traverse(node.left) + traverse(node.right) + 1;
    }
    return traverse(root);
};