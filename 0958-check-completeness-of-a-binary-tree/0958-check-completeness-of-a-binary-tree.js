var isCompleteTree = function(root) {
    
    // Initialization
    let traversal_queue = [root];
    let prevNode = root;
    
    // Launch level-order traversal
    while( traversal_queue.length ){
        
        let curNode = traversal_queue.shift();
        
        if( curNode != null )
        {
            if( prevNode == null ){
                // Empty in the middle means this is not a complete binary tree (not left-compact)
                return false;
            }    
            
            traversal_queue.push( curNode.left );
            traversal_queue.push( curNode.right );
        }
        
        // update previous node
        prevNode = curNode;
    }
    
    return true;
};