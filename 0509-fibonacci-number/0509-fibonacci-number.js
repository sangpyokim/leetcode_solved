/**
 * @param {number} n
 * @return {number}
 */

// 하향식
function fib(n) {
    const memo = new Map()
    
    function helper(num) {
        if (num < 2) return num
        if (memo.has(num)) return memo.get(num)
        
        memo.set(num, helper(num-1) + helper(num-2))
        
        return memo.get(num)
    }
    
    return helper(n)
};


// 상향식
function fib(n) {
    const dp = []
    dp[0] = 0
    dp[1] = 1
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2]
    }
    return dp[n]
};