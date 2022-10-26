/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const row = board.length
    const col = board[0].length
    const len = word.length
    const dir = [[1,0],[0,1],[-1,0],[0,-1]]
    const visited = Array.from({length: row}, () => new Array(col).fill(false))
    
    let answer = false
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            dfs(0, i,j)
            if (answer) return true
        }
    }
    

    function dfs(L, i, j) {
        if (board[i][j] !== word[L]) return
        if (L === len-1) return answer = true
        visited[i][j] = true
        
        for (let [x, y] of dir) {
            const dx = i + x
            const dy = j + y
            if (dx >= 0 && dx < row && dy >= 0 && dy < col && !visited[dx][dy]) {
                dfs(L+1, dx, dy)
            }
        }
        visited[i][j] = false
    }
    
    return answer
};