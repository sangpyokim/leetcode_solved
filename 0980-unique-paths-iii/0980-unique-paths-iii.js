/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePathsIII = function(grid) {
    
    // 이동 횟수로 기준, 모든 space가 방문되었는지를 기준,
    let startPoint = []
    let endPoint = []
    let walk = 0
    const block = []
    for (let i in grid) {
        for (let j in grid[i]) {
            if (grid[i][j] === 1) startPoint = [i, j]
            else if (grid[i][j] === 2) endPoint = [i, j]
            
            if (grid[i][j] >= 0) walk++
            else if (grid[i][j] === -1) block.push([i, j])
        }
    }    
    
    let answer = 0
    const dir = [[0, 1], [1, 0], [0, -1], [-1, 0]]
    

    function BT(x, y, walkCount = 0) {
        if (grid[x][y] === '*' || walk !== walkCount && x == endPoint[0] && y == endPoint[1]) return
        if (walk == walkCount && x == endPoint[0] && y == endPoint[1]) return answer++
        
        for (let [i, j] of block) {
            if (x == i && y == j) return
        }
        

        dir.forEach(([i, j]) => {
            const dx = x*1 + i*1
            const dy = y*1 + j*1
            if (dx >= 0 && dx < grid.length && dy >= 0 && dy < grid[0].length) {
                const temp = grid[x][y]
                grid[x][y] = '*' 
                BT(dx, dy, walkCount+1)
                grid[x][y] = temp
            }
            
            
        })
        
    }
    BT(...startPoint, 1)
    
    return answer
};