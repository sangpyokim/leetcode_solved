/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function(n) {
    
    const dp = Array.from({length:n+1}, () => new Array(5).fill(0))
    dp[1] = new Array(5).fill(1)
    
    for (let i = 2; i <= n; i++) {
        dp[i][0] = dp[i-1].reduce((a,b) => a+b)
        for (let j = 1; j < 5; j++) {
            dp[i][j] = dp[i][j-1] - dp[i-1][j-1]
        }
    }
    const len = dp.length-1
    return dp[len].reduce((a,b) => a+b)
};
// a e i o u
// 1 1 1 1 1
// 5 4 3 2 1
// 15 10 6 3 1



