/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let res = 0
    const row = grid.length
    const col = grid[0].length
    const dir = [[1,0],[0,1],[-1,0],[0,-1]]
    
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (grid[i][j] === '1') {
                bfs(i, j)                
                res += 1
            }
        }
    }
    
    function bfs(i, j) {
        let q = [[i, j]]
        while(q.length) {
           const temp = []
           for (let [a, b] of q) {
               if (grid[a][b] === '0') continue
               grid[a][b] = '0'
               
               for (let [x, y] of dir) {
                   const dx = a + x
                   const dy = b + y
                   if (dx >= 0 && dx < row && dy >= 0 && dy < col) {
                       temp.push([dx, dy])
                   }
               }
            }
            q = temp        
        }
    }
    
    
    return res
};