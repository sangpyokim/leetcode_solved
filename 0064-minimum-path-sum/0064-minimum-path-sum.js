/**
 * @param {number[][]} grid
 * @return {number}
 */
// var minPathSum = function(grid) {
//     let res = Infinity
//     const row = grid.length
//     const col = grid[0].length
//     const dir = [[1,0],[0,1]]
    
//     function helper(i, j, sum) {
//         if (i === row-1 && j === col-1) res = Math.min(sum, res)
        
//         for (let [x, y] of dir) {
//             const dx = i + x
//             const dy = j + y
//             if (dx >= 0 && dx < row && dy >= 0 && dy < col) {
//                 helper(dx, dy, sum + grid[dx][dy])
//             }
//         }    
//     }
    
//     helper(0,0, grid[0][0])
    
//     return res
// };
// 상향식
var minPathSum = function(grid) {
    const row = grid.length
    const col = grid[0].length
    const dp = Array.from({ length: row+1 }, () => new Array(col+1).fill(Infinity))
    
    dp[1][0] = 0
    
    for (let i = 1; i <= row; i++) {
        for (let j = 1; j <= col; j++) {
            dp[i][j] = grid[i-1][j-1] + Math.min(dp[i-1][j], dp[i][j-1])
        }
    }
    
    return dp[row][col]
};