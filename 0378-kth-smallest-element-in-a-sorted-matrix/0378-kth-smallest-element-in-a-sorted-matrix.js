/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    matrix = matrix.flat()
    matrix.sort((a,b) => a-b)
    
    let left = 0, right = matrix.length-1
    
    return matrix[k-1]
};