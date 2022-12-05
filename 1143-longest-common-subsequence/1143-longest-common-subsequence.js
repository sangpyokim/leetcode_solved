/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
// var longestCommonSubsequence = function(text1, text2) {
//     // if (text1.length < text2.length) return longestCommonSubsequence(text2, text1)
//     const col = text1.length
//     const row = text2.length
//     const dp = Array.from({length: row+1}, () => new Array(col+1).fill(0))
    
//     for (let i = 1; i <= row; i++) {
//         const char = text2[i-1]
//         dp[i][1] = dp[i-1][1] 
        
//         for (let j = 1; j <= col; j++) {
//             if (char === text1[j-1]) {
//                 dp[i][j] = 1 + dp[i-1][j-1]
//             } else {
//                 dp[i][j] = Math.max(dp[i][j-1], dp[i-1][j])
//             }
//         }
//     }

//     return dp[row][col]
// };
var longestCommonSubsequence = function(text1, text2) {
    const col = text1.length
    const row = text2.length
    const memo = Array.from({length: col+1}, () => new Array(row+1))

    function recursion(i, j) {
        if (i === text1.length || j === text2.length) return 0;
        if (memo[i][j] !== undefined) return memo[i][j]
        if (text1.charAt(i) === text2.charAt(j)) {
            memo[i][j] = 1 + recursion(i + 1, j + 1)
            return memo[i][j];
        }

        memo[i][j] = Math.max(recursion(i + 1, j), recursion(i, j + 1));
        return memo[i][j]
    }

    return recursion(0, 0)
};