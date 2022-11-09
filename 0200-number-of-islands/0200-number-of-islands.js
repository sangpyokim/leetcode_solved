/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let res = 0
    const row = grid.length
    const col = grid[0].length
    const dir = [[1,0],[0,1],[-1,0],[0,-1]]
    
    
    function helper(i, j) {
        if (grid[i][j] === '0') return
        grid[i][j] = '0'
        
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
            if (grid[i][j] === '1') {
                helper(i, j)
                res += 1
            }
        }
    } 
    
    
    return res
};