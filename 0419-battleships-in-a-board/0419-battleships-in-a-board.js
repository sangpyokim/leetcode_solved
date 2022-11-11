/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
    let answer = 0
    const row = board.length
    const col = board[0].length
    const dir = [[1,0],[0,1],[-1,0],[0,-1]]
    
    function helper(i,j) {
        if (board[i][j] === '.') return
        board[i][j] = '.'
        
        for (let [x, y] of dir) {
            const dx = i + x
            const dy = j + y
            if (dx >= 0 && dx < row && dy >= 0 && dy < col) {
                helper(dx, dy)
            }
        }
    }
    
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (board[i][j] === 'X') {
                helper(i, j)
                answer += 1
            }
        }
    }
    return answer
};