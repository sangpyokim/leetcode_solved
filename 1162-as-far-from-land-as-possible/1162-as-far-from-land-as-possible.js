var maxDistance = function(grid) {
    let far = -1;
    let queue = [];
    let dirs = [[0,1],[1,0],[-1,0],[0,-1]];
    
    // get location of all land cells
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                queue.push([i,j]);
            }
        }
    }
    if (queue.length === grid.length * grid[0].length) {
        return -1;
    }
    while (queue.length > 0) {
        let len = queue.length;
        far++;
        for (let k = 0; k < len; k++) {
            let [i, j] = queue.shift();
            // grid[i][j] = 1;
            for (let dir of dirs) {
                let x = i + dir[0];
                let y = j + dir[1];
                if (x >= 0 && y >= 0 && x < grid.length && y < grid[i].length && grid[x][y] !== 1) {
                    queue.push([x,y]);
                    grid[x][y] = 1;
                }
            }
        }
    }
    return far === 0 ? -1 : far;
    
};