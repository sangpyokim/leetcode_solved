/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
    let answer = 0
    const row = matrix.length
    const col = matrix[0].length
    const dir = [[1,0],[0,1],[-1,0],[0,-1]]
    const visited = Array.from({length: row}, () => new Array(col).fill(false))
    const table = Array.from({length: row}, () => new Array(col).fill(1))
    
    function helper(i, j, count) {
        if (visited[i][j] || count < table[i][j]) return
        answer = Math.max(answer, count)
        visited[i][j] = true
        
        table[i][j] = count

        for (let [x, y] of dir) {
            const dx = i + x
            const dy = j + y
            const cur = matrix[i][j]
            if (dx >= 0 && dx < row && dy >= 0 && dy < col && cur < matrix[dx][dy]) {
                helper(dx, dy, count+1)
            }
        }
        visited[i][j] = false
    }

    
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            helper(i, j, 1)
        }
    }
    
    
    return answer
    
};