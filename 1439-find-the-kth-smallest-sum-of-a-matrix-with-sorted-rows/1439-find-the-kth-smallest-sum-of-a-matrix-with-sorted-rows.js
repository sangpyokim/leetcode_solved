
/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number}
 */
const MAX_VALUE = 5000;
var kthSmallest = function(mat, k) {
    const height = mat.length;
    const width = mat[0].length;
    
    const numCombinations = (row, sum, limit) => {
        if (sum > limit) return 0;
        if (row === height) return 1;
        let totalCombinations = 0;
        for (let value of mat[row]) {
            let count = numCombinations(row + 1, value + sum, limit);
            totalCombinations += count;
            if (count === 0 || totalCombinations > k) break;
        }
        return totalCombinations;
    }
    
    let left = height;
    let right = left * MAX_VALUE;
    while (left < right) {
        // value (mid) we are checking to see if the number of combinations
        // is less than or equal to this value (mid)
        const mid = (right + left) >>> 1

        const count = numCombinations(0, 0, mid);
        if (count < k) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left
};