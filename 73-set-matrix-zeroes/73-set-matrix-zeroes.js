/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const findZero = []
    const row = matrix.length
    const col = matrix[0].length
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (matrix[i][j] === 0) findZero.push([i, j])
        }
    }
    
    for (let [i ,j] of findZero) {
        setZero(i, j, matrix)
    }
};

function setZero(i, j, arr) {
    const row = arr.length
    const col = arr[0].length
    for (let x = 0; x < row; x++) {
        for (let y = 0; y < col; y++) {
            if (x === i || y === j) {
                arr[x][y] = 0
            }
        }
    }
    
}