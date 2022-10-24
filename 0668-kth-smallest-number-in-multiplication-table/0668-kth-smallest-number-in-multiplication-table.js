/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function(m, n, k) {
    // left = 구구단은 1단부터, right = 구구단의 최대 수
    let left = 1, right = m*n
    
    while(left < right) {
        const mid = (right + left) >> 1
        if (helper(mid)) right = mid 
        else left = mid+1
    }
    function helper(mid) {
        let res = false
        let count = 0
        for (let i = 1; i <= m; i++) {
            count += Math.min(Math.floor(mid/i), n)
            if (count >= k) return true
        }
        return res
    }
    return left
};
// 여기에서 n의 의미는 한줄의 개수 === mid/i해도 n개를 넘지 못함.
// 5 1 => 5개, 3개
// 5 2 => 2개, 3개 
// 5 3 => 1개, 3개
// 5보다 작은 수의 개수는 3 2 1 => 6개 > k이기때문에 right의 값을 줄여서 더 작은값을 구함.