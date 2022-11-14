/**
 * @param {number[][]} grid
 * @return {number}
 */
var swimInWater = function(grid) {
    let answer = Infinity
    const row = grid.length
    const col = grid[0].length
    const dir = [[1,0],[0,1],[-1,0],[0,-1]]
    let right = Math.max(...grid.flat())
    let left = 0
    
    while(left <= right) {
        const mid = right + left >>> 1
        if (canSwim(mid)) {
            answer = Math.min(answer, mid)
            right = mid -1
        } else {
            left = mid + 1
        }
        
        
    }
    
    function canSwim(mid) {
        const visited = Array.from({ length: row }, () => new Array(col).fill(false))
        
        dfs(0,0,0,mid, visited)
        return visited[row-1][col-1]
    }
    
    function dfs(L, i, j, mid, visited) {
        if (visited[i][j] || grid[i][j] - mid > 0) return
        visited[i][j] = true
        
        
        for (let [x ,y] of dir) {
            const dx = i + x
            const dy = j + y
            
            if (dx >= 0 && dx < row && dy >= 0 && dy < col) {
                dfs(L+1, dx, dy, mid, visited)
            }
        }
    }
    
        
        
    return answer
};
    
    
    
    
    

// 0일부터 max일까지 dfs로 탐색
// dfs: 0,0 n-1,m-1까지 탐색가능한지