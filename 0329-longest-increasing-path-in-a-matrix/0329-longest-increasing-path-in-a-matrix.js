/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
    let answer = 0
    const row = matrix.length
    const col = matrix[0].length
    const dir = [[1,0],[0,1],[-1,0],[0,-1]]

    const table = Array.from({length: row}, () => new Array(col))
    
    function helper(i, j, min = Number.MIN_SAFE_INTEGER) {
        if (i < 0 || j < 0 || i >= row || j >= col || matrix[i][j] <= min) return 0;
        
        
        if (table[i][j] != null) {
            return table[i][j];
        }
        
        
        let max = 0
        let temp = 0
        const cur = matrix[i][j]
        for (let [x, y] of dir) {
            const dx = i + x
            const dy = j + y
            temp = Math.max(helper(dx, dy, cur), temp)
        }
        max = Math.max(temp, max) + 1
        table[i][j] = max
        return max
    }

    
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            answer = Math.max(answer,helper(i, j))
        }
    }
    
    
    return answer
};