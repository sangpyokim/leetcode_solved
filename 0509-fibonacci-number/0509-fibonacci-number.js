/**
 * @param {number} n
 * @return {number}
 */
function fib(n) {
    const dp = []
    dp[0] = 0
    dp[1] = 1
    dp[2] = 1
    
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2]
    }
    
    return dp[n]
};
