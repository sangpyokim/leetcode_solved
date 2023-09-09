/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var combinationSum4 = function(nums, target) {
//     if (nums.length === 1 && nums[0] > target) return 0
    
//     const dp = new Array(target).fill(0)
//     const len = nums.length
    
//     for (let x of nums) {
//         if (target - x >= 0) dp[x] = 1
//     }
    
//     for (let i = 1; i <= target; i++) {
//         for (let x of nums) {
//             if (dp[i-x] >= 0) {
//                 const cur = dp[i] ? dp[i] : 0
//                 const prev = dp[i-x] ? dp[i-x] : 0
//                 dp[i] = cur + prev
//             }            
//         }
//     }
    

//     return dp[dp.length-1]
// }; 

// O(N x M) nums x target
var combinationSum4 = function(N, T) {
    let dp = new Array(T+1).fill(0)
    dp[0] = 1
    for (let i = 0; i < T; i++) {
        if (!dp[i]) continue
        for (let num of N)
            if (num + i <= T) dp[i+num] += dp[i]
    }
    return dp[T]
};