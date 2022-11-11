const longestIncreasingPath = (matrix) => {
    if(!matrix || matrix.length === 0) return 0;
    
    const memo = new Array(matrix.length)
                        .fill(-1)
                        .map(row => new Array(matrix[0].length).fill(-1));
    
    let max = 0;
    for(let row = 0; row < matrix.length; row++) {
        for(let col = 0; col < matrix[0].length; col++) {
            max = Math.max(max, dfs(matrix, row, col, Number.MIN_SAFE_INTEGER, memo) );
        }
    }
    
    return max;
};

const dfs = (matrix, row, col, parent, memo) => {
    if(
        row < 0
        || row >= matrix.length
        || col < 0
        || col >= matrix[0].length
        || matrix[row][col] <= parent
    ) return 0;
    
    if(memo[row][col] === -1) {
        const   rowVector = [1, -1, 0, 0],
                colVector = [0, 0, 1, -1];

        let maxPath = 0;
        for(let dir = 0; dir < 4; dir++) {
			const maxForNode = 1 + dfs(matrix, row + rowVector[dir], col + colVector[dir], matrix[row][col], memo);
            maxPath = Math.max(maxPath, maxForNode);
        }
        
        memo[row][col] = maxPath;
    }
    
    return  memo[row][col];
};