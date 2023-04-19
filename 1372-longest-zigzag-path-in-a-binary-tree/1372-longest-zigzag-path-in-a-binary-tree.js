var longestZigZag = function(root) {
    let max = 0;
    
    const helper = (node, prev, length) => {
    
        if(node === null)
            return null;
        
        max = Math.max(max, length);
        
        helper(node.left, true , !prev ? length + 1 : 1);
        helper(node.right, false , prev ? length + 1 : 1);
    }
    
    
    helper(root, true, 0); 
    helper(root, false, 0);
    
    return max;
};