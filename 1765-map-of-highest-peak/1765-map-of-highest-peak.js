/**
 * @param {number[][]} isWater
 * @return {number[][]}
 */
var highestPeak = function(isWater) {
    const row = isWater.length
    const col = isWater[0].length
    let q = []
    const dir = [[1,0],[0,1],[-1,0],[0,-1]]
    const grid = isWater.map(() => new Array(col).fill(Infinity))
    
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (isWater[i][j] === 1) {
                grid[i][j] = 0
                q.push([i, j])
            }
        }
    }

    const visited = isWater.map(() => new Array(col).fill(false))
    let height = 0


    while(q.length) {
        const temp = []
        for (let [i, j] of q) {
            grid[i][j] = Math.min(grid[i][j], height)

            for (let [x, y] of dir) {
                const dx = i + x
                const dy = j + y
                if (dx >= 0 && dx < row && dy >= 0 && dy < col && !visited[dx][dy]) {
                    temp.push([dx, dy])
                    visited[dx][dy] = true
                }
            }
        } 
        height += 1
        q = temp
    }
            
    
    return grid
};