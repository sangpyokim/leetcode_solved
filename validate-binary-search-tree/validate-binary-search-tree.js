var isValidBST = function(root) {   

       return helper(root, null, null);
};


function helper(root, min, max) {
    if (!root) return true;

    if ((min !== null && root.val <= min) || (max !== null && root.val >= max)) {
         return false;
    }
 
     
    return helper(root.left, min, root.val) && helper(root.right, root.val, max);
};