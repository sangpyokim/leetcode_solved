var isToeplitzMatrix = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    
    
    let answer = true

    for (let i = 0; i < m; i++) {
        // console.log("start", i, answer)
        recursion(i, 0, matrix[i][0])
        if (!answer) return false
    }
    for (let i = 1; i < n; i++) {
        // console.log("start", i, "!@#", answer)
        recursion(0, i, matrix[0][i])
        
        if (!answer) return false
    }
    
    function recursion(i, j, prev) {
        if (i >= m || j >= n) return
        
        // console.log(i, j, prev, matrix[i][j], answer)
        if (matrix[i][j] !== prev) return answer = false
        
        recursion(i+1, j+1, matrix[i][j])    
    }
    
    
	
    return answer;
};