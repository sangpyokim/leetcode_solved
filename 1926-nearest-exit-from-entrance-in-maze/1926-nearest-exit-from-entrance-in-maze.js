/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
var nearestExit = function(maze, entrance) {
    let res = 0
    const row = maze.length
    const col = maze[0].length
    const visited = maze.map(() => new Array(col).fill(false))
    const border = maze.map(() => new Array(col).fill(false))
    const dir = [[1,0],[0,1],[-1,0],[0,-1]]
    
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            border[i][0] = true
            border[0][j] = true
            border[i][col-1] = true
            border[row-1][j] = true
        }
    }

    let q = [entrance]
    while(q.length) {
        const len = q.length
        const temp = []
        for (let [i, j] of q) {
            if (visited[i][j]) continue
            visited[i][j] = true
            if (border[i][j] && (entrance[0] != i || entrance[1] != j)) {
                return res
            }
            
            for (let [x, y] of dir) {
                const dx = x + i
                const dy = y + j
                if (dx >= 0 && dx < row && dy >= 0 && dy < col && maze[dx][dy] === '.') {
                    temp.push([dx, dy])
                }
            }
            
        }
        res += 1
        q = temp
        if (q.length === 0) return -1
    }
    
    
    return res
};




