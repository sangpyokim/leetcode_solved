/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function(m, n, k) {
    let left = 1, right = m*n
    
    while(left < right) {
        const mid = (right + left) >> 1
        if (helper(mid) >= k) right = mid
        else left = mid +1
    }
    
    function helper(mid) {
        let count = 0
        for (let i = 1; i <= m; i++) {
            count += Math.min(Math.floor(mid / i), n)
        }
        return count
    }
    
    return left
};
