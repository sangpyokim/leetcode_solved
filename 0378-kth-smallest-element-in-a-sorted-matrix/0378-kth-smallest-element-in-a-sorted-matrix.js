/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    const n = matrix.length
    let left = matrix[0][0], right = matrix[n-1][n-1]
    
    while(left < right) {
        const mid = (right + left) >> 1
        // mid보다 작은 수 찾기.
        let count = 0
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                const cur = matrix[i][j]
                if (cur <= mid) count++
                else break;
            }
        }
        if (count < k) left = mid+1
        else right = mid
    }
    
    return left
};