/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    if (text1.length < text2.length) return longestCommonSubsequence(text2, text1)
    const col = text1.length
    const row = text2.length
    const dp = Array.from({length: row+1}, () => new Array(col+1).fill(0))
    
    for (let i = 1; i <= row; i++) {
        const char = text2[i-1]
        dp[i][1] = dp[i-1][1] 
        
        for (let j = 1; j <= col; j++) {
            if (char === text1[j-1]) {
                dp[i][j] = 1 + dp[i-1][j-1]
            } else {
                dp[i][j] = Math.max(dp[i][j-1], dp[i-1][j])
            }
        }
    }

    return dp[row][col]
};