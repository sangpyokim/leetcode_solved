var isToeplitzMatrix = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    
    
    let answer = true

    for (let i = 0; i < m; i++) {
        const a = recursion(i, 0, matrix[i][0])
        if (!a) return false
    }
    for (let i = 1; i < n; i++) {
        const a = recursion(0, i, matrix[0][i])
        
        if (!a) return false
    }
    
    function recursion(i, j, prev) {
        if (i >= m || j >= n) return true        
        if (matrix[i][j] !== prev) return false
        
        const res = recursion(i+1, j+1, matrix[i][j])    
        
        return res
    }
    
    
	
    return true;
};