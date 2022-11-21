/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let res = 0
    const row = grid.length
    const col = grid[0].length
    const dir = [[1,0],[0,1],[-1,0],[0,-1]]
    let visited = grid.map((arr) => [...arr])
    
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (grid[i][j] === 2) visited[i][j] = 'X'
            if (grid[i][j] === 1) visited[i][j] = Infinity
        }
    }
    
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (grid[i][j] === 2) {
                bfs(i, j)
            }
        }
    }
    
    function bfs(a,b) {
        let q = [[a,b]]
        let time = 0
        visited[a][b] = 0
        const v = grid.map((arr) => new Array(col).fill(false)) 
        
        while(q.length) {
            const temp = []
            for (let [i, j] of q) {
                
                if (grid[i][j] === 0 || v[i][j]) continue
                v[i][j] = true
                visited[i][j] = Math.min(visited[i][j], time)
                
                
                for (let [x, y] of dir) {
                    const dx = i + x
                    const dy = j + y
                    if (dx >= 0 && dx < row && dy >= 0 && dy < col && grid[dx][dy] === 1) {
                        temp.push([dx, dy])
                    }
                }
            }
            q = temp
            time += 1
        }

    }
    
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            res = Math.max(res, visited[i][j])
        }
    }
    
    return res === Infinity ? -1 : res
};