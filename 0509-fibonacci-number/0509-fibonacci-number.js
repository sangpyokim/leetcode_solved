/**
 * @param {number} n
 * @return {number}
 */

// 하향식
function fib(n) {
    const dp = []
    dp[0] = 0
    dp[1] = 1
    
    function helper(L) {
        if (L > n) return 
        
        dp[L] = dp[L-1] + dp[L-2]
        
        return helper(L+1)
    } 
    
    helper(2)
    
    
    return dp[n]
};