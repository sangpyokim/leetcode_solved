/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 // 하향식
var uniquePaths = function(m, n) {
    const memo = Array.from({ length: m }, () => new Array(n))

    function helper(i, j) {
        if (i >= m || j >= n) return 0
        if (i === m-1 && j === n-1) return 1

        if (memo[i][j]) return memo[i][j]

        memo[i][j] = helper(i+1, j) + helper(i, j+1)

        return memo[i][j]
    }

    return helper(0, 0)
};
