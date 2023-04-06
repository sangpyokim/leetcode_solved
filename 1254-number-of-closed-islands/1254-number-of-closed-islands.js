/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function(grid) {
    const row = grid.length, col = grid[0].length
    const dir = [[1,0],[0,1],[-1,0],[0,-1]]
    const isVal = (x, y) => x >= 0 && x < row && y >= 0 && y < col
    const isRound = (x, y) => x === 0 || x === row-1 || y === 0 || y === col-1
    let answer = 0
    
    
    for(let i = 1 ; i < row - 1; i++) {
        for (let j = 1; j < col-1; j++) {
            if (grid[i][j] === 0) {
                const result = bfs(i, j)
                if (result) answer += 1
            }
        }
    }
    
    
    
    return answer
    
    function bfs(a, b) {
        let q = [[a, b]], res = true
        grid[a][b] = 1
        
        while(q.length) {
            const temp = []
            
            for (let [i, j] of q) {
                for (let [x, y] of dir) {
                    const dx = i + x
                    const dy = j + y
                    if (isVal(dx, dx) && grid[dx][dy] === 0) {
                        if (isRound(dx, dy)) res = false
                        temp.push([dx,dy])
                        grid[dx][dy] = 1
                    }
                }
            }
            
            q = temp
        }
        
        return res
    }
    
};