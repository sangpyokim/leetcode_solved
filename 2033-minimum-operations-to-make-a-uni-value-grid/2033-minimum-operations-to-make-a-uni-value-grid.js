/**
 * @param {number[][]} grid
 * @param {number} x
 * @return {number}
 */
var minOperations = function(grid, x) {
    let res = 0
    const row = grid.length
    const col = grid[0].length
    const len = row*col
    const arr = []
    let sum = 0
    for(let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            const cur = grid[i][j]
            arr.push(cur)
            sum += cur
        }
    }
    
    arr.sort((a,b) => a-b)
    const mid = len >>> 1
    const temp = arr[mid]
    for (let num of arr) {
        const abs = Math.abs(num - temp)
        const floor = Math.floor(abs/x)
        
        if (floor !== abs/x) return -1
        res += floor
    }
    
    return res
};