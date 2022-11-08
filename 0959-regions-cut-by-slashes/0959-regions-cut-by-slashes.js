/**
 * @param {string[]} grid
 * @return {number}
 */
var regionsBySlashes = function(grid) {
    let res = 0
    const len = grid.length
    const map = Array.from({ length: len*3 }, () => new Array(len*3).fill(true))

    
    for(let i = 0; i < len; i++) {
        for(let j = 0; j < len; j++) {
            if(grid[i].charAt(j) == '/') map[3*i+2][3*j] = map[3*i+1][3*j+1] = map[3*i][3*j+2] = false;
            if(grid[i].charAt(j) == '\\') map[3*i][3*j] = map[3*i+1][3*j+1] = map[3*i+2][3*j+2] = false;
        }
    }
    
    const dir = [[0,1],[1,0],[0,-1],[-1,0]]
    const row = len*3
    const col = len*3
    function helper(i, j) {
        if (!map[i][j]) return
        map[i][j] = false
        
        for (let [x, y] of dir) {
            const dx = i + x
            const dy = j + y
            if (dx >= 0 && dx < row && dy >= 0 && dy < col) {
                helper(dx, dy)
            }
        }
        
    }
    
    for (let i = 0; i < len*3; i++) {
        for (let j = 0; j < len*3; j++) {
            if (map[i][j]) {
                helper(i, j)
                res += 1
            }
        }
    }
    
    return res
};